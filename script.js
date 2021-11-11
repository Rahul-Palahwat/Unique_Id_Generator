let sub=document.getElementById('but');
let time=new Date();
let d=Date.now()
let id='_' + Math.random().toString(36).substr(2, 9);
sub.addEventListener('click',()=>{
    let user=document.getElementById('user').value;
    document.getElementById('heading').style.marginTop="20vh";
    document.getElementById('output').style.display="block";
    document.getElementById('output').innerHTML=`ID:${id}<br><br>User Name:${user}<br><br>Time:${time}`;
})