import CardBackImage from '../public/Images/CardBack.webp';
import Image from 'next/image';
import { useState } from 'react';

export default function CardContents ({onClick, ...props}) {

    return (
        <div className="card" onClick={onClick}>
            <div className="card-back">
                <Image
                    src={props.Image}
                    width="0"
                    height="0"
                    sizes="100vh"
                    className="h-full w-auto"
                    alt="Tarot Card"
                />
            </div>
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