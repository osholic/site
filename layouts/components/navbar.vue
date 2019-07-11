<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <saber-link class="navbar-item" to="/">
          <!-- <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" /> -->
          开源控
        </saber-link>

        <a
          @click="toggle"
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          :class="[showMenu && 'is-active']"
          :aria-expanded="showMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div :class="[showMenu && 'is-active']" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item">博客</a>

          <saber-link class="navbar-item" to="/about">关于我们</saber-link>

          <a class="navbar-item" :href="$themeConfig.links.spectrum">Spectrum</a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">更多</a>

            <div class="navbar-dropdown">
              <a class="navbar-item" :href="$themeConfig.links.taobao">淘宝店铺</a>
              <a class="navbar-item" :href="$themeConfig.links.github">GitHub</a>
              <a class="navbar-item" :href="$themeConfig.links.license">授权许可</a>
              <hr class="navbar-divider" />
              <a class="navbar-item" :href="$themeConfig.links.feedback">反馈</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>


<script>
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
