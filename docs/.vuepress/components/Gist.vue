<template>
  <div>
    <app-gist-core :gist-div="gistData" />
  </div>
</template>

<script>
var gistUrl = "https://gist.github.com/";
var data = {};
import GistCore from "./GistCore.vue";

export default {
  components: {
    appGistCore: GistCore
  },
  props: {
    id: {
      type: String,
      required: true
    },
    file: {
      type: String,
      required: false,
      default: ""
    }
  },
  data() {
    return {
      gistData: "loading..."
    };
  },
  mounted() {
    this.getGistData(this.id);
  },
  methods: {
    getGistData(gistId) {
      var self = this;
      if (this.file.length > 0) {
        data.file = this.file;
      }
      window.$.ajax({
        url: gistUrl + gistId + ".json",
        data: data,
        dataType: "jsonp",
        timeout: 20000,
        success: function(response) {
          self.gistData = response.div;
        },
        error: function(response) {
          console.log("error");
        }
      });
    }
  }
};
</script>

<style scoped>
@import url("https://github.githubassets.com/assets/gist-embed-4ac6018bcc05457cde2f66d2e7299d11.css");
</style>