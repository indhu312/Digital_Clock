const clock=document.querySelector('.clock');
function Clock(){
    //create the object
    var time=new Date();
    //display the current time
    var hr=time.getHours();
    var mins=time.getMinutes();
    var sec=time.getSeconds();
    var txt="AM";
    //displays in 12 hr
    if(hr===0){
        hr<=12;
    }
    if(hr>12 && mins === 0 && sec !=0){
        hr=-12;
        txt="PM"
    }
    //single digit that includes zero in it'09:02:01'
    hr=hr<10?'0'+hr:hr;
    mins=mins<10?'0'+mins:mins;
    sec=sec<10?'0'+sec:sec;
    //show the time rotation in html page
    clock.innerHTML=`${hr}:${mins}:${sec} ${txt}`;
}
Clock();
setInterval(Clock,1000);
