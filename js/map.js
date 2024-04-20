
if(document.querySelector(".footer")){
    let ofice = [
        ['', "51.523863", "46.017449"],
    ];

    let myMap;
    let myCollection;

    ymaps.ready(function () {
        myCollection = new ymaps.GeoObjectCollection();
        if(document.getElementById("ofice")){
        // Помещаем карту в элемент DIV с id, равным «map»
        myMap = new ymaps.Map("ofice", {
            center: [51.524, 46.0175], // Начальные значения центра карты
            zoom: 15,         // Начальное значение зума карты
            // controls: ['zoomControl'],
        });
        if($(window).width() < 1024) {
            myMap.behaviors.disable('scrollZoom');
            // myMap.behaviors.disable('drag');
        }
        // Перебираем в цикле точки, которые надо добавить на карту
        for (i = 0; i < ofice.length; i++) {
            var myPlacemark = new ymaps.Placemark([
                ofice[i][1], ofice[i][2]
            ], {
                hintContent: ofice[i][0],
                balloonContent: ofice[i][0]
            },
                {
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '../img/icon/Location.png',
                hideIconOnBalloonOpen:false,
                iconImageSize: [31, 34],
    
                // iconImageOffset: [-120, -140],
    
            });
            myMap.behaviors.disable('scrollZoom'); 
    
            myCollection.add(myPlacemark);
            myMap.geoObjects.add(myPlacemark);
    
        }
        // Добавляем точки на карту
        myMap.geoObjects.add( myCollection ); 
        }
    })
}
function setCenter(x, y) {
    ymaps.ready(function () {
        myMap.setCenter([x, y], 10, {
            checkZoomRange: false
        });
    });
};

function setCenterPos(x, y, i) {
    ymaps.ready(function () {
        myMap.setCenter([x, y], 10, {
            checkZoomRange: false
        });
        oldCenter = myMap.getCenter();
    });
    $("body, html").animate(function () {
        scrollTo: $(".map-footer").offset().top
    });
    // arrayBalloons[i].balloon.open();
    return false;
};

function overCenter(x, y) {
    ymaps.ready(function () {
        oldCenter = myMap.getCenter();
        setCenter(x, y);
    });
};
function oldPos() {
    ymaps.ready(function () {
        myMap.setCenter(oldCenter);
    });
};