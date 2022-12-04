function show(){
    if(getComputedStyle(sidebar).display != "none")
    {
        sidebar.style.display = "none";
    } 
    else {
        sidebar.style.display = "block";
    }

}
