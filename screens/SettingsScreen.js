import React, { useContext } from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'; 
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import HapticButton from "../components/hapticButton";
import { SettingsContext } from "../context/SettingsContext";

const SettingsScreen = ({ navigation }) => {
  const { hapticsEnabled, toggleHaptics, difficulty, setDifficulty } = useContext(SettingsContext);


    return (
      <View style={styles.container}>
        <Text style={styles.title}>ASETUKSET</Text>

        <View style={styles.buttonContainer}>

          <HapticButton name="Toggle sound"
            style={[styles.button, { backgroundColor: '#00FF00' }]}
            onPress={() => console.log("Toggle sound (TODO)")}
          >
            <Ionicons name="volume-medium-sharp" size={42} color="black" />
          </HapticButton>

          <HapticButton name="Toggle haptic feedback"
            style={[styles.button, { backgroundColor: hapticsEnabled ? '#FF0000' : '#880000' }]}
            onPress={toggleHaptics}
          >
            <MaterialCommunityIcons name={hapticsEnabled ? "vibrate" : "vibrate-off"}  size={42} color="black" />
          </HapticButton>

          <HapticButton name="Difficulty"
            style={[styles.button, { backgroundColor: '#0000AA' }]}
            onPress={() => {
              const next = difficulty === "easy" ? "medium" : difficulty === "medium" ? "hard" : "easy";
              setDifficulty(next);
            }}
          >
            <Ionicons name=
              {difficulty === "easy"
              ? "star-outline"
              : difficulty === "medium"
              ? "star-half"
              : "star"} 
            size={42} color="black" />
          </HapticButton>

          <HapticButton name="Back"
            style={[styles.button, { backgroundColor: '#FFFF00' }]}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={42} color="black" />
          </HapticButton>

        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D9D9D9',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      position: "absolute",
      top: 20,
      fontSize: 30,
      fontWeight: 'bold',
      color: '#BD1C1C',
      marginBottom: 50,
    },
    buttonContainer: {
      position: "absolute",
      bottom: 50,
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '90%',
    },
    button: {
      width: 110,
      height: 110,
      borderRadius: 55,
      borderWidth: 2,
      borderColor: "black",
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 11,
    },
  });

  export default SettingsScreen;