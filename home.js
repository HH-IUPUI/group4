function show(){
    var show = document.getElementsByClassName("positiveCollapse");

    if (show[0].style.display === "none"){
        show[0].style.display = "block";
    } else{
        show[0].style.display = "none";
    }
}