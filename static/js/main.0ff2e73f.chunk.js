(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(7),l=a.n(o),r=(a(14),a(15),a(16),a(8)),u=a(2),i=a(1),m=a(3),s=a.n(m),d=function(e){var t=e.id,a=e.title,o=e.completed,l=e.changeCompleted,r=e.removeTodo,u=e.changeTodo,m=Object(n.useState)(!1),d=Object(i.a)(m,2),f=d[0],p=d[1],g=Object(n.useState)(a),b=Object(i.a)(g,2),E=b[0],h=b[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:s()({completed:o,editing:f})},c.a.createElement("div",{className:"view"},c.a.createElement("input",{type:"checkbox",className:"toggle",onChange:function(){return l(t)},checked:o}),c.a.createElement("label",{onDoubleClick:function(){return p(!0)}},a),c.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return r(t)}})),c.a.createElement("input",{type:"text",className:"edit",value:E,ref:function(e){e&&e.focus()},onChange:function(e){h(e.target.value.trimLeft())},onKeyUp:function(e){switch(e.key){case"Enter":E&&u(t,E),p(!1);break;case"Escape":p(!1)}},onFocus:function(e){return e.currentTarget.select()},onBlur:function(){E&&u(t,E),p(!1)}})))},f=function(e){var t=e.items,a=e.changeCompleted,n=e.removeTodo,o=e.changeTodo;return c.a.createElement("ul",{className:"todo-list"},t.map((function(e){return c.a.createElement(d,Object.assign({key:e.id},e,{changeCompleted:a,removeTodo:n,changeTodo:o}))})))},p=function(e){var t=e.todosType,a=e.selectTodosType,n=e.all,o=e.active,l=e.completed;return c.a.createElement("ul",{className:"filters"},c.a.createElement("li",null,c.a.createElement("a",{href:"#/",className:s()({selected:t===n}),onClick:function(e){return a(e.target.innerText)}},n)),c.a.createElement("li",null,c.a.createElement("a",{href:"#/active",className:s()({selected:t===o}),onClick:function(e){return a(e.target.innerText)}},o)),c.a.createElement("li",null,c.a.createElement("a",{href:"#/completed",className:s()({selected:t===l}),onClick:function(e){return a(e.target.innerText)}},l)))};var g=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)({}),m=Object(i.a)(l,2),s=m[0],d=m[1],g=Object(n.useState)(!0),b=Object(i.a)(g,2),E=b[0],h=b[1],O=Object(n.useState)("All"),j=Object(i.a)(O,2),v=j[0],N=j[1],T=Object(n.useState)(""),k=Object(i.a)(T,2),y=k[0],C=k[1];Object(n.useEffect)((function(){JSON.parse(localStorage.getItem("todos"))&&o(JSON.parse(localStorage.getItem("todos")))}),[]),Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(a))}),[a]);var S,x=a.filter((function(e){return!e.completed})),w=a.filter((function(e){return e.completed})),J="All",I="Active",A="Completed";switch(v){case I:S=x;break;case A:S=w;break;default:S=a}return c.a.createElement("section",{className:"todoapp"},c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"todos App"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),y&&o([].concat(Object(r.a)(a),[s])),C("")}},c.a.createElement("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",value:y,onChange:function(e){C(e.target.value.trimLeft()),d({id:+new Date,title:e.target.value.trimLeft(),completed:!1})}}))),a.length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"main"},c.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onChange:function(){o(a.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{completed:E})}))),h(!E)}}),c.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),c.a.createElement(f,{items:S,changeCompleted:function(e){var t=a.map((function(t){return t.id!==e?t:Object(u.a)(Object(u.a)({},t),{},{completed:!t.completed})}));o(t)},removeTodo:function(e){o(a.filter((function(t){return t.id!==e}))),localStorage.setItem("todos",JSON.stringify(a))},changeTodo:function(e,t){o(a.map((function(a){return a.id!==e?a:Object(u.a)(Object(u.a)({},a),{},{title:t})})))}})),c.a.createElement("footer",{className:"footer"},c.a.createElement("span",{className:"todo-count"},"".concat(x.length," items left")),c.a.createElement(p,{todosType:v,selectTodosType:function(e){N(e)},all:J,active:I,completed:A}),w.length>0&&c.a.createElement("button",{type:"button",className:"clear-completed",onClick:function(){o(a.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{completed:!1})})))}},"Clear completed"))))};l.a.render(c.a.createElement(g,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.0ff2e73f.chunk.js.map