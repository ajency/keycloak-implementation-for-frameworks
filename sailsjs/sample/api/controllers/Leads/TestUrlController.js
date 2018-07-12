/**

 * Created By : Sachin Gandhi
 * Created Date: 04-01-2018
 */

const utilsObj = require('../../customModules/Utils.js');
var moment = require('moment');
var _ = require('underscore');
var constants = require('../../customModules/Constants.js');


module.exports = {
    // ....


    search: function (req, res) {
        // search controller code
        // ...
        // AJKEYCLOAKFACTORY is a global
        var user_roles = AJKEYCLOAKFACTORY.getUserGroupMembership(req); 
        var user_info= AJKEYCLOAKFACTORY.getUserInfo(req);
        // ...
    },

}
