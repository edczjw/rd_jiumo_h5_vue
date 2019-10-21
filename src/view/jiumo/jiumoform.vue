<template>
  <div>
    <van-nav-bar title="个人信息" />
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
            :value="gender01"
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
            v-model.trim="form.idNo01"
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
            v-model.trim="form.bankCardNo01"
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
            v-model.trim="form.mobile01"
            label="手机号"
          />
        </van-cell-group>
      </div>
      <div class="addloan" v-if="!show">
        <van-icon class="yocon" @click="dogg" name="add-o" color="#00CCFF" />添加借款人
      </div>

      <div class="contract2" v-if="show">
        <van-tag type="success" class="tags">借款人2</van-tag>
        <van-cell-group class="group">
          <van-field
            placeholder="请输入姓名"
            label="姓名"
            required
            clearable
            input-align="right"
            @blur="inputname02"
            v-model.trim="form.name02"
          />
        </van-cell-group>

        <van-cell-group class="group">
          <van-field
            readonly
            required
            clickable
            label="性别"
            :value="gender02"
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
            @blur="inputid02"
            v-model.trim="form.idNo02"
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
            @blur="inputbank02"
            v-model.trim="form.bankCardNo02"
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
            @blur="inputphone02"
            v-model.trim="form.mobile02"
            label="手机号"
          />
        </van-cell-group>
      </div>

      <van-button round style="margin:0 auto;width:100%;" @click="getsure" type="info">确定</van-button>

      <div class="rad">
        <van-checkbox v-model="form.value" icon-size="1rem">
          我已充分了解并确认《
          <router-link to="loanContract">借款合同</router-link>》内容
        </van-checkbox>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tname: false,
      tphone: false,
      tbank: false,
      tid: false,

      loanman: "借款人",

      tname02: false,
      tphone02: false,
      tbank02: false,
      tid02: false,

      // but:true,   //按钮
      reg: {
        name: /^[\u4e00-\u9fa5]+$/, //中文
        phone: /^1[3456789]\d{9}$/, //手机号
        id: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/ //身份证
      },
      show: false, //显示借款人2
      gender01: "",
      gender02: "",
      showPicker01: false,
      showPicker02: false,
      columns01: ["女", "男"],
      columns02: ["女", "男"],

      form: {
        name01: "",
        name02: "",
        gender01: null,
        gender02: null,
        idNo01: "",
        idNo02: "",
        bankCardNo01: "",
        bankCardNo02: "",
        mobile01: "",
        mobile02: "",
        value: false
      }
    };
  },
  mounted() {},
  methods: {
    dogg() {
      this.show = !this.show;
      if (this.show) {
        this.loanman = "借款人1";
      } else {
        this.loanman = "借款人";
      }
    },
    getsure() {
      var _that = this;
      if (this.show) {
        if (this.form.name01 == "" || this.form.name02 == "") {
          this.$toast("请输入中文格式姓名");
        } else if (this.form.idNo01 == "" || this.form.idNo02 == "") {
          this.$toast("请输入正确格式的身份证号码");
        } else if (
          this.form.bankCardNo01 == "" ||
          this.form.bankCardNo02 == ""
        ) {
          this.$toast("请输入正确格式的银行卡号码");
        } else if (this.form.mobile01 == "" || this.form.mobile02 == "") {
          this.$toast("请输入正确格式的手机号码");
        } else if (this.form.gender01 == null || this.form.gender02 == null) {
          this.$toast("请选择性别");
        } else if (this.form.value == false) {
          this.$toast("请了解并确认借款合同内容");
        } else {
          this.$dialog
            .confirm({
              title: "提示",
              message: "确认提交？"
            })
            .then(() => {
              this.$axios({
                method: "post",
                url: this.$store.state.domain + "/saveUserInfo",
                data: this.form
              }).then(
                response => {
                  if (response.data.code == 0) {
                    this.$dialog
                      .confirm({
                        title: "提示",
                        message: "提交成功",
                        showCancelButton: false
                      })
                      .then(() => {
                        window.location.reload();
                      });
                  } else {
                    this.$toast.fail(response.data.msg);
                  }
                },
                error => {
                  // this.$toast.fail('异常')
                  if (error && error.response) {
                    switch (error.response.status) {
                      case 400:
                        error.message = "错误请求";
                        this.$toast.fail(error.message);
                        break;

                      case 401:
                        error.message = "未授权，请重新登录";
                        this.$toast.fail(error.message);
                        break;

                      case 403:
                        error.message = "拒绝访问";
                        this.$toast.fail(error.message);
                        break;

                      case 404:
                        error.message = "请求错误，未找到该资源";
                        this.$toast.fail(error.message);
                        break;

                      case 405:
                        error.message = "请求方法未允许";
                        this.$toast.fail(error.message);
                        break;

                      case 408:
                        error.message = "请求超时";
                        this.$toast.fail(error.message);
                        break;

                      case 500:
                        error.message = "您没有权限，不能进行操作，请重新登录";
                        this.$toast.fail(error.message);
                        this.$router.push("/login"); //跳转登录
                        break;

                      case 502:
                        error.message = "服务器错误";
                        this.$toast.fail(error.message);
                        break;
                    }
                  }
                }
              );
            })
            .catch(error => {
              if (error && error.response) {
                switch (error.response.status) {
                  case 400:
                    error.message = "错误请求";
                    this.$toast.fail(error.message);
                    break;

                  case 401:
                    error.message = "未授权，请重新登录";
                    this.$toast.fail(error.message);
                    break;

                  case 403:
                    error.message = "拒绝访问";
                    this.$toast.fail(error.message);
                    break;

                  case 404:
                    error.message = "请求错误，未找到该资源";
                    this.$toast.fail(error.message);
                    break;

                  case 405:
                    error.message = "请求方法未允许";
                    this.$toast.fail(error.message);
                    break;

                  case 408:
                    error.message = "请求超时";
                    this.$toast.fail(error.message);
                    break;

                  case 500:
                    error.message = "您没有权限，不能进行操作，请重新登录";
                    this.$toast.fail(error.message);
                    this.$router.push("/login"); //跳转登录
                    break;

                  case 502:
                    error.message = "服务器错误";
                    this.$toast.fail(error.message);
                    break;
                }
              }
            });
        }
      } else {
        if (this.form.name01 == "") {
          this.$toast("请输入中文格式姓名");
        } else if (this.form.idNo01 == "") {
          this.$toast("请输入正确格式的身份证号码");
        } else if (this.form.bankCardNo01 == "") {
          this.$toast("请输入正确格式的银行卡号码");
        } else if (this.form.mobile01 == "") {
          this.$toast("请输入正确格式的手机号码");
        } else if (this.form.gender01 == null) {
          this.$toast("请选择性别");
        } else if (this.form.value == false) {
          this.$toast("请了解并确认借款合同内容");
        } else {
          this.$dialog
            .confirm({
              title: "提示",
              message: "确认提交？"
            })
            .then(() => {
              this.$axios({
                method: "post",
                url: this.$store.state.domain + "/saveUserInfo",
                data: this.form
              }).then(
                response => {
                  if (response.data.code == 0) {
                    this.$dialog
                      .confirm({
                        title: "提示",
                        message: "提交成功",
                        showCancelButton: false
                      })
                      .then(() => {
                        window.location.reload();
                      });
                  } else {
                    this.$toast.fail(response.data.msg);
                  }
                },
                error => {
                  // this.$toast.fail('异常')
                  if (error && error.response) {
                    switch (error.response.status) {
                      case 400:
                        error.message = "错误请求";
                        this.$toast.fail(error.message);
                        break;

                      case 401:
                        error.message = "未授权，请重新登录";
                        this.$toast.fail(error.message);
                        break;

                      case 403:
                        error.message = "拒绝访问";
                        this.$toast.fail(error.message);
                        break;

                      case 404:
                        error.message = "请求错误，未找到该资源";
                        this.$toast.fail(error.message);
                        break;

                      case 405:
                        error.message = "请求方法未允许";
                        this.$toast.fail(error.message);
                        break;

                      case 408:
                        error.message = "请求超时";
                        this.$toast.fail(error.message);
                        break;

                      case 500:
                        error.message = "您没有权限，不能进行操作，请重新登录";
                        this.$toast.fail(error.message);
                        this.$router.push("/login"); //跳转登录
                        break;

                      case 502:
                        error.message = "服务器错误";
                        this.$toast.fail(error.message);
                        break;
                    }
                  }
                }
              );
            })
            .catch(error => {
              if (error && error.response) {
                switch (error.response.status) {
                  case 400:
                    error.message = "错误请求";
                    this.$toast.fail(error.message);
                    break;

                  case 401:
                    error.message = "未授权，请重新登录";
                    this.$toast.fail(error.message);
                    break;

                  case 403:
                    error.message = "拒绝访问";
                    this.$toast.fail(error.message);
                    break;

                  case 404:
                    error.message = "请求错误，未找到该资源";
                    this.$toast.fail(error.message);
                    break;

                  case 405:
                    error.message = "请求方法未允许";
                    this.$toast.fail(error.message);
                    break;

                  case 408:
                    error.message = "请求超时";
                    this.$toast.fail(error.message);
                    break;

                  case 500:
                    error.message = "您没有权限，不能进行操作，请重新登录";
                    this.$toast.fail(error.message);
                    this.$router.push("/login"); //跳转登录
                    break;

                  case 502:
                    error.message = "服务器错误";
                    this.$toast.fail(error.message);
                    break;
                }
              }
            });
        }
      }
    },
    onConfirm01(value, index) {
      this.gender01 = value;
      this.form.gender01 = index;
      this.showPicker01 = false;
    },
    onConfirm02(value, index) {
      this.gender02 = value;
      this.form.gender02 = index;
      this.showPicker02 = false;
    },
    inputname(e) {
      var myreg = /^[\u4e00-\u9fa5]+$/;
      if (!myreg.test(this.form.name01)) {
        this.$toast("请输入中文姓名");
        this.form.name01 = "";
      }
    },
    inputphone(e) {
      // 手机号正则
      var myreg = /^1[3456789]\d{9}$/;
      if (!myreg.test(this.form.mobile01)) {
        this.$toast("请输入正确格式的手机号码");
        this.tphone = false;
        this.form.mobile01 = "";
      }
    },
    inputid(e) {
      var myreg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      if (!myreg.test(this.form.idNo01)) {
        this.$toast("请输入正确格式的身份证号码");
        this.form.idNo01 = "";
      }
    },
    inputbank(e) {
      if (this.form.bankCardNo01.length < 16) {
        this.$toast("请输入正确格式的银行卡号码");
        this.form.bankCardNo01 = "";
      }
    },

    inputname02(e) {
      var myreg = /^[\u4e00-\u9fa5]+$/;
      if (this.show) {
        if (!myreg.test(this.form.name02)) {
          this.$toast("请输入中文姓名");
          this.form.name02 = "";
        }
      }
    },
    inputphone02(e) {
      // 手机号正则
      var myreg = /^1[3456789]\d{9}$/;
      if (this.show) {
        if (!myreg.test(this.form.mobile02)) {
          this.$toast("请输入正确格式的手机号码");
          this.form.mobile02 = "";
        }
      }
    },
    inputid02(e) {
      var myreg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      if (this.show) {
        if (!myreg.test(this.form.idNo02)) {
          this.$toast("请输入正确格式的身份证号码");
          this.form.idNo02 = "";
        }
      }
    },
    inputbank02(e) {
      if (this.show) {
        if (this.form.bankCardNo02.length < 16) {
          this.$toast("请输入正确格式的银行卡号码");
          this.form.bankCardNo02 = "";
        }
      }
    }
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
    font-size: 12px;
    margin: 0 auto;
    text-align: center !important;
    margin-top: 1.4rem;
  }
  .addloan {
    height: 1.4rem;
    line-height: 1.4rem;
    text-align: right;
    margin: 0.6rem 0;
    font-size: 14px;
    .yocon {
      position: relative;
      top: 0.18rem;
    }
  }
  .contract2 {
    border-top: 1px dashed rgba(136, 89, 89, 0.507);
    padding-top: 1rem;
  }
  .contract3 {
    padding-top: 1rem;
  }
  .tags {
    margin-bottom: 1rem;
  }
}
</style>