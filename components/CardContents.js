"use client";

import Modal from 'react-modal';
import Image from 'next/image';
import { useMemo } from 'react';
import { useState } from 'react';

export default function CardContents ({onClick, ...props}) {

    // Correct tarot cards are being passed in and displayed on the local server. 
    // Modal shows incorrect cards, despite Card and Title logging correctly.

    let tarotCard = props;

    let tarotTitle = tarotCard.Title;
    let tarotOrientation = tarotCard.Orientation;
    let tarotImage = tarotCard.Image;
    let tarotMeaning = tarotCard.Meaning;

    let values = useMemo(() => [tarotTitle, tarotOrientation, tarotImage, tarotMeaning]);

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
        <div className="card" onClick={onClick} style={{ backgroundColor: "#322238" }}>
            <div className="hidden">
                {values = useMemo(() => [tarotTitle, tarotOrientation, tarotImage, tarotMeaning])}
            </div>
            <div className="card-back">
                <Image
                    src={`/Images/${values[2]}.webp`}
                    width="0"
                    height="0"
                    sizes="100vh"
                    className={`h-full w-auto ${values[1] === "Reversed" ? "reversed" : ""} ${values[1] === "Upright" ? "" : "reversed"}`}
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
                        {values[0]}
                    </h1>
                    <br />
                    <div className="flex justify-center">
                        <Image
                            src={`/Images/${values[2]}.webp`}
                            width="0"
                            height="0"
                            sizes="100vh"
                            className={`h-60 w-auto ${values[1] === "Reversed" ? "reversed" : ""} ${values[1] === "Upright" ? "" : "reversed"}`}
                            alt={values[0]}
                        />
                    </div>
                    <br />
                    <p className="flex halcom text-center text-white pb-10 px-10">
                        {values[3]}
                    </p>
                </div>
            </Modal>
            <div className="card-front">
                <Image
                    src="/Images/CardBack.webp"
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