"use client";

import CardContents from './CardContents';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';

export default function Card ({...props}) {
    const [showFront, setShowFront] = useState(true);

    return (
        <div className="flippable-card-container">
            <CSSTransition
                in={showFront}
                timeout={300}
                classNames='flip'
            >
                <CardContents {...props} onClick={() => {
                    setShowFront((v) => !v);
                }} />
            </CSSTransition>
        </div>
    );
}