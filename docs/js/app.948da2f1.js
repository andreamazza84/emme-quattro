(function(t){function e(e){for(var r,s,a=e[0],c=e[1],l=e[2],u=0,d=[];u<a.length;u++)s=a[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);m&&m(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],r=!0,s=1;s<o.length;s++){var a=o[s];0!==n[a]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=o[0]))}return t}var r={},s={app:0},n={app:0},i=[];function a(t){return c.p+"js/"+({Err404:"Err404",cookie:"cookie",informativa:"informativa",privacy:"privacy"}[t]||t)+"."+{Err404:"9c84b4a5",cookie:"7f987696",informativa:"8ceb8565",privacy:"8f46a3b4"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(t){var e=[],o={cookie:1,informativa:1,privacy:1};s[t]?e.push(s[t]):0!==s[t]&&o[t]&&e.push(s[t]=new Promise((function(e,o){for(var r="css/"+({Err404:"Err404",cookie:"cookie",informativa:"informativa",privacy:"privacy"}[t]||t)+"."+{Err404:"31d6cfe0",cookie:"92c86610",informativa:"92c86610",privacy:"92c86610"}[t]+".css",n=c.p+r,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var l=i[a],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===n))return e()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){l=d[a],u=l.getAttribute("data-href");if(u===r||u===n)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var r=e&&e.target&&e.target.src||n,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete s[t],m.parentNode.removeChild(m),o(i)},m.href=n;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){s[t]=0})));var r=n[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,o){r=n[t]=[e,o]}));e.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=a(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(m);var o=n[t];if(0!==o){if(o){var r=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",d.name="ChunkLoadError",d.type=r,d.request=s,o[1](d)}n[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(o,r,function(e){return t[e]}.bind(null,r));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0d03":function(t,e,o){},"0d99":function(t,e,o){"use strict";o("0d03")},"14bb":function(t,e,o){"use strict";o("3ad0")},3235:function(t,e,o){"use strict";o("a01b")},"3ad0":function(t,e,o){},"44cd":function(t,e,o){},"489c":function(t,e,o){"use strict";o("e196")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"header"}},[o("baseNavbar")],1),o("router-view",{attrs:{id:"main"}}),o("baseFooter"),o("baseOverlay")],1)},n=[],i=o("1da1"),a=(o("96cf"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("section",{style:"height: "+t.navbar.height,attrs:{id:"navbar"}},[t.showBars?o("div",{staticClass:"container menu-hamburger"},[o("router-link",{staticClass:"home-page",attrs:{to:"/"}},[o("div",{staticClass:"logo",style:t.logoStyle})]),o("i",{staticClass:"icon-hamburger",on:{click:function(e){return t.showHide()}}}),t.showMenu?o("div",{staticClass:"container mobile-menu"},[o("i",{staticClass:"close-menu",on:{click:function(e){return t.showHide()}}}),o("router-link",{staticClass:"mobile-menu-link",attrs:{to:"/"}},[o("span",{staticClass:"link",on:{click:function(e){t.showHide(),t.scrollToTop()}}},[t._v("Home")])]),o("router-link",{staticClass:"mobile-menu-link",attrs:{to:"/chi-siamo"}},[o("span",{staticClass:"link",on:{click:function(e){t.showHide(),t.scrollToTop()}}},[t._v("Chi Siamo")])]),o("router-link",{staticClass:"mobile-menu-link",attrs:{to:"/prodotti"}},[o("span",{staticClass:"link",on:{click:function(e){t.showHide(),t.scrollToTop()}}},[t._v("Prodotti")])]),o("router-link",{staticClass:"mobile-menu-link",attrs:{to:"/servizi"}},[o("span",{staticClass:"link",on:{click:function(e){t.showHide(),t.scrollToTop()}}},[t._v("Servizi")])]),o("router-link",{staticClass:"mobile-menu-link",attrs:{to:"/contatti"}},[o("span",{staticClass:"link",on:{click:function(e){t.showHide(),t.scrollToTop()}}},[t._v("Contatti")])])],1):t._e()],1):o("div",{staticClass:"container desktop-menu"},[o("router-link",{staticClass:"desktop-menu-link",attrs:{to:"/chi-siamo"}},[o("span",{staticClass:"link",style:"font-size: "+t.link.size,on:{click:function(e){return t.scrollToTop()}}},[t._v("Chi Siamo")])]),o("router-link",{staticClass:"desktop-menu-link",attrs:{to:"/prodotti"}},[o("span",{staticClass:"link",style:"font-size: "+t.link.size,on:{click:function(e){return t.scrollToTop()}}},[t._v("Prodotti")])]),o("router-link",{staticClass:"desktop-menu-link home-page",attrs:{to:"/"}},[o("div",{staticClass:"logo",style:t.logoStyle,on:{click:function(e){return t.scrollToTop()}}})]),o("router-link",{staticClass:"desktop-menu-link",attrs:{to:"/servizi"}},[o("span",{staticClass:"link",style:"font-size: "+t.link.size,on:{click:function(e){return t.scrollToTop()}}},[t._v("Servizi")])]),o("router-link",{staticClass:"desktop-menu-link",attrs:{to:"/contatti"}},[o("span",{staticClass:"link",style:"font-size: "+t.link.size,on:{click:function(e){return t.scrollToTop()}}},[t._v("Contatti")])])],1)]),o("section",{attrs:{id:"jingle"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.jingle.show,expression:"jingle.show"}],staticClass:"container"},[o("div",{staticClass:"content"},[t._v("il colore su misura")])])])])}),c=[],l=(o("9911"),o("d3b7"),o("3ca3"),o("ddb0"),o("8c4f")),u=o("b85c"),d=o("2f62"),m=o("bc3a"),p=o.n(m);r["a"].use(d["a"]);var f=new d["a"].Store({state:{user:null,register:null,prodotti:null,servizi:null,carosello:null,contatti:null,pages:null,scroll:null,cookie:!1},mutations:{SET_USER:function(t,e){t.user=e},DELETE_USER:function(t){t.user=null},REGISTER_USER:function(t,e){t.register=e},SET_PRODOTTI:function(t,e){t.prodotti=e.reverse()},SET_SERVIZI:function(t,e){t.servizi=e.reverse()},SET_SLIDER:function(t,e){t.carosello=e.reverse()},SET_PAGES:function(t,e){t.pages=e},SET_CONTATTI:function(t,e){var o,r=null,s=null,n=null,i=null,a=[],c=new DOMParser,l=Object(u["a"])(e);try{for(l.s();!(o=l.n()).done;){var d=o.value;r=d.id,s=d.slug,n=d.title.rendered,i=c.parseFromString(d.content.rendered,"text/html"),i=i.body.firstChild.textContent,a.push({id:r,slug:s,title:n,content:i})}}catch(m){l.e(m)}finally{l.f()}t.contatti=a.reverse()},SET_POSTS:function(t,e){t.posts=e},SET_NEWS:function(t,e){t.news=e},SET_SCROLL:function(t,e){t.scroll=e},SET_COOKIE:function(t){t.cookie=!t.cookie}},actions:{login:function(t,e){var o=t.commit;return new Promise((function(t,r){try{var s=p.a.post("/jwt-auth/v1/token",e),n=s.data;o("SET_USER",n),t(n)}catch(i){r(i)}}))},validate:function(t){var e=t.state;return p()({url:"/jwt-auth/v1/token/validate",method:"post",headers:{Authorization:"Bearer ".concat(e.user.token)}})},logout:function(t){var e=t.commit;e("DELETE_USER","null")},register:function(t,e){var o=t.commit;return new Promise((function(t,r){try{var s=p.a.post("/wp/v2/users/register",e),n=s.data;o("REGISTER_USER",n),t(n)}catch(i){r(i)}}))},reset:function(t){return new Promise((function(e,o){try{var r=p.a.post("/wp/v2/users/lost-password",t),s=r.data;e(s)}catch(n){o(n)}}))},retrieveData:function(t,e){var o=t.commit;new Promise(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r,s){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.get("/wp/v2/".concat(e));case 3:if(n=t.sent,i=n.data,"prodotti"!==e){t.next=7;break}return t.abrupt("return",o("SET_PRODOTTI",i));case 7:if("servizi"!==e){t.next=9;break}return t.abrupt("return",o("SET_SERVIZI",i));case 9:if("carosello"!==e){t.next=11;break}return t.abrupt("return",o("SET_SLIDER",i));case 11:if("contatti"!==e){t.next=13;break}return t.abrupt("return",o("SET_CONTATTI",i));case 13:if("pages"!==e){t.next=15;break}return t.abrupt("return",o("SET_PAGES",i));case 15:if("posts"!==e){t.next=17;break}return t.abrupt("return",o("SET_POSTS",i));case 17:if("news"!==e){t.next=19;break}return t.abrupt("return",o("SET_NEWS",i));case 19:r(i),t.next=25;break;case 22:t.prev=22,t.t0=t["catch"](0),s(t.t0);case 25:case"end":return t.stop()}}),t,null,[[0,22]])})));return function(e,o){return t.apply(this,arguments)}}())},cookie:function(t){var e=t.commit;return e("SET_COOKIE")}}}),v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home pt-90"},[o("v-banner"),o("section",{staticClass:"container top"},[o("carousel",{staticClass:"carousel big-carousel",attrs:{"per-page":1,autoplay:!0,autoplayTimeout:3e3,loop:!0,paginationEnabled:!0,paginationPosition:"bottom-overlay",paginationActiveColor:"#ed7124",paginationColor:"#ed712455",paginationSize:15,paginationPadding:15,touchDrag:!0,mouseDrag:!0}},t._l(t.carosello,(function(t){return o("slide",{key:t.slug,staticClass:"slide"},[o("div",{staticClass:"image",style:"background-image:url("+t.acf.image.url+")"})])})),1),o("div",{staticClass:"overlay row"},[o("div",{staticClass:"col-lg-4 col-offset-lg-7 col-md-6 col-offset-md-5 col-sm-10 col-offset-sm-1 call-out shadow"},[t._m(0),o("router-link",{staticClass:"btn",attrs:{to:"/contatti"},nativeOn:{click:function(e){return t.scrollToTopAuto()}}},[t._v("Contattaci")])],1)])],1)],1)},h=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"search-for"},[t._v(" Cerchi una vernice oppure un colore in particolare?"),o("br"),t._v("Con M4 hai tante soluzioni per i "),o("span",[t._v("privati")]),t._v(" e tanti servizi dedicati alle "),o("span",[t._v("imprese")])])}],g=o("0a63"),w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"cookie",class:t.$store.state.cookie?"visible":"hidden"},[o("div",{staticClass:"cookie-content"},[t._m(0),o("div",{staticClass:"buttons"},[o("v-btn",{staticClass:"policy white--text mr-2",attrs:{elevation:"2",rounded:"",outlined:"",color:"#fff"},on:{click:function(e){t.$router.push("cookie-policy"),t.$store.dispatch("cookie"),t.scrollToTop()}}},[o("span",[t._v("Cookie Policy")])]),o("v-btn",{staticClass:"accept white--text",attrs:{elevation:"2",rounded:""},on:{click:function(e){return t.$store.dispatch("cookie")}}},[o("span",[t._v("Accetta tutti i cookie")])])],1)])])},b=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"disclaimer"},[t._v(" Noi e terze parti selezionate utilizziamo cookie o tecnologie simili come specificato nella cookie policy."),o("br"),t._v(" Puoi acconsentire all’utilizzo di tali tecnologie chiudendo questa informativa, interagendo con un link o un pulsante al di fuori di questa informativa o continuando a navigare in altro modo. ")])}],_={mounted:function(){setTimeout(2e3,this.$store.dispatch("cookie"))},methods:{scrollToTop:function(){window.scrollTo(0,0)}}},k=_,C=(o("0d99"),o("2877")),y=o("6544"),T=o.n(y),E=o("8336"),x=Object(C["a"])(k,w,b,!1,null,"6e7ce807",null),S=x.exports;T()(x,{VBtn:E["a"]});var O={components:{Carousel:g["Carousel"],Slide:g["Slide"],baseOverlay:S},data:function(){return{window:{width:0,scrollY:null},show:4}},computed:{carosello:function(){return this.$store.state.carosello},news:function(){return this.$store.state.news}},methods:{scrollToTopAuto:function(){window.scrollTo({top:0,behavior:"auto"})},storePosition:function(){console.log("storePosition ",!0),this.window.scrollY=Math.floor(window.scrollY),this.$store.commit("SET_SCROLL",this.window.scrollY),console.log(this.$store.state.scroll)},mediaWidth:function(){this.window.width=window.innerWidth,this.window.width<=992&&this.window.width>768?this.show=2:this.window.width<=1200&&this.window.width>992?this.show=3:this.window.width<=768?this.show=1:this.window.width>1200&&(this.show=4)}},created:function(){window.addEventListener("resize",this.mediaWidth)},mounted:function(){this.mediaWidth()},distroyed:function(){window.removeEventListener("resize",this.mediaWidth)}},P=O,$=o("e4e5"),j=Object(C["a"])(P,v,h,!1,null,null,null),z=j.exports;T()(j,{VBanner:$["a"]});var M=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"about pt-200"},[o("div",{staticClass:"container90"},[o("div",{staticClass:"row flex justify-center"},[o("div",{staticClass:"col-lg-8 col-md-10 col-sm-12 colonna storia"},[o("h2",{staticClass:"py-2-2"},[t._v("La nostra storia")]),o("div",{staticClass:"content",domProps:{innerHTML:t._s(t.story.content.rendered)}})])])])])},R=[],A=(o("7db0"),{computed:{story:function(){return this.$store.state.posts.find((function(t){return"lazienda"===t.slug}))}}}),D=A,L=(o("f26d"),Object(C["a"])(D,M,R,!1,null,null,null)),q=L.exports,I=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("router-view")},N=[],H={},U=Object(C["a"])(H,I,N,!1,null,null,null),Y=U.exports,B=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("router-view")},W=[],F={},G=Object(C["a"])(F,B,W,!1,null,null,null),V=G.exports,K=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"contact-us pt-200"},[o("div",{staticClass:"container80"},[o("section",{staticClass:"row form"},[o("div",{staticClass:"col-lg-5 col-md-8 col-sm-12 col-offset-lg-1 col-offset-md-2 col-offset-sm-0 py-2-2"},[o("h2",{staticClass:"py-2-2"},[t._v("Contatti")]),t._l(t.contatti,(function(e,r){return o("div",{key:e.slug,staticClass:"contatti"},[o("input",{staticClass:"btn",attrs:{type:"button",value:t.copied===r?"copiato!":e.title},on:{click:function(o){return t.copyToClipboard(e.content,r)}}}),o("span",[t._v(t._s(e.content))])])}))],2),t._m(0)]),o("section",{staticClass:"row form py-2-2"},[o("div",{staticClass:"col-lg-10 col-md-12 col-sm-12 col-offset-lg-1 col-offset-md-0 col-offset-sm-0"},[o("h2",{staticClass:"py-2-2"},[t._v("Contattaci")]),o("baseForm",{attrs:{typology:"message"}})],1)]),o("section",{staticClass:"row maps py-2-2"},[o("div",{staticClass:"col-lg-10 col-md-12 col-sm-12 col-offset-lg-1 col-offset-md-0 col-offset-sm-0"},[o("h2",{staticClass:"py-2-2"},[t._v("Dove siamo")]),o("GoogleMap")],1)])])])},J=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:" col-lg-5 col-md-12 col-sm-12 fornitori py-2-2"},[r("h2",{staticClass:"py-2-2"},[t._v("I nostri fornitori")]),r("a",{attrs:{href:"https://www.bottosso-frighetto.it",target:"”_blank”"}},[r("img",{attrs:{src:o("bd7f"),alt:"logo Botosso e Frighetto"}})]),r("a",{attrs:{href:"https://www.chimen.it/",target:"”_blank”"}},[r("img",{attrs:{src:o("d30e"),alt:"logo CHIMEN"}})])])}],Q=(o("fb6a"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"maps"}},[o("GmapMap",{staticStyle:{width:"100%",height:"500px"},attrs:{center:t.center,zoom:15}})],1)}),Z=[],X={name:"GoogleMap",data:function(){return{center:{lat:43.861794756332785,lng:12.7906404691964}}},mounted:function(){this.geolocate()},methods:{geolocate:function(){var t=this;navigator.geolocation.getCurrentPosition((function(e){t.center={lat:e.coords.latitude,lng:e.coords.longitude}}))}}},tt=X,et=Object(C["a"])(tt,Q,Z,!1,null,null,null),ot=et.exports,rt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form"},["message"===t.typology?o("div",{staticClass:"message-wrapper"},[o("form",{attrs:{action:"https://formsubmit.co/a263761003a53d0d3b44000bb483e046",method:"POST"}},[t._m(0),t._m(1),t._m(2),t._m(3),o("label",{attrs:{for:"info"}},[o("div",{staticClass:"info"},[o("div",[t._v("Accetto "),o("router-link",{attrs:{to:{name:"Informativa"},target:"_blank"},nativeOn:{click:function(e){return t.scrollToTopAuto()}}},[t._v("l'informativa sull'utilizzo dei dati")])],1),o("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],attrs:{type:"checkbox",name:"info",required:""},domProps:{checked:Array.isArray(t.checked)?t._i(t.checked,null)>-1:t.checked},on:{change:function(e){var o=t.checked,r=e.target,s=!!r.checked;if(Array.isArray(o)){var n=null,i=t._i(o,n);r.checked?i<0&&(t.checked=o.concat([n])):i>-1&&(t.checked=o.slice(0,i).concat(o.slice(i+1)))}else t.checked=s}}})])]),o("hr"),o("button",{staticClass:"btn",style:t.checked?"cursor: pointer":"cursor: not-allowed",attrs:{type:"submit"}},[t._v("Invia")])])]):t._e(),"login"===t.typology?o("div",{staticClass:"login-wrapper"},[o("form",{staticClass:"login",on:{submit:function(e){return e.preventDefault(),t.login()}}},[o("label",{attrs:{for:"username"}},[t._v("Nome utente "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.login.username,expression:"form.login.username"}],attrs:{type:"text",name:"username",placeholder:"Username",minlength:"3",maxlength:"100",required:""},domProps:{value:t.form.login.username},on:{input:function(e){e.target.composing||t.$set(t.form.login,"username",e.target.value)}}})]),o("label",{attrs:{for:"password"}},[t._v("Password "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.login.password,expression:"form.login.password"}],attrs:{type:"password",name:"password",placeholder:"Password",maxlength:"100",required:""},domProps:{value:t.form.login.password},on:{input:function(e){e.target.composing||t.$set(t.form.login,"password",e.target.value)}}})]),o("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Entra")])]),o("form",{staticClass:"reset-password",on:{submit:function(e){return e.preventDefault(),t.reset()}}},[o("div",{staticClass:"forgot",on:{click:function(e){return t.show()}}},[t._v("Password dimenticata?")]),t.active?o("label",{staticClass:"hidden",attrs:{for:"reset-password"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.forgot.user_login,expression:"forgot.user_login"}],attrs:{name:"reset-password",type:"email",placeholder:"Inserisci qui la tua email per recuperare la password",required:""},domProps:{value:t.forgot.user_login},on:{input:function(e){e.target.composing||t.$set(t.forgot,"user_login",e.target.value)}}})]):t._e(),t.active?o("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Recupera password")]):t._e(),o("baseErrorMessage",{directives:[{name:"show",rawName:"v-show",value:t.response,expression:"response"}],attrs:{error:t.error,success:t.success,text:t.text}})],1)]):t._e(),"registration"===t.typology?o("div",{staticClass:"registration-wrapper"},[o("form",{staticClass:"registration",on:{submit:function(e){return e.preventDefault(),t.register()}}},[o("label",{attrs:{for:"name"}},[t._v("Nome utente "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.registration.username,expression:"form.registration.username"}],attrs:{type:"text",name:"name",placeholder:"Nome",minlength:"3",maxlength:"30",required:""},domProps:{value:t.form.registration.username},on:{input:function(e){e.target.composing||t.$set(t.form.registration,"username",e.target.value)}}})]),o("label",{attrs:{for:"email"}},[t._v("Email "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.registration.email,expression:"form.registration.email"}],attrs:{type:"email",name:"email",placeholder:"Email",minlength:"3",maxlength:"30",required:""},domProps:{value:t.form.registration.email},on:{input:function(e){e.target.composing||t.$set(t.form.registration,"email",e.target.value)}}})]),o("label",{attrs:{for:"password"}},[t._v("Password (min 8, max 24 caratteri) "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.registration.password,expression:"form.registration.password"}],attrs:{type:"password",name:"password",placeholder:"Password",minlength:"8",maxlength:"24",required:""},domProps:{value:t.form.registration.password},on:{input:function(e){e.target.composing||t.$set(t.form.registration,"password",e.target.value)}}})]),o("label",{attrs:{for:"confirm-password"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.registration.password2,expression:"form.registration.password2"}],attrs:{type:"password",name:"confirm-password",placeholder:"Conferma password",required:""},domProps:{value:t.form.registration.password2},on:{blur:function(e){return t.passwordCheck()},input:function(e){e.target.composing||t.$set(t.form.registration,"password2",e.target.value)}}})]),o("button",{staticClass:"btn",attrs:{type:"submit"},on:{click:function(e){return t.timer()}}},[t._v("Invia")]),o("baseErrorMessage",{directives:[{name:"show",rawName:"v-show",value:t.response,expression:"response"}],attrs:{error:t.error,success:t.success,text:t.text}})],1)]):t._e()])},st=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("label",{attrs:{for:"name"}},[t._v("Nome "),o("input",{attrs:{type:"text",name:"name",placeholder:"Nome",minlength:"3",maxlength:"100",required:""}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("label",{attrs:{for:"email"}},[t._v("Email "),o("input",{attrs:{type:"email",name:"email",placeholder:"Email",maxlength:"100",required:""}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("label",{attrs:{for:"object"}},[t._v("Oggetto "),o("input",{attrs:{type:"text",name:"object",placeholder:"Oggetto delle richiesta",minlength:"3",maxlength:"100",required:""}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("label",{attrs:{for:"message"}},[t._v("Il tuo messaggio: "),o("textarea",{attrs:{name:"message",cols:"20",rows:"8",minlength:"3",maxlength:"10000",placeholder:"Messaggio...",required:""}})])}],nt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"error-message"}},[t.error?o("div",{staticClass:"error"},[t._v(" "+t._s(t.text)+" ")]):t._e(),t.success?o("div",{staticClass:"success"},[t._v(" "+t._s(t.text)+" ")]):t._e()])},it=[],at={props:{text:String,error:Boolean,success:Boolean}},ct=at,lt=(o("b450"),Object(C["a"])(ct,nt,it,!1,null,"2f0d6798",null)),ut=lt.exports,dt={components:{baseErrorMessage:ut},props:{typology:{required:!0,type:String}},data:function(){return{form:{login:{username:"",password:""},registration:{username:"",email:"",password:"",password2:""}},forgot:{user_login:""},message:{error:"",success:""},active:!1,response:!1,checked:!1}},computed:{error:function(){return""!=this.message.error},success:function(){return""==this.message.error},text:function(){return""!=this.message.error?this.message.error:this.message.success}},methods:{show:function(){return this.active=!this.active},timer:function(){var t=this;this.response=!0,setTimeout((function(){t.response=!1}),1e4)},scrollToTopAuto:function(){window.scrollTo({top:0,behavior:"auto"})},passwordCheck:function(){this.registration.password!=this.registration.password2&&(this.message.error="Le password inserite non coincidono")},login:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var o,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("login",t.form.login);case 3:o=t.$route.query.redirect,r=void 0!==o&&o,s=r?decodeURI(r):"/protected",t.$router.push({path:s}),t.timer(),e.next=15;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log("Error:"),console.log(e.t0),t.message.error=e.t0.response.data.message,t.timer();case 15:case"end":return e.stop()}}),e,null,[[0,9]])})))()},reset:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("reset",t.forgot);case 3:t.message.success="Una email con ##### è stata inviata alla tua casella di posta",t.timer(),e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](0),t.message.error=e.t0.response.data.message,t.timer();case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()},register:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("register",t.form.registration);case 3:t.message.success="Registrazione avvenuta con successo",t.message.error="",t.timer(),e.next=14;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log("Error ",e.t0),t.message.error=e.t0.response.data.message,t.message.success="",t.timer();case 14:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}},mt=dt,pt=(o("489c"),Object(C["a"])(mt,rt,st,!1,null,"233775c4",null)),ft=pt.exports,vt={components:{GoogleMap:ot,baseForm:ft},data:function(){return{copied:null,contatti:this.$store.state.contatti.slice(0,4)}},computed:{pages:function(){return this.$store.state.pages}},methods:{copyToClipboard:function(t,e){var o=this,r=document.createElement("textarea");r.value=t,r.setAttribute("readonly",""),r.style.position="absolute",r.style.left="-9999px",document.body.appendChild(r);var s=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);r.select(),document.execCommand("copy"),document.body.removeChild(r),s&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(s)),this.copied=e,setTimeout((function(){o.copied=null}),5e3)}},mounted:function(){}},ht=vt,gt=(o("cc69"),Object(C["a"])(ht,K,J,!1,null,"04e7e470",null)),wt=gt.exports,bt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("baseItemsMenu",{attrs:{name:"prodotti",child:"ProductsDescription"}})},_t=[],kt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"items-menu pt-200"},[o("section",{staticClass:"items"},[o("div",{staticClass:"container"},[o("div",{staticClass:"card-container row"},t._l(t.items,(function(e){return o("div",{key:e.slug,staticClass:"card col-lg-4 col-md-6 col-sm-12"},[o("div",{staticClass:"link-to-description"},[o("h4",{staticClass:"title my-2-1",domProps:{innerHTML:t._s(e.title.rendered)}}),o("div",{staticClass:"img shadow",style:"background-image: url("+e.acf.image.url+")"},[o("router-link",{staticClass:"innerlink",attrs:{to:{name:t.child,params:{slug:e.slug}}},nativeOn:{click:function(e){t.storePosition(),t.scrollToTop()}}})],1)])])})),0)])])])},Ct=[],yt=(o("b0c0"),{props:{name:{type:String,required:!0},child:{type:String,required:!0}},data:function(){return{window:{scrollY:null}}},computed:{items:function(){return this.$store.state[this.name]}},methods:{scrollToTop:function(){window.scrollTo({top:0,behavior:"auto"})},storePosition:function(){this.window.scrollY=Math.floor(window.scrollY),this.$store.commit("SET_SCROLL",this.window.scrollY)}}}),Tt=yt,Et=(o("14bb"),Object(C["a"])(Tt,kt,Ct,!1,null,"73545cd2",null)),xt=Et.exports,St={components:{baseItemsMenu:xt}},Ot=St,Pt=Object(C["a"])(Ot,bt,_t,!1,null,null,null),$t=Pt.exports,jt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("baseItemsDescription",{attrs:{parent:"prodotti",slug:t.slug,position:t.position}})},zt=[],Mt=(o("a9e3"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"descrizione pt-200"},[o("div",{staticClass:"box-container container"},[o("div",{staticClass:"box-row row"},[o("h2",{staticClass:"item-title title",domProps:{innerHTML:t._s(t.item.title.rendered)}}),o("div",{staticClass:"col-lg-8 col-offset-lg-2 col-md-12 col-offset-md-0 col-sm-12 col-offset-sm-0"},[o("div",{staticClass:"img shadow",style:"background-image: url("+t.item.acf.image.url+")",attrs:{alt:t.item.acf.image.alt}}),o("div",{directives:[{name:"show",rawName:"v-show",value:"news"===t.parent,expression:"(parent === 'news')"}],staticClass:"date"},[o("em",[t._v("Pubblicato il : ")]),t._v(t._s(t.lastUpdate(t.item.date)))])]),o("div",{staticClass:"col-lg-8 col-offset-lg-2 col-md-10 col-offset-md-1 col-sm-10 col-offset-sm-1"},[o("span",{staticClass:"content",domProps:{innerHTML:t._s(t.item.content.rendered)}})])]),t.item.acf.acqua||t.item.acf.solvente||t.item.acf.olii?o("div",{staticClass:"box-row row"},[o("h3",{staticClass:"col-lg-12 download-title title"},[t._v("Scarica la documentazione")]),t.item.acf.acqua?o("div",{staticClass:"col-lg-6 col-sm-12"},[o("div",{staticClass:"download"},[o("a",{staticClass:"pdf",attrs:{href:t.item.acf.acqua.url}},[t._v(t._s(t.item.title.rendered)+" "),o("span",{staticClass:"acqua"},[t._v("all'acqua")])])])]):t._e(),t.item.acf.solvente?o("div",{staticClass:"col-lg-6 col-sm-12"},[o("div",{staticClass:"download"},[o("a",{staticClass:"pdf",attrs:{href:t.item.acf.solvente.url}},[t._v(t._s(t.item.title.rendered)+" "),o("span",{staticClass:"solvente"},[t._v("al solvente")])])])]):t._e(),t.item.acf.olii?o("div",{staticClass:"col-lg-12"},[o("div",{staticClass:"download"},[o("a",{staticClass:"pdf",attrs:{href:t.item.acf.olii.url}},[t._v(t._s(t.item.title.rendered)+" "),o("span",{staticClass:"olii"})])])]):t._e()]):t._e(),o("div",{staticClass:"navigation"},[o("a",{staticClass:"navigation-link",on:{click:function(e){t.$router.back(),t.scrollToLastPosition()}}},[o("i",{staticClass:"fas fa-arrow-circle-left back"})])])])])}),Rt=[],At=(o("99af"),{props:{slug:{type:String,required:!0},parent:{type:String,required:!0}},data:function(){return{date:""}},computed:{items:function(){return this.$store.state[this.parent]},item:function(){var t=this;return this.items.find((function(e){return e.slug===t.slug}))}},methods:{scrollToLastPosition:function(){window.scrollTo({top:this.$store.state.scroll,behavior:"auto"})},lastUpdate:function(t){var e=new Date(t),o=e.getMonth(),r=["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],s=e.getFullYear(),n=r[o],i=e.getDate(),a="".concat(i," ").concat(n," ").concat(s);return a}},mounted:function(){}}),Dt=At,Lt=(o("7a8f"),Object(C["a"])(Dt,Mt,Rt,!1,null,"231d2c90",null)),qt=Lt.exports,It={components:{baseItemsDescription:qt},props:{slug:{type:String,required:!0},position:{type:Number}}},Nt=It,Ht=Object(C["a"])(Nt,jt,zt,!1,null,null,null),Ut=Ht.exports,Yt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("baseItemsMenu",{attrs:{name:"servizi",child:"ServicesDescription"}})},Bt=[],Wt={components:{baseItemsMenu:xt}},Ft=Wt,Gt=Object(C["a"])(Ft,Yt,Bt,!1,null,null,null),Vt=Gt.exports,Kt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("baseItemsDescription",{attrs:{parent:"servizi",slug:t.slug,position:t.position}})},Jt=[],Qt={components:{baseItemsDescription:qt},props:{slug:{type:String,required:!0},position:{type:Number}}},Zt=Qt,Xt=Object(C["a"])(Zt,Kt,Jt,!1,null,null,null),te=Xt.exports;r["a"].use(l["a"]);var ee=[{path:"/",name:"Home",component:z},{path:"/chi-siamo",name:"About",component:q},{path:"/prodotti",props:!0,component:Y,children:[{path:"/",props:!0,name:"ProductsMenu",component:$t},{path:":slug",props:!0,name:"ProductsDescription",component:Ut}]},{path:"/servizi",props:!0,component:V,children:[{path:"/",props:!0,name:"ServicesMenu",component:Vt},{path:":slug",props:!0,name:"ServicesDescription",component:te}]},{path:"/contatti",name:"Contatti",component:wt},{path:"/privacy-policy",name:"Privacy",props:!0,component:function(){return o.e("privacy").then(o.bind(null,"6f9f"))}},{path:"/informativa-area-contatti",name:"Informativa",props:!0,component:function(){return o.e("informativa").then(o.bind(null,"02c6"))}},{path:"/cookie-policy",name:"CookiePolicy",props:!0,component:function(){return o.e("cookie").then(o.bind(null,"8368"))}},{path:"/*",name:"Err404",component:function(){return o.e("Err404").then(o.bind(null,"6163"))}}],oe=new l["a"]({mode:"history",routes:ee});oe.beforeEach(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,o,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.matched.some((function(t){return t.meta.requiresAuth}))){t.next=17;break}if(f.state.user){t.next=5;break}r({path:"/login",query:{redirect:e.fullPath}}),t.next=15;break;case 5:return t.prev=5,t.next=8,f.dispatch("validate");case 8:r(),t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](5),f.commit("DELETE_USER"),r({path:"/login",query:{redirect:e.fullPath}});case 15:t.next=18;break;case 17:r();case 18:case"end":return t.stop()}}),t,null,[[5,11]])})));return function(e,o,r){return t.apply(this,arguments)}}());var re=oe,se={data:function(){return{router:re,showBars:!1,showMenu:!1,closeMenu:!1,window:{width:0,height:0,scrollY:0},navbar:{width:0,height:"150px"},logo:{scale:"100%",dim:"130px"},jingle:{show:!0},link:{size:"1.5rem"}}},computed:{logoStyle:function(){return{width:this.logo.dim,height:this.logo.dim}}},methods:{scrollToTop:function(){window.scrollTo(0,0)},showHide:function(){this.showMenu?this.showMenu=!1:this.showMenu=!0},mediaWidth:function(){this.window.width=window.innerWidth,this.window.height=window.innerHeight,window.innerWidth>1200&&(this.showBars=!1,this.showMenu=!1),window.innerWidth<=1200&&(this.showBars=!0)},navbarHeight:function(){this.window.scrollY=window.scrollY,this.navbar.height="90px",this.jingle.show=!1,this.link.size="1.2rem",0===this.window.scrollY&&(this.navbar.height="150px",this.jingle.show=!0,this.link.size="1.5rem")},logoScale:function(){this.logo.dim="78px",0===this.window.scrollY&&(this.logo.dim="90px",this.window.width>1200&&(this.logo.dim="130px"))}},created:function(){window.addEventListener("resize",this.mediaWidth),window.addEventListener("scroll",this.navbarHeight),window.addEventListener("resize",this.logoScale),window.addEventListener("scroll",this.logoScale)},mounted:function(){this.mediaWidth(),this.navbarHeight(),this.logoScale()},distroyed:function(){window.removeEventListener("resize",this.mediaWidth),window.removeEventListener("scroll",this.navbarHeight),window.removeEventListener("resize",this.logoScale),window.removeEventListener("scroll",this.logoScale)}},ne=se,ie=(o("3235"),Object(C["a"])(ne,a,c,!1,null,"3f7d4d8a",null)),ae=ie.exports,ce=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"footer"}},[o("section",{staticClass:"footer-top"},[o("div",{staticClass:"container footer-container"},[o("div",{staticClass:"logo"},[o("router-link",{staticClass:"home-page-link",attrs:{to:"/"}},[o("div",{staticClass:"clear-logo",attrs:{alt:"logo M4"}})])],1),t._m(0),t._m(1),o("ul",{staticClass:"menu"},[o("li",[o("router-link",{staticClass:"footer-menu-links",attrs:{to:"/"},nativeOn:{click:function(e){return t.scrollToTopAuto()}}},[t._v("home")])],1),o("li",[o("router-link",{staticClass:"footer-menu-links",attrs:{to:"/chi-siamo"},nativeOn:{click:function(e){return t.scrollToTopAuto()}}},[t._v("chi siamo")])],1),o("li",[o("router-link",{staticClass:"footer-menu-links",attrs:{to:"/prodotti"},nativeOn:{click:function(e){return t.scrollToTopAuto()}}},[t._v("prodotti")])],1),o("li",[o("router-link",{staticClass:"footer-menu-links",attrs:{to:"/servizi"},nativeOn:{click:function(e){return t.scrollToTopAuto()}}},[t._v("servizi")])],1),o("li",[o("router-link",{staticClass:"footer-menu-links",attrs:{to:"/contatti"},nativeOn:{click:function(e){return t.scrollToTopAuto()}}},[t._v("contatti")])],1)])]),o("div",{staticClass:"sticky-arrow"},[o("div",{staticClass:"scroll-to-top",on:{click:function(e){return t.scrollToTop()}}},[o("i",{staticClass:"fas fa-chevron-up"})])])]),o("section",{staticClass:"footer-bottom"},[o("div",{staticClass:"policies row"},[o("div",{staticClass:"col-lg-4 col-md-4 col-sm-12 policy-link"},[o("router-link",{attrs:{to:{name:"Privacy"},target:"_blank,fullscreen=no"},nativeOn:{click:function(e){return t.scrollToTopAuto()}}},[t._v("Privacy Policy")])],1),o("div",{staticClass:"col-lg-4 col-md-4 col-sm-12 policy-link"},[o("router-link",{attrs:{to:{name:"CookiePolicy"},target:"_blank,fullscreen=no"},nativeOn:{click:function(e){return t.scrollToTopAuto()}}},[t._v("Cookie policy")])],1),o("div",{staticClass:"col-lg-4 col-md-4 col-sm-12 policy-link"},[o("router-link",{attrs:{to:{name:"Informativa"},target:"_blank,fullscreen=no"},nativeOn:{click:function(e){return t.scrollToTopAuto()}}},[t._v("Informativa area contatti")])],1)])])])},le=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"contatti"},[o("li",[t._v("EMME QUATTRO SRL")]),o("li",[t._v("Rappresentanze vernici legno")]),o("li",[t._v("Via Pantanelli, 115/117")]),o("li",[t._v("61025 Montelabbate (PU)")]),o("li",[o("hr")]),o("li",[t._v("Tel. 0721 498 949")]),o("li",[t._v("Fax. 0721 498 395")]),o("li",[t._v("P.IVA 01198290411")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"social"},[o("li",[o("a",{staticClass:"facebook",attrs:{href:"https://www.facebook.com/EmmeQuattroSrl/",target:"_blank"}},[o("i",{staticClass:"fab fa-facebook-square fa-3x"})])])])}],ue={name:"baseFooter",props:{},data:function(){return{logoM4:{path:"M4_2021_clear_logo_only.svg"}}},methods:{scrollToTop:function(){window.scrollTo({top:0,behavior:"smooth"})},scrollToTopAuto:function(){window.scrollTo({top:0,behavior:"auto"})}}},de=ue,me=(o("c86f"),Object(C["a"])(de,ce,le,!1,null,"d77c471e",null)),pe=me.exports,fe={components:{baseNavbar:ae,baseFooter:pe,baseOverlay:S},data:function(){return{window:{scrollY:0,scroll:!1}}},methods:{retrieveData:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,e.$store.dispatch("retrieveData",t);case 3:o.next=8;break;case 5:o.prev=5,o.t0=o["catch"](0),console.log("Error",o.t0);case 8:case"end":return o.stop()}}),o,null,[[0,5]])})))()}},mounted:function(){this.retrieveData("carosello"),this.retrieveData("news"),this.retrieveData("prodotti"),this.retrieveData("servizi"),this.retrieveData("contatti"),this.retrieveData("posts"),this.retrieveData("pages")}},ve=fe,he=(o("5c0b"),Object(C["a"])(ve,s,n,!1,null,null,null)),ge=he.exports,we=o("2106"),be=o.n(we),_e=o("755e"),ke=o("f309");r["a"].use(ke["a"]);var Ce=new ke["a"]({});r["a"].use(_e,{load:{key:"",libraries:"places"}}),r["a"].use(be.a,p.a),r["a"].axios.defaults.baseURL="https://emmequattro.altervista.org/wordpress/wp-json",r["a"].config.productionTip=!1,new r["a"]({router:re,store:f,vuetify:Ce,render:function(t){return t(ge)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";o("9c0c")},"5f83":function(t,e,o){},"7a8f":function(t,e,o){"use strict";o("ecbe")},"9c0c":function(t,e,o){},a01b:function(t,e,o){},b450:function(t,e,o){"use strict";o("fa44")},bd7f:function(t,e,o){t.exports=o.p+"img/logo-BF.d073d544.jpg"},bf4e:function(t,e,o){},c86f:function(t,e,o){"use strict";o("bf4e")},cc69:function(t,e,o){"use strict";o("44cd")},d30e:function(t,e,o){t.exports=o.p+"img/logo-chimen.3df9111d.png"},e196:function(t,e,o){},ecbe:function(t,e,o){},f26d:function(t,e,o){"use strict";o("5f83")},fa44:function(t,e,o){}});
//# sourceMappingURL=app.948da2f1.js.map