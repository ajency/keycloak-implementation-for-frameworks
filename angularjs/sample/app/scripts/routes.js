zopkyFrontendApp.config(function($routeProvider, KCrouteGuard, KCroutePermissions){
    $routeProvider
    /*.when('/', {
     templateUrl: 'views/main.html',
     controller: 'MainCtrl',
     equireLogin: false
     })*/
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      requireLogin: false
    })
    .when('/header', {
      templateUrl: 'views/header.html',
      controller: 'HeaderCtrl',
      requireLogin: false
    })
    .when('/modifySearch', {
      templateUrl: 'views/modifySearch.html',
      controller: 'ModifySearchCtrl',
      requireLogin: false
    })
    .when('/editItinerary', {
      templateUrl: 'views/editItinerary.html',
      controller: 'EditItineraryCtrl',
      requireLogin: false
    })

    .when('/activityPrices', {
      templateUrl: 'views/activityPrices.html',
      controller: 'AboutCtrl',
      //requireLogin: false
    })
    .when('/', {
      templateUrl: 'views/login.html',
      controller: 'loginController',
      requireLogin: false
    })
    .when('/logout', {
      templateUrl: 'views/logout.html',
      controller: 'logoutController',
      // requireLogin: true
    })
    .when('/employee', {
      templateUrl: 'views/employee.html',
      controller: 'employeeController',
      resolve: KCrouteGuard.protect(KCroutePermissions["/employee"])
      //     requireLogin: true
    })
    .when('/navtab', {
      templateUrl: 'views/navtab.html',
      controller: 'navtabController',
      //   requireLogin: true
    })
    .when('/activities', {
      templateUrl: 'views/activities.html',
      controller: 'activitiesController',
      //   requireLogin: true
    })
    .when('/continent', {
      templateUrl: 'views/continent.html',
      controller: 'continentController',
      //   requireLogin: true
    })
    .when('/country', {
      templateUrl: 'views/country.html',
      controller: 'countryController',
      //   requireLogin: true
    })
    .when('/state', {
      templateUrl: 'views/state.html',
      controller: 'stateController',
      //   requireLogin: true
    })
    .when('/city', {
      templateUrl: 'views/city.html',
      controller: 'cityController',
      //   requireLogin: true
    })
    .when('/airport', {
      templateUrl: 'views/airport.html',
      controller: 'airportController',
      //   requireLogin: true
    })
    .when('/hotel', {
      templateUrl: 'views/hotel.html',
      controller: 'hotelController',
      //   requireLogin: true
    })
    .when('/roomType', {
      templateUrl: 'views/roomType.html',
      controller: 'roomController',
      //   requireLogin: true
    })
    .when('/activityType', {
      templateUrl: 'views/activityType.html',
      controller: 'activityController',
      //   requireLogin: true
    })
    .when('/currencyType', {
      templateUrl: 'views/currencyType.html',
      controller: 'currencyController',
      //   requireLogin: true
    })
    .when('/TouristTypes', {
      templateUrl: '../views/TouristTypes.html',
      controller: 'touristController',
      //   requireLogin: true
    })
    .when('/slider', {
      templateUrl: 'views/imgSlider.html',
      controller: 'imgSliderController',
      //   requireLogin: true
    })
    .when('/minitour', {
      templateUrl: 'views/miniTour.html',
      controller: 'minitourController',
      //   requireLogin: true
    })
    .when('/minitourdetails', {
      templateUrl: 'views/MiniTourDetails.html',
      controller: 'minitourdetailsController',
      //   requireLogin: true
    })
    .when('/minitourdetails/:notFound', {
      templateUrl: 'views/MiniTourDetails.html',
      controller: 'minitourdetailsController',
      //   requireLogin: true
    })
    .when('/airportTransferPrices', {
      templateUrl: 'views/AirportTransferPrice.html',
      controller: 'airportTransferPriceController',
      //   requireLogin: true
    })
    .when('/interHotelTransferPrices', {
      templateUrl: 'views/InterHotelTransferPrice.html',
      controller: 'interHotelTransferPriceController',
      //   requireLogin: true
    })
    .when('/supplier', {
      templateUrl: 'views/agent.html',
      controller: 'agentController',
      //   requireLogin: true
    })
    .when('/agentprofile', {
      templateUrl: 'views/agentProfile.html',
      controller: 'agentProfileController',
      //   requireLogin: true
    })
    .when('/itinerary', {
      templateUrl: 'views/itinerary.html',
      controller: 'itineraryController',
      //   requireLogin: true
    })
    .when('/itineraryDay', {
      templateUrl: 'views/itineraryDay.html',
      controller: 'itineraryDayController',
      //   requireLogin: true
    })
    // .when('/itineraryhome', {
    //   templateUrl: 'views/itineraryhome.html',
    //   controller: 'itineraryhomeController',
    //   //   requireLogin: true
    // })
    .when('/ihotel', {
      templateUrl: 'views/ihotel.html',
      controller: 'itineraryhotelController',
      //   requireLogin: true
    })
    .when('/idescription', {
      templateUrl: 'views/idescription.html',
      controller: 'itinerarydescController',
      //   requireLogin: true
    })
    .when('/itineraryOverview', {
      templateUrl: 'views/ItineraryOverview.html',
      controller: 'itineraryOverviewController',
      //   requireLogin: true
    })
    .when('/viewItineraries', {
      templateUrl: 'views/ViewItineraries.html',
      controller: 'viewItineraryController',
      //   requireLogin: true
    })
    .when('/hotelPrices', {
      templateUrl: 'views/hotelPricesNew.html',
      controller: 'hotelPriceController',
      //   requireLogin: true
    })
    .when('/intercityTransfers', {
      templateUrl: 'views/AddIntercityTransfer.html',
      controller: 'intercityTransferController',
      //   requireLogin: true
    })
    .when('/airportTransfers', {
      templateUrl: 'views/AddAirportTransfer.html',
      controller: 'airportTransferController',
      //   requireLogin: true
    })
    .when('/interHotelTransfers', {
      templateUrl: 'views/AddInterHotelTransfer.html',
      controller: 'interHotelTransferController',
      //   requireLogin: true
    })
    .when('/intercityTransferPrices', {
      templateUrl: 'views/IntercityTransferPrice.html',
      controller: 'intercityPriceController',
      //   requireLogin: true
    })
    .when('/imageSelection', {
      templateUrl: '../views/ImageSelection.html',
      controller: 'ct'
      //   requireLogin: true
    })
    .when('/test1', {
      templateUrl: 'views/test1.html',
      controller: 'TimepickerDemoCtrl'
      //   requireLogin: true
    })
    .when('/bookings', {
      templateUrl: 'views/BookedTrips.html',
      controller: 'bookedTrips'
      //   requireLogin: true
    })
    .when('/bookingStatus', {
      templateUrl: 'views/BookedStatus.html',
      controller: 'bookedStatusController'
      //   requireLogin: true
    })
    .when('/changePassword', {
      templateUrl: 'views/ChangePassword.html',
      controller: 'changePasswordController'
      //   requireLogin: true
    })
    .when('/addSignature', {
      templateUrl: 'views/AddSignature.html',
      controller: 'addSignatureController'
      //   requireLogin: true
    })
    .when('/upload', {
      templateUrl: 'views/Upload.html',
      controller: 'uploadController'
      //   requireLogin: true
    })
    .when('/userProfile', {
      templateUrl: 'views/Profile.html',
      controller: 'profileController'
      //   requireLogin: true
    })
    .when('/userItinerary', {
      templateUrl: 'views/UserItinerary.html',
      controller: 'userItineraryController'
    })
    .when('/TransportTypes', {
      templateUrl: 'views/TransferTypes.html',
      controller: 'transferTypesController'
    })
    .when('/countryCombinations', {
      templateUrl: 'views/CountryCombinations.html',
      controller: 'countryCombinationsController'
    })
    .when('/sendEmails', {
      templateUrl: 'views/sendEmail.html',
      controller: 'emailController'
    })
    .when('/travstoreHotels', { templateUrl: 'views/TravstoreHotelList.html', controller: 'travstoreHotelsController' })
    .when('/templateTypes', { templateUrl: 'views/TemplateTypes.html', controller: 'templateTypesController' })
    .when('/templates', { templateUrl: 'views/Templates.html', controller: 'templatesController' })
    .when('/your-itinerary', { templateUrl: 'views/DraftItinerary.html', controller: 'DraftItineraryController' })
    .when('/inter-hotel-transfers', { templateUrl: 'views/InterHotelTransfers.html', controller: 'interHotelTransfersController' })
    .when('/cityview', { templateUrl: 'views/cityview.html', controller: 'cityDetailsController' })
    .when('/cityview/:notFound', { templateUrl: 'views/cityview.html', controller: 'cityDetailsController' })
    .when('/cityview/:notFound/:notFound', { templateUrl: 'views/cityview.html', controller: 'cityDetailsController' })
    .when('/transfer_options', { templateUrl: 'views/TransportOptions.html', controller: 'transportOptionsController' })
    .when('/airport-transfers', { templateUrl: 'views/AirportTransfersOptions.html', controller: 'airportTransfersController' })
    .when('/inter-hotel-transfers', { templateUrl: 'views/InterHotelTransfers.html', controller: 'interHotelTransfersController' })
    .when('/activitydetails', { templateUrl: 'views/activitydetails.html', controller: 'ActivitydetailsController' })
    .when('/activitydetails/:notFound', { templateUrl: 'views/activitydetails.html', controller: 'ActivitydetailsController' })
    .when('/activitydetails/:notFound/:notFound', { templateUrl: 'views/activitydetails.html', controller: 'ActivitydetailsController' })
    .when('/activitydetails/:notFound/:notFound/:notFound', { templateUrl: 'views/activitydetails.html', controller: 'ActivitydetailsController' })
    .when('/visa', { templateUrl: 'views/Visa.html', controller: 'visaController' })
    .when('/visaCategories', { templateUrl: 'views/VisaCategories.html', controller: 'visaCategoryController' })
    .when('/city_options', { templateUrl: 'views/citylist.html', controller: 'addCityController' })
    .when('/changehotel', { templateUrl: 'views/changehotel.html', controller: 'ChangeHotelController' })
    .when('/changehotel/:notFound', { templateUrl: 'views/changehotel.html', controller: 'ChangeHotelController' })
    .when('/changehotel/:notFound/:notFound', { templateUrl: 'views/changehotel.html', controller: 'ChangeHotelController' })
    .when('/detailview', { templateUrl: 'views/detailhotelview.html', controller: 'hotelDetailsController' })
    .when('/detailview/:notFound', { templateUrl: 'views/detailhotelview.html', controller: 'hotelDetailsController' })
    .when('/detailview/:notFound/:notFound', { templateUrl: 'views/detailhotelview.html', controller: 'hotelDetailsController' })
    .when('/fixedhotelsearch', { templateUrl: 'views/FixedHotelSearch.html', controller: 'FixedHotelSearchController' })
    .when('/fixedhotelsearch/:notFound', { templateUrl: 'views/FixedHotelSearch.html', controller: 'FixedHotelSearchController' })
    .when('/fixedhotelsearch/:notFound/:notFound', { templateUrl: 'views/FixedHotelSearch.html', controller: 'FixedHotelSearchController' })
    .when('/fixedhoteldetails', { templateUrl: 'views/FixedHotelDetails.html', controller: 'FixedHotelDetailsController' })
    .when('/fixedhoteldetails/:notFound', { templateUrl: 'views/FixedHotelDetails.html', controller: 'FixedHotelDetailsController' })
    .when('/fixedhoteldetails/:notFound/:notFound', { templateUrl: 'views/FixedHotelDetails.html', controller: 'FixedHotelDetailsController' })
    .when('/flightsearch', { templateUrl: 'views/flightSearch.html', controller: 'FlightSearchController' })
    .when('/flightsearchresults', { templateUrl: 'views/flightSearchResults.html', controller: 'FlightSearchResultsController' })
    .when('/visaProcessing', {
      templateUrl: 'views/VisaProcessing.html',
      controller: 'VisaProcessingController',
      //   requireLogin: true
    })
    .when('/leadsources', {
      templateUrl: 'views/LeadSources.html',
      controller: 'LeadSourcesController',
      //   requireLogin: true
    })
    .when('/activitySlots', {
      templateUrl: 'views/ActivitySlots.html',
      controller: 'ActivitySlotsController',
      //   requireLogin: true
    })
    .when('/lead', {
      templateUrl: 'views/Lead.html',
      controller: 'LeadController',     //   requireLogin: true
    })
    .when('/leads', {
      templateUrl: 'views/LeadNew.html',
      controller: 'LeadNewController',
      resolve: KCrouteGuard.protect(KCroutePermissions["/leads"], {
              someData: "DataService"
            })   //   requireLogin: true
    })
    .when('/leadDetails', {
      templateUrl: 'views/LeadDetails.html',
      controller: 'LeadDetailsController',     //   requireLogin: true
    })
    .when('/leadStatus', {
      templateUrl: 'views/LeadStatus.html',
      controller: 'LeadStatusController',
      //   requireLogin: true
    })
    .when('/goomourl', {
      templateUrl: 'views/GoomoUrl.html',
      controller: 'GoomoUrlController',
      resolve: KCrouteGuard.protect(KCroutePermissions["/goomourl"])
    })
    .when('/currency', {
      templateUrl: 'views/Currency.html',
      controller: 'CurrencyController',
      //   requireLogin: true
    })
    .when('/order', {
      templateUrl: 'views/Order.html',
      controller: 'OrderController',
      //   requireLogin: true
    })
    .when('/EmailConfiguration', {
      templateUrl: 'views/EmailConfiguration.html',
      controller: 'emailConfigurationCtrl',
      //   requireLogin: true
    })
    .when('/emailTemplate', {
      templateUrl: 'views/EmailTemplate.html',
      controller: 'EmailTemplateController',
      //   requireLogin: true
    })
    .when('/company', {
      templateUrl: 'views/companies.html',
      controller: 'CompaniesController',
      //   requireLogin: true
    })
    .when('/saleschannel', {
      templateUrl: 'views/saleschannels.html',
      controller: 'SalesChannelsController',
      //   requireLogin: true
    })
    .when('/dealscategory', { templateUrl: 'views/DealsCategory.html', controller: 'DealsCategoryController' })
    .when('/dealscategory/:notFound', { templateUrl: 'views/DealsCategory.html', controller: 'DealsCategoryController' })
    .when('/dealscategory/:notFound/:notFound', { templateUrl: 'views/DealsCategory.html', controller: 'DealsCategoryController' })
    .when('/deals', { templateUrl: 'views/Deals.html', controller: 'DealsController' })
    .when('/holiday-preferences', { templateUrl: 'views/holidaypreference.html', controller: 'HolidayPreferenceController' })
    .when('/branches', { templateUrl: 'views/branches.html', controller: 'BranchesController' })
    .when('/createItinerary', { templateUrl: 'views/createItinerary.html', controller: 'CreateItineraryController' })
    .when('/unauthorized',{
        templateUrl: 'views/unauthorized.html',
        controller: 'UnauthorizedCtrl',
        requireLogin: true
    })
    .otherwise({
      redirectTo: '/leadNew'
    });


});