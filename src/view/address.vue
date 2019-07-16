<template>
  <div class="address">
    <my-header>
      <template slot="content">收货地址</template>
    </my-header>
    <van-address-list v-model="chosenAddressId" :list="list" @add="onAdd" @edit="onEdit" />
  </div>
</template>

<script>
import MyHeader from "@/components/myHeader";
export default {
  name: "Address",
  components: {
    MyHeader
  },
  data() {
    return {
      chosenAddressId: "0",
      list: []
    };
  },
  created() {},
  mounted() {
    let addressList = this.$store.state.address;
    addressList.forEach((element, idx) => {
      element.id = idx + "";
      if (element.isDefault) {
        this.chosenAddressId = element.id;
      }
    });
    this.list = addressList;
  },
  methods: {
    onAdd(v) {
      this.$router.push({
        path: "/addressEdit"
      });
    },

    onEdit(v, index) {
      let data = {
        id: v.id,
        name: v.name,
        tel: v.tel,
        province: v.province,
        city: v.city,
        county: v.county,
        addressDetail: v.addressDetail,
        areaCode: v.areaCode,
        isDefault: v.isDefault
      };
      this.$router.push({
        path: "/addressEdit",
        query: data
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/styles/variables.less";

.address {
  // 导航栏
  .topNav {
    box-sizing: border-box;
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 0.24rem;
    background: #fff;
    border-bottom: 1px solid @bgColor;
    .title {
      font-size: @sizeL;
      margin-left: 2.8rem;
    }
    .iconfont {
      font-size: 20px;
      font-weight: bold;
    }
  }
  // 地址列表内容
  .content {
  }
}
</style>
