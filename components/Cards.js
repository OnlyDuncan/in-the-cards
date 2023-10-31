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

export default function Cards (props) {

    const cardArray = [];

    Object.values(props).forEach((value) => {
        cardArray.push(value);
    });

    const [showFrontPast, setShowFrontPast] = useState(true);
    const [showFrontPresent, setShowFrontPresent] = useState(true);
    const [showFrontFuture, setShowFrontFuture] = useState(true);
    const [spread, setSpread] = useState(deckBuilder(cardArray));

    const handleClick = () => {
        setSpread(deckBuilder(cardArray));
    }

    return (
        <div className="flex flex-col justify-center" style={{ backgroundColor: "#322238", width: "100vw" }}>
            <div className="flex justify-center">
                <h1 className="text-4xl text-center mt-4 darcy text-white">
                    In the Cards
                </h1>
            </div>
            <br />
            <div className="flex justify-center">
                <div className="flex-col justify-center">
                    <p className="flex text-center text-white halcom" style={{ width: "40vw" }}>
                        Click on a facedown card to flip it, and click on a faceup card to read its meaning. Click the Redo button to get a different spread of cards.
                    </p>
                    <p className="flex text-sm text-center mt-1 text-white halcom" style={{ width: "40vw" }}>
                        Due to issues I am currently working to resolve, I would recommend hitting Redo 5 - 6  times for best results.
                    </p>
                </div>
            </div>
            <br />
            <div className="flex justify-center mb-2">
                <button type="button" className="text-white darcy" onClick={handleClick}>
                    Redo
                </button>
            </div>
            <div className="flex justify-center align-center">
                <div className="flex flex-col md:flex-row justify-center">
                    <div className="flex flex-col justify-center mb-12 md:mb-0">
                        <div className="md:ml-2">
                            <div className="flippable-card-container">
                                <CSSTransition
                                    in={showFrontPast}
                                    timeout={300}
                                    classNames='flip'
                                >
                                    <CardContents {...spread[0]} onClick={() => {
                                        setShowFrontPast(false);
                                    }} />
                                </CSSTransition>
                                <div className="flex justify-center darcy text-align align-center text-white ml-2 mt-2">
                                    The Past
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center mb-12 md:mb-0">
                        <div className="md:ml-3 md:mr-3">
                            <div className="flippable-card-container">
                                <CSSTransition
                                    in={showFrontPresent}
                                    timeout={300}
                                    classNames='flip'
                                >
                                    <CardContents {...spread[1]} onClick={() => {
                                        setShowFrontPresent(false);
                                    }} />
                                </CSSTransition>
                                <div className="flex justify-center darcy text-align align-center text-white ml-2 mr-2 mt-2">
                                    The Present
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center mb-12 md:mb-0">
                        <div className="md:mr-2">
                            <div className="flippable-card-container">
                                <CSSTransition
                                    in={showFrontFuture}
                                    timeout={300}
                                    classNames='flip'
                                >
                                    <CardContents {...spread[2]} onClick={() => {
                                        setShowFrontFuture(false);
                                    }} />
                                </CSSTransition>
                                <div className="flex justify-center darcy text-align align-center text-white mr-2 mt-2">
                                    The Future
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}