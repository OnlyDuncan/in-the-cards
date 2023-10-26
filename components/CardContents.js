import CardBackImage from '../public/Images/CardBack.webp';
import Modal from 'react-modal';
import Image from 'next/image';
import { useState } from 'react';

export default function CardContents ({onClick, ...props}) {

    let tarotCard = props;
    let tarotTitle = `${tarotCard.Title}`;
    let tarotOrientation = `${tarotCard.Orientation}`;
    let tarotImage = `${tarotCard.Image}`;
    let tarotMeaning = `${tarotCard.Meaning}`;

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
            maxHeight: '90vh',
            position: 'relative',
            overflowY: 'scroll'
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
                    className={`h-full w-auto ${tarotOrientation === "Reversed" ? "reversed" : ""} ${tarotOrientation === "Upright" ? "" : "reversed"}`}
                    alt="Tarot Card"
                    onClick={() => setIsOpen(true)}
                />
            </div>
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={styles}>
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
                        className="darcy text-4xl text-center justify-center text-white"
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
                            className={`h-60 w-auto ${tarotOrientation === "Reversed" ? "reversed" : ""} ${tarotOrientation === "Upright" ? "" : "reversed"}`}
                            alt={tarotTitle}
                        />
                    </div>
                    <br />
                    <p className="flex halcom text-center text-white pb-10 px-10">
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