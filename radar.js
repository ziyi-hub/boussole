let rayon = 2.77;
let data2 = [];
let data = [
    /*{x: 48.6828523, y: 6.1613907},*/ //myCurrent position
    {x: 48.6971757, y: 6.172229},
    {x: 49.1211936, y: 6.1625817},
    {x: 48.6953523, y: 6.1656114},
    {x: 48.6935585, y: 6.1763212},
    {x: 49.120847, y: 6.1612186},
    {x: 48.693109, y: 6.1767028},
    {x: 48.6930183, y: 6.1756424},
    {x: 48.6970022, y: 6.1597459},
    {x: 48.7041168, y: 6.1638692},
    {x: 48.7098925, y: 6.1648232},
    {x: 49.0942539, y: 6.2304682},
    {x: 49.1210973, y: 6.1648048},
    {x: 48.6955015,  y: 6.1934152},
    {x: 49.0924854, y: 6.2274714},
    {x: 48.6518191, y: 6.147208},
    {x: 48.6518424, y: 6.1473745},
    {x: 48.6534173, y: 6.1492879},
    {x: 48.6997235, y: 6.1800651},
    {x: 48.194249, y: 6.4653358},
    {x: 48.194249, y: 6.4653358},
    {x: 48.6558011, y: 6.1535542},
    {x: 48.6729956, y: 6.1702775},
    {x: 48.6597371, y: 6.1883149},
    {x: 48.6691262, y: 6.155318},
    {x: 49.094328, y: 6.230503},
    {x: 48.697458, y: 6.1718112},
    {x: 48.697458, y: 6.1718112},
    {x: 48.6504732, y: 6.142356},
    {x: 48.6495535, y: 6.1411494},
    {x: 48.6507452, y: 6.1425132},
    {x: 48.6675376, y: 6.1565599},
    {x: 48.6675376,  y: 6.1565599},
    {x: 48.6956049, y: 6.1660106},
    {x: 48.6651218, y: 6.1611247},
    {x: 49.094834, y: 6.2298812},
    {x: 49.1163857,  y: 6.2142785},
    {x: 49.1202126, y: 6.1637997},
    {x: 49.114248,  y: 7.0715045},
    {x: 48.2899606,  y: 6.9422293},
    {x: 49.3501138,  y: 6.1738387},
    {x: 49.5272481,  y: 5.7518725},
    {x: 48.1681596,  y: 6.4528284},
    {x: 48.6588883,  y: 6.1513846},
    {x: 48.6835098,   y: 6.1616104},
];


window.onload = () => {
    return navigator.geolocation.getCurrentPosition(function (position) {
        let curLatitude = position.coords.latitude;
        let curLongitude = position.coords.longitude;
        //generateChart("myChart", data, '#2196f3');
        console.log("current position" + curLatitude, curLongitude);
        data.forEach(place => {
            let distance = clacDistance(curLatitude, curLongitude, place.x, place.y);
            if (distance > rayon){
                console.log(distance + place.x);
                console.log(place.x);
                console.log(place.y);
                let cercleLat = curLatitude + (place.x - curLatitude) * rayon / distance;
                let cercleLng = curLongitude + (place.y - curLongitude) * rayon / distance;
                console.log("Lat tranform: " + cercleLat);
                console.log("Lng transform: " + cercleLng);
                data2.push({x: cercleLat, y: cercleLng});
            }else{
                data2.push({x: place.x, y: place.y});
            }
        })
        generateChart("myChart2", data2, 'black');
    })
}


function pointStyle(){
    //let pointStyle = ['rect'];
    let pointStyle = [];
    for(let i = 0; i < data.length; i++){
        pointStyle.push("circle");
    }
    //pointStyle.push("rect");
    return pointStyle;
}


function generateChart(id, data, color){
    let ctx = document.getElementById(id).getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                pointStyle: pointStyle(),
                //label: 'place', // Name the series
                data: data, // Specify the data values array
                borderColor: color, // Add custom color border
                backgroundColor: color, // Add custom color background (Points and Fill)
            }],
        },
        options: {
            // enleve legend
            /*plugins: {
                legend: {
                    display: true
                },
            },*/
            responsive: true, // Instruct chart js to respond nicely.
            maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height
            //enleve l'abscisse et l'ordonnées
            /*scales:{
                x: {
                    display: false
                },
                y: {
                    display: false
                },
            }*/
        }
    });
}


function clacDistance(lat1, lng1, lat2, lng2){
    let radLat1 = lat1 * Math.PI/ 180.0 ;
    let radLat2 = lat2 * Math.PI/ 180.0 ;
    let a = radLat1 - radLat2;
    let b = lng1 * Math.PI/ 180.0 - lng2 * Math.PI/ 180.0 ;
    let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)))
    s = s * 6378.137; //Earth radius
    s = Math.round(s * 10000) / 10000;
    return s.toFixed(2);
}

