"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1849],{1849:(C,u,s)=>{s.r(u),s.d(u,{PerfilPageModule:()=>v});var g=s(177),p=s(4341),o=s(4742),a=s(70),f=s(467),t=s(4438),P=s(8189),m=s(4563);function d(e,r){if(1&e){const i=t.RV6();t.j41(0,"ion-item")(1,"ion-label")(2,"h3"),t.EFF(3),t.k0s(),t.j41(4,"p"),t.EFF(5),t.k0s(),t.j41(6,"small"),t.EFF(7),t.k0s(),t.j41(8,"ion-button",17),t.bIt("click",function(){const l=t.eBV(i).$implicit,c=t.XpG();return t.Njj(c.verDetalles(l.id))}),t.EFF(9,"Ver detalles"),t.k0s()()()}if(2&e){const i=r.$implicit;t.R7$(3),t.JRh(i.title),t.R7$(2),t.JRh(i.description),t.R7$(2),t.SpI("Categor\xeda: ",i.category,"")}}function h(e,r){1&e&&(t.j41(0,"div",18)(1,"p"),t.EFF(2,"No has realizado publicaciones a\xfan."),t.k0s()())}const F=[{path:"",component:(()=>{var e;class r{constructor(n,l,c){this.postService=n,this.router=l,this.authService=c,this.posts=[]}ngOnInit(){this.loadUserPosts()}loadUserPosts(){var n=this;return(0,f.A)(function*(){try{n.posts=yield n.postService.getPostsByUser()}catch(l){console.error("Error al cargar las publicaciones del usuario:",l)}})()}verDetalles(n){this.router.navigate(["/detalle-publicacion",n])}goToPostDetail(n){console.log("Navigating to post with ID:",n)}logout(){this.authService.logout().then(()=>{this.router.navigate(["/login"])})}}return(e=r).\u0275fac=function(n){return new(n||e)(t.rXU(P.K),t.rXU(a.Ix),t.rXU(m.u))},e.\u0275cmp=t.VBU({type:e,selectors:[["app-perfil"]],decls:31,vars:4,consts:[[3,"translucent"],[1,"logo-container"],["src","/assets/IMG_2214.PNG","alt","logo planAway",1,"logo"],[1,"titulo"],["slot","end"],["auto-hide","false",1,"menu"],["content-id","main-content","side","end"],[1,"menu"],["button","","routerLink","/perfil",1,"sperfil"],["button","","routerLink","/crearpost"],["button","","routerLink","/home"],["button","",1,"slogout",3,"click"],["id","main-content"],[3,"fullscreen"],[1,"perfil-info"],[4,"ngFor","ngForOf"],["class","no-posts",4,"ngIf"],[3,"click"],[1,"no-posts"]],template:function(n,l){1&n&&(t.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"div",1),t.nrm(3,"img",2),t.j41(4,"ion-title",3),t.EFF(5,"PlanAway"),t.k0s()(),t.j41(6,"ion-buttons",4),t.nrm(7,"ion-menu-button",5),t.k0s()()(),t.j41(8,"ion-menu",6)(9,"ion-header")(10,"ion-toolbar",7)(11,"ion-title"),t.EFF(12,"Men\xfa"),t.k0s()()(),t.j41(13,"ion-content")(14,"ion-list")(15,"ion-item",8),t.EFF(16,"Perfil"),t.k0s(),t.j41(17,"ion-item",9),t.EFF(18," Agregar post"),t.k0s(),t.j41(19,"ion-item",10),t.EFF(20,"Home"),t.k0s(),t.j41(21,"ion-item",11),t.bIt("click",function(){return l.logout()}),t.EFF(22,"Cerrar sesi\xf3n"),t.k0s()()()(),t.nrm(23,"ion-router-outlet",12),t.j41(24,"ion-content",13)(25,"div",14)(26,"h2"),t.EFF(27,"Mis Publicaciones"),t.k0s()(),t.j41(28,"ion-list"),t.DNE(29,d,10,3,"ion-item",15),t.k0s(),t.DNE(30,h,3,0,"div",16),t.k0s()),2&n&&(t.Y8G("translucent",!0),t.R7$(24),t.Y8G("fullscreen",!0),t.R7$(5),t.Y8G("ngForOf",l.posts),t.R7$(),t.Y8G("ngIf",0===l.posts.length))},dependencies:[g.Sq,g.bT,o.Jm,o.QW,o.W9,o.eU,o.uz,o.he,o.nf,o.oS,o.MC,o.BC,o.ai,o.Rg,o.N7,a.Wk],styles:['@charset "UTF-8";#container[_ngcontent-%COMP%]{text-align:center;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#3c413f;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.post-item[_ngcontent-%COMP%]{display:flex;justify-content:center}.NombreCategoria[_ngcontent-%COMP%]{text-transform:capitalize;text-align:center;font-size:32px}ion-card[_ngcontent-%COMP%]{width:100%;text-align:center}.posts-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:16px}@media (min-width: 600px){.posts-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media (min-width: 992px){.posts-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}.logo[_ngcontent-%COMP%]{max-width:70px;height:auto;border-radius:0;margin-right:10px}.titulo[_ngcontent-%COMP%]{color:#0edb86;font-size:1.5rem}.logo-container[_ngcontent-%COMP%]{display:flex;align-items:center}.menu[_ngcontent-%COMP%], #main-content[_ngcontent-%COMP%]{color:#0edb86}']}),r})()}];let M=(()=>{var e;class r{}return(e=r).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[a.iI.forChild(F),a.iI]}),r})(),v=(()=>{var e;class r{}return(e=r).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[g.MD,p.YN,o.bv,M]}),r})()}}]);