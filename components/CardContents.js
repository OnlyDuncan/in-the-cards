import CardBackImage from '../public/Images/CardBack.webp';
import Modal from 'react-modal';
import Image from 'next/image';
import { useState } from 'react';

export default function CardContents ({onClick, ...props}) {

    const tarotCard = props;
    const tarotTitle = `${tarotCard.Title}`;
    const tarotImage = `${tarotCard.Image}`;
    const tarotMeaning = `${tarotCard.Meaning}`;

    const [isOpen, setIsOpen] = useState(false);

    const styles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            overflowY: 'scroll'
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#404355',
            width: '40rem',
            maxWidth: '90%',
            maxHeight: '95vh',
            position: 'relative'
        }
    }

    return (
        <div className="card" onClick={onClick}>
            <div className="card-back">
                <Image
                    src={tarotImage}
                    width="0"
                    height="0"
                    sizes="100vh"
                    className="h-full w-auto"
                    alt="Tarot Card"
                    onClick={() => setIsOpen(true)}
                />
            </div>
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={styles} className="card-back">
                <div className="flex-col justify-center">
                    <div className="flex">
                        <button onClick={() => setIsOpen(false)} className="mr-0 ml-auto p-3">
                            <Image
                                src="/Images/Close.svg"
                                width={30}
                                height={30}
                            />
                        </button>
                    </div>
                    <br />
                    <h1
                        className="text-4xl text-center justify-center text-white"
                    >
                        {tarotTitle}
                    </h1>
                    <br />
                    <div className="flex justify-center">
                        <Image
                            src={tarotImage}
                            width="0"
                            height="0"
                            sizes="100vh"
                            className="h-60 w-auto"
                            alt={tarotTitle}
                        />
                    </div>
                    <br />
                    <p className="flex text-center text-white pb-10 px-10">
                        {tarotMeaning}
                    </p>
                </div>
            </Modal>
            <div className="card-front">
                <Image
                    src={CardBackImage}
                    width="0"
                    height="0"
                    sizes="100vh"
                    className="h-full w-auto"
                    alt="Back of Card"
                />
            </div>
        </div>
    );
}