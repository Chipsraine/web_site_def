document.addEventListener("DOMContentLoaded", function() {
    ymaps.ready(init);
    function init() {
        var map = new ymaps.Map("map", {
            center: [55.726923, 37.694235],
            zoom: 15
        });

        var placemark = new ymaps.Placemark([55.726923, 37.694235], {}, {
              iconLayout: 'default#image',
              iconImageHref: './assets/img/icon_mark.png',
              iconImageSize: [30, 40],
              iconImageOffset: [-15, -30]
        });

        map.geoObjects.add(placemark);
    }
});
