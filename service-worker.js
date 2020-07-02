/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a77d10957212dd20967744413fc39767"
  },
  {
    "url": "assets/css/0.styles.ffea3e00.css",
    "revision": "4ce91a751acf129a8bfa2344c13f8a32"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/weixin-profile.1a275092.jpg",
    "revision": "1a2750928cffb146f2913680f3fccd46"
  },
  {
    "url": "assets/js/1.4c6cc974.js",
    "revision": "1957d507695e52a9775b0ff65fefd696"
  },
  {
    "url": "assets/js/10.2d93fef9.js",
    "revision": "de8a619a494e4be3eb640b77027d37ab"
  },
  {
    "url": "assets/js/11.e399033d.js",
    "revision": "856899d7e6971bbd1ec5f4456ca71408"
  },
  {
    "url": "assets/js/12.6b47bf81.js",
    "revision": "48284256ccc763c7b789e674b514b5af"
  },
  {
    "url": "assets/js/13.3e8a289f.js",
    "revision": "820b43e807c0a1426e1d29819311be59"
  },
  {
    "url": "assets/js/14.36195e04.js",
    "revision": "143bfa5465647b778cdba3facddbd805"
  },
  {
    "url": "assets/js/15.c4623adb.js",
    "revision": "c733c42255e042808fe360d2da0844ac"
  },
  {
    "url": "assets/js/16.e2a2b932.js",
    "revision": "6ac6c72388678b1aad709023fa752cd5"
  },
  {
    "url": "assets/js/17.627af95b.js",
    "revision": "a6f80c5b94dfe1abeb71885240f7efe8"
  },
  {
    "url": "assets/js/18.90792bdc.js",
    "revision": "256d178d44bc037f2ccdb07327250a86"
  },
  {
    "url": "assets/js/19.576db072.js",
    "revision": "fb6fbbb62363434815d89b399bd60d7e"
  },
  {
    "url": "assets/js/2.7f0b7b94.js",
    "revision": "2a8cacf92fe236eac421e96bb5430709"
  },
  {
    "url": "assets/js/20.b3a73994.js",
    "revision": "a6dc6a531e052ff28bf2769872e8bcc8"
  },
  {
    "url": "assets/js/21.9a948887.js",
    "revision": "f782133b06c8a524fbe4f4570cb16a04"
  },
  {
    "url": "assets/js/22.85aeb91d.js",
    "revision": "ca0acb8570fecc394ea7b2f494e71545"
  },
  {
    "url": "assets/js/23.14c85d6a.js",
    "revision": "c70fb7dc78a44309c3bafe82d970887b"
  },
  {
    "url": "assets/js/24.871118a7.js",
    "revision": "72731eeedd8da3b11b959ac8cbc434de"
  },
  {
    "url": "assets/js/25.0b967300.js",
    "revision": "1aefb1fbc432b569225b4d7b7a3fd014"
  },
  {
    "url": "assets/js/26.d922d9bb.js",
    "revision": "6f06cdc7183e52745884898fb4a3a653"
  },
  {
    "url": "assets/js/27.e1ded1e4.js",
    "revision": "7bff59e9029e89f7290291445487ffba"
  },
  {
    "url": "assets/js/28.8b29e362.js",
    "revision": "02f9b887d0b050977b3b3a53a6540ca1"
  },
  {
    "url": "assets/js/29.54fae7fc.js",
    "revision": "87914f463e417edac6a851e622eecf66"
  },
  {
    "url": "assets/js/30.d2749eef.js",
    "revision": "6c5b487104ba929f5543914818820e90"
  },
  {
    "url": "assets/js/31.fbe045d4.js",
    "revision": "e8bef84bc59a41b453b2adfc36f157f6"
  },
  {
    "url": "assets/js/32.3246fa23.js",
    "revision": "ad18e86d77023b96e75f40d7ddd7136b"
  },
  {
    "url": "assets/js/33.374a1c3f.js",
    "revision": "a698565bbd43dee7a067dcde8e2a5e0c"
  },
  {
    "url": "assets/js/34.346dba5e.js",
    "revision": "71bd3df33c3a1305c6ad2f5adc616272"
  },
  {
    "url": "assets/js/35.64b30acf.js",
    "revision": "f293e44cccb8b958f7f7621208127333"
  },
  {
    "url": "assets/js/36.8a80f99e.js",
    "revision": "3d06379c90e924b8c5fad53f77d65920"
  },
  {
    "url": "assets/js/37.6e5baa73.js",
    "revision": "87ad41452bf2821fd2a02065d13517ad"
  },
  {
    "url": "assets/js/38.d75adb25.js",
    "revision": "799ce8cf4e27a5e3849c997af1ce0138"
  },
  {
    "url": "assets/js/39.2699c83c.js",
    "revision": "9da553f8f9949a1537936986fa5fa757"
  },
  {
    "url": "assets/js/40.80857ce2.js",
    "revision": "0e353c0a49db4ad65868cbb1f1fd2433"
  },
  {
    "url": "assets/js/41.f1c06809.js",
    "revision": "27f47640de7e33ceb0e17349ded9d279"
  },
  {
    "url": "assets/js/42.cecbf81d.js",
    "revision": "258cdb3aaf94d2e411cf9194d3a4c27c"
  },
  {
    "url": "assets/js/43.d022a607.js",
    "revision": "a8109fbce99e2795881a3064a338bb7e"
  },
  {
    "url": "assets/js/44.171b645e.js",
    "revision": "3d00238f5448e92a8b0d10cd88e034de"
  },
  {
    "url": "assets/js/45.7cbe18b0.js",
    "revision": "605bfa408e0461b546a50da01ba825d7"
  },
  {
    "url": "assets/js/46.04a298d3.js",
    "revision": "098c36fea1c9ec6a3b038e954b973a71"
  },
  {
    "url": "assets/js/47.379a9b74.js",
    "revision": "c5e73c066712d35013276cd3a39816b3"
  },
  {
    "url": "assets/js/48.4f346631.js",
    "revision": "7abbb9d940ea24f00f443fa13dfef6fc"
  },
  {
    "url": "assets/js/49.8396c402.js",
    "revision": "11e09fb1fb8fe48a6aa97fffc252e09e"
  },
  {
    "url": "assets/js/50.8b39936d.js",
    "revision": "254f60ad77753b76d955020029c5b3c7"
  },
  {
    "url": "assets/js/51.8b72b0a7.js",
    "revision": "d0dd5069afc23c8e086d1a92c2d35714"
  },
  {
    "url": "assets/js/52.1bd5e24d.js",
    "revision": "744d7beb93249291504e4917b53cfe9f"
  },
  {
    "url": "assets/js/53.34c403c7.js",
    "revision": "f27959ee9f0f3f65db2fc9370ef8df82"
  },
  {
    "url": "assets/js/54.ffe38f8f.js",
    "revision": "b549b6fc12cdd26b3d71a6ba2c38df77"
  },
  {
    "url": "assets/js/6.34693a89.js",
    "revision": "2c3617a0b25cf5a1cf70de671b8ad3cf"
  },
  {
    "url": "assets/js/7.dd6f2ee1.js",
    "revision": "2fc14a6a1ee062ab5e85dca7b16d577a"
  },
  {
    "url": "assets/js/8.c1de1636.js",
    "revision": "e11a2cc741ccaa616cf7190a29721189"
  },
  {
    "url": "assets/js/9.aa7177d0.js",
    "revision": "872fcb0e6a48133d0c4be6adff21a9a0"
  },
  {
    "url": "assets/js/app.bc055166.js",
    "revision": "39f8120fe09a6de6a9ba69d8dfb401a9"
  },
  {
    "url": "assets/js/vendors~docsearch.062970df.js",
    "revision": "c5f082027d930236bdf01443b9f1b032"
  },
  {
    "url": "assets/js/vendors~flowchart.914912f6.js",
    "revision": "3b026aebe818f239a418c27e214c4c51"
  },
  {
    "url": "categories/index.html",
    "revision": "7972fff80919f563fbdef099b10e9351"
  },
  {
    "url": "en/index.html",
    "revision": "472ee9a1251c9ac974dd57f706db51f0"
  },
  {
    "url": "en/views/advance/calendar.html",
    "revision": "e4e22b9dd4c20f4cf5dc3f60fadf4e87"
  },
  {
    "url": "en/views/advance/fill-in.html",
    "revision": "b75a2af52c4654559f104508575813f2"
  },
  {
    "url": "en/views/advance/group.html",
    "revision": "1a96fb7b3a7d8eab070d63c63bd571c0"
  },
  {
    "url": "en/views/advance/keyboard.html",
    "revision": "c36e0dff0fc527376cab15c5db3d8e95"
  },
  {
    "url": "en/views/advance/rich-text.html",
    "revision": "4fd4d8e5bbfd9f2d7fe4a931585ddf23"
  },
  {
    "url": "en/views/advance/text-and-script.html",
    "revision": "1498644b90996b13235c60280b865895"
  },
  {
    "url": "en/views/introduce/basic-usage.html",
    "revision": "3386e0f0538687be1095478fec8572e2"
  },
  {
    "url": "en/views/introduce/features.html",
    "revision": "69112bac72aadd58a03fd948670cd2d0"
  },
  {
    "url": "en/views/introduce/installation.html",
    "revision": "cbd957a87f9c3cf6f178d8e35fd52986"
  },
  {
    "url": "en/views/introduce/quick-browse.html",
    "revision": "3ed49355ce587f74bdf51023074efeae"
  },
  {
    "url": "en/views/price.html",
    "revision": "9132c94d14d3d5e46accc8d0db16556e"
  },
  {
    "url": "en/views/reference/changelog.html",
    "revision": "afb698e877c2d554a73c5498f13aed78"
  },
  {
    "url": "en/views/reference/faq.html",
    "revision": "23d1bd4fcc5063a06a53af98abc58871"
  },
  {
    "url": "en/views/reference/privacy-policy.html",
    "revision": "24b0159ea08d5aa8d493549e9c093a35"
  },
  {
    "url": "en/views/reference/shortcut.html",
    "revision": "d327fee14e2bc23da94c52f7075009f0"
  },
  {
    "url": "head.png",
    "revision": "dd03fa8d6242c13528f676b1a035c306"
  },
  {
    "url": "icon_codeexpander.svg",
    "revision": "0d8f0321bf7b7e8e2e6710a488e82aab"
  },
  {
    "url": "icon.png",
    "revision": "99c6bf0783502be7a3b2b546fe0e779a"
  },
  {
    "url": "index.html",
    "revision": "111b8fbbbee2ff83e9b20e7148704afc"
  },
  {
    "url": "tag/index.html",
    "revision": "d92d62796a1c0a3c2a6209de3221efde"
  },
  {
    "url": "timeline/index.html",
    "revision": "ba9a7e403844df7f50d9090771780367"
  },
  {
    "url": "views/advance/calendar.html",
    "revision": "d2f65edc8a358eb2af117b6c1c7508b6"
  },
  {
    "url": "views/advance/fill-in.html",
    "revision": "f5076465db2b1f3cbb11bf8cc929ac51"
  },
  {
    "url": "views/advance/group.html",
    "revision": "56afa35a1df0744a2fc17d509760e9a3"
  },
  {
    "url": "views/advance/keyboard.html",
    "revision": "2dacdf84ba8ef9442a1a233cbfd38257"
  },
  {
    "url": "views/advance/rich-text.html",
    "revision": "87a4a071a71aba0054c1983697cc38e3"
  },
  {
    "url": "views/advance/text-and-script.html",
    "revision": "bad3ad1c4e6cf83fdd072625d05831df"
  },
  {
    "url": "views/introduce/basic-usage.html",
    "revision": "b2ea99ec0ab81dc81fc4eb2690e5a506"
  },
  {
    "url": "views/introduce/features.html",
    "revision": "e616f96b7941fb67081d935a8c846087"
  },
  {
    "url": "views/introduce/installation.html",
    "revision": "0526ca23e2c2ad7cac39e83ebd6a95d3"
  },
  {
    "url": "views/introduce/quick-browse.html",
    "revision": "836037211d13af2ec39a6b101d74178a"
  },
  {
    "url": "views/price.html",
    "revision": "ec191aed4e01b2ef515a280e61ce1a6c"
  },
  {
    "url": "views/reference/faq.html",
    "revision": "33a96c7b9ebde6f5fe08d341be18282d"
  },
  {
    "url": "views/reference/privacy-policy.html",
    "revision": "2a850e8528d3a4798a2ec830bfed7fb5"
  },
  {
    "url": "views/reference/shortcut.html",
    "revision": "695c8d0c6996d361d2d5ad9aa759a991"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
