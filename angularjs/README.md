# Angularjs keycloak library setup

## Install the js library at the root of project.

`bower install --save ajency-keycloak-js`


**Setup steps**
* Create a folder `keycloak` at the app entry point of your angularjs application
* Within the newly created folder add 2 new files `bootstrap.js` and `route_guard.js`
* Create another folder named `config` within `keycloak`
* This folder contains 2 additional files `route-permissions.js` and `ui-permissions.js` 

**Explanation**
* The main entry point for your application will be within `keycloak/bootstrap.js` where you would need to define all your boilerplate initialisation code.
* Ideally angularjs applications have a seperate routes file aptly named as routes.js or similar which either use `ngRouter` or `uiRouter` both of which have support from resolving routes based on returned promises which we will use.
* Will will create a custom route-guard.js file contain the `KCrouteGuard` which implements the resolve functionality of `ngRouter` or `uiRouter`.
* We also need the 2 additional files *route-permissions.js* containing the `KCroutePermissions` constant & *ui-permissions.js* containing the `KCuiPermissions` constant.
* `KCroutePermissions` would be used to specify route entitlement permissions to be used in the routes.js file for use in the client side routing implementation
* `KCuiPermissions` can be used your view templates for show / hide of UI elements by calling the `hasAccess` method of the library *(Note: The `protect` method must be implicitly called on the associated client route before using the `hasAccess` method in the view template for the associated route.)*

**Variables available for use in angular after bootstrap**
* `$ajkeycloak` : ajkeycloak singleton instance as an angular constant
* `KEYCLOAKINFO` : Keycloak user info as an angular constant
* `ajkeycloakservice` : angular service having instances of the above 2

**Variables available for use in view templates (NOTE: These UI variables are globally available for use within view templates only after injection of ajkeycloakservice into another angularjs component)**
* `ajkeycloak` : ajkeycloak singleton instance attached to `$rootscope`
* `KCuiPermissions` : UI permissions constant attached to `$rootscope`
