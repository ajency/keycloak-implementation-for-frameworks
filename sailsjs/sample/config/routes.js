/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `config/404.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {


  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
   * etc. depending on your default view engine) your home page.              *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  '/': {
    view: 'homepage'
  },

  'GET /api/v1/healthCheck': 'TestItineraryController.getHealthCheck',
  'GET /api/v1/redisCheck': 'TestItineraryController.getCurrenciesFromAPI',
  //Employee Login
  'POST /api/v0/employee/login': 'UserDetails/EmployeeLoginController.doLogin',
  //'POST /api/v0/employee/updatepassword': 'UserDetails/EmployeeLoginController.resetPassword',
  'GET /api/v0/employee/logout': 'UserDetails/EmployeeLoginController.logout',
  'POST /api/v1/employee/updatepassword': 'UserDetails/ZopkyUserController.updatePasswordEmployee',

  'POST /api/v0/city/add': 'TourDetails/CityController.addCity',
  'GET /api/v0/city/search': 'TourDetails/CityController.search',
  'POST /api/v0/city/update': 'TourDetails/CityController.updateCity',
  'GET /api/v0/city/get': 'TourDetails/CityController.getCity',
  'GET /api/v0/city/getcitiesofcountry': 'TourDetails/CityController.getCityFromCountryId',
  'GET /api/v0/city/getallcities': 'TourDetails/CityController.getAllCities',
  'GET /api/v0/city/searchAirport': 'TourDetails/CityController.getAirportsForCities',
  'GET /api/v0/airports/searchAirport': 'TourDetails/CityController.searchAirports',
  'GET /api/v1/city/getcitybyname': 'TourDetails/CityController.getCityByName',
  'GET /api/v1/city/searchCityByName': 'TourDetails/CityController.searchCityByName',

  'POST /api/v0/cityimages/add': 'TourDetails/CityController.addPhotos',
  'GET /api/v0/cityimages/search': 'TourDetails/CityController.searchPhotos',
  'POST /api/v0/cityimages/update': 'TourDetails/CityController.updatePhoto',
  'POST /api/v0/cityimages/adduploadedphotos': 'TourDetails/CityController.addLinksofUploadedImages',

  'GET /api/v0/location/get': 'DataSource/locationController.getLocation',

  'POST /api/v0/continent/add': 'TourDetails/ContinentController.addContinent',
  'POST /api/v0/continent/update': 'TourDetails/ContinentController.updateContinent',
  'GET /api/v0/continent/search': 'TourDetails/ContinentController.search',
  'GET /api/v0/continent/get/': 'TourDetails/ContinentController.getContinent',


  'POST /api/v0/country/add': 'TourDetails/CountryController.addCountry',
  'POST /api/v0/country/update': 'TourDetails/CountryController.updateCountry',
  'GET /api/v0/country/search': 'TourDetails/CountryController.search',
  'GET /api/v0/country/get/': 'TourDetails/CountryController.getCountry',

  'POST /api/v0/countryImages/add': 'TourDetails/CountryController.addPhotos',
  'GET /api/v0/countryImages/search': 'TourDetails/CountryController.searchPhotos',
  'POST /api/v0/countryImages/update': 'TourDetails/CountryController.updatePhoto',
  'POST /api/v0/countryImages/adduploadedphotos': 'TourDetails/CountryController.addLinksofUploadedImages',

  'POST /api/v0/state/add': 'TourDetails/StateController.addState',
  'POST /api/v0/state/update': 'TourDetails/StateController.updateState',
  'POST /api/v0/state/delete': 'TourDetails/StateController.deleteState',
  'GET /api/v0/state/get': 'TourDetails/StateController.getState',
  'GET /api/v0/state/search': 'TourDetails/StateController.search',

  'POST /api/v0/flickr/add': 'DataSource/FlickrController.addPhotos',
  'GET /api/v0/flickr/search': 'DataSource/FlickrController.search',
  'POST /api/v0/flickr/update': 'DataSource/FlickrController.updatePhoto',
  'GET /api/v0/flickr/getphotos': 'DataSource/FlickrController.getPhotoLinks',
  'POST /api/v0/activity/adduploadedphotos': 'DataSource/FlickrController.addLinksofUploadedImages',

  'POST /api/v0/activity/add': 'TourDetails/ActivityController.addActivity',
  'POST /api/v0/activity/update': 'TourDetails/ActivityController.updateActivity',
  'GET /api/v0/activity/search': 'TourDetails/ActivityController.search',
  //'GET /api/v0/activity/getallactivities': 'TourDetails/ActivityController.getActivities',
  'GET /api/v0/activity/getbyid': 'TourDetails/ActivityController.getActivityById',

  'GET /api/v0/activity/getforagents': 'TourDetails/ActivityController.getActivitiesForAgents',
  'POST /api/v0/activity/updateprice': 'TourDetails/ActivityController.updateActivityPrices',

  'GET /api/v0/tripadvisor/location_mapper': 'DataSource/TripAdvisorApisController.callLocationMapperApi',
  'GET /api/v0/tripadvisor/location': 'DataSource/TripAdvisorApisController.callLocationApi',

  'POST /api/v0/roomtype/add': 'TourDetails/RoomTypeController.addRoomType',
  'GET /api/v0/roomtype/search': 'TourDetails/RoomTypeController.search',
  'POST /api/v0/roomtype/update': 'TourDetails/RoomTypeController.updateRoomType',

  'POST /api/v0/hotel/add': 'TourDetails/HotelController.addHotel',
  'GET /api/v0/hotel/search': 'TourDetails/HotelController.search',
  'POST /api/v0/hotel/update': 'TourDetails/HotelController.updateHotel',
  'GET /api/v0/hotel/getbyid': 'TourDetails/HotelController.getHotelById',
  'GET /api/v0/hotel/getforagents': 'TourDetails/HotelController.getHotelsForAgents',

  'GET /api/v0/hotel/getprice': 'TourDetails/HotelController.getHotelPrice',
  'POST /api/v0/hotel/updateprice': 'TourDetails/HotelController.updateHotelPrices',

  'POST /api/v0/tour/add': 'TourDetails/MiniToursController.addTour',
  'GET /api/v0/tour/search': 'TourDetails/MiniToursController.search',
  'POST /api/v0/tour/update': 'TourDetails/MiniToursController.updateTour',
  //'GET /api/v0/tour/get': 'TourDetails/MiniToursController.getTours',
  'GET /api/v0/tour/getbyid': 'TourDetails/MiniToursController.getMinitourById',

  'GET /api/v0/tour/getforagents': 'TourDetails/MiniToursController.getMinitoursForAgents',
  'POST /api/v0/tour/updateprice': 'TourDetails/MiniToursController.updateMinitourPrices',

  'GET /api/v0/rome2rio/get': 'DataSource/Rome2RioController.getRome2RioData',
  'GET /api/v0/rome2rio/adddata': 'DataSource/Rome2RioController.addDataFromRome2rio',
  'GET /api/v0/flights/get': 'StaticData/AirTransportController.getFlights',

  'POST /api/v0/agent/add': 'AgentDetails/AgentController.addAgent',
  'GET /api/v0/agent/search': 'AgentDetails/AgentController.search',
  'POST /api/v0/agent/update': 'AgentDetails/AgentController.updateAgent',

  'POST /api/v0/currencytype/add': 'TourDetails/CurrencyTypeController.addCurrencytype',
  'GET /api/v0/currencytype/search': 'TourDetails/CurrencyTypeController.search',
  'POST /api/v0/currencytype/update': 'TourDetails/CurrencyTypeController.updateCurrencytype',

  'POST /api/v0/activitytype/add': 'TourDetails/ActivityTypeController.addActivitytype',
  'GET /api/v0/activitytype/search': 'TourDetails/ActivityTypeController.search',
  'POST /api/v0/activitytype/update': 'TourDetails/ActivityTypeController.updateActivitytype',
  'POST /api/v0/activity/update_price': 'TourDetails/ActivityController.updateActivityPrices',

  'POST /api/v0/bookingtype/add': 'Sales/BookingStatusTypeController.addBookingtype',
  'GET /api/v0/bookingtype/search': 'Sales/BookingStatusTypeController.search',
  'POST /api/v0/bookingtype/update': 'Sales/BookingStatusTypeController.updateBookingtype',

  'POST /api/v0/touristtype/add': 'TourDetails/TouristTypesController.addType',
  'GET /api/v0/touristtype/search': 'TourDetails/TouristTypesController.search',
  'POST /api/v0/touristtype/update': 'TourDetails/TouristTypesController.updateType',

  'POST /api/v0/itinerary/add': 'TourDetails/ItinerariesController.addItineary',
  'GET /api/v0/itinerary/search': 'TourDetails/ItinerariesController.search',
  'POST /api/v0/itinerary/update': 'TourDetails/ItinerariesController.updateItineary',
  'GET /api/v0/itinerary/getfull': 'TourDetails/ItinerariesController.getFullItinearyById',

  'POST /api/v0/airports/add': 'StaticData/IATAairportsController.addAirports',
  'GET /api/v0/airports/search': 'StaticData/IATAairportsController.search',
  'POST /api/v0/airports/update': 'StaticData/IATAairportsController.updateAirport',
  //'GET /api/v0/airports/getData': 'StaticData/IATAairportsController.getIATAData',

  'POST /api/v0/iatacities/add': 'StaticData/IATAcitiesController.addCities',
  'GET /api/v0/iatacities/search': 'StaticData/IATAcitiesController.search',
  'POST /api/v0/iatacities/update': 'StaticData/IATAcitiesController.updateCity',
  //'GET /api/v0/iatacities/getData': 'StaticData/IATAcitiesController.getIATAData',

  'POST /api/v0/iatacountries/add': 'StaticData/IATAcountriesController.addCountries',
  'GET /api/v0/iatacountries/search': 'StaticData/IATAcountriesController.search',
  'POST /api/v0/iatacountries/update': 'StaticData/IATAcountriesController.updateCountry',
  //'GET /api/v0/iatacountries/getData': 'StaticData/IATAcountriesController.getIATAData',

  'GET /api/v0/bookedTrips/search': 'UserDetails/UserBookedItinerariesController.searchBookedTrips',
  'POST /api/v0/bookedTrips/update': 'UserDetails/UserBookedItinerariesController.updateBookingtype',
  'GET /api/v0/userProfile/get': 'UserDetails/UserLoginController.userGetProfile',

  'GET /api/v0/androidappversion/get': 'AndroidAppVersionController.getAndroidAppVersion',

  'GET /api/v0/controllers/get': 'AclManager/AclManagerController.getAllControllers',

  'POST /api/v0/flights/getlive': 'DataSource/QpxController.getQpxData',

  //ean
  'GET /api/v0/hotel/addHotelsFromExpedia': 'TourDetails/HotelController.addHotelsFromExpedia',
  'GET /api/v0/hotel/getMoreHotelDetailsFromExpedia': 'TourDetails/HotelController.getMoreHotelDetailsFromExpedia',

  'GET /api/v0/hotelimages/getRoomImagesFromExpedia': 'DataSource/HotelImagesController.getRoomImagesFromExpedia',
  'POST /api/v0/hotelimages/add': 'DataSource/HotelImagesController.addPhotos',
  'GET /api/v0/hotelimages/search': 'DataSource/HotelImagesController.search',
  'POST /api/v0/hotelimages/update': 'DataSource/HotelImagesController.updatePhoto',
  'POST /api/v0/hotelimages/adduploadedphotos': 'DataSource/HotelImagesController.addLinksofUploadedImages',
  //AmazonBucket
  'POST /api/v0/s3/getcredentials': 'UserDetails/S3Controller.getS3Credentials',
  'POST /api/v0/hotelimages/saveInS3': 'DataSource/HotelImagesController.saveRoomImagesInAWSS3',
  'POST /api/v0/images/uploadFromUrl': 'UserDetails/S3Controller.getPhotosFromUrl',
  'POST /api/v0/s3/uploadImages': 'UserDetails/S3Controller.uploadImagetoS3',
  //'POST /api/v0/images/resizeImage' : 'UserDetails/S3Controller.resizeImage',

  'POST /api/v1/email/sendEmails': 'Marketing/MarketingController.sendMarketingEmails',

  //for visa
  'POST /api/v1/visacategories/add': 'TourDetails/VisaCategoriesController.addVisaCategory',
  'POST /api/v1/visacategories/update': 'TourDetails/VisaCategoriesController.updateVisaCategory',
  'GET  /api/v1/visacategories/search': 'TourDetails/VisaCategoriesController.search',
  'POST /api/v1/visa/add': 'TourDetails/VisaController.addVisa',
  'POST /api/v1/visa/update': 'TourDetails/VisaController.updateVisa',
  'GET  /api/v1/visa/search': 'TourDetails/VisaController.searchVisa',
  'POST /api/v1/visa/getVisaPricesForCountries': 'TourDetails/VisaController.getVisaPricesForCountries',

  //supplier
  'GET  /api/v1/supplier/activities': 'TourDetails/ApiTourTransferMasterController.searchSupplier',


  //for android
  'GET /api/v0/city/getCitiesWithInternationalAirports': 'TourDetails/CityController.getCitiesWithInternationalAirports',
  'POST /api/v0/user/firstLogin': 'UserDetails/UserLoginController.saveUserEmails',
  'GET /api/v0/city/getCitiesWithAirports': 'TourDetails/CityController.getCitiesWithAirports',
  'GET /api/v0/activity/getAllActiveTypes': 'TourDetails/ActivityTypeController.getAllActiveTypes',
  'GET /api/v0/hotel/getAllRoomTypes': 'TourDetails/RoomTypeController.getAllRoomTypes',
  'GET /api/v0/androidconstants/get': 'AndroidConstantsController.getConstants',
  'GET /api/v0/exchangerates/get': 'ExchangeRatesController.getExchangeRates',
  'POST /api/v0/activity/getreplacement': 'TourDetails/ActivityController.getActivitiesForReplacement',
  'POST /api/v0/tour/getreplacement': 'TourDetails/MiniToursController.getMinitoursForReplacement',
  'POST /api/v0/hotel/getreplacement': 'TourDetails/HotelController.getHotelsForReplacement',
  'POST /api/v0/flights/getreplacement': 'StaticData/AirTransportController.getFlights',
  'GET /api/v0/itinerary/getsample': 'TestItineraryController.getDummyItinerary',
  'GET /api/v0/minitour/getphotos': 'DataSource/FlickrController.getPhotosByIds',
  'POST /api/v0/itinerary/getPlans': 'TourDetails/ItinerariesController.getItinerariesToShow',
  'GET /api/v0/activity/getdetails': 'TourDetails/ActivityController.getDetailsById',
  'GET /api/v0/hotel/getdetails': 'TourDetails/HotelController.getDetailsById',
  'GET /api/v0/tour/getdetails': 'TourDetails/MiniToursController.getDetailsById',
  //UserLogin
  'POST /api/v0/user/userLogin': 'UserDetails/UserLoginController.doUserLogin',
  'POST /api/v0/user/userSignUp': 'UserDetails/UserLoginController.userSignUp',
  'POST /api/v0/user/resetUserPassword': 'UserDetails/UserLoginController.resetUserPassword',
  'GET /api/v0/user/logout': 'UserDetails/UserLoginController.userLogout',
  'GET /api/v0/user/getUserProfile': 'UserDetails/UserLoginController.userGetProfile',
  'POST /api/v0/user/getResetCode': 'UserDetails/UserLoginController.sendResetPasswordlink',

  //UserItinerariesSaveAndBook
  'POST /api/v0/user/userDefined': 'UserDetails/UserDefinedItinerariesController.addItineraries',
  'POST /api/v0/user/userDefinedDelete': 'UserDetails/UserDefinedItinerariesController.deactivateItinerary',
  'GET /api/v0/user/getUserDefined': 'UserDetails/UserDefinedItinerariesController.getItineraries',
  'POST /api/v0/user/userBook': 'UserDetails/UserBookedItinerariesController.bookItineraries',
  'POST /api/v0/user/verifyContactNumber': 'UserDetails/UserBookedItinerariesController.verifyUserBooking',
  'GET /api/v0/user/getUserBooked': 'UserDetails/UserBookedItinerariesController.getBookedItineraries',

  //ZopkyUser
  'POST /api/v1/employee/add': 'UserDetails/ZopkyUserController.addEmployee',
  'POST /api/v1/employee/update': 'UserDetails/ZopkyUserController.updateEmployee',
  'POST /api/v1/employee/updateStatus': 'UserDetails/ZopkyUserController.updateStatusEmployee',
  'POST /api/v1/employee/resetpassword': 'UserDetails/ZopkyUserController.resetPasswordEmployee',
  'GET /api/v1/employee/search': 'UserDetails/ZopkyUserController.searchEmployee',
  'POST /api/v1/employee/updateSignature': 'UserDetails/ZopkyUserController.updateSignature',
  'GET /api/v1/employee/getSignature': 'UserDetails/ZopkyUserController.getSignature',
  'GET /api/v1/employee/getEmailConfiguration': 'UserDetails/ZopkyUserController.getEmailConfiguration',
  'POST /api/v1/employee/updateEmailConfiguration': 'UserDetails/ZopkyUserController.updateEmailConfiguration',
  'POST /api/v1/employee/deleteEmailConfiguration': 'UserDetails/ZopkyUserController.deleteEmailConfiguration',

  //VisaProcessing
  'POST /api/v1/visaprocessing/add': 'TourDetails/VisaProcessingController.addVisaProcessing',
  'POST /api/v1/visaprocessing/update': 'TourDetails/VisaProcessingController.updateVisaProcessing',
  'GET /api/v1/visaprocessing/search': 'TourDetails/VisaProcessingController.search',

  //ActivitySlots
  'POST /api/v1/activityslots/add': 'TourDetails/ActivitySlotsController.addActivitySlots',
  'POST /api/v1/activityslots/update': 'TourDetails/ActivitySlotsController.updateActivitySlots',
  'GET /api/v1/activityslots/search': 'TourDetails/ActivitySlotsController.searchActivitySlots',
  'GET /api/v1/activityslots/getAll': 'TourDetails/ActivitySlotsController.getAllActivitySlots',

  //ActivitySlotSupplierMapping
  'GET /api/v1/ActivitySlotSupplierMapping/getByActivityOrTourId': 'AgentDetails/ActivitySlotSupplierMappingController.getByActivityOrTourId',
  'POST /api/v1/ActivitySlotSupplierMapping/update': 'AgentDetails/ActivitySlotSupplierMappingController.updateActivityOrTourPrices',

  //LeadSources
  'POST /api/v1/leadsources/add': 'Leads/LeadSourcesController.addLeads',
  'POST /api/v1/leadsources/update': 'Leads/LeadSourcesController.updateLeads',
  'GET /api/v1/leadsources/search': 'Leads/LeadSourcesController.search',

  //Lead
  'POST /api/v1/lead/add': 'Leads/LeadController.addLead',
  'POST /api/v1/lead/update': 'Leads/LeadController.updateLead',
  'GET /api/v1/lead/search': 'Leads/LeadController.search',
  'GET /api/v1/lead/details': 'Leads/LeadController.getLeadById',
  'POST /api/v1/lead/cms/add': 'Leads/LeadController.fetchLeadsFromCMS',
  'GET /api/v1/lead/getHolidayTradefairFilter': 'Leads/LeadController.getHolidayTradefairFilterData',
  'GET /api/v1/lead/getCampaignNames': 'Leads/LeadController.getLeadCampaignNames',
  'GET /api/v1/lead/getLeadDepartureCities': 'Leads/LeadController.getLeadDepartureCityNames',
  'POST /api/v1/lead/partner/add': 'Leads/LeadController.fetchLeadsFromPartner',

  //Companies
  'POST /api/v1/companies/add': 'UserDetails/CompaniesController.addCompany',
  'POST /api/v1/companies/update': 'UserDetails/CompaniesController.updateCompany',
  'GET  /api/v1/companies/search': 'UserDetails/CompaniesController.searchCompany',
  'GET  /api/v1/companies/getActiveCompanies': 'UserDetails/CompaniesController.getActiveCompanies',


  //LeadLogs
  'POST /api/v1/lead/addlog': 'Leads/LeadLogsController.addLeadLog',
  'POST /api/v1/lead/updatelog': 'Leads/LeadLogsController.updateLeadLog',
  'GET  /api/v1/lead/searchlog': 'Leads/LeadLogsController.searchLeadLogs',

  //SalesChannels
  'POST /api/v1/saleschannels/add': 'UserDetails/SalesChannelsController.addSalesChannel',
  'POST /api/v1/saleschannels/update': 'UserDetails/SalesChannelsController.updateSalesChannel',
  'GET  /api/v1/saleschannels/search': 'UserDetails/SalesChannelsController.searchSalesChannel',
  'GET  /api/v1/saleschannels/getActiveSalesChannel': 'UserDetails/SalesChannelsController.getActiveSalesChannel',


  //GoomoUrl
  'POST /api/v1/goomourl/add': 'Leads/GoomoUrlController.addGoomoUrl',
  'POST /api/v1/goomourl/update': 'Leads/GoomoUrlController.updateGoomoUrl',
  'GET /api/v1/goomourl/search': 'Leads/GoomoUrlController.search',


  //Currency
  'POST /api/v1/currency/add': 'TourDetails/CurrencyController.addCurrency',
  'POST /api/v1/currency/update': 'TourDetails/CurrencyController.updateCurrency',
  'GET /api/v1/currency/search': 'TourDetails/CurrencyController.search',

  'GET /api/v1/console/getActivityConstants': 'TourDetails/DataInputController.getConstantDataForActivityConsole',
  'GET /api/v1/console/getActivityPriceConstants': 'TourDetails/DataInputController.getConstantDataForActivityPriceConsole',
  'GET /api/v1/console/getTransferPriceConstants': 'TourDetails/DataInputController.getConstantDataForTransferPriceConsole',
  'GET /api/v1/console/getHotelPriceConstants': 'TourDetails/DataInputController.getConstantDataForHotelPriceConsole',
  'GET /api/v1/console/getCountriesAndMonths': 'TourDetails/DataInputController.getCountriesAndMonths',
  'GET /api/v1/genre/getList': 'TourDetails/DataInputController.getGenreList',
  'GET /api/v1/transfers/getCategories': 'TourDetails/DataInputController.getTransferCategories',

  'POST /api/v1/console/addTransferType': 'TourDetails/DataInputController.addTransportType',
  'POST /api/v1/console/updateTransferType': 'TourDetails/DataInputController.updateTransportType',
  'GET /api/v1/console/getTransferTypes': 'TourDetails/DataInputController.searchTransportType',
  'GET /api/v1/console/getAirportTransfers': 'TourDetails/DataInputController.getAirportTransfersOfAgents',
  'GET /api/v1/console/getInterCityTransfers': 'TourDetails/DataInputController.getInterCityTransfersOfAgents',
  'GET /api/v1/console/getPanoramioImages': 'TourDetails/DataInputController.getPanoramioImages',

  'POST /api/v1/countryCombination/add': 'TourDetails/DataInputController.addCountryCombinations',
  'POST /api/v1/countryCombination/update': 'TourDetails/DataInputController.updateCountryCombination',
  'GET /api/v1/countryCombination/search': 'TourDetails/DataInputController.searchCountryCombinations',

  'POST /api/v1/activity/add': 'TourDetails/ActivityController.addActivities',
  'POST /api/v1/activity/update': 'TourDetails/ActivityController.updateActivities',
  'GET /api/v1/activity/search': 'TourDetails/ActivityController.searchActivities',
  'GET /api/v1/interhotel/search': 'TourDetails/ActivityController.searchInterHotelTransfers',
  'GET /api/v1/intercity/search': 'TourDetails/ActivityController.searchIntercityTransfers',
  'GET /api/v1/airportTransfer/search': 'TourDetails/ActivityController.searchAirportTransfers',
  'GET /api/v1/activity/getList': 'TourDetails/ActivityController.searchActivitiesList',
  'GET /api/v1/activity/getById': 'TourDetails/ActivityController.getActivitiesById',
  'GET /api/v1/activity/getForAgents': 'TourDetails/ActivityController.getActivitiesOfAgents',
  'GET /api/v1/intercity/getForAgents': 'TourDetails/ActivityController.getIntercityTransfersOfAgents',
  'GET /api/v1/interHotelTransfers/getForAgents': 'TourDetails/ActivityController.getInterHotelTransfersOfAgents',
  'GET /api/v1/airportTransfers/getForAgents': 'TourDetails/ActivityController.getAirportTransfersOfAgents',
  'GET /api/v1/activity/getPrices': 'TourDetails/ActivityController.getPricesOfActivity',
  'POST /api/v1/activity/updatePrice': 'TourDetails/ActivityController.updateActivitiesPrices',
  'POST /api/v1/activity/updatePriceStatus': 'TourDetails/ActivityController.updateActivitiesPriceStatus',

  'POST /api/v1/activity/getReplacement': 'TourDetails/ActivityController.getActivitiesOfReplacement',

  'GET /api/v1/airports/getByCity': 'AgentDetails/AirportTransferPricesController.getAirportsByCity',
  'GET /api/v1/airports/getByDraftCity/:city_id/': 'AgentDetails/AirportTransferPricesController.getAirportsByCityForDraft',
  'POST /api/v1/airports/addTransferPrices': 'AgentDetails/AirportTransferPricesController.addUpdateAirportTransferPrices',

  'POST /api/v1/tour/add': 'TourDetails/MiniToursController.addMiniTours',
  'GET /api/v1/tour/search': 'TourDetails/MiniToursController.searchMiniTours',
  'POST /api/v1/tour/update': 'TourDetails/MiniToursController.updateMiniTours',
  'GET /api/v1/tour/getById': 'TourDetails/MiniToursController.getMinitoursById',
  'GET /api/v1/tour/getForAgents': 'TourDetails/MiniToursController.getMinitoursOfAgents',
  'POST /api/v1/tour/updatePrice': 'TourDetails/MiniToursController.updateMinitoursPrices',

  'POST /api/v1/tour/getReplacement': 'TourDetails/MiniToursController.getMinitoursOfReplacement',

  'POST /api/v1/user/userBook': 'UserDetails/UserBookedItinerariesController.bookUserItineraries',

  'GET /api/v1/hotel/getPrice': 'TourDetails/HotelController.getAgentHotelPrice',
  'POST /api/v1/hotel/updatePrice': 'TourDetails/HotelController.updateAgentHotelPrice',

  'POST /api/v1/hotel/getReplacement': 'TourDetails/HotelController.getAgentHotelsForReplacement',
  'GET /api/v1/console/getPanoramioImages': 'TourDetails/ImageController.getPanoramioImages',


  'GET /api/v1/hotel/getforagents': 'TourDetails/HotelController.getHotelsOfAgents',

  'POST /api/v1/console/createSupplier': 'TourDetails/DataInputController.addSupplier',
  'GET /api/v1/console/searchSupplier': 'TourDetails/DataInputController.searchSupplier',
  'POST /api/v1/console/updateSupplierProfile': 'TourDetails/DataInputController.updateSupplier',

  'POST /api/v1/template/createTemplateType': 'Templates/TemplateItinerariesController.addTemplateType',
  'GET /api/v1/template/searchTemplateType': 'Templates/TemplateItinerariesController.searchTemplateType',
  'POST /api/v1/template/updateTemplateType': 'Templates/TemplateItinerariesController.updateTemplateType',

  'GET /api/v1/template/searchTemplates': 'Templates/TemplateItinerariesController.searchTemplates',
  'GET /api/v1/template/get_details/:template_id': 'Templates/TemplateItinerariesController.getTemplateDetails',
  'POST /api/v1/template/updateTemplates': 'Templates/TemplateItinerariesController.updateTemplates',

  'POST /api/v1/template/createFromDraft': 'Draft/DraftController.saveDraftAsTemplate',
  'POST /api/v1/template/updateFromDraft': 'Draft/DraftController.updateDraftAsTemplate',

  'POST /api/v1/console/addVisaPrice': 'TourDetails/DataInputController.addVisaCharges',
  'POST /api/v1/console/updateVisaPrice': 'TourDetails/DataInputController.updateVisaCharges',
  'GET /api/v1/hotels/getTravstoreHotels': 'Hotels/ApiHotelsController.getTravstoreHotelList',
  'GET /api/v1/hotels/getTravstoreCityCodes': 'Hotels/ApiHotelsController.getTravstoreCityCodes',
  'POST /api/v1/hotels/mapTravstoreHotels': 'Hotels/ApiHotelsController.mapTravstoreHotels',
  'POST /api/v1/hotels/mapTravstoreCities': 'Hotels/ApiHotelsController.mapTravstoreCities',

  /**
   * Android V1
   */
  'POST /api/v1/countries/getCombinations': 'TourDetails/AndroidApiController.getCountryCombinations',
  'POST /api/v1/itinerary/getCitiesForDestination': 'TourDetails/AndroidApiController.getCitiesForSelectedDestination',
  'POST /api/v1/itinerary/getCitiesForCombination': 'TourDetails/AndroidApiController.getCitiesForCombinationSelected',
  'POST /api/v1/itinerary/getTransfers': 'TourDetails/AndroidApiController.getTransfersForCitiesSelected',
  'POST /api/v1/itinerary/getCityHotels': 'TourDetails/AndroidApiController.getHotelsForCity',
  'POST /api/v1/itinerary/getHotelDetails': 'TourDetails/AndroidApiController.getHotelsDetails',
  'GET /api/v1/itinerary/getActivityDetails': 'TourDetails/AndroidApiController.getActivityDetails',
  'GET /api/v1/itinerary/getCityDetails': 'TourDetails/AndroidApiController.getCityDetails',
  'GET /api/v1/city/getActivities': 'TourDetails/AndroidApiController.getActivitiesByCity',
  'GET /api/v1/itinerary/getTourDetails': 'TourDetails/AndroidApiController.getMiniTourDetails',
  'GET /api/v1/constants/getData': 'TourDetails/AndroidApiController.getMainPageDate',
  'GET /api/v1/constants/getBoardingCities': 'TourDetails/AndroidApiController.getBoardingCityList',

  'GET /api/v1/activities/getByType': 'TourDetails/AndroidApiController.getActivitiesToExplore',
  'GET /api/v1/activities/getList': 'TourDetails/AndroidApiController.getActivitiesList',

  'GET /api/v1/itinerary/getExtraServices': 'TourDetails/AndroidApiController.getListOfExtraServices',
  'GET /api/v1/itinerary/getTaxModel': 'TourDetails/AndroidApiController.getTaxModel',
  'GET /api/v1/activities/getFavorite': 'TourDetails/AndroidApiController.getFavoriteActivities',
  'GET /api/v1/countries/getList': 'TourDetails/CountryController.getCountriesList',
  'GET /api/v1/destination/search': 'TourDetails/AndroidApiController.getDestinationList',
  'POST /api/v1/itinerary/getCityList': 'TourDetails/AndroidApiController.getCitiesToAddInItinerary',
  'POST /api/v1/itinerary/getHotels': 'TourDetails/AndroidApiController.getHotelsForItinerary',
  'POST /api/v1/itinerary/getHotelRoomConfig': 'TourDetails/AndroidApiController.getHotelRoomConfig',
  'POST /api/v1/devices/registerGcm': 'TourDetails/AndroidApiController.registerGcmDevice',
  'GET /api/v1/search/getResults': 'TourDetails/AndroidApiController.getSearchResults',

  'POST /api/v1/activities/addFavorites': 'TourDetails/AndroidApiController.addFavoriteActivity',
  'POST /api/v1/activities/removeFavorites': 'TourDetails/AndroidApiController.removeFavoriteActivity',

  'POST /api/v1/user/userLogin': 'UserDetails/UserLoginController.doLogin',
  'POST /api/v1/user/userSignUp': 'UserDetails/UserLoginController.signUp',
  'POST /api/v1/user/createCustomerProfile': 'UserDetails/UserLoginController.createCustomerProfile',
  'POST /api/v1/user/updateCustomerProfile': 'UserDetails/UserLoginController.updateCustomerProfile',
  'GET /api/v1/user/getUserProfile': 'UserDetails/UserLoginController.getProfile',
  'POST /api/v1/user/getResetCode': 'UserDetails/UserLoginController.sendResetPasswordLinkToUser',
  'POST /api/v1/user/resetUserPassword': 'UserDetails/UserLoginController.resetUserPasswordWithOtp',
  'POST /api/v1/user/doFbLogin': 'UserDetails/UserLoginController.doFbLoginForCustomer',
  'POST /api/v1/user/doGoogleLogin': 'UserDetails/UserLoginController.doGoogleLoginForCustomer',
  'POST /api/v1/user/updateContact': 'UserDetails/UserLoginController.updateContact',
  'GET /api/v1/user/logout': 'UserDetails/UserLoginController.LogoutUserAndDeleteSession',

  'POST /api/v1/user/updatePassword': 'UserDetails/UserLoginController.resetPassword',

  'POST /api/v1/itinerary/submit': 'UserDetails/ItineraryController.createNewItinerary',
  'POST /api/v1/itinerary/guestSubmit': 'UserDetails/ItineraryController.createNewItineraryByGuest',
  'GET /api/v1/itinerary/getList': 'UserDetails/ItineraryController.getItineraryList',
  'GET /api/v1/itinerary/getDetails': 'UserDetails/ItineraryController.getItineraryDetails',

  'POST /api/v1/itinerary/adminSubmit': 'UserDetails/ItineraryController.createNewItineraryByAdmin',
  'POST /api/v1/user/firstLogin': 'UserDetails/UserLoginController.saveUserEmailsV1',

  'POST /api/v1/user/requestContact': 'UserDetails/ItineraryController.createContactRequest',
  'POST /api/v1/draft/create': 'Draft/DraftController.createDraft',
  'POST /api/v1/draft/savetravellerdetails/:draft_id': 'Draft/DraftController.saveTravellerDetails',
  'POST /api/v1/draft/create_from_template/:template_id': 'Templates/TemplateItinerariesController.createDraftFromTemplate',
  'GET /api/v1/itinerary/callback/:draft_id': 'Draft/DraftController.requestCallback',
  'GET /api/v1/draft/find/:draft_id': 'Draft/DraftController.getDraft',
  'GET /api/v1/deal/find/:deal_id': 'Draft/DraftController.getDeal',
  'GET /api/v1/draft/update/remove_day/:draft_id/:draft_city_id/:draft_day_id/:key': 'Draft/DraftController.removeDay',
  'GET /api/v1/draft/update/remove_activity/:draft_id/:draft_activity_id/:key': 'Draft/DraftController.removeActivity',
  'GET /api/v1/draft/update/remove_hotel/:draft_id/:hotel_id/:key': 'Draft/DraftController.removeHotel',
  'GET /api/v1/draft/update/add_day_in_city/:draft_id/:draft_city_id/:key': 'Draft/DraftController.addDayInTheCity',
  'POST /api/v1/draft/update/add_activity_on_day/:draft_id/:draft_day_id/:key': 'Draft/DraftController.addActivityOnSpecificDay',
  'POST /api/v1/draft/update/add_transfer/:draft_id/:draft_city_id/:key': 'Draft/DraftController.addTransfer',
  'POST /api/v1/draft/update/add_airport_transfer/:draft_id/:draft_day_id/:key': 'Draft/DraftController.addAirportTransfer',
  'POST /api/v1/draft/update/add_inter_hotel_transfer/:draft_id/:draft_day_id/:key': 'Draft/DraftController.addInterHotelTransfer',
  'POST /api/v1/draft/update/add_hotel/:draft_id/:key': 'Draft/DraftController.addHotel',
  // 'POST /api/v1/draft/update/add_flight/:draft_id/:draft_day_id/:key': 'Draft/DraftController.addFlight',
  // 'POST /api/v1/draft/update/add_flight_data/:draft_id/:draft_day_id/:key': 'Draft/DraftController.addFlightWithDataMapping',
  // 'POST /api/v1/draft/update/add_flight_data_with_transfers/:draft_id/:draft_day_id/:key': 'Draft/DraftController.addFlightWithDataMappingAndTransfers',
  'POST /api/v1/draft/update/add_city/:draft_id/:key': 'Draft/DraftController.addCity',
  'GET /api/v1/draft/update/remove_city/:draft_id/:draft_city_id/:key': 'Draft/DraftController.removeCity',
  // 'GET /api/v1/draft/update/remove_flight/:draft_id/:draft_day_id/:key': 'Draft/DraftController.removeFlight',
  'POST /api/v1/draft/save/:draft_id': 'Draft/DraftController.saveItineraryForUser',
  'POST /api/v1/deal/save/:deal_id': 'Draft/DraftController.saveDealForUser',

  'GET /api/v1/activities/get_by_city': 'TourDetails/AndroidApiController.getActivitiesOfCity',

  'POST /api/v1/draft/get_cities_list/:draft_id/': 'Draft/DraftController.getCitiesForDraft',
  'GET /api/v1/draft/getquotationbyleadid': 'Draft/DraftController.getQuotationByLeadId',

  'POST /api/v1/transfers/getFlight': 'Transfer/GoomoFlightController.getFlights',
  'GET /api/v1/transfers/updateFlightPrices/:draft_id': 'Transfer/SkyscannerController.updateFlightPrices',
  'POST /api/v1/transfers/getFlightDetails': 'Transfer/GoomoFlightController.getFlightDetails',
  'POST /api/v1/transfers/get_transfer_options/:start_city/:end_city/': 'Transfer/TransfersController.getIntercityTransferOptions',
  'GET /api/v1/draft/get_intercity_transfers/:start_city/:end_city/': 'Transfer/TransfersController.getAllIntercityTransfers',
  'GET /api/v1/draft/get_airport_transfers/:city_id/': 'Transfer/TransfersController.getAllAirportTransfers',
  'GET /api/v1/draft/get_interhotel_transfers/:city_id/': 'Transfer/TransfersController.getAllInterHotelTransfers',
  'POST /api/v1/transfers/get_airport_transfer_options/:start_city/': 'Transfer/TransfersController.getAirportTransferOptions',
  'POST /api/v1/transfers/get_inter_hotel_transfer_options/:start_city/': 'Transfer/TransfersController.getInterHotelTransferOptions',
  'POST /api/v1/draft/reorder_cities/:draft_id/:key': 'Draft/DraftController.reorderCities',

  'GET /api/v1/draft/get_saved_drafts': 'Draft/DraftController.getSavedTrips',
  'GET /api/v1/draft/check_access/:draft_id/:key': 'Draft/DraftController.checkIfDraftEditable',

  'POST /api/v1/order/:draft_id': 'Draft/DraftController.createOrderFromDraft',
  'GET /api/v1/payment/status/:txn_id/:draft_id': 'Transaction/TransactionController.getTransactionStatus',
  'GET /api/v1/payment/:order_id/:draft_id/:amount': 'Transaction/TransactionController.getPgPostCallData',
  'POST /api/v1/payment/verify': 'Transaction/TransactionController.processPgResponse',
  'POST /api/v1/payment/cancel': 'Transaction/TransactionController.cancelPgResponse',
  'GET /api/v1/orders/search': 'Transaction/OrderController.getOrders',
  'GET /api/v1/payment/getOrderTransactions/:order_id': 'Transaction/TransactionController.getOrderTransactions',

  'POST /api/v1/draft/addDiscount': 'Draft/DraftController.addDiscount',
  'POST /api/v1/draft/assignDraftToUser': 'Draft/DraftController.assignDraftToUser',
  'POST /api/v1/draft/sendDraftEmailToUser': 'Draft/DraftController.sendDraftEmailToUser',
  'POST /api/v1/draft/handleBookingClick': 'Draft/DraftController.sendDraftEmailToAdminOnUserBookClick',

  'POST /api/v1/draft/updatePreferences/:draft_id/:key': 'Draft/DraftController.updateUserPreferences',
  'POST /api/v1/deal/updatePreferences/:deal_id': 'Draft/DraftController.updateDealPreferences',

  'GET /api/v1/deals/get_categories': 'Templates/TemplateItinerariesController.getTemplateCategoriesWithoutDeals',
  'GET /api/v1/deals/get_deal_categories': 'Templates/TemplateItinerariesController.getTemplateCategoriesWithDeals',
  'POST /api/v1/deals/get/': 'Templates/TemplateItinerariesController.getTemplatesWithDeals',

  'GET /api/v1/hotels/locations': 'Hotels/GoomoHotelController.getESLocations',
  'POST /api/v1/hotels/search': 'Hotels/GoomoHotelController.getESSearch',
  'POST /api/v1/hotels/get': 'Hotels/GoomoHotelController.getHotels',
  'POST /api/v1/hotels/getDetails': 'Hotels/GoomoHotelController.getHotelDetails',

  'POST /api/v1/draft/update/add_flightDetails_itinerary/': 'Draft/DraftController.addFlightDetailsToItinerary',
  'GET /api/v1/draft/getFlightDetails/:draft_id': 'Draft/DraftController.getItineraryFlightDetails',

  'POST /api/v1/draft/update/add_priceBreakup_itinerary/': 'Draft/DraftController.addPriceBreakupToItinerary',

  'POST /api/v1/draft/update/add_visaDetails_itinerary/': 'Draft/DraftController.addVisaDetailsToItinerary',

  //Lead Status
  'POST /api/v1/leadStatus/add': 'Leads/LeadStatusController.addLeadStatus',
  'POST /api/v1/leadStatus/update': 'Leads/LeadStatusController.updateLeadStatus',
  'GET /api/v1/leadStatus/search': 'Leads/LeadStatusController.getLeadStatus',

  //LeadNotes
  'POST /api/v1/leadNotes/add': 'Leads/LeadNotesController.addLeadNote',
  'GET /api/v1/leadNotes/search': 'Leads/LeadNotesController.search',


  //Branches
  'POST /api/v1/branches/add': 'UserDetails/BranchesController.addBranch',
  'POST /api/v1/branches/update': 'UserDetails/BranchesController.updateBranch',
  'GET  /api/v1/branches/search': 'UserDetails/BranchesController.searchBranch',
  'GET  /api/v1/branches/filterBranch': 'UserDetails/BranchesController.filterBranch',

  'GET /api/v1/transfers/getAirlinesUrl': 'Transfer/GoomoFlightController.getAirlinesURLs',
  'GET /api/v1/transfers/getAirportsUrl': 'Transfer/GoomoFlightController.getAirportsURLs',

  'GET /api/v1/itinerary/reprice/:draft_id': 'Draft/DraftController.repriceItinerary',

  //ManualDrafts
  'POST /api/v1/manualdrafts/add': 'Draft/ManualDraftsController.addManualDrafts',
  'POST /api/v1/manualdrafts/update': 'Draft/ManualDraftsController.updateManualDrafts',
  'POST /api/v1/manualdrafts/resendEmail': 'Draft/ManualDraftsController.resendEmail',
  'GET /api/v1/manualdrafts/getbyleadid': 'Draft/ManualDraftsController.getManualDraftsByLeadId',
  'POST /api/v1/manualdrafts/addCommunication': 'Draft/ManualDraftsController.addCommunication',
  'POST /api/v1/manualdrafts/replyEmail': 'Draft/ManualDraftsController.replyEmail',

  //EmailTempalte
  'POST /api/v1/emailtemplate/add': 'Leads/EmailTemplateController.addEmailTemplate',
  'POST /api/v1/emailtemplate/update': 'Leads/EmailTemplateController.updateEmailTemplate',
  'GET /api/v1/emailtemplate/search': 'Leads/EmailTemplateController.search',
  'GET /api/v1/emailtemplate/details': 'Leads/EmailTemplateController.getEmailTemplateById',
  /***************************************************************************
   *                                                                          *
   * Custom routes here...                                                    *
   *                                                                          *
   *  If a request to a URL doesn't match any of the custom routes above, it  *
   * is matched against Sails route blueprints. See `config/blueprints.js`    *
   * for configuration options and examples.                                  *
   *                                                                          *
   ***************************************************************************/
};
