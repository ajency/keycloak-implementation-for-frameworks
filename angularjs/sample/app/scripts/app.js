//'use strict';
//
/**
 * @ngdoc overview
 * @name zopkyFrontendApp
 * @description
 * # zopkyFrontendApp
 *
 * Main module of the application.
 */

var baseUrl;
var goomoSiteBaseUrl;
var fixedHotelsESUrl;
var fixedHotelDetailsUrl;
var tripLinkUrl;
var destinationSearchUrl;
var boardingCityUrl;
var createDraft;
var createDraftFromTemplate;
var apiBaseUrl;
var boardingCityUrl;
var checkIfDraftEditable;
var cityDescriptionUrl;
var citiActivitiesUrl;
var minitourUrl;
var getFlights;
var getTransferOptions;
var interCityTransfersUrl;
var addinterCityTransfersUrl;
var addFlightDataWithTransfers;
var removeFlight;
var addDraftDayInCity;
var mapUrl;
var activitydescriptionUrl;
var addActivityInDraftDay;
var removeActivityInDay;
var getCitiesOptions;
var cityListUrl;
var addCityInDraft;
var removeDraftCity;
var reorderCities;
var saveDraft;
var saveDeal;
var roomConfigUrl;
var editHotelUrl;
var changeHotelUrl;
var removeHotelInCity;
var addDraftHotel;
var getAirportTransferOptions;
var getInterHotelTransferOptions;
var addAirportTransfer;
var addInterHotelTransfer;
var searchCityByNameUrl;
var getAirlinesUrl;
var addFlights;
var getFlightsFromItinerary;
var getAirportsUrl;
var getGoomoHotelsUrl;
var getGoomoFixedHotelsUrl;
var getGoomoFixedHoteDetailsUrl;
var getGoomoLocationUrl;
var sendDraftEmail;
var dealsCategoryUrl;
var getDealsByType;
var uploadImages;
var previewDraftUrl;
var getLeadUrl;
var sendQuoteEmail;
var sendUpdatedQuoteEmail;
var amazonUrl;
var agentDetailsUrl;
var addQuotationCommunication;
var replyQuotationUrl;

var zopkyFrontendApp = angular
  .module('zopkyFrontendApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngStorage',
    'ui.bootstrap',
    'dialogs.main',
    'dialogs.default-translations',
    'ngFileUpload',
    'angularUtils.directives.dirPagination',
    'ui.sortable',
    'angularSpinners',
    'angularMoment',
    'isteven-multi-select',
    'ngMaterial',
    'angucomplete-alt',
    'config',
    'slickCarousel',
    'angularLazyImg',
    'textAngular'
  ]);

zopkyFrontendApp.filter('propsFilter', function () {
  return function (items, props) {
    var out = [];

    if (angular.isArray(items)) {
      items.forEach(function (item) {
        var itemMatches = false;

        var keys = Object.keys(props);
        for (var i = 0; i < keys.length; i++) {
          var prop = keys[i];
          var text = props[prop].toLowerCase();
          if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
            itemMatches = true;
            break;
          }
        }

        if (itemMatches) {
          out.push(item);
        }
      });
    } else {
      // Let the output be the input untouched
      out = items;
    }

    return out;
  }
});

zopkyFrontendApp.filter('trimFileName', function () {
  return function (input) {
    var fileName = input.substr(0, input.lastIndexOf('.'));
    if(fileName.length > 10) {
      fileName = input.substr(0, 7) +'...';
    }
    var extension = input.substr(input.lastIndexOf('.'))
    return fileName + extension;
  };
});

zopkyFrontendApp.filter('formatTime', function () {
  return function (input) {
    var hr = parseInt(input / 60);
    var min = input - (hr * 60);
    return hr + "h " + min + "m";
  };
});

zopkyFrontendApp.filter('linebreak', function () {

  return function (input) {
    if (input)
      return input.replace(/\\n/g, '\n').replace(/\\\n/g, '\n');
    else
      return;
  };
});

zopkyFrontendApp.filter('cur', function () {
  return function (number) {
    var sNumber = parseInt(number).toString();
    var currencyArray = [];
    var lastInt = 0;
    currencyArray.push(sNumber.substring(sNumber.length - (3 + lastInt), sNumber.length - lastInt));
    lastInt += 3;
    while (sNumber.length > lastInt) {

      currencyArray.push(sNumber.substring(sNumber.length - (2 + lastInt), sNumber.length - lastInt));
      lastInt += 2;
    }
    var currencyString = '';

    for (var i = 0; i < currencyArray.length; i++) {
      currencyString = currencyArray[i] + "," + currencyString;
    }
    return (currencyString.substring(0, currencyString.length - 1));
  };
});

zopkyFrontendApp.filter('formatAmount', function () {
  return function (number) {

    if (number > 0) {
      number = Math.round(number / 100);
    }
    return number;
  };
});

zopkyFrontendApp.filter('formatDepartureTime', function () {
  return function (departureTime) {
    return moment.parseZone(departureTime).format('HH:mm');
  }
});

zopkyFrontendApp.filter('formatTimeTwentyFourHrs', function () {
  return function (datetime) {
    if (datetime) {
      return moment(datetime).format('HH:mm');
    } else {
      return datetime;
    }
  }
});

zopkyFrontendApp.filter('formatTimeTwelveHrs', function () {
  return function (datetime) {
    if(datetime) {
      return moment(datetime).format("HH:mm A");
    } else {
      return datetime;
    }
  }
});

zopkyFrontendApp.filter('formatTimeTwentyFourHrs', function () {
  return function (datetime) {
    if (datetime) {
      return moment(datetime).format('HH:mm');
    } else {
      return datetime;
    }
  }
});

zopkyFrontendApp.filter('formatDate', function () {
  return function (datetime) {
    if (datetime) {
      return moment(datetime).format("ddd, DD MMM YYYY");
    } else {
      return datetime;
    }
  }
});
zopkyFrontendApp.filter('formatDateWithFormat', function () {
  return function (datetime, formatString) {
    return moment(datetime, formatString).format("ddd, DD MMM YYYY");
  }
});

zopkyFrontendApp.filter('formatDateTime', function () {
  return function (datetime) {
    return moment(datetime).format("ddd, DD MMM YYYY") + ' | ' +  moment(datetime).format('HH:mm');
  }
});

zopkyFrontendApp.filter('dateSuffix', function($filter) {
  var suffixes = ["th", "st", "nd", "rd"];
  return function(input) {
    var day = moment(input, "MM-DD-YYYY").format('DD');
    var relevantDigits = (day < 30) ? day % 20 : day % 30;
    var suffix = (relevantDigits <= 3) ? suffixes[relevantDigits] : suffixes[0];
    return moment(input, "MM-DD-YYYY").format('DD') + suffix + moment(input, "MM-DD-YYYY").format(' MMM, YYYY');
  };
});

zopkyFrontendApp.config(["$httpProvider", '$translateProvider', 'ENV', '$mdDateLocaleProvider','$provide',
  function ($httpProvider, $translateProvider, ENV, $mdDateLocaleProvider, $provide) {

    // console.log(yeoman);
    console.log(ENV);

    $provide.decorator('taOptions', ['taRegisterTool', '$delegate', '$rootScope', function(taRegisterTool, taOptions, $rootScope){

      taRegisterTool('attachment', {
        iconclass: "fa fa-paperclip",
        tooltiptext: 'Attachment',
        action: function() {
          var $editor = this.$editor;
          var toolbarName = this.$parent.name;
          var input = document.createElement('input');
          input.type = 'file';
          input.accept = "*";

          input.onchange = function () {
            if (this.files && this.files[0]) {
              $rootScope.selecteAttachmentFiles(this.files, false, toolbarName);
            }
          };
          input.click();
        }
      });


      taOptions.toolbar = [
        ['h1', 'h2', 'h3', 'p','quote'],
        ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol']
      ]; // Toolbar for Inclusion, Exclusion and notes

      return taOptions;
    }]);

    $mdDateLocaleProvider.formatDate = function(date) {
      return moment(date).format('DD-MM-YYYY');
    };

    baseUrl = ENV.baseUrl;
    fixedHotelsESUrl = ENV.fixedHotelsESUrl;
    fixedHotelDetailsUrl = ENV.fixedHotelDetailsUrl;
    tripLinkUrl= ENV.tripLinkUrl;
    goomoSiteBaseUrl = ENV.goomoSiteBaseUrl;
    dealsCategoryUrl = 'v1/deals/get_deal_categories?';
    getDealsByType = "v1/deals/get/";
    createDraft = "v1/draft/create";
    createDraftFromTemplate = "v1/draft/create_from_template/";
    boardingCityUrl = 'v1/constants/getBoardingCities';
    checkIfDraftEditable = 'v1/draft/check_access/';
    cityDescriptionUrl = 'v1/itinerary/getCityDetails?city_id=';
    citiActivitiesUrl = 'v1/activities/get_by_city?city_id=';
    minitourUrl = 'v1/itinerary/getTourDetails?tour_id=';
    getFlights = 'v1/transfers/getFlight';
    getTransferOptions = 'v1/transfers/get_transfer_options/';
    interCityTransfersUrl = 'v1/draft/get_intercity_transfers/';
    addinterCityTransfersUrl = 'v1/draft/update/add_transfer/';
    addFlightDataWithTransfers = 'v1/draft/update/add_flight_data_with_transfers/';
    removeFlight = 'v1/draft/update/remove_flight/';
    addDraftDayInCity = 'v1/draft/update/add_day_in_city/';
    mapUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBTENzQXZ2t-MDsA-fDwMHi-ALXz3bibeY';
    activitydescriptionUrl = 'v1/itinerary/getActivityDetails?activity_id=';
    addActivityInDraftDay = 'v1/draft/update/add_activity_on_day/';
    removeActivityInDay = 'v1/draft/update/remove_activity/';
    getCitiesOptions = 'v1/draft/get_cities_list/';
    cityListUrl = 'v1/itinerary/getCityList';
    addCityInDraft = 'v1/draft/update/add_city/';
    removeDraftCity = 'v1/draft/update/remove_city/';
    reorderCities = 'v1/draft/reorder_cities/';
    saveDraft = 'v1/draft/save/';
    saveDeal = 'v1/deal/save/';
    roomConfigUrl = 'v1/itinerary/getHotelRoomConfig';
    editHotelUrl = 'v1/itinerary/getCityHotels';
    changeHotelUrl = 'v1/hotels/getDetails';
    removeHotelInCity = 'v1/draft/update/remove_hotel/';
    addDraftHotel = 'v1/draft/update/add_hotel/';
    getAirportTransferOptions = 'v1/draft/get_airport_transfers/';
    getInterHotelTransferOptions = 'v1/draft/get_interhotel_transfers/';
    addAirportTransfer = 'v1/draft/update/add_airport_transfer/';
    addInterHotelTransfer = 'v1/draft/update/add_inter_hotel_transfer/';
    destinationSearchUrl = baseUrl + 'v1/city/getcitybyname';
    searchCityByNameUrl = baseUrl + 'v1/city/searchCityByName';
    getAirlinesUrl = 'v1/transfers/getAirlinesUrl';
    getAirportsUrl = 'v1/transfers/getAirportsUrl';
    addFlights = 'v1/draft/update/add_flightDetails_itinerary/';
    getFlightsFromItinerary = 'v1/draft/getFlightDetails/';
    getGoomoHotelsUrl = 'v1/hotels/get';
    getGoomoFixedHotelsUrl = baseUrl +'v1/hotels/search';
    getGoomoFixedHoteDetailsUrl = fixedHotelDetailsUrl +'/api/v1/hotels/';
    getGoomoLocationUrl =  baseUrl + 'v1/hotels/locations?query=';
    sendDraftEmail = 'v1/draft/sendDraftEmailToUser';
    uploadImages = baseUrl + 'v0/s3/uploadImages';
    previewDraftUrl = tripLinkUrl + 'holiDays/itinerary/';
    getLeadUrl = baseUrl + 'v1/lead/details?id=';
    sendQuoteEmail = baseUrl +'v1/manualdrafts/add';
    sendUpdatedQuoteEmail= baseUrl +'v1/manualdrafts/update';
    amazonUrl = 'https://s3.ap-south-1.amazonaws.com/goomo-holidays/';
    agentDetailsUrl = 'https://www.goomo.com/Services/Content/GetAgentByID/';
    addQuotationCommunication = baseUrl +'v1/manualdrafts/addCommunication';
    replyQuotationUrl = baseUrl + 'v1/manualdrafts/replyEmail';

    $httpProvider.defaults.withCredentials = true;

    $translateProvider.useSanitizeValueStrategy('escape');

  }]);

zopkyFrontendApp.directive('modal', [function () {
  return {
    template: '<div class="modal fade">' +
    '<div class="modal-dialog" style="width:80%;">' +
    '<div class="modal-content">' +
    '<div class="modal-header">' +
    '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
    '<h4 class="modal-title">{{ formTitle }}</h4>' +
    '</div>' +
    '<div class="modal-body" ng-transclude></div>' +
    '</div>' +
    '</div>' +
    '</div>',
    restrict: 'E',
    transclude: true,
    replace: true,
    scope: true,
    link: function postLink(scope, element, attrs) {
      scope.title = attrs.title;

      scope.$watch(attrs.dikhao, function (value) {
        if (value == true) {
          $(element).modal('show');
        }
        else {
          $(element).modal('hide');
        }
      }, true);

      $(element).on('shown.bs.modal', function () {
        scope.$apply(function () {
          scope.$parent[attrs.dikhao] = true;
        });
      });

      $(element).on('hidden.bs.modal', function () {
        scope.$apply(function () {
          scope.$parent[attrs.dikhao] = false;
        });
      });
    }
  };
}]);


zopkyFrontendApp.directive("ngTimeSelector", function () {
  return {
    restrict: 'EA',
    template: '<div class="timeSelectorDirective"> <div class="section hours"> <div class="increase" ng-click="increaseHours()"> ' +
    '<i class="glyphicon glyphicon-chevron-up"></i> </div> <div class="display"> {{displayHours()}} </div> <div class="decrease" ng-click="decreaseHours()"> ' +
    '<i class="glyphicon glyphicon-chevron-down"></i> </div> </div> <div class="section minutes"> <div class="increase" ng-click="increaseMinutes()"> ' +
    '<i class="glyphicon glyphicon-chevron-up"></i> </div> <div class="display"> {{displayMinutes()}} </div> <div class="decrease" ng-click="decreaseMinutes()">' +
    ' <i class="glyphicon glyphicon-chevron-down"></i> </div> </div> <div class="section hours"> <div class="increase" ng-click="switchPeriod()">' +
    ' <i class="glyphicon glyphicon-chevron-up"></i> </div> ' + '<div ng-if="hours >= 12" class="display"> PM </div> <div ng-if="hours < 12" class="display"> AM </div> ' + '<div class="decrease" ng-click="switchPeriod()"> ' +
    '<i class="glyphicon glyphicon-chevron-down"></i> </div> </div> </div>',
    scope: {
      hours: "=",
      minutes: "=",
      //changeTime :"=",
      time: "="

    },
    replace: true,
    link: function (scope, elem, attr) {

      if (!scope.time || scope.time == null || scope.time == '') {
        scope.hours = 0;
        scope.minutes = 0;
        scope.time = "00:00";
        scope.period = "AM";
      } else {
        if (scope.hours < 12) {
          scope.period = "AM";

        } else {
          scope.period = "PM";
        }
      }
      /* Increases hours by one */
      scope.increaseHours = function () {

        //Check whether hours have reached max
        if (scope.hours < 23) {
          scope.hours = ++scope.hours;
        }
        else {
          scope.hours = 0;
        }
        scope.displayTime();
      }

      /* Decreases hours by one */
      scope.decreaseHours = function () {

        //Check whether hours have reached min
        scope.hours = scope.hours <= 0 ? 23 : --scope.hours;
        scope.displayTime();
      }

      /* Increases minutes by one */
      scope.increaseMinutes = function () {

        //Check whether to reset
        if (scope.minutes >= 55) {
          scope.minutes = 0;
        }
        else {
          scope.minutes = scope.minutes + 5;
        }
        scope.displayTime();
      }

      /* Decreases minutes by one */
      scope.decreaseMinutes = function () {

        //Check whether to reset
        if (scope.minutes <= 0) {
          scope.minutes = 55;
        }
        else {
          scope.minutes = scope.minutes - 5;
        }
        scope.displayTime();
      }


      /* Displays hours - what the user sees */
      scope.displayHours = function () {

        //Create vars
        var hoursToDisplay = scope.hours;

        //Check whether to reset etc
        if (scope.hours > 12) {
          hoursToDisplay = scope.hours - 12;
        }

        //Check for 12 AM etc
        if (hoursToDisplay == 0) {

          //Set to am and display 12
          hoursToDisplay = 12;
        }
        else {

          //Check whether to prepend 0
          if (hoursToDisplay <= 9) {
            hoursToDisplay = "0" + hoursToDisplay;
          }
        }

        return hoursToDisplay;
      }

      /* Displays minutes */
      scope.displayMinutes = function () {
        return scope.minutes <= 9 ? "0" + scope.minutes : scope.minutes;
      }

      scope.displayTime = function () {
        var hours = scope.hours;
        if (hours <= 9) {
          hours = "0" + hours;
        }

        var minutes = scope.minutes <= 9 ? "0" + scope.minutes : scope.minutes;

        scope.time = hours + ":" + minutes;

      }

      /* Switches the current period by ammending hours */
      scope.switchPeriod = function () {
        scope.hours = scope.hours >= 12 ? scope.hours - 12 : scope.hours + 12;
        scope.displayTime();
      }
    }
  }
});


zopkyFrontendApp.directive('onErrorSrc', function() {
    return {
        link: function(scope, element, attrs) {
          element.bind('error', function() {
            if (attrs.src != attrs.onErrorSrc) {
              attrs.$set('src', attrs.onErrorSrc);
            }
          });
        }
    }
});

zopkyFrontendApp.directive('stringToNumber', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      ngModel.$parsers.push(function(value) {
        return '' + value;
      });
      ngModel.$formatters.push(function(value) {
        return parseFloat(value);
      });
    }
  };
});

/**
 * to handle enter click
 */
zopkyFrontendApp.directive('ngEnter', function () {
  return function (scope, element, attrs) {
    element.bind("keydown keypress", function (event) {
      if (event.which === 13) {
        scope.$apply(function () {
          scope.$eval(attrs.ngEnter);
        });

        event.preventDefault();
      }
    });
  };
});

zopkyFrontendApp.directive('dropdownMultiselect', function () {
  return {
    restrict: 'E',
    scope: {
      model: '=',
      options: '=',
      templatetext: '='
      //pre_selected: '=preSelected'
    },
    template:
    "<div>" +
    "<div class='btn-group' style='float:left;margin-right:20px' >" +
    "<button class='btn btn-small dropdown-toggle' data-toggle='dropdown' data-ng-click='openDropdown()' >{{buttonText()}}  <a><span class='glyphicon glyphicon-chevron-down'></span></a></button>" +
    "<ul id='dropdownselect' class='dropdown-menu scrollable-menu' aria-labelledby='dropdownMenu' ng-click='handleClick($event)'>" +
    "<li ><a data-ng-click='selectAll()'><i class='glyphicon glyphicon-ok' style='color:green'></i>  Select All</a></li>" +
    "<li ><a data-ng-click='deselectAll();'><i class='glyphicon glyphicon-remove' style='color:red'></i>  Deselect All</a></li>" +
    "<li style='padding-left:20px;padding-right:20px'>" +
    "<div class='inner-addon right-addon'><i class='glyphicon glyphicon-search'></i><input class='form-control'  type='text' ng-model='search' placeholder='Search'></div></li>" +
    "<li class='divider'></li>" +
    "<li data-ng-repeat='option in options | filter:search' > <a data-ng-click='setSelectedItem()'>{{option.name}}<span data-ng-class='isChecked(option.id)'></span></a></li>" +
    "</ul>" +
    "</div>" +
    "<div>" +
    "<span data-ng-repeat='option in options' data-ng-show='toShow(option.id)'> {{option.name}} </span>" +
    "</div>" +
    "</div>",
    controller: function ($scope) {

      $scope.handleClick = function ($event) {
        $event.stopPropagation();
      };

      $scope.openDropdown = function () {
        $scope.selected_items = [];
        //if(!$scope.model || $scope.model.length === 0 || $scope.model.length === null){
        //  $scope.model=[];
        //}
        //for(var i=0; i<$scope.pre_selected.length; i++){ $scope.selected_items.push($scope.pre_selected[i].id);
        //}

      };

      $scope.selectAll = function () {
        $scope.model = _.pluck($scope.options, 'id');
      };
      $scope.deselectAll = function () {
        $scope.model = [];
      };
      $scope.setSelectedItem = function () {
        var id = this.option.id;
        if (_.contains($scope.model, id)) {
          $scope.model = _.without($scope.model, id);
        } else {
          if (!$scope.model || $scope.model.length === 0 || $scope.model.length === null) {
            $scope.model = [];
          }
          $scope.model.push(id);
        }
        console.log($scope.model);
        return false;
      };
      $scope.isChecked = function (id) {
        if (_.contains($scope.model, id)) {
          return 'glyphicon glyphicon-ok pull-right';
        }
        return false;
      };
      $scope.toShow = function (id) {
        if (_.contains($scope.model, id)) {
          return true;
        }
        return false;
      };
      $scope.buttonText = function () {
        var translationtext = $scope.templatetext;
        if (translationtext && translationtext.buttonDefaultText) {
          return translationtext.buttonDefaultText;
        } else {
          return 'Select';
        }

      }
    }
  }
});

zopkyFrontendApp.directive('dropdownsingleselect', function () {
  return {
    restrict: 'E',
    scope: {
      model: '=',
      options: '='
      //isChange:'='
    },
    template:
    "<div class='btn-group btn-group-justified' >" +
    "<div class='btn-group' >" +
    "<div class='dropdown'>" +
    "<button class='btn btn-small dropdown-toggle' data-toggle='dropdown' data-ng-click='openDropdown()' >" +
    "<a><span class='glyphicon glyphicon-chevron-down pull-right'></span></a>" +
    "<span data-ng-repeat='option in options' data-ng-show='toShow(option.id)' style=' overflow: hidden;display: block;text-overflow: ellipsis;'> {{option.name}} </span>" +
    "<span ng-show='!model || model===null'>Select  </span>" +
    "</button>" +
    "<ul id='dropdownselect' class='dropdown-menu' style='width: 100%;overflow:scroll;height: auto;max-height: 250px;'>" +
    "<li style='padding-left:20px;padding-right:20px'  ng-click='handleClick($event)'>" +
    "<div class='inner-addon right-addon'><i class='glyphicon glyphicon-search'></i>" +
    "<input class='form-control'   type='text' ng-model='search' placeholder='Search'></div></li>" +
    "<li class='divider' ng-click='handleClick($event)' ></li>" +
    "<li data-ng-repeat='option in options | filter:search' > <a data-ng-click='setSelectedItem()'>{{option.name}}<span data-ng-class='isChecked(option.id)'></span></a></li>" +
    "</ul>" +
    "</div>" +
    "</div>" +
    "</div>",
    controller: function ($scope) {
      $scope.handleClick = function ($event) {
        $event.stopPropagation();
      };
      $scope.setSelectedItem = function () {
        var id = this.option.id;
        //
        //if($scope.model){
        //  var opt= JSON.parse(JSON.stringify($scope.model));
        //  if(id !== opt){
        //    $scope.isChange = false;
        //  }
        //}

        $scope.model = id;
        console.log($scope.model);
        return false;
      };
      $scope.isChecked = function (id) {
        if ($scope.model === id) {
          return 'glyphicon glyphicon-ok pull-right';
        }
        return false;
      };
      $scope.toShow = function (id) {
        if ($scope.model === id) {
          return true;
        }
        return false;
      };
    }
  }
});

