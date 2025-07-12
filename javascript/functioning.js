function updateTheTime(){
    
    let mexicoCityElement=document.querySelector("#mexico-city");
    if (mexicoCityElement){
        let mexicoCityDate=mexicoCityElement.querySelector(".date")
        let mexicoCityTime=mexicoCityElement.querySelector(".time");

        let mexicoTime=moment().tz("America/Mexico_City");

        mexicoCityDate.innerHTML=mexicoTime.format("MMMM Do YYYY");
        mexicoCityTime.innerHTML=mexicoTime.format("h:mm:ss [<small>]A[</small>]");
    }
    

    let seoulElement=document.querySelector("#seoul");
    if (seoulElement){
        
        let seoulDate=seoulElement.querySelector(".date");
        let seoulTime=seoulElement.querySelector(".time");

        let seoul=moment().tz("Asia/Seoul");

        seoulDate.innerHTML=seoul.format("MMMM Do YYYY");
        seoulTime.innerHTML=seoul.format("h:mm:ss [<small>]A[</small>]");
    }

    let londonElement=document.querySelector("#london");
    if (londonElement){
        let londonDate=londonElement.querySelector(".date")
        let londonTime=londonElement.querySelector(".time");

        let london=moment().tz("Europe/London");

        londonDate.innerHTML=london.format("MMMM Do YYYY");
        londonTime.innerHTML=london.format("h:mm:ss [<small>]A[</small>]");

   
    }
   

   

}
updateTheTime();
setInterval(updateTheTime,1000);


function updateTheCityTime(event){
    let cityTimeZone=event.target.value;
    let cityName=cityTimeZone.replace("_"," ").split("/")[1];
    let cityTime=moment().tz(cityTimeZone);
    let citiesElement=document.querySelector("#cities");
    citiesElement.innerHTML=`<div class="city">
                                <div>
                                <h2>${cityName}</h2>
                                <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
                                </div>
                                <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</div>
                             </div>
                                `;
}

let citiesSelector=document.querySelector("#city-selector");
citiesSelector.addEventListener("change",updateTheCityTime);


