const fs = require('fs-extra');

(() => {
  [
    ['scripts/custom/Footer.vue', 'node_modules/vuepress-theme-reco/components/Footer.vue']
  ].map(([source, target]) => {
    fs.copy(source, target)
      .then(() => console.log(`${source}: load success`))
      .catch(err => console.log(err))
  })
})()
