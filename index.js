// Add input element inside form, before button, to take fruit description
// Add input element inside form, before button, to take fruit description
const newinputelement=document.createElement('input');
newinputelement.type='text';
newinputelement.placeholder='fruit description...';
newinputelement.id='description';
newinputelement.name='description';
const form=document.querySelector('form');
const button=document.querySelector('button');
form.insertBefore(newinputelement,button);
//aading my entered fruit element into list
const Fruits=document.querySelector('.fruits');
form.addEventListener('submit',function(event){
  event.preventDefault();
const fruittoAdd=document.getElementById('fruit-to-add');
const newinput2=document.getElementById('description');
const para=document.createElement('p');
const paratext=document.createTextNode(newinput2.value);
//para.style="font-style=italic";
  para.style.fontStyle = "italic";

para.appendChild(paratext);
const newli=document.createElement('li');
const newlitext=document.createTextNode(fruittoAdd.value);
newli.appendChild(newlitext);
newli.appendChild(para);
newli.className='fruit';
const deletebtn=document.createElement('button');
const deletebtntext=document.createTextNode('x');
deletebtn.appendChild(deletebtntext);
deletebtn.className='delete-btn';
newli.appendChild(deletebtn);
Fruits.appendChild(newli);
})
/////deleting a fruit
Fruits.addEventListener('click',function(event){
    if(event.target.classList.contains('delete-btn'))
    {
        const fruittodelete=event.target.parentElement;
        Fruits.removeChild(fruittodelete);
    }
})
/////adding filter
const Filter=document.getElementById('filter');
Filter.addEventListener('keyup',function(event){
    const textentered=event.target.value.toLowerCase();
    const fruititems=document.querySelectorAll('.fruits li');
    for(let i=0;i<fruititems.length;i++)
    {
     const currentfruittext=fruititems[i].firstChild.textContent.toLowerCase();
   const currentFruitDesc=fruititems[i].firstElementChild.firstChild.textContent.toLowerCase();

      if((currentfruittext.indexOf(textentered)===-1 && currentFruitDesc.includes(textentered)===false))
        {
            fruititems[i].style.display='none';
        }
        else
        {
            fruititems[i].style.display='flex';
        }
    }
})


