(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{555:function(e,t,n){},556:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(25),o=n.n(c),i=n(86),s=n(39),u=n(618),l=n(374),d=n(286),p=n(113),j=n(34),b=n(11),f=n(616),O=n(127),x=n(615),h=n(3),m=Object(a.createContext)({user:null,setUser:null,currentId:0,setCurrentId:null}),v=function(e){var t=Object(a.useState)(JSON.parse(localStorage.getItem("profile"))),n=Object(b.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(0),i=Object(b.a)(o,2),s=i[0],u=i[1],l=Object(O.b)({overrides:{MuiCssBaseline:{"@global":{img:{objectFit:"cover",width:"100%",height:"auto"},a:{textDecoration:"none",paddingRight:3}}}}});return Object(h.jsx)(m.Provider,{value:{user:r,setUser:c,currentId:s,setCurrentId:u},children:Object(h.jsxs)(x.a,{theme:l,children:[Object(h.jsx)(f.a,{}),e.children]})})},g=n(137),w=(n(371),n(8)),y=n(372),k=Object(y.a)((function(e){return{toolbar:Object(w.a)({display:"flex"},e.breakpoints.down("xs"),{flexDirection:"column",justifyContent:"center"}),logo:Object(w.a)({display:"flex",alignItems:"center"},e.breakpoints.down("xs"),{margin:"10px 0"}),imgText:{width:200,marginLeft:25},imgLogo:{width:40,margin:"3px 0 0 10px"},signinButton:{margin:"0 25px 0 auto"},profileButton:Object(w.a)({display:"flex",margin:"0 10px 0 auto",alignItems:"center",justifyContent:"center","&>*":{marginLeft:10}},e.breakpoints.down("xs"),{margin:"0 0 10px 0"}),avatar:{backgroundColor:"purple",marginRight:5},userButton:{padding:"1px 10px",borderRadius:"20px"},menuContainer:{margin:"50px 50px 0 0",transform:"translateX(-14px)"},navbarButton:Object(w.a)({display:"flex",margin:"0 10px 0 auto","&>*":{margin:"0 0 0 16px",padding:"7px 23px",borderRadius:"20px"}},e.breakpoints.down("xs"),{margin:"0 0 10px 0"})}})),C=n(373),S=n(650),R=function(){var e,t,n,r,c,o,i=k(),u=Object(j.c)(),l=Object(s.h)(),f=Object(s.g)(),O=Object(a.useState)(null),x=Object(b.a)(O,2),v=x[0],g=x[1],w=(Boolean(v),Object(a.useContext)(m));Object(a.useEffect)((function(){w.setUser(JSON.parse(localStorage.getItem("profile")))}),[l]);return w.user?Object(h.jsxs)(d.a,{className:i.profileButton,children:[Object(h.jsx)(C.a,{onClick:function(){u({type:"LOGOUT"}),w.setUser(JSON.parse(localStorage.getItem("profile"))),f.push("/")},variant:"contained",color:"secondary",style:{padding:"7px 20px",borderRadius:20},children:"log out"}),Object(h.jsxs)(C.a,{onClick:function(e){g(e.currentTarget)},className:i.userButton,children:[Object(h.jsx)(S.a,{style:{backgroundColor:"purple",marginRight:5},className:i.avatar,src:null===(e=w.user)||void 0===e||null===(t=e.userData)||void 0===t?void 0:t.userImage,children:null===(n=w.user)||void 0===n||null===(r=n.userData)||void 0===r?void 0:r.name.charAt(0)}),Object(h.jsx)(p.a,{variant:"h6",children:null===(c=w.user)||void 0===c||null===(o=c.userData)||void 0===o?void 0:o.name.split(" ")[0]})]})]}):Object(h.jsxs)(d.a,{className:i.navbarButton,children:[Object(h.jsx)(C.a,{onClick:function(){return f.push("/user/login")},variant:"contained",color:"primary",className:i.signinButton,style:{marginRight:"10px",borderRadius:"3px"},children:"sign in"}),Object(h.jsx)(C.a,{onClick:function(){return f.push("/user/signup")},variant:"outlined",color:"primary",className:i.signinButton,children:"sign up"})]})},N=function(){var e=k(),t=Object(a.useContext)(m);Object(j.c)();return Object(a.useEffect)((function(){}),[null===t||void 0===t?void 0:t.user]),Object(h.jsx)("main",{children:Object(h.jsxs)(u.a,{position:"static",className:e.appbar,color:"inherit",children:[Object(h.jsxs)(l.a,{className:e.toolbar,children:[Object(h.jsxs)(d.a,{className:e.logo,children:[Object(h.jsx)(d.a,{className:e.imgText,children:Object(h.jsx)(p.a,{variant:"h4",children:"PCR Test"})}),Object(h.jsx)(d.a,{className:e.imgLogo,children:Object(h.jsx)(p.a,{variant:"h4"})})]}),Object(h.jsx)(R,{})]}),Object(h.jsx)(g.a,{})]})})},P=n(16),I=n(20),T=n(441),B=n(648),D=n(655),A=n(641),F=n(654),L=n(652),E=n(656),_=n(659),U=n(651),H=n(658),W=n(657),G=n(645),M=n(662),J=n(420),V=n.n(J),q=n(422),z=n.n(q),Y=n(421),X=n.n(Y),K=[{key:"dashboard",name:"Dashboard",path:"/main/home",component:function(){return Object(h.jsx)($t,{})},role:"1"},{key:"user",name:"users",path:"/main/users",component:function(){return Object(h.jsx)(Mt,{})},role:"1"},{key:"apply",name:"Apply",path:"/main/apply",component:function(){return Object(h.jsx)(Qe,{})},role:"3"},{key:"proposal",name:"Proposal",path:"/main/proposal",component:function(){return Object(h.jsx)(tn,{})},role:"1"},{key:"viewproposal",name:"ViewProposal",path:"/main/viewproposal",component:function(){return Object(h.jsx)(nn,{})},role:"3"}],Q=n(27),Z=n.n(Q),$=n(38),ee=n(418),te={DB_ROUTE:"https://alshameslabs.pcrtest.com",FRONT_ROUTE:"https://alshameslabs.com"}.DB_ROUTE,ne=n.n(ee).a.create({baseURL:te});ne.interceptors.request.use((function(e){var t=JSON.parse(localStorage.getItem("profile"));return t&&(e.headers.Authorization="Bearer ".concat(t.token)),e}));var ae=function(e){return ne.post("/api/v1/user/login",e)},re=function(e){return ne.post("/api/v1/user/signup",e)},ce=function(e){return ne.patch("/api/v1/user/forgotPassword",e)},oe=function(e,t){return ne.put("/api/v1/user/updateUser/".concat(e),t)},ie=function(e){return ne.post("/api/v1/user/addNewUser",e)},se=function(e){return ne.post("/api/v1/apply/addNewInfo",e)},ue=function(e,t){return ne.put("/api/v1/apply/updateProposal/".concat(e),t)},le=function(e){return ne.delete("/api/v1/apply/deleteProposal/".concat(e))},de=function(e){return ne.put("/api/v1/apply/approved/".concat(e))},pe=function(e){return ne.put("/api/v1/apply/declined/".concat(e))},je=function(e){return ne.post("/api/v1/apply/viewRequest",e)},be=function(e){return ne.post("/api/v1/apply/sendMail",e)},fe="GET_PROPOSAL_SUCCESS",Oe="VIEW_DATA",xe=function(){return function(){var e=Object($.a)(Z.a.mark((function e(t){var n,a;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne.get("/api/v1/apply/getProposals");case 3:n=e.sent,a=n.data,t({type:fe,payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("backend is not called",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},he=function(e,t){return function(){var n=Object($.a)(Z.a.mark((function n(a){var r;return Z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,ue(e,t);case 3:r=n.sent,r.data,a(xe()),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log("backend is not called",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},me=function(e){return function(){var t=Object($.a)(Z.a.mark((function t(n){return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,le(e);case 3:n(xe()),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log("backend is not called",t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()},ve=function(e){return function(){var t=Object($.a)(Z.a.mark((function t(n){var a,r;return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,je(e);case 3:a=t.sent,r=a.data,window.open(r,"_blank"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("backend is not called",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},ge=n(643),we=n(660),ye=n(661),ke=n(423),Ce=n.n(ke);var Se=Object(I.a)(L.a,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,n=e.open;return Object(P.a)({zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},n&&{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})})})),Re=Object(I.a)(A.a,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,n=e.open;return{"& .MuiDrawer-paper":Object(P.a)({position:"relative",whiteSpace:"nowrap",width:240,transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen}),boxSizing:"border-box"},!n&&Object(w.a)({overflowX:"hidden",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),width:t.spacing(7)},t.breakpoints.up("sm"),{width:t.spacing(9)}))}})),Ne=Object(T.a)();function Pe(){var e,t=r.a.useState(!0),n=Object(b.a)(t,2),c=n[0],o=n[1],u=r.a.useContext(m),l=function(){o(!c)},d=Object(j.c)();Object(a.useEffect)((function(){d(xe())}),[]);var p=Object(j.d)((function(e){return e.proposal.proposals})),f=0;Object(a.useMemo)((function(){return null===p||void 0===p?void 0:p.map((function(e){f+=!e.state}))}));var O=K.filter((function(e){var t;return(null===e||void 0===e?void 0:e.role)==(null===(t=u.user)||void 0===t?void 0:t.userData.role)}));return Object(h.jsx)(B.a,{theme:Ne,children:Object(h.jsxs)(F.a,{sx:{display:"flex"},children:[Object(h.jsx)(D.a,{}),Object(h.jsx)(Se,{position:"absolute",open:c,children:Object(h.jsxs)(E.a,{sx:{pr:"24px"},children:[Object(h.jsx)(W.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:l,sx:Object(P.a)({marginRight:"36px"},c&&{display:"none"}),children:Object(h.jsx)(V.a,{})}),Object(h.jsx)(U.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1},children:"Dashboard"}),"1"==(null===(e=u.user)||void 0===e?void 0:e.userData.role)?Object(h.jsx)(W.a,{color:"inherit",component:i.b,to:"/main/proposal",children:Object(h.jsx)(G.a,{badgeContent:f,color:"secondary",children:Object(h.jsx)(X.a,{})})}):"",Object(h.jsx)(R,{})]})}),Object(h.jsxs)(Re,{variant:"permanent",open:c,children:[Object(h.jsx)(E.a,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",px:[1]},children:Object(h.jsx)(W.a,{onClick:l,children:Object(h.jsx)(z.a,{})})}),Object(h.jsx)(H.a,{}),Object(h.jsx)(_.a,{children:O.map((function(e){return Object(h.jsxs)(ge.a,{button:!0,component:i.b,to:e.path,children:[Object(h.jsx)(we.a,{children:Object(h.jsx)(Ce.a,{})}),Object(h.jsx)(ye.a,{primary:e.name})]},e.key)}))})]}),Object(h.jsxs)(F.a,{component:"main",sx:{backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900]},flexGrow:1,height:"100vh",overflow:"auto"},children:[Object(h.jsx)(E.a,{}),Object(h.jsx)(M.a,{maxWidth:"lg",sx:{mt:4,mb:4},children:Object(h.jsx)(s.d,{children:O.map((function(e){return Object(h.jsx)(s.b,{exact:!0,path:e.path,render:e.component},e.key)}))})})]})]})})}function Ie(){return Object(h.jsx)(Pe,{})}var Te=n(156),Be=n(629),De=n(630),Ae=n(631),Fe=n(628),Le=n(384),Ee=Object(y.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:"100%"}}}));function _e(e){var t=e.date,n=e.setDate,a=Ee();return Object(h.jsx)("form",{className:a.container,noValidate:!0,children:Object(h.jsx)(Le.a,{id:"date",label:"Birthday",type:"date",onChange:function(e){return n(e.target.value)},value:t,className:a.textField,InputLabelProps:{shrink:!0}})})}var Ue=n(646),He=n(385),We=n(386),Ge=n(295),Me=n(565);function Je(e){var t=e.value,n=e.setValue;return Object(h.jsxs)(Ge.a,{component:"fieldset",children:[Object(h.jsx)(Me.a,{component:"legend",children:"Gender"}),Object(h.jsxs)(He.a,{row:!0,"aria-label":"gender",name:"gender1",value:t,onChange:function(e){return n(e.target.value)},children:[Object(h.jsx)(We.a,{value:"male",control:Object(h.jsx)(Ue.a,{}),label:"Male"}),Object(h.jsx)(We.a,{value:"female",control:Object(h.jsx)(Ue.a,{}),label:"Female"})]})]})}var Ve=n(663);function qe(e){var t=e.type,n=e.setType;return Object(h.jsxs)(Ge.a,{component:"fieldset",children:[Object(h.jsx)(Me.a,{component:"legend",children:"document type"}),Object(h.jsxs)(He.a,{row:!0,"aria-label":"type",name:"type",value:t,onChange:function(e){return n(e.target.value)},children:[Object(h.jsx)(We.a,{value:"1",control:Object(h.jsx)(Ue.a,{}),label:"Al Hekma"}),Object(h.jsx)(We.a,{value:"2",control:Object(h.jsx)(Ue.a,{}),label:"Al Shames"}),Object(h.jsx)(We.a,{value:"3",control:Object(h.jsx)(Ue.a,{}),label:"Mena"}),Object(h.jsx)(We.a,{value:"4",control:Object(h.jsx)(Ue.a,{}),label:"Al Mokhtabar"})]})]})}var ze=function(e){var t=e.setActiveStep,n=Object(a.useState)(""),c=Object(b.a)(n,2),o=c[0],i=c[1],s=Object(a.useState)(!1),u=Object(b.a)(s,2),l=u[0],d=u[1],f=Object(a.useState)(!1),O=Object(b.a)(f,2),x=O[0],v=O[1],g=Object(a.useState)("1990-01-01"),w=Object(b.a)(g,2),y=w[0],k=w[1],C=Object(a.useState)(1),S=Object(b.a)(C,2),R=S[0],N=S[1],P=Object(a.useState)(""),I=Object(b.a)(P,2),T=I[0],B=I[1],D=Object(a.useState)("male"),A=Object(b.a)(D,2),F=A[0],L=A[1],E=Object(j.c)(),_=Object(a.useContext)(m);return Object(h.jsxs)(r.a.Fragment,{children:[Object(h.jsx)(p.a,{variant:"h6",gutterBottom:!0,children:"Information"}),Object(h.jsxs)(Fe.a,{container:!0,spacing:3,children:[Object(h.jsx)(Fe.a,{item:!0,xs:12,md:6,children:Object(h.jsx)(Le.a,{error:l,required:!0,id:"fullname",label:"Full Name",fullWidth:!0,autoComplete:"cc-name",value:o,onChange:function(e){return i(e.target.value)}})}),Object(h.jsx)(Fe.a,{item:!0,xs:12,md:6,children:Object(h.jsx)(_e,{date:y,setDate:k})}),Object(h.jsx)(Fe.a,{item:!0,xs:12,md:6,children:Object(h.jsx)(Je,{value:F,setValue:L})}),Object(h.jsx)(Fe.a,{item:!0,xs:12,md:6,children:Object(h.jsx)(Le.a,{required:!0,error:x,id:"passport",label:"Passport",value:T,onChange:function(e){return B(e.target.value)},fullWidth:!0,autoComplete:"cc-csc"})}),Object(h.jsx)(Fe.a,{item:!0,xs:12,md:12,children:Object(h.jsx)(qe,{type:R,setType:N})}),Object(h.jsx)(Fe.a,{container:!0,justifyContent:"center",style:{marginTop:20},children:Object(h.jsx)(Ve.a,{variant:"contained",color:"primary",onClick:function(){var e;""===o?d(!0):""===T?v(!0):(E((e={userId:_.user.userData._id,name:o,birth:y,gender:F,passport:T,docType:R},function(){var t=Object($.a)(Z.a.mark((function t(n){return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,se(e);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log("backend is not called",t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(e){return t.apply(this,arguments)}}())),t(1))},children:"Place order"})})]})]})},Ye=Object(y.a)((function(e){return{appBar:{position:"relative"},layout:Object(w.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:Object(w.a)({marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)}}})),Xe=["Your info"];function Ke(){var e=Ye(),t=r.a.useState(0),n=Object(b.a)(t,2),a=n[0],c=n[1];return Object(h.jsxs)(r.a.Fragment,{children:[Object(h.jsx)(f.a,{}),Object(h.jsx)("main",{className:e.layout,children:Object(h.jsxs)(Te.a,{className:e.paper,children:[Object(h.jsx)(p.a,{component:"h1",variant:"h4",align:"center",children:"PCR TEST"}),Object(h.jsx)(Be.a,{activeStep:a,className:e.stepper,children:Xe.map((function(e){return Object(h.jsx)(De.a,{children:Object(h.jsx)(Ae.a,{children:e})},e)}))}),Object(h.jsx)(r.a.Fragment,{children:a===Xe.length?Object(h.jsxs)(r.a.Fragment,{children:[Object(h.jsx)(p.a,{variant:"h5",gutterBottom:!0,children:"Thank you for your order."}),Object(h.jsx)(p.a,{variant:"subtitle1",children:"Your order number is #2001539. We have emailed your order confirmation, and will send you an update when your order has shipped."})]}):Object(h.jsx)(r.a.Fragment,{children:Object(h.jsx)(ze,{setActiveStep:c})})})]})})]})}var Qe=function(e){return Object(h.jsx)("div",{children:Object(h.jsx)(Ke,{})})},Ze=n(649),$e=n(300),et=n.n($e),tt=n(426),nt=n.n(tt),at=n(436),rt=n.n(at),ct=n(427),ot=n.n(ct),it=n(434),st=n.n(it),ut=n(307),lt=n.n(ut),dt=n(306),pt=n.n(dt),jt=n(428),bt=n.n(jt),ft=n(429),Ot=n.n(ft),xt=n(431),ht=n.n(xt),mt=n(432),vt=n.n(mt),gt=n(433),wt=n.n(gt),yt=n(437),kt=n.n(yt),Ct=n(430),St=n.n(Ct),Rt=n(435),Nt=n.n(Rt),Pt=n(438),It=n.n(Pt),Tt={Add:Object(a.forwardRef)((function(e,t){return Object(h.jsx)(nt.a,Object(P.a)(Object(P.a)({},e),{},{ref:t}))})),Check:Object(a.forwardRef)((function(e,t){return Object(h.jsx)(ot.a,Object(P.a)(Object(P.a)({},e),{},{ref:t}))})),Clear:Object(a.forwardRef)((function(e,t){return Object(h.jsx)(pt.a,Object(P.a)(Object(P.a)({},e),{},{ref:t}))})),Delete:Object(a.forwardRef)((function(e,t){return Object(h.jsx)(bt.a,Object(P.a)(Object(P.a)({},e),{},{ref:t}))})),DetailPanel:Object(a.forwardRef)((function(e,t){return Object(h.jsx)(lt.a,Object(P.a)(Object(P.a)({},e),{},{ref:t}))})),Edit:Object(a.forwardRef)((function(e,t){return Object(h.jsx)(Ot.a,Object(P.a)(Object(P.a)({},e),{},{ref:t}))})),Export:Object(a.forwardRef)((function(e,t){return Object(h.jsx)(St.a,Object(P.a)(Object(P.a)({},e),{},{ref:t}))})),Filter:Object(a.forwardRef)((function(e,t){return Object(h.jsx)(ht.a,Object(P.a)(Object(P.a)({},e),{},{ref:t}))})),FirstPage:Object(a.forwardRef)((function(e,t){return Object(h.jsx)(vt.a,Object(P.a)(Object(P.a)({},e),{},{ref:t}))})),LastPage:Object(a.forwardRef)((function(e,t){return Object(h.jsx)(wt.a,Object(P.a)(Object(P.a)({},e),{},{ref:t}))})),NextPage:Object(a.forwardRef)((function(e,t){return Object(h.jsx)(lt.a,Object(P.a)(Object(P.a)({},e),{},{ref:t}))})),PreviousPage:Object(a.forwardRef)((function(e,t){return Object(h.jsx)(st.a,Object(P.a)(Object(P.a)({},e),{},{ref:t}))})),ResetSearch:Object(a.forwardRef)((function(e,t){return Object(h.jsx)(pt.a,Object(P.a)(Object(P.a)({},e),{},{ref:t}))})),Search:Object(a.forwardRef)((function(e,t){return Object(h.jsx)(Nt.a,Object(P.a)(Object(P.a)({},e),{},{ref:t}))})),SortArrow:Object(a.forwardRef)((function(e,t){return Object(h.jsx)(rt.a,Object(P.a)(Object(P.a)({},e),{},{ref:t}))})),ThirdStateCheck:Object(a.forwardRef)((function(e,t){return Object(h.jsx)(kt.a,Object(P.a)(Object(P.a)({},e),{},{ref:t}))})),ViewColumn:Object(a.forwardRef)((function(e,t){return Object(h.jsx)(It.a,Object(P.a)(Object(P.a)({},e),{},{ref:t}))}))},Bt=function(e){var t=e.columns,n=e.title,a=e.data,r=e.editable,c=e.options;return Object(h.jsx)(et.a,{icons:Tt,title:n,options:c,columns:t,data:a,editable:r})},Dt="AUTH",At="LOGOUT",Ft="UPDATE_ME",Lt="SUCCESS",Et="ERROR",_t="INFO",Ut="GET_USERLIST",Ht={position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0},Wt=function(e,t){e===Lt?g.b.success("".concat(t),Ht):"WARNING"===e?g.b.warn("".concat(t),Ht):e===Et?g.b.error("".concat(t),Ht):e===_t&&g.b.info("".concat(t),Ht)},Gt=function(){return function(){var e=Object($.a)(Z.a.mark((function e(t){var n,a;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne.get("/api/v1/user/getUsers");case 3:n=e.sent,a=n.data,t({type:Ut,payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("backend is not called",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},Mt=function(){var e=Object(j.c)();Object(a.useEffect)((function(){e(Gt())}),[]);var t=Object(j.d)((function(e){return e.user.users})),n={onRowAdd:function(t){return new Promise((function(n,a){setTimeout((function(){var a;e((a=t,function(){var e=Object($.a)(Z.a.mark((function e(t){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ie(a);case 3:t(Gt()),console.log("add new user successful"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("backend is not called",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())),n()}),1e3)}))},onRowUpdate:function(t,n){return new Promise((function(a,r){setTimeout((function(){var r,c;e((r=n._id,c=t,function(){var e=Object($.a)(Z.a.mark((function e(t){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe(r,c);case 3:t(Gt()),console.log("update user successful"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("backend is not called",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())),a()}),1e3)}))},onRowDelete:function(t){return new Promise((function(n,a){setTimeout((function(){e(function(e){return function(){var t=Object($.a)(Z.a.mark((function t(n){return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a=e._id,ne.delete("/api/v1/user/deleteUser/".concat(a));case 3:n(Gt()),console.log("delete user successful"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("backend is not called",t.t0);case 10:case"end":return t.stop()}var a}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(t)),n()}),1e3)}))}};return Object(h.jsx)(Ze.a,{children:Object(h.jsx)(Bt,{data:t,title:"Users",columns:[{title:"Name",field:"name"},{title:"Email",field:"email"},{title:"Status",field:"status",lookup:{1:"Inactive",2:"Active"}},{title:"Role",field:"role",lookup:{1:"admin",2:"sender",3:"user"}}],editable:n,options:{actionsColumnIndex:-1,tableLayout:"auto"}})})},Jt=n(640),Vt=Object(y.a)((function(e){return{authContainer:{width:400,margin:"60px auto 20px"},authHeader:{textAlign:"center",padding:"24px 0"},authLogo:{display:"flex",backgroundColor:"#F50057",color:"#FFFFFF",borderRadius:"100%",width:40,height:40,alignItems:"center",justifyContent:"center",margin:"0 auto 10px"},formContainer:{position:"relative",padding:"0 20px 50px","&>*":{marginBottom:15}},switchButton:{position:"absolute",bottom:0,right:20},googleButton:{"& first-child":{fontSize:12},justifyContent:"center",alignItems:"center"},forgotPasswordLink:{display:"flex",justifyContent:"center"}}})),qt=n(399),zt=n(299),Yt=n(638),Xt=n(639),Kt=function(e){var t=e.name,n=e.label,a=e.value,r=e.ChangeHandler,c=e.half,o=e.type,i=e.setShowPassword;return Object(h.jsx)(Fe.a,{item:!0,xs:c?6:12,children:Object(h.jsx)(Le.a,{name:t,label:n,type:o,value:a,fullWidth:!0,variant:"outlined",required:!0,onChange:r,InputProps:"password"===t?{endAdornment:Object(h.jsx)(qt.a,{position:"end",children:Object(h.jsx)(zt.a,{onClick:i,children:"password"===o?Object(h.jsx)(Yt.a,{}):Object(h.jsx)(Xt.a,{})})})}:null})})},Qt={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},Zt=function(){var e=Object(s.i)(),t=Vt(),n="signup"===e.signin,r="forgotPassword"===e.signin,c=Object(a.useState)(Qt),o=Object(b.a)(c,2),u=o[0],l=o[1],f=Object(a.useState)("password"),O=Object(b.a)(f,2),x=O[0],m=O[1],v=Object(s.g)(),g=Object(j.c)(),y=function(e){l(Object(P.a)(Object(P.a)({},u),{},Object(w.a)({},e.target.name,e.target.value)))};return Object(h.jsxs)(Te.a,{component:d.a,elevation:6,className:t.authContainer,children:[Object(h.jsxs)(d.a,{className:t.authHeader,children:[Object(h.jsx)(d.a,{className:t.authLogo,children:Object(h.jsx)(Jt.a,{fontSize:"medium"})}),Object(h.jsx)(p.a,{variant:"h5",children:r?"Forgot Password":n?"Sign up":"Sign in"}),r&&Object(h.jsx)(p.a,{variant:"body2",style:{textAlign:"center",margin:"10px 20px 0"},children:"Enter your email we wil send you an email with instructions to reset your password"})]}),Object(h.jsxs)("form",{className:t.formContainer,onSubmit:function(e){e.preventDefault(),g(n?function(e,t){return function(){var n=Object($.a)(Z.a.mark((function n(a){var r,c;return Z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,re(e);case 3:r=n.sent,c=r.data,a({type:Dt,payload:c}),console.log("Signup successfull!"),t.push("/"),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log("backend is not called",n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()}(Object(P.a)(Object(P.a)({},u),{},{name:u.firstName+" "+u.lastName}),v):r?function(e){return function(){var t=Object($.a)(Z.a.mark((function t(n){return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,Wt(_t,"Please wait! Your data is processed..."),t.next=4,ce(e);case 4:Wt(Lt,"Token send to your email"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),Wt(Et,t.t0.response.data.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}({email:u.email}):function(e,t){return function(){var n=Object($.a)(Z.a.mark((function n(a){var r,c;return Z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,ae(e);case 3:r=n.sent,c=r.data,a({type:Dt,payload:c}),console.log("Login successfull!"),t.push("/main"),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log("backend is not called",n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()}(u,v)),l(Qt)},children:[Object(h.jsxs)(Fe.a,{container:!0,spacing:2,children:[n&&Object(h.jsxs)(a.Fragment,{children:[Object(h.jsx)(Kt,{name:"firstName",label:"First Name",type:"text",value:u.firstName,ChangeHandler:y,half:!0}),Object(h.jsx)(Kt,{name:"lastName",label:"Last Name",type:"text",value:u.lastName,ChangeHandler:y,half:!0})]}),Object(h.jsx)(Kt,{name:"email",label:"Email Address",type:"email",value:u.email,ChangeHandler:y}),!r&&Object(h.jsx)(Kt,{name:"password",label:"Password",type:x,value:u.password,ChangeHandler:y,setShowPassword:function(){m("password"===x?"text":"password")}}),n&&Object(h.jsx)(Kt,{name:"confirmPassword",label:"Confirm Password",type:"password",value:u.confirmPassword,ChangeHandler:y})]}),!n&&!r&&Object(h.jsx)(d.a,{className:t.forgotPasswordLink,children:Object(h.jsx)(i.b,{to:"/user/forgotPassword",children:"forgot password?"})}),Object(h.jsx)(C.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",children:r?"Send Reset Link":n?"Sign up":"sign in"}),Object(h.jsx)(C.a,{className:t.switchButton,onClick:function(){l(Qt),n||r?v.push("/user/login"):v.push("/user/signup")},children:r?"Back to login":n?"Already have an account? Sign In":"don't Have an account? sign up"})]})]})},$t=function(){return Object(h.jsx)(F.a,{sx:{marginTop:"0px",display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}})},en=n(664),tn=function(){var e=Object(j.c)();Object(a.useEffect)((function(){e(xe())}),[]);var t=Object(j.d)((function(e){return e.proposal.proposals})),n=function(t){e(function(e){return function(){var t=Object($.a)(Z.a.mark((function t(n){return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,de(e);case 3:n(xe()),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log("backend is not called",t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}(t))},r=function(t){e(function(e){return function(){var t=Object($.a)(Z.a.mark((function t(n){return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,pe(e);case 3:n(xe()),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log("backend is not called",t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}(t))},c=function(t){e(function(e){return function(){var t=Object($.a)(Z.a.mark((function t(n){var a,r;return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,be(e);case 3:a=t.sent,r=a.data,console.log(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("backend is not called",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}({_id:t}))},o={onRowUpdate:function(t,n){return new Promise((function(a,r){setTimeout((function(){e(he(n._id,t)),a()}),1e3)}))},onRowDelete:function(t){return new Promise((function(n,a){setTimeout((function(){e(me(t._id)),n()}),1e3)}))}},i=[{title:"Name",field:"name",editable:"never"},{title:"Gender",field:"gender",editable:"never"},{title:"Birthday",field:"birth",editable:"never"},{title:"Passport",field:"passport",editable:"never"},{title:"State",field:"state",lookup:{0:"pending",1:"approved",2:"decline"},editable:"never"},{title:"Positive/Negative",field:"result",lookup:{1:"positive",2:"negative"}},{title:"Applied date",field:"createAt",editable:"never"},{title:"Control",field:"control",render:function(t){return 0==t.state?Object(h.jsxs)(en.a,{variant:"contained","aria-label":"outlined primary button group",children:[Object(h.jsx)(Ve.a,{color:"success",onClick:function(){return n(t._id)},children:"approved"}),Object(h.jsx)(Ve.a,{color:"error",onClick:function(){return r(t._id)},children:"decline"})]}):1==t.state?Object(h.jsxs)(en.a,{variant:"contained","aria-label":"outlined primary button group",children:[Object(h.jsx)(Ve.a,{onClick:function(){return n=t._id,void e(ve({_id:n}));var n},children:"view"}),Object(h.jsx)(Ve.a,{onClick:function(){return c(t._id)},children:"send email"})]}):void 0}}];return Object(h.jsx)(Ze.a,{children:Object(h.jsx)(Bt,{data:t,title:"Users",columns:i,editable:o,options:{actionsColumnIndex:-1,tableLayout:"auto",rowStyle:function(e){return{backgroundColor:1==e.result?"#e73636":2==e.result?"grey":"",color:2==e.result||1==e.result?"white":""}}}})})},nn=function(){var e=Object(j.c)();Object(a.useEffect)((function(){e(xe())}),[]);var t=Object(a.useContext)(m),n=Object(j.d)((function(e){return e.proposal.proposals})).filter((function(e){var n;return e.userId===(null===(n=t.user)||void 0===n?void 0:n.userData._id)})),r={onRowUpdate:function(t,n){return new Promise((function(a,r){setTimeout((function(){e(he(n._id,t)),a()}),1e3)}))},onRowDelete:function(t){return new Promise((function(n,a){setTimeout((function(){e(me(t._id)),n()}),1e3)}))}},c=[{title:"Name",field:"name",editable:"never"},{title:"Gender",field:"gender",editable:"never"},{title:"Birthday",field:"birth",editable:"never"},{title:"Passport",field:"passport",editable:"never"},{title:"State",field:"state",lookup:{0:"pending",1:"approved",2:"decline"},editable:"never"},{title:"Positive/Negative",field:"result",lookup:{1:"positive",2:"negative"},editable:"never"},{title:"Applied date",field:"createAt",editable:"never"},{title:"Control",field:"control",render:function(t){return 1!=t.state?"":Object(h.jsxs)(en.a,{variant:"contained","aria-label":"outlined primary button group",children:[Object(h.jsx)(Ve.a,{onClick:function(){return n=t._id,void e(ve({_id:n}));var n},children:"View and Download"}),".               "]})}}];return Object(h.jsx)(Ze.a,{children:Object(h.jsx)(Bt,{data:n,title:"My request",columns:c,editable:r,options:{actionsColumnIndex:-1,tableLayout:"auto",rowStyle:function(e){return{backgroundColor:1==e.result?"#e73636":2==e.result?"grey":"",color:2==e.result||1==e.result?"white":""}}}})})},an=function(){var e=Object(a.useContext)(m);return Object(h.jsx)(Ze.a,{children:Object(h.jsxs)(i.a,{children:[e.user?"":Object(h.jsx)(N,{}),Object(h.jsxs)(s.d,{children:[Object(h.jsx)(s.b,{exact:!0,path:"/",component:function(){return e.user?Object(h.jsx)(s.a,{to:"/main"}):Object(h.jsx)(s.a,{to:"/user/login"})}}),Object(h.jsx)(s.b,{path:"/main",render:function(){return e.user?Object(h.jsx)(Ie,{}):Object(h.jsx)(s.a,{to:"/"})}}),Object(h.jsx)(s.b,{path:"/user/:signin",component:function(){return e.user?Object(h.jsx)(s.a,{to:"/main"}):Object(h.jsx)(Zt,{})}})]})]})})},rn=(n(555),n(93)),cn=n(439),on=n(440),sn={proposals:[],url:""},un=Object(rn.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{},users:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Dt:return localStorage.setItem("profile",JSON.stringify(t.payload)),Object(P.a)(Object(P.a)({},e),{},{user:t.payload});case At:return localStorage.removeItem("profile"),Object(P.a)({},e);case Ft:var n=JSON.parse(localStorage.getItem("profile"));return n.userData=t.payload.userData,localStorage.setItem("profile",JSON.stringify(n)),Object(P.a)(Object(P.a)({},e),{},{user:t.payload});case Ut:return Object(P.a)(Object(P.a)({},e),{},{users:t.payload});default:return e}},proposal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:sn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe:return Object(P.a)(Object(P.a)({},e),{},{proposals:t.payload});case Oe:return Object(P.a)(Object(P.a)({},e),{},{url:t.payload});default:return e}}}),ln=[cn.a],dn=Object(rn.createStore)(un,Object(on.composeWithDevTools)(rn.applyMiddleware.apply(void 0,ln)));o.a.render(Object(h.jsx)(j.a,{store:dn,children:Object(h.jsx)(v,{children:Object(h.jsx)(an,{})})}),document.getElementById("root"))}},[[556,1,2]]]);
//# sourceMappingURL=main.8116db00.chunk.js.map