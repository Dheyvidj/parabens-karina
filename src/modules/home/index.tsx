
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Confetti from 'react-confetti';

// Trilha sonora para o momento especial
const audio = new Audio('https://p.scdn.co/mp3-preview/aa9ff3835a9fb8ece7b55ac6f0f691e1b7c64cbb?cid=eb5bb26ee60545f5a02ef3c195a7b5f0');
audio.loop = true;

export default function Home() {
    const navigate = useNavigate();
    const [start, setStart] = useState(false);

    const handleStartGame = () => {
        audio.pause();
        audio.currentTime = 0;
        navigate('/game');
    };

    const handleInitiateSurprise = () => {
        setStart(true);
        audio.play();
    };

    // Garante que o áudio pare se o usuário sair da página
    useEffect(() => {
        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-100 p-4 text-center">
            <Confetti width={windowSize.width} height={windowSize.height} />
            {start ? (
                <>
                    <div className="mb-10 max-w-xl">
                        <h1 className="text-4xl font-bold mb-4">Feliz aniversário!!</h1>
                        <h2 className="text-2xl">Eu te amo muito...</h2>
                    </div>
                    <div className="gap-3 flex flex-col max-w-xl">
                        <p className="text-lg">Como hoje é um dia especial, preparei uma pequena surpresa para você.</p>
                        <p className="text-lg">Para descobrir, você precisa passar por um desafio que testará sua atenção aos detalhes...</p>
                        <p className="text-xl font-bold mt-2">O JOGO DOS 7 ERROS:</p>
                        <Button
                            onClick={handleStartGame}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-lg h-auto py-2 px-6 mt-4 self-center"
                            type="primary"
                        >
                            Começar o Desafio
                        </Button>
                    </div>
                </>
            ) : (
                <Button
                    type="primary"
                    onClick={handleInitiateSurprise}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-12 w-32 text-xl animate-pulse"
                >
                    INICIAR
                </Button>
            )}
        </div>
    );
}
