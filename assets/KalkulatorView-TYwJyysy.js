import{_,c as d,d as i,w as p,e as o,v as l,f as h,t as r,g as b,o as g,p as m,b as c}from"./index-BAnFyss2.js";const v={name:"Kalkulator",data(){return{bilangan1:0,bilangan2:0,hasil:null,operasi:"tambah",tinggi:null,berat:null,bmi:null,statusBMI:"",usia:null,jenisKelamin:"pria",beratBadan:null,tinggiBadan:null,aktivitas:"sedang",kalori:null,saranKalori:""}},methods:{hitungJumlah(){switch(this.operasi){case"tambah":this.hasil=this.bilangan1+this.bilangan2;break;case"kurang":this.hasil=this.bilangan1-this.bilangan2;break;case"kali":this.hasil=this.bilangan1*this.bilangan2;break;case"bagi":this.hasil=this.bilangan1/this.bilangan2;break}},hitungBMI(){const a=this.tinggi/100;this.bmi=(this.berat/(a*a)).toFixed(2),this.statusBMI=this.determineBMIStatus(this.bmi)},determineBMIStatus(a){return a<18.5?"Underweight":a>=18.5&&a<25?"Normal":a>=25&&a<30?"Overweight":"Obese"},hitungKalori(){this.kalori=2e3,this.saranKalori="Maintain weight"}}},s=a=>(m("data-v-f873eab4"),a=a(),c(),a),k={class:"container"},B={class:"kalkulator"},f=s(()=>i("h1",null,"Kalkulator",-1)),K={class:"input-group"},I=s(()=>i("label",{for:"bilangan1"},"Bilangan 1:",-1)),M={class:"input-group"},y=s(()=>i("label",{for:"bilangan2"},"Bilangan 2:",-1)),S={class:"input-group"},V=s(()=>i("label",{for:"operasi"},"Operasi:",-1)),U=s(()=>i("option",{value:"tambah"},"Penjumlahan",-1)),w=s(()=>i("option",{value:"kurang"},"Pengurangan",-1)),j=s(()=>i("option",{value:"kali"},"Perkalian",-1)),x=s(()=>i("option",{value:"bagi"},"Pembagian",-1)),H=[U,w,j,x],P=s(()=>i("button",{type:"submit"},"Hitung",-1)),T={key:0},J={class:"kalkulator-bmi"},N=s(()=>i("h1",null,"Kalkulator BMI",-1)),O={class:"input-group"},A=s(()=>i("label",{for:"tinggi"},"Tinggi (cm):",-1)),D={class:"input-group"},C=s(()=>i("label",{for:"berat"},"Berat (kg):",-1)),E=s(()=>i("button",{type:"submit"},"Hitung BMI",-1)),F={key:0},R={class:"kalkulator-kalori"},W=s(()=>i("h1",null,"Kalkulator Kalori",-1)),q={class:"input-group"},z=s(()=>i("label",{for:"usia"},"Usia:",-1)),G={class:"input-group"},L=s(()=>i("label",{for:"jenisKelamin"},"Jenis Kelamin:",-1)),Q=s(()=>i("option",{value:"pria"},"Pria",-1)),X=s(()=>i("option",{value:"wanita"},"Wanita",-1)),Y=[Q,X],Z={class:"input-group"},$=s(()=>i("label",{for:"beratBadan"},"Berat Badan (kg):",-1)),ii={class:"input-group"},ti=s(()=>i("label",{for:"tinggiBadan"},"Tinggi Badan (cm):",-1)),ni={class:"input-group"},ei=s(()=>i("label",{for:"aktivitas"},"Tingkat Aktivitas:",-1)),si=s(()=>i("option",{value:"rendah"},"Rendah",-1)),ai=s(()=>i("option",{value:"sedang"},"Sedang",-1)),oi=s(()=>i("option",{value:"tinggi"},"Tinggi",-1)),li=[si,ai,oi],ui=s(()=>i("button",{type:"submit"},"Hitung Kalori",-1)),ri={key:0};function di(a,n,gi,pi,t,u){return g(),d("div",k,[i("section",B,[f,i("form",{class:"form",onSubmit:n[3]||(n[3]=p((...e)=>u.hitungJumlah&&u.hitungJumlah(...e),["prevent"]))},[i("div",K,[I,o(i("input",{"onUpdate:modelValue":n[0]||(n[0]=e=>t.bilangan1=e),id:"bilangan1",type:"number"},null,512),[[l,t.bilangan1,void 0,{number:!0}]])]),i("div",M,[y,o(i("input",{"onUpdate:modelValue":n[1]||(n[1]=e=>t.bilangan2=e),id:"bilangan2",type:"number"},null,512),[[l,t.bilangan2,void 0,{number:!0}]])]),i("div",S,[V,o(i("select",{"onUpdate:modelValue":n[2]||(n[2]=e=>t.operasi=e),id:"operasi"},H,512),[[h,t.operasi]])]),P,t.hasil!==null?(g(),d("div",T,[i("p",null,"Hasil: "+r(t.hasil),1)])):b("",!0)],32)]),i("section",J,[N,i("form",{class:"form",onSubmit:n[6]||(n[6]=p((...e)=>u.hitungBMI&&u.hitungBMI(...e),["prevent"]))},[i("div",O,[A,o(i("input",{"onUpdate:modelValue":n[4]||(n[4]=e=>t.tinggi=e),id:"tinggi",type:"number"},null,512),[[l,t.tinggi,void 0,{number:!0}]])]),i("div",D,[C,o(i("input",{"onUpdate:modelValue":n[5]||(n[5]=e=>t.berat=e),id:"berat",type:"number"},null,512),[[l,t.berat,void 0,{number:!0}]])]),E,t.bmi!==null?(g(),d("div",F,[i("p",null,"BMI: "+r(t.bmi),1),i("p",null,"Status: "+r(t.statusBMI),1)])):b("",!0)],32)]),i("section",R,[W,i("form",{class:"form",onSubmit:n[12]||(n[12]=p((...e)=>u.hitungKalori&&u.hitungKalori(...e),["prevent"]))},[i("div",q,[z,o(i("input",{"onUpdate:modelValue":n[7]||(n[7]=e=>t.usia=e),id:"usia",type:"number"},null,512),[[l,t.usia,void 0,{number:!0}]])]),i("div",G,[L,o(i("select",{"onUpdate:modelValue":n[8]||(n[8]=e=>t.jenisKelamin=e),id:"jenisKelamin"},Y,512),[[h,t.jenisKelamin]])]),i("div",Z,[$,o(i("input",{"onUpdate:modelValue":n[9]||(n[9]=e=>t.beratBadan=e),id:"beratBadan",type:"number"},null,512),[[l,t.beratBadan,void 0,{number:!0}]])]),i("div",ii,[ti,o(i("input",{"onUpdate:modelValue":n[10]||(n[10]=e=>t.tinggiBadan=e),id:"tinggiBadan",type:"number"},null,512),[[l,t.tinggiBadan,void 0,{number:!0}]])]),i("div",ni,[ei,o(i("select",{"onUpdate:modelValue":n[11]||(n[11]=e=>t.aktivitas=e),id:"aktivitas"},li,512),[[h,t.aktivitas]])]),ui,t.kalori!==null?(g(),d("div",ri,[i("p",null,"Kebutuhan Kalori Harian: "+r(t.kalori)+" kcal",1),i("p",null,"Saran Asupan: "+r(t.saranKalori),1)])):b("",!0)],32)])])}const bi=_(v,[["render",di],["__scopeId","data-v-f873eab4"]]);export{bi as default};
