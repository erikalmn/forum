(function(){"use strict";var e={3119:function(e,t,o){var a=o(5130),n=o(6768);const l={class:"navbar navbar-expand-lg navbar-dark",style:{"background-color":"#231a47",width:"100%"}},s={class:"container"},r=(0,n.Lk)("a",{href:"/",class:"navbar-brand"},[(0,n.Lk)("img",{src:"https://d31s10tn3clc14.cloudfront.net/imgs/falc/Review-Logos/forum-financial-management_logo.png",height:"30",alt:""})],-1),i=(0,n.Lk)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,n.Lk)("span",{class:"navbar-toggler-icon"})],-1),c={class:"collapse navbar-collapse",id:"navbarSupportedContent"},d={class:"navbar-nav ml-auto"},m={class:"nav-item"},u={class:"nav-item"},p={class:"nav-item"},f={class:"nav-item"},b={class:"nav-item"},g=(0,n.Lk)("footer",{class:"bg-body-tertiary text-center text-lg-start mt-4",style:{position:"fixed",bottom:"0",width:"100%"}},[(0,n.Lk)("div",{class:"text-center p-3",style:{color:"#fff","background-color":"#231a47"}}," Desenvolvido por Érika Lima © 2024 ")],-1);function k(e,t,o,a,k,v){const h=(0,n.g2)("router-view"),L=(0,n.g2)("CommentsList");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("nav",l,[(0,n.Lk)("div",s,[r,i,(0,n.Lk)("div",c,[(0,n.Lk)("ul",d,[(0,n.Lk)("li",m,[(0,n.Lk)("a",{class:"nav-link",onClick:t[0]||(t[0]=e=>v.setFilterTitle("computador"))},"computador")]),(0,n.Lk)("li",u,[(0,n.Lk)("a",{class:"nav-link",onClick:t[1]||(t[1]=e=>v.setFilterTitle("aplicativos"))},"aplicativos")]),(0,n.Lk)("li",p,[(0,n.Lk)("a",{class:"nav-link",onClick:t[2]||(t[2]=e=>v.setFilterTitle("periféricos"))},"periféricos")]),(0,n.Lk)("li",f,[(0,n.Lk)("a",{class:"nav-link",onClick:t[3]||(t[3]=e=>v.setFilterTitle("programação"))},"programação")]),(0,n.Lk)("li",b,[(0,n.Lk)("a",{class:"nav-link",onClick:t[4]||(t[4]=e=>v.setFilterTitle("outros"))},"outros")])])])])]),(0,n.bF)(h),((0,n.uX)(),(0,n.Wv)(L,{filterTitle:k.filterTitle,key:k.filterTitle},null,8,["filterTitle"])),g],64)}var v=o(4232);const h={class:"container"},L={class:"row"},w={class:"card h-100 p-3",style:{"border-color":"#231a47","background-color":"rgba(255, 255, 255, 0.4)"}},C={class:"d-flex flex-row mb-3"},y=["src"],A={class:"d-flex flex-column ml-2"},x={class:"text-black-50",style:{"font-size":"13px"}},E={style:{"font-size":"14px"}},I={class:"mt-auto"},T={class:"d-flex justify-content-between install mt-3"},X={style:{"font-size":"12px"}},_=["data-target"];function M(e,t,o,a,l,s){const r=(0,n.g2)("AddAnswer");return(0,n.uX)(),(0,n.CE)("div",h,[(0,n.Lk)("div",L,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(l.comments,((e,t)=>((0,n.uX)(),(0,n.CE)("div",{class:"col-md-4",key:t},[(0,n.Lk)("div",w,[(0,n.Lk)("div",C,[(0,n.Lk)("img",{src:e.icon,width:"50",class:"rounded-circle"},null,8,y),(0,n.Lk)("div",A,[(0,n.Lk)("span",null,(0,v.v_)(e.title),1),(0,n.Lk)("span",x,(0,v.v_)(e.author),1)])]),(0,n.Lk)("span",E,(0,v.v_)(e.message),1),(0,n.Lk)("div",I,[(0,n.Lk)("div",T,[(0,n.Lk)("span",X,(0,v.v_)(e.createdAt),1),(0,n.Lk)("a",{href:"","data-toggle":"modal","data-target":"#answerModal-"+e.id,style:{"font-size":"12px",color:"#231a47"}}," Respostas ("+(0,v.v_)(e.answers.length)+") ",9,_),(0,n.bF)(r,{commentId:e.id,initialCount:e.answers.length},null,8,["commentId","initialCount"])])])])])))),128))])])}o(4114);const F=["id"],U={class:"modal-dialog modal-dialog-centered modal-dialog-scrollable",role:"document"},O={class:"modal-content"},S=(0,n.Lk)("div",{class:"modal-header"},[(0,n.Lk)("h5",{class:"modal-title",id:"answerModalLabel"},"Respostas"),(0,n.Lk)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[(0,n.Lk)("span",{"aria-hidden":"true"},"×")])],-1),V={class:"modal-body"},j={class:"form-group"},D={class:"form-group"},z=(0,n.Lk)("div",{class:"modal-footer"},[(0,n.Lk)("button",{type:"button",class:"btn",style:{color:"#fff","background-color":"#a0a0a0"},"data-dismiss":"modal"}," Cancelar "),(0,n.Lk)("button",{type:"submit",class:"btn",style:{color:"#fff","background-color":"#00b9e5"}},"Enviar")],-1);function J(e,t,o,l,s,r){const i=(0,n.g2)("AnswersList");return(0,n.uX)(),(0,n.CE)("div",{class:"modal fade",id:"answerModal-"+o.commentId,tabindex:"-1",role:"dialog","aria-labelledby":"answerModalLabel","aria-hidden":"true"},[(0,n.Lk)("div",U,[(0,n.Lk)("div",O,[S,(0,n.Lk)("div",V,[(0,n.bF)(i,{commentId:o.commentId},null,8,["commentId"]),(0,n.Lk)("form",{onSubmit:t[2]||(t[2]=(0,a.D$)(((...e)=>r.addAnswer&&r.addAnswer(...e)),["prevent"]))},[(0,n.Lk)("div",j,[(0,n.bo)((0,n.Lk)("input",{type:"text",class:"form-control",id:"user",placeholder:"Usuário","onUpdate:modelValue":t[0]||(t[0]=e=>s.newAnswer.user=e)},null,512),[[a.Jo,s.newAnswer.user]])]),(0,n.Lk)("div",D,[(0,n.bo)((0,n.Lk)("textarea",{class:"form-control",id:"answer",placeholder:"Escreva sua resposta","onUpdate:modelValue":t[1]||(t[1]=e=>s.newAnswer.msg=e)},null,512),[[a.Jo,s.newAnswer.msg]])]),z],32)])])])],8,F)}const R={class:"list-group"},G={class:"d-flex flex-column"},K={class:"font-weight-bold"};function P(e,t,o,a,l,s){return(0,n.uX)(),(0,n.CE)("ul",R,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(l.answers,((e,t)=>((0,n.uX)(),(0,n.CE)("li",{class:"list-group-item mb-3 border-top rounded",key:t},[(0,n.Lk)("div",G,[(0,n.Lk)("span",K,(0,v.v_)(e.user),1),(0,n.Lk)("span",null,(0,v.v_)(e.msg),1)])])))),128))])}var H=o(9675),q=o(6400);const B={apiKey:"AIzaSyBIRP-Xz_0pXzY1bACg73_hc3oL8nk7REA",authDomain:"comments-5e599.firebaseapp.com",projectId:"comments-5e599",storageBucket:"comments-5e599.appspot.com",messagingSenderId:"273499397131",appId:"1:273499397131:web:d720f73d5c6ce3d469fb0e"},N=(0,q.Wp)(B),W=(0,H.aU)(N),Y=(0,H.rJ)(W,"comments"),Z=(0,H.rJ)(W,"images");var Q={name:"AnswersList",props:["commentId"],data(){return{answers:[]}},computed:{answersCount(){return this.answers.length}},methods:{async fetchAnswers(){const e=(0,H.H9)(Y,this.commentId);try{const t=await(0,H.x7)(e);if(t.exists()){const e=t.data();this.answers=e.answers||[]}else console.log("No such comment!")}catch(t){console.error("Error fetching answers:",t)}}},created(){this.fetchAnswers()}},ee=o(1241);const te=(0,ee.A)(Q,[["render",P],["__scopeId","data-v-4138e5a6"]]);var oe=te,ae={name:"AddAnswer",components:{AnswersList:oe},props:["commentId"],data(){return{newAnswer:{user:"",msg:""}}},methods:{async addAnswer(){const e=(0,H.H9)(Y,this.commentId);try{await(0,H.mZ)(e,{answers:(0,H.hq)(this.newAnswer)}),console.log("Data added successfully."),this.newAnswer={user:"",msg:""},$("#answerModal-"+this.commentId).modal("hide"),$("#answerModal-"+this.commentId).on("hidden.bs.modal",(()=>{location.reload()}))}catch(t){console.error("Error adding data:",t)}}}};const ne=(0,ee.A)(ae,[["render",J]]);var le=ne,se={name:"CommentsList",components:{AddAnswer:le},props:{filterTitle:{type:String,required:!1}},data(){return{comments:[]}},methods:{async fetchComments(){let e;e=this.filterTitle?(0,H.P)(Y,(0,H._M)("title","==",this.filterTitle)):Y;let t=await(0,H.GG)(e),o=[];t.forEach((e=>{let t=e.data();t.id=e.id,t.answers=t.answers||[],o.push(t)})),this.comments=o}},created(){this.fetchComments()},watch:{filterTitle(e,t){e!==t&&this.fetchComments()}}};const re=(0,ee.A)(se,[["render",M],["__scopeId","data-v-00b2c540"]]);var ie=re,ce={components:{CommentsList:ie},data(){return{filterTitle:""}},methods:{setFilterTitle(e){this.filterTitle=e}}};const de=(0,ee.A)(ce,[["render",k]]);var me=de,ue=o(1387);const pe={class:"container mt-4"},fe={class:"d-flex justify-content-between"},be=(0,n.Lk)("button",{type:"button",class:"btn",style:{color:"#231a47","border-color":"#231a47"},"data-toggle":"modal","data-target":"#commentModal"}," Criar comentário ",-1);function ge(e,t,o,a,l,s){const r=(0,n.g2)("AddComment");return(0,n.uX)(),(0,n.CE)("div",pe,[(0,n.Lk)("div",fe,[be,(0,n.bF)(r)])])}const ke={class:"modal fade",id:"commentModal",tabindex:"-1",role:"dialog","aria-labelledby":"commentModalLabel","aria-hidden":"true"},ve={class:"modal-dialog modal-dialog-centered",role:"document"},he={class:"modal-content"},Le=(0,n.Lk)("div",{class:"modal-header"},[(0,n.Lk)("h5",{class:"modal-title",id:"commentModalLabel"},"Novo comentário"),(0,n.Lk)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[(0,n.Lk)("span",{"aria-hidden":"true"},"×")])],-1),we={class:"modal-body"},Ce={class:"form-group"},ye={class:"form-group"},Ae={class:"form-group"},xe=(0,n.Lk)("div",{class:"modal-footer"},[(0,n.Lk)("button",{type:"button",class:"btn",style:{color:"#fff","background-color":"#a0a0a0"},"data-dismiss":"modal"}," Cancelar "),(0,n.Lk)("button",{type:"submit",class:"btn",style:{color:"#fff","background-color":"#00b9e5"}},"Enviar")],-1);function Ee(e,t,o,l,s,r){return(0,n.uX)(),(0,n.CE)("div",ke,[(0,n.Lk)("div",ve,[(0,n.Lk)("div",he,[Le,(0,n.Lk)("div",we,[(0,n.Lk)("form",{onSubmit:t[7]||(t[7]=(0,a.D$)(((...e)=>r.createComment&&r.createComment(...e)),["prevent"]))},[(0,n.Lk)("div",Ce,[(0,n.bo)((0,n.Lk)("input",{type:"radio",class:"btn-check",name:"options",id:"option1",autocomplete:"off",value:"computador","onUpdate:modelValue":t[0]||(t[0]=e=>s.newComment.title=e)},null,512),[[a.XL,s.newComment.title]]),(0,n.Lk)("label",{class:(0,v.C4)(["badge badge-pill mr-1",{"selected-label":"computador"===s.newComment.title}]),style:{color:"#fff","background-color":"#00b9e5"},for:"option1"}," computador ",2),(0,n.bo)((0,n.Lk)("input",{type:"radio",class:"btn-check",name:"options",id:"option2",autocomplete:"off",value:"aplicativos","onUpdate:modelValue":t[1]||(t[1]=e=>s.newComment.title=e)},null,512),[[a.XL,s.newComment.title]]),(0,n.Lk)("label",{class:(0,v.C4)(["badge badge-pill mr-1",{"selected-label":"aplicativos"===s.newComment.title}]),style:{color:"#fff","background-color":"#00b9e5"},for:"option2"}," aplicativos ",2),(0,n.bo)((0,n.Lk)("input",{type:"radio",class:"btn-check",name:"options",id:"option3",autocomplete:"off",value:"periféricos","onUpdate:modelValue":t[2]||(t[2]=e=>s.newComment.title=e)},null,512),[[a.XL,s.newComment.title]]),(0,n.Lk)("label",{class:(0,v.C4)(["badge badge-pill mr-1",{"selected-label":"periféricos"===s.newComment.title}]),style:{color:"#fff","background-color":"#00b9e5"},for:"option3"}," periféricos ",2),(0,n.bo)((0,n.Lk)("input",{type:"radio",class:"btn-check",name:"options",id:"option4",autocomplete:"off",value:"programação","onUpdate:modelValue":t[3]||(t[3]=e=>s.newComment.title=e)},null,512),[[a.XL,s.newComment.title]]),(0,n.Lk)("label",{class:(0,v.C4)(["badge badge-pill mr-1",{"selected-label":"programação"===s.newComment.title}]),style:{color:"#fff","background-color":"#00b9e5"},for:"option4"}," programação ",2),(0,n.bo)((0,n.Lk)("input",{type:"radio",class:"btn-check",name:"options",id:"option5",autocomplete:"off",value:"outros","onUpdate:modelValue":t[4]||(t[4]=e=>s.newComment.title=e)},null,512),[[a.XL,s.newComment.title]]),(0,n.Lk)("label",{class:(0,v.C4)(["badge badge-pill mr-1",{"selected-label":"outros"===s.newComment.title}]),style:{color:"#fff","background-color":"#00b9e5"},for:"option5"}," outros ",2)]),(0,n.Lk)("div",ye,[(0,n.bo)((0,n.Lk)("input",{type:"text",class:"form-control",id:"author",placeholder:"Usuário","onUpdate:modelValue":t[5]||(t[5]=e=>s.newComment.author=e)},null,512),[[a.Jo,s.newComment.author]])]),(0,n.Lk)("div",Ae,[(0,n.bo)((0,n.Lk)("textarea",{class:"form-control",id:"message",placeholder:"Escreva seu comentário","onUpdate:modelValue":t[6]||(t[6]=e=>s.newComment.message=e)},null,512),[[a.Jo,s.newComment.message]])]),xe],32)])])])])}var Ie={name:"AddComment",components:{},data(){return{data:[],images:[],newComment:{title:null,author:null,message:null,icon:null,createdAt:null}}},methods:{async createComment(){const e=Math.floor(Math.random()*this.images.length);this.newComment.icon=this.images[e];const t=new Date;this.newComment.createdAt=t.toLocaleDateString();try{await(0,H.gS)(Y,this.newComment),console.log("Data added successfully."),this.newComment={title:"",author:"",message:"",icon:"",createdAt:""},$("#commentModal").modal("hide"),$("#commentModal").on("hidden.bs.modal",(function(){location.reload()}))}catch(o){console.error("Error adding data:",o)}}},async mounted(){try{const e=await(0,H.GG)(Z);e.forEach((e=>{this.images.push(e.data().url)}))}catch(e){console.error("Error fetching images:",e)}}};const Te=(0,ee.A)(Ie,[["render",Ee]]);var Xe=Te,_e={name:"HomeView",components:{AddComment:Xe}};const Me=(0,ee.A)(_e,[["render",ge]]);var Fe=Me;const Ue=[{path:"/",name:"home",component:Fe}],Oe=(0,ue.aE)({history:(0,ue.LA)("/forum/"),routes:Ue});var Se=Oe;(0,a.Ef)(me).use(Se).mount("#app")}},t={};function o(a){var n=t[a];if(void 0!==n)return n.exports;var l=t[a]={exports:{}};return e[a].call(l.exports,l,l.exports,o),l.exports}o.m=e,function(){var e=[];o.O=function(t,a,n,l){if(!a){var s=1/0;for(d=0;d<e.length;d++){a=e[d][0],n=e[d][1],l=e[d][2];for(var r=!0,i=0;i<a.length;i++)(!1&l||s>=l)&&Object.keys(o.O).every((function(e){return o.O[e](a[i])}))?a.splice(i--,1):(r=!1,l<s&&(s=l));if(r){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[a,n,l]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,l,s=a[0],r=a[1],i=a[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(n in r)o.o(r,n)&&(o.m[n]=r[n]);if(i)var d=i(o)}for(t&&t(a);c<s.length;c++)l=s[c],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(d)},a=self["webpackChunkforum"]=self["webpackChunkforum"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=o.O(void 0,[504],(function(){return o(3119)}));a=o.O(a)})();
//# sourceMappingURL=app.d606c7a8.js.map