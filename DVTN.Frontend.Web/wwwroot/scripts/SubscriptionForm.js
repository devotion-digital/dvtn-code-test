import{d as p,o as a,c as i,a as e,t as f,b as l,n as d,w as m,v as c,g as h,h as g}from"./chunks/ReCaptchaVuePlugin.js";import{u as v,r as u,e as b}from"./chunks/index.js";import{_ as y}from"./chunks/_plugin-vue_export-helper.js";import"./chunks/_commonjsHelpers.js";const _=p({props:{submitApi:{type:String,default:void 0}},setup(){return{v$:v()}},data(){return{loading:!1,form:{gRecaptchaToken:"",firstName:"",email:""},response:{message:"",success:!1}}},validations(){return{form:{firstName:{required:u},email:{required:u,email:b}}}},mounted(){},methods:{async getRecaptchaToken(){try{const s=await this.$recaptcha("login");return s||console.error("There was no Google reCAPTCHA token returned."),s}catch(s){return console.error(s),""}},async doSubmitForm(){if(!(this.loading||!await this.v$.$validate())){this.loading=!0,this.form.gRecaptchaToken=await this.getRecaptchaToken();try{const t={...this.form};console.log("data",t);const n=await fetch(this.submitApi,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),r=await n.json();r.redirectUrl&&(window.location.href=r.redirectUrl),n.status===200&&(this.response.success=!0,this.response.message=r.message),n.status===400&&(this.response.success=!1,this.response.message=r.message)}catch(t){console.error("Submit error:",t),this.response.success=!1,this.response.message="Sorry, something went wrong! Please try again later."}finally{this.loading=!1}}}}}),w={class:"cc-subscription-form"},k={key:0,class:"rounded-md bg-green-50 p-4"},x={class:"flex items-center"},S=e("div",{class:"flex-shrink-0"},[e("svg",{class:"h-5 w-5 text-green-400",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z","clip-rule":"evenodd"})])],-1),T={class:"ml-3"},$={class:"mt-2 text-green-700"},N={key:1,class:"rounded-md bg-red-50 p-4"},V={class:"flex items-center"},C=e("div",{class:"flex-shrink-0"},[e("svg",{class:"h-5 w-5 text-red-400",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z","clip-rule":"evenodd"})])],-1),F={class:"ml-3"},R={class:"mt-2 text-red-700"},z={class:"field flex-1"},B=e("label",{for:"subsform-first-name",class:"sr-only"},"First name",-1),P={key:0,class:"mt-2 text-sm text-rose-700"},U={class:"field flex-1"},A=e("label",{for:"subsform-email",class:"sr-only"},"Email",-1),M={key:0,class:"mt-2 text-sm text-rose-700"},E=e("span",{class:"spinner"},null,-1);function j(s,t,n,r,D,O){return a(),i("div",w,[e("div",{ref:"response-message",class:d({hidden:!s.response.message})},[s.response.success===!0?(a(),i("div",k,[e("div",x,[S,e("div",T,[e("div",$,f(s.response.message),1)])])])):l("",!0),s.response.success===!1?(a(),i("div",N,[e("div",V,[C,e("div",F,[e("div",R,f(s.response.message),1)])])])):l("",!0)],2),e("form",{ref:"form",class:d([{hidden:s.response.message},"form flex flex-1 flex-col gap-x-3 gap-y-5 md:flex-row"]),onSubmit:t[3]||(t[3]=g((...o)=>s.doSubmitForm&&s.doSubmitForm(...o),["prevent"]))},[e("div",z,[B,m(e("input",{id:"subsform-first-name","onUpdate:modelValue":t[0]||(t[0]=o=>s.form.firstName=o),type:"text",name:"firstName",class:"min-h-[50px] w-full rounded",placeholder:"First name"},null,512),[[c,s.form.firstName]]),s.v$.form.firstName.$errors.length?(a(),i("div",P,"Please enter your first name")):l("",!0)]),e("div",U,[A,m(e("input",{id:"subsform-email","onUpdate:modelValue":t[1]||(t[1]=o=>s.form.email=o),type:"text",name:"email",class:"min-h-[50px] w-full rounded",placeholder:"Email"},null,512),[[c,s.form.email]]),s.v$.form.email.$errors.length?(a(),i("div",M,"Please enter a valid email address")):l("",!0)]),m(e("input",{"onUpdate:modelValue":t[2]||(t[2]=o=>s.form.gRecaptchaToken=o),type:"hidden",name:"g_recaptcha_response"},null,512),[[c,s.form.gRecaptchaToken]]),e("div",null,[e("button",{type:"submit",class:d([{loading:s.loading},"btn btn-primary"])},[h(" Subscribe "),E],2)])],34)])}const I=y(_,[["render",j]]);export{I as default};