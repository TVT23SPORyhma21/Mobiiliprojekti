import { View, Text, Modal, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons'; 
import HapticButton from "../components/hapticButton";

const HelpPopup = ({ visible, onClose }) => { 
  return ( 
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}> 
          <Text style={styles.title}>SPEDEN NOPEUSTESTIN OHJEET</Text> 
          <ScrollView style={styles.scrollView}> 
            <Text style={styles.text}>1. Paina nappia, jossa valo on palanut mahdollisimman nopeaa</Text>
            <Text style={styles.text}>2. etc.</Text>
          </ScrollView>
          <View style={styles.buttonContainer}>
            <HapticButton style={[styles.button, { backgroundColor: '#CEDB1B' }]} onPress={onClose}>
              <Ionicons name="arrow-back" size={42} color="black" />
            </HapticButton>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '50%',
    backgroundColor: 'green',
    borderRadius: 5,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D9D9D9',
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2.5,
    borderColor: "green",
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    width: '100%',
    maxHeight: 150,
    backgroundColor: "green",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "green",
    padding: 5,
  },
  text: {
    color: "white",
    fontSize: 15,
  }
});

export default HelpPopup;
