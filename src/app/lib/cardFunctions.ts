import { User } from "firebase/auth";
import { doc, setDoc, getDoc, updateDoc, Timestamp } from "firebase/firestore";
import { db } from "../../../firebase/firebaseApp";
import { InfoType } from "../create/clientCreate";

// Gets the users card if it exists and sets the info state using the passed function
export async function getUserCardInfo(user: User, setInfo: Function) {
    const docRef = doc(db, "cards", user.uid.toString());
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        let data = docSnap.data() as InfoType;
        setInfo(data);
    } else {
        // docSnap.data() will be undefined in this case
        console.error("No such document!");
    }
}

// Returns the users card info if it exists
export async function getCardInfo(id: string) {
    const docRef = doc(db, "cards", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        let data = docSnap.data() as InfoType;
        return data;
    } else {
        // docSnap.data() will be undefined in this case
        return undefined;
    }
}

// Returns a boolean to see if the users card exists in the db
export async function cardExists(id: string) {
    const docRef = doc(db, "cards", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return true;
    } else {
        return false;
    }
}

// Updates the users card
export async function updateCardInfo(user: User, info: InfoType) {
    try {
        const cardsRef = doc(db, "cards", user.uid.toString());
        await updateDoc(cardsRef, {
            ...info,
            editedAt: Timestamp.fromDate(new Date()),
        });
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

// Creates the users card
export async function setCardInfo(user: User, info: InfoType) {
    try {
        const docRef = await setDoc(doc(db, "cards", user.uid.toString()), {
            ...info,
            createdAt: Timestamp.fromDate(new Date()),
        });
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
