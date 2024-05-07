<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #231a47; width: 100%">
    <div class="container">
      <a href="/" class="navbar-brand">
        <img src="https://d31s10tn3clc14.cloudfront.net/imgs/falc/Review-Logos/forum-financial-management_logo.png"
          height="30" alt="" />
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" @click="setFilterTitle('computador')">computador</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="setFilterTitle('aplicativos')">aplicativos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="setFilterTitle('periféricos')">periféricos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="setFilterTitle('programação')">programação</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="setFilterTitle('outros')">outros</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />

  <CommentsList :filterTitle="filterTitle" :key="filterTitle" />

  <footer class="bg-body-tertiary text-center text-lg-start mt-4" style="position: fixed; bottom: 0; width: 100%;">
    <div class="text-center p-3" style="color: #fff; background-color: #231a47">
      Desenvolvido por Érika Lima © 2024
    </div>
  </footer>
</template>

<script>
import CommentsList from "./components/CommentsList.vue";

export default {
  components: {
    CommentsList,
  },
  data() {
    return {
      filterTitle: "",
    };
  },
  methods: {
    setFilterTitle(title) {
      this.filterTitle = title;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-bottom: 90px;
  color: #2c3e50;
  position: relative;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  background-image: url("https://cdn.shopify.com/s/files/1/0575/0987/1774/files/3_a30a55b4-0340-4c38-8e2a-8c7be4f409ba.png?v=1653967370");
}

.navbar .dropdown-menu a:hover {
  color: #616161 !important;
}
</style>
