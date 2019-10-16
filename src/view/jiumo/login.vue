<template>
    <div class="form-lo">
        <div class="login-tit">Wlecome</div>
            <van-cell-group class="group">
                <van-field 
                placeholder="请输入手机号" 
                type="number" 
                label="手机号"
                required
                maxlength='11'
                v-model="form.phone"/>
            </van-cell-group>

            <van-cell-group  class="group">
                <van-field 
                placeholder="请输入密码" 
                required
                v-model="form.pass"
                type="password" 
                label="密码"/>
            </van-cell-group>

            <van-button round style="margin:0 auto;width:100%;" @click="login" type="info">登录</van-button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            form:{
                phone:'',
                pass:''
            }
        }
    },
    mounted() {
        
    },
    methods: {
        login(){
            // 手机号正则
            var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;

            // // 手机格式
            // if(this.form.phone == '' || this.form.pass == ''){
            //     this.$toast('请将信息填写完整')
            // }else{
            //     if (!myreg.test(this.form.phone)) {
            //         this.$toast('请输入正确格式的手机号码')
            //     }
            //     // 取消报错
            //     else{
                    this.$router.push("/form1");//跳转
                // }
            }
    },
}
</script>

<style lang="less">
    .form-lo{
        margin: 6rem 1rem;
        padding: 2.6rem;
        .login-tit{
            width: 100%;
            text-align: center;
            color: #fff;
            font-family: 'Times New Roman', Times, serif;
            font-size: 42px;
            margin-bottom: 2rem;
        }
    }
</style>