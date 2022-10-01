"use strict";(self.webpackChunkto_do_list=self.webpackChunkto_do_list||[]).push([[826],{28:(e,n,t)=>{t.d(n,{Z:()=>r});var o=t(81),a=t.n(o),i=t(645),s=t.n(i)()(a());s.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n}\n\n/** CENTER THE TODO APP */\n\nbody {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n}\n\nul {\n  list-style: none;\n}\n\n/** WRAPPER */\n\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  box-shadow: 1px 1px 9px 1px #aaa;\n  width: 50%;\n}\n\n/** STYLE THE TODO APP */\n\n/* LIST HEADER */\n\n.list-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #ccc;\n  padding: 0.6rem 0.5rem;\n}\n\n.reload {\n  cursor: pointer;\n  color: #888;\n}\n\n/* TASK INPUT */\n\n.new-task-input {\n  display: flex;\n  align-items: center;\n  padding: 0.6rem 0.5rem;\n  border-bottom: 1px solid #ccc;\n  justify-content: space-between;\n}\n\n#task {\n  width: 90%;\n  height: 2rem;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  font-style: italic;\n}\n\n#task::placeholder {\n  font-style: italic;\n  font-size: 1rem;\n}\n\n.fa-turn-down {\n  transform: rotate(90deg);\n  justify-self: flex-end;\n  color: #888;\n  cursor: pointer;\n}\n\n/* TASKS LIST */\n\n.task {\n  display: flex;\n  align-items: center;\n  padding: 1rem 0.5rem;\n  border-bottom: 1px solid #ccc;\n  justify-content: space-between;\n}\n\n.task > label {\n  display: flex;\n  align-items: center;\n}\n\n.task > label > .checked {\n  text-decoration: line-through;\n  font-style: italic;\n  color: #555;\n}\n\n.checkbox-input {\n  margin-right: 1rem;\n  display: inline-block;\n  width: 25px;\n  height: 19px;\n}\n\n.settings {\n  color: #888;\n  cursor: pointer;\n  position: relative;\n}\n\n.task-menu {\n  position: absolute;\n  background: #fff;\n  border-radius: 5px;\n  z-index: 3;\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);\n  padding: 5px 0;\n}\n\n.task-menu-visible {\n  display: none;\n}\n\n.task-menu li {\n  height: 25px;\n  font-size: 16px;\n  padding: 17px 15px;\n  margin-bottom: 2px;\n  justify-content: flex-end;\n  display: flex;\n  align-items: center;\n  flex-direction: row-reverse;\n}\n\n.task-menu li:last-child {\n  margin-bottom: 0;\n}\n\n.task-menu li:hover {\n  background: #f5f5f5;\n}\n\n.task-menu li i {\n  padding-right: 8px;\n}\n\n/** CLEAR ALL COMPLETED BUTTON */\n\n.clear-button {\n  padding: 1rem;\n  border: none;\n  border-radius: 0;\n  outline: none;\n  color: #555;\n  cursor: pointer;\n}\n\n.clear-button:hover {\n  text-decoration: underline;\n  color: #000;\n}\n",""]);const r=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var r=0;r<this.length;r++){var c=this[r][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&s[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},s=[],r=0;r<e.length;r++){var c=e[r],l=o.base?c[0]+o.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=a(m,o);o.byIndex=r,n.splice(r,0,{identifier:u,updater:f,references:1})}s.push(u)}return s}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var i=o(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var r=t(i[s]);n[r].references--}for(var c=o(e,a),l=0;l<i.length;l++){var d=t(i[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=c}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},913:(e,n,t)=>{var o=t(379),a=t.n(o),i=t(795),s=t.n(i),r=t(569),c=t.n(r),l=t(565),d=t.n(l),u=t(216),p=t.n(u),m=t(589),f=t.n(m),g=t(28),h={};h.styleTagTransform=f(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=p(),a()(g.Z,h),g.Z&&g.Z.locals&&g.Z.locals;const v=document.querySelector(".tasks-list"),x=e=>{const{description:n,index:t}=e,o=document.createElement("li"),a=document.createElement("label"),i=document.createElement("input"),s=document.createElement("p"),r=document.createElement("div"),c=document.createElement("i"),l=document.createElement("ul"),d=document.createElement("li"),u=document.createElement("i"),p=document.createElement("li"),m=document.createElement("i");o.classList.add("task"),a.classList.add("label"),i.classList.add("checkbox-input"),r.classList.add("settings"),c.classList.add("fa-solid","fa-ellipsis-vertical","settings"),l.classList.add("task-menu","task-menu-visible"),u.classList.add("fa-solid","fa-pen","edit-icon"),m.classList.add("fa-solid","fa-trash","delete-icon"),d.classList.add("edit"),p.classList.add("delete"),i.id=`checkbox-${t}`,p.id=`${t}`,l.id=`${t}`,o.id=`${t}`,s.textContent=n,d.textContent="Edit",p.textContent="Delete",i.type="checkbox",a.append(i,s),d.append(u),p.append(m),l.append(d,p),r.append(c,l),o.append(a,r),v.append(o),(e=>{const n=document.getElementById(`checkbox-${e.index}`),t=n.parentElement.lastElementChild;n.addEventListener("click",(()=>{const o=JSON.parse(localStorage.getItem("todo-list"));!0===n.checked?(t.classList.add("checked"),o[e.index].completed=!0,localStorage.setItem("todo-list",JSON.stringify(o))):(t.classList.remove("checked"),o[e.index].completed=!1,localStorage.setItem("todo-list",JSON.stringify(o)))})),!0===e.completed?(n.checked=!0,t.classList.add("checked")):(n.checked=!1,t.classList.remove("checked"))})(e)},y=document.getElementById("task"),b=JSON.parse(localStorage.getItem("todo-list"))||[];0!==b.length&&b.forEach((e=>{x(e)}));const k=document.querySelectorAll(".task"),E=document.querySelectorAll(".task-menu"),L=document.querySelectorAll(".task"),S=JSON.parse(localStorage.getItem("todo-list"))||[],T=document.querySelectorAll(".task"),I=document.getElementById("task"),w=JSON.parse(localStorage.getItem("todo-list"))||[];0!==(JSON.parse(localStorage.getItem("todo-list"))||[]).length&&(k.forEach((e=>{e.addEventListener("click",(n=>{n.target.classList.contains("settings")?E[e.id].classList.toggle("task-menu-visible"):E[e.id].classList.add("task-menu-visible")}))})),document.body.addEventListener("click",(e=>{e.target.classList.contains("settings")||E.forEach((e=>{e.classList.add("task-menu-visible")}))})),T.forEach((e=>{e.addEventListener("click",(n=>{(n.target.classList.contains("edit")||n.target.classList.contains("edit-icon"))&&(I.value=w[e.id].description)}))})),L.forEach((e=>{e.addEventListener("click",(n=>{(n.target.classList.contains("delete")||n.target.classList.contains("delete-icon"))&&(S.splice(e.id,1),localStorage.setItem("todo-list",JSON.stringify(S)),location.reload())}))})),S.forEach((e=>{0!==e.index&&(e.index-=1)}))),y.addEventListener("keyup",(e=>{const n=y.value.trim();if("Enter"===e.key&&n){const e=((e,n)=>{let t={};return t={description:e,completed:!1,index:n},t})(n,b.length);b.push(e),localStorage.setItem("todo-list",JSON.stringify(b)),x(e),y.value="",location.reload()}}))}},e=>{e(e.s=913)}]);