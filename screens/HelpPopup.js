import { View, Text, Modal, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons'; 
import HapticButton from "../components/hapticButton";

const HelpPopup = ({ visible, setVisible, advice }) => { 
  const navigation = useNavigation();

  useEffect(() => {
    const beforeRemoveListener = (e) => {
      e.preventDefault();
      setVisible(false);
    };
    navigation.addListener('beforeRemove', beforeRemoveListener);

    return () => {
      navigation.removeListener('beforeRemove', beforeRemoveListener);
    };
  }, [navigation, setVisible]);

  return ( 
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}
    >
      <View style={styles.overlay}>
        <View style={styles.container}> 
          <Text style={styles.title}>SPEDEN NOPEUSTESTIN OHJEET</Text> 
          <ScrollView style={styles.scrollView}> 
            <Text style={styles.text}>{advice}</Text>
          </ScrollView>
          <View style={styles.buttonContainer}>
            <HapticButton style={styles.backButton} onPress={() => setVisible(false)}>
              <Text style={styles.backButtonText}>Back</Text>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    backgroundColor: 'green',
    borderRadius: 10,
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
    borderColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    width: '100%',
    maxHeight: 150,
    backgroundColor: 'green',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'green',
    padding: 5,
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
  backButton: {
    backgroundColor: "#CEDB1B",
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});

export default HelpPopup;
