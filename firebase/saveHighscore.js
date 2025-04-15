import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './Config';

export const saveHighscore = async (score, difficulty) => {
  try {
    const highscoreData = {
      score, // pelaajan score
      timestamp: serverTimestamp(), // serverin kellon aika
      difficulty // pelin vaikeustaso
    };

    await addDoc(collection(db, 'highscores'), highscoreData);
    return true;
  } catch (error) {
    console.error('Error saving highscore:', error);
    return false;
  }
};