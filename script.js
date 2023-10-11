let cards =document.getElementsByClassName('card');
let head =document.getElementsByClassName("head")[0];
let button = document.querySelector('.btn');
let cardCountx=[0];

 let count=0,flag=0;

for(let i=0;i<cards.length;i++)
{
    cards[i].addEventListener('click',function ()
{
   let img=document.getElementsByTagName('img');
    if(count==0 || count%2==0)
    {
    
    img[i].src="image/black-x.png";
    }
    else
    {
 img[i].src="image/o.png";
    }
    count++; 
    
});
}
function reload()
{
window.location.reload();
}
button.onclick=reload;



