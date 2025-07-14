function updateTheTime(){
    
    
    let parisElement=document.querySelector("#paris");

    let parisDate=parisElement.querySelector(".date");
    let parisTime=parisElement.querySelector(".time");
              
    let paris=moment().tz("Asia/Seoul");
               
    parisDate.innerHTML=paris.format("MMMM Do YYYY");
    parisTime.innerHTML=paris.format("h:mm:ss [<small>]A[</small>]");
        


}
    


updateTheTime();
setInterval(updateTheTime,1000);



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
