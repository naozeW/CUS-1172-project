<template>
  <div id="app">
    <login-box v-show="showbox[0]" @func="gotest" :showPage="showbox[0]"></login-box>
    <main-page
      v-show="showbox[1]"
      :type="testType"
      :showPage="showbox[1]"
      @func="getScore"
      ref="testPage"
    ></main-page>
    <result-box
      v-show="showbox[2]"
      :totalScore="score"
      :name="username"
      @func="getAgain"
    ></result-box>
  </div>
</template>

<script>
import loginBox from "./components/loginBox";
import mainPage from "./components/main";
import resultBox from "./components/result";
export default {
  name: "App",
  data() {
    return {
      showbox: [true, false, false],
      testType: "",
      score: 0,
      username: "",
    };
  },
  methods: {
    gotest(data) {
      this.showbox[0] = false;
      this.showbox[1] = true;
      this.showbox[2] = false;
      this.testType = data.type;
      this.username = data.name;
    },
    getScore(data) {
      let temp = data;
      this.score = temp;
      this.showbox[0] = false;
      this.showbox[1] = false;
      this.showbox[2] = true;
    },
    getAgain(data) {
      if (data) {
        this.$set(this.showbox,0,false)
        this.$set(this.showbox,1,true)
        this.$set(this.showbox,2,false)
      } else {
        this.$set(this.showbox,0,true)
        this.$set(this.showbox,1,false)
        this.$set(this.showbox,2,false)
      }
    },
  },
  components: {
    loginBox,
    mainPage,
    resultBox,
  },
};
</script>

<style>
html {
  height: 100%;
}
body,
#app {
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>
