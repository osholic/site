<template>
  <div class="main">
    已下线
    <!-- <header class="app-header">
      <app-navbar />
    </header>
    <main class="app-content">
      <slot></slot>
    </main>

    <app-footer /> -->
  </div>
</template>

<script>
import "./mystyles.scss";
import AppNavbar from "./navbar.vue";
import AppFooter from "./footer.vue";

export default {
  components: {
    AppNavbar,
    AppFooter
  },

  computed: {
    siteTitle() {
      return this.$siteConfig.title || "Your Awesome Title";
    }
  },

  props: ["page"],

  head() {
    const { excerpt } = this.page;
    const { title } = this.page.attributes;
    let { description } = this.$siteConfig;

    return {
      title: title ? `${title} - ${this.siteTitle}` : this.siteTitle,
      meta: [
        description && {
          name: "description",
          content: description
        }
      ].filter(Boolean),
      bodyAttrs: {
        class: "has-navbar-fixed-top"
      },
      link: [
        {
          rel: "shortcut icon",
          href: "/favicon.ico",
          type: "image/x-icon"
        }
      ].concat(this.$feed
        ? [
            {
              rel: "alternate",
              title: `${this.siteTitle} - Feed`,
              type: `application/${
                this.$feed.type === "atom"
                  ? "atom+xml"
                  : this.$feed.type === "rss"
                  ? "rss+xml"
                  : "json"
              }`,
              href: this.$feed.permalink
            }
          ].filter(Boolean)
        : [])
    };
  }
};
</script>

<style lang='stylus'>
html, body
  height 100%

*
  transition .2s

#_saber
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
