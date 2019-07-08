<template>
  <div class="main">
    <header class="app-header">
      <app-navbar />
    </header>
    <main class="app-content">
      <router-view />
    </main>

    <app-footer />
  </div>
</template>

<script lang='ts'>
import "bulma/css/bulma.css";
import AppNavbar from "@/components/navbar.vue";
import AppFooter from "@/components/footer.vue";

export default {
  components: {
    AppNavbar,
    AppFooter
  },

  created() {
    if (!this.$isServer) {
      document.body.classList.add("has-navbar-fixed-top");
    }
  }
};
</script>

<style lang='stylus'>
html, body
  height 100%

#app
  min-height 100%
  display flex

.main
  min-height 100%
  display flex
  flex-direction column
  width 100%

.app-content
  flex 1
</style>
