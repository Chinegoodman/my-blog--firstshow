<template>
    <div v-show="mengbanstatus" class="mengban">qraasdf</div>
</template>

<script>
    export default {
        name: "mengban",
        props:['mengbanstatus'],
        data : ()=>{
          return {
            // mengbanstatus:false
          }
        },
        methods:{

        }
    }
</script>

<style scoped>
  .mengban{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    z-index: 50;
  }
</style>
