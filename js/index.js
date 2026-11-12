function show_dropdown(){
    const docs=document.getElementById("welcome_msg_contact");
    if(docs){
        if(docs.style.display=="none"){
            docs.style.display="flex";
        }
        else{
            docs.style.display="none";
        }
    }
}


// for transition of a bar
function transition(id_name){
    const docs=document.getElementById(id_name);
    if(docs){
        if(docs.style.display=="none"){
            docs.style.display="block";
            
        }
        else{
            docs.style.display="none";
        }
    }

}

window.onload = () => {
// for hiding on initialization
const arr="transition_up_down_00a";
  //document.getElementById(arr).style.display="none";
//end of hiding

};