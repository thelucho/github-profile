<template>
  <div class="container">
    <profile-search />
    <profile-card v-if="this.getUser && !this.getErrorMsg" />
    <div class="errorMsg" v-if="this.getErrorMsg">
      <span class="icon">&times;</span>
      <span>No se ha encontrado el usuario</span>
    </div>
  </div>
</template>

<script>
import ProfileCard from "@/components/ProfileCard.vue";
import ProfileSearch from "@/components/ProfileSearch.vue";
import { mapGetters } from "vuex";

export default {
  name: "Profile",
  components: {
    ProfileCard,
    ProfileSearch,
  },
  computed: mapGetters(["getUser", "getUserRepos", "getErrorMsg"]),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100vh;
  background: #fafafa;

  .errorMsg {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: rgb(32, 32, 32);
      font-size: 15px;
      font-weight: 600;
      text-transform: uppercase;

      &.icon {
        font-size: 33px;
        padding-top: 2px;
        color: red;
        line-height: 0px;
        margin-right: 5px;
      }
    }
  }
}
</style>
