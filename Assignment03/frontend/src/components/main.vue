<template>
  <div class="main">
    <div style="font-size: 20px; padding-top: 50px; text-align: center">
      {{ n }}/{{ total }}
    </div>
    <el-carousel
      trigger="click"
      indicator-position="none"
      arrow="never"
      :autoplay="false"
      ref="carousel"
    >
      <el-carousel-item v-for="(item, index) in questions" :key="index">
        <h3 class="small">{{ item.q }}</h3>
        <div>
          <el-radio
            v-for="(option, oindex) in item.s"
            :key="oindex"
            v-model="res[index]"
            :label="oindex"
            border
            >{{ option }}</el-radio
          >
        </div>
        <el-button
          type="success"
          @click="submitAnswer(item.a, index)"
          v-show="showSubmit"
          >Submit</el-button
        >
        <div class="explain-box" v-show="!showSubmit">
          <h3 class="small">Explanation</h3>
          <p>{{ item.e }}</p>
          <el-button type="success" @click="goNext">Got it!</el-button>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  props: ["type", "showPage"],
  data() {
    return {
      n: 1,
      questions: [],
      res: [],
      total: 0,
      showSubmit: true,
      score: 0,
    };
  },
  watch: {
    showPage() {
      if (this.showPage) {
        this.getQuestion(this.type);
      }
    },
    type() {
      this.getQuestion(this.type);
    },
    n() {
      if (this.n > this.total) {
        let newScore = this.score / this.total;
        this.$emit("func", newScore);
      }
    },
  },
  methods: {
    getQuestion(t) {
      this.res = [];
      this.n = 1;
      this.questions = [];
      this.total = 2;
      this.score = 0;
      this.showSubmit = true;
      this.$http.get('./static/questions.json').then((res) => {
        if (t == 1) {
          this.questions = res.data["type1"];
          this.total = this.questions.length;
        } else {
          this.questions = res.data["type2"];
          this.total = this.questions.length;
        }
      });
    },
    submitAnswer(a, index) {
      if (this.res[index] === a) {
        this.$refs.carousel.next();
        this.$message({
          message: "Brilliant!",
          type: "success",
          duration: 1000,
        });
        this.n += 1;
        this.score += 1;
      } else {
        this.showSubmit = false;
        this.$message({
          message: "Sorry, you are not right......",
          type: "error",
          duration: 1000,
        });
      }
    },
    goNext() {
      this.n += 1;
      this.$refs.carousel.next();
      this.showSubmit = true;
    },
  },
};
</script>

<style>
.el-carousel {
  width: 80%;
  margin: auto;
  margin-top: 70px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.el-carousel .el-button {
  margin-top: 20px;
}
</style>
