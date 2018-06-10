<template>
  <div id="pagebox">
    <nav-header v-on:showallfun="showallfun" :showallstatus="showallstatus"></nav-header>
    <nav-footer v-if="showallstatus"></nav-footer>
    <nav-content v-if="showallstatus"></nav-content>
    <meng-ban :mengbanstatus="mengbanstatus"></meng-ban>
  </div>
</template>

<script>
    import NavHeader from './newheader'
    import NavContent from './newcontent'
    import NavFooter from './newfooter'


    import MengBan from '@/components/mengban'

    export default {
        name: "pagebox",
        components:{
          NavHeader,
          NavContent,
          NavFooter,
          MengBan
        },
        data(){
          return{
            mengbanstatus:true,/*蒙版*/
            showallstatus:false,/*内容和底部内容是否显示*/
          }
        },
        methods:{
          // 展示所以的页面内容
          showallfun(status){
            if(status=='1'){
              this.mengbanstatus = false;
              this.showallstatus = true;
              // alert('展示全部内容并关闭浮层')
              localStorage.setItem('showallstatus',true);
              // console.log(localStorage.getItem('showallstatus'))
            }
          },
          // 关闭蒙版
          mengbanclose(){
            this.mengbanstatus=false;
          }
        },
        created:function(){
          let surestatus=JSON.parse(localStorage.getItem('showallstatus'))
          if( surestatus == true){
            // console.log('已经点击要查看了。。');
            this.showallfun('1');
            // this.mengbanstatus = false;
            // this.showallstatus = true;
            // console.log('已经点击要查看了。。')
          }
        },
    }
</script>
<style scoped>
  #pagebox{
    /*background-color: #42b983;*/
  }
  .maxwidth{
    width: 1100px;
    margin: 0 auto;
    /*background-color: rgba(66, 185, 131,0.3);*/
    background-color: rgba(0, 0, 0,0.1);
  }
</style>
