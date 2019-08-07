<template>
  <div class="dropdown-sort">
    정렬기준
    <button v-on:click="cheaper" class="cheaper">cheaper</button>
    <button v-on:click="faster" class="faster">faster</button>
  </div>
</template>

<script>
export default {
  methods: {
    cheaper() {
      this.$emit("cheaper");
    },
    faster() {
      this.$emit("faster");
    }
  }
};
</script>

<style>
</style>
