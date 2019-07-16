<template>
  <div class="addressEdit">
    <my-header>
      <template slot="content">编辑地址</template>
    </my-header>
    <van-address-edit
      :area-list="areaList"
      show-set-default
      :address-info="AddressInfo"
      @save="onSave"
    />
  </div>
</template>

<script>
import MyHeader from "@/components/myHeader";
import areaList from "@/assets/js/area";
import { mapMutations } from "vuex";
export default {
  name: "addressEdit",
  components: {
    MyHeader
  },
  data() {
    return {
      areaList,
      AddressInfo: {}
    };
  },
  created() {
    this.AddressInfo = this.$route.query;
  },
  methods: {
    onSave(v) {
      console.log(v);
      let data = {
        name: v.name,
        tel: v.tel,
        province: v.province,
        city: v.city,
        county: v.county,
        addressDetail: v.addressDetail,
        address: v.province + v.city + v.county + v.addressDetail + "",
        areaCode: v.areaCode,
        isDefault: v.isDefault
      };
      this.saveAddress(data);
      this.$router.push({
        path: "/address"
      });
    },
    ...mapMutations(["saveAddress"])
  }
};
</script>

<style lang="less" scoped>
</style>
