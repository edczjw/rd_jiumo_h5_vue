<template>
    <div class="form-lo">
        <div class="login-tit">Wlecome</div>
            <van-cell-group class="group">
                <van-field 
                right-icon="contact"
                placeholder="请输入手机号" 
                type="number" 
                input-align="center"
                required
                maxlength='11'
                @blur="inputphone"
                v-model="form.phone"/>
            </van-cell-group>

            <van-cell-group  class="group">
                <van-field 
                right-icon="closed-eye"
                placeholder="请输入密码" 
                required
                maxlength='6'
                input-align="center"
                @blur="inputpass"
                v-model="form.pass"
                type="password" />
            </van-cell-group>

            <van-button round style="margin:0 auto;width:100%;" @click="login" :disabled="but" type="info">登录</van-button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            cphone:false,
            cpass:false,
            but:true,   //按钮点击状态
            form:{
                phone:'',
                pass:''
            }
        }
    },
    mounted() {
        
    },
    methods: {
        inputphone(e){
            // 手机号正则
            var myreg=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
            if(!myreg.test(this.form.phone)){
                this.$toast('请输入正确格式的手机号码')
                this.cphone=false
                this.but=true
            }else{
                if(this.cpass){
                    this.but=false
                }else{
                    this.cphone=true
                }
            }
        },
        inputpass(e){
            var myreg=/^[0-9a-zA-Z]{6,20}$|^(?=.*\d+)(?!.*?([\d])\1{5})[\d]{6}$/;
            if(!myreg.test(this.form.pass)){
                this.$toast('请输入正确格式的密码')
                this.cpass=false
                this.but=true
            }else{
                if(this.cphone){
                    this.but=false
                }else{
                    this.cpass=true
                }
            }
        },
        login(){
                this.$router.push("/form1");//跳转
                // this.$axios({
                //         method: "post",
                //         url: this.$store.state.domain + "/manage/hbCreditList",
                //         data: data
                //     }).then(
                //         response => {
                //         if (res.code == 0) {
                //                 this.$router.push("/form1");//跳转
                //                 }else {
                //                 this.$message({
                //                 message: res.msg,
                //                 type: "error"
                //                 });
                //             }
                //         },
                //         error => {
                //         this.$message({
                //             message: '您的账号无此菜单查看权限，谢谢合作',
                //             type: "error"
                //             });
                //         }
                //     );
        }
    },
}
</script>

<style lang="less">
    .form-lo{
        margin: 6rem .5rem;
        padding: 2.6rem;
        .login-tit{
            width: 100%;
            text-align: center;
            color: #fff;
            font-family: 'Times New Roman', Times, serif;
            font-size: 42px;
            margin-bottom: 2rem;
        }
        .group {
            border-radius: 50%;
        }
    }
</style>