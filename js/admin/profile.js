console.log('Admin js Connected');

//Daily receiving button hidding handler
document.getElementById('Money_Receive_btn').addEventListener('click',(event)=>{admin_panel_hide('Money_Receive')});
document.getElementById('Daily_receiving_cross').addEventListener('click',(event)=>{admin_panel_hide('Money_Receive')});



//Collection button handler
document.getElementById('collection_btn').addEventListener('click',(event)=>{admin_panel_hide('collection_info')});
document.getElementById('collection_info_cross').addEventListener('click',(event)=>{admin_panel_hide('collection_info')});

// complain box update

document.getElementById('complain_box_btn').addEventListener('click',(event)=>{admin_panel_hide('complain_box_info')});
document.getElementById('complain_box_info_cross').addEventListener('click',(event)=>{admin_panel_hide('complain_box_info')});


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


//update button handler

document.getElementById('update_btn').addEventListener('click',(event)=>{admin_panel_hide('update_info')});
document.getElementById('update_info_cross').addEventListener('click',(event)=>{admin_panel_hide('update_info')});





function admin_panel_hide(opening_id){
    // console.log(val);
    if(document.getElementById(opening_id).style.display=='block'){
        document.getElementById(opening_id).style.display='none';
    }
    else document.getElementById(opening_id).style.display='block';
    
}