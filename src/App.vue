<template>
  <div class="app">
    <header class="header">
      <div class="left-shekel"><img :src="shekelSVG" alt="שח" /></div>
      <h1>
        <span>?</span><span>מי מ<img :src="topSvg" alt="ש" />לם בדייט</span>
      </h1>
      <div class="right-shekel"><img :src="shekelSVG" alt="שח" /></div>
    </header>
    <transition name="slide" mode="out-in">
      <router-view
        :key="$route.path"
        :questions="questions"
        :answers="answers"
        :svgPaths="svgPaths"
        :sex="sex"
        @set-sex="setSex"
        @answer-question="answerQuestion"
      ></router-view>
    </transition>
    <footer class="footer">
      <div class="left-shekel"><img :src="shekelSVG" alt="שח" /></div>
      <p>
        נוצר על ידי אור יניב |
        <a href="https://buymeacoffee.com/yourlink" target="_blank"
          >קנו לי שוקו</a
        >
      </p>
      <div class="right-shekel"><img :src="shekelSVG" alt="שח" /></div>
    </footer>
  </div>
</template>

<script>
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router.js";

const questionsM = [
  "מתכונן שעות לפני פגישה?",
  "תהיה מוכן להיפגש תמיד לידה?",
  "תצא עם מישהי שמרוויחה יותר ממך?",
  "היית מוכן להיות מפרנס משני בזוגיות?",
  "תסכים לצאת עם בחורה שמתחילה איתך?",
  "האם זה תפקיד הגבר לחזק ולפנק?",
  "מי יטפל בילדים?",
  "רבתם. הגיוני שתמיד אתה תתחיל בסולחה?",
  "תקנא אם היא מפלרטטת עם אחרים?",
  "תצא עם פמיניסטית?",
];

const questionsF = [
  "האם את אישה חזקה ועצמאית",
  "חובה שתיפגשו קרוב אלייך",
  "תצאי עם גבר נמוך ממך",
  "הפי וייף הפי לייף",
  "תצאי עם מישהו שמרוויח פחות ממך",
  "מתכוננת שעות לפני פגישה",
  "האם היית מסוגלת להיות עקרת בית",
  "האם נשים מופלות במקום העבודה",
  "היית מסוגלת להתחיל עם גבר",
  "תחלקו את מטלות הבית שווה בשווה",
];

export default {
  data() {
    return {
      sex: null,
      currentQuestion: 0,
      questions: [],
      answers: [],
      topSvg: require("@/assets/heart_svg.svg"),
      shekelSVG: require("@/assets/shekel.png"),
      svgPaths: [
        require("@/assets/flowers.svg"),
        require("@/assets/dresstux.svg"),
        require("@/assets/car.svg"),
        require("@/assets/kiss.svg"),
        require("@/assets/martiny.svg"),
        require("@/assets/heelshoe.svg"),
        require("@/assets/dessert.svg"),
        require("@/assets/male_female.svg"),
        require("@/assets/beach.svg"),
        require("@/assets/heart_q.svg"),
      ],
    };
  },
  methods: {
    setSex(selectedSex) {
      this.sex = selectedSex;
      this.questions = this.sex === "male" ? questionsM : questionsF;
    },
    answerQuestion({ id, answer }) {
      this.answers = this.answers.slice(0, id);
      this.answers.push(answer);
    },
  },
};

createApp(App).use(router).mount("#app");
</script>

<style>
:root {
  /* --warm-pink: #ffc0cb; */
  --warm-pink: #eb7388;
  /* --warm-pink: #f04664; */
  --button-text-color: #ffc0cb;
}

@font-face {
  font-family: "GveretLevinAlefAlefAlef";
  src: url("@/assets/fonts/Gveret Levin Alef Alef Alef.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "DanaYadAlefAlefAlefNormal";
  src: url("@/assets/fonts/Dana Yad Alef Alef Alef Normal.ttf")
    format("truetype");
  font-weight: normal;
  font-style: normal;
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

header .left-shekel,
footer .left-shekel {
  display: inline-block;
  float: left;
}

header .right-shekel,
footer .right-shekel {
  display: inline-block;
  float: right;
}

.right-shekel img,
.left-shekel img {
  height: 30px;
  width: 30px;
}

.header h1,
.footer p {
  margin: -5px 0 0 0;
  display: inline-block;
}

header h1 span {
  font-family: "GveretLevinAlefAlefAlef", Arial, sans-serif;
  letter-spacing: 3px;
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
  direction: rtl;
}

.question-container h2 {
  font-family: "GveretLevinAlefAlefAlef", Arial, sans-serif;
  letter-spacing: 3px;
  text-align: center;
  line-height: 1.5em;
}

.question-container button {
  font-family: "GveretLevinAlefAlefAlef", Arial, sans-serif;
  letter-spacing: 3px;
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
