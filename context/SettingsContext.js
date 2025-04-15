import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [hapticsEnabled, setHapticsEnabled] = useState(true);
  const [difficulty, setDifficulty] = useState("medium");

  useEffect(() => {
    const loadPreferences = async () => {
      try {
        const storedHaptics = await AsyncStorage.getItem("hapticsEnabled");
        if (storedHaptics !== null) {
          setHapticsEnabled(JSON.parse(storedHaptics));
        }

        const storedDifficulty = await AsyncStorage.getItem("difficulty");
        if (storedDifficulty !== null) {
          setDifficulty(storedDifficulty);
        }
      } catch (error) {
        console.log("Error loading preferences:", error);
      }
    };

    loadPreferences();
  }, []);

  const toggleHaptics = async () => {
    try {
      const newValue = !hapticsEnabled;
      await AsyncStorage.setItem("hapticsEnabled", JSON.stringify(newValue));
      setHapticsEnabled(newValue);
    } catch (error) {
      console.log("Error saving haptic preference:", error);
    }
  };

  const changeDifficulty = async (newDifficulty) => {
    try {
      await AsyncStorage.setItem("difficulty", newDifficulty);
      setDifficulty(newDifficulty);
    } catch (error) {
      console.log("Error saving difficulty preference:", error);
    }
  };

  return (
    <SettingsContext.Provider
      value={{
        hapticsEnabled,
        toggleHaptics,
        difficulty,
        setDifficulty: changeDifficulty,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};