/**
 * (C) njausteve, 2017
 *  Resume
 * by Stephen njau(njaustevedomino@gmail.com)
 */
!function(){"use strict";angular.module("njausteve",["ui.router","angular-loading-bar","oc.lazyLoad","ngAnimate"])}(),function(){"use strict";function o(o,e,t){t.debugEnabled(!0),o.config({modules:[{name:"ResumeModule",files:["app/components/resume/resume.controller.js"]},{name:"PortifolioModule",files:["app/components/portfolio/portfolio.controller.js"]},{name:"PortifolioDetailsModule",files:["app/components/portfolio/portfolio-detail.controller.js"]},{name:"BlogModule",files:["app/components/blog/blog.controller.js"]},{name:"AboutMeModule",files:["app/components/aboutMe/aboutme.controller.js"]},{name:"ContactModule",files:["app/components/contact/contact.controller.js",{type:"js",path:"http://maps.google.com/maps/api/js?key=AIzaSyD34UntJEPJVv0Kix-CjL0PfpUF5I3Jf7Q"},"app/externalModules/ng-map.min.js"]}]}),o.config({debug:!0})}o.$inject=["$ocLazyLoadProvider","$httpProvider","$logProvider"],angular.module("njausteve").config(o)}(),/**
 * (C) njausteve, 2017
 *  Resume
 * by Stephen njau(njaustevedomino@gmail.com)
 */
function(){"use strict";function o(o,e,t){o.state("detail",{url:"/portifolio/:projectName",params:{projectDetails:null},views:{"":{templateUrl:"/app/components/portfolio/portifolio-details.html",controller:"portifolioDetailsController",controllerAs:"project"}},resolve:{loadMyCtrl:["$ocLazyLoad",function(o){return o.load("PortifolioDetailsModule")}]}}).state("resume",{url:"/resume",templateUrl:"/app/components/resume/resume.html",controller:"resumeController",controllerAs:"resume",resolve:{loadMyCtrl:["$ocLazyLoad",function(o){return o.load("ResumeModule")}]}}).state("portifolio",{url:"/portifolio",templateUrl:"/app/components/portfolio/portfolio.html",controller:"portifolioController",controllerAs:"portif",resolve:{loadMyCtrl:["$ocLazyLoad",function(o){return o.load("PortifolioModule")}]}}).state("about me",{url:"/about",templateUrl:"/app/components/aboutMe/about.html",controller:"aboutMeController",controllerAs:"about",resolve:{loadMyCtrl:["$ocLazyLoad",function(o){return o.load("AboutMeModule")}]}}).state("blog",{url:"/blog",templateUrl:"/app/components/blog/blog.html",controller:"blogController",controllerAs:"blog",resolve:{loadMyCtrl:["$ocLazyLoad",function(o){return o.load("BlogModule")}]}}).state("contact",{url:"/contact",templateUrl:"/app/components/contact/contact.html",controller:"contactController",controllerAs:"contact",resolve:{loadMyCtrl:["$ocLazyLoad",function(o){return o.load("ContactModule")}]}}),e.otherwise("/about"),t.html5Mode(!0)}o.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],angular.module("njausteve").config(o)}(),/**
 * (C) njausteve, 2017
 *  Resume
 * by Stephen njau(njaustevedomino@gmail.com)
 */
function(){"use strict";function o(o,e,t){o.info("Njausteve , 2017 \n Online Resume \n lets do this! "),e.$state=t}o.$inject=["$log","$rootScope","$state"],angular.module("njausteve").run(o)}(),/**
 * (C) njausteve, 2017
 *  Resume
 * by Stephen njau(njaustevedomino@gmail.com)
 */
function(){"use strict";function o(o){var e=this;e.pageNames=o.get().map(function(o){return o.name}).filter(Boolean);var t=angular.copy(e.pageNames);e.nextPage=function(l){var r=e.pageNames.indexOf(o.current.name);console.log(" the previousStateIndex : "+r+"  => \n the next state is : "+l),o.go(t[l])}}o.$inject=["$state"],angular.module("njausteve").controller("mainController",o)}();