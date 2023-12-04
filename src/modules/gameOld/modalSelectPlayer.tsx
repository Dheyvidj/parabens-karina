import { Button, Modal } from "antd";

interface Props {
    userSelectPlayer: (player: "X" | "O") => void;
    isOpen: boolean;
}

export default function ModalSelectPlayer({userSelectPlayer, isOpen}: Props) {
    return(
        <Modal title="Qual você prefere?" open={isOpen} closable={false} footer={<div></div>} >
                <div className="w-full flex items-center justify-center gap-5">
                    <Button className="bg-blue-200" onClick={()=> userSelectPlayer("X")}>X</Button>
                    <Button className="bg-red-200" onClick={()=> userSelectPlayer("O")} >O</Button>
                </div>
            </Modal>
    )
}