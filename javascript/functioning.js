function updateTheTime(){
    let mexicoCityElement=document.querySelector("#mexico-city");
    let mexicoCityDate=mexicoCityElement.querySelector(".date")
    let mexicoCityTime=mexicoCityElement.querySelector(".time");
    let seoulElement=document.querySelector("#seoul");
    let seoulDate=seoulElement.querySelector(".date");
    let seoulTime=seoulElement.querySelector(".time")
    let londonElement=document.querySelector("#london");
    let londonDate=londonElement.querySelector(".date")
    let londonTime=londonElement.querySelector(".time");

    let mexicoTime=moment().tz("America/Mexico_City");
    let seoul=moment().tz("Asia/Seoul");
    let london=moment().tz("Europe/London");

    mexicoCityDate.innerHTML=mexicoTime.format("MMMM Do YYYY");
    mexicoCityTime.innerHTML=mexicoTime.format("h:mm:ss [<small>]A[</small>]");
    seoulDate.innerHTML=seoul.format("MMMM Do YYYY");
    seoulTime.innerHTML=seoul.format("h:mm:ss [<small>]A[</small>]");
    londonDate.innerHTML=london.format("MMMM Do YYYY");
    londonTime.innerHTML=london.format("h:mm:ss [<small>]A[</small>]");


}
updateTheTime();
setInterval(updateTheTime,1000);
