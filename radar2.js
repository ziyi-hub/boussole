let rayon = 0.8;
let data2 = [];
let data = [
    {x: 48.6971757, y: 6.172229, nom: "IECA"},
    {x: 49.1211936, y: 6.1625817, nom: "UFR ALL-METZ"},
    {x: 48.6953523, y: 6.1656114, nom: "UFR ALL-NANCY"},
    {x: 48.6935585, y: 6.1763212, nom: "CEU"},
    {x: 49.120847, y: 6.1612186, nom: "FACULTÉ DE DROIT, ÉCONOMIE ET ADMINISTRATION DE METZ"},
    {x: 48.693109, y: 6.1767028, nom: "FACULTÉ DE DROIT, SCIENCES ÉCONOMIQUES ET GESTION - NANCY"},
    {x: 48.6930183, y: 6.1756424, nom: "IPAG Nancy"},
    {x: 48.6970022, y: 6.1597459, nom: "INSTITUT RÉGIONAL DU TRAVAIL"},
    {x: 48.7041168, y: 6.1638692, nom: "INSTITUT NATIONAL SUPÉRIEUR DU PROFESSORAT ET DE L'ÉDUCATION Nancy"},
    {x: 48.7098925, y: 6.1648232, nom: "INSTITUT NATIONAL SUPÉRIEUR DU PROFESSORAT ET DE L'ÉDUCATION Maxéville"},
    {x: 49.0942539, y: 6.2304682, nom: "INSTITUT SUPÉRIEUR FRANCO-ALLEMAND DE TECHNIQUES, D'ÉCONOMIE ET DE SCIENCES"},
    {x: 49.1210973, y: 6.1648048, nom: "UFR LANSAD METZ"},
    {x: 48.6955015,  y: 6.1934152, nom: "ÉCOLE EUROPÉENNE D'INGÉNIEURS EN GÉNIE DES MATÉRIAUX (EEIGM)"},
    {x: 49.0924854, y: 6.2274714, nom: "ÉCOLE NATIONALE D'INGÉNIEURS DE METZ"},
    {x: 48.6518191, y: 6.147208, nom: "ÉCOLE NATIONALE SUPÉRIEURE D'AGRONOMIE ET DES INDUSTRIES ALIMENTAIRES"},
    {x: 48.6518424, y: 6.1473745, nom: "ÉCOLE NATIONALE SUPÉRIEURE D'ÉLECTRICITÉ ET DE MÉCANIQUE"},
    {x: 48.6534173, y: 6.1492879, nom: "ÉCOLE NATIONALE SUPÉRIEURE DE GÉOLOGIE"},
    {x: 48.6997235, y: 6.1800651, nom: "ÉCOLE NATIONALE SUPÉRIEURE DES INDUSTRIES CHIMIQUES"},
    {x: 48.194249, y: 6.4653358, nom : "ÉCOLE NATIONALE SUPÉRIEURE DES TECHNOLOGIES ET INDUSTRIES DU BOIS"},
    {x: 48.194249, y: 6.4653358, nom : "ÉCOLE NATIONALE SUPÉRIEURE EN GÉNIE DES SYSTÈMES ET DE L'INNOVATION"},
    {x: 48.6558011, y: 6.1535542, nom : "CPP - La Prépa des INP"},
    {x: 48.6729956, y: 6.1702775, nom: "MINES NANCY"},
    {x: 48.6597371, y: 6.1883149, nom: "POLYTECH NANCY"},
    {x: 48.6691262, y: 6.155318,  nom: "TELECOM NANCY"},
    {x: 49.094328, y: 6.230503, nom :"IAE METZ - SCHOOL OF MANAGAMENT"},
    {x: 48.697458, y: 6.1718112, nom: "IAE NANCY School of Management - Campus Manufacture"},
    {x: 48.697458, y: 6.1718112, nom: "INSTITUT DES SCIENCES DU DIGITAL, MANAGEMENT & COGNITION"},
    {x: 48.6504732, y: 6.142356, nom: "FACULTÉ D'ODONTOLOGIE"},
    {x: 48.6495535, y: 6.1411494, nom: "FACULTÉ DE MÉDECINE, MAÏEUTIQUE ET MÉTIERS DE LA SANTÉ À NANCY"},
    {x: 48.6507452, y: 6.1425132, nom: "FACULTÉ DE PHARMACIE"},
    {x: 48.6675376, y: 6.1565599, nom: "FACULTÉ DES SCIENCES DU SPORT"},
    {x: 48.6675376,  y: 6.1565599, nom: "UFR SCIENCES HUMAINES ET SOCIALES - METZ"},
    {x: 48.6956049, y: 6.1660106, nom: "UFR SCIENCES HUMAINES ET SOCIALES - NANCY"},
    {x: 48.6651218, y: 6.1611247, nom: "FACULTÉ DES SCIENCES ET TECHNOLOGIES"},
    {x: 49.094834, y: 6.2298812, nom: "UFR DE MATHÉMATIQUES, INFORMATIQUE, MÉCANIQUE"},
    {x: 49.1163857,  y: 6.2142785, nom: "UFR SCIENCES FONDAMENTALES ET APPLIQUÉES"},
    {x: 49.1202126, y: 6.1637997, nom: "IUT DE METZ"},
    {x: 49.114248,  y: 7.0715045, nom : "IUT DE MOSELLE-EST"},
    {x: 48.2899606,  y: 6.9422293, nom: "IUT DE SAINT-DIÉ-DES-VOSGES"},
    {x: 49.3501138,  y: 6.1738387, nom: "IUT DE THIONVILLE-YUTZ"},
    {x: 49.5272481,  y: 5.7518725,  nom: "IUT HENRI POINCARÉ - LONGWY"},
    {x: 48.1681596,  y: 6.4528284, nom: "IUT HUBERT CURIEN - EPINAL"},
    {x: 48.6588883,  y: 6.1513846, nom: "IUT NANCY-BRABOIS"},
    {x: 48.6835098,   y: 6.1616104, nom: "IUT NANCY-CHARLEMAGNE"},
];

window.onload = () => {
    return navigator.geolocation.getCurrentPosition(function (position) {
        let curLatitude = position.coords.latitude;
        let curLongitude = position.coords.longitude;

        //let curLatitude = 48.6971757;
        //let curLongitude = 6.172229;

        //let curLatitude = 48.6997235;
        //let curLongitude = 6.1800651;

        //let curLatitude = 48.694259;
        //let curLongitude = 6.166724;

        console.log("current position" + curLatitude, curLongitude);
        //transformPosition(aleatoire(), curLatitude, curLongitude);
        transformPosition(data, curLatitude, curLongitude);
        generateChart(data2, [{x: curLatitude, y: curLongitude}]);
    })
}

function aleatoire(){
    let dataAle = [];
    for (let i = 0; i < 2000; i++){
        dataAle.push({x: Math.random() + 48, y: Math.random() + 6})
    }
    return dataAle;
}

function transformPosition(data, curLatitude, curLongitude){
    data.forEach(place => {
        let distance = clacDistance(curLatitude, curLongitude, place.x, place.y);
        if (distance > rayon){
            console.log(distance);
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

function generateChart(data1, data2) {
    let chart = new CanvasJS.Chart("chartContainer", {
        backgroundColor: "transparent",
        animationEnabled: true,
        axisX: {
            gridThickness: 0,
            tickLength: 0,
            lineThickness: 0,
            labelFormatter: function(){
                return " ";
            }
        },
        axisY:{
            gridThickness: 0,
            tickLength: 0,
            lineThickness: 0,
            labelFormatter: function(){
                return " ";
            }
        },
        /*axisX: {
            title: "Lat"
        },
        axisY:{
            title: "Lng",
        },*/
        data: [
        {
            type: "scatter",
            toolTipContent: "<span style=\"color:#4F81BC \"><b>{name}</b></span><br/><b> Lat:</b> {x} TPS<br/><b> Lng:</b></span> {y} ms",
            name: "UL",
            showInLegend: false,
            dataPoints: data1
        },
        {
            type: "scatter",
            name: "my Current position",
            showInLegend: false,
            toolTipContent: "<span style=\"color:#C0504E \"><b>{name}</b></span><br/><b> Lat:</b> {x} TPS<br/><b> Lng:</b></span> {y} ms",
            dataPoints: data2
        },
        {
            type: "scatter",
            name: "Fix",
            showInLegend: false,
            toolTipContent: "<span style=\"color:transparent \"><b>{name}</b></span><br/><b> Load:</b> {x} TPS<br/><b> Response Time:</b></span> {y} ms",
            dataPoints: [{x: data2[0].x - (0.0219579), y: data2[0].y - (0.0219579) / 1.6}, {x: data2[0].x + (0.0219579), y: data2[0].y + (0.0219579) / 1.6}],
        },
        ]
    });
    chart.render();
}



