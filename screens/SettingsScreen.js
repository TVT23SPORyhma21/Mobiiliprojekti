import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons'; 
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const SettingsScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>ASETUKSET</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#00FF00' }]} /*onPress={() =>} TODO: ADD TOGGLEABLE SOUND ON/OFF*/> 
            <Ionicons name="volume-medium-sharp" size={32} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#FF0000' }]} /*onPress={() =>} TODO: ADD TOGGLEABLE HAPTIC FEEDBACK ON/OFF*/>
            <MaterialIcons name="vibration" size={32} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#0000AA' }]} /*onPress={() =>} TODO: ADD DIFFICULTY CHANGER*/>
            <Ionicons name="star" size={32} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#FFFF00' }]} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={32} color="black" />
          </TouchableOpacity>
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
      width: '80%',
    },
    button: {
      width: 80,
      height: 80,
      borderRadius: 50,
      borderWidth: 2,
      borderColor: "black",
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
    },
  });

  export default SettingsScreen;