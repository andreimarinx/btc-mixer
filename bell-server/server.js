const express = require("express");
const play = require("play-sound")((opts = {}));
const path = require("path");
const fs = require("fs");
const cors = require("cors"); // Import cors

const app = express();
const port = 8081;

// Enable CORS for all origins
app.use(cors());

// Use express.json() to parse JSON bodies
app.use(express.json());

// Dictionary mapping team names to their audio files
const teamAudioFiles = {
  AiSophia: "./music/ai-sophia.mp3",
  AlphaTech: "./music/alpha-tech.mp3",
  "Brick City": "./music/brick-city.mp3",
  BroSophia: "./music/bro-sophia.mp3",
  CaveBots: "./music/cave-bots.mp3",
  "Dual Dynamics": "./music/dual-dynamics.mp3",
  "Funky Fishes": "./music/funky-fishes.mp3",
  "Game Changers": "./music/game-changers.mp3",
  Infrared: "./music/infrrared.mp3",
  JediDragons: "./music/jedi-dragons.mp3",
  "King of Hearts": "./music/king-of-hearts.mp3",
  Qualis: "./music/qualis.mp3",
  Quan2D2: "./music/quan2d2.mp3",
  "Royal Madness": "./music/royal-madness.mp3",
  Travsky: "./music/rravsky.mp3",
  White: "./music/white.mp3",
  "Wild Tech": "./music/wild-tech.mp3",
};

// Function to play audio for a team with a fade-out effect
const ffmpeg = require("fluent-ffmpeg");

const playAudioWithFadeOut = (teamName, audioPath) => {
  return new Promise((resolve, reject) => {
    console.log(`Playing audio for ${teamName}`);

    // Create a temporary file for the output with the fade-out effect
    const outputAudioPath = `output_with_fade_${teamName}.mp3`;

    // Apply the fade-out effect using FFmpeg
    ffmpeg(audioPath)
      .audioFilters("afade=t=out:st=8:d=3") // Start fading out at 5 seconds, duration 3 seconds
      .on("end", () => {
        console.log("Fade-out effect applied");

        // Play the processed audio
        play.play(outputAudioPath, (err) => {
          if (err) {
            console.error("Error playing processed sound:", err);
            reject("Error playing processed sound");
          } else {
            console.log("Audio played successfully with fade-out");
            resolve();
          }
        });
      })
      .on("error", (err) => {
        console.error("Error applying fade-out effect:", err);
        reject("Error applying fade-out effect");
      })
      .save(outputAudioPath); // Save the output with the fade-out effect
  });
};

// Route to trigger team audio playback with fade-out effect
app.post("/play-team-audio", async (req, res) => {
  console.log("Request body:", req.body); // Log the whole request body
  const { teamName } = req.body;
  console.log(`Received teamName: ${teamName}`); // Log the teamName

  if (!teamName || !teamAudioFiles[teamName]) {
    return res.status(400).send({ error: "Invalid team name" });
  }

  const audioPath = path.resolve(__dirname, teamAudioFiles[teamName]);

  try {
    const result = await playAudioWithFadeOut(teamName, audioPath);
    res.send({ status: result });
  } catch (error) {
    res.status(500).send({ error });
  }
});

// Route to trigger the bell sound
app.post("/trigger-bell", (req, res) => {
  console.log("Bell triggered!");
  play.play("./sound/bell.m4a", (err) => {
    if (err) {
      console.error("Error playing sound:", err);
    }
  });
  res.send({ status: "Bell triggered" });
});

// Make the server listen on all network interfaces
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${port}`);
});
