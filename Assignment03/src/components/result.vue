<template>
  <div class="result-box">
    <div class="content-box" v-show="showSuccess">
      <h3>Congratulations {{ name }}! You pass the quiz!</h3>
    </div>
    <div class="content-box" v-show="!showSuccess">
      <h3>Sorry {{ name }}, you fail the quiz......</h3>
    </div>
    <div class="btns">
      <el-button @click="onBack(false)">Back to Start</el-button>
      <el-button type="success" @click="onBack(true)">Try again</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "result-box",
  props: ["totalScore", "name"],
  data() {
    return {
      showSuccess: "",
    };
  },
  watch: {
    totalScore() {
      if (this.totalScore > 0.8) {
        this.showSuccess = true;
      } else {
        this.showSuccess = false;
      }
    },
  },
  methods: {
    onBack(status) {
      this.$emit("func", status);
    },
  },
};
</script>

<style>
.result-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
}
</style>