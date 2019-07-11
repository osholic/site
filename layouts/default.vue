<template>
  <wrap :page="page">
    <slot name="default"></slot>
  </wrap>
</template>

<script>
import Wrap from "./components/wrap.vue";

export default {
  components: {
    Wrap
  },

  props: ["page"]
};
</script>
