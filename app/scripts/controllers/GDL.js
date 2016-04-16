'use strict';







/**
 * @ngdoc function
 * @name viewpointApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the viewpointApp
 */
 angular.module('personalSiteApp')
  .controller('GDLCtrl' , [ '$scope' , function ($scope) {


 this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'jQuery'
    ];

    $(window).scroll(function() {

     var wScroll = $(this).scrollTop();

     $('#FrontPng').css({
       'transform' : 'translate(0px, -'+ wScroll /55+'%)'
     });
     $('#GdlTitle').css({
       'transform' : 'translate( -'+ wScroll /17+'%, '+ wScroll/7+'%)'
     });

});

      var cities = [
    {
        city : 'The airport incident',
        desc : 'Arriving from a red eye flight into Guadalajara, we were greeted by my two uncles whom I have not seen in 6 years. Unfortunately we managed to break the rear window of their car within the first few minutes. Certainly not the greatest way to start the week.',
        img: '../../images/mexico/image9.jpg',
        date: 'Wednesday',
        lat : 20.525529,
        long :  -103.299337
    },
          {
        city : 'Home',
        desc : 'We stayed with our uncles, in a part of town called monte marianos',
        img: './images/mexico/dog.jpg',
        date: 'Wednesday-Monday',
        lat : 20.700189,
        long : -103.318265
    },
    {
        city : 'Estadio Chivas',
        desc : 'It was lightly sprinkling most of our first day in Guadalajara. We went to a soccer game where, surprisingly, it started to snow! Apparently this was the first time it had snowed in the city in 19 years.',
        img: './images/mexico/image6.jpg',
        date: 'Wednesday',
        lat : 20.681334,
        long : -103.463327
    },
    {
        city : 'BasketBall in La Perdida',
        desc : 'The second day my brother and I destroyed my cousin, Josue, and his neighbor in a game of basketball at a local park.',
        img: './images/mexico/laPerdi.jpg',
        date: 'Thursday',
        lat : 20.703612,
        long : -103.321461
    },
    {
        city : 'Downtown Guadalajara',
        desc : 'Thursday morning We went sight seeing in the city center and bought Mexican knick knacks in a famous city market.',
        img: './images/mexico/image5.jpg',
        date: 'Friday',
        lat : 20.676711,
        long : -103.347450
    },
    {
        city : 'El Fresco',
        desc : 'Friday night we checked a lounge/bar called El Fresco. Our cousin Josue took us out to this spot, apparently it is very popular bar for college students. The actual spot was little bit on the ghetto side but it was a very relaxed environment with house music playing and people dancing.',
        img: './images/mexico/maxresdefault.jpg',
        date: 'Friday',
        lat : 20.738909,
        long : -103.312320
    },
    {
        city : 'Eating Bugs in Tlaquepaque',
        desc : "Our cousin Martha, took us out to eat in a touristy area called Tlaquepaque. I loved that area it was so artsy and I even got to try roasted grasshoppers for the first time. " ,
        img: './images/mexico/image2.jpg',
        date: 'Saturday',
        lat : 20.639316,
        long : -103.311847
    },
    {
        city : 'The Night before the big game',
        desc : 'We managed to score tickets to Mexicos biggest soccer game; Chivas from Guadalajara versus Club America from Mexico City. The night before we met up with a large group of fans to cheer on the local team and get everyone pumped for the next days match. ',
        img: './images/mexico/image8.jpg',
        date: 'Saturday',
        lat : 20.653036,
        long : -103.389457
    },
    {
        city : 'El Chapu',
        desc : 'Our cousins Hector and Hugo took us out saturday night to a hip part of downtown that has alot of bars. The locals call this area el chapu, short for chapultepec the name of the street. The bar we went to played alot of Mexican music that is really popular with the locals. Most people there were really drunk and singing very loudly. I liked the environment of the pub and even sang along to the couple songs I knew.',
        img: './images/mexico/image1.jpg',
        date: 'Saturday',
        lat : 20.673159,
        long : -103.368477
    },
    {
        city : 'El Clasico in the Estadio Chivas',
        desc : 'So this was our last day and the day of the big game, Chivas vs America. We spent most of the day tailgating and pregaming for the game. Over 60,000 people packed the sold out Chivas Stadium, the majority supporting the home team. Though Chivas played a great game they lost 2-1 to Club America in a dissappointing end to the vacation. ',
        img: './images/mexico/image4.jpg',
        date: 'Sunday',
        lat : 20.682684,
        long : -103.463309
    }
];



      var mapOptions = {
        zoom: 11,
        center: new google.maps.LatLng(20.652217, -103.347703),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };


    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];

    var infoWindow = new google.maps.InfoWindow();

      var createMarker = function (info){

        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            city: info.city,
            desc: info.desc,
            img: info.img,
            date: info.date
        });
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';

        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h1>' + marker.city + '</h1>' + "<img src=" + marker.img + " height='300px' width='550px' />" + marker.desc );
            infoWindow.open($scope.map, marker);
        });

        $scope.markers.push(marker);

    };


    for (var i = 0; i < cities.length; i++){
        createMarker(cities[i]);
    }

    $scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    };



  }]);
