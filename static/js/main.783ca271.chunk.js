(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,a){e.exports=a(78)},47:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(20),c=a.n(l),i=(a(47),a(17)),s=a(12),d=a(13),r=a(15),m=a(14),u=a(16),h={notification:[]},p=a(21),b=a(38),v=a.n(b),f=a(9),E=a.n(f),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).state={startDate:new Date,endDate:a.props.endDate,currentDate:new Date},a.handleChangeEnd=a.handleChangeEnd.bind(Object(p.a)(a)),a.handleChangeStart=a.handleChangeStart.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"handleChangeStart",value:function(e){this.setState({startDate:e})}},{key:"handleChangeEnd",value:function(e){this.setState({endDate:e})}},{key:"calculateDaysLeft",value:function(e,t){return E.a.isMoment(e)||(e=E()(e)),E.a.isMoment(t)||(t=E()(t)),t.diff(e,"days")}},{key:"render",value:function(){var e,t=this.state,a=t.startDate,n=t.endDate,l=this.calculateDaysLeft(a,n);return e=l<=1?"badge-danger":l>=2&&l<=5?"badge-warning":l>5&&l<11?"badge-info":"badge-primary",o.a.createElement("span",{className:"badge ".concat(e)},"Due ",o.a.createElement(v.a,{fromNow:!0},this.props.currentDate))}}]),t}(n.Component),N=a(29),y=a(11),D=a.n(y),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).state={addModal:!1,modal:!1,delete:!1,dropdown:!1,id:"",todoId:"",title:"",userId:"",completed:!1,archived:!1,dueDate:E()(),todos:[]},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getTodos()}},{key:"getTodos",value:function(){var e=this;D.a.get("https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos").then(function(t){e.setState(function(e,a){return{todos:t.data}})}).catch(function(e){console.log(e)})}},{key:"getTodo",value:function(e,t,a,n,o,l,c){this.setState(function(i,s){return{arrId:e,id:t,userId:a,title:n,completed:l,archived:o,dueDate:c}})}},{key:"onComplete",value:function(e,t,a,n,o,l){var c=this;D.a.put("https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos/".concat(t),{completed:!0}).then(function(i){var s=Object.assign([],c.state.todos);s[e]={id:"".concat(t),userId:a,title:n,completed:!0,archived:o,dueDate:l},c.setState(function(e,t){return{todos:s}});var d=Object.assign([],h.notification);d.push({id:"".concat(t),userId:a,title:n,completed:!0,archived:o,dueDate:l}),h.notification=d,console.log(d)}).catch(function(e){console.log(e)})}},{key:"inComplete",value:function(e,t,a,n,o,l){var c=this;D.a.put("https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos/".concat(t),{completed:!1}).then(function(i){var s=Object.assign([],c.state.todos);s[e]={id:"".concat(t),userId:a,title:n,completed:!1,archived:o,dueDate:l},c.setState(function(e,t){return{todos:s}});var d=Object.assign([],h.notification);d.push({id:"".concat(t),userId:a,title:n,completed:!0,archived:o,dueDate:l}),h.notification=d,console.log(h.notification.length)}).catch(function(e){console.log(e)})}},{key:"onDelete",value:function(e){var t=this;D.a.delete("https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos/".concat(e)).then(function(a){var n=t.state.todos.filter(function(t){return t.id!==e});t.setState(function(e,t){return{todos:n}})}).catch(function(e){console.log(e)})}},{key:"onAdd",value:function(e,t){var a=this;console.log(),D.a.post("https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos",{title:this.state.title,startDate:new Date,dueDate:this.state.dueDate}).then(function(n){console.log(n.data.id);var o=Object.assign([],a.state.todos);o.push({id:n.data.id,userId:26,title:e,completed:!1,archived:!1,dueDate:t,startDate:new Date}),a.setState(function(e,t){return{todos:o}})}).catch(function(e){console.log(e)})}},{key:"onEdit",value:function(){var e=this;D.a.put("https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos/".concat(this.state.id),{userId:this.state.userId,title:this.state.title,completed:this.state.completed,archived:this.state.archived,dueDate:this.state.dueDate}).then(function(t){var a=Object.assign([],e.state.todos);a[e.state.arrId]={id:"".concat(e.state.id),userId:e.state.userId,title:e.state.title,completed:e.state.completed,archived:e.state.archived,dueDate:e.state.dueDate},e.setState(function(e,t){return{todos:a}}),console.log(e.state.todos)}).catch(function(e){console.log(e)})}},{key:"onArchive",value:function(e,t,a,n,o,l){var c=this;D.a.put("https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos/".concat(t),{archived:!0}).then(function(i){var s=Object.assign([],c.state.todos);s[e]={id:"".concat(t),userId:a,title:n,completed:o,archived:!0,dueDate:l},c.setState(function(e,t){return{todos:s}});var d=Object.assign([],h.notification);d.push({id:"".concat(t),userId:a,title:n,completed:o,archived:!0,dueDate:l}),h.notification=d}).catch(function(e){console.log(e)})}},{key:"onUnarchive",value:function(e,t,a,n,o,l){var c=this;D.a.put("https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos/".concat(t),{archived:!1}).then(function(i){var s=Object.assign([],c.state.todos);s[e]={id:"".concat(t),userId:a,title:n,completed:o,archived:!1,dueDate:l},c.setState(function(e,t){return{todos:s}}),console.log(c.state.todos)}).catch(function(e){console.log(e)})}},{key:"onShowModal",value:function(){var e=this;this.setState(function(t,a){return{modal:!e.state.modal}})}},{key:"onShowAddModal",value:function(){var e=this;this.setState(function(t,a){return{addModal:!e.state.addModal}})}},{key:"onChangeTitle",value:function(e){this.setState({title:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState(function(t,a){return{dueDate:e}})}},{key:"deleteWarning",value:function(e){var t=this;this.setState(function(a,n){return{delete:!t.state.delete,todoId:e}})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"row todo-page"},o.a.createElement("div",{className:"col-md-4"},o.a.createElement("h3",null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},"Todo's"),o.a.createElement("div",{className:"col-md-6"},o.a.createElement("button",{type:"button",className:"btn btn-sm btn-primary btn-archive float-right","data-toggle":"modal","data-placement":"top",title:"Add Todo",onClick:function(){e.onShowAddModal()}},o.a.createElement("i",{className:"fas fa-plus"}))))),o.a.createElement("div",{className:"card mb-4 shadow-sm border-info"},o.a.createElement("ul",{className:"list-group"},this.state.todos.map(function(t,a){var n=E()(t.dueDate).format("MMMM DD YYYY, h:mm:ss a");if(!1===t.completed&&!1===t.archived)return o.a.createElement("li",{className:"list-group-item"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col col-lg-1"},o.a.createElement("input",{onClick:function(){return e.onComplete(a,t.id,t.userId,t.title,t.archived,t.dueDate)},type:"checkbox",name:"complete"})),o.a.createElement("div",{className:"col-lg-8 todo-text"},o.a.createElement("p",null,t.title," ",o.a.createElement(g,{currentDate:n,startDate:t.startDate,endDate:t.dueDate}))),o.a.createElement("div",{className:"col-lg-3 todo-edit-btn"},o.a.createElement("button",{type:"button",className:"btn btn-primary btn-edit",onClick:function(){e.onShowModal(),e.getTodo(a,t.id,t.userId,t.title,t.archived,t.completed,n)},"data-toggle":"modal","data-target":"#exampleModal"},o.a.createElement("i",{className:"fas fa-pen"})),o.a.createElement("button",{onClick:function(){return e.onArchive(a,t.id,t.userId,t.title,t.completed,t.dueDate)},type:"button","data-toggle":"tooltip","data-placement":"top",title:"Archive Todo",className:"btn btn-primary btn-archive"},o.a.createElement("i",{className:"fas fa-archive"})))))})))),o.a.createElement("div",{className:"col-md-4"},o.a.createElement("h3",null,"Done"),o.a.createElement("div",{className:"card mb-4 shadow-sm border-success done"},o.a.createElement("ul",{className:"list-group"},this.state.todos.map(function(t,a){var n=new Date(t.dueDate).toString();if(!0===t.completed&&!1===t.archived)return o.a.createElement("li",{className:"list-group-item"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col col-lg-1"},o.a.createElement("input",{onClick:function(){return e.inComplete(a,t.id,t.userId,t.title,t.archived,t.dueDate)},type:"checkbox","data-toggle":"tooltip","data-placement":"top",title:"Not Done",name:"incomplete",defaultChecked:!0})),o.a.createElement("div",{className:"col-lg-8 todo-text"},o.a.createElement("p",null,t.title," ",o.a.createElement(g,{currentDate:n,startDate:t.startDate,endDate:t.dueDate}))),o.a.createElement("div",{className:"col-lg-3 todo-edit-btn"},o.a.createElement("button",{type:"button",className:"btn btn-primary btn-edit",onClick:function(){e.onShowModal(),e.getTodo(a,t.id,t.userId,t.title,t.archived,t.completed,n)},"data-toggle":"modal","data-target":"#exampleModal",disabled:!0},o.a.createElement("i",{className:"fas fa-pen"})),o.a.createElement("button",{onClick:function(){return e.onArchive(a,t.id,t.userId,t.title,t.completed,t.dueDate)},type:"button","data-toggle":"tooltip","data-placement":"top",title:"Archive Todo",className:"btn btn-primary btn-archive"},o.a.createElement("i",{className:"fas fa-archive"})))))})))),o.a.createElement("div",{className:"col-md-4"},o.a.createElement("h3",null,"Archive"),o.a.createElement("div",{className:"card mb-4 shadow-sm border-danger archive"},o.a.createElement("ul",{className:"list-group"},this.state.todos.map(function(t,a){var n=new Date(t.dueDate).toString();if(!0===t.archived)return o.a.createElement("li",{className:"list-group-item"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col col-lg-1"},o.a.createElement("button",{onClick:function(){return e.onUnarchive(a,t.id,t.userId,t.title,t.completed,t.dueDate)},type:"button","data-toggle":"tooltip","data-placement":"top",title:"Unarchive Todo",className:"btn btn-primary btn-unarchive"},o.a.createElement("i",{className:"fas fa-box-open"}))),o.a.createElement("div",{className:"col-lg-8 todo-text"},o.a.createElement("p",null,t.title," ",o.a.createElement(g,{currentDate:n,startDate:t.startDate,endDate:t.dueDate}))),o.a.createElement("div",{className:"col-lg-3 todo-edit-btn"},o.a.createElement("button",{type:"button",className:"btn btn-primary btn-edit",onClick:function(){e.onShowModal(),e.getTodo(a,t.id,t.userId,t.title,t.archived,t.completed,n)},"data-toggle":"modal","data-target":"#exampleModal",disabled:!0},o.a.createElement("i",{className:"fas fa-pen"})),o.a.createElement("button",{type:"button",onClick:function(){e.deleteWarning(t.id)},className:"btn btn-delete-forever","data-toggle":"modal","data-target":"#deleteWarning"},o.a.createElement("i",{className:"fas fa-trash-alt"})))))})))),o.a.createElement("div",{className:"modal fade ".concat(this.state.modal?"show":"hide"),id:"addModal",style:{display:"".concat(this.state.modal?"block":""),paddingRight:"".concat(this.state.modal?"17px":"")},tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},o.a.createElement("div",{className:"modal-dialog",role:"document"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("div",{className:"modal-header"},o.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Edit Todo"),o.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},o.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),o.a.createElement("div",{className:"modal-body"},o.a.createElement("label",null,"Title"),o.a.createElement("input",{onChange:this.onChangeTitle.bind(this),className:"form-control",type:"text",name:"title",value:this.state.title}),o.a.createElement("label",null,"Due Date"),o.a.createElement("div",{className:"input-group"},o.a.createElement("div",{className:"input-group-append"},o.a.createElement(N.a,{className:"form-control",selected:new Date(this.state.dueDate),timeFormat:"HH:mm",dateFormat:"MMMM d, yyyy h:mm aa",onChange:this.onChangeDate.bind(this)}),o.a.createElement("span",{className:"input-group-text",id:"basic-addon2"},o.a.createElement("i",{className:"fa fa-calendar"}))))),o.a.createElement("div",{className:"modal-footer"},o.a.createElement("button",{onClick:function(){e.onShowModal(),e.setState(function(e,t){return{title:""}})},type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"),o.a.createElement("button",{onClick:this.onEdit.bind(this),type:"button",className:"btn btn-primary"},"Save changes"))))),o.a.createElement("div",{className:"modal fade ".concat(this.state.addModal?"show":"hide"),id:"exampleModal",style:{display:"".concat(this.state.addModal?"block":""),paddingRight:"".concat(this.state.addModal?"17px":"")},tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},o.a.createElement("div",{className:"modal-dialog",role:"document"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("div",{className:"modal-header"},o.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Add Todo"),o.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},o.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),o.a.createElement("div",{className:"modal-body"},o.a.createElement("label",null,"Title"),o.a.createElement("input",{onChange:this.onChangeTitle.bind(this),className:"form-control",type:"text",name:"title",value:this.state.title}),o.a.createElement("label",null,"Due Date"),o.a.createElement("div",{className:"input-group"},o.a.createElement("div",{className:"input-group-append"},o.a.createElement(N.a,{className:"form-control",selected:new Date,timeFormat:"HH:mm",dateFormat:"MMMM d, yyyy h:mm aa",onChange:this.onChangeDate.bind(this)}),o.a.createElement("span",{className:"input-group-text",id:"basic-addon2"},o.a.createElement("i",{className:"fa fa-calendar"}))))),o.a.createElement("div",{className:"modal-footer"},o.a.createElement("button",{onClick:function(){e.onShowAddModal(),e.setState(function(e,t){return{title:""}})},type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"),o.a.createElement("button",{onClick:function(){e.onAdd(e.state.title,e.state.dueDate),e.onShowAddModal(),e.setState(function(e,t){return{title:""}})},type:"button",className:"btn btn-primary"},"Save changes"))))),o.a.createElement("div",{className:"modal modal-delete fade ".concat(this.state.delete?"show":"hide"),id:"deleteWarning",style:{display:"".concat(this.state.delete?"block":""),paddingRight:"".concat(this.state.delete?"17px":"")},tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},o.a.createElement("div",{className:"modal-dialog",role:"document"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("div",{className:"modal-header"},o.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Are you sure you want to do this?"),o.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},o.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),o.a.createElement("div",{className:"modal-body"},o.a.createElement("i",{class:"fas fa-exclamation-triangle"}),o.a.createElement("h5",null,"Deleting this will be permanently gone in your database")),o.a.createElement("div",{className:"modal-footer"},o.a.createElement("button",{onClick:function(){e.deleteWarning()},type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"),o.a.createElement("button",{onClick:function(){e.onDelete(e.state.todoId),e.deleteWarning(),e.setState(function(e,t){return{title:""}})},type:"button",className:"btn btn-primary"},"Delete"))))))}}]),t}(n.Component),w=function(e){function t(){return Object(s.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("footer",{className:"text-muted"},o.a.createElement("div",{className:"container"},o.a.createElement("p",{className:"float-right"},o.a.createElement("a",{href:"/"},"Back to top")),o.a.createElement("p",null,"Roel John Bobis \xa9 Basic Todo App created using ReactJS")))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).state={dropdown:!1,countNotification:""},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval(function(){return e.setState({countNotification:h.notification.length})},1e3)}},{key:"onShowNotification",value:function(){var e=this;this.setState(function(t,a){return{dropdown:!e.state.dropdown}})}},{key:"render",value:function(){return o.a.createElement("div",{className:"bg-dark"},o.a.createElement("div",{className:"container"},o.a.createElement("nav",{className:"navbar navbar-expand-lg"},o.a.createElement("a",{className:"navbar-brand",href:"#"},"Todo's React App"),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarsExample09","aria-controls":"navbarsExample09","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarsExample09"},o.a.createElement("ul",{className:"navbar-nav mr-auto"}),o.a.createElement("div",{className:"dropdown ".concat(this.state.dropdown?"show":"hide")},o.a.createElement("a",{onClick:this.onShowNotification.bind(this),className:"btn btn-notification",role:"button",id:"dropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},o.a.createElement("i",{className:"fas fa-bell"})," ",o.a.createElement("span",{className:"badge badge-light"},this.state.countNotification)),o.a.createElement("div",{className:"dropdown-menu ".concat(this.state.dropdown?"show":"hide"),"aria-labelledby":"dropdownMenuLink"},h.notification.map(function(e,t){return o.a.createElement("a",{className:"dropdown-item",href:"#"},e.title)})))))))}}]),t}(n.Component);a(74),a(75),a(76);var M=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(C,null),o.a.createElement("main",{role:"main"},o.a.createElement("section",{className:"jumbotron text-center todo-jumbotron"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"jumbotron-heading"},"Todo Demo"),o.a.createElement("p",{className:"lead text-muted"},"This demo is just portfolio purpose only. I'm not intend to sell this react app. This todo app can do basic todo's function."),o.a.createElement("p",{className:"lead text-muted"},"Notes: This todo react app is not yet responsive. I have a plan but don't have a time yet. There are some features too that not yet available like the notification and even the alert message. "),o.a.createElement("p",null,o.a.createElement("a",{href:"/",className:"btn btn-primary m-2"},"Github"),o.a.createElement("a",{href:"/",className:"btn btn-secondary m-2"},"Documentation")))),o.a.createElement("div",{className:"album py-5 bg-light"},o.a.createElement("div",{className:"container"},o.a.createElement(i.a,{path:"/",exact:!0,component:function(){return o.a.createElement(k,null)}})))),o.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=a(26);c.a.render(o.a.createElement(S.a,{basename:"/rj-todo-list-demo"},o.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[42,1,2]]]);
//# sourceMappingURL=main.783ca271.chunk.js.map