(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,a,t){e.exports=t(59)},59:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(27),l=t.n(c),o=t(30),s=t(1);var m=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Google Books"),r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/search"},"Search")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"/saved"},"Saved"))))};var i=function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4"},"(React) Google Books Search"),r.a.createElement("p",{className:"lead"},"Search for and Save Books of Interest")))},u=t(9),h=t(10),d=t(12),v=t(11),f=t(13),E=function(e){function a(){return Object(u.a)(this,a),Object(d.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("h3",null,"This is the saved page."))}}]),a}(n.Component),p=t(28);var b=function(e){return r.a.createElement("form",null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"search"},"Book Search:"),r.a.createElement("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search for a book",id:"search"}),r.a.createElement("button",{onClick:e.handleFormSubmit,className:"btn btn-primary"},"Search")))))},g=t(29),N=t.n(g),k={search:function(e){return N.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)}},y=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(d.a)(this,(e=Object(v.a)(a)).call.apply(e,[this].concat(r)))).state={search:"",results:[]},t.searchBooks=function(e){k.search(e).then(function(e){return t.setState({results:e.data.items})}).then(console.log(t.state.results)).catch(function(e){return console.log(e)})},t.handleInputChange=function(e){var a=e.target.name,n=e.target.value;t.setState(Object(p.a)({},a,n))},t.handleFormSubmit=function(e){e.preventDefault(),t.searchBooks(t.state.search)},t}return Object(f.a)(a,e),Object(h.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement(b,{search:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}),this.state.results.map(function(e){return r.a.createElement("div",{className:"card col-10 d-flex justify-content-around"},r.a.createElement("div",{className:"col-lg-12",id:e.id,key:e.id},r.a.createElement("div",{className:"img-container"},r.a.createElement("h2",null,"Title: ",e.volumeInfo.title),r.a.createElement("h4",null,"By: ",e.volumeInfo.authors),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement("img",{alt:e.volumeInfo.title,src:e.volumeInfo.imageLinks.thumbnail})),r.a.createElement("div",{className:"col-9"},r.a.createElement("h4",null,"Synopsis:"),r.a.createElement("p",null,e.volumeInfo.description))),r.a.createElement("a",{href:e.volumeInfo.infoLink},"Take me to the book!"))))}))}}]),a}(n.Component);var S=function(){return r.a.createElement(o.a,null,r.a.createElement(m,null),r.a.createElement(i,null),r.a.createElement(s.a,{exact:!0,path:"/",component:y}),r.a.createElement(s.a,{exact:!0,path:"/search",component:y}),r.a.createElement(s.a,{exact:!0,path:"/saved",component:E}))};l.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.d501f46a.chunk.js.map