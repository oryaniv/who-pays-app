/* eslint-disable */
<template>
  <div class="question-container">
    <pre>
        אז מי משלם בדייט?
        שאלת כמה מאות השקלים (לפעמים).

        רבים ניסו למצוא תשובה לשאלה,
        אבל היא עודנה בלתי פתורה.

        אך אל דאגה! רק ענו על כמה שאלות,
        ומיד תקבלו תשובה, ברורה ובהירה.

        בהצלחה :)
    </pre>
    <button @click="begin()">קדימה!</button>
  </div>
</template>

<script>
export default {
  methods: {
    begin() {
      this.$router.push("/MoF");
    },
  },
};
</script>
