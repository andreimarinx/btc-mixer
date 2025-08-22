<template>
  <div class="container">
    <!-- Bell Button -->
    <button @click="playSound" class="bell-button" style="position: fixed; top: 0; width: 98%; left: 0">
      REZULTATE GATA!
    </button>
    <!-- Dropdown Selectors for Teams -->
    <div class="dropdown-container" style="margin: 100px 0 400px">
      <h2>Select Teams</h2>
      <!-- AiSophia - AlphaTech <br />
      RoyalMadness - Quan2d2 -->
      <div class="dropdowns">
        <div class="dropdown">
          <label for="team1">Blue:</label>
          <select v-model="selectedTeam1" id="team1">
            <option disabled value="">Select a team</option>
            <option v-for="team in teams" :key="team" :value="team">{{ team }}</option>
          </select>
          <button
            @click="playTeam(selectedTeam1)"
            :disabled="!selectedTeam1"
            style="width: 90%; background-color: blue"
          >
            Play {{ selectedTeam1 }}
          </button>
        </div>
        <div class="dropdown">
          <label for="team2">Red:</label>
          <select v-model="selectedTeam2" id="team2">
            <option disabled value="">Select a team</option>
            <option v-for="team in teams" :key="team" :value="team">{{ team }}</option>
          </select>
          <button @click="playTeam(selectedTeam2)" :disabled="!selectedTeam2" style="width: 90%; background-color: red">
            Play {{ selectedTeam2 }}
          </button>
        </div>
      </div>
    </div>
    <!-- Qualification and Game Buttons -->
    <!-- <div class="button-group">
      <h2>Qualification 30</h2>
      <button :style="{ backgroundColor: 'red' }" @click="playTeam('Brick City')">Brick City</button>
      <button :style="{ backgroundColor: 'blue' }" @click="playTeam('King of Hearts')">King of Hearts</button>

      <h2>Qualification 31</h2>
      <button :style="{ backgroundColor: 'red' }" @click="playTeam('Funky Fishes')">Funky Fishes</button>
      <button :style="{ backgroundColor: 'blue' }" @click="playTeam('Travsky')">Travsky</button>

      <h2>Qualification 32</h2>
      <button :style="{ backgroundColor: 'red' }" @click="playTeam('AiSophia')">AiSophia</button>
      <button :style="{ backgroundColor: 'blue' }" @click="playTeam('BroSophia')">BroSophia</button>

      <h2>Qualification 33</h2>
      <button :style="{ backgroundColor: 'red' }" @click="playTeam('Game Changers')">Game Changers</button>
      <button :style="{ backgroundColor: 'blue' }" @click="playTeam('AlphaTech')">AlphaTech</button>

      <h2>Qualification 34</h2>
      <button :style="{ backgroundColor: 'red' }" @click="playTeam('Wild Tech')">Wild Tech</button>
      <button :style="{ backgroundColor: 'blue' }" @click="playTeam('Qualis')">Qualis</button>

      <h2>Qualification 35</h2>
      <button :style="{ backgroundColor: 'red' }" @click="playTeam('Dual Dynamics')">Dual Dynamics</button>
      <button :style="{ backgroundColor: 'blue' }" @click="playTeam('JediDragons')">Jedi Dragons</button>

      <h2>Qualification 36</h2>
      <button :style="{ backgroundColor: 'red' }" @click="playTeam('Infrared')">Infrared</button>
      <button :style="{ backgroundColor: 'blue' }" @click="playTeam('White')">White</button>
      <h2>Qualification 37</h2>
      <button :style="{ backgroundColor: 'red' }" @click="playTeam('Royal Madness')">Royal Madness</button>
      <button :style="{ backgroundColor: 'blue' }" @click="playTeam('King of Hearts')">King of Hearts</button>

      <h2>Qualification 38</h2>
      <button :style="{ backgroundColor: 'red' }" @click="playTeam('Travsky')">Travsky</button>
      <button :style="{ backgroundColor: 'blue' }" @click="playTeam('CaveBots')">CaveBots</button>

      <h2>Qualification 39</h2>
      <button :style="{ backgroundColor: 'red' }" @click="playTeam('Brick City')">Brick City</button>
      <button :style="{ backgroundColor: 'blue' }" @click="playTeam('BroSophia')">BroSophia</button>

      <h2>Qualification 40</h2>
      <button :style="{ backgroundColor: 'red' }" @click="playTeam('Funky Fishes')">Funky Fishes</button>
      <button :style="{ backgroundColor: 'blue' }" @click="playTeam('AiSophia')">AiSophia</button>

      <h2>Qualification 41</h2>
      <button :style="{ backgroundColor: 'red' }" @click="playTeam('AlphaTech')">AlphaTech</button>
      <button :style="{ backgroundColor: 'blue' }" @click="playTeam('Quan2D2')">Quan2D2</button>

      <h2>Qualification 42</h2>
      <button :style="{ backgroundColor: 'red' }" @click="playTeam('Game Changers')">Game Changers</button>
      <button :style="{ backgroundColor: 'blue' }" @click="playTeam('JediDragons')">Jedi Dragons</button>

      <h2>Qualification 43</h2>
      <button :style="{ backgroundColor: 'red' }" @click="playTeam('Wild Tech')">Wild Tech</button>
      <button :style="{ backgroundColor: 'blue' }" @click="playTeam('White')">White</button>

      <h2>Qualification 44</h2>
      <button :style="{ backgroundColor: 'red' }" @click="playTeam('Dual Dynamics')">Dual Dynamics</button>
      <button :style="{ backgroundColor: 'blue' }" @click="playTeam('Infrared')">Infrared</button>

      <h2>Qualification 45</h2>
      <button :style="{ backgroundColor: 'red' }" @click="playTeam('Travsky')">Travsky</button>
      <button :style="{ backgroundColor: 'blue' }" @click="playTeam('Royal Madness')">Royal Madness</button>

      <h2>Qualification 46</h2>
      <button :style="{ backgroundColor: 'red' }" @click="playTeam('King of Hearts')">King of Hearts</button>
      <button :style="{ backgroundColor: 'blue' }" @click="playTeam('BroSophia')">BroSophia</button>

      <h2>Qualification 47</h2>
      <button :style="{ backgroundColor: 'red' }" @click="playTeam('AiSophia')">AiSophia</button>
      <button :style="{ backgroundColor: 'blue' }" @click="playTeam('CaveBots')">CaveBots</button>

      <h2>Qualification 48</h2>
      <button :style="{ backgroundColor: 'red' }" @click="playTeam('Brick City')">Brick City</button>
      <button :style="{ backgroundColor: 'blue' }" @click="playTeam('Funky Fishes')">Funky Fishes</button>

      <h2>Qualification 49</h2>
      <button :style="{ backgroundColor: 'red' }" @click="playTeam('Quan2D2')">Quan2D2</button>
      <button :style="{ backgroundColor: 'blue' }" @click="playTeam('Qualis')">Qualis</button>

      <h2>Qualification 50</h2>
      <button :style="{ backgroundColor: 'red' }" @click="playTeam('AlphaTech')">AlphaTech</button>
      <button :style="{ backgroundColor: 'blue' }" @click="playTeam('JediDragons')">Jedi Dragons</button>

      <h2>Qualification 51</h2>
      <button :style="{ backgroundColor: 'red' }" @click="playTeam('Game Changers')">Game Changers</button>
      <button :style="{ backgroundColor: 'blue' }" @click="playTeam('Infrared')">Infrared</button>

      <h2>Qualification 52</h2>
      <button :style="{ backgroundColor: 'red' }" @click="playTeam('Wild Tech')">Wild Tech</button>
      <button :style="{ backgroundColor: 'blue' }" @click="playTeam('Dual Dynamics')">Dual Dynamics</button>

      <h2>Qualification 53</h2>
      <button :style="{ backgroundColor: 'red' }" @click="playTeam('Royal Madness')">Royal Madness</button>
      <button :style="{ backgroundColor: 'blue' }" @click="playTeam('BroSophia')">BroSophia</button>

      <h2>Qualification 54</h2>
      <button :style="{ backgroundColor: 'red' }" @click="playTeam('Travsky')">Travsky</button>
      <button :style="{ backgroundColor: 'blue' }" @click="playTeam('AiSophia')">AiSophia</button>

      <h2>Qualification 55</h2>
      <button :style="{ backgroundColor: 'red' }" @click="playTeam('King of Hearts')">King of Hearts</button>
      <button :style="{ backgroundColor: 'blue' }" @click="playTeam('Funky Fishes')">Funky Fishes</button>

      <h2>Qualification 56</h2>
      <button :style="{ backgroundColor: 'red' }" @click="playTeam('CaveBots')">CaveBots</button>
      <button :style="{ backgroundColor: 'blue' }" @click="playTeam('Brick City')">Brick City</button>

      <h2>Qualification 57</h2>
      <button :style="{ backgroundColor: 'red' }" @click="playTeam('JediDragons')">Jedi Dragons</button>
      <button :style="{ backgroundColor: 'blue' }" @click="playTeam('Quan2D2')">Quan2D2</button>

      <h2>Qualification 58</h2>
      <button :style="{ backgroundColor: 'red' }" @click="playTeam('Qualis')">Qualis</button>
      <button :style="{ backgroundColor: 'blue' }" @click="playTeam('White')">White</button>

      <h2>Qualification 59</h2>
      <button :style="{ backgroundColor: 'red' }" @click="playTeam('AlphaTech')">AlphaTech</button>
      <button :style="{ backgroundColor: 'blue' }" @click="playTeam('Infrared')">Infrared</button>

      <h2>Qualification 60</h2>
      <button :style="{ backgroundColor: 'red' }" @click="playTeam('Game Changers')">Game Changers</button>
      <button :style="{ backgroundColor: 'blue' }" @click="playTeam('Wild Tech')">Wild Tech</button>

      <h2>Qualification 61</h2>
      <button :style="{ backgroundColor: 'red' }" @click="playTeam('Quan2D2')">Quan2D2</button>
      <button :style="{ backgroundColor: 'blue' }" @click="playTeam('White')">White</button>

      <h2>Qualification 62</h2>
      <button :style="{ backgroundColor: 'red' }" @click="playTeam('JediDragons')">Jedi Dragons</button>
      <button :style="{ backgroundColor: 'blue' }" @click="playTeam('Infrared')">Infrared</button>

      <h2>Qualification 63</h2>
      <button :style="{ backgroundColor: 'red' }" @click="playTeam('Qualis')">Qualis</button>
      <button :style="{ backgroundColor: 'blue' }" @click="playTeam('Dual Dynamics')">Dual Dynamics</button>
      <hr />

      <h2>Qualification 64</h2>
      <button :style="{ backgroundColor: 'red' }" @click="playTeam('AlphaTech')">AlphaTech</button>
      <button :style="{ backgroundColor: 'blue' }" @click="playTeam('Wild Tech')">Wild Tech</button>
    </div> -->
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

const errorMessage = ref("");

// Team data
const teams = ["Quan2D2", "Funky Fishes", "Royal Madness", "AiSophia", "Game Changers", "AlphaTech"];

const selectedTeam1 = ref("");
const selectedTeam2 = ref("");

// Play the bell sound
const playSound = async () => {
  try {
    await axios.post("http://192.168.0.26:8081/trigger-bell");
    errorMessage.value = ""; // Clear any previous error messages
  } catch (error) {
    console.error("Error triggering bell:", error);
    errorMessage.value = "Error triggering bell. Please try again.";
  }
};

// Play the selected team's audio
const playTeam = async (teamName) => {
  if (!teamName) return;
  console.log(`Attempting to play team audio for: ${teamName}`);

  try {
    const response = await axios.post(
      "http://192.168.0.26:8081/play-team-audio",
      { teamName },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Server response:", response.data);
    errorMessage.value = ""; // Clear any previous error messages
  } catch (error) {
    console.error("Error triggering team audio:", error);
    errorMessage.value = "Error triggering team audio. Please try again.";
  }
};
</script>

<style scoped>
.container {
  padding: 20px;
}

.dropdown-container {
  margin-bottom: 20px;
}

.dropdowns {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.dropdown {
  flex: 1;
  margin-right: 10px;
}

select {
  padding: 10px;
  font-size: 16px;
  width: 100%;
  margin-bottom: 10px;
}

button {
  margin: 5px;
  padding: 15px 20px;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border-radius: 10px;
  width: 45%;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.bell-button {
  background-color: #4caf50;
  color: white;
}
</style>
