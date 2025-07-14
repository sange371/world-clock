function updateTheTime(){
    
    let mexicoCityElement=document.querySelector("#mexico-city");
    let seoulElement=document.querySelector("#seoul");
    let londonElement=document.querySelector("#london");
    if (mexicoCityElement || seoulElement || londonElement){

        let mexicoCityDate=mexicoCityElement.querySelector(".date")
        let mexicoCityTime=mexicoCityElement.querySelector(".time");
        let seoulDate=seoulElement.querySelector("#date");
        let seoulTime=seoulElement.querySelector("#time");
        let londonDate=londonElement.querySelector("#date");
        let londonTime=londonElement.querySelector("#time");

        let mexicoTime=moment().tz("America/Mexico_City");
        let seoul=moment().tz("Asia/Seoul");
        let london=moment().tz("europe/London");

        mexicoCityDate.innerHTML=mexicoTime.format("MMMM Do YYYY");
        mexicoCityTime.innerHTML=mexicoTime.format("h:mm:ss [<small>]A[</small>]");
        seoulDate.innerHTML=seoul.format("MMMM Do YYYY");
        seoulTime.innerHTML=seoul.format("h:mm:ss [<small>]A[</small>]");
        londonDate.innerHTML=london.format("MMMM Do YYYY");
        londonTime.innerHTML=london.format("h:mm:ss [<small>]A[</small>]");


    }
    
}


updateTheTime();



function updateTheCityTime(event){
    let cityTimeZone=event.target.value;
    if (cityTimeZone==="current-location"){
        cityTimeZone=moment.tz.guess();
    }


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
citiesSelector.addEventListener("change", updateTheCityTime);

setInterval(updateTheCityTime , 1000);
