<template>
  <div class="Rectangle">
    <div class="type">{{ type2 }}</div>
    <div class="fzki">{{ type1 }}</div>
    <div class="timeContainer">
      <div class="departTime">출발 {{ depTime }}</div>
      <div class="arriveTime">도착 {{ arrTime }}</div>
    </div>

    <button class="reservation">예약하기(준비중)</button>
    <div class="bottomContainer">
      <div class="won_word">성인 1인 기준</div>
      <div class="-won">{{ price }}원</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["price", "depTime", "arrTime", "type1", "type2"]
};
</script>

<style>
.Rectangle {
  position: relative;
  top: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 1rem;
  width: 90%;
  height: 176px;
  border-radius: 10px;
  box-shadow: 1px 2px 8px -1px rgba(133, 133, 133, 0.5);
  background-color: #ffffff;
}

.type {
  margin-left: 1rem;
  /* width: 103px;
  height: 17px; */
  font-family: BMHANNAProOTF;
  font-size: 1.2rem;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #24d895;
}

.fzki {
  margin-left: 1rem;
  /* width: 68px;
  height: 18px; */
}

.-won {
  margin-left: 15rem;
  font-family: BMDoHyeon-OTF;
  font-size: 1rem;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #39534a;
}

.won_word {
  margin-left: 14rem;
  font-size: 0.8rem;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #39534a;
}

.timeContainer {
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 0.8rem;
}
.departTime {
  margin-left: 1rem;
  /* width: 34px;
  height: 15px; */
  font-family: BMDoHyeon-OTF;
  font-size: 1rem;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #39534a;
}

.arriveTime {
  margin-right: 5rem;
  /* width: 37px;
  height: 15px; */
  font-family: BMDoHyeon-OTF;
  font-size: 1rem;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #39534a;
}

.bottomContainer {
  position: relative;
  bottom: 0.2rem;
  right: 0.4rem;
  display: flex;
  flex-direction: column;
}

.reservation {
  position: relative;
  top: 2.5rem;
  margin-left: 1rem;
  font-family: BMDoHyeon-OTF;
  font-size: 0.8rem;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #006640;
  width: 35%;
  height: 25px;
  opacity: 0.54;
  border-radius: 11px;
  background-color: #65f7c2;
  max-width: 300px;
}

.nav {
  height: 60px;
}
</style>
