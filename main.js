(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,'* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  background-color: #161331;\n  height: 100vh;\n}\n\naside {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #ececec;\n  padding: 1em;\n  gap: 1rem;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nheader {\n  padding: 1em;\n}\n\nheader h1 {\n  color: #ffffff;\n}\n\naside h3,\nheader h1 {\n  font-size: clamp(1.3rem, 1.6rem, 1.9rem);\n}\n\n#new-project-button {\n  font-weight: 600;\n  font-size: clamp(1rem, 1.3rem, 1.5rem);\n  padding: 0.3rem;\n  border-radius: 8px;\n  border-width: 0;\n  background-color: #21b9ff;\n  box-shadow: 5px 5px 5px 0px rgb(0, 0, 0);\n}\n\n#new-project-button:hover {\n  box-shadow: 5px 5px 10px 0px #0044ff;\n}\n\n#projects-names {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1rem;\n}\n\n#projects-names > li {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  font-weight: 600;\n  font-size: clamp(1rem, 1.3rem, 1.5rem);\n  list-style-type: none;\n  align-items: center;\n}\n\n#projects-names > li > * {\n  cursor: pointer;\n}\n\n#projects-names > li > p {\n  flex: 1;\n  text-align: center;\n}\n\n.delete-button {\n  font-weight: 600;\n  font-size: clamp(0.5rem, 0.7rem, 0.8rem);\n  padding: 0.2rem 0.4rem;\n  border-radius: 8px;\n  border-width: 0;\n  background-color: #ca3e3e;\n  box-shadow: 2px 2px 3px 0px #000000;\n}\n\n.delete-button:hover {\n  box-shadow: 3px 3px 4px 0px #ff3838;\n}\n\n#project-wrapper {\n  display: grid;\n  align-items: center;\n  background-color: #ffffff;\n  border-radius: 16px;\n  padding: 1.5rem;\n  min-width: 65vw;\n  margin: 1rem;\n}\n\n#project-tasks-wrapper {\n  flex: 1;\n  margin-top: 1rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 1rem;\n  place-items: center;\n}\n\n#project-title {\n  font-weight: 600;\n  font-size: clamp(1rem, 1.5rem, 2rem);\n  justify-self: center;\n}\n\n.task {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: clamp(150px, 170px, 200px);\n  height: 20vh;\n  border: 1px solid #000000;\n  border-radius: 16px;\n  padding: 1rem;\n  box-shadow: 2px 2px 5px 0px #000000;\n}\n',""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=n(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=o(m,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),s=n(565),c=n.n(s),d=n(216),l=n.n(d),p=n(589),u=n.n(p),m=n(426),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=class{constructor(e){this.name=e,this.taskList=[]}addTask(e){this.taskList.push(e)}removeTask(e){this.taskList.indexOf(e)<0||this.taskList.splice(this.taskList.indexOf(e),1)}};class g{static todoList=[];static addNewProject(e){return void 0===g.getProject(e)&&(this.todoList.push(e),g.saveTodoList(),!0)}static getProject(e){return this.todoList.find((t=>t.name===e.name))}static saveTodoList(){localStorage.setItem("todoList",JSON.stringify(this.todoList))}static getTodoList(){const e=JSON.parse(localStorage.getItem("todoList"));return null!==e&&(this.todoList=[...e]),this.todoList}static deleteProject(e){const t=this.todoList.findIndex((t=>t.name===e.name));return t>=0&&(this.todoList.splice(t,1),g.saveTodoList(),!0)}static clear(){localStorage.removeItem("todoList")}}const v=g;class x{static load(){x.loadStorageProjects(v.getTodoList()),x.loadNewProjectButton()}static loadStorageProjects(e){e.forEach((e=>{const t=new h(e.name);e.taskList.forEach((e=>{const n=new class{constructor(e,t,n,r,o){this.title=e,this.description=t,this.dueDate=n,this.priority=r,this.completedStatus=o}changeDueDate(e){this.dueDate=e}changePriority(e){this.priority=e}changeCompletedStatus(){this.completedStatus=!this.completedStatus}}(e.title,e.description,e.dueDate,e.completedStatus);t.addTask(n)})),x.loadProject(t),x.loadProjectItem(t)}))}static loadProject(e){document.getElementById("projects").innerHTML=`\n        <div id="project-wrapper">\n          <h2 id="project-title">${e.name}</h2>\n          <div class="project-buttons">\n            <button>New Task</button>\n          </div>\n          <div id="project-tasks-wrapper"></div>        \n        </div>`,e.taskList.length>0&&x.loadTasks(e.taskList)}static loadProjectItem(e){const t=document.createElement("li");t.classList.add("project-item"),t.innerHTML=`\n        <p>${e.name}</p>\n        <button class="delete-button">Delete Project</button>`,t.querySelector("p").addEventListener("click",(()=>{x.loadProject(e)})),document.getElementById("projects-names").appendChild(t),t.querySelector("button").addEventListener("click",(()=>{if(v.deleteProject(e)){t.parentElement.removeChild(t);const n=document.getElementById("projects"),r=document.getElementById("project-title");r?.textContent===e.name&&(n.innerHTML="")}}))}static loadTasks(e){const t=document.getElementById("project-tasks-wrapper");e.forEach((e=>{const n=document.createElement("div");n.classList.add("task"),n.innerHTML=`\n        <p>${e.title}</p>\n        <p>${e.description}</p>\n        <p>${e.dueDate}</p>\n        <p>${e.priority}</p>\n        <p>${e.completedStatus}</p>\n      `,t.appendChild(n)}))}static deleteProject(e,t){let n=-1;t.forEach((r=>{r.name===e&&(n=t.indexOf(r))})),console.log(n)}static loadNewProjectButton(){document.getElementById("new-project-button").addEventListener("click",(()=>{let e=prompt("What's the name of the new project?");if(e=e?.replaceAll("<","").replaceAll(">","").trim(),e?.length>0){const t=new h(e);v.addNewProject(t)?(x.loadProject(t),x.loadProjectItem(t)):window.alert(`There's already a project created with the name: ${e}`)}}))}}x.load()})()})();