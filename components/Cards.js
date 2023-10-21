"use client";

import CardContents from './CardContents';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function deckBuilder(arcanaArray) {

    let deckArray = [];

    for (let i = 0; i < 22; i++) {
        arcanaArray[i] = shuffle(arcanaArray[i]);
        deckArray.push(arcanaArray[i][0]);
    }
    
    deckArray = shuffle(deckArray);

    return [deckArray[0], deckArray[1], deckArray[2]];

}

export default function Cards ({...props}) {
    const cardArray = [];

    for (let i = 0; i < 22; i++) {
        let tempArray = [];
        for (let j = 0; j < 2; j++) {
            tempArray.push(props[i][j]);
        }
        cardArray.push(tempArray);
    }

    const [showFrontPast, setShowFrontPast] = useState(true);
    const [showFrontPresent, setShowFrontPresent] = useState(true);
    const [showFrontFuture, setShowFrontFuture] = useState(true);
    const [spread, setSpread] = useState(deckBuilder(cardArray));

    const handleClick = () => {
        setSpread(deckBuilder(cardArray));
        // location.reload();
    }

    return (
        <div className="flex flex-col justify-center">
            <div className="flex justify-center mb-2">
                <button type="button" onClick={() => {
                    setSpread(deckBuilder(cardArray));
                    location.reload();
                }}>
                    Redo
                </button>
            </div>
            <div className="flex flex-row justify-center">
                <div className="flex flex-col justify-center">
                    <div className="ml-2">
                        <div className="flippable-card-container">
                            <CSSTransition
                                in={showFrontPast}
                                timeout={300}
                                classNames='flip'
                            >
                                <CardContents {...spread[0]} onClick={() => {
                                    setShowFrontPast((v) => !v);
                                }} />
                            </CSSTransition>
                        </div>
                    </div>
                    <div className="flex justify-center text-align align-center ml-2 mt-2">
                        The Past
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="ml-2 mr-2">
                        <div className="flippable-card-container">
                            <CSSTransition
                                in={showFrontPresent}
                                timeout={300}
                                classNames='flip'
                            >
                                <CardContents {...spread[1]} onClick={() => {
                                    setShowFrontPresent((v) => !v);
                                }} />
                            </CSSTransition>
                        </div>
                    </div>
                    <div className="flex justify-center text-align align-center ml-2 mr-2 mt-2">
                        The Present
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="mr-2">
                        <div className="flippable-card-container">
                            <CSSTransition
                                in={showFrontFuture}
                                timeout={300}
                                classNames='flip'
                            >
                                <CardContents {...spread[2]} onClick={() => {
                                    setShowFrontFuture((v) => !v);
                                }} />
                            </CSSTransition>
                        </div>
                    </div>
                    <div className="flex justify-center text-align align-center mr-2 mt-2">
                        The Future
                    </div>
                </div>
            </div>
        </div>
    );
}