(this["webpackJsonpyou-must-click-it"]=this["webpackJsonpyou-must-click-it"]||[]).push([[0],{27:function(e,t,a){e.exports=a.p+"static/media/01.14f1d993.png"},28:function(e,t,a){e.exports=a.p+"static/media/02.cc9cfc9a.png"},29:function(e,t,a){e.exports=a.p+"static/media/03.f4922786.png"},30:function(e,t,a){e.exports=a.p+"static/media/04.cf7cb7a1.png"},31:function(e,t,a){e.exports=a.p+"static/media/05.3db7b274.png"},32:function(e,t,a){e.exports=a.p+"static/media/06.332ce66b.png"},33:function(e,t,a){e.exports=a.p+"static/media/07.96681a28.png"},34:function(e,t,a){e.exports=a.p+"static/media/08.00206022.png"},35:function(e,t,a){e.exports=a.p+"static/media/09.86271912.png"},36:function(e,t,a){e.exports=a.p+"static/media/10.e9dd10a2.png"},37:function(e,t,a){e.exports=a.p+"static/media/11.f4a01a07.png"},38:function(e,t,a){e.exports=a.p+"static/media/12.0d4ec343.png"},39:function(e,t,a){e.exports=a.p+"static/media/background.c08528bb.jpg"},47:function(e,t,a){e.exports=a(57)},53:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(12),c=a.n(r),s=(a(52),a(53),a(24)),i=a(25),l=a(44),u=a(26),m=a(46),g=a(9),p=a(42),f=a(19),d=a(41),h=a(21),v=a(45),k=a(22),w=a(43),S=a(27),y=a.n(S),b=a(28),E=a.n(b),x=a(29),C=a.n(x),M=a(30),A=a.n(M),j=a(31),O=a.n(j),I=a(32),B=a.n(I),T=a(33),D=a.n(T),G=a(34),N=a.n(G),Y=a(35),F=a.n(Y),J=a(36),K=a.n(J),L=a(37),P=a.n(L),W=a(38),z=a.n(W),$=a(39),q={color:"#ffffff",backgroundImage:"url(".concat(a.n($).a,")"),backgroundPosition:"center",backgroundSize:"cover"},H={columnCount:4},Q=[{image:y.a,alt:"Snowy mountains beyond a fall meadow with an elevated wooden path through it.",name:1},{image:E.a,alt:"Sheer rock mountain face rising above coniferous tree level.",name:2},{image:C.a,alt:"Looking out over a valley between sheer red rock cliffs with green along the valley river.",name:3},{image:A.a,alt:"Fog disguising sharp mountain peaks with rock faces and plants growing on steep inclines.",name:4},{image:O.a,alt:"Mountains rising above bright blue lake.",name:5},{image:B.a,alt:"Sunset over snowy mountain peaks.",name:6},{image:D.a,alt:"Snow covered mountains reflected in a lake.",name:7},{image:N.a,alt:"Sheer rock cliffs at a beach.",name:8},{image:F.a,alt:"Desert landscape with rock formations in the distance at sunset.",name:9},{image:K.a,alt:"Blunted mountains above a winding river with snowy peaks in the distance.",name:10},{image:P.a,alt:"Gently rising mountains covered in pathways with red and green flora.",name:11},{image:z.a,alt:"Looking down on Machu Picchu in the Andes on a sunny day.",name:12}];function R(e){for(var t=[],a=[],n=0;n<=e.length-1;n++)t.push(n);for(var o=function(e){for(var t,a,n=e.length;n>0;)a=Math.floor(Math.random()*n),t=e[--n],e[n]=e[a],e[a]=t;return e}(t),r=0;r<=o.length-1;r++)a.push(e[t[r].valueOf()]);return a}var U=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={images:[],clicked:[],currentClick:0,message:"Select any image to begin!",alertState:"secondary",score:0,topScore:0},a.handleClick=function(e){e.preventDefault();var t=a.state.clicked,n=e.target.name;a.setState({currentClick:e.target.name});var o,r=(o=n,t.filter((function(e){return parseInt(e)===parseInt(o)}))),c=a.state.topScore,s=a.state.score;console.log("the current score and highest score",s,c),0===r.length?(t.push(parseInt(n)),c<=s&&s<11?(a.setState({clicked:t,message:"Good work! Keep going!",alertState:"success",score:a.state.score+1,topScore:a.state.score+1}),a.shuffleAll()):c>s&&s<11?(a.setState({clicked:t,message:"Good work! Keep going!",alertState:"success",score:a.state.score+1}),a.shuffleAll()):c===s&&11===s?(a.setState({message:"Congratulations! You've won!",alertState:"success",score:a.state.score+1,topScore:a.state.score+1}),a.shuffleAll()):c>s&&11===s?(a.setState({message:"Congratulations! You've won!",alertState:"success",score:a.state.score+1}),a.shuffleAll()):a.setState({score:a.state.score+1,topScore:a.state.score+1})):(a.setState({clicked:[],message:"Oops! You've already selected that image. Try again!",alertState:"danger",score:0}),a.shuffleAll())},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=R(Q);this.setState({images:e})}},{key:"shuffleAll",value:function(){var e=R(Q);this.setState({images:e})}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,null,o.a.createElement(g.a.Brand,{href:"/you-must-click-it/"},"Mountain Memory"),o.a.createElement(g.a.Toggle,null),o.a.createElement(g.a.Collapse,{className:"justify-content-end"},o.a.createElement(g.a.Text,null,o.a.createElement(d.a,{"aria-label":"Basic example"},o.a.createElement(h.a,{variant:"secondary"},"Score: ",this.state.score),o.a.createElement(h.a,{variant:"warning"},"Top Score: ",this.state.topScore))))),o.a.createElement(p.a,{fluid:!0,style:q},o.a.createElement(f.a,null,o.a.createElement("h1",null,"Mountain Memory"),o.a.createElement("p",null,"Select each image once to win!"))),o.a.createElement(f.a,null,o.a.createElement(v.a,{className:"text-center",variant:this.state.alertState},this.state.message)),o.a.createElement(f.a,null,o.a.createElement(w.a,{style:H},this.state.images.map((function(t,a){return o.a.createElement(k.a,{className:"p-3"},o.a.createElement(k.a.Img,{key:a,name:t.name,variant:"top",src:t.image,alt:t.alt,onClick:e.handleClick}))})),";")))}}]),t}(o.a.Component);a(56);var V=function(){return o.a.createElement(U,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.e50e57eb.chunk.js.map