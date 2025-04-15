// In firebase/saveHighscore.js
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './Config';

export const saveHighscore = async (score, difficulty) => {
  try {
    // Get the difficulty from context if not provided as parameter
    const highscoreData = {
      score,
      timestamp: serverTimestamp(),
      difficulty // Store the difficulty with each score
    };

    await addDoc(collection(db, 'highscores'), highscoreData);
    return true;
  } catch (error) {
    console.error('Error saving highscore:', error);
    return false;
  }
};