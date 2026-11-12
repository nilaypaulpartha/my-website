/* bar modifiier for image and others */
console.log("profile.js loaded");
document.getElementById('profile_btn').addEventListener('click',(event)=>{auto_view_hide('profile_details','profile_btn')});

function auto_view_hide(val,btn){
    // console.log(val);
    const temp=document.getElementById(val);
    const temp1=document.getElementById(btn);
    if(temp.style.display=='none'){
        temp.style.display='block';
        temp1.querySelector('img').src ='../images/Website/arrow_down.svg';
    }
    else{
        temp.style.display='none';
        temp1.querySelector('img').src ='../images/Website/arrow_up.svg';
    }
    
}

window.onload = () => {
const arr="details";
    const items=document.getElementsByClassName(arr);
    for (let i = 0; i < items.length; i++) {
        items[i].style.display = "none";
    }
};
/* bar modifier end */