(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{174:function(e,t,a){e.exports=a(283)},252:function(e,t,a){},283:function(e,t,a){"use strict";a.r(t);a(175),a(225);var n=a(0),l=a.n(n),o=a(39),r=a.n(o),s=a(27),c=a.n(s),i=a(46),m=a(108),u=a(109),d=a(123),h=a(110),p=a(124),f=a(34),E=(a(251),a(252),a(6)),v=a(23),k=a.n(v),b=a(33),g=a.n(b),_=a(79),y=a.n(_),N=a(60),w=a.n(N),S=a(59),C=a.n(S),B=a(40),j=a.n(B),F=a(113),A=a.n(F),P=a(114),M=a.n(P),q=["linear-gradient(to right bottom, #c225fc, #ff8d82)","linear-gradient(to right bottom, #ff5adf, #ff8d82)","linear-gradient(to right bottom, #5058ff, #00f6ff)","linear-gradient(to top, #ff5adf, #ff8d82)","linear-gradient(to left, #c225fc, #ff8d82)","linear-gradient(to left, #ff5adf, #ff8d82)","linear-gradient(to left, #5058ff, #00f6ff)","linear-gradient(to bottom, #c225fc, #ff8d82)","linear-gradient(to bottom, #ff5adf, #ff8d82)","linear-gradient(to bottom, #5058ff, #00f6ff)","linear-gradient(to left bottom, #c225fc, #ff8d82)","linear-gradient(to left bottom, #ff5adf, #ff8d82)"],V=q[Math.floor(Math.random()*q.length)],O=function(e){var t=e.id,a=e.navigator,n=e.this;return l.a.createElement(k.a,{id:t},l.a.createElement(C.a,{style:{marginTop:"5px"},onClick:function(){return n.getProfile()},size:"l",before:l.a.createElement(w.a,{style:{marginTop:"5px"},size:55,src:n.state.photo_200})},l.a.createElement("div",{className:"namehome"},n.state.firstname," ",n.state.lastname),l.a.createElement("div",{className:"nearnamehome"},"\u0418\u0441\u0442\u043e\u0440\u0438\u044f: ",Object.keys(n.state.historylenght).length,", \u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435: ",Object.keys(n.state.favoritelength).length)),l.a.createElement("div",{className:"titless"},l.a.createElement(g.a,null,"\u0420\u0430\u0437\u0434\u0435\u043b\u044b")),1===n.state.is_group_member?l.a.createElement(y.a,{slideWidth:"95%"},l.a.createElement("div",{className:"blockblock",style:{background:V},onClick:function(){return a.go("biography")}},l.a.createElement("div",{className:"titleblock"},"\u0411\u0438\u043e\u0433\u0440\u0430\u0444\u0438\u0438 \u0430\u0432\u0442\u043e\u0440\u043e\u0432"))):l.a.createElement(y.a,{slideWidth:"95%"},l.a.createElement("div",{className:"resicle"},l.a.createElement("div",{className:"title"},"Xelene || Studio"),l.a.createElement(j.a,{onClick:function(){return n.Subscribe()},before:l.a.createElement(A.a,null),style:{background:"#00cabe"}},"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f")),l.a.createElement("div",{className:"blockblock",style:{background:V},onClick:function(){return a.go("biography")}},l.a.createElement("div",{className:"titleblock"},"\u0411\u0438\u043e\u0433\u0440\u0430\u0444\u0438\u0438 \u0430\u0432\u0442\u043e\u0440\u043e\u0432"))),l.a.createElement("div",{className:"titles"},l.a.createElement(g.a,null,"\u041a\u043d\u0438\u0433\u0438")),l.a.createElement("div",{className:"SearchMobile__input"},l.a.createElement("input",{placeholder:"\u041f\u043e\u0438\u0441\u043a",value:n.state.searchQuery,onChange:n.inputChange}),l.a.createElement("div",{className:"SearchMobile__to-filters-wrapper",onClick:function(){return n.setState({activeModal:"search"})}},l.a.createElement("span",{className:"SearchMobile__to-filters"})),l.a.createElement("div",{className:"SearchMobile__clear-wrapper"},l.a.createElement("span",{className:"SearchMobile__clear"}))),n.state.listbooks.map(function(e,t){return l.a.createElement("div",{key:t},l.a.createElement("div",{className:"allbooks"},l.a.createElement("img",{onClick:function(){return n.goBook(e.id)},alt:"\u043e\u0431\u043b\u043e\u0436\u043a\u0430",src:e.cover}),l.a.createElement("div",{onClick:function(){return n.goBook(e.id)},className:"content"},l.a.createElement("div",{onClick:function(){return n.goBook(e.id)},className:"contenttitle"},e.name),l.a.createElement("div",{className:"contentreyt"},e.rating),l.a.createElement("div",{onClick:function(){return n.goBook(e.id)},className:"contentauthor"},e.authors[0].first_name," ",e.authors[0].last_name),l.a.createElement("div",{onClick:function(){return n.goBook(e.id)},className:"contentviews"},"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432: ",e.views)),l.a.createElement("div",{className:"bottonfunctions",onClick:function(){n.setState({formodal_title:e.name,formodal_id:e.id}),n.openModalSettings(e.id)}},l.a.createElement(M.a,null))))}))},x=a(30),Z=a.n(x),W=function(e){var t=e.id,a=e.navigator;e.this;return l.a.createElement(k.a,{id:t},l.a.createElement("header",null,"\xa0"),l.a.createElement("div",{className:"titlesbiography",onClick:function(){return a.goBack()}},l.a.createElement(g.a,null,l.a.createElement(Z.a,{width:30,height:30,style:{display:"inline-block"}})," \u0410\u0432\u0442\u043e\u0440\u044b")),l.a.createElement("div",{className:"bookspopular",onClick:function(){return a.go("authorinfo")}},l.a.createElement("img",{alt:"\u043e\u0431\u043b\u043e\u0436\u043a\u0430",src:"http://1ul.ru/upload/file/publication/Pushkin.jpg"}),l.a.createElement("div",{className:"coslet"},l.a.createElement("div",{className:"contenttitle"},"\u0410.\u0421. \u041f\u0443\u0448\u043a\u0438\u043d"),l.a.createElement("div",{className:"contentauthor"},"\u0445\u0445.\u0445\u0445.\u0445\u0445\u0445\u0445"))),l.a.createElement("div",{className:"bookspopular",onClick:function(){return a.go("authorinfo")}},l.a.createElement("img",{alt:"\u043e\u0431\u043b\u043e\u0436\u043a\u0430",src:"https://img.labirint.ru/images/upl/descripts/pic_1532423481.png"}),l.a.createElement("div",{className:"coslet"},l.a.createElement("div",{className:"contenttitle"},"\u0412.\u0412. \u042f\u043a\u043e\u0432\u043b\u0435\u0432"),l.a.createElement("div",{className:"contentauthor"},"\u0445\u0445.\u0445\u0445.\u0445\u0445\u0445\u0445"))),l.a.createElement("div",{className:"bookspopular",onClick:function(){return a.go("authorinfo")}},l.a.createElement("img",{alt:"\u043e\u0431\u043b\u043e\u0436\u043a\u0430",src:"https://stuki-druki.com/biofoto2/Vadim-Yakovlev-01.jpg"}),l.a.createElement("div",{className:"coslet"},l.a.createElement("div",{className:"contenttitle"},"\u041d.\u0418. \u0424\u0430\u0434\u0435\u0435\u0432"),l.a.createElement("div",{className:"contentauthor"},"\u0445\u0445.\u0445\u0445.\u0445\u0445\u0445\u0445"))))},z=a(61),H=a.n(z),T=a(115),I=a.n(T),K=a(62),Q=a.n(K),D=a(116),G=a.n(D),L=a(117),R=a.n(L),X=function(e){var t=e.id,a=e.this;return l.a.createElement(k.a,{id:t},l.a.createElement("div",null,l.a.createElement("div",{className:"banner"},l.a.createElement("div",{className:"icontitle",onClick:function(){return a.goBack()}},l.a.createElement(Z.a,{width:28,height:28})),l.a.createElement("img",{alt:"\u041e\u0431\u043b\u043e\u0436\u043a\u0430",className:"banner__img",src:a.state.selected_book.cover})),l.a.createElement("div",{className:"titlebooksinfo"},a.state.selected_book.name),l.a.createElement("div",{className:"authorbooksinfo"},a.state.selected_book_authors_fist," ",a.state.selected_book_authors_two),l.a.createElement("div",{style:{display:"inline-block"}},l.a.createElement("div",{className:"rating",style:{marginLeft:"13px"}},l.a.createElement("span",{className:"raytingdal"},a.state.selected_book.rating),l.a.createElement("span",{className:"booksinfoview"},"(",a.state.selected_book.rated_count,")"),l.a.createElement("input",{type:"radio",id:"star5",className:"rating"}),l.a.createElement("label",{title:"Rocks!",style:a.state.selected_book.rating>=5?{color:"#fd7f10"}:null},"5 stars"),l.a.createElement("input",{type:"radio",id:"star4",className:"rating"}),l.a.createElement("label",{title:"Pretty good",style:a.state.selected_book.rating>=4?{color:"#fd7f10"}:null},"4 stars"),l.a.createElement("input",{type:"radio",id:"star3",className:"rating"}),l.a.createElement("label",{title:"Meh",style:a.state.selected_book.rating>=3?{color:"#fd7f10"}:null},"3 stars"),l.a.createElement("input",{type:"radio",id:"star2",className:"rating"}),l.a.createElement("label",{title:"Kinda bad",style:a.state.selected_book.rating>=2?{color:"#fd7f10"}:null},"2 stars"),l.a.createElement("input",{type:"radio",id:"star1",className:"rating"}),l.a.createElement("label",{title:"Sucks big time",style:a.state.selected_book.rating>=1?{color:"#fd7f10"}:null})),!1===a.state.is_rated?l.a.createElement("div",{className:"fidbacknone",onClick:function(){return a.setState({activeModal:"modals",commentforrezention_add:""})}},"\u041e\u0446\u0435\u043d\u0438\u0442\u044c"):null),l.a.createElement("div",{className:"nonamedivs"},l.a.createElement(j.a,{className:"normalbuttonfree",before:l.a.createElement(I.a,null),onClick:function(){return a.getReaderBook()}},"\u0427\u0438\u0442\u0430\u0442\u044c"),l.a.createElement(j.a,{className:"normalbuttontwo",onClick:function(){return a.shareauthor()}},l.a.createElement(R.a,null)),!0===a.state.is_favorite?l.a.createElement(j.a,{className:"normalbuttonone",onClick:function(){return a.deleteFavourite(a.state.selected_book.id)}},l.a.createElement(Q.a,null)):l.a.createElement(j.a,{className:"normalbuttonone",onClick:function(){return a.addFavourite(a.state.selected_book.id)}},l.a.createElement(H.a,null))),l.a.createElement("div",null,l.a.createElement("div",{className:"titlebooksinfos"},"\u041e \u043a\u043d\u0438\u0433\u0435"),l.a.createElement("div",{className:"textforbooksinfo"},a.state.selected_book.annotation),l.a.createElement(j.a,{className:"fidbackcomment",before:l.a.createElement(G.a,null),onClick:function(){return a.commentsGet(a.state.selected_book.id)}},"\u0420\u0435\u0446\u0435\u043d\u0437\u0438\u0438"))))},J="\u043d\u043e\u044f\u0431\u0440\u044f";var U=function(e){var t=e.id,a=e.this;return l.a.createElement(k.a,{id:t},l.a.createElement("header",null,"\xa0"),l.a.createElement("div",{className:"titlesbiography",onClick:function(){return a.setState({activeView:"home",activePanel:a.state.helpnavigation_array})}},l.a.createElement(g.a,null,l.a.createElement(Z.a,{width:30,height:30,style:{display:"inline-block"}})," \u041d\u0430\u0437\u0430\u0434")),l.a.createElement("div",{className:"errorcomments"},0===a.state.selected_book_comments.count?"\u0423\u043f\u0441, \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432 \u0435\u0449\u0435 \u043d\u0435\u0442!":null),a.state.selected_book_comments.items.map(function(e,t){return l.a.createElement(C.a,{onClick:function(){return a.openCommentAction(e.user.first_name,e.user.last_name,e.user.id,e.user.photo_200)},key:t,size:"l",before:l.a.createElement(w.a,{style:{marginTop:"5px"},size:55,src:e.user.photo_200})},l.a.createElement("div",{className:"namefa"},e.user.first_name," ",e.user.last_name),l.a.createElement("div",{className:"rating"},l.a.createElement("input",{type:"radio",id:"star5",className:"rating"}),l.a.createElement("label",{title:"Rocks!",style:e.rate>=5?{color:"#fd7f10"}:null},"5 stars"),l.a.createElement("input",{type:"radio",id:"star4",className:"rating"}),l.a.createElement("label",{title:"Pretty good",style:e.rate>=4?{color:"#fd7f10"}:null},"4 stars"),l.a.createElement("input",{type:"radio",id:"star3",className:"rating"}),l.a.createElement("label",{title:"Meh",style:e.rate>=3?{color:"#fd7f10"}:null},"3 stars"),l.a.createElement("input",{type:"radio",id:"star2",className:"rating"}),l.a.createElement("label",{title:"Kinda bad",style:e.rate>=2?{color:"#fd7f10"}:null},"2 stars"),l.a.createElement("input",{type:"radio",id:"star1",className:"rating"}),l.a.createElement("label",{title:"Sucks big time",style:e.rate>=1?{color:"#fd7f10"}:null})),l.a.createElement("div",{className:"commentstime"},new Date(1e3*e.date).getDate(),"\xa0",(0===(n=new Date(1e3*e.date).getMonth())&&(J="\u044f\u043d\u0432\u0430\u0440\u044f"),1===n&&(J="\u0444\u0435\u0432\u0440\u0430\u043b\u044f"),2===n&&(J="\u043c\u0430\u0440\u0442\u0430"),3===n&&(J="\u0430\u043f\u0440\u0435\u043b\u044f"),4===n&&(J="\u043c\u0430\u0439\u044f"),5===n&&(J="\u0438\u044e\u043d\u044f"),6===n&&(J="\u0438\u044e\u043b\u044f"),7===n&&(J="\u0430\u0432\u0433\u0443\u0441\u0442\u0430"),8===n&&(J="\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f"),9===n&&(J="\u043e\u043a\u0442\u044f\u0431\u0440\u044f"),10===n&&(J="\u043d\u043e\u044f\u0431\u0440\u044f"),void(11===n&&(J="\u0434\u0435\u043a\u0430\u0431\u0440\u044f"))),J,"\xa0",new Date(1e3*e.date).getFullYear(),"\xa0 (",new Date(1e3*e.date).getHours(),":",new Date(1e3*e.date).getMinutes(),")"),l.a.createElement("div",{className:"commentcom"},e.comment));var n}))},Y=function(e){var t=e.id,a=e.navigator,n=e.this;return l.a.createElement(k.a,{id:t},l.a.createElement("header",null,"\xa0"),l.a.createElement("div",{className:"titlesbiography",onClick:function(){return a.goBack()}},l.a.createElement(g.a,null,l.a.createElement(Z.a,{width:30,height:30,style:{display:"inline-block"}})," \u041d\u0430\u0437\u0430\u0434")),l.a.createElement("div",{className:"anotherblock"},l.a.createElement("div",{className:"anotherinfo"},l.a.createElement("div",null),l.a.createElement("div",{className:"anothertitle"},"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 \u041f\u0443\u0448\u0438\u043d"),l.a.createElement("div",{className:"anotherbutton",onClick:function(){return n.shareauthor()}},l.a.createElement("img",{className:"anotherbuttondown",src:"https://img.icons8.com/ios/50/000000/share.png",alt:""})),l.a.createElement("div",{className:"anotherannotation"},"\u041f\u043e\u044d\u0442"),l.a.createElement("div",{className:"prostoline"}),l.a.createElement("div",{className:"anothermiddletext"},"\u0410\u043b\u0435\u043a\u0441\u0430\u0301\u043d\u0434\u0440 \u0421\u0435\u0440\u0433\u0435\u0301\u0435\u0432\u0438\u0447 \u041f\u0443\u0301\u0448\u043a\u0438\u043d \u2014 \u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u043f\u043e\u044d\u0442, \u0434\u0440\u0430\u043c\u0430\u0442\u0443\u0440\u0433 \u0438 \u043f\u0440\u043e\u0437\u0430\u0438\u043a, \u0437\u0430\u043b\u043e\u0436\u0438\u0432\u0448\u0438\u0439 \u043e\u0441\u043d\u043e\u0432\u044b \u0440\u0443\u0441\u0441\u043a\u043e\u0433\u043e \u0440\u0435\u0430\u043b\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f, \u043a\u0440\u0438\u0442\u0438\u043a \u0438 \u0442\u0435\u043e\u0440\u0435\u0442\u0438\u043a \u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u044b, \u0438\u0441\u0442\u043e\u0440\u0438\u043a, \u043f\u0443\u0431\u043b\u0438\u0446\u0438\u0441\u0442; \u043e\u0434\u0438\u043d \u0438\u0437 \u0441\u0430\u043c\u044b\u0445 \u0430\u0432\u0442\u043e\u0440\u0438\u0442\u0435\u0442\u043d\u044b\u0445 \u043b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u043d\u044b\u0445 \u0434\u0435\u044f\u0442\u0435\u043b\u0435\u0439 \u043f\u0435\u0440\u0432\u043e\u0439 \u0442\u0440\u0435\u0442\u0438 XIX \u0432\u0435\u043a\u0430."),l.a.createElement("div",{className:"anotherblockforhard"},l.a.createElement("div",{className:"anotherhardinfo"},"\u0420\u043e\u0434\u0438\u043b\u0441\u044f: ",l.a.createElement("span",null,"9 \u043d\u043e\u044f\u0431\u0440\u044f 1818 \u0433., \u041e\u0440\u0451\u043b")),l.a.createElement("div",{className:"anotherhardinfo"},"\u0423\u043c\u0435\u0440: ",l.a.createElement("span",null,"3 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 1883 \u0433., \u0411\u0443\u0436\u0438\u0432\u0430\u043b\u044c, \u0424\u0440\u0430\u043d\u0446\u0438\u044f")),l.a.createElement("div",{className:"anotherhardinfo"},"\u0413\u043e\u0434\u044b \u0442\u0432\u043e\u0440\u0447\u0435\u0441\u0442\u0432\u0430: ",l.a.createElement("span",null,"1834\u20141883")),l.a.createElement("div",{className:"anotherhardinfo"},"\u042f\u0437\u044b\u043a \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0439: ",l.a.createElement("span",null,"\u0440\u0443\u0441\u0441\u043a\u0438\u0439"))))))},$=function(e){var t=e.id,a=e.this;return l.a.createElement(k.a,{id:t},l.a.createElement("div",{className:"test"},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.state.booktext}}),";"))},ee=a(80),te=a.n(ee),ae=function(e){var t=e.id,a=e.this;return l.a.createElement(k.a,{id:t},l.a.createElement("div",{className:"profile"},l.a.createElement("div",{className:"titlesbiography",onClick:function(){return a.goBack()}},l.a.createElement(Z.a,{width:30,height:30,style:{display:"inline-block"}})," \u041d\u0430\u0437\u0430\u0434"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"titless"},"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"),l.a.createElement("br",null),l.a.createElement(te.a,null,l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",{style:{paddingLeft:4}},a.state.booksfavorite_array.map(function(e,t){return l.a.createElement("div",{key:t},l.a.createElement("div",{className:"allbooksprofile"},l.a.createElement("img",{onClick:function(){return a.goBook(e.id)},alt:"\u043e\u0431\u043b\u043e\u0436\u043a\u0430",src:e.cover}),l.a.createElement("div",{onClick:function(){return a.goBook(e.id)},className:"content"},l.a.createElement("div",{onClick:function(){return a.goBook(e.id)},className:"contenttitle"},e.name),l.a.createElement("div",{className:"contentreyt"},e.rating),l.a.createElement("div",{onClick:function(){return a.goBook(e.id)},className:"contentauthor"},e.authors[0].first_name," ",e.authors[0].last_name),l.a.createElement("div",{onClick:function(){return a.goBook(e.id)},className:"contentviews"},"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432: ",e.views))))})))),l.a.createElement("br",null),l.a.createElement("div",{className:"titless"},"\u0418\u0441\u0442\u043e\u0440\u0438\u044f"),l.a.createElement(te.a,null,l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",{style:{paddingLeft:4}},a.state.bookshistory_array.map(function(e,t){return l.a.createElement("div",{key:t},l.a.createElement("div",{className:"allbooksprofile"},l.a.createElement("img",{onClick:function(){return a.goBook(e.id)},alt:"\u043e\u0431\u043b\u043e\u0436\u043a\u0430",src:e.cover}),l.a.createElement("div",{onClick:function(){return a.goBook(e.id)},className:"content"},l.a.createElement("div",{onClick:function(){return a.goBook(e.id)},className:"contenttitle"},e.name),l.a.createElement("div",{className:"contentreyt"},e.rating),l.a.createElement("div",{onClick:function(){return a.goBook(e.id)},className:"contentauthor"},e.authors[0].first_name," ",e.authors[0].last_name),l.a.createElement("div",{onClick:function(){return a.goBook(e.id)},className:"contentviews"},"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432: ",e.views))))}))))))},ne=a(118),le=a.n(ne),oe=a(119),re=a.n(oe),se=a(120),ce=a.n(se),ie=(a(275),a(121)),me=a.n(ie),ue=a(122),de=a.n(ue);a(276);de.a.init();var he=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).goBack=function(){var t=Object(i.a)(e.state.history);t.pop();var a=t[t.length-1];"home"===a&&c.a.send("VKWebAppDisableSwipeBack"),e.setState({history:t,activePanel:a,activeView:"home"})},e.goForward=function(t){var a=Object(i.a)(e.state.history);a.push(t),"home"===e.state.activePanel&&c.a.send("VKWebAppEnableSwipeBack"),e.setState({history:a,activePanel:t})},e.inputChange=function(t){clearTimeout(e.state.searchTimeout),e.setState({searchQuery:t.target.value,searchTimeout:setTimeout(e.search,510)})},e.search=function(){e.state.searchQuery.length>=4&&fetch(e.state.api_url+"method=search.getResults&type="+e.state.radio+"&count=100&q="+e.state.searchQuery+"&"+window.location.search.replace("?","")).then(function(e){return e.json()}).then(function(t){t.response?(e.setState({searchresult:t.response}),e.setState({booksresult_serch:t.response.books}),e.setState({athorssresult_serch:t.response.authors})):(e.setState({errorcodeforalert:t.error.message}),e.showZaprosFailedAun())}).catch(function(t){e.showZaprosFailedAun()})},e.state={activePanel:"home",activeView:"home",popout:null,api_url:"https://api.xelene.me/book/?",errorcodeforalert:"",helpnavigationg_array:"home",test:{},listbooks:[],authors_array:null,selected_book_authors_fist:"",selected_book_authors_two:"",selected_book:{},selected_book_authors:[],selected_book_comments:[],selected_book_comments_enter:[],searchresult:[],activeModal:null,modalHistory:[],formodal_title:"",formodal_id:1,is_favorite:!1,is_rated:!0,is_group_member:1,reyt:0,searchQuery:"",searchTimeout:0,commentforrezention_add:null,radio:"1",booktext:l.a.createElement("div",null),firstname:"\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0439",lastname:"\u0422\u0435\u0441\u0442",photo_200:null,history:["home"],bookhistory:null,bookfavorite:null,bookshistory_array:[],booksfavorite_array:[],favorite_array:[],history_array:[],favoritelength:[],historylenght:[]},e.closePopout=e.closePopout.bind(Object(f.a)(Object(f.a)(e))),e.Subscribe=e.Subscribe.bind(Object(f.a)(Object(f.a)(e))),e.modalBack=function(){e.setActiveModal(e.state.modalHistory[e.state.modalHistory.length-2])},e.onCommentChange=e.onCommentChange.bind(Object(f.a)(Object(f.a)(e))),e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"setActiveModal",value:function(e){e=e||null;var t=this.state.modalHistory?Object(i.a)(this.state.modalHistory):[];null===e?t=[]:-1!==t.indexOf(e)?t=t.splice(0,t.indexOf(e)+1):t.push(e),this.setState({activeModal:e,modalHistory:t})}},{key:"componentDidMount",value:function(){var e=this;c.a.send("VKWebAppGetUserInfo",{}),c.a.subscribe(function(t){var a=t.detail,n=a.type,l=a.data;"VKWebAppGetUserInfoResult"===n?e.setState({firstname:l.first_name,lastname:l.last_name,timezone:l.timezone,photo_200:l.photo_200}):"VKWebAppGetUserInfoFailed"===n&&console.log(l)}),this.setState({popout:l.a.createElement("div",{className:"loader"},l.a.createElement("div",{className:"l_main"},l.a.createElement("div",{className:"l_square"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("div",{className:"l_square"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("div",{className:"l_square"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("div",{className:"l_square"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null))))}),fetch(this.state.api_url+"method=account.get&"+window.location.search.replace("?","")).then(function(e){return e.json()}).then(function(t){e.setState({is_group_member:t.response.is_group_member,favoritelength:t.response.favorite,historylenght:t.response.books_history})}).catch(function(t){e.setState({errorcodeforalert:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u043e\u0432\u043a\u0438 \u043f\u043e\u0434\u043f\u0438\u0441\u0438! \u0417\u0430\u0439\u0434\u0438\u0442\u0435 \u0447\u0435\u0440\u0435\u0437 \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435."}),e.showZaprosFailedAun()}),fetch(this.state.api_url+"method=books.get&"+window.location.search.replace("?","")).then(function(e){return e.json()}).then(function(t){t.response?e.setState({listbooks:t.response,popout:null}):(e.setState({errorcodeforalert:t.error.message}),e.showZaprosFailedAun())}).catch(function(t){e.setState({errorcodeforalert:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u043e\u0432\u043a\u0438 \u043f\u043e\u0434\u043f\u0438\u0441\u0438! \u0417\u0430\u0439\u0434\u0438\u0442\u0435 \u0447\u0435\u0440\u0435\u0437 \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435."}),e.showZaprosFailedAun()}),c.a.send("VKWebAppSetViewSettings",{status_bar_style:"dark"})}},{key:"Subscribe",value:function(){c.a.send("VKWebAppJoinGroup",{group_id:183054783})}},{key:"addFavourite",value:function(e){var t=this;this.setState({popout:l.a.createElement("div",{className:"loader"},l.a.createElement("div",{className:"l_main"},l.a.createElement("div",{className:"l_square"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("div",{className:"l_square"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("div",{className:"l_square"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("div",{className:"l_square"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)))),activeModal:null}),fetch(this.state.api_url+"method=favorite.add&book_id="+e+"&"+window.location.search.replace("?","")).then(function(e){return e.json()}).then(function(e){e.response?t.setState({popout:null,is_favorite:!0}):(t.setState({errorcodeforalert:e.error.message}),t.showZaprosFailedAun())}).catch(function(e){t.showZaprosFailedAun()})}},{key:"deleteFavourite",value:function(e){var t=this;this.setState({popout:l.a.createElement("div",{className:"loader"},l.a.createElement("div",{className:"l_main"},l.a.createElement("div",{className:"l_square"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("div",{className:"l_square"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("div",{className:"l_square"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("div",{className:"l_square"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)))),activeModal:null}),fetch(this.state.api_url+"method=favorite.delete&book_id="+e+"&"+window.location.search.replace("?","")).then(function(e){return e.json()}).then(function(e){e.response?t.setState({popout:null,is_favorite:!1}):(t.setState({errorcodeforalert:e.error.message}),t.showZaprosFailedAun())}).catch(function(e){t.showZaprosFailedAun()})}},{key:"shareauthor",value:function(){this.setState({activeModal:null}),c.a.send("VKWebAppShowWallPostBox",{message:"\u041d\u0435 \u0442\u0435\u0441\u0442\u0438\u043c!",attachments:"vk.com/books_app"})}},{key:"goBook",value:function(e){var t=this;this.setState({activeModal:null,popout:l.a.createElement("div",{className:"loader"},l.a.createElement("div",{className:"l_main"},l.a.createElement("div",{className:"l_square"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("div",{className:"l_square"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("div",{className:"l_square"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("div",{className:"l_square"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null))))}),fetch(this.state.api_url+"method=book.getById&book_id="+e+"&"+window.location.search.replace("?","")).then(function(e){return e.json()}).then(function(e){e.response?(t.setState({selected_book:e.response,popout:null,activeView:"home",activePanel:"bookinfo"}),t.setState({selected_book_authors:t.state.selected_book.authors}),t.setState({selected_book_authors_fist:t.state.selected_book_authors[0].first_name,selected_book_authors_two:t.state.selected_book_authors[0].last_name}),t.setState({is_favorite:t.state.selected_book.is_favorite}),t.setState({is_rated:t.state.selected_book.is_rated,history:[].concat(Object(i.a)(t.state.history),["home"])})):(t.setState({errorcodeforalert:e.error.message}),t.showZaprosFailedAun())}).catch(function(e){t.showZaprosFailedAun()})}},{key:"getProfile",value:function(){var e=this;fetch(this.state.api_url+"method=account.get&"+window.location.search.replace("?","")).then(function(e){return e.json()}).then(function(t){t.response&&e.setState({is_group_member:t.response.is_group_member,favorite_array:t.response.favorite,history_array:t.response.books_history,activeView:"profile",activePanel:"profile",history:[].concat(Object(i.a)(e.state.history),["home"])}),e.getBooksForProfileHistory(),e.getBooksForProfileFavorite()})}},{key:"getBooksForProfileHistory",value:function(){var e=this;fetch(this.state.api_url+"method=books.getByIds&book_ids="+this.state.history_array.join()+"&"+window.location.search.replace("?","")).then(function(e){return e.json()}).then(function(t){e.setState({bookshistory_array:t.response})}).catch(function(t){e.showZaprosFailedAun()})}},{key:"getBooksForProfileFavorite",value:function(){var e=this;fetch(this.state.api_url+"method=books.getByIds&book_ids="+this.state.favorite_array.join()+"&"+window.location.search.replace("?","")).then(function(e){return e.json()}).then(function(t){e.setState({booksfavorite_array:t.response})}).catch(function(t){e.showZaprosFailedAun()})}},{key:"commentsGet",value:function(e){var t=this;this.setState({popout:l.a.createElement("div",{className:"loader"},l.a.createElement("div",{className:"l_main"},l.a.createElement("div",{className:"l_square"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("div",{className:"l_square"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("div",{className:"l_square"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("div",{className:"l_square"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null))))}),fetch(this.state.api_url+"method=comments.get&book_id="+e+"&"+window.location.search.replace("?","")).then(function(e){return e.json()}).then(function(e){e.response?(t.setState({selected_book_comments:e.response}),t.setState({popout:null,activeView:"bookscomment",activePanel:"bookscomment",helpnavigation_array:"bookinfo"})):(t.setState({errorcodeforalert:e.error.message}),t.showZaprosFailedAun())}).catch(function(e){t.showZaprosFailedAun()})}},{key:"commentsAdd",value:function(e){var t=this;this.setState({popout:l.a.createElement("div",{className:"loader"},l.a.createElement("div",{className:"l_main"},l.a.createElement("div",{className:"l_square"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("div",{className:"l_square"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("div",{className:"l_square"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("div",{className:"l_square"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null))))}),fetch(this.state.api_url+"method=comment.add&book_id="+e+"&rate="+this.state.reyt+"&comment="+this.state.commentforrezention_add+"&"+window.location.search.replace("?","")).then(function(e){return e.json()}).then(function(e){e.response?t.setState({activeModal:null,popout:null,is_rated:!0}):(t.setState({errorcodeforalert:e.error.message}),t.showZaprosFailedAun())}).catch(function(e){t.showZaprosFailedAun()})}},{key:"openCommentAction",value:function(e,t,n,o){var r=this,s=a(281).parse(window.location.search.replace("?","")),c=(new Date).getTime(),i=new Date(1574503533676).getHours();console.log(c,"\u0430\u0430\u0430",i),this.setState({popout:l.a.createElement(E.a,{onClose:function(){return r.setState({popout:null})}},l.a.createElement(E.b,{autoclose:!0,before:l.a.createElement(E.d,{size:35,src:o})},l.a.createElement("a",{className:"noselectuser",component:"a",target:"_blank",href:"https://vk.com/id"+n},e," ",t)),console.log("\u041f\u0440\u0438\u0448\u0435\u0434\u0448\u0438\u0439 id \u0441 \u043f\u043e\u0434\u043f\u0438\u0441\u0438: "+s.vk_user_id),console.log("Id \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f: "+n),String(s.vk_user_id)===String(n)?l.a.createElement(E.b,{autoclose:!0,before:l.a.createElement(me.a,null)},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"):null,l.a.createElement(E.b,{autoclose:!0,theme:"cancel"},"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"))})}},{key:"showZaprosFailedAun",value:function(){this.setState({popout:l.a.createElement(E.c,{actionsLayout:"vertical",actions:[{title:"\u041e\u0442\u043c\u0435\u043d\u0430",autoclose:!0,style:"cancel"}],onClose:this.closePopout},l.a.createElement("h2",null,"\u041e\u0448\u0438\u0431\u043a\u0430"),l.a.createElement("p",null,this.state.errorcodeforalert))})}},{key:"closePopout",value:function(){this.setState({popout:null})}},{key:"getReaderBook",value:function(){var e=this,t=new XMLHttpRequest;t.open("GET","https://xelene.me/books/sources/1/book.html",!0),t.send(),t.onreadystatechange=function(){if(4===t.readyState&&200===t.status){var a=t.responseText;e.setState({booktext:a,activeView:"reader",activePanel:"reader"})}},t.onerror=function(e){console.error(e)}}},{key:"onCommentChange",value:function(e){this.setState({commentforrezention_add:e.target.value})}},{key:"openModalSettings",value:function(e){var t=this;fetch(this.state.api_url+"method=book.isFavorite&book_id="+e+"&"+window.location.search.replace("?","")).then(function(e){return e.json()}).then(function(e){t.setState({activeModal:"modal",is_favorite:e.response})}).catch(function(e){t.setState({errorcodeforalert:"\u0423\u043f\u0441. \u0427\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a."}),t.showZaprosFailedAun()})}},{key:"render",value:function(){var e=this,t=l.a.createElement(E.n,{activeModal:this.state.activeModal},l.a.createElement(E.l,{id:"search",onClose:this.modalBack,header:l.a.createElement(E.m,{right:l.a.createElement(E.j,{onClick:this.modalBack},"\u0413\u043e\u0442\u043e\u0432\u043e")},"\u0424\u0438\u043b\u044c\u0442\u0440")},l.a.createElement(E.h,null,l.a.createElement("div",null,"1"===this.state.radio?l.a.createElement(E.o,{name:"radio",value:"1",defaultChecked:!0,onChange:function(t){e.setState({searchQuery:"",searchresult:null,radio:t.target.value})}},"\u041e\u0431\u0449\u0438\u0439 \u043f\u043e\u0438\u0441\u043a"):l.a.createElement(E.o,{name:"radio",value:"1",onChange:function(t){e.setState({searchQuery:"",searchresult:null,radio:t.target.value})}},"\u041e\u0431\u0449\u0438\u0439 \u043f\u043e\u0438\u0441\u043a"),"2"===this.state.radio?l.a.createElement(E.o,{name:"radio",value:"2",defaultChecked:!0,onChange:function(t){e.setState({searchQuery:"",searchresult:null,radio:t.target.value})}},"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0430\u0432\u0442\u043e\u0440\u0430\u043c"):l.a.createElement(E.o,{name:"radio",value:"2",onChange:function(t){e.setState({searchQuery:"",searchresult:null,radio:t.target.value})}},"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0430\u0432\u0442\u043e\u0440\u0430\u043c"),"3"===this.state.radio?l.a.createElement(E.o,{name:"radio",value:"3",defaultChecked:!0,onChange:function(t){e.setState({searchQuery:"",searchresult:null,radio:t.target.value})}},"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u043a\u043d\u0438\u0433\u0430\u043c"):l.a.createElement(E.o,{name:"radio",value:"3",onChange:function(t){e.setState({searchQuery:"",searchresult:null,radio:t.target.value})}},"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u043a\u043d\u0438\u0433\u0430\u043c")))),l.a.createElement(E.l,{id:"modals",onClose:this.modalBack,header:l.a.createElement(E.m,{right:l.a.createElement(E.j,{onClick:this.modalBack},"\u0413\u043e\u0442\u043e\u0432\u043e")},"\u0420\u0435\u0446\u0435\u043d\u0437\u0438\u044f")},l.a.createElement(E.h,null,l.a.createElement(E.i,{top:"\u041c\u043e\u0436\u0435\u0448\u044c \u0432\u044b\u0431\u0440\u0430\u0442\u044c, \u0447\u0442\u043e \u0445\u043e\u0447\u0435\u0448\u044c"},l.a.createElement(E.q,{placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0446\u0435\u043d\u043a\u0443",onChange:function(t){e.setState({reyt:t.target.value})}},l.a.createElement("option",{value:"1"},"1"),l.a.createElement("option",{value:"2"},"2"),l.a.createElement("option",{value:"3"},"3"),l.a.createElement("option",{value:"4"},"4"),l.a.createElement("option",{value:"5"},"5"))),l.a.createElement(E.i,{maxLength:"2000",top:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"},l.a.createElement(E.r,{placeholder:"\u0422\u0443\u0442 \u043d\u0430\u043f\u0438\u0448\u0438 \u0441\u0432\u043e\u044e \u043e\u0446\u0435\u043d\u043a\u0443, \u043d\u043e \u043f\u043e\u043c\u043d\u0438, \u0447\u0442\u043e \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u0432\u0438\u0434\u0435\u043d \u0432\u0441\u0435\u043c!",value:this.state.commentforrezention_add,onChange:this.onCommentChange})),l.a.createElement(E.i,null,l.a.createElement(E.e,{className:"modalfidback",before:l.a.createElement(le.a,null),onClick:function(){return e.commentsAdd(e.state.selected_book.id)}},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")))),l.a.createElement(E.l,{id:"modal",onClose:this.modalBack,header:l.a.createElement(E.m,{right:l.a.createElement(E.j,{onClick:this.modalBack},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c")},this.state.formodal_title)},l.a.createElement(E.k,null,!0===this.state.is_favorite?l.a.createElement(E.f,{style:{userSelect:"none"},before:l.a.createElement(Q.a,null),onClick:function(){return e.deleteFavourite(e.state.formodal_id)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e"):l.a.createElement(E.f,{style:{userSelect:"none"},before:l.a.createElement(H.a,null),onClick:function(){return e.addFavourite(e.state.formodal_id)}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"),l.a.createElement(E.f,{style:{userSelect:"none"},before:l.a.createElement(ce.a,null),onClick:function(){return e.shareauthor()}},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f"),l.a.createElement(E.f,{style:{userSelect:"none"},before:l.a.createElement(re.a,null),onClick:function(){return e.goBook(e.state.formodal_id)}},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c"))));return l.a.createElement(E.g,{isWebView:!0},l.a.createElement(E.p,{activeView:this.state.activeView},l.a.createElement(E.s,{id:"home",activePanel:this.state.activePanel,popout:this.state.popout,header:!1,modal:t,onSwipeBack:this.goBack,history:this.state.history},l.a.createElement(O,{id:"home",go:this.go,this:this,onSwipeBack:this.goBack,history:this.state.history}),l.a.createElement(W,{id:"biography",go:this.go,this:this}),l.a.createElement(X,{id:"bookinfo",go:this.go,this:this}),l.a.createElement(Y,{id:"authorinfo",go:this.go,this:this})),l.a.createElement(E.s,{id:"bookscomment",activePanel:this.state.activePanel,popout:this.state.popout,header:!1},l.a.createElement(U,{id:"bookscomment",go:this.go,this:this})),l.a.createElement(E.s,{id:"reader",activePanel:this.state.activePanel,popout:this.state.popout,header:!1},l.a.createElement($,{id:"reader",go:this.go,this:this})),l.a.createElement(E.s,{id:"profile",activePanel:this.state.activePanel,popout:this.state.popout,header:!1},l.a.createElement(ae,{id:"profile",go:this.go,this:this}))))}}]),t}(l.a.Component);c.a.subscribe(function(e){return console.log(e)}),c.a.send("VKWebAppInit",{}),r.a.render(l.a.createElement(he,null),document.getElementById("root"))}},[[174,1,2]]]);
//# sourceMappingURL=main.94650e2f.chunk.js.map