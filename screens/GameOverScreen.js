// screens/GameOverScreen.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GameOverScreen = ({ route, navigation }) => {
  const { score } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Over</Text>
      <Text style={styles.scoreLabel}>Your Score:</Text>
      <Text style={styles.score}>{score}</Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#3CB440" }]}
          onPress={() => navigation.replace('PlayScreen')}
        >
          <Text style={styles.buttonText}>Try Again</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#CC4848" }]}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Main Menu</Text>
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
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#BD1C1C",
    marginBottom: 40,
  },
  scoreLabel: {
    fontSize: 22,
    color: "#333",
  },
  score: {
    fontSize: 48,
    fontWeight: "bold",
    marginVertical: 20,
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 40,
    gap: 20,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 12,
    elevation: 2,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
});

export default GameOverScreen;
