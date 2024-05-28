let sections=document.getElementsByClassName("description");
function displaySection(id){
    for(let i=0;i<sections.length;i++){
        if(sections[i].id===id){
            sections[i].style.display="block"}
            else{sections[i].style.display="none"}
    }
}



