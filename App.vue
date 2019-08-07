<template>
  <div class="container1">
    <nav-bar></nav-bar>
    <!-- routerview만 바뀌게 -->
    <div class="body2">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "./components/layout/NavBar.vue";
import Footer from "./components/layout/Footer.vue";
export default {
  components: {
    NavBar,
    Footer
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
.container1 {
  width: 100%;
  height: 100%;
}

.body2 {
  background-color: #25f5a8;
}
</style>