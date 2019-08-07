<template>
  <div class="search_box">
    <div class="main">
      <div class="dep_word">출발지를 선택하세요.</div>
      <div class="departure">
        <img
          src="assets/icons/icon.png"
          srcset="img/icon@2x.png 2x, img/icon@3x.png 3x"
          class="Icon"
        />
        <input @input="inputDepart" placeholder="출발지" />
      </div>
      <div class="arr_word">목적지를 선택하세요.</div>
      <input class="arrive" @input="inputDest" placeholder="목적지" type="type" name="name" />
      <div class="date_word">날짜를 선택하세요.</div>
      <input class="date" @input="inputDate" placeholder="날짜" type="type" name="name" />
      <br />
      <router-link to="/searchresult">
        <button class="search" @click="search">Search</button>
      </router-link>
    </div>
    <hr width="80%;" />
    <br />
    <div class="bottom">
      <div class="bt1">사용설명서</div>
      <div class="bt2">Search</div>
      <div class="bt3">Reservation</div>
      <div class="bt4">Pay</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    inputDepart(e) {
      this.$store.dispatch("INPUT_DEPART", e.target.value);
    },
    inputDest(e) {
      this.$store.dispatch("INPUT_DEST", e.target.value);
    },
    inputDate(e) {
      this.$store.dispatch("INPUT_DATE", e.target.value);
    },
    search() {
      this.$store.dispatch("SEND_FORM");
    }
  }
};
</script>

<style>
.search_box {
  width: 100%;
  height: 100%;
  margin-top: 0%;
  border-radius: 26px;
  box-shadow: 2px 2px 8px -1px rgba(133, 133, 133, 0.5);
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.main {
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.bottom {
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 5rem;
}

hr {
  overflow: visible;
  width: 100%;
}

.bt1 {
  width: 100%;
  height: 50px;
  font-size: 1rem;
}

.bt2 {
  width: 100%;
  height: 50px;
  font-size: 1rem;
}

.bt3 {
  width: 100%;
  height: 50px;
  font-size: 1rem;
}

.bt4 {
  width: 100%;
  height: 50px;
  font-size: 1rem;
}

.dep_word {
  color: #24d895;
  font-family: BMHANNAProOTF;
  font-size: 1.35rem;
  position: relative;
  right: 3rem;
}

.departure {
  width: 75%;
  height: 35px;
  border-radius: 6px;
  background-color: rgba(101, 247, 194, 0.2);
}

.arr_word {
  color: #24d895;
  font-family: BMHANNAProOTF;
  font-size: 1.35rem;
  position: relative;
  right: 3rem;
}

.arrive {
  width: 75%;
  height: 35px;
  background-color: rgba(101, 247, 194, 0.2);
  border-radius: 6px;
}

.date_word {
  color: #24d895;
  font-family: BMHANNAProOTF;
  font-size: 1.35rem;
  position: relative;
  right: 3.7rem;
}

.date {
  width: 75%;
  height: 35px;
  border-radius: 6px;
  background-color: rgba(101, 247, 194, 0.2);
}

.search {
  margin-bottom: 45px;
  width: 100%;
  height: 45px;
  border-radius: 22.5px;
  background-color: #42edaf;
  font-family: BMDoHyeon-OTF;
  font-size: 1.2rem;
  color: #002e1d;
}

a {
  width: 50%;
}
</style>
