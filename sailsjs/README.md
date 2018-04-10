# Sails node middleware setup

## Install the node middlware at the root of project.

`npm install --save ajency-keycloak-node`

## Create a folder `config/keycloak`

### Within the newly created folder add 2 new files `keycloakconfig.js` and `route_permissions.js`

* `keycloakconfig` : This file contains the keycloak installation configuration json
* `route_permissions` : This file contains permissions required for endpoints


### Example usage in `config/policies` file

```
    global.AJKEYCLOAKFACTORY = require('ajency-keycloak-node')("config/keycloak/keycloakconfig");
    const route_entitlements = require('./keycloak/route_permissions');

    module.exports.policies = {
    
    .....

    '<path-to-controller>: {
            methodWithinController: AJKEYCLOAKFACTORY.protect(route_entitlements['<associated-entilement>'].methodWithinController)
    },



    .....
    
    }



```

*AJKEYCLOAKFACTORY is now available throughout your app. Refer to sample pseudo code for more details* 

