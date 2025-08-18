import{j as d,r,R as m,a as g}from"./vendor.f926c72a.js";const u=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=i(s);fetch(s.href,l)}};u();var f="/assets/profile.46b25df7.jpeg";const e=d.exports.jsx,t=d.exports.jsxs;class x extends r.exports.Component{render(){const{info:n}=this.props;return t("div",{className:"basicInfo",children:[e("img",{className:"profileImage",src:f,alt:"apichan"}),e("h1",{children:n.name}),e("h2",{children:n.bio}),t("div",{className:"contact",children:[t("div",{className:"rowInfo",children:[e("p",{className:"p label",children:"Email"}),e("p",{className:"p",children:n.email})]}),t("div",{className:"rowInfo",children:[e("p",{className:"p label",children:"Address"}),e("p",{className:"p",children:n.address})]})]}),e("div",{className:"socialIcons",children:n.socials.map((i,a)=>e("a",{href:i.url,target:"_blank",rel:"noreferrer",children:e("i",{className:`fa fa-${i.icon} fa-4x socialIcon`})},a))}),e("style",{children:`
          .basicInfo {
            padding: 10px 20px;
          }

          .basicInfo .profileImage {
            width: 200px;
            height: 300px;
            border-radius: 10px;
          }

          .basicInfo .contact {
            margin-bottom: 10px;
          }

          .basicInfo .p {
            display: inline-block;
            margin: 5px 0;
          }
          .basicInfo .label {
            width: 100px;
          }

          .basicInfo .socialIcons {
            display: flex;
            justify-content: space-around;
          }
          .basicInfo .socialIcon {
            color: #0de599;
          }
        `})]})}}class v extends r.exports.Component{render(){const{info:n}=this.props;return t("div",{className:"profile",children:[e("h1",{className:"title",children:"Profile"}),n.map((i,a)=>e("p",{children:i},a)),e("style",{children:`
          .profile {
            padding: 10px 20px;
          }
        `})]})}}class p extends r.exports.Component{render(){const{num:n}=this.props;return t("div",{className:"star",children:[[0,0,0,0,0].map((i,a)=>a<n?e("i",{className:"fa fa-star fa-lg"},a):e("i",{className:"fa fa-star-o fa-lg"},a)),e("style",{children:`
          .star {
            display: inline-block;
            color: #0de599;
          }
        `})]})}}class w extends r.exports.Component{render(){const{technicalSkills:n,languageSkills:i}=this.props.info;return t("div",{className:"skills",children:[e("h1",{className:"title",children:"Technical Skills"}),n.map((a,s)=>t("div",{className:"rowSkill",children:[e("p",{className:"language",children:a.lang}),e(p,{num:a.level})]},s)),e("h1",{className:"title",children:"Language Skills"}),i.map((a,s)=>t("div",{className:"rowSkill",children:[e("p",{className:"language",children:a.lang}),e(p,{num:a.level})]},s)),e("style",{children:`
          .skills {
            padding: 10px 20px;
          }
          .skills .language {
            display: inline-block;
            width: 150px;
          }
        `})]})}}class b extends r.exports.Component{render(){const{info:n}=this.props;return t("div",{className:"experience",children:[e("h1",{className:"title",children:"Experience"}),n.map((i,a)=>t("div",{children:[t("div",{className:"exHeader",children:[e("h2",{className:"exTitle",children:i.position&&i.company?`${i.position}, ${i.company}`:i.position}),t("p",{className:"exTime",children:[i.start," - ",i.stop]})]}),e("ul",{children:i.highlights.map((s,l)=>e("li",{className:"exListItem",children:s},l))})]},a)),e("style",{children:`
          .experience {
            padding: 10px 20px;
          }
          .experience .exHeader {
            width: 100%;
          }
          .experience .exHeader .exTitle {
            display: inline-block;
            width: calc(100% - 150px);
          }
          .experience .exHeader .exTime {
            display: inline-block;
            width: 150px;
            text-align: right;
            color: #C2C2C2;
            vertical-align: top;
            padding-top: 5px;
          }
          .experience .exListItem {
            margin-bottom: 10px;
          }
        `})]})}}class N extends r.exports.Component{render(){const{info:n}=this.props;return t("div",{className:"education",children:[e("h1",{className:"title",children:"Education"}),n.map((i,a)=>t("div",{children:[t("div",{className:"eduHeader",children:[t("h2",{className:"eduTitle",children:[i.studyType,"'s Degree in ",i.area,", ",i.institution]}),t("p",{className:"eduTime",children:[i.start," - ",i.stop]})]}),e("p",{className:"eduAddress",children:i.address})]},a)),e("style",{children:`
          .education {
            padding: 10px 20px;
          }
          .education .eduHeader .eduTitle {
            display: inline-block;
            width: calc(100% - 150px);
          }
          .education .eduHeader .eduTime {
            display: inline-block;
            vertical-align: top;
            width: 150px;
            text-align: right;
            padding-top: 5px;
            color: #C2C2C2;
          }
          .education .eduAddress {
            margin: 0;
          }
        `})]})}}class y extends r.exports.Component{render(){const{info:n}=this.props;return t("div",{className:"interests",children:[e("h1",{className:"title",children:"Interests"}),e("div",{className:"interestList",children:n.map((i,a)=>t("div",{className:"icons",children:[e("i",{className:`fa fa-${i.icon} fa-4x icon`}),e("p",{children:i.name})]},a))}),e("style",{children:`
          .interests {
            padding: 10px 20px;
          }
          .interests .interestList {
            display: flex;
            justify-content: space-around;
          }
          .interests .icons {
            text-align: center;
          }
          .interests .icon {
            color: #0de599;
          }
        `})]})}}var k={basicInfo:{name:"Apichan Chaiyutthasat",bio:"Fullstack Developer, Bloger",tel:"080-xxx-xxxx",email:"apichan.ch@gmail.com",address:"Pathumthani, Thailand",socials:[{network:"GitHub",icon:"github",url:"https://github.com/ak1103dev"},{network:"Medium",icon:"medium",url:"https://medium.com/@ak1103dev"},{network:"Facebook",icon:"facebook-square",url:"https://www.facebook.com/aphichan.chaiyutthasart"},{network:"Twitter",icon:"twitter",url:"https://twitter.com/ak1103dev"}]},profile:["I like to solve problem and learn new things.","And I like to share knowledge when I learn new things","I am happy when I develop and maintain some products that can solve real problem."],technicalSkills:[{lang:"JavaScript",level:5},{lang:"HTML / CSS",level:4},{lang:"Unix Scripting",level:4},{lang:"Git",level:4},{lang:"Docker",level:3},{lang:"Vim",level:3},{lang:"Python",level:2},{lang:"C / C++",level:2}],languageSkills:[{lang:"Thai (Native)",level:5},{lang:"English",level:3}],experiences:[{company:"Classwin",position:"CTO",start:"Aug 2018",stop:"Present",highlights:["Develop web application with React, Redux, Redux-Saga","Develop API with Loopback (Node.js framework)","Manage services with Rancher + Docker"]},{company:"Witsawa Corporation",position:"Tech Lead",start:"Sep 2017",stop:"Present",highlights:["Develop web application with React, Redux, Redux-Saga","Develop web application with React, rematch","Develop web application with Vue.js + firebase","Develop mobile application with React Native","Develop API with Loopback (Node.js framework)","Develop API with Node.js, Apollo (Graphql framework)","Lead team and manage Kanban board","Develop React Native Expo TypeScript Boilerplate","Develop React Admin TypeScript Boilerplate","Deploy mobile application to Play Store and App Store","Manage web service with Rancher or Kubernetes"]},{company:"",position:"Freelancer",start:"Jan 2017",stop:"Sep 2017",highlights:["Developed web application (frontend) with React","Developed API with Node.js, MongoDB, Express.js, SiamPay, Shippop"]},{company:"TakeMeTour",position:"Fullstack Engineer Intern",start:"Jun 2016",stop:"Dec 2016",highlights:["Developed android application with React Native","Developed web application with React and Node.js + Spinal(Microservices Framework)","Processed data from logs with Apache Airflow"]}],educations:[{institution:"Kasetsart University",address:"Bangkok, Thailand",area:"Computer Engineering",studyType:"Bachelor",start:"2013",stop:"2017"}],interests:[{name:"reading books",icon:"book"},{name:"watching movies",icon:"film"},{name:"listening to music",icon:"headphones"},{name:"writing blogs",icon:"pencil"},{name:"investment",icon:"bitcoin"}],references:[{name:"Panjamapong Sermsawatsri",company:"TakeMeTour",email:"xxx@takemetour.com"}]};class I extends r.exports.Component{render(){const{basicInfo:n,profile:i,technicalSkills:a,languageSkills:s,experiences:l,educations:c,interests:h}=k;return t("div",{className:"app",children:[t("div",{className:"left",children:[e(x,{info:n}),e(v,{info:i}),e(w,{info:{technicalSkills:a,languageSkills:s}})]}),t("div",{className:"right",children:[e(b,{info:l}),e(N,{info:c}),e(y,{info:h})]})]})}}m.hydrate(e(g.StrictMode,{children:e(I,{})}),document.getElementById("root"));
