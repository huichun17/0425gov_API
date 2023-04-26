const toolType = document.querySelector("#toolTypeId");
const nameCity = document.querySelector("#city");
const weatherItem = document.querySelector("#weather");
const MinTItem = document.querySelector("#MinT");
const MaxTItem = document.querySelector("#MaxT");
const popItem = document.querySelector("#pop");
const weatherIcon = document.querySelector("#weather-icon");

fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-E57D70D4-B6DC-4A32-93B2-55FAF0B342E7"
)
    .then(function (response) {
        return response.json();

    })
    .then(function (data) {
        // console.log(data);

        sourceData = { ...data };
        console.log(sourceData);
    })
    .catch(function (error) {

    });
let arr = [];

toolType.addEventListener("change", function (g) {
    let toolType = g.target;
    arr = sourceData;
    let city;
    let weather; //描述天氣
    let MinT;//最低溫
    let MaxT;
    let pop;
    let i;


    switch (toolType.value) {
        case "0":
            i = 0;
            city = arr.records.location[i].locationName;
            weather = arr.records.location[i].weatherElement[0].time[2].parameter.parameterName;
            MinT = arr.records.location[i].weatherElement[2].time[2].parameter.parameterName;
            MaxT = arr.records.location[i].weatherElement[4].time[2].parameter.parameterName;
            pop = arr.records.location[i].weatherElement[1].time[2].parameter.parameterName;
            break;
        case "1":
            i = 1;
            city = arr.records.location[i].locationName;
            weather = arr.records.location[i].weatherElement[0].time[2].parameter.parameterName;
            MinT = arr.records.location[i].weatherElement[2].time[2].parameter.parameterName;
            MaxT = arr.records.location[i].weatherElement[4].time[2].parameter.parameterName;
            pop = arr.records.location[i].weatherElement[1].time[2].parameter.parameterName;
            break;
        case "2":
            i = 2;
            city = arr.records.location[i].locationName;
            weather = arr.records.location[i].weatherElement[0].time[2].parameter.parameterName;
            MinT = arr.records.location[i].weatherElement[2].time[2].parameter.parameterName;
            MaxT = arr.records.location[i].weatherElement[4].time[2].parameter.parameterName;
            pop = arr.records.location[i].weatherElement[1].time[2].parameter.parameterName;
            break;
        case "3":
            i = 3;
            city = arr.records.location[i].locationName;
            weather = arr.records.location[i].weatherElement[0].time[2].parameter.parameterName;
            MinT = arr.records.location[i].weatherElement[2].time[2].parameter.parameterName;
            MaxT = arr.records.location[i].weatherElement[4].time[2].parameter.parameterName;
            pop = arr.records.location[i].weatherElement[1].time[2].parameter.parameterName;
            break;
        case "4":
            i = 4;
            city = arr.records.location[i].locationName;
            weather = arr.records.location[i].weatherElement[0].time[2].parameter.parameterName;
            MinT = arr.records.location[i].weatherElement[2].time[2].parameter.parameterName;
            MaxT = arr.records.location[i].weatherElement[4].time[2].parameter.parameterName;
            pop = arr.records.location[i].weatherElement[1].time[2].parameter.parameterName;
            break;
        case "5":
            i = 5;
            city = arr.records.location[i].locationName;
            weather = arr.records.location[i].weatherElement[0].time[2].parameter.parameterName;
            MinT = arr.records.location[i].weatherElement[2].time[2].parameter.parameterName;
            MaxT = arr.records.location[i].weatherElement[4].time[2].parameter.parameterName;
            pop = arr.records.location[i].weatherElement[1].time[2].parameter.parameterName;
            break;
        case "6":
            i = 6;
            city = arr.records.location[i].locationName;
            weather = arr.records.location[i].weatherElement[0].time[2].parameter.parameterName;
            MinT = arr.records.location[i].weatherElement[2].time[2].parameter.parameterName;
            MaxT = arr.records.location[i].weatherElement[4].time[2].parameter.parameterName;
            pop = arr.records.location[i].weatherElement[1].time[2].parameter.parameterName;
            break;
        case "7":
            i = 7;
            city = arr.records.location[i].locationName;
            weather = arr.records.location[i].weatherElement[0].time[2].parameter.parameterName;
            MinT = arr.records.location[i].weatherElement[2].time[2].parameter.parameterName;
            MaxT = arr.records.location[i].weatherElement[4].time[2].parameter.parameterName;
            pop = arr.records.location[i].weatherElement[1].time[2].parameter.parameterName;
            break;
        case "8":
            i = 8;
            city = arr.records.location[i].locationName;
            weather = arr.records.location[i].weatherElement[0].time[2].parameter.parameterName;
            MinT = arr.records.location[i].weatherElement[2].time[2].parameter.parameterName;
            MaxT = arr.records.location[i].weatherElement[4].time[2].parameter.parameterName;
            pop = arr.records.location[i].weatherElement[1].time[2].parameter.parameterName;
            break;
        case "9":
            i = 9;
            city = arr.records.location[i].locationName;
            weather = arr.records.location[i].weatherElement[0].time[2].parameter.parameterName;
            MinT = arr.records.location[i].weatherElement[2].time[2].parameter.parameterName;
            MaxT = arr.records.location[i].weatherElement[4].time[2].parameter.parameterName;
            pop = arr.records.location[i].weatherElement[1].time[2].parameter.parameterName;
            break;
        case "10":
            i = 10;
            city = arr.records.location[i].locationName;
            weather = arr.records.location[i].weatherElement[0].time[2].parameter.parameterName;
            MinT = arr.records.location[i].weatherElement[2].time[2].parameter.parameterName;
            MaxT = arr.records.location[i].weatherElement[4].time[2].parameter.parameterName;
            pop = arr.records.location[i].weatherElement[1].time[2].parameter.parameterName;
            break;
        case "11":
            i = 11;
            city = arr.records.location[i].locationName;
            weather = arr.records.location[i].weatherElement[0].time[2].parameter.parameterName;
            MinT = arr.records.location[i].weatherElement[2].time[2].parameter.parameterName;
            MaxT = arr.records.location[i].weatherElement[4].time[2].parameter.parameterName;
            pop = arr.records.location[i].weatherElement[1].time[2].parameter.parameterName;
            break;
        case "12":
            i = 12;
            city = arr.records.location[i].locationName;
            weather = arr.records.location[i].weatherElement[0].time[2].parameter.parameterName;
            MinT = arr.records.location[i].weatherElement[2].time[2].parameter.parameterName;
            MaxT = arr.records.location[i].weatherElement[4].time[2].parameter.parameterName;
            pop = arr.records.location[i].weatherElement[1].time[2].parameter.parameterName;
            break;
        case "13":
            i = 13;
            city = arr.records.location[i].locationName;
            weather = arr.records.location[i].weatherElement[0].time[2].parameter.parameterName;
            MinT = arr.records.location[i].weatherElement[2].time[2].parameter.parameterName;
            MaxT = arr.records.location[i].weatherElement[4].time[2].parameter.parameterName;
            pop = arr.records.location[i].weatherElement[1].time[2].parameter.parameterName;
            break;
        case "14":
            i = 14;
            city = arr.records.location[i].locationName;
            weather = arr.records.location[i].weatherElement[0].time[2].parameter.parameterName;
            MinT = arr.records.location[i].weatherElement[2].time[2].parameter.parameterName;
            MaxT = arr.records.location[i].weatherElement[4].time[2].parameter.parameterName;
            pop = arr.records.location[i].weatherElement[1].time[2].parameter.parameterName;
            break;
        case "15":
            i = 15;
            city = arr.records.location[i].locationName;
            weather = arr.records.location[i].weatherElement[0].time[2].parameter.parameterName;
            MinT = arr.records.location[i].weatherElement[2].time[2].parameter.parameterName;
            MaxT = arr.records.location[i].weatherElement[4].time[2].parameter.parameterName;
            pop = arr.records.location[i].weatherElement[1].time[2].parameter.parameterName;
            break;
        case "16":
            i = 16;
            city = arr.records.location[i].locationName;
            weather = arr.records.location[i].weatherElement[0].time[2].parameter.parameterName;
            MinT = arr.records.location[i].weatherElement[2].time[2].parameter.parameterName;
            MaxT = arr.records.location[i].weatherElement[4].time[2].parameter.parameterName;
            pop = arr.records.location[i].weatherElement[1].time[2].parameter.parameterName;
            break;
        case "17":
            i = 17;
            city = arr.records.location[i].locationName;
            weather = arr.records.location[i].weatherElement[0].time[2].parameter.parameterName;
            MinT = arr.records.location[i].weatherElement[2].time[2].parameter.parameterName;
            MaxT = arr.records.location[i].weatherElement[4].time[2].parameter.parameterName;
            pop = arr.records.location[i].weatherElement[1].time[2].parameter.parameterName;
            break;
        case "18":
            i = 18;
            city = arr.records.location[i].locationName;
            weather = arr.records.location[i].weatherElement[0].time[2].parameter.parameterName;
            MinT = arr.records.location[i].weatherElement[2].time[2].parameter.parameterName;
            MaxT = arr.records.location[i].weatherElement[4].time[2].parameter.parameterName;
            pop = arr.records.location[i].weatherElement[1].time[2].parameter.parameterName;
            break;
        case "19":
            i = 19;
            city = arr.records.location[i].locationName;
            weather = arr.records.location[i].weatherElement[0].time[2].parameter.parameterName;
            MinT = arr.records.location[i].weatherElement[2].time[2].parameter.parameterName;
            MaxT = arr.records.location[i].weatherElement[4].time[2].parameter.parameterName;
            pop = arr.records.location[i].weatherElement[1].time[2].parameter.parameterName;
            break;
        case "20":
            i = 20;
            city = arr.records.location[i].locationName;
            weather = arr.records.location[i].weatherElement[0].time[2].parameter.parameterName;
            MinT = arr.records.location[i].weatherElement[2].time[2].parameter.parameterName;
            MaxT = arr.records.location[i].weatherElement[4].time[2].parameter.parameterName;
            pop = arr.records.location[i].weatherElement[1].time[2].parameter.parameterName;
            break;
        case "21":
            i = 21;
            city = arr.records.location[i].locationName;
            weather = arr.records.location[i].weatherElement[0].time[2].parameter.parameterName;
            MinT = arr.records.location[i].weatherElement[2].time[2].parameter.parameterName;
            MaxT = arr.records.location[i].weatherElement[4].time[2].parameter.parameterName;
            pop = arr.records.location[i].weatherElement[1].time[2].parameter.parameterName;
            break;

    }

    function changeImg(weather) {
        if (weather === '多雲') {
            return '<i class="fa-solid fa-cloud fa-2xl" style="color: #578dea;"></i>'
        } else if (weather === '多雲時陰') {
            return '<i class="fa-solid fa-cloud fa-2xl" style="color: #373839;"></i>'
        } else if (weather === '陰時多雲短暫雨') {
            return '<i class="fa-solid fa-cloud-rain fa-2xl" style="color: #475366;"></i>'
        }
    }

    let weatherImg = changeImg(weather);
    nameCity.textContent = city;
    weatherItem.textContent = weather;
    MinTItem.textContent = `${MinT}~`;
    MaxTItem.textContent = `${MaxT}°C`;
    popItem.textContent = `降雨機率${pop}%`;

});


