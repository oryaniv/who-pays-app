<template>
  <div class="app">
    <header class="header">
      <h1>My Awesome App</h1>
    </header>
    <div class="content-container">
      <div v-if="stage === 'sex'" class="question-container">
        <h2>What is your sex?</h2>
        <button @click="setSex('male')">Male</button>
        <button @click="setSex('female')">Female</button>
      </div>

      <transition name="slide" mode="out-in">
        <div
          v-if="stage === 'questions' && currentQuestion < questions.length"
          :key="currentQuestion"
          class="question-container"
        >
          <h2>{{ questions[currentQuestion] }}</h2>
          <button @click="answerQuestion(true)">Yes</button>
          <button @click="answerQuestion(false)">No</button>
          <div class="svg-container">
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
            >
              <path :d="svgPaths[currentQuestion]" fill="black" />
            </svg>
          </div>
        </div>
      </transition>

      <div v-if="stage === 'summary'" class="summary-container">
        <h2>Summary</h2>
        <p>Sex: {{ sex }}</p>
        <ul>
          <li v-for="(answer, index) in answers" :key="index">
            {{ questions[index] }}: {{ answer ? "Yes" : "No" }}
          </li>
        </ul>
      </div>
    </div>
    <footer class="footer">
      <p>
        Created by Your Name |
        <a href="https://buymeacoffee.com/yourlink" target="_blank"
          >Buy me a beer</a
        >
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stage: "sex",
      sex: null,
      currentQuestion: 0,
      questions: [
        "Do you enjoy outdoor activities?",
        "Are you a morning person?",
        "Do you prefer coffee over tea?",
        "Do you like to travel?",
        "Are you interested in technology?",
        "Do you enjoy reading books?",
        "Are you a pet owner?",
        "Do you prefer summer over winter?",
        "Are you into fitness?",
        "Do you enjoy cooking?",
      ],
      answers: [],
      svgPaths: [
        require("@/assets/question1.svg"),
        require("@/assets/question2.svg"),
        require("@/assets/question3.svg"),
        require("@/assets/question4.svg"),
        require("@/assets/question5.svg"),
        require("@/assets/question6.svg"),
        require("@/assets/question7.svg"),
        require("@/assets/question8.svg"),
        require("@/assets/question9.svg"),
        require("@/assets/question10.svg"),
      ],
    };
  },
  methods: {
    setSex(selectedSex) {
      this.sex = selectedSex;
      this.stage = "questions";
    },
    answerQuestion(answer) {
      this.answers.push(answer);
      this.currentQuestion++;
      if (this.currentQuestion >= this.questions.length) {
        this.stage = "summary";
      }
    },
  },
};
</script>

<style>
:root {
  --warm-pink: #ffc0cb;
  --button-text-color: #ffc0cb;
}

body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: var(--warm-pink);
}

.app {
  font-family: Arial, sans-serif;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}

.header,
.footer {
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
  padding: 10px 0;
}

.header h1,
.footer p {
  margin: 0;
}

.footer a {
  color: white;
  text-decoration: none;
}

.content-container {
  width: 100%;
  max-width: 600px;
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.question-container,
.summary-container {
  padding: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.svg-container {
  margin-top: 20px;
}

button {
  background-color: black;
  border: none;
  color: var(--button-text-color);
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 16px;
  margin: 10px auto;
  cursor: pointer;
  border-radius: 20px;
  width: 75%;
  max-width: 200px;
}

ul {
  text-align: left;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

@media (min-width: 601px) {
  button {
    width: 200px;
  }
}
</style>
