'use strict';

/**
 * @ngdoc overview
 * @name personalSiteApp
 * @description
 * # personalSiteApp
 *
 * Main module of the application.
 */
angular
  .module('personalSiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'portfolioCtrl',
        controllerAs: 'portfolio'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'blogCtrl',
        controllerAs: 'blog'
      })
      .when('/plannedParenthood', {
        templateUrl: 'views/PPH.html',
        controller: 'blogCtrl',
        controllerAs: 'blog'
      })
      .when('/EvolutionOfaSong', {
        templateUrl: 'views/Drake.html',
        controller: 'blogCtrl',
        controllerAs: 'blog'
      })
      .when('/Original', {
        templateUrl: 'views/Original.html',
        controller: 'blogCtrl',
        controllerAs: 'blog'
      })
      .when('/PufferFish', {
        templateUrl: 'views/PufferFish.html',
        controller: 'blogCtrl',
        controllerAs: 'blog'
      })
      .when('/MarvinGaye', {
        templateUrl: 'views/MarvinGaye.html',
        controller: 'blogCtrl',
        controllerAs: 'blog'
      })
      .when('/weird', {
          templateUrl: 'views/weird.html',
          controller: 'blogCtrl',
          controllerAs: 'blog'
      })
      .when('/Change', {
          templateUrl: 'views/Change.html',
          controller: 'blogCtrl',
          controllerAs: 'blog'
      })
      .when('/GDL2016', {
          templateUrl: 'views/blog/GDL2016.html',
          controller: 'GDLCtrl',
          controllerAs: 'GDL'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
