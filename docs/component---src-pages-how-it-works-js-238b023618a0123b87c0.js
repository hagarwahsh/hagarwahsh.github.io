(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Ehco:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),i=a.n(n);function l(e){var t=e.title,a=e.imageList;e.btnLink;return i.a.createElement("section",{className:"images-list"},i.a.createElement("div",{className:"container"},i.a.createElement("span",{className:"images-list-title"},t),i.a.createElement("ul",null,a.map((function(e,t){return i.a.createElement("li",{key:t},i.a.createElement("a",{href:e.link},i.a.createElement("img",{alt:e.title,src:e.src})))})))))}},LbRr:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("q1tI"),i=a.n(n),l=a("Wbzz");function o(e){var t=e.active;return i.a.createElement("header",{className:"header"},i.a.createElement("div",{className:"container"},i.a.createElement(l.Link,{className:"logo",to:"/"},i.a.createElement("img",{alt:"DoZen logo",src:"/images/dozen-logo-2c-primary.png"})),i.a.createElement("a",{href:"/",className:"burger-menu"},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null)),i.a.createElement("ul",{className:"navigation float-right"},i.a.createElement("li",null,i.a.createElement(l.Link,{className:"black "+("why-dozen"===t?"active":""),to:"/why-dozen"},"Why DoZen")),i.a.createElement("li",null,i.a.createElement(l.Link,{className:"how-it-works"===t?"active":"",to:"/how-it-works"},"How It Works")),i.a.createElement("li",null,i.a.createElement(l.Link,{className:"safe-at-work"===t?"active":"",to:"/safe-at-work"},"COVID-19")),i.a.createElement("li",null,i.a.createElement(l.Link,{className:"black "+("about-us"===t?"active":""),to:"/about-us"},"Contact")),i.a.createElement("li",null,i.a.createElement(l.Link,{className:"bordered "+("contact"===t?"active":""),to:"/contact"},"Demo DoZen")))))}},"So3+":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("q1tI"),i=a.n(n),l=a("Wbzz");function o(e){var t=e.title,a=e.subTitle,n=e.description,o=e.btn,c=e.btnText,r=e.showLearnMore,s=e.heroImage,m=e.customClass;return i.a.createElement("section",{className:"hero @@hero-class"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-10 col-xl-6 hero__content"},i.a.createElement("div",{className:"hero__text"},i.a.createElement("h1",null,t),""!==a&&i.a.createElement("h2",null,a),i.a.createElement("p",null,n)),i.a.createElement("div",{className:"hero__buttons"},!0===o&&i.a.createElement(l.Link,{className:"btn hero__get-btn",to:"/about-us"},c),!0===r&&i.a.createElement(l.Link,{className:"hero__link",to:"/why-dozen"},"Learn more"))))),i.a.createElement("div",{style:{backgroundImage:"url("+s+")"},className:"hero__image "+m}))}},YzvB:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return E}));var n=a("q1tI"),i=a.n(n),l=a("LbRr"),o=a("So3+"),c=a("Wbzz");function r(e){var t=e.title,a=e.seeSec,n=e.doSec,l=e.liveSec,o=e.btnLink;return i.a.createElement("section",{className:"see-do-live"},i.a.createElement("div",{className:"container"},i.a.createElement("span",{className:"title"},t),i.a.createElement("h3",{className:"bold"},"See"),i.a.createElement("div",{className:"row"},a.map((function(e,t){return i.a.createElement("div",{key:t,className:"col-6 col-md-4"},i.a.createElement("span",{className:"icon-"+e.icon}),i.a.createElement("span",{className:"item-title"},e.title),i.a.createElement("span",{className:"item-desc"},e.description))}))),i.a.createElement("h3",{className:"bold"},"Do"),i.a.createElement("div",{className:"row"},n.map((function(e,t){return i.a.createElement("div",{key:t,className:"col-6 col-md-4"},i.a.createElement("span",{className:"icon-"+e.icon}),i.a.createElement("span",{className:"item-title"},e.title),i.a.createElement("span",{className:"item-desc"},e.description))}))),i.a.createElement("h3",null,"Live"),i.a.createElement("div",{className:"row"},l.map((function(e,t){return i.a.createElement("div",{key:t,className:"col-6 col-md-4"},i.a.createElement("span",{className:"icon-"+e.icon}),i.a.createElement("span",{className:"item-title"},e.title),i.a.createElement("span",{className:"item-desc"},e.description))}))),i.a.createElement("div",{className:"w-100 col-12 text-center"},i.a.createElement(c.Link,{className:"btn get-btn",to:o},"Get in Touch"))))}var s=a("bUQT"),m=a("i92Z"),d=a("Ehco"),u=a("fItr");function E(){return i.a.createElement("div",{className:"body"},i.a.createElement(l.a,{active:"how-it-works"}),i.a.createElement("main",null,i.a.createElement(o.a,{heroImage:"images/dozen-people.png",title:"The unified platform for work.",subTitle:"",description:"Your content, tools, and workflows-all in one place.",customClass:"hero__image--small",btn:!0,showLearnMore:!1,btnText:"Get in Touch"}),i.a.createElement(r,{btnLink:"/contact",title:"Communicate, collaborate, collect information, and complete essential tasks— for everyone, anywhere, on any device.",seeSec:[{icon:"Internal-Communications1",title:"BROADCAST CRITICAL INFORMATION",description:"Send and track critical information to each employee across channels at scale. "},{icon:"Metrics1",title:"WORLD CLASS CONTENT MANAGEMENT",description:"Easily manage the full spectrum of content across all channels- and connect the dots between content and employee behavior."},{icon:"Personalized-Content1",title:"PERSONALIZE WITH PRECISION",description:"The only employee experience platform that actively matches the relevant content to every employee in their preferred language & media."},{icon:"Internal-Communications1",title:"MARKETING AUTOMATION",description:"Create targeted and relevant communications that leverage all your employee data while reducing the manual efforts required."},{icon:"Personalized-Content1",title:"CONSOLIDATE EXISTING INTRANET SILOS",description:"Breakdown silos by providing a single platform for all your departments to efficiently create apps, pages, and sites."},{icon:"Metrics1",title:"ENGAGEMENT INSIGHTS",description:"Measure your impact with real-time metrics to capture and control data that helps you get an end-to-end picture of the employee interactions through their journey, all while keeping costs down and controlling for privacy."}],doSec:[{icon:"Transform-work2",title:"ZENBOX",description:"Enable employees to do the job from one single platform that aggregates tasks from the third-party applications and lets you prioritize them in one place."},{icon:"Launchpad1",title:"HUMANIZE LEGACY APPS",description:"Reimagine enterprise applications by bringing human centered design for legacy applications to empower employees and attain business goals."},{icon:"Forms-Workflow1",title:"QUICK ACTIONS",description:"Enable employees to access and submit what they need for work efficiently through quick actions widgets."}],liveSec:[{icon:"Self-Service1",title:"SELF-SERVICE",description:"Take control of what you need, when you need it."},{icon:"Milestones1",title:"MOMENTS THAT MATTER",description:"Engage with content and info for major milestones."},{icon:"Collaboration1",title:"EMPLOYEE FIRST EXPERIENCE",description:"Organize content how employees want to see it, rather than based on the departments in the organization. "}]}),i.a.createElement(s.a,{text:"Personalized and targeted employee experiences —anywhere, on any device.",imgLayer:"images/iPad - 01.png",graphicElement1:"images/Path.png",graphicElement2:"images/Path2.png",pageName:"how-it-works"}),i.a.createElement(d.a,{title:"Powered by best-in-class software. Integrates seamlessly with existing applications.",imageList:[{src:"images/Sitecore-Logo.png",link:"https://www.sitecore.com/",title:"Sitecore"},{src:"images/Microsoft-Logo.png",link:"https://www.microsoft.com/",title:"Microsoft"},{src:"images/SAP_logo.png",link:"https://www.sap.com/index.html",title:"SAP"},{src:"images/Office365.png",link:"https://www.office.com/",title:"Office 365"},{src:"images/Yammer-logo.png",link:"https://www.yammer.com/",title:"Yammer"},{src:"images/servicenow.png",link:"https://www.servicenow.com/",title:"Servicenow"},{src:"images/Microsoft-Teams.png",link:"https://www.microsoft.com/en/microsoft-365/microsoft-teams/group-chat-software",title:"Microsoft Teams"}]}),i.a.createElement(m.a,{title:"Ready for the next normal?",description:"Get a live demo.",image:"images/get-in-touch-3.png",responsiveImage:"images/get-in-touch-mbl-3.png"})),i.a.createElement(u.a,null))}},bUQT:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),i=a.n(n);function l(e){var t=e.pageName,a=e.text,n=e.imgLayer,l=e.graphicElement1,o=e.graphicElement2;return i.a.createElement("section",{className:"connect-component "+t},i.a.createElement("div",{className:"connect-component-wrapper container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"connect-content col-xs-12 col-md-5 offset-md-7 col-xl-4 offset-xl-8"},a),"how-it-works"===t&&i.a.createElement("div",{className:"col-md-7 peopleImg",style:{backgroundImage:"url('"+n+"')"}}))),i.a.createElement("img",{alt:"graphicElement1",src:l,className:"above-wave"}),"how-it-works"!==t&&i.a.createElement("div",{className:"peopleImg",style:{backgroundImage:"url('"+n+"')"}}),i.a.createElement("img",{alt:"graphicElement2",src:o,className:"bottom-wave"}))}},fItr:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("q1tI"),i=a.n(n),l=a("Wbzz");function o(e){return e.linkItems.map((function(e,t){return i.a.createElement("li",{key:t,className:"footer__link-list__item"},i.a.createElement(l.Link,{className:"footer__link-list__item__link",to:e.link},e.text))}))}function c(e){return e.items.map((function(e){return i.a.createElement("div",{key:e.itemId,className:"footer__accordion__item"},i.a.createElement("div",{className:"footer__accordion_item__header"},i.a.createElement("h5",{className:"mb-0"},i.a.createElement("button",{className:"footer__accordion__item__header__title","data-toggle":"collapse","data-target":"#"+e.itemId,"aria-expanded":"false","aria-controls":e.itemId},e.title))),i.a.createElement("div",{id:e.itemId,className:"collapse","data-parent":"#footer__accordion"},i.a.createElement("div",{className:"footer__accordion__item__body"},i.a.createElement("p",null,e.address),i.a.createElement("p",null,"Tel: "+e.tel))))}))}function r(e){e.title,e.imageList,e.btnLink;return i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-6"},i.a.createElement(l.Link,{className:"footer__logo",to:"/why-dozen"},i.a.createElement("img",{src:"images/logo-footer.png",alt:""})),i.a.createElement("p",null,"Building technologies that make employees happier"),i.a.createElement("ul",{className:"footer__link-list"},i.a.createElement(o,{linkItems:[{link:"/why-dozen",text:"Why DoZen"},{link:"/how-it-works",text:"How it Works"},{link:"/about-us",text:"Contact"}]}))),i.a.createElement("div",{className:"col-md-6"},i.a.createElement("p",{className:"footer__title"},"Contact"),i.a.createElement("div",{id:"footer__accordion",className:"footer__accordion"},i.a.createElement(c,{items:[{itemId:"usa-office-2",title:"California, USA",address:"3000 El Camino Real, Building 4, Suite 200, Palo Alto, California, 94306",tel:"+1 860 656 6336"},{itemId:"usa-office",title:"Connecticut, USA",address:"20 Batterson Park Rd., Suite 360 Farmington, CT 06032",tel:"+1 860 656 6336"},{itemId:"switzerland-office",title:"Zurich, Switzerland",address:"Grabenstrasse 1 CH-8952 Schlieren Switzerland",tel:"+41 78 955 68 99"},{itemId:"egypt-office",title:"Cairo, Egypt",address:"Nasr City, Free Zone, Area 7B, Block J",tel:"+20 2 2673 6111"},{itemId:"dubai-office",title:"Dubai, UAE",address:"Dubai Internet City Block DIC, Building 17, Office 256 & 257 P.O. Box 500814",tel:"+9714 4370 833"},{itemId:"abudhabi-office",title:"Abu Dhabi, UAE",address:"Al Falah St, 18_3 East Unit, Block 146, Floor 3, Office 307",tel:"+9712 4930 211"}]})))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col"},i.a.createElement("div",{className:"footer__copyrights"},i.a.createElement("p",null,"© 2020 ITWorx All rights reserved |"," ",i.a.createElement("a",{className:"footer__privacy",href:"https://www.itworx.com/privacy-policy/"},"Privacy Policy")," "))))))}},i92Z:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),i=a.n(n);function l(e){var t=e.title,a=e.description,n=e.image,l=e.responsiveImage;return i.a.createElement("section",{className:"get-in-touch"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-6 z-id-1"},i.a.createElement("div",{className:"get-in-touch__content"},i.a.createElement("h2",null,t),i.a.createElement("p",null,a)),i.a.createElement("a",{className:"get-in-touch__btn",href:"mailto:hello@dozen.ai"},"E-mail Us"),i.a.createElement("div",{className:"get-in-touch__thanks-message",hidden:!0},i.a.createElement("p",null,"Thanks for your interest in DoZen. We will connect with you very soon to schedule a demo."))))),i.a.createElement("div",{className:"get-in-touch__image__dtp",title:"Employee working from home",style:{backgroundImage:"url("+n+")"}}),i.a.createElement("div",{className:"get-in-touch__image__mbl",title:"Employee working from home",style:{backgroundImage:"url("+l+")"}}))}}}]);
//# sourceMappingURL=component---src-pages-how-it-works-js-238b023618a0123b87c0.js.map