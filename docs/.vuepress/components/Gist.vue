<template>
  <vue-embed-gist :gist-id="id" :file="filename" />
</template>

<script>
import VueEmbedGist from "vue-embed-gist";

export default {
  name: "Gist",
  props: {
    id: {
      type: String,
      require: true
    },
    filename: {
      type: String,
      require: false
    }
  },
  components: {
    VueEmbedGist
  }
};
</script>

<style scoped>
@import url("https://github.githubassets.com/assets/gist-embed-4ac6018bcc05457cde2f66d2e7299d11.css");
</style>
