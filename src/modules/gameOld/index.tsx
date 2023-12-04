import { useState } from "react";
import { Button, Modal, Progress } from 'antd';
import ModalSelectPlayer from "./modalSelectPlayer";
import ModalWinner from "./modalWinner";
import ModalDecline from "./modalDecline";

export default function GameOld() {
    const lines = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    const [openModalSelectPlayer, setOpenModalSelectPlayer] = useState(true);
    const [itemsX, setItemsX] = useState<Array<number>>([]);
    const [itemsO, setItemsO] = useState<Array<number>>([]);
    const [actualPlayer, setActualPlayer] = useState<"X" | "O">();
    const [openModalWinner, setOpenModalWinner] = useState(false);
    const [openModalDecline, setOpenModalDecline] = useState(false);
    const [percent, setPercent] = useState<number>(0);


    async function robalheira(item: number, setItems: React.Dispatch<React.SetStateAction<number[]>>) {
        if (item <= 3) {

            setItems([4, 5, 6])
        }
        if (item <= 6 && item > 3) {
            setItems([7, 8, 9])
        }
        if (item <= 9 && item > 6) {
            setItems([1, 2, 3])
        }

        setPercent(20);

         setTimeout(() => {
            setPercent(50);
        }, 2000)
        
        setTimeout(() => {
            setPercent(100);
            setOpenModalWinner(true)
        }, 3000)

    }

    function setItems(item: number) {
        if (itemsX.includes(item) || itemsO.includes(item) || percent > 0) {
            return;
        }
        if (actualPlayer === "X") {
            setItemsX((items) => [...items, item]);
            setActualPlayer("O");
            robalheira(item, setItemsO);
        }
        if (actualPlayer === "O") {
            setItemsO((items) => [...items, item]);
            setActualPlayer("X");
            robalheira(item, setItemsX);
        }
    };

    function userSelectPlayer(player: "X" | "O") {
        setActualPlayer(player);
        setOpenModalSelectPlayer(false);
    }

    function restart() {
        setPercent(0)
        setItemsO([]);
        setItemsX([]);
        setActualPlayer(undefined);
        setOpenModalWinner(false);
        setOpenModalSelectPlayer(true);
    }

    function decline() {
        setOpenModalWinner(false);
        setOpenModalDecline(true)
        setItemsO([]);
        setItemsX([]);
        setActualPlayer(undefined);

    }

    return (
        <div className="flex flex-col items-center justify-center gap-10" >
            <h2>Vez do jogador: {actualPlayer}</h2>
            <div>

                {lines.map((line, index) => (
                    <div key={index * 2} className="flex w-full flex-row w-40 items-center justify-center flex-wrap">
                        {line.map((item, index) => (
                            <button
                                key={index * 4}
                                type="button"
                                onClick={() => setItems(item)}
                                disabled={actualPlayer === undefined}
                                className="flex items-center justify-center text-3xl  border-black w-20 h-20">
                                {itemsX.includes(item) && "X"}
                                {itemsO.includes(item) && "O"}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
            <>
                {percent >= 10 &&
                    <div>
                        <p>Processando indormações...</p>
                        <Progress className="" type="circle" percent={percent} />
                    </div>
                }
            </>

            <ModalSelectPlayer isOpen={openModalSelectPlayer} userSelectPlayer={userSelectPlayer} />
            <ModalWinner isOpen={openModalWinner} decline={decline} restart={restart} winner={actualPlayer as string} />
            <ModalDecline isOpen={openModalDecline} />
        </div>
    )
}