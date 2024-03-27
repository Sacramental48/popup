(function(){"use strict";var t={7287:function(t,e,n){var o=n(6848),i=function(){var t=this,e=t._self._c;return e("section",{staticClass:"main"},[e("header",{staticClass:"header"},[e("h2",{staticClass:"title",on:{click:t.changingVariablesToTitleCLick}},[t._v("Главная")]),t.startBtn?e("button",{staticClass:"btn",on:{click:t.startButtonClick}},[t._v("Начать")]):t._e()]),t.startBtn&&!t.closeJson?e("p",{staticClass:"paragraph"},[t._v('Заполни форму! Нажми "Начать"')]):t._e(),t.showPopup?e("PopUp",{on:{"inputs-value":t.handleFormSubmission,showModalValue:t.modelValue}}):t._e(),t.closeJson?e("div",[e("article",[e("h2",[t._v("Данные")]),e("p",[t._v("Имя: "+t._s(t.formData.name))]),e("p",[t._v("Фамилия: "+t._s(t.formData.surname))]),e("p",[t._v("Телефон: "+t._s(t.formData.phone))]),e("p",[t._v("Email: "+t._s(t.formData.email))]),e("p",[t._v("Возраст: "+t._s(t.formData.age))])]),e("h3",[t._v("JSON")]),e("p",[t._v(t._s(t.formDataJson))])]):t._e()],1)},a=[],s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"popapc"},[t.showModal?e("div",{staticClass:"modal-overlay",on:{click:t.closeModal}}):t._e(),t.showModal?e("div",{staticClass:"modal"},[e("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[e("h2",{staticClass:"title"},[t._v("Введите данные")]),e("div",{staticClass:"content"},[e("div",{staticClass:"columnA"},t._l(t.columnAInputs,(function(n,o){return e("div",{key:o,staticClass:"input-group"},[e("label",{attrs:{for:n.inputName}},[t._v(t._s(n.name)+":")]),"checkbox"===n.inputType?e("input",{directives:[{name:"model",rawName:"v-model",value:n.inputModel,expression:"item.inputModel"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(n.inputModel)?t._i(n.inputModel,null)>-1:n.inputModel},on:{change:function(e){var o=n.inputModel,i=e.target,a=!!i.checked;if(Array.isArray(o)){var s=null,u=t._i(o,s);i.checked?u<0&&t.$set(n,"inputModel",o.concat([s])):u>-1&&t.$set(n,"inputModel",o.slice(0,u).concat(o.slice(u+1)))}else t.$set(n,"inputModel",a)}}}):"radio"===n.inputType?e("input",{directives:[{name:"model",rawName:"v-model",value:n.inputModel,expression:"item.inputModel"}],attrs:{type:"radio"},domProps:{checked:t._q(n.inputModel,null)},on:{change:function(e){return t.$set(n,"inputModel",null)}}}):e("input",{directives:[{name:"model",rawName:"v-model",value:n.inputModel,expression:"item.inputModel"}],attrs:{type:n.inputType},domProps:{value:n.inputModel},on:{input:function(e){e.target.composing||t.$set(n,"inputModel",e.target.value)}}})])})),0),e("div",{staticClass:"columnB"},t._l(t.columnBInputs,(function(n,o){return e("div",{key:o,staticClass:"input-group"},[e("label",{attrs:{for:n.inputName}},[t._v(t._s(n.name)+":")]),"checkbox"===n.inputType?e("input",{directives:[{name:"model",rawName:"v-model",value:n.inputModel,expression:"item.inputModel"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(n.inputModel)?t._i(n.inputModel,null)>-1:n.inputModel},on:{change:function(e){var o=n.inputModel,i=e.target,a=!!i.checked;if(Array.isArray(o)){var s=null,u=t._i(o,s);i.checked?u<0&&t.$set(n,"inputModel",o.concat([s])):u>-1&&t.$set(n,"inputModel",o.slice(0,u).concat(o.slice(u+1)))}else t.$set(n,"inputModel",a)}}}):"radio"===n.inputType?e("input",{directives:[{name:"model",rawName:"v-model",value:n.inputModel,expression:"item.inputModel"}],attrs:{type:"radio"},domProps:{checked:t._q(n.inputModel,null)},on:{change:function(e){return t.$set(n,"inputModel",null)}}}):e("input",{directives:[{name:"model",rawName:"v-model",value:n.inputModel,expression:"item.inputModel"}],attrs:{type:n.inputType},domProps:{value:n.inputModel},on:{input:function(e){e.target.composing||t.$set(n,"inputModel",e.target.value)}}})])})),0)]),e("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Отправить")])])]):t._e()])},u=[],l={name:"PopUp",data(){return{showModal:!0,columnAInputs:[{name:"Имя",inputType:"text",inputName:"name",inputModel:""},{name:"Фамилия",inputType:"text",inputName:"surname",inputModel:""}],columnBInputs:[{name:"Телефон",inputType:"tel",inputName:"phone",inputModel:""},{name:"Почта",inputType:"email",inputName:"email",inputModel:""},{name:"Возраст",inputType:"number",inputName:"age",inputModel:""}]}},methods:{submitForm(){const t={name:this.columnAInputs[0].inputModel,surname:this.columnAInputs[1].inputModel,phone:this.columnBInputs[0].inputModel,email:this.columnBInputs[1].inputModel,age:this.columnBInputs[2].inputModel};this.$emit("inputs-value",t)},closeModal(t){t.target.closest(".modal")||(this.showModal=!1,this.$emit("showModalValue",this.showModal))}}},r=l,p=n(1656),c=(0,p.A)(r,s,u,!1,null,"2d1b9f57",null),d=c.exports,m={name:"App",components:{PopUp:d},data(){return{startBtn:!0,closeJson:!1,formData:"",formDataJson:"",showPopup:!1,getValueFromModel:""}},methods:{handleFormSubmission(t){this.formData=t,this.formDataJson=JSON.stringify(t),this.closeJson=!0,this.startBtn=!0,this.showPopup=!1},startButtonClick(){this.startBtn=!1,this.showPopup=!0},changingVariablesToTitleCLick(){this.startBtn=!0,this.showPopup=!1,this.closeJson=!1},modelValue(t){t||(this.startBtn=!0,this.showPopup=!1,this.closeJson=!0)}}},h=m,v=(0,p.A)(h,i,a,!1,null,null,null),f=v.exports;o.Ay.config.productionTip=!1,new o.Ay({render:t=>t(f)}).$mount("#app")}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var a=e[o]={exports:{}};return t[o].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,o,i,a){if(!o){var s=1/0;for(p=0;p<t.length;p++){o=t[p][0],i=t[p][1],a=t[p][2];for(var u=!0,l=0;l<o.length;l++)(!1&a||s>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[l])}))?o.splice(l--,1):(u=!1,a<s&&(s=a));if(u){t.splice(p--,1);var r=i();void 0!==r&&(e=r)}}return e}a=a||0;for(var p=t.length;p>0&&t[p-1][2]>a;p--)t[p]=t[p-1];t[p]=[o,i,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,a,s=o[0],u=o[1],l=o[2],r=0;if(s.some((function(e){return 0!==t[e]}))){for(i in u)n.o(u,i)&&(n.m[i]=u[i]);if(l)var p=l(n)}for(e&&e(o);r<s.length;r++)a=s[r],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(p)},o=self["webpackChunkpopup"]=self["webpackChunkpopup"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(7287)}));o=n.O(o)})();
//# sourceMappingURL=app.9b6ecc48.js.map