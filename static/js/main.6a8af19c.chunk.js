(this["webpackJsonpblog-giorgia"]=this["webpackJsonpblog-giorgia"]||[]).push([[0],{167:function(e,t,a){},268:function(e,t,a){e.exports=a(455)},453:function(e,t,a){},454:function(e,t,a){},455:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(65),i=a.n(o),c=(a(167),a(16)),r=a(17),s=a(18),m=a(19),u=a(20),h=a(24),d=a(57),g=(a(126),a(466)),p=a(467),b=a(456),E=a(58),f=a(474),v=a(472),C=a(256),y=a(468),k=a(479),S=a(34),O=window.innerWidth>1224?9:6,w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handlePageChange=function(e,t){var n=t.activePage;a.setState({activePage:n}),document.documentElement.scrollTop=0,a.props.rememberPage(n)},a.state={articles:[],activePage:a.props.activePage,search:a.props.search},a.listArticles=a.listArticles.bind(Object(h.a)(a)),a.handlePageChange=a.handlePageChange.bind(Object(h.a)(a)),a.updateSearch=a.updateSearch.bind(Object(h.a)(a)),a.cancelSearch=a.cancelSearch.bind(Object(h.a)(a)),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.listArticles()}},{key:"listArticles",value:function(){var e=this;fetch("http://2.238.196.146:4000/Blog").then((function(e){return e.json()})).then((function(t){e.setState({articles:t})}))}},{key:"updateSearch",value:function(e){this.props.updateSearch(e),this.setState({activePage:1})}},{key:"cancelSearch",value:function(){this.props.cancelSearch(),this.setState({activePage:1})}},{key:"render",value:function(){var e=this,t=this.state.articles.filter((function(t){return-1!==t.Titolo.toLowerCase().indexOf(e.props.search.toLowerCase())||-1!==t.Sottotitolo.toLowerCase().indexOf(e.props.search.toLowerCase())}));return l.a.createElement(g.a,null,l.a.createElement("style",null,"\n            html, body {\n                background-color: #EDEAE5 !important;\n            }\n            "),l.a.createElement(g.a,{textAlign:"right"},l.a.createElement(p.a,{icon:"search",placeholder:"Search...",value:this.props.search,onChange:this.updateSearch,color:"red"}),l.a.createElement(b.a,{onClick:this.cancelSearch},l.a.createElement(E.a,{name:"cancel"}))),0===t.length&&l.a.createElement(g.a,null,"Nessun Risultato"),l.a.createElement("center",null,l.a.createElement(f.a,{stackable:!0,columns:3},t.slice((this.state.activePage-1)*O,(this.state.activePage-1)*O+O).map((function(e){return l.a.createElement(f.a.Column,{key:e._id},l.a.createElement(S.b,{to:"articolo?id="+e._id},l.a.createElement(v.a,{key:e._id,style:{backgroundColor:"#c997ac"}},l.a.createElement(C.a,{src:e.Immagine,wrapped:!0,ui:!1}),l.a.createElement(v.a.Content,null,l.a.createElement(v.a.Header,null,e.Titolo),l.a.createElement(v.a.Meta,null,l.a.createElement("span",{className:"date"},e.Data.slice(0,10))),l.a.createElement(v.a.Description,null,e.Sottotitolo)))))})))),l.a.createElement(y.a,null),l.a.createElement("center",null,l.a.createElement(k.a,{activePage:this.state.activePage,onPageChange:this.handlePageChange,boundaryRange:0,siblingRange:2,ellipsisItem:null,firstItem:null,lastItem:null,size:window.innerWidth>1224?"large":"mini",totalPages:Math.ceil(t.length/O),style:{backgroundColor:"#d4abbc"}})))}}]),t}(n.Component),x=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{position:"relative"}},l.a.createElement("style",null,"\n            html, body {\n                background-color: #EDEAE5 !important;\n            }\n            "))}}]),t}(n.Component),j=a(477),P=a(470),T=a(475),I=a(476),A=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(g.a,null,l.a.createElement("style",null,"\n            html, body {\n                background-color: #EDEAE5 !important;\n            }\n            "),l.a.createElement(f.a,{stackable:!0,textAlign:"center"},l.a.createElement(f.a.Column,{style:{maxWidth:350}},l.a.createElement(j.a,{as:"h2",style:{color:"#556"},textAlign:"center"},"Contact Me"),l.a.createElement(P.a,{size:"large"},l.a.createElement(T.a,{stacked:!0,style:{backgroundColor:"#dcbcc9"}},l.a.createElement(f.a,{centered:!0},l.a.createElement(f.a.Row,null,l.a.createElement(I.a,{style:{backgroundColor:"#c997ac"}},l.a.createElement(I.a.Item,{icon:"instagram"}),l.a.createElement(I.a.Item,null,"@giorgianonsoilcognome"))),l.a.createElement(f.a.Row,null,l.a.createElement(I.a,{style:{backgroundColor:"#c997ac"}},l.a.createElement(I.a.Item,{icon:"mail outline"}),l.a.createElement(I.a.Item,null,"giorgianonsoilcognome@gmail.com")))))))))}}]),t}(n.Component),z=a(31),M=a(471),D=a(41),N=a.n(D),B=a(257),L=a(469),R=a(76),W=a.n(R);W.a.config();var G=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={Titolo:a.props.articolo.Titolo,Sottotitolo:a.props.articolo.Sottotitolo,Immagine:a.props.articolo.Immagine,Testo:a.props.articolo.Testo},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"update",value:function(){N.a.post("http://2.238.196.146:4000/Blog/update/"+this.props.articolo._id,{Titolo:this.state.Titolo,Sottotitolo:this.state.Sottotitolo,Immagine:this.state.Immagine,Testo:this.state.Testo},{headers:{Authorization:"4acc538f9b304b3984e448680d27bbba"}}).then((function(e){alert("Modificato"),window.location.reload(!0)}))}},{key:"handleChange",value:function(e){var t=Object(z.a)({},e.target.name,e.target.value);this.setState(t)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(M.a.Header,{style:{backgroundColor:"#c997ac"}},this.props.articolo.Titolo),l.a.createElement(M.a.Content,{image:!0,style:{backgroundColor:"#c997ac"}},l.a.createElement(C.a,{wrapped:!0,size:"medium",src:this.state.Immagine}),l.a.createElement(M.a.Description,null,l.a.createElement(P.a,{style:{width:"30em"}},l.a.createElement(P.a.Input,{style:{backgroundColor:"#efd8d8"},fluid:!0,label:"Titolo",value:this.state.Titolo,error:0===this.state.Titolo.length,name:"Titolo",onChange:this.handleChange.bind(this)}),l.a.createElement(P.a.Input,{style:{backgroundColor:"#efd8d8"},fluid:!0,label:"Link immagine",value:this.state.Immagine,error:0===this.state.Immagine.length,name:"Immagine",onChange:this.handleChange.bind(this)}),l.a.createElement(P.a.TextArea,{label:"Sottotitlo",name:"Sottotitolo",style:{minWidth:"90%",backgroundColor:"#efd8d8"},control:L.a,error:0===this.state.Sottotitolo.length,value:this.state.Sottotitolo,onChange:this.handleChange.bind(this)}),l.a.createElement(P.a.TextArea,{style:{backgroundColor:"#efd8d8"},label:"Testo",name:"Testo",control:L.a,error:0===this.state.Testo.length,value:this.state.Testo,onChange:this.handleChange.bind(this)})))),l.a.createElement(M.a.Actions,{style:{backgroundColor:"#c997ac"}},l.a.createElement(b.a,{negative:!0,onClick:this.props.close},l.a.createElement(E.a,{name:"delete"})," Annulla"),l.a.createElement(b.a,{positive:!0,onClick:this.update.bind(this)},l.a.createElement(E.a,{name:"checkmark"})," Modifica")))}}]),t}(l.a.Component);a(76).config();var H=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).delete=function(){N.a.delete("http://2.238.196.146:4000/Blog/delete/"+a.props.articolo._id,{headers:{Authorization:"4acc538f9b304b3984e448680d27bbba"},data:{}}).then((function(e){console.log("ELIMINATO"),window.location.reload(!0)}))},a.state={},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(j.a,{icon:"delete",content:"elimina articolo"}),l.a.createElement(M.a.Content,null,l.a.createElement("p",null,"Sei sicura di voler eliminare definitvamente l'articolo?")),l.a.createElement(M.a.Actions,null,l.a.createElement(b.a,{color:"red",onClick:this.delete},l.a.createElement(E.a,{name:"remove"})," Elimina"),l.a.createElement(b.a,{color:"grey",onClick:this.props.close},l.a.createElement(E.a,{name:"checkmark"})," Annulla")))}}]),t}(l.a.Component);W.a.config();var _=(new Date).toISOString(),F=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={Titolo:"",Sottotitolo:"",Immagine:"",Testo:""},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"create",value:function(){N.a.post("http://2.238.196.146:4000/Blog/add/",{Titolo:this.state.Titolo,Sottotitolo:this.state.Sottotitolo,Immagine:this.state.Immagine,Testo:this.state.Testo,Data:_},{headers:{Authorization:"4acc538f9b304b3984e448680d27bbba"}}).then((function(e){console.log("Creato, SS:",e.status),window.location.reload(!0)}))}},{key:"handleChange",value:function(e){var t=Object(z.a)({},e.target.name,e.target.value);this.setState(t)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(M.a.Header,{style:{backgroundColor:"#c997ac"}},"Aggiungi nuovo articolo"),l.a.createElement(M.a.Content,{style:{backgroundColor:"#c997ac"}},l.a.createElement(M.a.Description,null,l.a.createElement(P.a,{style:{width:"30em"}},l.a.createElement(P.a.Input,{style:{backgroundColor:"#efd8d8"},fluid:!0,label:"Titolo",value:this.state.Titolo,name:"Titolo",onChange:this.handleChange.bind(this)}),l.a.createElement(P.a.Input,{style:{backgroundColor:"#efd8d8"},fluid:!0,label:"Link immagine",value:this.state.Immagine,name:"Immagine",onChange:this.handleChange.bind(this)}),l.a.createElement(P.a.TextArea,{label:"Sottotitlo",name:"Sottotitolo",style:{minWidth:"90%",backgroundColor:"#efd8d8"},control:L.a,value:this.state.Sottotitolo,onChange:this.handleChange.bind(this)}),l.a.createElement(P.a.TextArea,{style:{backgroundColor:"#efd8d8"},label:"Testo",name:"Testo",control:L.a,value:this.state.Testo,onChange:this.handleChange.bind(this)})))),l.a.createElement(M.a.Actions,{style:{backgroundColor:"#c997ac"}},l.a.createElement(b.a,{color:"grey",onClick:this.props.close},l.a.createElement(E.a,{name:"delete"})," Annulla"),l.a.createElement(b.a,{positive:!0,onClick:this.create.bind(this)},l.a.createElement(E.a,{name:"checkmark"})," Crea nuovo articolo")))}}]),t}(l.a.Component);a(76).config();var U=window.innerWidth>1224?9:6,J=new B.a,$=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleClose=function(){a.setState({modalOpen:!1})},a.handleCloseM=function(){a.setState({modalOpenM:!1})},a.handleCloseC=function(){a.setState({modalOpenC:!1})},a.handlePageChange=function(e,t){var n=t.activePage;a.setState({activePage:n}),document.documentElement.scrollTop=0,a.props.rememberPage(n)},a.state={utente:"",psw:"",show:!1,data:[],modalOpen:!1,modalOpenM:!1,modalOpenC:!1,activePage:a.props.activePage,search:a.props.search},a.handlePageChange=a.handlePageChange.bind(Object(h.a)(a)),a.updateSearch=a.updateSearch.bind(Object(h.a)(a)),a.cancelSearch=a.cancelSearch.bind(Object(h.a)(a)),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.get("http://2.238.196.146:4000/Blog/").then((function(t){e.setState({data:t.data})})).catch((function(e){}))}},{key:"handleChange",value:function(e){var t=Object(z.a)({},e.target.name,e.target.value);this.setState(t)}},{key:"handleSubmit",value:function(e){"Password"===this.state.psw&&"Giorgia"===this.state.utente&&!1===this.state.show&&this.setState({show:!0})}},{key:"updateSearch",value:function(e){this.props.updateSearch(e),this.setState({activePage:1})}},{key:"cancelSearch",value:function(){this.props.cancelSearch(),this.setState({activePage:1})}},{key:"render",value:function(){var e=this,t=this.state.data.filter((function(t){return-1!==t.Titolo.toLowerCase().indexOf(e.props.search.toLowerCase())||-1!==t.Sottotitolo.toLowerCase().indexOf(e.props.search.toLowerCase())}));return this.handleShowM=function(t){e.setState({activeItem:t},(function(){return e.setState({modalOpenM:!0})}))},this.handleShow=function(t){e.setState({activeItem:t},(function(){return e.setState({modalOpen:!0})}))},this.handleShowC=function(){e.setState({modalOpenC:!0})},"Password"===this.state.psw&&"Giorgia"===this.state.utente&&!0===this.state.show||"Password"===J.get("psw")&&"Giorgia"===J.get("user")?l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{style:{marginTop:"7em"}},l.a.createElement("center",null,l.a.createElement("div",{style:{margin:"5%"}},l.a.createElement(b.a,{fluid:!0,positive:!0,onClick:this.handleShowC,style:{backgroundColor:"#846587"}},"Aggiungi nuovo articolo"))),l.a.createElement("style",null," html,\n            body {\n              background-color: #edeae5 !important;\n             }\n                "),l.a.createElement(g.a,{textAlign:"right"},l.a.createElement(p.a,{icon:"search",placeholder:"Search...",value:this.props.search,onChange:this.updateSearch,color:"red"}),l.a.createElement(b.a,{onClick:this.cancelSearch},l.a.createElement(E.a,{name:"cancel"}))),0==t.length&&l.a.createElement(g.a,null,"Nessun Risultato"),l.a.createElement(f.a,{stackable:!0,centered:!0,columns:3},t.slice((this.state.activePage-1)*U,(this.state.activePage-1)*U+U).map((function(t){return l.a.createElement(f.a.Column,{key:t._id},l.a.createElement("center",null,l.a.createElement(v.a,{key:t._id,style:{backgroundColor:"#c997ac"}},l.a.createElement(C.a,{src:t.Immagine,wrapped:!0,ui:!1}),l.a.createElement(v.a.Content,null,l.a.createElement(v.a.Header,null,t.Titolo),l.a.createElement(v.a.Meta,null,l.a.createElement("span",{className:"date"},t.Data.slice(0,10))),l.a.createElement(v.a.Description,null,t.Sottotitolo)),l.a.createElement("div",{style:{margin:"3%"}},l.a.createElement("center",null,l.a.createElement("div",null,l.a.createElement(f.a,{columns:2},l.a.createElement(f.a.Column,{floated:"left"},l.a.createElement(b.a,{onClick:function(){return e.handleShowM(t)},positive:!0,style:{backgroundColor:"#846587"}},"Modifica")),l.a.createElement(f.a.Column,{floated:"right"},l.a.createElement(b.a,{onClick:function(){return e.handleShow(t)},negative:!0,style:{backgroundColor:"#846587"}},"Elimina")))))))))}))),l.a.createElement(y.a,null),l.a.createElement("center",null,l.a.createElement(k.a,{activePage:this.state.activePage,onPageChange:this.handlePageChange,boundaryRange:0,siblingRange:2,ellipsisItem:null,firstItem:null,lastItem:null,size:window.innerWidth>1224?"large":"mini",totalPages:Math.ceil(t.length/U),style:{backgroundColor:"#d4abbc"}})),l.a.createElement(f.a.Column,null,l.a.createElement(M.a,{open:this.state.modalOpenM},l.a.createElement(G,{close:this.handleCloseM,articolo:this.state.activeItem}))),l.a.createElement(f.a.Column,null,l.a.createElement(M.a,{open:this.state.modalOpen},l.a.createElement(H,{close:this.handleClose,articolo:this.state.activeItem}))),l.a.createElement(f.a.Column,null,l.a.createElement(M.a,{open:this.state.modalOpenC},l.a.createElement(F,{close:this.handleCloseC}))))):l.a.createElement(g.a,null,l.a.createElement("center",null,l.a.createElement("style",null," html,\n            body {\n              background-color: #edeae5 !important;\n             }\n                "),l.a.createElement("div",null,l.a.createElement(P.a,{size:"large",onSubmit:this.handleSubmit.bind(this)},l.a.createElement(P.a.Field,null,l.a.createElement("label",null,"Utente"),l.a.createElement("input",{placeholder:"Utente",name:"utente",value:this.state.utente,onChange:this.handleChange.bind(this)})),l.a.createElement(P.a.Field,null,l.a.createElement("label",null,"Password"),l.a.createElement("input",{placeholder:"Password",type:"password",value:this.state.psw,name:"psw",onChange:this.handleChange.bind(this)})),l.a.createElement(b.a,{style:{backgroundColor:"#c997ac "},type:"submit",onClick:function(t){J.set("user",e.state.utente,{path:"/admin"}),J.set("psw",e.state.psw,{path:"/admin"})}},"Submit")))))}}]),t}(n.Component),q=a(252);function K(){var e=Object(q.a)(["\n  width: 100%;\n  border-bottom: 10px solid #EDEAE5;\n  z-index: 1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0px 100px 0;\n  height: 140px;\n  margin-bottom: 0px;\n  background: #EDEAE5;\n  position: fixed;\n  top: 0;\n  overflow: hidden;\n  z-index: 6;\n\n  .logo a {\n    padding-top: 33px;\n    display: flex;\n    flex-direction: column;\n    clear: both;\n    padding-bottom: 30px;\n    text-decoration: none;\n\n    p {\n        font-size: 1.6em;\n        color: #000;\n      width: 500px;\n      display: block;\n    }\n    em {\n      font-size: 0.5em;\n      float: left;\n      display: block;\n      img {\n        display: inline-block;\n        margin-top: 5px;\n        width: 15px;\n        float: left;\n      }\n      .letterhead {\n        display: inline-block;\n        line-height: 260%;\n        float: left;\n      }\n    }\n  }\n  .gray {\n    color: #ccc;\n  }\n  a {\n    opacity: 0.8;\n    transition: all 0.6s;\n    color: #222;\n    font-size: 1em;\n  }\n  a:hover {\n    opacity: 1;\n  }\n  .fa-bars {\n    display: none;\n    color: #222;\n    font-size: 2rem;\n  }\n  nav {\n    ul {\n      display: flex;\n      justify-content: space-between;\n    }\n    li {\n        color: #000;        \n      margin: 0 15px;\n      justify-content: space-between;\n      font-size: 1.6em;\n    }\n    a {\n      font-size: 1em;\n      text-decoration: none;\n      .active {\n        color: tomato;\n      }\n    }\n    a.active {\n      color: #222;\n    }\n  }\n\n  @media only screen and (max-width: 800px) {\n    padding: 0px;\n    .logo {\n      padding-left: 15px;\n      padding-top: 0px !important;\n    }\n  }\n  @media only screen and (max-width: 600px) {\n    height: 60px;\n    min-height: 50px;\n    display: block;\n    position: fixed;\n    .logo {\n      width: 100%;\n      display: block;\n      padding-top: 20px;\n      margin: 0px;\n      margin-left: -5px;\n      a {\n        padding: 10px 0px;\n      }\n    }\n    .fa-bars {\n      display: inline-block;\n      position: absolute;\n      top: 10px;\n      right: 10px;\n      cursor: pointer;\n    }\n    ul.collapsed {\n      width: 100%;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      flex-wrap: wrap;\n\n      overflow: hidden;\n      max-height: 0;\n      -moz-transition-duration: 0.4s;\n      -webkit-transition-duration: 0.4s;\n      -o-transition-duration: 0.4s;\n      transition-duration: 0.4s;\n      -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);\n      -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);\n      -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);\n      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);\n\n      &.is-expanded {  \n        overflow: hidden;\n        max-height: 500px; /* approximate max height */\n        -moz-transition-duration: 0.4s;\n        -webkit-transition-duration: 0.4s;\n        -o-transition-duration: 0.4s;\n        transition-duration: 0.4s;\n        -moz-transition-timing-function: ease-in;\n        -webkit-transition-timing-function: ease-in;\n        -o-transition-timing-function: ease-in;\n        transition-timing-function: ease-in;\n      }\n      li {\n        padding: 15px 10px;\n        margin: 0px 0px;\n        width: 100%;\n      }\n    }\n  }\n"]);return K=function(){return e},e}var Q=a(253).a.header(K()),V=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={isExpanded:!1},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleToggle",value:function(e){e.preventDefault(),this.setState({isExpanded:!this.state.isExpanded});var t=document.getElementById("nav");"auto"===t.style.height?t.style.height="60px":t.style.height="auto"}},{key:"setMargin",value:function(){setTimeout((function(){var e=document.getElementById("nav");console.log(e.offsetHeight),document.getElementById("main").style.marginTop=e.offsetHeight+"px"}),400),console.log("MARGIN")}},{key:"render",value:function(){var e=this,t=this.state.isExpanded;return l.a.createElement(Q,{id:"nav"},l.a.createElement("div",{className:"logo"},l.a.createElement(S.b,{to:"/"},l.a.createElement("p",null,"BLOG GIORGIA"))),l.a.createElement("nav",{className:"nav"},l.a.createElement("i",{className:"fa fa-bars","aria-hidden":"true",onClick:function(t){return e.handleToggle(t)}}),l.a.createElement("ul",{className:"collapsed ".concat(t?"is-expanded":"")},l.a.createElement(S.c,{activeClassName:"active",to:"/"},l.a.createElement("li",null,"Home")),l.a.createElement(S.c,{activeClassName:"active",to:"/about",onClick:function(){document.documentElement.scrollTop=0}},l.a.createElement("li",null,"About")),l.a.createElement(S.c,{activeClassName:"active",to:"/contact",onClick:function(){document.documentElement.scrollTop=0}},l.a.createElement("li",null,"Contact")))))}}]),t}(n.Component),X=(a(453),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={title:"",date:"",text:"",image:"",subtitle:""},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.documentElement.scrollTop=0;var t=window.location.search,a=new URLSearchParams(t).get("id");N.a.get("http://2.238.196.146:4000/Blog/"+a).then((function(t){e.setState({title:t.data.Titolo,date:t.data.Data.slice(0,10),text:t.data.Testo,image:t.data.Immagine,subtitle:t.data.Sottotitolo})})).catch((function(e){alert("errore")}))}},{key:"render",value:function(){return l.a.createElement(g.a,null,l.a.createElement("style",null,"\n            html, body {\n                background-color: #EDEAE5 !important;\n            }\n\n            @media only screen and (min-width: 600px) {\n                .back-button {\n                    display: none\n                }\n            }\n            "),l.a.createElement(g.a,null,l.a.createElement(S.b,{to:"/",className:"back-button"},l.a.createElement(b.a,null,"Back"))),l.a.createElement("h1",{className:"title"},this.state.title),l.a.createElement("h2",{className:"sub"},this.state.subtitle),l.a.createElement(C.a,{style:{marginTop:"2em",marginBottom:"2em"},size:"big",src:this.state.image}),l.a.createElement("p",{className:"text"},this.state.text))}}]),t}(l.a.Component)),Y=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={articles:[],activePage:1,adminActivePage:1,search:""},e.rememberPage=e.rememberPage.bind(Object(h.a)(e)),e.rememberPageAdmin=e.rememberPageAdmin.bind(Object(h.a)(e)),e.updateSearch=e.updateSearch.bind(Object(h.a)(e)),e.cancelSearch=e.cancelSearch.bind(Object(h.a)(e)),e}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(){}},{key:"rememberPage",value:function(e){this.setState({activePage:e})}},{key:"rememberPageAdmin",value:function(e){this.setState({adminActivePage:e})}},{key:"updateSearch",value:function(e){this.setState({search:e.target.value}),console.log("update")}},{key:"cancelSearch",value:function(){this.setState({search:""})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement(V,null)),l.a.createElement("div",{className:"main",id:"main"},l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",render:function(){return l.a.createElement(w,{activePage:e.state.activePage,rememberPage:e.rememberPage,search:e.state.search,updateSearch:e.updateSearch,cancelSearch:e.cancelSearch})}}),l.a.createElement(d.a,{path:"/about",component:x}),l.a.createElement(d.a,{path:"/contact",component:A}),l.a.createElement(d.a,{path:"/admin",render:function(){return l.a.createElement($,{activePage:e.state.adminActivePage,rememberPage:e.rememberPageAdmin,search:e.state.search,updateSearch:e.updateSearch,cancelSearch:e.cancelSearch})}}),l.a.createElement(d.a,{path:"/articolo",component:X}))))}}]),t}(n.Component),Z=(a(454),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(S.a,null,l.a.createElement(Y,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[268,1,2]]]);
//# sourceMappingURL=main.6a8af19c.chunk.js.map