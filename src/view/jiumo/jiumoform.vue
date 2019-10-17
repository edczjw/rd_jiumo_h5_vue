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
          @blur="inputname"
          v-model.trim="form.name"
        />
      </van-cell-group>

      <van-cell-group class="group">
        <van-field
          placeholder="请输入身份证号码"
          required
          input-align="right"
          @blur="inputid"
          v-model.trim="form.idcardnum"
          label="身份证号码"
        />
      </van-cell-group>

      <van-cell-group class="group">
        <van-field
          placeholder="请输入银行卡号码"
          required
          type="number"
          maxlength="19"
          input-align="right"
          @blur="inputbank"
          v-model.trim="form.banknum"
          label="银行卡号码"
        />
      </van-cell-group>

      <van-cell-group class="group">
        <van-field
          placeholder="请输入手机号"
          required
          type="number"
          maxlength="11"
          input-align="right"
          @blur="inputphone"
          v-model.trim="form.phone"
          label="手机号"
        />
      </van-cell-group>

      <div class="rad">
        <van-checkbox v-model="form.value" icon-size=".24rem">
          我已充分了解并确认《<router-link to="loanContract">借款合同</router-link>》内容
        </van-checkbox>
      </div>

      <van-button round style="margin:0 auto;width:100%;" :disabled="but" @click="getsure" type="info">确定</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        tname:false,
        tphone:false,
        tbank:false,
        tid:false,
        but:true,   //按钮
        reg: {
            name: /^[\u4e00-\u9fa5]+$/, //中文
            phone: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/, //手机号
            id: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,  //身份证
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
    inputname(e){
        var myreg=/^[\u4e00-\u9fa5]+$/;
        if(!myreg.test(this.form.name)){
            this.$toast('请输入中文姓名')
            this.tname=false
            this.but=true
        }else{
            if(this.tphone && this.tbank && this.tid){
                this.but=false
            }else{
                this.tname=true
            }
        }
    },
    inputphone(e){
        // 手机号正则
        var myreg=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
        if(!myreg.test(this.form.phone)){
            this.$toast('请输入正确格式的手机号码')
            this.tphone=false
            this.but=true
        }else{
            if(this.tname && this.tbank && this.tid){
                this.but=false
            }else{
                this.tphone=true
            }
        }
    },
    inputid(e){
        var myreg=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if(!myreg.test(this.form.idcardnum)){
            this.$toast('请输入正确格式的身份证号码')
            this.tid=false
            this.but=true
        }else{
            if(this.tphone && this.tbank && this.tname){
                this.but=false
            }else{
                this.tid=true
            }
        }
    },
    inputbank(e){
        if(this.form.banknum.length<16){
            this.$toast('请输入正确格式的银行卡号码')
            this.tbank=false
            this.but=true
        }else{
            if(this.tphone && this.tid && this.tname){
                this.but=false
            }else{
                this.tbank=true
            }
        }
    },
    getsure() {
        if(this.form.value == false){
            this.$toast('请了解并确认借款合同内容')
        }else{
            this.$router.push("/result");//跳转
        }
    }
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