<template>
  <div class="container">
    <router-view></router-view>
    <router-view name="footer" class="footer"></router-view>
  </div>
</template>
<style lang="scss" scoped>
  html,body{
    overflow: hidden;
  }
  ul,li{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .container{
    display: flex;
    height: 100vh;
    flex-direction: column;
  }
  .main{
    flex: 1 1 0%;
    overflow: hidden;
  }
  .footer{
    flex: 0 0 50px;
    background: linear-gradient(rgba(#eee,0.9), rgba(#eee,0.3))
  }
</style>





