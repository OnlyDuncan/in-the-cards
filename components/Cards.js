import Card from './Card';
import Image from 'next/image';
import { db } from '../utils/firebase';
import { firebase, firestore, doc, getDoc, getDocs, getDocFromCache, addDoc, collection, subcollection, query, where } from 'firebase/firestore';

function dataConverter (ref) {
    class Card {
        constructor (Id, Title, Reversed, Image, Meaning) {
            this.Id = Id;
            this.Title = Title;
            this.Reversed = Reversed;
            this.Image = Image;
            this.Meaning = Meaning;
        }
        toString() {
            return this.Id + ', ' + this.Title + ', ' + this.Reversed + ', ' + this.Image + ', ' + this.Meaning;
        }
    }

    const cardConverter = {
        toFirestore: (card) => {
            return {
                Id: card.Id,
                Title: card.Title,
                Reversed: card.Reversed,
                Image: card.Image,
                Meaning: card.Meaning
            };
        },
        fromFirestore: (snapshot, options) => {
            const data = snapshot.data(options);
            return new Card(data.Id, data.Title, data.Reversed, data.Image, data.Meaning);
        }
    }

    const cardRef = ref.withConverter(cardConverter);
    const docSnap = getDoc(cardRef);
    if (docSnap.exists) {
        const cardData = docSnap.data();
        console.log(cardData.toString());
        return cardData.toString();
    } else {
        console.log("No such document!");
    }
}

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

function idGenerator() {
    let min = 1;
    let max = 2;
    let random = Math.random() * (max - min) + min;
    return Math.floor(random);
}

async function cardPicker() {

    // const cardRef = doc(db, "cards", "The Magician", "The Magician", "The Magician (Upright)");
    // // const cardSnap = await getDoc(cardRef);

    // try {
    //     const card = await getDocFromCache(cardRef);
    //     console.log("Cached document data:", card.data());
    // } catch (e) {
    //     console.log("Error getting cached document:", e);
    // }

    const querySnapshot = await getDocs(collection(db, "cards", "The Magician", "The Magician"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });

    // try {
    //     const docRef = await addDoc(collection(db, "users"), {
    //         first: "Ada",
    //         last: "Lovelace",
    //         born: 1815
    //     });
    //     console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //     console.error("Error adding document: ", e);
    // }

    // if (cardSnap.exists()) {
    //     console.log("Document data:", cardSnap.data()['Title']);
    // } else {
    //     console.log("No such document!");
    // }

    // let tempArray = [];
    // let cardsArray = [];

    // let magicianRefUpright =  doc(db, "cards", "The Magician", "The Magician", "The Magician (Upright)");
    // let magicianSnapUpright = await getDoc(magicianRefUpright);
    // console.log(magicianSnapUpright.data());

    // const MagicianCardUpright = dataConverter(magicianRefUpright);
    // tempArray.push(MagicianCardUpright);
    // let magicianRefReversed = doc(db, "cards", "The Magician", "The Magician", "The Magician (Reversed)");
    // const MagicianCardReversed = dataConverter(magicianRefReversed);
    // tempArray.push(MagicianCardReversed);
    // console.log(tempArray);
    // tempArray = shuffle(tempArray);
    // cardsArray.push(tempArray[1]);
    // tempArray = [];

}

export default function Cards() {

    cardPicker();

    return (
        <div>
            <div className="flex flex-row justify-center">
                <Image
                    src="/Images/CardBack.webp"
                    width="0"
                    height="0"
                    sizes="100vh"
                    className="h-60 w-auto mr-2"
                    alt="Back of Card"
                />
                <Image
                    src="https://www.tarotcardmeanings.net/images/tarotcards/tarot-magician.jpg"
                    width="0"
                    height="0"
                    sizes="100vh"
                    className="h-60 w-auto ml-2 mr-2"
                    alt="Back of Card"
                />
                <Image
                    src="/Images/CardBack.webp"
                    width="0"
                    height="0"
                    sizes="100vh"
                    className="h-60 w-auto ml-2"
                    alt="Back of Card"
                />
            </div>
        </div>
    )
}