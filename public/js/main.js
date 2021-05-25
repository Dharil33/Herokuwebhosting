const cityName = document.getElementById('cityname');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');
const getinfo = async(event)=>{
    event.preventDefault();
    let cityval = cityName.value;
    
    if(cityval === ""){
        city_name.innerText = `Please write the name before search`;
        datahide.classList.add('data_hide');
    }
    else{
        try{
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=112d2b5dc15bd106d9070008ad46b7d1`;
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];
        temp_real_val.innerText = arrData[0].main.temp;
        const tempMood = arrData[0].weather[0].main;
        //condition to check sunny or cloudy
        if (tempMood == "Clear") {
            temp_status.innerHTML =
                "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            } else if (tempMood == "Clouds") {
            temp_status.innerHTML =
                "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempMood == "Rain") {
            temp_status.innerHTML =
                "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
            temp_status.innerHTML =
                "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";

            }
            datahide.classList.remove('data_hide');
        }catch{
            city_name.innerText =`Please Enter the city name properly`;
            datahide.classList.add('data_hide');
        }
    }
}
submitBtn.addEventListener('click',getinfo);