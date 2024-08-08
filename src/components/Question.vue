/* eslint-disable */
<template>
  <div class="question-container">
    <h2><span>?{{ question }}</span></h2>
    <button @click="answerQuestion(true)">כן</button>
    <button @click="answerQuestion(false)">לא</button>
    <div class="svg-container">
      <img :src="svgPath" alt="Question Image" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["questions", "answers", "svgPaths"],
  computed: {
    id() {
      return parseInt(this.$route.params.id);
    },
    question() {
      return this.questions[this.id];
    },
    svgPath() {
      return this.svgPaths[this.id];
    },
  },
  methods: {
    answerQuestion(answer) {
      this.$emit("answer-question", { id: this.id, answer });
      if (this.id < this.questions.length - 1) {
        this.$router.push(`/question/${this.id + 1}`);
      } else {
        this.$router.push("/summary");
      }
    },
  },
};
</script>
