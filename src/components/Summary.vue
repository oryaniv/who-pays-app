/* eslint-disable */
<template>
  <div class="summary-container">
    <pre v-if="sex== 'male' && score >= 7">
      אתה גבר מהדור הישן,
      אוהב לחזר, לפנק, לפזר אהבה.

      אולי זה גורם לך לעבוד קשה,
      אבל אתה מאמין שזה שווה את זה.

      שלם עליה ידידי, ותוודא שאתה יוצא עם
      מישהי שמעריכה את זה, 
      ולא סתם קופצת על ההזדמנות.
    </pre>
    <pre v-if="sex === 'female' && score < 3">
      למרות כל המודרנה, בסופו של דבר
      את רואה עצמך כנסיכה.

      יפה, נחשקת, מחוזרת. את רוצה גבר
      שיתייחס אלייך בהתאם.

      תני לו לשלם, תני לו לחזר, 
      הניחי לו להיות הגבר שרודף אחרייך.
      רק תוודאי שזה בחור שמתאים לתפקיד.
    </pre>
    <pre v-if="sex === 'male' && score >= 3 && score < 7">
      אמת, אתה רוצה לחזר ולפנק,
      אבל אתה כבר מבין שבתרבות הנוכחית,
      נשים הן לא עלמות במצוקה.

      הן עובדות, הן מרוויחות,
      הן מסוגלות לעמוד על
      הרגליים שלהן.
      אז למה לא לתת להן קצת עצמאות?

      שלם עליה בפעם הראשונה לפחות.
      אבל אחר כך?
      אתם שווים, וצריכים להתנהג בהתאם.
    </pre>
    <pre v-if="sex === 'female' && score >= 3 && score < 7">
      גם לך נחמד כשמחזרים אחרייך,
      גם לך נחמד 
      כשעוזרים לך ומפנקים אותך.

      אבל את לא נסיכה ולא ילדה 
      שצריכה שאחרים יטפלו בה.
      את אישה בוגרת,
      ומסוגלת לעמוד על שתי הרגליים לבד.

      לשם הרומן, תני לו לשלם בפעם הראשונה,
      אבל אחר כך שווים,
      בלי טריקים ובלי שטיקים.
    </pre>
    <pre v-if="sex === 'male' && score < 3">
      ידידי, ברכותיי. אתה גבר מודרני ונאור.
      בניגוד לגברים של פעם,
      אתה לא הולך לעבוד כמו חמור.

      אתה רוצה אישה חזקה, שלא צריכה
      עזרה, עצה או הצלה. 
      אתה רוצה לשבת שם ולהביט בה 
      בהערצה.

      תכלס, אולי תתן לה לשלם לבד מדי פעם
      ורק שווה בשווה בהתחלה.
      אחרי הכול, כנראה שהקריירה
      שלה מזהירה משלך.
    </pre>
    <pre v-if="sex== 'female' && score >= 7">
      את אישה חזקה ועצמאית,
      כל הכבוד לך!
      את לא מאמינה בסטיגמות ודעות קדומות,
      ולא תניחי לדבר לעצור אותך.

      מה זה בשבילך, לשלם על עצמך בדייט?
      האמת,
      תראי לו מה זה, שלמי עליו בעצמך.
      לא רק גברים יכולים.

      לכי על זה, אל תחששי מאיש.
      גם בדרך חזור, תראי לו,
      את מלכת הכביש.
    </pre>
    <button @click="share()">{{this.continueText}}</button>
  </div>
</template>

<script>
/* eslint-disable */
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/firebase';

export default {
  props: ["questions", "answers", "sex"],
  data() {
    return {
        score: this.answers.filter(a => !!a).length,
        continueText: this.sex == "male" ? "המשך" : "המשיכי"
    }
  },
  methods: {
      share() {
        this.$router.push("/share");
      },
      formatChoices(sex, answers, questions) {
        let sum = 0;
        questions.forEach((x, i) => {
          sum += answers[i] ? Math.pow(2, x.id) : 0;
        });
        sum += (sex === 'male') ? 1 : 0 ;
        return sum;
      },
      async addUserChoices(choices) {
      if(!choices || choices.length < 10) {
        return;
      }
      try {
        const docRef = await addDoc(collection(db, "whoPaysData"), {
          choices: choices,
          timestamp: new Date()
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  },
  mounted() {
    const userChoices = this.formatChoices(this.sex, this.answers, this.questions);
    this.addUserChoices(userChoices);
  }
}
</script>
