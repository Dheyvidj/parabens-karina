
import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

// Adicione a imagem da sua esposa na pasta 'public' e atualize o caminho aqui
const IMAGE_URL = '/esposa.jpg'; 

export function Game() {
    const [timeLeft, setTimeLeft] = useState(60);
    const [showEndMessage, setShowEndMessage] = useState(false);
    const [gaveUp, setGaveUp] = useState(false);
    const [clicks, setClicks] = useState([]); // To store click coordinates
    const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (timeLeft > 0 && !showEndMessage) {
            const timer = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else if (timeLeft === 0) {
            setShowEndMessage(true);
        }
    }, [timeLeft, showEndMessage]);

    const handleImageClick = (e) => {
        if (showEndMessage) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const id = Date.now();

        setClicks(prev => [...prev, { id, x, y }]);

        setTimeout(() => {
            setClicks(prev => prev.filter(click => click.id !== id));
        }, 1500);
    };

    const handleGiveUp = () => {
        setGaveUp(true);
        setShowEndMessage(true);
    };

    // O layout do jogo em si, agora com seu próprio padding
    const renderGame = () => (
        <div className="w-full max-w-5xl mx-auto p-4">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center">Jogo dos 7 Erros</h1>
            <p className="text-md md:text-lg mb-4 text-center">Encontre os 7 erros na imagem abaixo. Você tem {timeLeft} segundos!</p>
            
            <div 
                className="relative w-full cursor-pointer"
                onClick={handleImageClick}
            >
                <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                    <img src={IMAGE_URL} alt="Original" className="w-full h-auto rounded-lg shadow-md pointer-events-none" />
                    <img src={IMAGE_URL} alt="Com erros" className="w-full h-auto rounded-lg shadow-md pointer-events-none" />
                </div>

                {clicks.map(({ id, x, y }) => (
                    <div 
                        key={id}
                        className="absolute text-white bg-red-600 px-2 py-1 rounded-lg text-sm md:text-md font-bold shadow-lg animate-pulse"
                        style={{ top: `${y}px`, left: `${x}px`, transform: 'translate(-50%, -50%)', zIndex: 10 }}
                    >
                        Não é aqui!
                    </div>
                ))}
            </div>

            <div className="text-center mt-6">
                <button
                    onClick={handleGiveUp}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                >
                    Desistir
                </button>
            </div>
        </div>
    );

    // O layout da mensagem final, com o texto super pessoal
    const renderEndMessage = () => (
        <>
            <Confetti width={windowSize.width} height={windowSize.height} />
            <div className="text-center max-w-3xl p-4 animate-fade-in">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Parabéns, meu amor!</h1>
                
                <p className="text-lg mb-4">
                    A verdade é que eu te fiz procurar por um erro que não existe, porque pra mim você é perfeita em cada detalhe.
                </p>
                <p className="text-lg mb-4">
                    Neste dia mais que especial, quero deixar claro minha gratidão por ter você ao meu lado, compartilhando muitas alegrias, superando cada desafios e construindo lindas memórias. Sua simples presença enche minha vida de amor e alegria.
                </p>
                <p className="text-lg mb-4">
                    Poucas coisas na vida podemos garantir total certeza, mas se eu tivesse que escolher apenas uma, pra dizer que essa é a coisa que mais tenho certeza, é que eu te amo, e poder estar ao seu lado compartilhando a vida é o melhor presente que eu poderia ter.
                </p>
                <p className="text-lg mb-4">
                    Lembre-se de que estou aqui para apoiar, amar e ficar orgulhoso por cada conquista sua. Você é a luz que ilumina meu mundo, e quero passar muitos mais aniversários ao seu lado.
                </p>
                <p className="text-xl font-bold mt-8">
                    Te amo infinitamente e aproveita seu dia, minha pretinha.
                </p>
            </div>
        </>
    );

    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-100">
            {showEndMessage ? renderEndMessage() : renderGame()}
        </div>
    );
}
