let lang="en";

fetch("posts.json")
.then(r=>r.json())
.then(d=>{
 render(d);
});

function render(data){
 let html="";
 data.forEach(p=>{
  html+=`
  <div class="card">
   <img src="${p.image}">
   <h2>${p.title}</h2>
   <p>${p.tags.join(" ")}</p>
   <a href="post.html?id=${p.id}">Read</a>
  </div>`;
 });
 document.getElementById("posts").innerHTML=html;
}

function searchPost(){
 let v=document.getElementById("search").value.toLowerCase();
 document.querySelectorAll(".card").forEach(c=>{
  c.style.display=c.innerText.toLowerCase().includes(v)?"block":"none";
 });
}

function setLang(l){
 lang=l;
 alert("Language set to "+l);
}

function toggleTheme(){
 document.body.classList.toggle("dark");
}
