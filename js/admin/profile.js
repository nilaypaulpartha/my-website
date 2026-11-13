console.log('Admin js Connected');

//Daily receiving button hidding handler
document.getElementById('Money_Receive_btn').addEventListener('click',(event)=>{admin_panel_hide('Money_Receive')});
document.getElementById('Daily_receiving_cross').addEventListener('click',(event)=>{admin_panel_hide('Money_Receive')});



//Collection button handler
document.getElementById('collection_btn').addEventListener('click',(event)=>{admin_panel_hide('collection_info')});
document.getElementById('collection_info_cross').addEventListener('click',(event)=>{admin_panel_hide('collection_info')});



function admin_panel_hide(opening_id){
    // console.log(val);
    if(document.getElementById(opening_id).style.display=='block'){
        document.getElementById(opening_id).style.display='none';
    }
    else document.getElementById(opening_id).style.display='block';
    
}