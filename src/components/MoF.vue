/* eslint-disable */
<template>
  <div class="question-container">
    <h2>מה המין שלך?</h2>
    <button @click="setSex('female')">נקבה</button>
    <button @click="setSex('male')">זכר</button>
  </div>
</template>

<script>
export default {
  methods: {
    setSex(sex) {
      this.$emit("set-sex", sex);
      this.$router.push("/question/0");
    },
  },
};
</script>
