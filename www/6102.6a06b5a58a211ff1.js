"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6102],{6102:(v,d,l)=>{l.r(d),l.d(d,{CrearpostPageModule:()=>_});var g=l(177),p=l(4341),n=l(4742),u=l(70),C=l(467),e=l(4438),h=l(8189);function m(r,i){if(1&r&&(e.j41(0,"ion-select-option",13),e.EFF(1),e.k0s()),2&r){const s=i.$implicit;e.Y8G("value",s),e.R7$(),e.JRh(s)}}function f(r,i){if(1&r&&(e.j41(0,"div",14),e.EFF(1),e.k0s()),2&r){const s=e.XpG();e.R7$(),e.SpI(" ",s.errorMessage," ")}}const M=[{path:"",component:(()=>{var r;class i{constructor(t,o){this.postService=t,this.router=o,this.title="",this.description="",this.category="",this.searchTerm="",this.errorMessage="",this.allCategories=["piscina","quincho","terraza","departamento"],this.filteredCategories=this.allCategories}onBack(){this.router.navigate(["/home"])}filterCategories(){const t=this.searchTerm.toLowerCase();this.filteredCategories=this.allCategories.filter(o=>o.toLowerCase().includes(t))}onCreatePost(){var t=this;return(0,C.A)(function*(){try{yield t.postService.createPost(t.title,t.description,t.category),t.router.navigate(["/home"])}catch(o){t.errorMessage=o instanceof Error?"Error al crear el post: "+o.message:"Error desconocido al crear el post"}})()}}return(r=i).\u0275fac=function(t){return new(t||r)(e.rXU(h.K),e.rXU(u.Ix))},r.\u0275cmp=e.VBU({type:r,selectors:[["app-crearpost"]],decls:22,vars:8,consts:[[3,"translucent"],["slot","start"],[3,"click"],["name","arrow-back"],[3,"fullscreen"],[1,"ion-padding"],["placeholder","T\xedtulo",3,"ngModelChange","ngModel"],["placeholder","Descripci\xf3n",3,"ngModelChange","ngModel"],["placeholder","Buscar categor\xeda",3,"ngModelChange","ionInput","ngModel"],["placeholder","Selecciona una categor\xeda",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],["class","error-message",4,"ngIf"],["expand","block",3,"click"],[3,"value"],[1,"error-message"]],template:function(t,o){1&t&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e.EFF(3,"Crear Post"),e.k0s(),e.j41(4,"ion-buttons",1)(5,"ion-button",2),e.bIt("click",function(){return o.onBack()}),e.nrm(6,"ion-icon",3),e.EFF(7," Volver "),e.k0s()()()(),e.j41(8,"ion-content",4)(9,"div",5)(10,"ion-item")(11,"ion-input",6),e.mxI("ngModelChange",function(a){return e.DH7(o.title,a)||(o.title=a),a}),e.k0s()(),e.j41(12,"ion-item")(13,"ion-textarea",7),e.mxI("ngModelChange",function(a){return e.DH7(o.description,a)||(o.description=a),a}),e.k0s()(),e.j41(14,"ion-item")(15,"ion-input",8),e.mxI("ngModelChange",function(a){return e.DH7(o.searchTerm,a)||(o.searchTerm=a),a}),e.bIt("ionInput",function(){return o.filterCategories()}),e.k0s()(),e.j41(16,"ion-item")(17,"ion-select",9),e.mxI("ngModelChange",function(a){return e.DH7(o.category,a)||(o.category=a),a}),e.DNE(18,m,2,2,"ion-select-option",10),e.k0s()(),e.DNE(19,f,2,1,"div",11),e.j41(20,"ion-button",12),e.bIt("click",function(){return o.onCreatePost()}),e.EFF(21,"Crear Post"),e.k0s()()()),2&t&&(e.Y8G("translucent",!0),e.R7$(8),e.Y8G("fullscreen",!0),e.R7$(3),e.R50("ngModel",o.title),e.R7$(2),e.R50("ngModel",o.description),e.R7$(2),e.R50("ngModel",o.searchTerm),e.R7$(2),e.R50("ngModel",o.category),e.R7$(),e.Y8G("ngForOf",o.filteredCategories),e.R7$(),e.Y8G("ngIf",o.errorMessage))},dependencies:[g.Sq,g.bT,p.BC,p.vS,n.Jm,n.QW,n.W9,n.eU,n.iq,n.$w,n.uz,n.Nm,n.Ip,n.nc,n.BC,n.ai,n.Je,n.Gw]}),i})()}];let P=(()=>{var r;class i{}return(r=i).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[u.iI.forChild(M),u.iI]}),i})(),_=(()=>{var r;class i{}return(r=i).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[g.MD,p.YN,n.bv,P]}),i})()}}]);