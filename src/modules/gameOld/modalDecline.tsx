
import { Modal, Button } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
    isOpen: boolean;
}

const ModalDecline = ({ isOpen }: Props) => {
    const [position, setPosition] = useState({ left: 0, top: 0 });
    const navigate = useNavigate()

    const moveButtonRandomly = () => {
        const screenWidth = window.innerWidth - 2100; // ajuste conforme necessário
        const screenHeight = window.innerHeight - 400; // ajuste conforme necessário

        const randomX = Math.floor(Math.random() * screenWidth);
        const randomY = Math.floor(Math.random() * screenHeight);

        setPosition({ left: 0 , top: randomY });
    };
    return (
        <Modal
            title="Por que está desistindo?"
            open={isOpen}
            footer={<></>}
            closable={false}
        >
            <div className='w-full flex items-center justify-center gap-5 h-24'>
                <Button onClick={moveButtonRandomly} style={{ left: `${position.left}px`, top: `${position.top}px` }} type="primary" className='bg-blue-400' >Foi Roubado</Button>

                <Button onClick={()=> navigate('/final')} type="primary" danger>Sou muito ruim</Button>
            </div>
        </Modal>
    );
};

export default ModalDecline;
