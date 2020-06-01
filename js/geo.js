var mapIcon = document.querySelector(".mapIcon");

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude: latitude, // latitude,로 생략 가능
        longitude: longitude
    };
    console.log(latitude);
    window.location.href = `https://map.naver.com/v5/search/꽃집?c=${longitude},${latitude},15,0,0,0,dh`;
}

function handleGeoError(){
    console.log("Can't access GeoLocation");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

mapIcon.addEventListener("click",askForCoords);