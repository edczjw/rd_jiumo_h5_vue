<template>
    <div class="form-lo">
        <div class="login-tit">Welcome</div>
            <van-cell-group class="group">
                <van-field 
                right-icon="contact"
                placeholder="请输入手机号" 
                type="number" 
                input-align="left"
                required
                maxlength='11'
                @blur="inputphone"
                v-model="form.mobile"/>
            </van-cell-group>

            <van-cell-group  class="group">
                <van-field 
                :right-icon="showpass? 'eye-o':'closed-eye'"
                placeholder="请输入密码" 
                required
                maxlength='6'
                input-align="left"
                @blur="inputpass"
                v-model="form.password"
                @click-right-icon='showpass=!showpass'
                :type="showpass? 'number':'password'" />
            </van-cell-group>

            <van-button round style="margin:0 auto;width:100%;" @click="login" type="info">登录</van-button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            cphone:false,
            cpass:false,
            showpass:false,//密码解密
            // but:true,   //按钮点击状态
            form:{
                mobile:'',
                password:''
            }
        }
    },
    mounted() {
        
    },
    methods: {
        inputphone(e){
            // 手机号正则
            var myreg=/^1[3456789]\d{9}$/;
            if(!myreg.test(this.form.mobile)){
                this.$toast('请输入正确格式的手机号码')
                this.cphone=false
                // this.but=true
            }else{
                if(this.cpass){
                    // this.but=false
                }else{
                    this.cphone=true
                }
            }
        },
        inputpass(e){
            var myreg=/^[0-9a-zA-Z]{6,20}$|^(?=.*\d+)(?!.*?([\d])\1{5})[\d]{6}$/;
            if(!myreg.test(this.form.password)){
                this.$toast('请输入正确格式的密码')
                this.cpass=false
                // this.but=true
            }else{
                if(this.cphone){
                    // this.but=false
                }else{
                    this.cpass=true
                }
            }
        },
        login(){
                // this.$router.push("/form1");//跳转
                this.$axios({
                        method: "post",
                        url: this.$store.state.domain + "/login",
                        data: this.form
                    }).then(
                        response => {
                        if (response.data.code == 0) {
                            this.$toast.success('登录成功')
                                this.$router.push("/form1");//跳转
                                }else {
                                this.$toast.fail(response.data.msg)
                            }
                        },
                        error => {
                        this.$toast.fail('异常')
                        }
                    );
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