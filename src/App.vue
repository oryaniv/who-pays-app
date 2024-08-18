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
        נוצר על ידי
        <a target="_blank" href="https://www.linkedin.com/in/or-yaniv-02a68095/"
          >אור יניב</a
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
import VueGtag from "vue-gtag-next";

const questionsM = [
  { q: "האם לדעתך נשים זוכות ליחס הוגן ושווה במקום העבודה?", id: 1 },
  { q: "האם קשה לך להיות עם מישהי שמרוויחה יותר ממך?", id: 2 },
  { q: "האם אתה חושב שהגבר צריך להיות המפרנס בזוגיות?", id: 3 },
  { q: "האם אתה חושב שגבר צריך להימנע מלהפגין חולשה או רגשות חזקים?", id: 4 },
  { q: "האם תרגיש מבוכה אם היא זו שתציע לך נישואין?", id: 5 },
  { q: "האם תרגיש שלא בנוח במידה ולבת זוגך ידידות קרובה עם גבר אחר?", id: 6 },
  { q: "האם אתה חושב שגבר צריך להקפיד על מחוות כמו לפתוח דלת, ולהסיע?", id: 7 },
  { q: "רבתם. הגיוני שתמיד אתה תתחיל בסולחה?", id: 8 },
  { q: "האם תעדיף להשאיר לה כל מה שקשור לילדים?", id: 9 },
  { q: "האם תתעקש להיות זה שנוהג ברכב?", id: 10 },
];

const questionsF = [
  { q: "האם תהיי מוכנה לוותר על ילדים לטובת קריירה?", id: 1 },
  { q: "האם תהיי מוכנה לפגישה ראשונה קרוב אליו?", id: 2 },
  { q: "תצאי עם גבר נמוך ממך?", id: 3 },
  { q: "האם תעדיפי שיהיו לכם שני חשבונות בנק נפרדים?", id: 4 },
  { q: "האם לדעתך מוסד הנישואין כבר לא מאוד רלוונטי?", id: 5 },
  { q: "האם לדעתך איפור הוא דבר מקטין?", id: 6 },
  {
    q: "האם תרגישי בנוח במידה ולבן זוגך הייתה ידידות קרובה עם אישה אחרת?",
    id: 7,
  },
  { q: "האם תהיי מוכנה להיות עם בן זוג שלוקח את תפקיד המטפל בילדים?", id: 8 },
  { q: "האם תרגישי בנוח להציע נישואין לבן הזוג שלך?", id: 9 },
  { q: "האם חשוב לך מאוד לשמור על החברים שלך מלפני הנישואין?", id: 10 },
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
      this.shuffle(this.questions);
    },
    answerQuestion({ id, answer }) {
      this.answers = this.answers.slice(0, id);
      this.answers.push(answer);
    },
    shuffle(array) {
      let currentIndex = array.length;

      while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }
    },
  },
  mounted() {
    const svgPaths = [
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
      require("@/assets/linkedin.svg"),
      require("@/assets/facebook.svg"),
      require("@/assets/twitterx.svg"),
    ];

    svgPaths.forEach((path) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.href = path;
      link.as = "image";
      link.type = "image/svg+xml";
      document.head.appendChild(link);
    });
  },
};

const app = createApp(App);

app.use(VueGtag, {
  property: {
    id: "G-F6ZCHHYD8K",
  },
  useDebugger: false, // Set to true for development
  isEnabled: true, // Set to false to disable tracking
});

app.use(router);
app.mount("#app");
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

@supports (height: 100dvh) {
  .app {
    height: 100dvh;
  }
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

.footer p {
  font-family: "DanaYadAlefAlefAlefNormal", Arial, sans-serif;
  font-size: 26px;
}

.footer p a {
  color: #ffc0cb;
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
.summary-container,
.share-container {
  padding: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  direction: rtl;
}

.question-container pre,
.summary-container pre {
  font-family: "GveretLevinAlefAlefAlef", Arial, sans-serif;
  font-size: 20px;
  line-height: 1.5em;
}

.summary-container pre {
  margin: 0 -20px 0 1px;
}

.question-container pre {
  margin-right: -20px;
}

.question-container h2,
.share-container h2 {
  font-family: "GveretLevinAlefAlefAlef", Arial, sans-serif;
  letter-spacing: 3px;
  text-align: center;
  line-height: 1.5em;
}

.share-container p {
  font-family: "GveretLevinAlefAlefAlef", Arial, sans-serif;
  letter-spacing: 3px;
}

.question-container button,
.summary-container button,
.share-container button {
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
  border-radius: 30px;
  width: 75%;
  max-width: 200px;
  transition: all 0.5s ease;
  border: 2px solid black;
}

button:hover {
  color: black;
  background-color: var(--button-text-color);
}

.share-buttons {
  margin-bottom: 30%;
}

.share-buttons div {
  display: inline-flex;
  height: 100px;
  width: 100px;
  transition: all 0.5s ease;
  cursor: pointer;
}

.share-buttons div:hover {
  filter: invert(1);
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
