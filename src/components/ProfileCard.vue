<template>
  <div class="card">
    <div class="card__img">
      <img :src="getUser.avatar_url" />
    </div>
    <div class="card__name">{{ getUser.name }} (@{{ getUser.login }})</div>
    <div class="card__details">
      <div class="card__details-location">{{ getUser.location }}</div>
      <div class="card__details-bio">{{ getUser.bio }}</div>
    </div>
    <button class="card__button" @click="getRepositorios">View Repos</button>
    <hr />
    <ul class="card__repos-list">
      <li v-for="repo in getUserRepos" :key="repo.id">
        <a :href="repo.html_url">{{ repo.full_name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ProfileCard",
  data() {
    return {
      isButtonDisabled: true,
    };
  },
  methods: {
    getRepositorios() {
      this.$store.dispatch("getUserRepos", this.getUser.login);
    },
  },
  computed: mapGetters(["getUser", "getUserRepos", "getErrorMsg"]),
};
</script>

<style scoped lang="scss">
.card {
  width: 500px;
  min-height: 450px;
  background: #fff;
  box-shadow: 0px 0px 50px rgba(26, 34, 126, 0.282);
  padding: 35px 35px;
  box-sizing: border-box;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .card__img {
    width: 100px;
    margin-bottom: 15px;

    img {
      width: 100%;
      height: auto;
      border-radius: 50%;
    }
  }

  .card__name {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 7px;
  }

  .card__details {
    display: flex;
    justify-content: center;
    align-items: center;

    .card__details-location,
    .card__details-bio {
      margin: 0 8px 25px;
      font-size: 15px;
    }
  }

  .card__button {
    display: block;
    background: #1a237e;
    box-shadow: 0px 0px 50px rgba(26, 34, 126, 0.282);
    border: none;
    border-radius: 8px;
    width: 150px;
    height: 45px;
    font-size: 15px;
    letter-spacing: 1px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
    cursor: pointer;

    &:hover {
      background-color: #212b92;
    }

    &:focus,
    &:active {
      outline: none;
    }
  }

  hr {
    height: 1px;
    width: 100%;
    background: rgb(196, 196, 196);
    border: none;
  }

  .card__repos-list {
    padding: 0 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;

    li {
      list-style: none;
      margin: 7px 3px;
      font-size: 12px;

      a {
        background: #57b57c;
        color: white;
        padding: 3px 8px;
        border-radius: 5px;
        text-decoration: none;
      }
    }
  }
}
</style>