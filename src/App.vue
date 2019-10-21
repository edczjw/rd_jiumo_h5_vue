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
.group{
  margin-bottom: 1rem;
}
*{
  margin: 0;
  padding: 0;
}
body{
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  position: page;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-size:100% 100%;
  background-attachment: fixed;
  background-image: linear-gradient(#f5fafa,#f8e0b0, #f18f3f);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  margin-top:0px;
  height: 100%;
}
</style>
