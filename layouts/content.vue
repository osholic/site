<template>
  <wrap :page="page">
    <section class="section">
      <div class="container content">
        <slot name="default"></slot>
      </div>
    </section>
  </wrap>
</template>

<script>
import Wrap from "./components/Wrap.vue";

export default {
  components: {
    Wrap
  },

  props: ["page"]
};
</script>
