<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-6 is-5-fullhd is-offset-1-fullhd">
              <h1 class="title">让开源更美好</h1>
              <h2 class="desc">精美的设计，正版授权的开源周边。在这里，你总能找到一款心仪的商品。</h2>
              <button class="button shop-btn is-info is-medium">进入淘宝店铺</button>
            </div>
            <div class="column is-6">
              <img
                src="https://gcontent.robertsonmarketing.com/store/20160512512/assets/themes/theme1_en/images/home/jun19/banner-hero1.png"
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
          <div class="column has-text-centered">
            <img src="/svg/correct.svg" />
          </div>
          <div class="column text">
            <h3 class="title">正版授权</h3>
            <p class="subtitle">商店里所售卖的所有周边保证正版。我们会遵守每个商标的版权使用说明，非商业使用的会与原作者联系获取授权。</p>
          </div>
        </div>

        <div class="columns feature is-multiline reverse">
          <div class="column has-text-centered">
            <img src="/svg/rulers.svg" />
          </div>
          <div class="column text">
            <h3 class="title">与众不同的设计</h3>
            <p class="subtitle">每一款周边都是经过精心设计，突出特点又不会显得突兀。</p>
          </div>
        </div>

        <div class="columns feature is-multiline">
          <div class="column has-text-centered">
            <img src="/svg/hot-coffee.svg" />
          </div>
          <div class="column text">
            <h3 class="title">捐赠开源项目</h3>
            <p class="subtitle">授权周边的一部分收益会直接捐赠给对应的开源项目，所以您每买一件周边也是在对开源做贡献。</p>
          </div>
        </div>

        <div class="columns feature is-multiline reverse">
          <div class="column has-text-centered">
            <img src="/svg/graphic-tablet.svg" />
          </div>
          <div class="column text">
            <h3 class="title">参与制作</h3>
            <p class="subtitle">如果你喜欢设计，欢迎你向我们提交设计稿。一旦被采用，我们会给你支付酬金。</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section contact">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-5">
            <h3 class="subtitle">寻求合作</h3>
            <p>如果您的开源项目有一定名气，并且想通过出售周边获取收益，欢迎您与我们联系。</p>
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

    <section class="section">
      <div class="container has-text-centered">
        <h3 class="title shop-title">开始购物吧！</h3>
        <button class="button is-info">淘宝店铺</button>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import AppForm from "@/components/form.vue";

export default {
  components: {
    AppForm
  }
};
</script>


<style lang="stylus" scoped>
.section:nth-of-type(2n)
  background #FBFBFD

.title
  font-weight 300
  font-size 40px
  color #333
  margin-top 100px

  @media (max-width: 600px)
    margin-top 0

.desc
  color #747474
  font-size 20px
  line-height 1.8
  font-weight 300

.shop-btn
  margin-top 40px

.features
  max-width 700px
  flex-grow 1
  margin 0 auto
  position relative
  width auto

  .title
    margin-top 0
    font-weight 600
    line-height 1.125
    font-size 24px

  .subtitle
    font-size 18px
    line-height 26px
    padding-top 10px

  img
    width 100px

  .feature:not(:last-of-type)
    margin-bottom 80px

.reverse
  flex-direction row-reverse

.shop-title
  margin-top 0

.contact
  max-width 1000px
  flex-grow 1
  margin 0 auto
  position relative
  width auto
</style>
