/*jshint -W069 */
/**
 *  ThingsBoard open-source IoT platform REST API documentation.
 * @class TbDashboardController
 * @param {(string|object)} [domainOrOptions] - The project domain or options object. If object, see the object's optional properties.
 * @param {string} [domainOrOptions.domain] - The project domain
 * @param {object} [domainOrOptions.token] - auth token - object with value property and optional headerOrQueryName and isQuery properties
 */
var TbDashboardController = (function(){
    'use strict';

    var request = require('request');
    var Q = require('q');
    var fileType = require('file-type');

    function TbDashboardController(options){
        var domain = (typeof options === 'object') ? options.domain : options;
        this.domain = domain ? domain : 'https://demo.thingsboard.io:443';
        if(this.domain.length === 0) {
            throw new Error('Domain parameter must be specified as a string.');
        }
    }

    function mergeQueryParams(parameters, queryParameters) {
        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                  .forEach(function(parameterName) {
                      var parameter = parameters.$queryParameters[parameterName];
                      queryParameters[parameterName] = parameter;
            });
        }
        return queryParameters;
    }

    /**
     * HTTP Request
     * @method
     * @name TbDashboardController#request
     * @param {string} method - http method
     * @param {string} url - url to do request
     * @param {object} parameters
     * @param {object} body - body parameters / object
     * @param {object} headers - header parameters
     * @param {object} queryParameters - querystring parameters
     * @param {object} form - form data object
     * @param {object} deferred - promise object
     */
    TbDashboardController.prototype.request = function(method, url, parameters, body, headers, queryParameters, form, deferred){
        var req = {
            method: method,
            uri: url,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if(Object.keys(form).length > 0) {
            if (req.headers['Content-Type'] && req.headers['Content-Type'][0] === 'multipart/form-data') {
                delete req.body;
                var keyName = Object.keys(form)[0]
                req.formData = {
                    [keyName]: {
                        value: form[keyName],
                        options: {
                            filename: (fileType(form[keyName]) != null ? `file.${ fileType(form[keyName]).ext }` : `file` )
                        }
                    }
                };
            } else {
                req.form = form;
            }
        }
        if(typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body){
            if(error) {
                deferred.reject(error);
            } else {
                if(/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch(e) {}
                }
                if(response.statusCode === 204) {
                    deferred.resolve({ response: response });
                } else if(response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({ response: response, body: body });
                } else {
                    deferred.reject({ response: response, body: body });
                }
            }
        });
    };


/**
 * Returns a page of dashboard info objects owned by the specified customer. The Dashboard Info object contains lightweight information about the dashboard (e.g. title, image, assigned customers) but does not contain the heavyweight configuration JSON. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. 

Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
 * @method
 * @name TbDashboardController#getCustomerDashboardsUsingGET
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.customerId - A string value representing the customer id. For example, '784f394c-42b6-435a-983c-b7beff2784f9'
     * @param {integer} parameters.pageSize - Maximum amount of entities in a one page
     * @param {integer} parameters.page - Sequence number of page starting from 0
     * @param {boolean} parameters.mobile - Exclude dashboards that are hidden for mobile
     * @param {string} parameters.textSearch - The case insensitive 'substring' filter based on the dashboard title.
     * @param {string} parameters.sortProperty - Property of entity to sort by
     * @param {string} parameters.sortOrder - Sort order. ASC (ASCENDING) or DESC (DESCENDING)
 */
 TbDashboardController.prototype.getCustomerDashboardsUsingGET = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/api/customer/{customerId}/dashboards{?mobile,page,pageSize,sortOrder,sortProperty,textSearch}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/json'];

        
            path = path.replace('{customerId}', parameters['customerId']);
        
        


        if(parameters['customerId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: customerId'));
            return deferred.promise;
        }
 

                if(parameters['pageSize'] !== undefined){
                    queryParameters['pageSize'] = parameters['pageSize'];
                }
        
        
        


        if(parameters['pageSize'] === undefined){
            deferred.reject(new Error('Missing required  parameter: pageSize'));
            return deferred.promise;
        }
 

                if(parameters['page'] !== undefined){
                    queryParameters['page'] = parameters['page'];
                }
        
        
        


        if(parameters['page'] === undefined){
            deferred.reject(new Error('Missing required  parameter: page'));
            return deferred.promise;
        }
 

                if(parameters['mobile'] !== undefined){
                    queryParameters['mobile'] = parameters['mobile'];
                }
        
        
        


 

                if(parameters['textSearch'] !== undefined){
                    queryParameters['textSearch'] = parameters['textSearch'];
                }
        
        
        


 

                if(parameters['sortProperty'] !== undefined){
                    queryParameters['sortProperty'] = parameters['sortProperty'];
                }
        
        
        


 

                if(parameters['sortOrder'] !== undefined){
                    queryParameters['sortOrder'] = parameters['sortOrder'];
                }
        
        
        


 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Create or update the Dashboard. When creating dashboard, platform generates Dashboard Id as [time-based UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_1_(date-time_and_MAC_address)). The newly created Dashboard id will be present in the response. Specify existing Dashboard id to update the dashboard. Referencing non-existing dashboard Id will cause 'Not Found' error. 

Available for users with 'TENANT_ADMIN' authority.
 * @method
 * @name TbDashboardController#saveDashboardUsingPOST
 * @param {object} parameters - method options and parameters
     * @param {} parameters.body -  ThingsBoard open-source IoT platform REST API documentation.
 */
 TbDashboardController.prototype.saveDashboardUsingPOST = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/api/dashboard';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
        
        
            if(parameters['body'] !== undefined){
                body = parameters['body'];
            }


 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns the home dashboard object that is configured as 'homeDashboardId' parameter in the 'additionalInfo' of the User. If 'homeDashboardId' parameter is not set on the User level and the User has authority 'CUSTOMER_USER', check the same parameter for the corresponding Customer. If 'homeDashboardId' parameter is not set on the User and Customer levels then checks the same parameter for the Tenant that owns the user. The Dashboard object is a heavyweight object that contains information about the dashboard (e.g. title, image, assigned customers) and also configuration JSON (e.g. layouts, widgets, entity aliases).

Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
 * @method
 * @name TbDashboardController#getHomeDashboardUsingGET
 * @param {object} parameters - method options and parameters
 */
 TbDashboardController.prototype.getHomeDashboardUsingGET = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/api/dashboard/home';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/json'];

    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns the home dashboard info object that is configured as 'homeDashboardId' parameter in the 'additionalInfo' of the User. If 'homeDashboardId' parameter is not set on the User level and the User has authority 'CUSTOMER_USER', check the same parameter for the corresponding Customer. If 'homeDashboardId' parameter is not set on the User and Customer levels then checks the same parameter for the Tenant that owns the user. 

Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
 * @method
 * @name TbDashboardController#getHomeDashboardInfoUsingGET
 * @param {object} parameters - method options and parameters
 */
 TbDashboardController.prototype.getHomeDashboardInfoUsingGET = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/api/dashboard/home/info';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/json'];

    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Get the information about the dashboard based on 'dashboardId' parameter. The Dashboard Info object contains lightweight information about the dashboard (e.g. title, image, assigned customers) but does not contain the heavyweight configuration JSON.
 * @method
 * @name TbDashboardController#getDashboardInfoByIdUsingGET
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.dashboardId - A string value representing the device id. For example, '784f394c-42b6-435a-983c-b7beff2784f9'
 */
 TbDashboardController.prototype.getDashboardInfoByIdUsingGET = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/api/dashboard/info/{dashboardId}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/json'];

        
            path = path.replace('{dashboardId}', parameters['dashboardId']);
        
        


        if(parameters['dashboardId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: dashboardId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Get the maximum number of data points that dashboard may request from the server per in a single subscription command. This value impacts the time window behavior. It impacts 'Max values' parameter in case user selects 'None' as 'Data aggregation function'. It also impacts the 'Grouping interval' in case of any other 'Data aggregation function' is selected. The actual value of the limit is configurable in the system configuration file.
 * @method
 * @name TbDashboardController#getMaxDatapointsLimitUsingGET
 * @param {object} parameters - method options and parameters
 */
 TbDashboardController.prototype.getMaxDatapointsLimitUsingGET = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/api/dashboard/maxDatapointsLimit';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/json'];

    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Get the server time (milliseconds since January 1, 1970 UTC). Used to adjust view of the dashboards according to the difference between browser and server time.
 * @method
 * @name TbDashboardController#getServerTimeUsingGET
 * @param {object} parameters - method options and parameters
 */
 TbDashboardController.prototype.getServerTimeUsingGET = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/api/dashboard/serverTime';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/json'];

    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Get the dashboard based on 'dashboardId' parameter. The Dashboard object is a heavyweight object that contains information about the dashboard (e.g. title, image, assigned customers) and also configuration JSON (e.g. layouts, widgets, entity aliases).

Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
 * @method
 * @name TbDashboardController#getDashboardByIdUsingGET
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.dashboardId - A string value representing the device id. For example, '784f394c-42b6-435a-983c-b7beff2784f9'
 */
 TbDashboardController.prototype.getDashboardByIdUsingGET = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/api/dashboard/{dashboardId}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/json'];

        
            path = path.replace('{dashboardId}', parameters['dashboardId']);
        
        


        if(parameters['dashboardId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: dashboardId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Delete the Dashboard.

Available for users with 'TENANT_ADMIN' authority.
 * @method
 * @name TbDashboardController#deleteDashboardUsingDELETE
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.dashboardId - A string value representing the device id. For example, '784f394c-42b6-435a-983c-b7beff2784f9'
 */
 TbDashboardController.prototype.deleteDashboardUsingDELETE = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/api/dashboard/{dashboardId}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/json'];

        
            path = path.replace('{dashboardId}', parameters['dashboardId']);
        
        


        if(parameters['dashboardId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: dashboardId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Updates the list of Customers that this Dashboard is assigned to. Removes previous assignments to customers that are not in the provided list. Returns the Dashboard object. 

Available for users with 'TENANT_ADMIN' authority.
 * @method
 * @name TbDashboardController#updateDashboardCustomersUsingPOST
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.dashboardId - A string value representing the device id. For example, '784f394c-42b6-435a-983c-b7beff2784f9'
     * @param {} parameters.body -  ThingsBoard open-source IoT platform REST API documentation.
 */
 TbDashboardController.prototype.updateDashboardCustomersUsingPOST = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/api/dashboard/{dashboardId}/customers';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
            path = path.replace('{dashboardId}', parameters['dashboardId']);
        
        


        if(parameters['dashboardId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: dashboardId'));
            return deferred.promise;
        }
 
        
        
        
            if(parameters['body'] !== undefined){
                body = parameters['body'];
            }


 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Adds the list of Customers to the existing list of assignments for the Dashboard. Keeps previous assignments to customers that are not in the provided list. Returns the Dashboard object.

Available for users with 'TENANT_ADMIN' authority.
 * @method
 * @name TbDashboardController#addDashboardCustomersUsingPOST
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.dashboardId - A string value representing the device id. For example, '784f394c-42b6-435a-983c-b7beff2784f9'
     * @param {} parameters.body -  ThingsBoard open-source IoT platform REST API documentation.
 */
 TbDashboardController.prototype.addDashboardCustomersUsingPOST = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/api/dashboard/{dashboardId}/customers/add';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
            path = path.replace('{dashboardId}', parameters['dashboardId']);
        
        


        if(parameters['dashboardId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: dashboardId'));
            return deferred.promise;
        }
 
        
        
        
            if(parameters['body'] !== undefined){
                body = parameters['body'];
            }


 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Removes the list of Customers from the existing list of assignments for the Dashboard. Keeps other assignments to customers that are not in the provided list. Returns the Dashboard object.

Available for users with 'TENANT_ADMIN' authority.
 * @method
 * @name TbDashboardController#removeDashboardCustomersUsingPOST
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.dashboardId - A string value representing the device id. For example, '784f394c-42b6-435a-983c-b7beff2784f9'
     * @param {} parameters.body -  ThingsBoard open-source IoT platform REST API documentation.
 */
 TbDashboardController.prototype.removeDashboardCustomersUsingPOST = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/api/dashboard/{dashboardId}/customers/remove';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
            path = path.replace('{dashboardId}', parameters['dashboardId']);
        
        


        if(parameters['dashboardId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: dashboardId'));
            return deferred.promise;
        }
 
        
        
        
            if(parameters['body'] !== undefined){
                body = parameters['body'];
            }


 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Creates assignment of an existing dashboard to an instance of The Edge. Assignment works in async way - first, notification event pushed to edge service queue on platform. Second, remote edge service will receive a copy of assignment dashboard (Edge will receive this instantly, if it's currently connected, or once it's going to be connected to platform). Third, once dashboard will be delivered to edge service, it's going to be available for usage on remote edge instance.

Available for users with 'TENANT_ADMIN' authority.
 * @method
 * @name TbDashboardController#assignDashboardToEdgeUsingPOST
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.edgeId - edgeId
     * @param {string} parameters.dashboardId - dashboardId
 */
 TbDashboardController.prototype.assignDashboardToEdgeUsingPOST = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/api/edge/{edgeId}/dashboard/{dashboardId}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/json'];

        
            path = path.replace('{edgeId}', parameters['edgeId']);
        
        


        if(parameters['edgeId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: edgeId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{dashboardId}', parameters['dashboardId']);
        
        


        if(parameters['dashboardId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: dashboardId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Clears assignment of the dashboard to the edge. Unassignment works in async way - first, 'unassign' notification event pushed to edge queue on platform. Second, remote edge service will receive an 'unassign' command to remove dashboard (Edge will receive this instantly, if it's currently connected, or once it's going to be connected to platform). Third, once 'unassign' command will be delivered to edge service, it's going to remove dashboard locally.

Available for users with 'TENANT_ADMIN' authority.
 * @method
 * @name TbDashboardController#unassignDashboardFromEdgeUsingDELETE
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.edgeId - edgeId
     * @param {string} parameters.dashboardId - dashboardId
 */
 TbDashboardController.prototype.unassignDashboardFromEdgeUsingDELETE = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/api/edge/{edgeId}/dashboard/{dashboardId}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/json'];

        
            path = path.replace('{edgeId}', parameters['edgeId']);
        
        


        if(parameters['edgeId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: edgeId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{dashboardId}', parameters['dashboardId']);
        
        


        if(parameters['dashboardId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: dashboardId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns a page of dashboard info objects assigned to the specified edge. The Dashboard Info object contains lightweight information about the dashboard (e.g. title, image, assigned customers) but does not contain the heavyweight configuration JSON. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. 

Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.
 * @method
 * @name TbDashboardController#getEdgeDashboardsUsingGET
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.edgeId - A string value representing the edge id. For example, '784f394c-42b6-435a-983c-b7beff2784f9'
     * @param {integer} parameters.pageSize - Maximum amount of entities in a one page
     * @param {integer} parameters.page - Sequence number of page starting from 0
     * @param {string} parameters.textSearch - The case insensitive 'substring' filter based on the dashboard title.
     * @param {string} parameters.sortProperty - Property of entity to sort by
     * @param {string} parameters.sortOrder - Sort order. ASC (ASCENDING) or DESC (DESCENDING)
 */
 TbDashboardController.prototype.getEdgeDashboardsUsingGET = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/api/edge/{edgeId}/dashboards{?page,pageSize,sortOrder,sortProperty,textSearch}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/json'];

        
            path = path.replace('{edgeId}', parameters['edgeId']);
        
        


        if(parameters['edgeId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: edgeId'));
            return deferred.promise;
        }
 

                if(parameters['pageSize'] !== undefined){
                    queryParameters['pageSize'] = parameters['pageSize'];
                }
        
        
        


        if(parameters['pageSize'] === undefined){
            deferred.reject(new Error('Missing required  parameter: pageSize'));
            return deferred.promise;
        }
 

                if(parameters['page'] !== undefined){
                    queryParameters['page'] = parameters['page'];
                }
        
        
        


        if(parameters['page'] === undefined){
            deferred.reject(new Error('Missing required  parameter: page'));
            return deferred.promise;
        }
 

                if(parameters['textSearch'] !== undefined){
                    queryParameters['textSearch'] = parameters['textSearch'];
                }
        
        
        


 

                if(parameters['sortProperty'] !== undefined){
                    queryParameters['sortProperty'] = parameters['sortProperty'];
                }
        
        
        


 

                if(parameters['sortOrder'] !== undefined){
                    queryParameters['sortOrder'] = parameters['sortOrder'];
                }
        
        
        


 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns the home dashboard info object that is configured as 'homeDashboardId' parameter in the 'additionalInfo' of the corresponding tenant. 

Available for users with 'TENANT_ADMIN' authority.
 * @method
 * @name TbDashboardController#getTenantHomeDashboardInfoUsingGET
 * @param {object} parameters - method options and parameters
 */
 TbDashboardController.prototype.getTenantHomeDashboardInfoUsingGET = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/api/tenant/dashboard/home/info';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/json'];

    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Update the home dashboard assignment for the current tenant. 

Available for users with 'TENANT_ADMIN' authority.
 * @method
 * @name TbDashboardController#setTenantHomeDashboardInfoUsingPOST
 * @param {object} parameters - method options and parameters
     * @param {} parameters.body -  ThingsBoard open-source IoT platform REST API documentation.
 */
 TbDashboardController.prototype.setTenantHomeDashboardInfoUsingPOST = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/api/tenant/dashboard/home/info';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
        
        
            if(parameters['body'] !== undefined){
                body = parameters['body'];
            }


 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns a page of dashboard info objects owned by the tenant of a current user. The Dashboard Info object contains lightweight information about the dashboard (e.g. title, image, assigned customers) but does not contain the heavyweight configuration JSON. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. 

Available for users with 'TENANT_ADMIN' authority.
 * @method
 * @name TbDashboardController#getTenantDashboardsUsingGET
 * @param {object} parameters - method options and parameters
     * @param {integer} parameters.pageSize - Maximum amount of entities in a one page
     * @param {integer} parameters.page - Sequence number of page starting from 0
     * @param {boolean} parameters.mobile - Exclude dashboards that are hidden for mobile
     * @param {string} parameters.textSearch - The case insensitive 'substring' filter based on the dashboard title.
     * @param {string} parameters.sortProperty - Property of entity to sort by
     * @param {string} parameters.sortOrder - Sort order. ASC (ASCENDING) or DESC (DESCENDING)
 */
 TbDashboardController.prototype.getTenantDashboardsUsingGET = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/api/tenant/dashboards{?mobile,page,pageSize,sortOrder,sortProperty,textSearch}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/json'];


                if(parameters['pageSize'] !== undefined){
                    queryParameters['pageSize'] = parameters['pageSize'];
                }
        
        
        


        if(parameters['pageSize'] === undefined){
            deferred.reject(new Error('Missing required  parameter: pageSize'));
            return deferred.promise;
        }
 

                if(parameters['page'] !== undefined){
                    queryParameters['page'] = parameters['page'];
                }
        
        
        


        if(parameters['page'] === undefined){
            deferred.reject(new Error('Missing required  parameter: page'));
            return deferred.promise;
        }
 

                if(parameters['mobile'] !== undefined){
                    queryParameters['mobile'] = parameters['mobile'];
                }
        
        
        


 

                if(parameters['textSearch'] !== undefined){
                    queryParameters['textSearch'] = parameters['textSearch'];
                }
        
        
        


 

                if(parameters['sortProperty'] !== undefined){
                    queryParameters['sortProperty'] = parameters['sortProperty'];
                }
        
        
        


 

                if(parameters['sortOrder'] !== undefined){
                    queryParameters['sortOrder'] = parameters['sortOrder'];
                }
        
        
        


 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns a page of dashboard info objects owned by tenant. The Dashboard Info object contains lightweight information about the dashboard (e.g. title, image, assigned customers) but does not contain the heavyweight configuration JSON. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. 

Available for users with 'SYS_ADMIN' authority.
 * @method
 * @name TbDashboardController#getTenantDashboardsUsingGET_1
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.tenantId - A string value representing the tenant id. For example, '784f394c-42b6-435a-983c-b7beff2784f9'
     * @param {integer} parameters.pageSize - Maximum amount of entities in a one page
     * @param {integer} parameters.page - Sequence number of page starting from 0
     * @param {string} parameters.textSearch - The case insensitive 'substring' filter based on the dashboard title.
     * @param {string} parameters.sortProperty - Property of entity to sort by
     * @param {string} parameters.sortOrder - Sort order. ASC (ASCENDING) or DESC (DESCENDING)
 */
 TbDashboardController.prototype.getTenantDashboardsUsingGET_1 = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/api/tenant/{tenantId}/dashboards{?page,pageSize,sortOrder,sortProperty,textSearch}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers = this.setAuthHeaders(headers);
        headers['Accept'] = ['application/json'];

        
            path = path.replace('{tenantId}', parameters['tenantId']);
        
        


        if(parameters['tenantId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: tenantId'));
            return deferred.promise;
        }
 

                if(parameters['pageSize'] !== undefined){
                    queryParameters['pageSize'] = parameters['pageSize'];
                }
        
        
        


        if(parameters['pageSize'] === undefined){
            deferred.reject(new Error('Missing required  parameter: pageSize'));
            return deferred.promise;
        }
 

                if(parameters['page'] !== undefined){
                    queryParameters['page'] = parameters['page'];
                }
        
        
        


        if(parameters['page'] === undefined){
            deferred.reject(new Error('Missing required  parameter: page'));
            return deferred.promise;
        }
 

                if(parameters['textSearch'] !== undefined){
                    queryParameters['textSearch'] = parameters['textSearch'];
                }
        
        
        


 

                if(parameters['sortProperty'] !== undefined){
                    queryParameters['sortProperty'] = parameters['sortProperty'];
                }
        
        
        


 

                if(parameters['sortOrder'] !== undefined){
                    queryParameters['sortOrder'] = parameters['sortOrder'];
                }
        
        
        


 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };

    return TbDashboardController;
})();

exports.TbDashboardController = TbDashboardController;
