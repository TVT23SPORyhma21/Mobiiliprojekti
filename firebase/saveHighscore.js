import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './Config';

export const saveHighscore = async (score, difficulty) => {
  try {
    const highscoreData = {
      score,
      timestamp: serverTimestamp(),
      difficulty
    };

    await addDoc(collection(db, 'highscores'), highscoreData);
    return true;
  } catch (error) {
    console.error('Error saving highscore:', error);
    return false;
  }
};