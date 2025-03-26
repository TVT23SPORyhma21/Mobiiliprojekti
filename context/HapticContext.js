import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const HapticContext = createContext();

export const HapticProvider = ({ children }) => {
  const [hapticsEnabled, setHapticsEnabled] = useState(true);

  // Load haptic setting from AsyncStorage
  useEffect(() => {
    const loadHapticPreference = async () => {
      try {
        const storedValue = await AsyncStorage.getItem("hapticsEnabled");
        if (storedValue !== null) {
          setHapticsEnabled(JSON.parse(storedValue));
        }
      } catch (error) {
        console.log("Error loading haptic preference:", error);
      }
    };
    loadHapticPreference();
  }, []);

  // Save haptic setting to AsyncStorage
  const toggleHaptics = async () => {
    try {
      const newValue = !hapticsEnabled;
      await AsyncStorage.setItem("hapticsEnabled", JSON.stringify(newValue));
      setHapticsEnabled(newValue);
    } catch (error) {
      console.log("Error saving haptic preference:", error);
    }
  };

  return (
    <HapticContext.Provider value={{ hapticsEnabled, toggleHaptics }}>
      {children}
    </HapticContext.Provider>
  );
};