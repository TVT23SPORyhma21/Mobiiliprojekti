import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import * as Haptics from 'expo-haptics';
import { HapticContext } from "../context/HapticContext";

const HapticButton = ({ onPress, onPressIn, style, children }) => {
    const { hapticsEnabled } = useContext(HapticContext);
  
    const handlePressIn = () => {
        if (hapticsEnabled) Haptics.selectionAsync();
        if (onPressIn) onPressIn();
      };
    
    const handlePress = () => {
        if (onPress) onPress();
    };
  
    return (
        <TouchableOpacity 
            style={style} 
            onPressIn={handlePressIn} 
            onPress={handlePress}
            >
            {children}
        </TouchableOpacity>
    );
};
  
export default HapticButton;