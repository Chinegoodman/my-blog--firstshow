<template>
    <div class="footer maxwidth">
      <div class="aboutself clearfloat">
        <p>你好，我是小庞</p>
        我的邮箱：<a :href="'mailto:'+email">{{email}}</a><br>
        我的电话：<a :href="'tel:'+phonenumber">{{phonenumber}}</a>
      </div>
      <div class="userfullinks clearfloat">
        <p class="userfullinkstitle">经常用到的站点集合</p>
        <a class="userfullink" v-for="item of urllis" target="_blank" :href="item.url">{{item.name}}</a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "newfooter",
        data(){
          return{
            email:'pangshifeng0539@126.com',
            phonenumber:'15901105257',
            urllis:[
              {
                name:'百度',
                url:'http://www.baidu.com'
              },
              {
                name:'华为云',
                url:'https://activity.huaweicloud.com/'
              },
              {
                name:'阿里云',
                url:'https://www.aliyun.com/'
              },
              {
                name:'Vue',
                url:'https://cn.vuejs.org/'
              },
              {
                name:'npm',
                url:'https://www.npmjs.com'
              },
              {
                name:'微信公众平台',
                url:'https://mp.weixin.qq.com/'
              },
              {
                name:'慕客网',
                url:'http://www.imooc.com/'
              },
              {
                name:'jq22',
                url:'http://www.jq22.com/'
              },
              {
                name:'IT之家',
                url:'http://www.ithome.com/'
              },
              {
                name:'CDN库',
                url:'http://www.bootcdn.cn/'
              },
              {
                name:'掘金',
                url:'http://gold.xitu.io/'
              },
              {
                name:'简书',
                url:'https://www.jianshu.com/'
              },
              {
                name:'segmentfault',
                url:'https://segmentfault.com/'
              },
              {
                name:'w3school',
                url:'http://www.w3school.com.cn/'
              },
              {
                name:'IQY',
                url:'http://www.iqiyi.com/'
              },
              {
                name:'Bibili',
                url:'http://www.bilibili.tv/'
              },
              {
                name:'krpano',
                url:'https://krpano.com/'
              },
              {
                name:'友盟',
                url:'http://www.umeng.com/'
              },
              {
                name:'阿里iconfont',
                url:'http://iconfont.cn/'
              },
              {
                name:'谷歌浏览器插件',
                url:'http://www.cnplugins.com/'
              },
              {
                name:'程序员在线工具站(各种转换压缩等工具大全)',
                url:'https://tool.lu/'
              },
              {
                name:'三角形生成器',
                url:'http://apps.eky.hk/css-triangle-generator/zh-hant'
              },
            ],
          }
        }
    }
</script>

<style scoped>
  /*.maxwidth{*/
    /*width: 1000px;*/
    /*margin: 0 auto;*/
  /*}*/

  /*flex布局*/
  .footer{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  .aboutself{
    padding:54px 22px 22px;
    font-size: 14px;
    line-height: 20px;
    height: 120px;
    width: 246px;
    border-right: 5px solid rgba(255,255,255,0.6);
  }
  .aboutself *{
    font-size: 14px;
  }

  .userfullinks{
    /*height: 218px;*/
    /*width: 246px;*/
    flex-grow:1;
    padding-top: 58px;
    position: relative;
  }
  .userfullinkstitle{
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%,13px);
    padding: 8px 15px;
    border-radius: 4px;
    font-weight: bold;
    background-color: rgba(255,255,255,0.6);
  }
  .userfullink{
    display: inline-block;
    padding: 8px 12px;
    border: 1px dashed #000000;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 7px;

    color: #000;
  }
  .userfullink:hover{
    color: #fff;
    background-color: black;
    box-shadow: 0 0 5px orange;
  }
</style>
