(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{391:function(t,n,e){"use strict";e.r(n);e(28),e(25),e(27),e(14),e(40),e(26),e(41);var r=e(12),o=e(16),l=(e(45),e(3)),c=e(392),d=e.n(c),v=e(78);function m(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}var f=l.a.extend({name:"NuxtNavbar",computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(n){Object(o.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}({},Object(v.b)(["isAuthenticated","loggedInUser"])),mounted:function(){},methods:{logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$auth.logout("local1");case 2:d.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,didOpen:function(t){t.addEventListener("mouseenter",d.a.stopTimer),t.addEventListener("mouseleave",d.a.resumeTimer)}}).fire({icon:"success",title:"Logout Berhasil!"});case 4:case"end":return n.stop()}}),n)})))()}}}),_=f,C=e(55),component=Object(C.a)(_,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light sticky-top",staticStyle:{"z-index":"1021"}},[e("div",{staticClass:"container"},[e("nuxt-link",{staticClass:"navbar-brand me-2",attrs:{to:"/"}},[e("img",{staticStyle:{"margin-top":"-1px"},attrs:{src:"https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp",height:"16",alt:"MDB Logo",loading:"lazy"}})]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[e("ul",{staticClass:"navbar-nav me-auto mb-2 mb-lg-0"},[e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/",exact:""}},[t._v("\n            Beranda\n          ")])],1),t._v(" "),t.isAuthenticated?e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/voting"}},[t._v("\n            Voting\n          ")])],1):t._e(),t._v(" "),e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:"/about-us"}},[t._v("\n            Tentang Kami\n          ")])],1)]),t._v(" "),t.isAuthenticated?e("ul",{staticClass:"navbar-nav ms-auto"},[e("li",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{id:"navbarDropdownMenuLink",href:"#",role:"button","data-mdb-toggle":"dropdown","aria-expanded":"false"}},[t._v("\n            Akun Saya\n          ")]),t._v(" "),e("div",{staticClass:"dropdown-menu dropdown-menu-end",staticStyle:{"min-width":"250px"}},[e("div",{staticClass:"px-3 pt-3"},[e("div",{staticClass:"row"},[t._m(1),t._v(" "),e("div",{staticClass:"col-8 col-lg-8 align-self-center"},[e("p",{staticClass:"text-muted fw-bold mb-0"},[t._v("\n                    "+t._s(t.loggedInUser.personal_data.name)+"\n                  ")]),t._v(" "),e("p",{staticClass:"text-muted mb-0"},[t._v("\n                    "+t._s(t.loggedInUser.personal_data.student_number)+"\n                  ")])])])]),t._v(" "),e("div",{staticClass:"dropdown-divider"}),t._v(" "),e("nuxt-link",{staticClass:"dropdown-item",attrs:{to:"/settings"}},[e("i",{staticClass:"fa fa-cog"}),t._v(" Pengaturan Akun\n            ")]),t._v(" "),"USER"!==t.loggedInUser.userdata.role?e("nuxt-link",{staticClass:"dropdown-item",attrs:{to:"/panel"}},[e("i",{staticClass:"fa fa-server"}),t._v(" Panel\n            ")]):t._e(),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:"/logout"},on:{click:function(n){return n.preventDefault(),t.logout.apply(null,arguments)}}},[e("i",{staticClass:"fa fa-sign-out-alt"}),t._v(" Keluar")])],1)])]):e("div",{staticClass:"d-flex align-items-center"},[e("nuxt-link",{staticClass:"btn btn-link px-3 me-2",attrs:{to:"/login"}},[t._v("\n          Login\n        ")]),t._v(" "),e("nuxt-link",{staticClass:"btn btn-primary me-3",attrs:{to:"/register"}},[t._v("\n          Buat Akun\n        ")])],1)])],1)])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("i",{staticClass:"fas fa-bars"})])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"col-4 col-lg-4 align-self-center"},[n("img",{staticClass:"img-fluid rounded-circle",attrs:{src:"https://www.w3schools.com/bootstrap4/img_avatar5.png",alt:"Profile Image"}})])}],!1,null,null,null);n.default=component.exports}}]);