import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'; 
import HapticButton from "../components/hapticButton";

const StartupMenu = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>SPEDEN NOPEUSTESTI</Text>
        <View style={styles.buttonContainer}>
          <HapticButton  style={[styles.button, { backgroundColor: '#3CB440' }]} onPress={() => navigation.navigate('Play')}>
            <Ionicons name="play" size={32} color="black" />
          </HapticButton >
          <HapticButton  style={[styles.button, { backgroundColor: '#CC4848' }]} onPress={() => navigation.navigate('Info')}>
            <Ionicons name="help" size={32} color="black" />
          </HapticButton >
          <HapticButton  style={[styles.button, { backgroundColor: '#375EBF' }]} onPress={() => navigation.navigate('HighScoreScreen')}>
            <Ionicons name="trophy" size={32} color="black" />
          </HapticButton >
          <HapticButton  style={[styles.button, { backgroundColor: '#CEDB1B' }]} onPress={() => navigation.navigate('SettingsScreen')}>
            <Ionicons name="settings" size={32} color="black" />
          </HapticButton >
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
      borderWidth: 2.5,
      borderColor: "black",
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
    },
  });
  
  export default StartupMenu;