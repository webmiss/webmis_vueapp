(function(){"use strict";var t={7830:function(t,e){const n="";let s,o;"dev"==n?(s="http://localhost:9000/",o="ws://localhost:9001/"):(s="https://api.cszb.vip/",o="wss://api.cszb.vip/wss");const i=new Date;e["Z"]={title:"WebMIS VueAPP",version:"1.0.0",copy:"Copyright © WebMIS.vip "+i.getFullYear(),baseUrl:s,apiUrl:s+"m/",token:"",request:{headers:{"Content-Type":"application/json;charset=utf-8"},responseType:"json",timeout:1e4},statusBar:{height:48,color:"#333",bgColor:"#FFF"},update:{start:!0,iosUrl:"itms-apps://itunes.apple.com/cn/app/tao-bao-sui-shi-sui-xiang/id387682726?mt=8"},login:{start:!0,api:"user/token",uinfo:"uinfo",time:1e4},amap:{start:!0,jsapi_key:"d956f0c3e15489a1b5bf291e5d133c8a"},socket:{channel:"api",start:!1,server:o,time:3e3,heartbeat:1e4},msg:{content:"content",browser:!1},wx_type:0,wx_id:"gh_a6ddccd2bb08"}},7891:function(t,e,n){var s=n(4979);e["Z"]=(t=1)=>{s.Z.$router.goBack(-t)}},6492:function(t,e){e["Z"]=(t="提示",e="primary",n=3e3)=>{let s=document.createElement("div");s.setAttribute("class","wm-ui_toast"),s.innerHTML='<span class="'+e+'">'+t+"</span>",document.body.appendChild(s),setTimeout((()=>{s.style.opacity="1",s.style.top="10%"}),100),setTimeout((()=>{document.body.removeChild(s)}),n)}},4979:function(t,e,n){n.d(e,{Z:function(){return V}});var s=n(9963),o=n(6252),i=n(3577);const a=t=>((0,o.dD)("data-v-5c487671"),t=t(),(0,o.Cn)(),t),r={id:"app"},u={key:0,class:"update_body"},c={class:"update_ct verticalCenter"},l=a((()=>(0,o._)("div",{class:"logo"},[(0,o._)("div")],-1))),d={class:"load_msg"},p={class:"load_button"},h={class:"update_copy"};function m(t,e,n,a,m,f){const g=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",r,[t.update.show?((0,o.wg)(),(0,o.iD)("div",u,[(0,o._)("div",c,[l,(0,o._)("div",{class:"loading",style:(0,i.j5)({backgroundImage:"linear-gradient(to right, #6FB737, #6FB737 "+t.update.loading+", #000000 "+t.update.loading+", #000000 100%)"})},null,4),(0,o._)("div",d,(0,i.zw)(t.update.msg),1),(0,o._)("div",p,[t.update.down?((0,o.wg)(),(0,o.iD)("button",{key:0,onClick:e[0]||(e[0]=e=>t.updateDown())},(0,i.zw)(t.update.button),1)):(0,o.kq)("",!0)])]),(0,o._)("div",h,[(0,o._)("h1",null,(0,i.zw)(t.info.title),1),(0,o._)("h2",null,(0,i.zw)(t.info.copy),1)])])):(0,o.kq)("",!0),(0,o.Wm)(g,null,{default:(0,o.w5)((({Component:e})=>[(0,o.Wm)(s.uT,{name:t.transitionName},{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.j4)(o.Ob,{include:t.state.keepAlive},[((0,o.wg)(),(0,o.j4)((0,o.LL)(e),{class:"view"}))],1032,["include"]))])),_:2},1032,["name"])])),_:1})])}var f=n(3907),g=n(7830),v=n(6492),b={setItem(t,e){return window.localStorage.setItem(t,e)},getItem(t){return window.localStorage.getItem(t)},removeItem(t){return window.localStorage.removeItem(t)},clear(){return window.localStorage.clear()}},y=n(8433),k=(t,e={},n,s,o)=>{"http"==t.substring(0,4)||(t="/"==t.substring(0,1)?g.Z.baseUrl+t.substring(1):g.Z.apiUrl+t);const i={headers:o&&o.headers?o.headers:g.Z.request.headers,responseType:o&&o.responseType?o.responseType:g.Z.request.responseType,timeout:g.Z.request.timeout};o&&o.onUploadProgress&&(i.onUploadProgress=o.onUploadProgress),y.Z.post(t,e,i).then(n).catch(s)},w=n(7891),S=t=>{document.addEventListener("plusready",t,!1)},I=t=>{try{const e=plus.webview.currentWebview();plus.key.addEventListener("backbutton",(()=>{e.canBack(t)}))}catch(e){return(0,v.Z)("Android返回键")}},Z=(t,e,n=!1)=>{g.Z.msg.browser&&window.Notification&&"denied"!==Notification.permission&&Notification.requestPermission((function(n){new Notification(t,{body:e})}));const s="title"==g.Z.msg.content?t:e;if((0,v.Z)(s),!n)return;const o=b.getItem("token")||"";if(!o)return(0,v.Z)("请先登录!");k("Usermain/baiduAudio",{token:o,text:s},(t=>{const e=t.data;if(0!=e.code)return(0,v.Z)(e.msg);const n=new Audio;n.src=e.url;try{if("iOS"==plus.os.name){let t=plus.ios.importClass("AVAudioSession"),e=t.sharedInstance();e.setCategoryerror("AVAudioSessionCategoryPlayback",null),e.setActiveerror("YES",null);let n=plus.ios.importClass("AVSpeechSynthesizer"),o=plus.ios.importClass("AVSpeechUtterance"),i=plus.ios.import("AVSpeechSynthesisVoice"),a=new n,r=i.voiceWithLanguage("zh-CN"),u=o.speechUtteranceWithString(s);u.setVoice(r),a.speakUtterance(u)}else n.play()}catch(o){n.play()}}))},_={router(t,e){"msg"==e.type?this.msg(t,e):"notify"==e.type&&this.notify(t,e)},msg(t,e){const n=b.getItem("voice");Z(e.data.title,e.data.content,!!n)},notify(t,e){console.log(t,e)}};const A=null,C=null,O=null;var T={state:A,socketInterval:C,heartbeatInterval:O,start(){this.state=V.$store.state,clearInterval(this.socketInterval),this.socketInterval=setInterval((()=>{!this.state.isLogin||this.state.socket&&1==this.state.socket.readyState||this.start()}),g.Z.socket.time);const t=b.getItem("token");if(!t)return!1;g.Z.socket.start&&this.socketOpen(t)},socketOpen(t){this.state.socket=new WebSocket(g.Z.socket.server+"?channel="+g.Z.socket.channel+"&token="+t),this.state.socket.onopen=()=>{console.log("Socket开启"),clearInterval(this.heartbeatInterval),this.heartbeatInterval=setInterval((()=>{try{this.state.socket.send(JSON.stringify({type:""}))}catch(t){this._closeMsg()}}),g.Z.socket.heartbeat)},this.state.socket.onclose=()=>{console.log("Socket关闭"),this._closeMsg()},this.state.socket.onmessage=t=>{const e=JSON.parse(t.data);if(0!=e.code)return(0,v.Z)(e.msg);_.router(this.state.socket,e)}},_closeMsg(){this.state.socket&&(this.state.socket.close(),this.state.socket=null)}};const E=null,P=null;var U={state:E,tokenInterval:P,init(){this.state=V.$store.state,this.setSize(),window.onresize=()=>{this.setSize()},window.plus?this.setApp():S(this.setApp),g.Z.login.start&&(this.tokenState(1),clearInterval(this.tokenInterval),this.tokenInterval=setInterval((()=>{this.tokenState(0)}),g.Z.login.time)),g.Z.socket.start&&T.start()},setSize(){this.state.width=document.body.offsetWidth,this.state.height=document.body.offsetHeight},tokenState(t){const e=b.getItem("token");e?k(g.Z.login.api,{token:e,uinfo:t},(t=>{const e=t.data;0==e.code?(this.state.isLogin=!0,e[g.Z.login.uinfo]&&(this.state.uInfo=e[g.Z.login.uinfo])):(this.state.isLogin=!1,this.state.uInfo={},b.setItem("token",""))})):(this.state.isLogin=!1,b.removeItem("token"))},setApp(){plus.screen.lockOrientation("portrait-primary"),plus.navigator.setStatusBarStyle("dark"),plus.navigator.setStatusBarBackground("#FFFFFF"),this.state.statusHeight=plus.navigator.getStatusbarHeight(),setTimeout((()=>{plus.navigator.closeSplashscreen()}),300),document.addEventListener("uistylechange",(()=>{this.state.mode=plus.navigator.getUiStyle()}),!1);let t=0;I((e=>{e.canBack?(this.state.scan&&this.state.scan.close(),(0,w.Z)(1)):(t>0&&plus.runtime.quit(),(0,v.Z)("再按一次退出应用!"),t++,setTimeout((()=>{t=0}),2e3))}))}},j=(t,e)=>{if(t==e)return!0;const n=t.split("."),s=e.split(".");return parseInt(n[0])>parseInt(s[0])||(parseInt(n[1])>parseInt(s[1])||parseInt(n[2])>parseInt(s[2]))},B=(0,o.aZ)({name:"APP",components:{},data(){const t=(0,f.oR)(),e=t.state,n=this.$router,s="",o={show:!1,os:"",down:!1,loading:"1%",msg:"检测更新",file:"",total:0,button:"下载并安装"},i={title:g.Z.title,version:g.Z.version,copy:g.Z.copy};return{state:e,router:n,transitionName:s,update:o,info:i}},watch:{$route(t,e){"/"==t.path&&"/"==e.path||(this.transitionName=this.router.isBack?"slide-right":"slide-left",this.router.isBack=!1)}},computed:{mode(){return this.state.mode}},mounted(){setTimeout((()=>{U.init()}),400),g.Z.update.start&&this.isUpdate()},methods:{isUpdate(){S((()=>{this.update.os=plus.os.name,k("index/appUpdate",{os:this.update.os},(t=>{let e=t.data;if(0!=e.code)return!1;plus.runtime.getProperty(plus.runtime.appid,(t=>{if(j(t.version,e.version))return!1;this.update.show=!0,this.update.down=!0,this.update.msg="新版本: "+e.version+"&nbsp;&nbsp;大小: "+(e.size/1024/1024).toFixed(2)+"MB",this.update.file=g.Z.baseUrl+e.file,this.update.total=e.size}))}))}))},updateDown(){if(this.update.down=!1,this.update.msg="开始下载",this.update.loading="0%","iOS"==this.update.os)this.update.msg="请在桌面查看安装进度",window.open(g.Z.update.iosUrl),setTimeout((()=>{plus.runtime.quit()}),5e3);else{let t=plus.downloader.createDownload(this.update.file,{filename:"_doc/download/",timeout:30},((t,e)=>{200==e?plus.runtime.install(t.filename,{force:!0},(()=>{plus.runtime.restart()}),(()=>{(0,v.Z)("安装失败!")})):(this.update.down=!0,this.update.msg="下载失败")}));t.start(),t.addEventListener("statechanged",((t,e)=>{let n=parseInt(t.downloadedSize/this.update.total*100);this.update.loading=n+"%",this.update.msg="正在下载："+this.update.loading,n>=100&&(this.update.msg="下载完成，安装并重启")}))}}}}),L=n(3744);const N=(0,L.Z)(B,[["render",m],["__scopeId","data-v-5c487671"]]);var F=N,z=n(2201);const x=[{path:"/",name:"home",component:()=>Promise.all([n.e(658),n.e(467)]).then(n.bind(n,8238))},{path:"/refresh",name:"Refresh",component:()=>n.e(720).then(n.bind(n,4720))},{path:"/demo",name:"Demo",meta:{keepAlive:!1},component:()=>Promise.all([n.e(658),n.e(90)]).then(n.bind(n,4090))}],q=(0,z.p7)({history:(0,z.r5)(""),routes:x});q.goBack=function(t){this.isBack=!0,this.go(t)};var D=q,M=(0,f.MT)({state:{mode:"light",width:0,height:0,statusHeight:0,scan:null,isLogin:"",uInfo:{},geolocation:{},socket:null,keepAlive:["Home"]},mutations:{},actions:{},modules:{}});document.body.ontouchstart=()=>{try{"iOS"!=plus.os.name&&document.createElement("audio")}catch(t){document.createElement("audio")}};const W=(0,s.ri)(F).use(M).use(D).mount("#app");var V=W}},e={};function n(s){var o=e[s];if(void 0!==o)return o.exports;var i=e[s]={exports:{}};return t[s](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,s,o,i){if(!s){var a=1/0;for(l=0;l<t.length;l++){s=t[l][0],o=t[l][1],i=t[l][2];for(var r=!0,u=0;u<s.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](s[u])}))?s.splice(u--,1):(r=!1,i<a&&(a=i));if(r){t.splice(l--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[s,o,i]}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,s){return n.f[s](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{90:"19cdfd19",467:"2c0cdbd3",658:"3a4f90a2",720:"690802a2"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{90:"9141f26e",467:"f687dc40"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="webmis-vue:";n.l=function(s,o,i,a){if(t[s])t[s].push(o);else{var r,u;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==s||d.getAttribute("data-webpack")==e+i){r=d;break}}r||(u=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",e+i),r.src=s),t[s]=[o];var p=function(e,n){r.onerror=r.onload=null,clearTimeout(h);var o=t[s];if(delete t[s],r.parentNode&&r.parentNode.removeChild(r),o&&o.forEach((function(t){return t(n)})),e)return e(n)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=p.bind(null,r.onerror),r.onload=p.bind(null,r.onload),u&&document.head.appendChild(r)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,s,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)s();else{var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=r,i.parentNode.removeChild(i),o(u)}};return i.onerror=i.onload=a,i.href=e,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},e=function(t,e){for(var n=document.getElementsByTagName("link"),s=0;s<n.length;s++){var o=n[s],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===t||i===e))return o}var a=document.getElementsByTagName("style");for(s=0;s<a.length;s++){o=a[s],i=o.getAttribute("data-href");if(i===t||i===e)return o}},s=function(s){return new Promise((function(o,i){var a=n.miniCssF(s),r=n.p+a;if(e(a,r))return o();t(s,r,null,o,i)}))},o={143:0};n.f.miniCss=function(t,e){var n={90:1,467:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=s(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,s){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)s.push(o[2]);else{var i=new Promise((function(n,s){o=t[e]=[n,s]}));s.push(o[2]=i);var a=n.p+n.u(e),r=new Error,u=function(s){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var i=s&&("load"===s.type?"missing":s.type),a=s&&s.target&&s.target.src;r.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",r.name="ChunkLoadError",r.type=i,r.request=a,o[1](r)}};n.l(a,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,s){var o,i,a=s[0],r=s[1],u=s[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(o in r)n.o(r,o)&&(n.m[o]=r[o]);if(u)var l=u(n)}for(e&&e(s);c<a.length;c++)i=a[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},s=self["webpackChunkwebmis_vue"]=self["webpackChunkwebmis_vue"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(4979)}));s=n.O(s)})();