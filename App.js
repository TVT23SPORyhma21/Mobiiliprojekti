import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App(){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SPEDEN NOPEUSTESTI</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]}> 
          <Ionicons name="play" size={32} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]}> 
          <Ionicons name="help" size={32} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'blue' }]}> 
          <Ionicons name="trophy" size={32} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'yellow' }]}> 
          <Ionicons name="settings" size={32} color="black" />
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#BD1C1C',
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
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
});

