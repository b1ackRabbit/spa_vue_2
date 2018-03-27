<template>
  <div id="app">    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body{
    text-align: center;
  }
#app {
  *{box-sizing: border-box;}
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto 60px;
  max-width: 414px;
  padding-top: 30px;

}
a{color:gray;}
  .list-of-messages{text-align: left;}
  .message-block{
    position: relative;
    padding: 25px 10%;
    border-bottom: 1px solid #999;
    text-align: left;
  }
  .message-block:hover{
    background-color: #eee;
  }
  .message-author{
    font-weight: bold;
  }
</style>
