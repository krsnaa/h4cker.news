(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(n,t,e){},44:function(n,t,e){},45:function(n,t,e){n.exports={App:"app_App__x3BDE"}},48:function(n,t,e){n.exports=e(85)},85:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),a=e(29),i=e.n(a);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=e(11),s=e(5),u=e(6),l=function(n){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:n,payload:t}}},d=function(n,t){var e=function(n){return{request:l("".concat(n,"_REQUEST")),success:l("".concat(n,"_SUCCESS")),failure:l("".concat(n,"_FAILURE"))}}(n);return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(r){return t({requestObj:e,payload:n,dispatch:r})}}},h="@hackerNewsReader/app",f={SET_THEME:"".concat(h,"/SET_THEME"),SET_LAYOUT:"".concat(h,"/SET_LAYOUT")},p=(l(f.SET_THEME),l(f.SET_LAYOUT),"list"),m="dark",g=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{theme:m,layout:p},t=arguments.length>1?arguments[1]:void 0,e=t.type,r=t.payload;switch(e){case f.SET_THEME:case f.SET_LAYOUT:return Object(u.a)({},n,r);default:return n}},b=e(17),y=e(9),v=e(10),S=e(32),E=e.n(S),w=Object({NODE_ENV:"production",PUBLIC_URL:"/h4cker.news"}).URL||"http://localhost:3000/",O=2e4,x={"Content-Type":"application/json",Accept:"application/json"},T=new(function(){function n(t){var e=t.baseURL,r=void 0===e?w:e,o=t.timeout,a=void 0===o?O:o,i=t.headers,c=void 0===i?x:i,s=t.auth;Object(y.a)(this,n);var u=E.a.create({baseURL:r,timeout:a,headers:c,auth:s});u.interceptors.response.use(this.handleSuccess,this.handleError),this.client=u}return Object(v.a)(n,[{key:"handleSuccess",value:function(n){return n}},{key:"handleError",value:function(n){return Promise.reject(n)}},{key:"get",value:function(n){return this.client.get(n).then(function(n){return n.data})}},{key:"post",value:function(n,t){return this.client.post(n,t).then(function(n){return n.data})}},{key:"put",value:function(n,t){return this.client.put(n,t).then(function(n){return n.data})}},{key:"patch",value:function(n,t){return this.client.patch(n,t).then(function(n){return n.data})}},{key:"delete",value:function(n){return this.client.delete(n).then(function(n){return n.data})}}]),n}())({baseURL:"https://hacker-news.firebaseio.com/v0"}),j=".json?print=pretty",_={};_.getTopStoryIds=function(){return T.get("/topstories".concat(j))},_.getNewStoryIds=function(){return T.get("/newstories".concat(j))},_.getBestStoryIds=function(){return T.get("/beststories".concat(j))},_.getStory=function(n){return T.get("/item/".concat(n).concat(j))},_.getStoriesByPage=function(n,t){var e=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{begin:t*n,end:(t+1)*n}}(30,t),r=function(n){var t=n.begin,e=n.end;return n.items.slice(t,e)}({begin:e.begin,end:e.end,items:n}).map(function(n){return _.getStory(n)});return Promise.all(r)};var k=_,I={FETCH_STORY_IDS:"".concat("@hackerNewsReader/story","/FETCH_STORY_IDS"),FETCH_STORIES:"".concat("@hackerNewsReader/story","/FETCH_STORIES")},R={fetchStoryIds:d(I.FETCH_STORY_IDS,function(n){var t=n.requestObj,e=n.payload,r=n.dispatch;return r(t.request(e)),k.getNewStoryIds().then(function(n){return r(t.success({storyIds:n})),r(R.fetchStories({storyIds:n,page:0})),n}).catch(function(n){return r(t.failure(n))})}),fetchStories:d(I.FETCH_STORIES,function(n){var t=n.requestObj,e=n.payload,r=n.dispatch,o=e.storyIds,a=e.page;return r(t.request(e)),k.getStoriesByPage(o,a).then(function(n){return r(t.success({stories:n}))}).catch(function(n){return r(t.failure(n))})})},C=R,F=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{storyIds:[],stories:[],page:0,isFetching:!1,error:""},t=arguments.length>1?arguments[1]:void 0,e=t.type,r=t.payload;switch(e){case"".concat(I.FETCH_STORY_IDS,"_REQUEST"):case"".concat(I.FETCH_STORIES,"_REQUEST"):return Object(u.a)({},n,{isFetching:!0});case"".concat(I.FETCH_STORY_IDS,"_SUCCESS"):return Object(u.a)({},n,r);case"".concat(I.FETCH_STORIES,"_SUCCESS"):return Object(u.a)({},n,{stories:Object(b.a)(n.stories).concat(Object(b.a)(r.stories)),page:n.page+1,isFetching:!1});default:return n}},U=Object(s.c)({app:g,story:F}),H=e(33),L=(e(34),[]);L.push(H.a);var A=s.d;var N=A.apply(void 0,[s.a.apply(void 0,L)].concat([])),D=function(n){return Object(s.e)(U,n,N)},P=e(35),M=Object(P.a)([function(n){return n.story.storyIds},function(n){return n.story.stories}],function(n,t){return n.length>t.length}),Y=e(46),B=e(36),z=e(47),q=e(2),Q=e(40),J=e.n(Q),W=e(3);function V(){var n=Object(W.a)(["\n  color: ",";\n  font-size: 20px;\n  font-weight: 300;\n  margin-top: 24px;\n  margin-bottom: 26px;\n"]);return V=function(){return n},n}function $(){var n=Object(W.a)(["\n  width: 85%;\n  margin-left: auto;\n  margin-right: auto;\n  height: 100%;\n  overflow: hidden;\n  padding-bottom: 200px;\n\n  "," {\n    width: 96%;\n  }\n"]);return $=function(){return n},n}function G(){var n=Object(W.a)(["\n  min-width: 100vw;\n  min-height: 100vh;  \n  background-color: ",";\n"]);return G=function(){return n},n}var K=q.b.div(G(),function(n){return n.theme.background}),X=q.b.div($(),"@media only screen and  (max-width: 768px)"),Z=q.b.h1(V(),function(n){return n.theme.textSecondary}),nn={background:"#272727",backgroundSecondary:"#393C3E",text:"#bfbebe",textSecondary:"#848886",border:"#272727"},tn=e(41),en=e.n(tn);function rn(){var n=Object(W.a)(["\n  color: ",";\n\n  &:visited {\n    color: ",";\n  }\n"]);return rn=function(){return n},n}function on(){var n=Object(W.a)(["\n  font-size: 14px;\n  color: ",";\n"]);return on=function(){return n},n}function an(){var n=Object(W.a)(["\n  color: ",";\n  display: flex;\n  width: 100%;\n  height: 100%;\n  flex-direction: row;\n  align-items: center;\n  text-decoration: none;\n"]);return an=function(){return n},n}function cn(){var n=Object(W.a)(["\n  color: ",";\n  font-size: 12px;\n"]);return cn=function(){return n},n}function sn(){var n=Object(W.a)(["\n  color: ",";\n  margin-top: 0;\n  margin-bottom: 6px;\n  font-weight: 400;\n  font-size: 16px;\n  letter-spacing: 0.4px;\n"]);return sn=function(){return n},n}function un(){var n=Object(W.a)(["\n  border-bottom: 1px solid ",";\n  padding: 14px 24px;\n\n  &:last-child {\n    border-bottom: none;\n  }\n"]);return un=function(){return n},n}var ln=q.b.li(un(),function(n){return n.theme.border}),dn=q.b.h3(sn(),function(n){return n.theme.text}),hn=q.b.span(cn(),function(n){return n.theme.textSecondary}),fn=q.b.a(an(),function(n){return n.theme.text}),pn=q.b.div(on(),function(n){return n.theme.textSecondary}),mn=q.b.a(rn(),function(n){return n.theme.textSecondary},function(n){return n.theme.textSecondary}),gn=e(42),bn=e.n(gn),yn=function(n){var t="";return n&&(n.includes("//")||(n="http://".concat(n)),t=bn.a.parse(n).hostname),t.includes("www.")&&(t=t.split("www.")[1]),t},vn="https://news.ycombinator.com",Sn="".concat(vn,"/item?id="),En="".concat(vn,"/user?id="),wn=function(n){var t=n.url,e=n.id,r="".concat(Sn).concat(e);return t||r},On=e(43),xn=e.n(On),Tn=en()(),jn="noopener noreferrer nofollow",_n=function(n){var t=n.by,e=n.kids,r=void 0===e?[]:e,a=n.score,i=n.url,c=n.title,s=n.id,u=n.type,l=n.time,d=yn(i)||"news.ycombinator.com",h=wn({url:i,id:s}),f="".concat(Sn).concat(s),p="".concat(En).concat(t);return o.a.createElement(ln,{className:xn.a.ListItem},o.a.createElement(fn,{href:h,rel:jn,target:"_blank"},o.a.createElement(dn,null,c," "," ",o.a.createElement(hn,null,"(",u," ",s," - ",d,")"))),o.a.createElement(pn,null,a," points by "," ",o.a.createElement(mn,{href:p,rel:jn,target:"_blank"},t," "," |  "),Tn.format(new Date(1e3*l).toISOString())," "," | ",o.a.createElement(mn,{href:f,rel:jn,target:"_blank"},r.length," Comments")))};_n.defaultProps={};var kn=_n,In=e(44),Rn=e.n(In);function Cn(){var n=Object(W.a)(["\n  background-color: ",";\n  border-radius: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n"]);return Cn=function(){return n},n}var Fn=q.b.ul(Cn(),function(n){return n.theme.backgroundSecondary}),Un=function(n){var t=n.stories;return r.createElement("div",{className:Rn.a.List},r.createElement(Fn,null,t.map(function(n){return r.createElement(kn,Object.assign({},n,{key:n.id}))})))};Un.defaultProps={};var Hn=Un;function Ln(){var n=Object(W.a)(["\n  text-align: center;\n\n  span {\n    color: ",";\n    display: inline-block;\n    margin-left: 4px;\n    margin-right: 4px;\n    font-size: 80px;\n    line-height: 0.1;\n\n    /**\n    * Use the blink animation, which is defined above\n    */\n    animation-name: ",";\n    /**\n    * The total time of animation\n    */\n    animation-duration: 1s;\n    /**\n    * It will repeat itself forever\n    */\n    animation-iteration-count: infinite;\n    /**\n    * This makes sure that the starting style (opacity: .2)\n    * of the animation is applied before the animation starts.\n    * Otherwise we would see a short flash or would have\n    * to set the default styling of the dots to the same\n    * as the animation. Same applies for the ending styles.\n    */\n    animation-fill-mode: both;\n  }\n\n  span:nth-child(2) {\n    animation-delay: 0.2s;\n  }\n  span:nth-child(3) {\n    animation-delay: 0.4s;\n  }\n"]);return Ln=function(){return n},n}function An(){var n=Object(W.a)(["\n  /**\n  * At the start of the animation the dot\n  * has an opacity of .2\n  */\n  0% {\n    opacity: .2;\n  }\n  /**\n  * At 20% the dot is fully visible and\n  * then fades out slowly\n  */\n  20% {\n    opacity: 1;\n  }\n  /**\n  * Until it reaches an opacity of .2 and\n  * the animation can start again\n  */\n  100% {\n    opacity: .2;\n  }\n"]);return An=function(){return n},n}var Nn=Object(q.d)(An()),Dn=q.b.div(Ln(),function(n){return n.theme.textSecondary},Nn),Pn=function(){return o.a.createElement(Dn,null,o.a.createElement("span",null,"."),o.a.createElement("span",null,"."),o.a.createElement("span",null,"."))},Mn=e(45),Yn=e.n(Mn),Bn=function(n){function t(){var n,e;Object(y.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=Object(Y.a)(this,(n=Object(B.a)(t)).call.apply(n,[this].concat(o)))).state={},e.componentDidMount=function(){e.props.fetchStoriesFirstPage()},e.grabStories=function(){var n=e.props,t=n.storyIds,r=n.page,o=n.fetchStories;n.isFetching||o({storyIds:t,page:r})},e}return Object(z.a)(t,n),Object(v.a)(t,[{key:"render",value:function(){var n=this.props,t=n.stories,e=n.hasMoreStories;return r.createElement(q.a,{theme:nn},r.createElement(K,{className:Yn.a.App},r.createElement(X,null,r.createElement(Z,null,"Hacker News Reader"),r.createElement(J.a,{dataLength:t.length,next:this.grabStories,hasMore:e,loader:r.createElement(Pn,null),style:{height:"100%",overflow:"visible"}},r.createElement(Hn,{stories:t})))))}}]),t}(r.Component);Bn.defaultProps={stories:[]};var zn=Bn,qn=Object(c.b)(function(n){return{layout:n.app.layout,theme:n.app.theme,stories:n.story.stories,page:n.story.page,storyIds:n.story.storyIds,isFetching:n.story.isFetching,hasMoreStories:M(n)}},function(n){return{fetchStoriesFirstPage:function(){return n(C.fetchStoryIds())},fetchStories:function(t){var e=t.storyIds,r=t.page;return n(C.fetchStories({storyIds:e,page:r}))}}})(zn);function Qn(){var n=Object(W.a)(['\n    * {\n      box-sizing: border-box;\n    }\n\n    html, body {\n      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;      \n      overflow-x: hidden;\n      margin: 0;\n      padding: 0;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n    }\n\n    ul {\n      list-style: none;\n      padding: 0;\n    }\n\n    a {\n      text-decoration: none;\n\n      &:visited {\n        color: inherit;\n      }\n    }\n  ']);return Qn=function(){return n},n}(function(){Object(q.c)(Qn())})();!function(){var n=D({});i.a.render(o.a.createElement(c.a,{store:n},o.a.createElement(qn,null)),document.getElementById("root"))}(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[48,2,1]]]);
//# sourceMappingURL=main.d72979cc.chunk.js.map