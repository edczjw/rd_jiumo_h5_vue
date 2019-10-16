<template>
  <div>
    <van-nav-bar
      title="个人信息"
    />
    <div class="form1">
      <van-cell-group class="group">
        <van-field
          placeholder="请输入姓名"
          label="姓名"
          required
          input-align="right"
          v-model.trim="form.name"
        />
      </van-cell-group>

      <van-cell-group class="group">
        <van-field
          placeholder="请输入身份证号码"
          required
          input-align="right"
          v-model.trim="form.idcardnum"
          label="身份证号码"
        />
      </van-cell-group>

      <van-cell-group class="group">
        <van-field
          placeholder="请输入银行卡号码"
          required
          type="number"
          max-length="19"
          input-align="right"
          v-model.trim="form.banknum"
          label="银行卡号码"
        />
      </van-cell-group>

      <van-cell-group class="group">
        <van-field
          placeholder="请输入手机号"
          required
          type="number"
          max-length="11"
          input-align="right"
          v-model.trim="form.phone"
          label="手机号"
        />
      </van-cell-group>

      <div class="rad">
        <van-checkbox v-model="form.value" icon-size=".24rem">
          我已充分了解并确认《
          <router-link to="loanContract">借款合同</router-link>》内容
        </van-checkbox>
      </div>

      <van-button round style="margin:0 auto;width:100%;" @click="getsure" type="info">确定</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reg: {
        name: /^[\u4e00-\u9fa5]+$/, //中文
        phone: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/ //手机号
      },
      form: {
        name: "",
        idcardnum: "",
        banknum: "",
        phone: "",
        value: false
      }
    };
  },
  mounted() {},
  methods: {
    getsure() {}
  }
};
</script>

<style lang="less">
.form1 {
  margin: 6rem 1rem;
  padding: 0.2rem;
  .rad {
    height: 1.62rem;
    line-height: 1.62rem;
    font-size: 0.14rem;
    text-align: center !important;
    width: 100%;
    margin-bottom: 0.4rem;
  }
}
</style>