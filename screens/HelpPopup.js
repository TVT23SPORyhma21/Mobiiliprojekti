import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

const HelpPopup = ({ visible, setVisible, advice }) => {
  if (!visible) return null;
  
  
  let formattedText = advice;
  if (advice && advice.includes("Ohjeet:")) {
    
    const parts = advice.split("Ohjeet:");
    
    return (
      <View style={styles.fullScreenOverlay}>
        <View style={styles.container}>
          <Text style={styles.title}>SPEDEN NOPEUSTESTIN OHJEET</Text>
          
          
          <ScrollView style={styles.scrollContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>{parts[0]}</Text>
              <Text style={styles.text}>Ohjeet:</Text>
              <Text style={styles.compactText}>{parts[1]}</Text>
            </View>
          </ScrollView>
          
          <TouchableOpacity 
            style={styles.closeButton} 
            onPress={() => setVisible(false)}
            activeOpacity={0.7}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  
  return (
    <View style={styles.fullScreenOverlay}>
      <View style={styles.container}>
        <Text style={styles.title}>SPEDEN NOPEUSTESTIN OHJEET</Text>
        
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{advice}</Text>
          </View>
        </ScrollView>
        
        <TouchableOpacity 
          style={styles.closeButton} 
          onPress={() => setVisible(false)}
          activeOpacity={0.7}
        >
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreenOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  container: {
    width: '80%',
    backgroundColor: 'green',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    maxHeight: '70%', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D9D9D9',
    marginBottom: 10,
  },
  scrollContainer: {
    width: '100%',
    marginBottom: 15, 
  },
  textContainer: {
    width: '100%',
    paddingBottom: 5, 
  },
  text: {
    color: 'white',
    fontSize: 15,
    lineHeight: 22,
  },
  compactText: {
    color: 'white',
    fontSize: 15,
    lineHeight: 16, 
  },
  closeButton: {
    backgroundColor: "#CEDB1B",
    padding: 10,
    borderRadius: 5,
    minWidth: 100,
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});

export default HelpPopup;