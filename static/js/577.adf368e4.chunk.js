"use strict";(self.webpackChunkbaggage=self.webpackChunkbaggage||[]).push([[577],{9577:function(a,e,t){t.r(e);var o=t(7313),n=t(8475),d=t(6417);e.default=()=>{const[a,e]=(0,o.useState)(""),[t,c]=(0,o.useState)(""),[l,r]=(0,o.useState)(null),i=a=>{"bagId"===a.target.name?e(a.target.value):"updatedLocation"===a.target.name&&c(a.target.value)};return(0,d.jsxs)("div",{className:"update-bag-location",children:[(0,d.jsx)("h2",{children:"Update Bag Location"}),(0,d.jsxs)("form",{onSubmit:async o=>{if(o.preventDefault(),a&&t)try{const o={id:a,scannedLocation:t};console.log("Bag ID:",a),console.log("Updated Location:",t);const d=await n.Z.put("https://beyond-backend-1-aoh5.onrender.com/v1/baggage/updatelocation",o);console.log("Bag location updated:",d.data),r("location update success"),e(""),c("")}catch(l){console.error("Error updating bag location:",l),r("Error updating location. Please try again.")}else r("Please enter a bag ID and the updated location")},children:[(0,d.jsx)("label",{htmlFor:"bagId",children:"Bag ID:"}),(0,d.jsx)("input",{type:"text",id:"bagId",name:"bagId",value:a,onChange:i,required:!0}),(0,d.jsx)("label",{htmlFor:"updatedLocation",children:"Updated Location:"}),(0,d.jsx)("input",{type:"text",id:"updatedLocation",name:"updatedLocation",value:t,onChange:i,required:!0}),(0,d.jsx)("button",{type:"submit",children:"Update Location"})]}),l&&(0,d.jsx)("p",{className:"error",children:l})]})}}}]);