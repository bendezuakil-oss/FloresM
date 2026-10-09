const loader=document.getElementById('loader');
const cover=document.getElementById('cover');
const screen=document.getElementById('envScreen');
const env=document.getElementById('env');
const final=document.getElementById('final');
setTimeout(()=>loader.classList.add('hide'),1100);
function showEnvelope(){cover.style.display='none';screen.classList.add('active');window.scrollTo({top:0,behavior:'smooth'});}
document.getElementById('open').addEventListener('click',showEnvelope);
function openEnvelope(){if(env.classList.contains('open'))return;env.classList.add('open');setTimeout(()=>{screen.classList.remove('active');final.classList.add('active');window.scrollTo({top:0,behavior:'smooth'});},1150)}
env.addEventListener('click',openEnvelope);env.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openEnvelope()}});
document.getElementById('again').addEventListener('click',()=>{final.classList.remove('active');env.classList.remove('open');cover.style.display='flex';window.scrollTo({top:0,behavior:'smooth'});});
const canvas=document.getElementById('particles'),ctx=canvas.getContext('2d');let particles=[];
function resize(){const dpr=Math.min(window.devicePixelRatio||1,2);canvas.width=innerWidth*dpr;canvas.height=innerHeight*dpr;canvas.style.width=innerWidth+'px';canvas.style.height=innerHeight+'px';ctx.setTransform(dpr,0,0,dpr,0,0);particles=Array.from({length:Math.min(45,Math.floor(innerWidth/10))},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.7+.4,s:Math.random()*.32+.08,a:Math.random()*.45+.12}));}
function draw(){ctx.clearRect(0,0,innerWidth,innerHeight);for(const p of particles){p.y-=p.s;if(p.y<0){p.y=innerHeight;p.x=Math.random()*innerWidth}ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(220,183,248,${p.a})`;ctx.fill()}requestAnimationFrame(draw)}
resize();window.addEventListener('resize',resize);draw();
