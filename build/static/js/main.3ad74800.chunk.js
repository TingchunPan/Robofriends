(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),s=n.n(c),i=(n(12),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),s(e),i(e)}))}),a=(n(13),n(2)),o=n(3),h=n(5),l=n(4),b=n(0),u=function(e){var t=e.name,n=e.email;return Object(b.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(b.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(e.id,"?set=set4&size=200x200")}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("p",{children:n})]})]})},d=function(e){var t=e.robots,n=t.map((function(e,n){return Object(b.jsx)(u,{id:t[n].id,name:t[n].name,email:t[n].email},n)}));return Object(b.jsx)("div",{children:n})},j=function(e){e.searchfield;var t=e.searchChange;return Object(b.jsx)("div",{className:"pa2",children:Object(b.jsx)("input",{className:"pa3 ba b--green bg-lightst-blue",type:"sea rch",placeholder:"Search Kittens",onChange:t})})},f=(n(15),function(e){return Object(b.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"500px"},children:e.children})}),O=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={isError:!1},r}return Object(o.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({isError:!0})}},{key:"render",value:function(){return this.state.isError?Object(b.jsx)("h1",{children:"Oops! Error"}):this.props.children}}]),n}(r.Component),p=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(b.jsx)(j,{searchChange:this.onSearchChange}),Object(b.jsx)(f,{children:Object(b.jsx)(O,{children:Object(b.jsx)(d,{robots:r})})})]}):Object(b.jsx)("h1",{children:"Loading"})}}]),n}(r.Component);s.a.render(Object(b.jsx)(p,{}),document.getElementById("root")),i()}},[[16,1,2]]]);
//# sourceMappingURL=main.3ad74800.chunk.js.map