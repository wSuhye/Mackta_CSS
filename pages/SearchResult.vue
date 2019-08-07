<template>
  <div class="resultContainer">
    <div class="scroll-fixed">
      <div class="buttonContainer">
        <button v-on:click="getTrains">trains</button>
        <button v-on:click="getBuses">buses</button>
        <button v-on:click="getAirplanes">airplanes</button>
      </div>
      <!-- <DropDown @:cheaper="cheaper" v-on:faster="faster"></DropDown> -->
      <br />
      <div class="dropdown">
        <button v-on:click="cheaper">cheaper</button>
        <button v-on:click="faster">faster</button>
      </div>
    </div>
    <div class="scroll">
      <!-- <router-link : to="i.uri" class="scroll-mq":class="$mq">{{i.title}}</router-link> -->
      <CardUI
        v-for="card in showingCards"
        :key="card.id"
        :price="card.price"
        :depTime="card.depTime"
        :arrTime="card.arrTime"
        :type1="card.type1"
        :type2="card.type2"
      ></CardUI>
    </div>
  </div>
</template>

<script>
import CardUI from "../components/resultUI/CardUI.vue";
// import DropDown from "../components/UI/DropDown.vue";
import "core-js";

export default {
  created() {
    this.getTrains();
  },
  data() {
    return {
      userInput: "",
      userInput2: "",
      userInput3: "",
      cards: [
        {
          type1: "train",
          type2: "KTX",
          id: 1,
          price: 10000,
          depTime: "1900",
          arrTime: "2000",
          time: 60
        },
        {
          type1: "train",
          type2: "KTX",
          id: 2,
          price: 5000,
          depTime: "1900",
          arrTime: "1930",
          time: 30
        },
        {
          type1: "bus",
          type2: "express",
          id: 3,
          price: 20000,
          depTime: "1900",
          arrTime: "2000"
        },
        {
          type1: "airplane",
          type2: "airplane",
          id: 4,
          price: 10000,
          depTime: "1900",
          arrTime: "2000"
        }
      ],
      showingCards: []
    };
  },
  components: {
    CardUI
  },
  methods: {
    getTrains() {
      this.showingCards = this.cards.filter(x => x.type1 === "train");
    },
    getBuses() {
      this.showingCards = this.cards.filter(x => x.type1 === "bus");
    },
    getAirplanes() {
      this.showingCards = this.cards.filter(x => x.type1 === "airplane");
    },
    cheaper() {
      this.showingCards.sort((a, b) => {
        return a.price - b.price;
      });
    },
    faster() {
      this.showingCards.sort((a, b) => {
        return a.time - b.time;
      });
    }
  }
};
</script>

<style>
.dropdown {
  /* position: sticky;
  top: 70px; */
  width: 80%;
  height: 30%;
  border-radius: 5px;
  border: solid 1px #65f7c2;
  background-color: rgba(101, 247, 194, 0.2);
  display: flex;
  justify-content: space-evenly;
  z-index: 1;
}

.scroll {
  height: 100%;
  width: 100%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.resultContainer {
  width: 100%;
  height: 100%;
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.buttonContainer {
  display: flex;
  justify-content: space-evenly;
}

.scroll-fixed {
  position: sticky;
  top: 4rem;
  height: 15%;
  z-index: 1;
  width: 100%;
  background-color: #f6f6f6;
  align-items: center;
  display: flex;
  flex-direction: column;
}

body {
  background-color: #f6f6f6;
}
</style>
