<template>
  <div>
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
import AppNavbar from "@/components/navbar.vue";
import AppFooter from "@/components/footer.vue";

export default {
  components: {
    AppNavbar,
    AppFooter
  },

  created() {
    document.body.classList.add("has-navbar-fixed-top");
  }
};
</script>


<style src="bulma/css/bulma.css"></style>
