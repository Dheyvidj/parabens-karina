import { Modal, Button } from 'antd';

interface Props {
    isOpen: boolean;
    restart: () => void;
    decline: () => void;
    winner: string;
}

const ModalWinner = ({ isOpen, restart, decline, winner }: Props) => {
    return (
        <Modal
            title="Você perdeu"
            closable={false}
            open={isOpen}
            footer={[
                <Button type='primary' className='bg-blue-400' onClick={restart}>
                    Tentar de Novo
                </Button>,
                <Button key="decline" type='primary' danger onClick={decline}>
                    Desistir
                </Button>
            ]}
        >
            <h3 className='font-bold text-4xl'>{winner}</h3>
            <p className='text-2xl'> ganhou o jogo!</p>
        </Modal>
    );
};

export default ModalWinner;
