<template>
  <div class="login-box">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Start Box</span>
      </div>
      <div class="content">
        <el-form :model="loginForm" label-position="top">
          <el-form-item label="Student Name">
            <el-input
              v-model="loginForm.user"
              placeholder="Please enter your name"
            ></el-input>
          </el-form-item>
          <el-form-item label="Test type">
            <el-select
              v-model="loginForm.type"
              placeholder="Please select the test type"
              @change="changeVal"
            >
              <el-option label="Math" value="1"></el-option>
              <el-option label="Science" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onStart">Start test</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "login",
  props: ["showPage"],
  data() {
    return {
      loginForm: {
        user: "",
        type: "",
      },
    };
  },
  watch: {
    showPage() {
      this.$set(this.loginForm, "user", "");
      this.$set(this.loginForm, "type", "");
    },
  },
  methods: {
    onStart() {
      console.log(this.loginForm.type);
      if (this.loginForm.user && this.loginForm.type) {
        this.$emit("func", {
          type: this.loginForm.type,
          name: this.loginForm.user,
        });
      }
    },
    changeVal() {
      this.$forceUpdate();
    },
  },
};
</script>

<style scoped>
.login-box {
  margin-top: 100px;
}
.text {
  font-size: 14px;
}
.item {
  padding: 18px 0;
}
.box-card {
  width: 480px;
  margin: auto;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.el-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>