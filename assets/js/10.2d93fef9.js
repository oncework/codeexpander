(window.webpackJsonp=window.webpackJsonp||[]).push([[10,14],{269:function(t,i,e){},306:function(t,i,e){"use strict";var n=e(269);e.n(n).a},307:function(t,i,e){},325:function(t,i,e){"use strict";e.r(i);var n={props:{gistDiv:{type:String,required:!0}}},s=(e(306),e(3)),r=Object(s.a)(n,(function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("p",{domProps:{innerHTML:this._s(this.gistDiv)}})])}),[],!1,null,"50542b23",null);i.default=r.exports},371:function(t,i,e){"use strict";var n=e(307);e.n(n).a},403:function(t,i,e){"use strict";e.r(i);var n=e(325),s={},r={components:{appGistCore:n.default},props:{id:{type:String,required:!0},file:{type:String,required:!1,default:""}},data:function(){return{gistData:"loading..."}},mounted:function(){this.getGistData(this.id)},methods:{getGistData:function(t){var i=this;this.file.length>0&&(s.file=this.file),window.$.ajax({url:"https://gist.github.com/"+t+".json",data:s,dataType:"jsonp",timeout:2e4,success:function(t){i.gistData=t.div},error:function(t){console.log("error")}})}}},a=(e(371),e(3)),o=Object(a.a)(r,(function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("app-gist-core",{attrs:{"gist-div":this.gistData}})],1)}),[],!1,null,"3efa375f",null);i.default=o.exports}}]);