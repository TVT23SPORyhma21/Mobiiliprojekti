import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/Config';

export const saveHighscore = async (score) => {
  try {
    if (score <= 0) return false; // ei talleneta 0 tulosta
    await addDoc(collection(db, 'highscores'), {
      score,
      timestamp: serverTimestamp(),
    });
    console.log("Highscore lisätty onnistuneesti, score:", score);
    return true;
  } catch (error) {
    console.error("Error saving highscore:", error.message, error.code);
    return false;
  }
};