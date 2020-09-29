<template>
  <form class="search" v-on:submit.prevent="getUsuario">
    <input
      type="text"
      v-model="inputValue"
      placeholder="Search a github profile..."
    />
    <button type="submit">Good Luck</button>
  </form>
</template>

<script>
export default {
  name: "ProfileSearch",
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    getUsuario() {
      this.$store.dispatch("getUser", this.inputValue);
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  margin-bottom: 45px;
  width: 500px;
  display: flex;
  justify-content: center;
  position: relative;

  input {
    width: 100%;
    height: 42px;
    padding: 0px 100px 0px 20px;
    border-radius: 50px;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 50px rgba(26, 34, 126, 0.282);
    font-size: 16px;

    &:active,
    &:focus {
      outline: none;
    }
  }

  button {
    position: absolute;
    top: 3px;
    right: 3px;
    background-color: #1a237e;
    color: white;
    border: none;
    height: 38px;
    width: 120px;
    border-radius: 50px;
    cursor: pointer;

    &:hover {
      background-color: #212b92;
    }

    &:focus,
    &:active {
      outline: none;
    }
  }
}
</style>