/* eslint-disable */
<template>
  <div class="summary-container">
    <h2>Summary</h2>
    <p>Sex: {{ sex }}</p>
    <ul>
      <li v-for="(answer, index) in answers" :key="index">
        {{ questions[index] }}: {{ answer ? "Yes" : "No" }}
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: ["questions", "answers", "sex"],
};
</script>
