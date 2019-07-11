<template>
  <wrap :page="page">
    <slot name="default"></slot>
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
