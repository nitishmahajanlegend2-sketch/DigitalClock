const weekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
function currentinfo(){
    const d = new Date;
    let cdate=d.getDate();
    let cmonth=d.getMonth();
    let cyear=d.getFullYear();
    let cday=d.getDay();
    let cm = d.getMinutes();
    console.log(typeof(cm));
    let cs = d.getSeconds();
    let ch = d.getHours();
    if(cm<10){
        cm="0"+cm;
    }
    if(ch<10){
        ch="0"+ch;
    }
     if(cs<10){
        cs="0"+cs;
    }
    document.getElementById("box1").innerHTML=ch+":";
    document.getElementById("box2").innerHTML=cm+":";
    document.getElementById("box3").innerHTML=cs;

    document.querySelector(".dayi").innerHTML=cdate+" "+months[cmonth]+" "+cyear+","+weekdays[cday];

}
currentinfo();
setInterval(currentinfo,1000);