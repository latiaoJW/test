<template>
  <div class="testCity">
    <router-link to="/test">返回test页面</router-link>
    <div class="content">
      <select v-model="selected">
        <option value disabled>请选择</option>
        <option>杭州</option>
        <option>广州</option>
        <option>长沙</option>
      </select>
      <span class="btn" @click="click(selected)">提交</span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  name: "testCity",
  components: {},
  data() {
    return {
      selected: ""
    };
  },
  methods: {
    click(city) {
      this.changeCity(city);
    },
    // ...mapActions(["changeCity"])
    ...mapMutations(["changeCity1"])
  }
};
</script>

<style lang="less" scoped>
</style>
