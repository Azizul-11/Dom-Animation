function mymove(){
    let pos=0;

    const element=document.getElementById("inside");

    const id=setInterval(frame,100);

    function frame(){
        if(pos==345)
        {
            clearInterval(id);
        }
        pos++;
        element.style.top=pos+"px";
        element.style.left=pos+"px";
    }
}