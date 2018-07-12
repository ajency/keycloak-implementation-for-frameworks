# Angularjs keycloak library setup

## Install the js library at the root of project.

`bower install --save ajency-keycloak-js`


**Setup steps** *(refer to sample code)*
* Add you clients `keycloak.json` file to the apps root
* Create a folder `keycloak` in the folder containing your angularjs application code
* Within the newly created folder add 2 new files `bootstrap.js` and `route_guard.js`
* Create another folder named `config` within `keycloak`
* This folder contains 2 additional files `route-permissions.js` and `ui-permissions.js`
* Create a separate *unauthorised* view/route for your app in your `routes.js` or similarly named file containing your router configuration if it doesn't already exist 
* Add references to all of the above files in your apps `index.html` file
* If you plan to initialise your app after keycloak has bootstrapped disable auto bootstrap by removing the `ng-app` attribute from your `index.html` file as we will be performing a manual bootstrap of the application. 

**Explanation**
* The main entry point for your application will be within `keycloak/bootstrap.js` where you would need to define all your boilerplate initialisation code. You would need to move some of your initailisation code from your `app.js` or similarly named file here.
* If your app already has a login page changes would be needed to be made to the code to perform an auto login & also maybe bypassing a password check.
* Ideally angularjs applications have a seperate routes file aptly named as *routes.js* or similar which either use `ngRouter` or `uiRouter` both of which have support for resolving routes based on returned promises which we will use.
* Will will create a custom route-guard.js file contain the `KCrouteGuard` which implements the resolve functionality of `ngRouter` or `uiRouter`.
* We also need the 2 additional files *route-permissions.js* containing the `KCroutePermissions` constant & *ui-permissions.js* containing the `KCuiPermissions` constant.
* `KCroutePermissions` would be used to specify route entitlement permissions to be used in the routes.js file for use in the client side routing implementation.
* `KCuiPermissions` can be used your view templates for show / hide of UI elements by calling the `hasAccess` method of the library (*Note: The `protect` method must be implicitly called on the associated client route before using the `hasAccess` method in the view template for the associated route.*)

**Variables available for use in angular after bootstrap**
* `$ajkeycloak` : ajkeycloak singleton instance as an angular constant

**Variables available for use in view templates**
* `ajkeycloak` : ajkeycloak singleton instance attached to `$rootscope`
* `KCuiPermissions` : UI permissions constant attached to `$rootscope`
