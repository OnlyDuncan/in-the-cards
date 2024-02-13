"use client";

import CardContents from './CardContents';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';
import Tabs from './Tabs';

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
};

function deckBuilder(arcanaArray) {

    let deckArray = [];

    for (let i = 0; i < arcanaArray.length; i++) {
        arcanaArray[i] = shuffle(arcanaArray[i]);
        deckArray.push(arcanaArray[i][0]);
    }
    
    deckArray = shuffle(deckArray);


    return [deckArray[0], deckArray[1], deckArray[2], deckArray[3], deckArray[4],
            deckArray[5], deckArray[6], deckArray[7], deckArray[8], deckArray[9]];

};

export default function Cards (props) {

    const cardArray = [];

    Object.values(props).forEach((value) => {
        cardArray.push(value);
    });

    const [showFrontPast, setShowFrontPast] = useState(true);
    const [showFrontPresent, setShowFrontPresent] = useState(true);
    const [showFrontFuture, setShowFrontFuture] = useState(true);
    const [showFrontPresentSituation, setShowFrontPresentSituation] = useState(true);
    const [showFrontInfluences, setShowFrontInfluences] = useState(true);
    const [showFrontChallenges, setShowFrontChallenges] = useState(true);
    const [showFrontFinalOutcome, setShowFrontFinalOutcome] = useState(true);
    const [showFrontTheme, setShowFrontTheme] = useState(true);
    const [showFrontPresentCeltic, setShowFrontPresentCeltic] = useState(true);
    const [showFrontChallengeCeltic, setShowFrontChallengeCeltic] = useState(true);
    const [showFrontSubconscious, setShowFrontSubconscious] = useState(true);
    const [showFrontPastCeltic, setShowFrontPastCeltic] = useState(true);
    const [showFrontFutureCeltic, setShowFrontFutureCeltic] = useState(true);
    const [showFrontNear, setShowFrontNear] = useState(true);
    const [showFrontInternal, setShowFrontInternal] = useState(true);
    const [showFrontExternal, setShowFrontExternal] = useState(true);
    const [showFrontHopesFears, setShowFrontHopesFears] = useState(true);
    const [showFrontOutcomeCeltic, setShowFrontOutcomeCeltic] = useState(true);
    const [spread, setSpread] = useState(deckBuilder(cardArray));

    const handleClick = () => {
        setSpread(deckBuilder(cardArray));
    };

    const tabs = [
        { id: 1, label: '3 Card Spread', content:
            <div>
                <div className="flex justify-center align-center mt-2">
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
                                    <div className="flex justify-center darcy text-center text-white mt-2 whitespace-nowrap">
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
                                    <div className="flex justify-center darcy text-center text-white mt-2 whitespace-nowrap">
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
                                    <div className="flex justify-center darcy text-center text-white mt-2 whitespace-nowrap">
                                        The Future
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        },    
        // { id: 2, label: '5 Card Spread', content: 
        //     <div>
        //         <div className="flex justify-center align-center">
        //             <div className="flex flex-col md:flex-row justify-center">
        //                 <div className="flex flex-col justify-center mb-12 md:mb-0">
        //                     <div className="md:ml-2">
        //                         <div className="flippable-card-container">
        //                             <CSSTransition
        //                                 in={showFrontPresentSituation}
        //                                 timeout={300}
        //                                 classNames='flip'
        //                             >
        //                                 <CardContents {...spread[0]} onClick={() => {
        //                                     setShowFrontPresentSituation(false);
        //                                 }} />
        //                             </CSSTransition>
        //                             <div className="flex justify-center darcy text-center text-white mt-2 whitespace-nowrap">
        //                                 Present Situation
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="flex flex-col justify-center mb-12 md:mb-0">
        //                     <div className="md:ml-3 md:mr-3">
        //                         <div className="flippable-card-container">
        //                             <CSSTransition
        //                                 in={showFrontInfluences}
        //                                 timeout={300}
        //                                 classNames='flip'
        //                             >
        //                                 <CardContents {...spread[1]} onClick={() => {
        //                                     setShowFrontInfluences(false);
        //                                 }} />
        //                             </CSSTransition>
        //                             <div className="flex justify-center darcy text-center text-white mt-2 whitespace-nowrap">
        //                                 Influences
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="flex flex-col justify-center mb-12 md:mb-0">
        //                     <div className="md:mr-2">
        //                         <div className="flippable-card-container">
        //                             <CSSTransition
        //                                 in={showFrontChallenges}
        //                                 timeout={300}
        //                                 classNames='flip'
        //                             >
        //                                 <CardContents {...spread[2]} onClick={() => {
        //                                     setShowFrontChallenges(false);
        //                                 }} />
        //                             </CSSTransition>
        //                             <div className="flex justify-center darcy text-center text-white mt-2 whitespace-nowrap">
        //                                 Challenges
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="flex flex-col justify-center mb-12 md:mb-0">
        //                     <div className="md:mr-2">
        //                         <div className="flippable-card-container">
        //                             <CSSTransition
        //                                 in={showFrontFinalOutcome}
        //                                 timeout={300}
        //                                 classNames='flip'
        //                             >
        //                                 <CardContents {...spread[3]} onClick={() => {
        //                                     setShowFrontFinalOutcome(false);
        //                                 }} />
        //                             </CSSTransition>
        //                             <div className="flex justify-center darcy text-center text-white mt-2 whitespace-nowrap">
        //                                 Final Outcome
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="flex flex-col justify-center mb-12 md:mb-0">
        //                     <div className="md:mr-2">
        //                         <div className="flippable-card-container">
        //                             <CSSTransition
        //                                 in={showFrontTheme}
        //                                 timeout={300}
        //                                 classNames='flip'
        //                             >
        //                                 <CardContents {...spread[4]} onClick={() => {
        //                                     setShowFrontTheme(false);
        //                                 }} />
        //                             </CSSTransition>
        //                             <div className="flex justify-center darcy text-center text-white mt-2 whitespace-nowrap">
        //                                 Theme
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div> 
        // },
        // { id: 3, label: 'Celtic Cross', content: 
        //     <div>
        //         <div className="flex justify-center align-center">
        //             <div className="flex flex-col md:flex-row justify-center">
        //                 <div className="flex flex-col justify-center mb-12 md:mb-0">
        //                     <div className="md:ml-2">
        //                         <div className="flippable-card-container">
        //                             <CSSTransition
        //                                 in={showFrontPresentCeltic}
        //                                 timeout={300}
        //                                 classNames='flip'
        //                             >
        //                                 <CardContents {...spread[0]} onClick={() => {
        //                                     setShowFrontPresentCeltic(false);
        //                                 }} />
        //                             </CSSTransition>
        //                             <div className="flex justify-center darcy text-center text-white mt-2 whitespace-nowrap">
        //                                 Present
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="flex flex-col justify-center mb-12 md:mb-0">
        //                     <div className="md:ml-3 md:mr-3">
        //                         <div className="flippable-card-container">
        //                             <CSSTransition
        //                                 in={showFrontChallengeCeltic}
        //                                 timeout={300}
        //                                 classNames='flip'
        //                             >
        //                                 <CardContents {...spread[1]} onClick={() => {
        //                                     setShowFrontChallengeCeltic(false);
        //                                 }} />
        //                             </CSSTransition>
        //                             <div className="flex justify-center darcy text-center text-white mt-2 whitespace-nowrap">
        //                                 Challenge
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="flex flex-col justify-center mb-12 md:mb-0">
        //                     <div className="md:mr-2">
        //                         <div className="flippable-card-container">
        //                             <CSSTransition
        //                                 in={showFrontSubconscious}
        //                                 timeout={300}
        //                                 classNames='flip'
        //                             >
        //                                 <CardContents {...spread[2]} onClick={() => {
        //                                     setShowFrontSubconscious(false);
        //                                 }} />
        //                             </CSSTransition>
        //                             <div className="flex justify-center darcy text-center text-white mt-2 whitespace-nowrap">
        //                                 Subconscious
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="flex flex-col justify-center mb-12 md:mb-0">
        //                     <div className="md:mr-2">
        //                         <div className="flippable-card-container">
        //                             <CSSTransition
        //                                 in={showFrontPastCeltic}
        //                                 timeout={300}
        //                                 classNames='flip'
        //                             >
        //                                 <CardContents {...spread[3]} onClick={() => {
        //                                     setShowFrontPastCeltic(false);
        //                                 }} />
        //                             </CSSTransition>
        //                             <div className="flex justify-center darcy text-center text-white mt-2 whitespace-nowrap">
        //                                 Past
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="flex flex-col justify-center mb-12 md:mb-0">
        //                     <div className="md:mr-2">
        //                         <div className="flippable-card-container">
        //                             <CSSTransition
        //                                 in={showFrontFutureCeltic}
        //                                 timeout={300}
        //                                 classNames='flip'
        //                             >
        //                                 <CardContents {...spread[4]} onClick={() => {
        //                                     setShowFrontFutureCeltic(false);
        //                                 }} />
        //                             </CSSTransition>
        //                             <div className="flex justify-center darcy text-center text-white mt-2 whitespace-nowrap">
        //                                 Future
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="flex flex-col justify-center mb-12 md:mb-0">
        //                     <div className="md:mr-2">
        //                         <div className="flippable-card-container">
        //                             <CSSTransition
        //                                 in={showFrontNear}
        //                                 timeout={300}
        //                                 classNames='flip'
        //                             >
        //                                 <CardContents {...spread[5]} onClick={() => {
        //                                     setShowFrontNear(false);
        //                                 }} />
        //                             </CSSTransition>
        //                             <div className="flex justify-center darcy text-center text-white mt-2 whitespace-nowrap">
        //                                 Near Future
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="flex flex-col justify-center mb-12 md:mb-0">
        //                     <div className="md:mr-2">
        //                         <div className="flippable-card-container">
        //                             <CSSTransition
        //                                 in={showFrontInternal}
        //                                 timeout={300}
        //                                 classNames='flip'
        //                             >
        //                                 <CardContents {...spread[6]} onClick={() => {
        //                                     setShowFrontInternal(false);
        //                                 }} />
        //                             </CSSTransition>
        //                             <div className="flex justify-center darcy text-center text-white mt-2 whitespace-nowrap">
        //                                 Internal Influences
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="flex flex-col justify-center mb-12 md:mb-0">
        //                     <div className="md:mr-2">
        //                         <div className="flippable-card-container">
        //                             <CSSTransition
        //                                 in={showFrontExternal}
        //                                 timeout={300}
        //                                 classNames='flip'
        //                             >
        //                                 <CardContents {...spread[7]} onClick={() => {
        //                                     setShowFrontExternal(false);
        //                                 }} />
        //                             </CSSTransition>
        //                             <div className="flex justify-center darcy text-center text-white mt-2 whitespace-nowrap">
        //                                 External Influences
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="flex flex-col justify-center mb-12 md:mb-0">
        //                     <div className="md:mr-2">
        //                         <div className="flippable-card-container">
        //                             <CSSTransition
        //                                 in={showFrontHopesFears}
        //                                 timeout={300}
        //                                 classNames='flip'
        //                             >
        //                                 <CardContents {...spread[8]} onClick={() => {
        //                                     setShowFrontHopesFears(false);
        //                                 }} />
        //                             </CSSTransition>
        //                             <div className="flex justify-center darcy text-center text-white mt-2 whitespace-nowrap">
        //                                 Hopes and/or Fears
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="flex flex-col justify-center mb-12 md:mb-0">
        //                     <div className="md:mr-2">
        //                         <div className="flippable-card-container">
        //                             <CSSTransition
        //                                 in={showFrontOutcomeCeltic}
        //                                 timeout={300}
        //                                 classNames='flip'
        //                             >
        //                                 <CardContents {...spread[9]} onClick={() => {
        //                                     setShowFrontOutcomeCeltic(false);
        //                                 }} />
        //                             </CSSTransition>
        //                             <div className="flex justify-center darcy text-center text-white mt-2 whitespace-nowrap">
        //                                 Outcome
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div> 
        // },
    ];

    return (
        <div className="flex flex-col justify-center" style={{ backgroundColor: "#322238", width: "100vw" }}>
            <div className="flex flex-col justify-center">
                <h1 className="text-4xl text-center mt-4 darcy text-white">
                    In the Cards
                </h1>
                <br />
                <div className="flex justify-center">
                    <p className="flex text-center text-white halcom" style={{ width: "40vw" }}>
                        Click on a facedown card to flip it, and click on a faceup card to read its meaning. Click the Redo button to get a different spread of cards.
                    </p>
                </div>
                <br />
                <div className="flex justify-center mb-2">
                    <button type="button" className="text-white darcy" onClick={handleClick}>
                        Redo
                    </button>
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <h2 className="text-2xl text-center darcy text-white">
                    Spread:
                </h2>
                <div className="flex justify-center text-center darcy text-white mb-2">
                    <Tabs defaultTab={1} tabs={tabs} />
                </div>
            </div>
        </div>
    );
}