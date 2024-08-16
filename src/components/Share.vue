/* eslint-disable */
<template>
  <div class="share-container">
    <h2>נהנית?</h2>
    <p>לחצו כדי לשתף את החברים!</p>
    <div class="share-buttons">

      <div @click="shareOnLinkedIn" class="linkedin">
        <img class="" :src="linkedInSvg" alt="לינקדאין" />
      </div>

      <div @click="shareOnFacebook" class="facebook">
        <img :src="facebookSvg" alt="פייסבוק" />
      </div>

      <div @click="shareOnX" class="X">
         <img :src="xSvg" alt="איקס" />
      </div>
      
    </div>
    <button @click="restart()">להתחלה</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appUrl: 'https://who-pays-app-qz3p.vercel.app/',
      appName: 'מי משלם בדייט?',
      appDescription: 'גלו מי עומד לשלם בדייט הבא!',
      xSvg: require("@/assets/twitterx.svg"),
      facebookSvg: require("@/assets/facebook.svg"),
      linkedInSvg: require("@/assets/linkedin.svg")
    }
  },
  methods: {
    shareOnFacebook() {
      const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.appUrl)}`;
      window.open(url, '_blank');
    },
    shareOnX() {
      const text = `${this.appDescription} ${this.appUrl}`;
      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    },
    shareOnLinkedIn() {
      const url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(this.appUrl)}&title=${encodeURIComponent(this.appName)}&summary=${encodeURIComponent(this.appDescription)}`;
      window.open(url, '_blank');
    },
    restart() {
        this.$router.push("/");
    },
  },
};
</script>
