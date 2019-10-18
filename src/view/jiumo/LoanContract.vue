<template>
    <div >
            <van-nav-bar
            title="借款合同"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            />

        <div class="rop">
        <h3 style="text-align:center">借 款 合 同</h3>
        <p style="text-align:right;font-size:12px">（信贷）</p>
        <p style="text-align:right;padding-right:6em;font-size:12px">合同编号：</p>
        <br/>
        <div>
        <p style="text-indent: 2em;text-align: justify;">借款人（以下称甲方1）：______ ，性别：___ ，身份证号码：___________________ ，联系电话：__________</p>
        <p style="text-indent: 2em;text-align: justify;">借款人（以下称甲方2)： ______ ，性别：___ ，身份证号码：___________________ ，联系电话：__________</p>
        <p style="text-align: justify;">（如无特殊说明，甲方1与甲方2在下文中统称为甲方。）</p>
        <p  style="text-indent: 2em;text-align: justify;">出借人（以下称乙方）：广州民盛互联网小额贷款有限公司，统一社会信用代码：91440101MA5ALP4R4C，住所：广州市越秀区长堤大马路244-246号前栋首层、二楼。法定代表人：闫伟，联系电话：020-80503061。</p>
        <br/>
        <p>签订合同方式：网络在线签订</p>
        <p>签订合同时间：_____ 年 ____ 月 ____ 日</p><br>
        <p style="text-indent: 2em;text-align: justify;">甲方向乙方申请人民币借款，乙方同意向甲方发放借款，甲、乙各方遵照有关法律规定，经协商一致，订立本合同。</p>
        <p style="text-indent: 2em;text-align: justify;">第一条 借款金额：需经乙方全面评估甲方资信能力后决定，具体以双方补充签订的《借款确认书》为准。</p>
        <p style="text-indent: 2em;text-align: justify;">第二条 支付方式：以双方补充签订的《借款确认书》为准。</p>
        <p style="text-indent: 2em;text-align: justify;">第三条 本合同各方同意以转帐的方式作为乙方向甲方支付借款的方式，甲、乙双方应保留银行划款记录，甲方收到款项后，应为乙方出具本人签署的收条或收据。</p>
        <p style="text-indent: 2em;text-align: justify;">第四条 借款利率及利率支付方式：以双方补充签订的《借款确认书》为准。</p>
        <p style="text-indent: 2em;text-align: justify;">第五条 借款期限：以双方补充签订的《借款确认书》为准。</p>
        <p style="text-indent: 2em;text-align: justify;">第六条 甲方保证该借款的用途符合法律规定，因所借款项用于法律所限制或禁止的用途导致的任何责任均由甲方独立承担。甲方保证不将所借款项用于理财、投资。甲方承诺如违反保证所造成的一切后果由甲方自行承担，不得以此为由拒绝偿还借款本息。</p>
        <p style="text-indent: 2em;text-align: justify;">第七条 甲方在借款期限届满时一次性偿还本金，且甲方可以提前偿还上述借款。</p>
        <p style="text-indent: 2em;text-align: justify;">第八条 担保条款</p>

        <p style="text-indent: 2em;text-align: justify;">1、甲方同意以其全部财产作为本合同项下借款的还款来源。</p>
        <p style="text-indent: 2em;text-align: justify;">2、乙方有权要求甲方提供房产抵押担保，当乙方要求甲方提供房产抵押担保时，甲方不得拒绝，双方应立即签订《房产抵押担保协议》，并立即办理抵押登记手续。</p>
        <p style="text-indent: 2em;text-align: justify;">第九条 公证</p>
        <p style="text-indent: 2em;text-align: justify;">1、甲、乙各方同意对本合同办理赋予强制执行效力的债权文书公证，且各方对赋予强制执行效力的债权文书公证之含义、内容、程序、效力等完全清楚。</p>
        <p style="text-indent: 2em;text-align: justify;">2、如果甲方未在约定的借款期限内履行对乙方的按期还款义务（包括支付利息的义务）或出现本合同第十一条所约定的情形的，乙方有权向公证机构申请出具《执行证书》并凭本合同的《公证书》和《执行证书》向有管辖权的人民法院申请强制执行，而无须经过诉讼程序。甲方承诺自愿放弃抗辩权并自愿接受有管辖权的人民法院予以依法强制执行。</p>
        <p style="text-indent: 2em;text-align: justify;">3、关于履约和违约事实的举证责任的分配</p>
        <p style="text-indent: 2em;text-align: justify;">（1）乙方对其已经按照本合同的约定全部或部分履行了对甲方的放款义务的事实承担举证责任；</p>
        <p style="text-indent: 2em;text-align: justify;">（2）甲方对其已经按照本合同的约定全部或部分履行了对乙方的还款义务的事实承担举证责任。</p>
        <p style="text-indent: 2em;text-align: justify;">4、关于履约和违约事实的核实程序</p>
        <p style="text-indent: 2em;text-align: justify;">首先，乙方应当向公证机构提供其已经按照本合同的约定向甲方支付借款的证据和《强制执行申请书》。</p>
        <p style="text-indent: 2em;text-align: justify;">其次，本合同各方同意公证机构采用如下任意一种核实方式核实甲方是否已经履行了对乙方的按期还款义务。公证机构向甲方核实的联系人姓名、预留联系电话、预留常住地址和预留电子邮箱以本合同约定的为准，甲方承诺上述联系人和联系方式如有变更，将以书面形式通知公证机构的承办公证员，否则，联系人和联系方式以本条款约定的为准。甲方同意公证机构可以在下列情形下依据乙方单方所提供证明材料出具《执行证书》：</p>
        <p style="text-indent: 2em;text-align: justify;">（1）、公证机构的承办公证员在依照本合同约定的联系方式通知甲方预留联系人，仍旧无法取得联系的；</p>
        <p style="text-indent: 2em;text-align: justify;">（2）、甲方对乙方提供的证明材料有异议，但在接到承办公证员的通知后三日内不能提供相反证据或提供的相反证据不充分的；</p>
        <p style="text-indent: 2em;text-align: justify;">（3）、甲方对乙方提供的证明材料没有异议的。</p>
        <p style="text-indent: 2em;text-align: justify;">5、本条款优先于本合同关于争议解决的条款适用。</p>
        <p style="text-indent: 2em;text-align: justify;">第十条 甲方还款资金的偿还顺序如下：</p>
        <p style="text-indent: 2em;text-align: justify;">1、借款未逾期的，一次性偿还借款本金；</p>
        <p style="text-indent: 2em;text-align: justify;">2、借款逾期的，按实现债权的费用、违约金、利息、本金的顺序偿还。</p>
        <p style="text-indent: 2em;text-align: justify;">第十一条 本合同履行期间，出现下列情况之一的，乙方有权要求甲方提前偿还全部借款本金和利息，甲方或甲方的担保人、继承人应在收到乙方发出通知后7日内一次性偿还借款本金和实际发生的利息：</p>
        <p style="text-align: justify;">1、甲方提供虚假或非法的证明、信息或资料；</p>
        <p style="text-align: justify;">2、甲方、甲方名下的任一财产被司法部门予以查封的。</p>
        <p style="text-align: justify;">3、甲方未能按期、足额支付当月利息。</p>
        <p style="text-indent: 2em;text-align: justify;">第十二条 甲方违反本合同约定的，乙方有权提前收回借款，并按本合同约</p>
        <p style="text-indent: 2em;text-align: justify;">第十三条 甲方违反本合同约定，未按期偿还借款的，甲方应继续按照借期内的利率支付借款利息并应当支付违约金。</p>
        <p style="text-indent: 2em;text-align: justify;">第十四条 自本合同项下借款到期之日起，若借款人未能履行按期还本付息义务，则以其欠付本金为基础每日计算违约金。违约金计算标准参照本合同项下借款利息，违约金与欠付借款利息之和等于欠付借款本金的2%；如本合同项下利息按照月利率2%计算，则本合同项下借款事宜无违约金。即：违约金+欠付借款利息=欠付借款本金*2%。</p>
        <p style="text-indent: 2em;text-align: justify;">第十五条 因本合同有关事项办理公证、登记、转让、第三方协助、税收或因债权人实现债权所支付费用（包括但不限于：保全费、登记费、过户费、保险费、执行费、公证费、律师费（律师费以政府指导价为限）、通知费、催告费以及其他相关费用）的，该费用由甲方承担。</p>
        <p style="text-indent: 2em;text-align: justify;">第十六条 与本合同有关的任何争议，各方同意交由本合同签订地人民法院管辖。</p>
        <p style="text-indent: 2em;text-align: justify;">第十七条 通知、送达</p>
        <p style="text-indent: 2em;text-align: justify;">1、本合同所登记的地址为当事人接收通知、传票、及其他文件的地址，如有变更，需向对方和公证机构书面告知变更后的地址，否则，以本合同所载明的地址为准。一方当事人和有关司法机关(包括但不限于公证机构)以快递的方式向对方发出相关的法律文件，不论对方是否收悉，发出文件三日后即视为送达。</p>
        <p style="text-indent: 2em;text-align: justify;">2、本合同所登记的电子邮箱的地址为当事人接收通知、传票、及其他文件的邮箱地址,如有变更，需向对方和公证机构书面告知变更后的邮箱地址，否则，以本合同所载明的邮箱地址为准。一方当事人和有关司法机关(包括但不限于公证机构)以电子邮件的方式向另一方发出相关法律文件，发出电子邮件的当日即视为送达。</p>
        <p style="text-indent: 2em;text-align: justify;">第十八条 《借款确认书》是本合同不可分割的组成部分，具有同等法律效力。</p>
        <p style="text-indent: 2em;text-align: justify;">第十九条 凡因本合同引起的，或与本合同有关的全部争议，均应提交乙方所在地人民法院管辖处理。</p>
        <p style="text-indent: 2em;text-align: justify;">第二十条 本合同自各方签字、盖章之日起成立，并自甲方实际收到乙方提供的借款本金之日起生效。本合同一式六份，甲方一份，乙方留存四份，公证机构留存一份，具同等效力。</p>
        <p>（以下无正文。）</p>
        <br>
        <p>甲方1（签字）：</p>
        <br>
        <p>甲方2（签字）：</p>
        <br>
        <p>乙方（盖章）：</p>
        <br>
        </div>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    mounted() {
        
    },
    methods: {
        onClickLeft(){
            this.$router.push("/form1");//跳转
        }
    },
}
</script>

<style lang="less">
    .rop{
        background: rgb(255, 255, 255);
        padding: .8rem ;
        font-family:'楷体';
        p{
            font-size: 14px;
        }
    }
</style>