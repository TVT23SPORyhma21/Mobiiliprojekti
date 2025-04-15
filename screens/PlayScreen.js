import React, { useState, useEffect, useRef, useCallback, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import HapticButton from "../components/hapticButton";
import { saveHighscore } from "../firebase/saveHighscore";
import { SettingsContext } from "../context/SettingsContext";

const PlayScreen = ({ navigation }) => {
  const [score, setScore] = useState(0);
  const [currentColor, setCurrentColor] = useState(null);
  const [isUserTurn, setIsUserTurn] = useState(false);
  const [gameSpeed, setGameSpeed] = useState(5000);
  const [previousColor, setPreviousColor] = useState(null);
  const timeoutRef = useRef(null);
  const buttonColors = ["#3CB440", "#CC4848", "#375EBF", "#CEDB1B"];
  const [buttonPressed, setButtonPressed] = useState(false);
  const { difficulty } = useContext(SettingsContext);

  const DIFFICULTY_SPEEDS = {
    easy: 2800,
    medium: 2000,
    hard: 1300,
  };

  useEffect(() => {
    startGame();
    return () => clearTimeout(timeoutRef.current);
  }, [difficulty]);

  const startGame = () => {
    console.log("Starting game...");
    const initialSpeed = DIFFICULTY_SPEEDS[difficulty] ?? 2000;
    console.log(initialSpeed)
    setScore(0);
    setGameSpeed(initialSpeed);
    setPreviousColor(null);
    setCurrentColor(null);
    setButtonPressed(false);
    setIsUserTurn(false);

    setTimeout(() => {
      console.log("Delay finished, starting first round");
      nextRound();
    }, 1000);
  };

  const nextRound = () => {
    console.log("Next round, score:", score);
    setButtonPressed(false);
    setIsUserTurn(false);

    let next;
    do {
      next = Math.floor(Math.random() * 4);
    } while (next === previousColor);

    setPreviousColor(next);
    setCurrentColor(next);
    console.log("NAPPI SYTYTETTY:", next);

    timeoutRef.current = setTimeout(() => {
      console.log("Flash timeout triggered");
      setCurrentColor(null);
      setIsUserTurn(true);

      timeoutRef.current = setTimeout(() => {
        console.log("Reaction timeout triggered");
        gameOver();
      }, 0); //kuinka kauan nappi pysyy sammuneena KUN PELI ON JO HÄVITTY koska ei rekisteröi painallusta enää siinä vaiheessa
    }, gameSpeed); //kuinka kauan nappi/valo pysyy päällä
  };

  const handleButtonPress = async (index) => {
    console.log("Nappia painettu:", index, "Tämän hetkinen väri:", currentColor, "Button pressed state:", buttonPressed);
    if (buttonPressed || currentColor === null) return;

    setButtonPressed(true);
    clearTimeout(timeoutRef.current);

    if (index === currentColor) {
      const newScore = score + 1;
      setScore(newScore);
      setCurrentColor(null);
      setIsUserTurn(false);
      console.log("Oikea nappi, uusi tulos:", newScore);

      if (newScore % 5 === 0 && gameSpeed > 500) {
        setGameSpeed((prev) => {
          const newSpeed = Math.max(prev - 100, 500);
          console.log("Pelin nopeus päivitetty:", newSpeed);
          return newSpeed;
        });
      }

      setTimeout(() => {
        nextRound();
      }, 0); //kuinka kauan että seuraava valo syttyy jos painaa oikeaa nappia ajoissa
    } else {
      console.log("Väärää nappia painettu");
      gameOver();
    }
  };

  const gameOver = async () => {
    clearTimeout(timeoutRef.current);
    setIsUserTurn(false);
    setCurrentColor(null);
    setButtonPressed(false);
    console.log("Peli ohi!, tulos:", score);

    try {
      if (score > 0) {
        const success = await saveHighscore(score);
        if (!success) {
          console.log("highscoren tallenus Firebaseen ei onnistunut");
        }
      }
    } catch (error) {
      console.error("Error in gameOver:", error.message, error.code);
    }

    navigation.replace("GameOver", { score });
  };

  const getHighlightedColor = useCallback((color) => {
    const lighter = {
      "#3CB440": "#5de763",
      "#CC4848": "#ff6b6b",
      "#375EBF": "#6889e8",
      "#CEDB1B": "#f1ff47",
    };
    return lighter[color] || color;
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SPEDEN NOPEUSTESTI</Text>

      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>{score}</Text>
      </View>

      <View style={styles.buttonContainer}>
        {buttonColors.map((color, index) => (
          <HapticButton
            key={index}
            style={[
              styles.button,
              {
                backgroundColor:
                  currentColor === index
                    ? getHighlightedColor(color)
                    : color,
              },
            ]}
            onPress={() => handleButtonPress(index)}
            disabled={buttonPressed || currentColor === null}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    position: "absolute",
    top: 20,
    fontSize: 30,
    fontWeight: "bold",
    color: "#BD1C1C",
  },
  scoreContainer: {
    position: "absolute",
    top: 80,
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 10,
    width: 400,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#444",
  },
  scoreText: {
    color: "red",
    fontSize: 50,
    fontWeight: "bold",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
  },
  button: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 2.5,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
});

export default PlayScreen;