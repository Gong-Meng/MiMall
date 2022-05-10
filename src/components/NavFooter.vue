<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="">河畔一角主页</a><span>|</span>
            <a href="">Vue全栈课程</a><span>|</span>
            <a href="">React全栈课程</a><span>|</span>
            <a href="">微信支付专项课程</a>
        </div>
        <div class="copyright">
            <span class="domain">171-5104-4404</span> 知识产权侵权投诉本网站所列数据，除特殊说明
        </div>
    </div>
</template>

<script>
export default {
    name: 'nav-footer'
}
</script>
<style lang="scss" scoped>
    .footer{
        height: 234px;
        border-top: 4px solid #f60;
        background-color: #333;
        color: #999;
        font-size: 16px;
        text-align: center;
        .footer-logo{
            margin-top: 46px;
            margin-bottom: 31px;
            img{
                width: 53px;
                height: 36px;
                margin-bottom: 13px;
            }
        }
        .footer-link{
            a{
                color: #999;
                display: inline-block;
            }
            span{
                margin: 0 10px;
            }
            margin-bottom: 13px;
        }
        .copyright{
            .domain{
                color: #f60;
            }
        }
    }
</style>