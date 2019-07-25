<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-6 is-5-fullhd is-offset-1-fullhd">
              <h1 class="title has-text-grey-dark">让开源更美好</h1>
              <h2 class="desc has-text-grey-light">精美的设计，正版授权的开源周边。在这里，你总能找到一款心仪的商品。</h2>
              <ClientOnly>
                <a
                  class="button shop-btn is-primary is-medium is-rounded"
                  :href="isWeixin ? $themeConfig.links.wxtotaobao : $themeConfig.links.taobao"
                >进入淘宝店铺</a>
              </ClientOnly>
            </div>
            <div class="column is-6">
              <img
                class="jumbotron"
                src="https://cdn.dribbble.com/users/13307/screenshots/5408637/attachments/1172091/characters_design_illustration_portfolio.jpg"
                alt
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="features">
        <div class="columns feature is-multiline">
          <div class="column is-5 has-text-centered">
            <img src="/svg/correct.svg" />
          </div>
          <div class="column text">
            <h3 class="title has-text-grey-dark">正版授权</h3>
            <p
              class="subtitle has-text-grey-light"
            >商店里所售卖的所有周边保证正版。我们会遵守每个商标的版权说明，若不能直接用于商业用途，会与作者联系获取授权。</p>
          </div>
        </div>

        <div class="columns feature is-multiline reverse">
          <div class="column is-5 has-text-centered">
            <img src="/svg/rulers.svg" />
          </div>
          <div class="column text">
            <h3 class="title has-text-grey-dark">与众不同的设计</h3>
            <p class="subtitle has-text-grey-light">每一款周边都经过精心设计，突出项目特点的同时，又不会显得突兀。</p>
          </div>
        </div>

        <div class="columns feature is-multiline">
          <div class="column is-5 has-text-centered">
            <img src="/svg/hot-coffee.svg" />
          </div>
          <div class="column text">
            <h3 class="title has-text-grey-dark">捐赠开源项目</h3>
            <p class="subtitle has-text-grey-light">授权周边的一部分收益会直接捐赠给对应的开源项目，所以你每购买一件周边产品，也是在对开源做贡献。</p>
          </div>
        </div>

        <div class="columns feature is-multiline reverse">
          <div class="column is-5 has-text-centered">
            <img src="/svg/graphic-tablet.svg" />
          </div>
          <div class="column text">
            <h3 class="title has-text-grey-dark">参与制作</h3>
            <p class="subtitle has-text-grey-light">如果你喜欢设计，欢迎你向我们提交设计稿。一旦被采用，我们会给你支付酬金。</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section contact">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-5">
            <h3 class="title has-text-grey-dark">寻求合作</h3>
            <p class="subtitle has-text-grey-light">如果你的开源项目有一定名气，并且想通过出售周边获取收益，欢迎与我们联系。</p>
          </div>
          <div class="column">
            <div class="card">
              <div class="card-content">
                <app-form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section shopping">
      <div class="container has-text-centered">
        <h3 class="title shop-title has-text-grey-dark">开始购物吧~</h3>
        <ClientOnly>
          <a
            class="button is-primary is-medium is-rounded"
            :href="isWeixin ? $themeConfig.links.wxtotaobao : $themeConfig.links.taobao"
          >淘宝店铺</a>
        </ClientOnly>
      </div>
    </section>
  </div>
</template>

<script>
import AppForm from "@/layouts/components/form.vue";

export const attributes = {
  layout: "default"
};

export default {
  components: {
    AppForm
  },

  data: () => ({
    isWeixin: false
  }),

  created() {
    if (!this.$isServer) {
      this.isWeixin = /micromessenger/.test(navigator.userAgent.toLowerCase());
    }
  }
};
</script>


<style lang="stylus" scoped>
.section:nth-of-type(2n)
  background #FAF8F4

.jumbotron
  @media (min-width: 768px)
    width 75vw
    max-width unset

.title
  font-weight bold
  font-size 52px
  color #333
  margin-top 80px

  @media (max-width: 600px)
    font-size 40px
    margin-top 0

.desc
  color #747474
  font-size 20px
  line-height 1.8

.shop-btn
  margin-top 100px

  @media (max-width: 600px)
    margin-top 40px

.features
  max-width 800px
  flex-grow 1
  margin 0 auto
  position relative
  width auto

  img
    width 90px

  .feature
    transition 0.3s
    border-radius 24px
    padding 50px 10px

    &:hover
      transform translateY(-5px)
      box-shadow 0 0 70px rgba(0, 0, 0, 0.06)
      background-color #fefcf8

    &:not(:last-of-type)
      margin-bottom 40px

.reverse
  flex-direction row-reverse

  .text
    @media (min-width: 768px)
      padding-left 30px

.shop-title
  font-size 40px
  margin-top 0

.contact
  max-width 1000px
  flex-grow 1
  margin 0 auto
  position relative
  width auto

.features, .contact
  .title
    margin-top 0
    font-weight 600
    line-height 1.125
    font-size 24px

  .subtitle
    font-size 16px
    line-height 28px
    padding-top 10px

.shopping
  padding 6rem 1.5rem

  .shop-title
    margin-bottom 4rem
</style>
