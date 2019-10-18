<template>
  <div>
    <van-nav-bar
      title="个人信息"
    />
    <div class="form1">
    <van-tag type="success">{{loanman}}</van-tag>
      <div class="contract3">
      <van-cell-group class="group">
        <van-field
          placeholder="请输入姓名"
          label="姓名"
          required
          clearable
          input-align="right"
          @blur="inputname"
          v-model.trim="form.name01"
        />
      </van-cell-group>

      <van-cell-group class="group">
      <van-field
      readonly
      required
      clickable
      label="性别"
      :value="sex01"
      is-link
      input-align="right"
      placeholder="选择"
      @click="showPicker01 = true"
      />
      </van-cell-group>

      <van-popup v-model="showPicker01" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns01"
          @cancel="showPicker01 = false"
          @confirm="onConfirm01"
        />
      </van-popup>

      <van-cell-group class="group">
        <van-field
          placeholder="请输入身份证号码"
          required
          clearable
          input-align="right"
          @blur="inputid"
          v-model.trim="form.idcardnum01"
          label="身份证号"
        />
      </van-cell-group>

      <van-cell-group class="group">
        <van-field
          placeholder="请输入银行卡号码"
          required
          clearable
          type="number"
          maxlength="19"
          input-align="right"
          @blur="inputbank"
          v-model.trim="form.banknum01"
          label="银行卡号"
        />
      </van-cell-group>

      <van-cell-group class="group">
        <van-field
          placeholder="请输入手机号"
          required
          clearable
          type="number"
          maxlength="11"
          input-align="right"
          @blur="inputphone"
          v-model.trim="form.phone01"
          label="手机号"
        />
      </van-cell-group>
    </div>
      <div class="addloan" v-if='!show'>
        <van-icon class="yocon"  @click="dogg" name="add-o" color="#00CCFF" />
        添加借款人
      </div>

    <div class="contract2" v-if='show'>
    <van-tag type="success" class="tags">借款人2</van-tag>
      <van-cell-group class="group">
        <van-field
          placeholder="请输入姓名"
          label="姓名"
          required
          clearable
          input-align="right"
          @blur="inputname"
          v-model.trim="form.name02"
        />
      </van-cell-group>

      <van-cell-group class="group">
      <van-field
      readonly
      required
      clickable
      label="性别"
      :value="sex02"
      is-link
      input-align="right"
      placeholder="选择"
      @click="showPicker02 = true"
      />
      </van-cell-group>

      <van-popup v-model="showPicker02" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns02"
          @cancel="showPicker02 = false"
          @confirm="onConfirm02"
        />
      </van-popup>

      <van-cell-group class="group">
        <van-field
          placeholder="请输入身份证号码"
          required
          clearable
          input-align="right"
          @blur="inputid"
          v-model.trim="form.idcardnum02"
          label="身份证号"
        />
      </van-cell-group>

      <van-cell-group class="group">
        <van-field
          placeholder="请输入银行卡号码"
          required
          clearable
          type="number"
          maxlength="19"
          input-align="right"
          @blur="inputbank"
          v-model.trim="form.banknum02"
          label="银行卡号"
        />
      </van-cell-group>

      <van-cell-group class="group">
        <van-field
          placeholder="请输入手机号"
          required
          clearable
          type="number"
          maxlength="11"
          input-align="right"
          @blur="inputphone"
          v-model.trim="form.phone02"
          label="手机号"
        />
      </van-cell-group>
  </div> 

      <div class="rad">
        <van-checkbox v-model="form.value" icon-size=".14rem">
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

        loanman:'借款人',

        tname02:false,
        tphone02:false,
        tbank02:false,
        tid02:false,

        but:true,   //按钮
        reg: {
            name: /^[\u4e00-\u9fa5]+$/, //中文
            phone: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/, //手机号
            id: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,  //身份证
        },
        show:false, //显示借款人2
        sex01:'',
        sex02:'',
        showPicker01: false,
        showPicker02: false,
        columns01: ['男','女'],
        columns02: ['男','女'],

        form: {
            name01: "",
            name02:"",
            sex01:'',
            sex02:'',
            idcardnum01: "",
            idcardnum02: "",
            banknum01: "",
            banknum02: "",
            phone01: "",
            phone02: "",
            value: false
        }
    };
  },
  mounted() {},
  methods: {
    dogg(){
      this.show=!this.show;
      if(this.show){
        this.loanman='借款人1'
      }else{
        this.loanman='借款人'
      }
    },
    getsure() {
      if(this.show){
        if( this.form.sex01 == '' || this.form.sex02 == ''){
            this.$toast('请选择性别')
        }else if(this.form.value == false){
            this.$toast('请了解并确认借款合同内容')
        }else{
            this.$router.push("/result");//跳转
        }
      }else{
        if( this.form.sex01 == ''){
            this.$toast('请选择性别')
        }else if(this.form.value == false){
            this.$toast('请了解并确认借款合同内容')
        }else{
            this.$router.push("/result");//跳转
        }
      }
    },
    onConfirm01(value,index) {
      this.sex01 = value;
      this.form.sex01 = index;
      this.showPicker01 = false;
    },
    onConfirm02(value,index) {
      this.sex02 = value;
      this.form.sex02 = index;
      this.showPicker02 = false;
    },
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
    
    inputname02(e){
        var myreg=/^[\u4e00-\u9fa5]+$/;
        if(show){
          if(!myreg.test(this.form.name02)){
              this.$toast('请输入中文姓名')
              this.tname02=false
              this.but=true
          }else{
              if(this.tphone02 && this.tbank02 && this.tid02){
                  this.but=false
              }else{
                  this.tname02=true
              }
          }
        }
    },
    inputphone02(e){
        // 手机号正则
        var myreg=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
        if(show){
        if(!myreg.test(this.form.phone02)){
            this.$toast('请输入正确格式的手机号码')
            this.tphone02=false
            this.but=true
        }else{
            if(this.tname02 && this.tbank02 && this.tid02){
                this.but=false
            }else{
                this.tphone02=true
            }
        }}
    },
    inputid02(e){
        var myreg=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if(show){
        if(!myreg.test(this.form.idcardnum02)){
            this.$toast('请输入正确格式的身份证号码')
            this.tid02=false
            this.but=true
        }else{
            if(this.tphone02 && this.tbank02 && this.tname02){
                this.but=false
            }else{
                this.tid02=true
            }
        }}
    },
    inputbank02(e){
      if(show){
        if(this.form.banknum02.length<16){
            this.$toast('请输入正确格式的银行卡号码')
            this.tbank02=false
            this.but=true
        }else{
            if(this.tphone02 && this.tid02 && this.tname02){
                this.but=false
            }else{
                this.tbank02=true
            }
        }}
    },
  }
};
</script>

<style lang="less">
.form1 {
  margin: 1rem 1rem;
  padding: 0.8rem;

  .rad {
    height: 1.62rem;
    line-height: 1.62rem;
    font-size: 0.14rem;
    text-align: center !important;
    width: 100%;
    margin-bottom: 1.4rem;
  }
  .addloan{
    height: 1.4rem;
    line-height: 1.4rem;
    text-align: right;
    margin: .6rem 0;
    font-size: .24rem;
    .yocon{
      position: relative;
      top: 3px;
    }
  }
  .contract2{
    border-top: 1px dashed rgba(136, 89, 89, 0.507);
    padding-top: 1rem;
  }
  .contract3{
    padding-top: 1rem;
  }
  .tags{
    margin-bottom: 1rem;
  }
}
</style>