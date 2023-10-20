
import Card from './Card';
import Image from 'next/image';
import { db } from '../utils/firebase';
import { doc, getDoc } from 'firebase/firestore';

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

async function cardPicker() {

    let tempArray = [];
    let cardsArray = [];
    // let spreadArray = [];

    // Fool and Rundown of Process

    // Get data for upright version of card and push into temp array
    let FoolRefUpright =  doc(db, "cards", "The Fool", "The Fool", "The Fool (Upright)");
    let FoolSnapUpright = await getDoc(FoolRefUpright);
    const FoolUpright = FoolSnapUpright.data();
    tempArray.push(FoolUpright);

    // Get data for reversed version of card and push into temp array
    let FoolRefReversed =  doc(db, "cards", "The Fool", "The Fool", "The Fool (Reversed)");
    let FoolSnapReversed = await getDoc(FoolRefReversed);
    const FoolReversed = FoolSnapReversed.data();
    tempArray.push(FoolReversed);

    // Shuffle temp array
    tempArray = shuffle(tempArray);
    
    // Put first index of the shuffled array into the deck array
    cardsArray.push(tempArray[1]);

    // Erase temp array for reuse for the next cards
    tempArray = [];

    // Magician

    let magicianRefUpright =  doc(db, "cards", "The Magician", "The Magician", "The Magician (Upright)");
    let magicianSnapUpright = await getDoc(magicianRefUpright);
    const magicianUpright = magicianSnapUpright.data();
    tempArray.push(magicianUpright);
    let magicianRefReversed =  doc(db, "cards", "The Magician", "The Magician", "The Magician (Reversed)");
    let magicianSnapReversed = await getDoc(magicianRefReversed);
    const magicianReversed = magicianSnapReversed.data();
    tempArray.push(magicianReversed);
    tempArray = shuffle(tempArray);
    cardsArray.push(tempArray[1]);
    tempArray = [];

    // The High Priestess

    let priestessRefUpright =  doc(db, "cards", "The High Priestess", "The High Priestess", "The High Priestess (Upright)");
    let priestessSnapUpright = await getDoc(priestessRefUpright);
    const priestessUpright = priestessSnapUpright.data();
    tempArray.push(priestessUpright);
    let priestessRefReversed =  doc(db, "cards", "The High Priestess", "The High Priestess", "The High Priestess (Reversed)");
    let priestessSnapReversed = await getDoc(priestessRefReversed);
    const priestessReversed = priestessSnapReversed.data();
    tempArray.push(priestessReversed);
    tempArray = shuffle(tempArray);
    cardsArray.push(tempArray[1]);
    tempArray = [];

    // The Empress

    let empressRefUpright =  doc(db, "cards", "The Empress", "The Empress", "The Empress (Upright)");
    let empressSnapUpright = await getDoc(empressRefUpright);
    const empressUpright = empressSnapUpright.data();
    tempArray.push(empressUpright);
    let empressRefReversed =  doc(db, "cards", "The Empress", "The Empress", "The Empress (Reversed)");
    let empressSnapReversed = await getDoc(empressRefReversed);
    const empressReversed = empressSnapReversed.data();
    tempArray.push(empressReversed);
    tempArray = shuffle(tempArray);
    cardsArray.push(tempArray[1]);
    tempArray = [];

    // The Emperor

    let emperorRefUpright =  doc(db, "cards", "The Emperor", "The Emperor", "The Emperor (Upright)");
    let emperorSnapUpright = await getDoc(emperorRefUpright);
    const emperorUpright = emperorSnapUpright.data();
    tempArray.push(emperorUpright);
    let emperorRefReversed =  doc(db, "cards", "The Emperor", "The Emperor", "The Emperor (Reversed)");
    let emperorSnapReversed = await getDoc(emperorRefReversed);
    const emperorReversed = emperorSnapReversed.data();
    tempArray.push(emperorReversed);
    tempArray = shuffle(tempArray);
    cardsArray.push(tempArray[1]);
    tempArray = [];

    // The Hierophant

    let hierophantRefUpright =  doc(db, "cards", "The Hierophant", "The Hierophant", "The Hierophant (Upright)");
    let hierophantSnapUpright = await getDoc(hierophantRefUpright);
    const hierophantUpright = hierophantSnapUpright.data();
    tempArray.push(hierophantUpright);
    let hierophantRefReversed =  doc(db, "cards", "The Hierophant", "The Hierophant", "The Hierophant (Reversed)");
    let hierophantSnapReversed = await getDoc(hierophantRefReversed);
    const hierophantReversed = hierophantSnapReversed.data();
    tempArray.push(hierophantReversed);
    tempArray = shuffle(tempArray);
    cardsArray.push(tempArray[1]);
    tempArray = [];

    // The Lovers

    let loversRefUpright =  doc(db, "cards", "The Lovers", "The Lovers", "The Lovers (Upright)");
    let loversSnapUpright = await getDoc(loversRefUpright);
    const loversUpright = loversSnapUpright.data();
    tempArray.push(loversUpright);
    let loversRefReversed =  doc(db, "cards", "The Lovers", "The Lovers", "The Lovers (Reversed)");
    let loversSnapReversed = await getDoc(loversRefReversed);
    const loversReversed = loversSnapReversed.data();
    tempArray.push(loversReversed);
    tempArray = shuffle(tempArray);
    cardsArray.push(tempArray[1]);
    tempArray = [];

    // The Chariot

    let chariotRefUpright =  doc(db, "cards", "The Chariot", "The Chariot", "The Chariot (Upright)");
    let chariotSnapUpright = await getDoc(chariotRefUpright);
    const chariotUpright = chariotSnapUpright.data();
    tempArray.push(chariotUpright);
    let chariotRefReversed =  doc(db, "cards", "The Chariot", "The Chariot", "The Chariot (Reversed)");
    let chariotSnapReversed = await getDoc(chariotRefReversed);
    const chariotReversed = chariotSnapReversed.data();
    tempArray.push(chariotReversed);
    tempArray = shuffle(tempArray);
    cardsArray.push(tempArray[1]);
    tempArray = [];

    // Strength

    let strengthRefUpright =  doc(db, "cards", "Strength", "Strength", "Strength (Upright)");
    let strengthSnapUpright = await getDoc(strengthRefUpright);
    const strengthUpright = strengthSnapUpright.data();
    tempArray.push(strengthUpright);
    let strengthRefReversed =  doc(db, "cards", "Strength", "Strength", "Strength (Reversed)");
    let strengthSnapReversed = await getDoc(strengthRefReversed);
    const strengthReversed = strengthSnapReversed.data();
    tempArray.push(strengthReversed);
    tempArray = shuffle(tempArray);
    cardsArray.push(tempArray[1]);
    tempArray = [];

    // The Hermit

    let hermitRefUpright =  doc(db, "cards", "The Hermit", "The Hermit", "The Hermit (Upright)");
    let hermitSnapUpright = await getDoc(hermitRefUpright);
    const hermitUpright = hermitSnapUpright.data();
    tempArray.push(hermitUpright);
    let hermitRefReversed =  doc(db, "cards", "The Hermit", "The Hermit", "The Hermit (Reversed)");
    let hermitSnapReversed = await getDoc(hermitRefReversed);
    const hermitReversed = hermitSnapReversed.data();
    tempArray.push(hermitReversed);
    tempArray = shuffle(tempArray);
    cardsArray.push(tempArray[1]);
    tempArray = [];

    // Wheel of Fortune

    let wheelRefUpright =  doc(db, "cards", "Wheel of Fortune", "Wheel of Fortune", "Wheel of Fortune (Upright)");
    let wheelSnapUpright = await getDoc(wheelRefUpright);
    const wheelUpright = wheelSnapUpright.data();
    tempArray.push(wheelUpright);
    let wheelRefReversed =  doc(db, "cards", "Wheel of Fortune", "Wheel of Fortune", "Wheel of Fortune (Reversed)");
    let wheelSnapReversed = await getDoc(wheelRefReversed);
    const wheelReversed = wheelSnapReversed.data();
    tempArray.push(wheelReversed);
    tempArray = shuffle(tempArray);
    cardsArray.push(tempArray[1]);
    tempArray = [];

    // Justice

    let justiceRefUpright =  doc(db, "cards", "Justice", "Justice", "Justice (Upright)");
    let justiceSnapUpright = await getDoc(justiceRefUpright);
    const justiceUpright = justiceSnapUpright.data();
    tempArray.push(justiceUpright);
    let justiceRefReversed =  doc(db, "cards", "Justice", "Justice", "Justice (Reversed)");
    let justiceSnapReversed = await getDoc(justiceRefReversed);
    const justiceReversed = justiceSnapReversed.data();
    tempArray.push(justiceReversed);
    tempArray = shuffle(tempArray);
    cardsArray.push(tempArray[1]);
    tempArray = [];

    // The Hanged Man

    let hangedRefUpright =  doc(db, "cards", "The Hanged Man", "The Hanged Man", "The Hanged Man (Upright)");
    let hangedSnapUpright = await getDoc(hangedRefUpright);
    const hangedUpright = hangedSnapUpright.data();
    tempArray.push(hangedUpright);
    let hangedRefReversed =  doc(db, "cards", "The Hanged Man", "The Hanged Man", "The Hanged Man (Reversed)");
    let hangedSnapReversed = await getDoc(hangedRefReversed);
    const hangedReversed = hangedSnapReversed.data();
    tempArray.push(hangedReversed);
    tempArray = shuffle(tempArray);
    cardsArray.push(tempArray[1]);
    tempArray = [];

    // Death

    let deathRefUpright =  doc(db, "cards", "Death", "Death", "Death (Upright)");
    let deathSnapUpright = await getDoc(deathRefUpright);
    const deathUpright = deathSnapUpright.data();
    tempArray.push(deathUpright);
    let deathRefReversed =  doc(db, "cards", "Death", "Death", "Death (Reversed)");
    let deathSnapReversed = await getDoc(deathRefReversed);
    const deathReversed = deathSnapReversed.data();
    tempArray.push(deathReversed);
    tempArray = shuffle(tempArray);
    cardsArray.push(tempArray[1]);
    tempArray = [];

    // Temperance

    let temperanceRefUpright =  doc(db, "cards", "Temperance", "Temperance", "Temperance (Upright)");
    let temperanceSnapUpright = await getDoc(temperanceRefUpright);
    const temperanceUpright = temperanceSnapUpright.data();
    tempArray.push(temperanceUpright);
    let temperanceRefReversed =  doc(db, "cards", "Temperance", "Temperance", "Temperance (Reversed)");
    let temperanceSnapReversed = await getDoc(temperanceRefReversed);
    const temperanceReversed = temperanceSnapReversed.data();
    tempArray.push(temperanceReversed);
    tempArray = shuffle(tempArray);
    cardsArray.push(tempArray[1]);
    tempArray = [];

    // The Devil

    let devilRefUpright =  doc(db, "cards", "The Devil", "The Devil", "The Devil (Upright)");
    let devilSnapUpright = await getDoc(devilRefUpright);
    const devilUpright = devilSnapUpright.data();
    tempArray.push(devilUpright);
    let devilRefReversed =  doc(db, "cards", "The Devil", "The Devil", "The Devil (Reversed)");
    let devilSnapReversed = await getDoc(devilRefReversed);
    const devilReversed = devilSnapReversed.data();
    tempArray.push(devilReversed);
    tempArray = shuffle(tempArray);
    cardsArray.push(tempArray[1]);
    tempArray = [];

    // The Tower

    let towerRefUpright =  doc(db, "cards", "The Tower", "The Tower", "The Tower (Upright)");
    let towerSnapUpright = await getDoc(towerRefUpright);
    const towerUpright = towerSnapUpright.data();
    tempArray.push(towerUpright);
    let towerRefReversed =  doc(db, "cards", "The Tower", "The Tower", "The Tower (Reversed)");
    let towerSnapReversed = await getDoc(towerRefReversed);
    const towerReversed = towerSnapReversed.data();
    tempArray.push(towerReversed);
    tempArray = shuffle(tempArray);
    cardsArray.push(tempArray[1]);
    tempArray = [];

    // The Star

    let starRefUpright =  doc(db, "cards", "The Star", "The Star", "The Star (Upright)");
    let starSnapUpright = await getDoc(starRefUpright);
    const starUpright = starSnapUpright.data();
    tempArray.push(starUpright);
    let starRefReversed =  doc(db, "cards", "The Star", "The Star", "The Star (Reversed)");
    let starSnapReversed = await getDoc(starRefReversed);
    const starReversed = starSnapReversed.data();
    tempArray.push(starReversed);
    tempArray = shuffle(tempArray);
    cardsArray.push(tempArray[1]);
    tempArray = [];

    // The Moon

    let moonRefUpright =  doc(db, "cards", "The Moon", "The Moon", "The Moon (Upright)");
    let moonSnapUpright = await getDoc(moonRefUpright);
    const moonUpright = moonSnapUpright.data();
    tempArray.push(moonUpright);
    let moonRefReversed =  doc(db, "cards", "The Moon", "The Moon", "The Moon (Reversed)");
    let moonSnapReversed = await getDoc(moonRefReversed);
    const moonReversed = moonSnapReversed.data();
    tempArray.push(moonReversed);
    tempArray = shuffle(tempArray);
    cardsArray.push(tempArray[1]);
    tempArray = [];

    // The Sun

    let sunRefUpright =  doc(db, "cards", "The Sun", "The Sun", "The Sun (Upright)");
    let sunSnapUpright = await getDoc(sunRefUpright);
    const sunUpright = sunSnapUpright.data();
    tempArray.push(sunUpright);
    let sunRefReversed =  doc(db, "cards", "The Sun", "The Sun", "The Sun (Reversed)");
    let sunSnapReversed = await getDoc(sunRefReversed);
    const sunReversed = sunSnapReversed.data();
    tempArray.push(sunReversed);
    tempArray = shuffle(tempArray);
    cardsArray.push(tempArray[1]);
    tempArray = [];

    // Judgement

    let judgementRefUpright =  doc(db, "cards", "Judgement", "Judgement", "Judgement (Upright)");
    let judgementSnapUpright = await getDoc(judgementRefUpright);
    const judgementUpright = judgementSnapUpright.data();
    tempArray.push(judgementUpright);
    let judgementRefReversed =  doc(db, "cards", "Judgement", "Judgement", "Judgement (Reversed)");
    let judgementSnapReversed = await getDoc(judgementRefReversed);
    const judgementReversed = judgementSnapReversed.data();
    tempArray.push(judgementReversed);
    tempArray = shuffle(tempArray);
    cardsArray.push(tempArray[1]);
    tempArray = [];

    // The World

    let worldRefUpright =  doc(db, "cards", "The World", "The World", "The World (Upright)");
    let worldSnapUpright = await getDoc(worldRefUpright);
    const worldUpright = worldSnapUpright.data();
    tempArray.push(worldUpright);
    let worldRefReversed =  doc(db, "cards", "The World", "The World", "The World (Reversed)");
    let worldSnapReversed = await getDoc(worldRefReversed);
    const worldReversed = worldSnapReversed.data();
    tempArray.push(worldReversed);
    tempArray = shuffle(tempArray);
    cardsArray.push(tempArray[1]);
    tempArray = [];

    // Final Steps

    // Shuffle deck array
    cardsArray = shuffle(cardsArray);

    // Make variables for the first three cards in the deck and return them in an array
    let cardOne = cardsArray[0];
    let cardTwo = cardsArray[1];
    let cardThree = cardsArray[2];

    return [cardOne, cardTwo, cardThree];

}

export default async function Cards() {

    let spread = await cardPicker();

    let cardOne = spread[0];
    let cardTwo = spread[1];
    let cardThree = spread[2];

    return (
        <div className="flex flex-col justify-center">
            <div className="flex flex-row justify-center">
                <div className="flex flex-col justify-center">
                    <div className="ml-2">
                        <Card {...cardOne} />
                    </div>
                    <div className="flex justify-center text-align align-center ml-2 mt-2">
                        The Past
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="ml-2 mr-2">
                        <Card {...cardTwo} />
                    </div>
                    <div className="flex justify-center text-align align-center ml-2 mr-2 mt-2">
                        The Present
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="mr-2">
                        <Card {...cardThree} />
                    </div>
                    <div className="flex justify-center text-align align-center mr-2 mt-2">
                        The Future
                    </div>
                </div>
                {/* <Image
                    id="pastCard"
                    src="/Images/CardBack.webp"
                    width="0"
                    height="0"
                    sizes="100vh"
                    className="h-60 w-auto mr-2"
                    alt="Back of Card"
                    style={{}}
                    onClick={(Card) =>  {
                        "use client"
                        document.getElementById("pastCard").src=cardOne.Image;
                        document.getElementById("pastCard").alt="Tarot card representing the past.";
                        if (cardOne.Orientation === "Reversed") {
                            document.getElementById("pastCard").className="h-60 w-auto mr-2 scaleX(-1) scaleY(-1)";
                        }

                    }}
                /> */}
            </div>
        </div>
    )
}