import Cards from './Cards';
import Library from './Library';
import { db } from '../utils/firebase';
import { doc, getDoc } from 'firebase/firestore';

async function cardPicker() {

    const orientations = ["Upright", "Reversed"];

    const cardNames = [
        "The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor", "The Hierophant", 
        "The Lovers", "The Chariot", "Strength", "The Hermit", "Wheel of Fortune", 
        "Justice", "The Hanged Man", "Death", "Temperance", "The Devil", 
        "The Tower", "The Star", "The Moon", "The Sun", "Judgement", 
        "The World"
    ];

    let altArray = [];

    for (const cardName of cardNames) {

        let tempArray = [];

        for (const orientation of orientations) {
            const cardRef = doc(db, "cards", cardName, cardName, `${cardName} (${orientation})`);
            const cardSnap = await getDoc(cardRef);
            const cardData = cardSnap.data();
            tempArray.push(cardData);
        }

        altArray.push(tempArray);
    }

    return altArray;

}

export default async function CardsServer() {

    let altArray = await cardPicker();

    let libraryArray = [];

    for (let i = 0; i < altArray.length; i++) {
        libraryArray.push(altArray[i][0]);
    }

    return (
        <div className="flex">
            <div className="flex-col justify-center">
                {/* For future reference when adding the Library feature */}
                {/* <Library {...libraryArray} /> */}
                <Cards {...altArray} />
            </div>
        </div>
    )
}