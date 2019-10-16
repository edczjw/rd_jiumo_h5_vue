<template>
    <div class="form1">
            <van-cell-group class="group">
                <van-field 
                placeholder="请输入姓名" 
                label="姓名"
                required
                input-align="right"
                v-model.trim="form.name"/>
            </van-cell-group>

            <van-cell-group  class="group">
                <van-field 
                placeholder="请输入身份证号码" 
                required
                input-align="right"
                v-model.trim="form.idcardnum"
                label="身份证号码"/>
            </van-cell-group>

            <van-cell-group  class="group">
                <van-field 
                placeholder="请输入银行卡号码" 
                required
                input-align="right"
                v-model.trim="form.banknum"
                label="银行卡号码"/>
            </van-cell-group>

            <van-cell-group  class="group">
                <van-field 
                placeholder="请输入手机号" 
                required
                input-align="right"
                v-model.trim="form.phone"
                label="手机号"/>
            </van-cell-group>

            <div style="margin: 1.4rem;font-size:.14rem">
                <van-checkbox v-model="form.value" icon-size='.24rem'>我已充分了解并确认《<b>借款合同</b>》内容</van-checkbox>
            </div>

            <van-button round style="margin:0 auto;width:100%;" @click="login" type="info">确定</van-button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            form:{
                name:'',
                idcardnum:'',
                banknum:'',
                phone:'',
                value:false
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
    .form1{
        margin: 6rem 1rem;
        padding: 0.2rem;
    }
</style>