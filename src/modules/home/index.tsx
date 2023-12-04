import { Button } from "antd";
import Particle from "../../components/Particle";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import parabens from "../../assets/parabens.mp3";

export default function Home() {
    const navigate = useNavigate();
    const [start, setStart] = useState(false);
    const audio = new Audio('https://p.scdn.co/mp3-preview/aa9ff3835a9fb8ece7b55ac6f0f691e1b7c64cbb?cid=eb5bb26ee60545f5a02ef3c195a7b5f0')
    audio.loop = true;

    return (
        <>
            {start ? (
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
                            <Button onClick={() => { audio.remove(); navigate('/game-old') }} className="bg-blue-400" type="primary">Começar</Button>
                        </div>
                    </div>
                </>

            ) : (
                <div className="h-full w-full flex items-center justify-center">
                    <Button
                        type="primary" onClick={() => { setStart(true); audio.play(); }}
                        className="bg-blue-400 font-bold h-10 w-28 text-xl"
                    >
                        INICIAR
                    </Button>
                </div>)}

        </>
    )
}