<template>
  <div>
    <p v-html="gistDiv" />
  </div>
</template>
<script>
export default {
  props: {
    gistDiv: {
      type: String,
      required: true
    }
  }
};
</script>
<style scoped>
@import url("https://github.githubassets.com/assets/gist-embed-4ac6018bcc05457cde2f66d2e7299d11.css");
</style>