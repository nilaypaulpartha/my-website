/* bar modifiier for image and others */
console.log("profile.js loaded");

document.getElementById('profile_btn').addEventListener('click',(event)=>{auto_view_hide('profile_details','profile_btn')});
document.getElementById('complain_btn').addEventListener('click',(event)=>{auto_view_hide('complain_details','complain_btn')});

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

// window.onload = () => {
// const arr="details";
//     const items=document.getElementsByClassName(arr);
//     for (let i = 0; i < items.length; i++) {
//         items[i].style.display = "none";
//     }
// };
/* bar modifier end */




//comment and complain handler

function update_comment_from_txt(id_name,location){
    const val=document.getElementById(id_name).value;

    const temp_div=document.createElement('div');
    const temp1_div=document.createElement('div');
    const temp2_div=document.createElement('div');
    //temp_div
    temp_div.style.display='flex';

    //img
    const temp_img=document.createElement('img');
    temp_img.src='../images/Website/user.jpg';
    temp_img.style.width='40px';
    temp1_div.append(temp_img);
    temp_div.append(temp1_div);

    //comment
    const temp_comment=document.createElement('p');
    temp_comment.innerText=val;
    temp_comment.classList.add('comment_style');
    temp2_div.append(temp_comment);
    temp_div.appendChild(temp2_div);
    document.getElementById(id_name).value='';
    
    
    document.getElementById(location).appendChild(temp_div);
    
}
document.getElementById('complain_submit').addEventListener('click',(event)=>{update_comment_from_txt('complain_text','All_complain')});
//comment and complain handler off