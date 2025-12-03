function $(s){return document.querySelector(s)}
function $all(s){return Array.from(document.querySelectorAll(s))}

(function(){
  const btn=$("#updateBannerBtn"),img=$("#bannerImage"),cap=$("#bannerCaption");
  if(!btn||!img)return;
  btn.addEventListener("click",()=>{
    img.src="pythoncourse.jpg";
    if(cap)cap.textContent="Python Course — Updated Banner!";
  });
})();

(function(){
  const btn=$("#updateCoursesBtn"),descs=$all(".course-desc");
  if(!btn||descs.length===0)return;
  const text=[
    "Learn layout, flexbox, grid and responsive design with projects.",
    "Master JavaScript fundamentals, DOM, events and ES6+ patterns.",
    "Python fundamentals for automation, data and web development."
  ];
  btn.addEventListener("click",()=>{
    descs.forEach((p,i)=>p.textContent=text[i]);
  });
})();

(function(){
  const btn=$("#updateAnnouncementBtn"),msg=$("#announcementText");
  if(!btn||!msg)return;
  btn.addEventListener("click",()=>{
    msg.textContent="Python Batch starts Monday — Register now!";
  });
})();

function attachForm(formSel,fields,msgSel){
  const form=$(formSel),msg=$(msgSel);
  if(!form)return;
  form.addEventListener("submit",e=>{
    e.preventDefault();
    let ok=true;
    fields.forEach(id=>{
      const el=document.getElementById(id);
      if(!el||!el.value.trim())ok=false;
    });
    if(!msg){
      alert(ok?"Success":"Please fill all fields!");
      return;
    }
    msg.style.color=ok?"green":"crimson";
    msg.textContent=ok?"Success (demo)!":"Please fill all fields.";
  });
}

attachForm("#loginForm",["loginEmail","loginPassword"],"#loginMsg");
attachForm("#signupForm",["signupName","signupEmail","signupPassword"],"#signupMsg");
attachForm("#contactForm",["contactName","contactEmail","contactMessage"],"#contactMsg");

(function(){
  const f=$("#loginForm");
  if(!f)return;
  const e=document.getElementById("loginEmail");
  if(e)e.addEventListener("keyup",ev=>{
    if(ev.key==="Enter"){
      const p=document.getElementById("loginPassword");
      if(p)p.focus();
    }
  });
})();

(function(){
  console.info("buttons=",document.querySelectorAll("button").length,
  "links=",document.querySelectorAll("a").length,
  "forms=",document.querySelectorAll("form").length);
})();