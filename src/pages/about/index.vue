<template>
  <section class="section">
    <div class="container content" v-html="content"></div>
  </section>
</template>

<script lang='ts'>
import content from "./about.md";
export default {
  data: () => ({
    content
  })
};
</script>
