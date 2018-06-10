<template>
    <div class="header clearfloat maxwidth">
      <!--{{msg}}{{data1}}-->
      <img v-for="item of headericon" class="headericon floatleft" :src="item" alt="">
      <div v-text="msg" class="text-center headermsg"></div>
      <div class="headertipbox" v-if="showallstatus!=true">
        <p class="headertipboxtitl">没有设计天赋，不美观，你要看看我写的页面吗?</p>
        <span class="headertipboxbtn" @click="showall(1)">是的，瞅瞅</span>
        <span class="headertipboxbtn" @click="closewindow()">不看了，关闭该窗口</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "newheader",
        props:['showallstatus'],
        data:()=>{
          return{
            msg : '你好，欢迎来看我的小站点。我是小庞。',
            headericon:[
              'https://www.ooo0o.com/images/xiaopangxiaji.png',
              // 'https://www.ooo0o.com/images/xiaopangxiaji.png'
            ]
          }
        },
        methods:{
          showall(status){
            this.$emit('showallfun',status)
          },
          closewindow(){
            window.self.close();
            alert('算了，浏览器禁止我关闭当前页，你自己关闭吧。。但如果你点击左侧按钮瞅一眼我的页面，你下次访问站点的时候就不会有这烦人的提示了，要不要再看看去？')
          },
        },
    }
</script>

<style scoped>
  .header{
    position: relative;
    padding: 20px 0px;
    margin-bottom: 10px;
    height: 38px;
  }
  .headericon{
    height: 100%;
    padding-left: 30px;
  }
  .headermsg{
    position: absolute;
    left: 50%;
    top: 15px;
    transform: translate(-50%,0);
    /*width: 100%;*/
    z-index: 10;
    background-color: rgba(255,255,255,0.6);
    padding: 10px;
    border-radius: 8px;
    font-weight: bold;
    font-size: 20px;
  }
  .headertipbox{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(255,255,255,0.7);
    padding: 20px;
    border-radius: 16px;
    z-index: 100;
  }
  .headertipboxtitl{
    font-size: 20px;
    display: block;
    margin-bottom: 12px;
  }
  .headertipboxbtn{
    display: inline-block;
    padding: 10px 15px;
    border: 1px solid #000000;
    border-radius: 5px;
    margin-right: 15px;
    cursor: pointer;
  }
  .headertipboxbtn:hover{
    border-color: rgba(66, 185, 131,1);
    box-shadow: 0 0 5px rgba(66, 185, 131,1);
  }
</style>
