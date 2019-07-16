<template>
  <div class="test">
    <router-link to="/testCity">返回testCity页面</router-link>

    <!-- Getter -->
    <div>获取vuex中的值: {{ this.$store.getters.currentCity }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "test",
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["city"])
  }
};
</script>

<style lang="less" scoped>
</style>
