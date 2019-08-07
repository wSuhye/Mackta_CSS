<template>
  <div class="nav">
    <div v-if="isLogin">Logout</div>
    <router-link v-else to="/login">
      <button>Login</button>
    </router-link>
  </div>

  <!-- <div class="menu">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div id="navigation" class="hidden">
      <div class="nav">
        <div class="top">
          <a href="#">
            <img src="profile.png" style="height: 10vh;" />
          </a>
        </div>

        <div class="middle">
          <a
            href="#"
            onmouseover="this.style.background='#82c1af';this.style.color='white';"
            onmouseout="this.style.background='white';this.style.color='#3b3d3c';"
          >
            <i class="fas fa-lock" style="margin-right: 5%;"></i>LOGIN
          </a>

          <div class="line1"></div>

          <a
            href="#"
            onmouseover="this.style.background='#82c1af';this.style.color='white';"
            onmouseout="this.style.background='white';this.style.color='#3b3d3c';"
          >
            <i class="fas fa-globe-americas" style="margin-right: 5%;"></i>LANGUAGE
          </a>

          <div class="line2"></div>

          <a
            href="#"
            onmouseover="this.style.background='#82c1af';this.style.color='white';"
            onmouseout="this.style.background='white';this.style.color='#3b3d3c';"
          >
            <i class="far fa-calendar-check" style="margin-right: 5%;"></i>RESERVATION
          </a>
        </div>
      </div>
    </div>
  </div>-->
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["isLogin"])
  }
};

// $(function() {
//   $(".menu").click(function() {
//     if ($("#navigation").hasClass("hidden")) {
//       $("#navigation").attr("class", "visible animated slideInLeft");
//     } else {
//       $("#navigation").attr("class", "hidden animated slideOutLeft");
//     }
//     $(this).toggleClass("open");
//   });

//   $("#navigation").click(function() {
//     if ($("navigation").hasClass("visible")) {
//       $(".menu").toggleClass("open");
//     } else {
//     }
//     $(this).attr("class", "slideOutLeft hidden");
//   });

//   $(document).keyup(function(e) {
//     if (e.keyCode == 27) {
//       if ($("#navigation").hasClass("visible")) {
//         $(".menu").toggleClass("open");
//       } else {
//       }
//       $("#navigation").attr("class", "slideOutLeft hidden");
//     }
//   });
// });
</script>
<style>
.nav {
  position: sticky;
  top: 0;
  width: 100%;
  height: 173px;
  /* opacity: 0.7; */
  background-color: #25f5a8;
  z-index: 1;
}

body {
  background-color: #25f5a8;
}
</style>
