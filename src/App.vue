<template>
  <div class="app">
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
.app {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.question-container,
.summary-container {
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
}

button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
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

@media (max-width: 600px) {
  .app {
    padding: 10px;
  }

  button {
    padding: 10px 20px;
    font-size: 14px;
  }
}
</style>
