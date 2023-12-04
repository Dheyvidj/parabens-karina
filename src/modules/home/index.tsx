import { Button } from "antd";
import Particle from "../../components/Particle";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
    const navigate = useNavigate();
    const audio = new Audio('https://p.scdn.co/mp3-preview/aa9ff3835a9fb8ece7b55ac6f0f691e1b7c64cbb?cid=eb5bb26ee60545f5a02ef3c195a7b5f0')

    useEffect(()=> {
    audio.play();
    audio.loop = true;

    },[])
    return (
        <>
            <Particle />
            <div className="">
                <div className="mb-32 ">
                    <h1 className="text-4xl">Feliz anivesário!!</h1>
                    <h2 className="text-2xl">Eu te amo muito...</h2>
                </div>
                <div className="text-center gap-3 flex flex-col">
                    <p>Como hoje é um dia especial vou te dar a chance de ganhar um presente muito especial também.</p>
                    <p>Mas para isso acontecer tem que me vencer em um desafio primeiro...</p>
                    <p>O JOGO DA VELHA:</p>
                    <Button onClick={()=> {audio.pause();navigate('/game-old')}} className="bg-blue-400" type="primary">Começar</Button>
                </div>
            </div>
        </>
    )
}