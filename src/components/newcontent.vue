<template>
    <div class="content maxwidth">
      <div @mouseover="mouseoverfun(index)" class="contentli" v-for="(item,index) of contents" :class="{'scaleport':scalestatus==index}">
        <p class="contentlititle">{{item.title}}</p>
        <div class="contentlismbox">
          <div class="contentlismboxinner">
            <div class="contentdes">{{item.des}}</div>
            <img @click="windowgo(item.linkurl)" :title="item.alttip" class="contentimg" v-for="item2 of item.imgurls" :src="item2" alt="">
          </div>
        </div>
      </div>
      <!--<div class="contentli">
        <p class="contentlititle">这是项目一</p>
        <div class="contentlismbox">
          <div class="contentlismboxinner">
            &lt;!&ndash;这里是内容详情&ndash;&gt;
            <content-demoa></content-demoa>
          </div>
        </div>
      </div>-->
    </div>
</template>

<script>
  // import ContentJianli from '@/contentlist/contentjianli'
  // import ContentDemoa from '@/contentlist/contentdemoa'
  // import ContentDemob from '@/contentlist/contentdemob'
    export default {
        name: "newcontent",
        /*components:{
          ContentJianli,
          ContentDemoa,
          ContentDemob,
        }*/
        data:()=>{
          return{
            scalestatus:0,
            contents:[
              {
                title:'这是简历页面（附带学信网信息截图）',
                des:'简历是直接拿的智联官方简历截图。本科退学没有毕业证，目前报了一个成人大专，19年发毕业证书，学习能力强，善于发现并解决问题，望给予工作机会。谢谢',
                imgurls:[
                  'http://ooo0o.com/images/zhilianjianli.png','http://ooo0o.com/images/xuexinwang.png'
                ],
                alttip:'点击这里跳转到智联查看',
                linkurl:'http://m.zhaopin.com/Resume/ResumePreviewById?userId=650903443&p=5&d=EFAC8188B35450EF30B35CFF4669ED18&language=1&key=135486907262855&uticket=34c8a44f3ce448d5b2d4f421ea9664d7&resumeNum=JM509034436R90250002000&v=7.89&channel=apple&t=1528563605&e=d8eb40f929286155d6d3db5d9f66d904\n',
              },
              {
                title:'社区站点',
                des:'这个站点是我在初次学习vue.js时练习做的Demo，使用了vue,swiper,百度地图等等',
                imgurls:[
                  'http://ooo0o.com/images/shequshot.png'
                ],
                alttip:'点击这里跳转到相关页面查看',
                linkurl:'http://ooo0o.com/htmls/pc/htmls/index.html',
              },
              {
                title:'Vue打造的新站点-暂未上线',
                des:'之前做的一个静态站点，近期打算用vue.js重置，同时让后台配合帮我把这个站点做完整',
                imgurls:[
                  'http://ooo0o.com/images/shizhi.jpg'
                ],
                alttip:'暂未上线',
                linkurl:'javascript:void(0)',
              },
            ]
          }
        },
        methods:{
          mouseoverfun(index){
            this.scalestatus=index;
          },
          windowgo(url){
            if(url == 'javascript:void(0)'){
              alert('正在制作中');
              return
            }
            window.open(url)
          }
        }
    }
</script>

<style scoped>
  .content{
    margin-bottom: 10px;
    padding: 20px 20px;
    width: 1060px;

    margin-top: 10px;
  }

  .content{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: nowrap;
    /*height: 630px;*/
  }
  .contentli{
    overflow: hidden;
    transition: all 0.3s linear;
    width: 18%;
  }
  .scaleport{
    flex-grow: 1;
    width: 110%;
  }
  .contentlititle{
    font-size: 22px;
    font-weight: bold;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .contentlismbox{
    background-color: rgba(255,255,255,0.8);
    width: 90%;
    margin: 10px auto 0;
    padding: 16px 0;
    font-size: 16px;
    height: 710px;
    overflow: hidden;
  }
  .contentlismboxinner{
    width:100%;
    height: 100%;
  }
  .scaleport .contentlismboxinner{
    padding-right: 20px;
    overflow-y: scroll;
  }
  .contentdes{
    font-size: 15px;
    font-weight: bold;
  }
  .contentimg{
    display: block;
    width: 90%;
    height: auto;
    margin: 10px auto 0;
  }
</style>
