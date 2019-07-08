<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <!-- <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" /> -->
          开源控
        </router-link>

        <a
          @click="toggle"
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          :class="[showMenu && 'is-active']"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div :class="[showMenu && 'is-active']" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item">博客</a>

          <router-link class="navbar-item" to="/about">关于我们</router-link>

          <a class="navbar-item" href="https://spectrum.chat/osholic">Spectrum</a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">更多</a>

            <div class="navbar-dropdown">
              <a class="navbar-item">淘宝店铺</a>
              <a class="navbar-item">GitHub</a>
              <a class="navbar-item">微博</a>
              <a class="navbar-item">授权许可</a>
              <hr class="navbar-divider" />
              <a class="navbar-item">反馈</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>


<script lang='ts'>
export default {
  data: () => ({
    showMenu: false
  }),

  methods: {
    toggle() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>
