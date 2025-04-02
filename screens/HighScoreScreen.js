import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import HapticButton from "../components/hapticButton";
import { db } from '../firebase/Config.js';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';

const HighScoreScreen = ({ navigation }) => {
  const [highscores, setHighscores] = useState([]);

  useEffect(() => {
    const fetchHighscores = async () => {
      try {
        
        const highscoresRef = collection(db, 'highscores');
        const highscoresQuery = query(
          highscoresRef,
          orderBy('score', 'desc'),
          limit(10)
        );
        const querySnapshot = await getDocs(highscoresQuery);
        const highscoresList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setHighscores(highscoresList);
      } catch (err) {
        console.log("Error fetching highscores:", err);
      }
    };

    fetchHighscores();
  }, []);

  const formatDate = (timestamp) => {
    if (!timestamp) return '';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SPEDEN NOPEUSTESTI</Text>
      
      <ScrollView style={styles.scrollView}>
        {highscores.map((score, index) => (
          <Text key={score.id} style={styles.text}>
            {`${index + 1}.  ${score.score.toString().padStart(4, '0')}                                                ${formatDate(score.timestamp)}`}
          </Text>
        ))}
      </ScrollView>
      
      <View style={styles.buttonContainer}>
        <HapticButton style={[styles.button, { backgroundColor: '#CEDB1B' }]} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={42} color="black" />
        </HapticButton>
      </View>
    </View>
  )}

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
    marginVertical: 3,
  }
});

export default HighScoreScreen;