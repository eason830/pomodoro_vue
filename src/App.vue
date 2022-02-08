<template lang="pug">
#app
  b-container
    h1.mt-3 トマトの時計
    hr
    b-row
      b-col(cols="6")
        Home
      b-col(cols="6")
        b-row
          b-col(cols="6")
            b-btn.btn1.mt-5(to="/list") Check list
          b-col(cols="6")
            b-btn.btn2.mt-5(to="/settings") Daily report
          b-col(cols="12")
            router-view
</template>
<style>
.btn1,.btn2{
  background-color: white;
  border: none;
  color: #343a40;
  font-size: 20px;
  font-weight: bold;
}

.btn1:hover,
.btn2:hover
{
  border: none;
  border-bottom: 4px solid #000;
  border-radius: 0;
  padding-bottom: 0;
  background-color: white;
  color: #343a40;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 0;
}
.btn1:active,
.btn2:active{
 border-bottom: 4px solid #000;
}
</style>
<script>
import Home from './views/Home.vue'
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>
