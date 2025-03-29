import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'; 
import HapticButton from "../components/hapticButton";
//todo firebase connection and displaying highscores from firebase db
const HighScoreScreen = ({ navigation }) => { 
  return ( 
    <View style={styles.container}> 
        <Text style={styles.title}>SPEDEN NOPEUSTESTI</Text> 
        <ScrollView style={styles.scrollView}> 
            <Text style={styles.text}>
                1.  0026                                                20/3/2025
            </Text>
            <Text style={styles.text}>
                2.  0024                                                19/3/2025
            </Text>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <HapticButton  style={[styles.button, { backgroundColor: '#CEDB1B' }]} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={42} color="black" />
          </HapticButton >
        </View>
    </View> 
  )
}
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
      left: 347,
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
      marginHorizontal: 20,
    },
    scrollView: {
        position: "absolute",
        top: 75,
        width: 600,
        height: 175,
        backgroundColor: "#0D0C0C",
        borderRadius: 10,
        borderWidth: 5,
        borderColor: "#2e2e2e",
        paddingInlineStart: 5,
        padding: 5,
    },
    text: {
        color: "red",
        fontSize: 15,
    }
  });
  

export default HighScoreScreen