node-red-contrib-tb-dashboard-controller
================

Node-RED node for tb-dashboard-controller

 ThingsBoard open-source IoT platform REST API documentation.

## Install

To install the stable version use the `Menu - Manage palette - Install` 
option and search for node-red-contrib-tb-dashboard-controller, or run the following 
command in your Node-RED user directory, typically `~/.node-red`

    npm install node-red-contrib-tb-dashboard-controller

## Usage

### Methods

#### GET /api/customer/{customerId}/dashboards{?mobile,page,pageSize,sortOrder,sortProperty,textSearch}

Returns a page of dashboard info objects owned by the specified customer. The Dashboard Info object contains lightweight information about the dashboard (e.g. title, image, assigned customers) but does not contain the heavyweight configuration JSON. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. 

Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.

    customerId : string
    pageSize : integer
    page : integer
    mobile : boolean
    textSearch : string
    sortProperty : string
    sortOrder : string
     
    Accept : 'application/json'

#### POST /api/dashboard

Create or update the Dashboard. When creating dashboard, platform generates Dashboard Id as [time-based UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_1_(date-time_and_MAC_address)). The newly created Dashboard id will be present in the response. Specify existing Dashboard id to update the dashboard. Referencing non-existing dashboard Id will cause 'Not Found' error. 

Available for users with 'TENANT_ADMIN' authority.

    body : 
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /api/dashboard/home

Returns the home dashboard object that is configured as 'homeDashboardId' parameter in the 'additionalInfo' of the User. If 'homeDashboardId' parameter is not set on the User level and the User has authority 'CUSTOMER_USER', check the same parameter for the corresponding Customer. If 'homeDashboardId' parameter is not set on the User and Customer levels then checks the same parameter for the Tenant that owns the user. The Dashboard object is a heavyweight object that contains information about the dashboard (e.g. title, image, assigned customers) and also configuration JSON (e.g. layouts, widgets, entity aliases).

Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.

     
    Accept : 'application/json'

#### GET /api/dashboard/home/info

Returns the home dashboard info object that is configured as 'homeDashboardId' parameter in the 'additionalInfo' of the User. If 'homeDashboardId' parameter is not set on the User level and the User has authority 'CUSTOMER_USER', check the same parameter for the corresponding Customer. If 'homeDashboardId' parameter is not set on the User and Customer levels then checks the same parameter for the Tenant that owns the user. 

Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.

     
    Accept : 'application/json'

#### GET /api/dashboard/info/{dashboardId}

Get the information about the dashboard based on 'dashboardId' parameter. The Dashboard Info object contains lightweight information about the dashboard (e.g. title, image, assigned customers) but does not contain the heavyweight configuration JSON.

    dashboardId : string
     
    Accept : 'application/json'

#### GET /api/dashboard/maxDatapointsLimit

Get the maximum number of data points that dashboard may request from the server per in a single subscription command. This value impacts the time window behavior. It impacts 'Max values' parameter in case user selects 'None' as 'Data aggregation function'. It also impacts the 'Grouping interval' in case of any other 'Data aggregation function' is selected. The actual value of the limit is configurable in the system configuration file.

     
    Accept : 'application/json'

#### GET /api/dashboard/serverTime

Get the server time (milliseconds since January 1, 1970 UTC). Used to adjust view of the dashboards according to the difference between browser and server time.

     
    Accept : 'application/json'

#### GET /api/dashboard/{dashboardId}

Get the dashboard based on 'dashboardId' parameter. The Dashboard object is a heavyweight object that contains information about the dashboard (e.g. title, image, assigned customers) and also configuration JSON (e.g. layouts, widgets, entity aliases).

Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.

    dashboardId : string
     
    Accept : 'application/json'

#### DELETE /api/dashboard/{dashboardId}

Delete the Dashboard.

Available for users with 'TENANT_ADMIN' authority.

    dashboardId : string
     
    Accept : 'application/json'

#### POST /api/dashboard/{dashboardId}/customers

Updates the list of Customers that this Dashboard is assigned to. Removes previous assignments to customers that are not in the provided list. Returns the Dashboard object. 

Available for users with 'TENANT_ADMIN' authority.

    dashboardId : string
    body : 
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### POST /api/dashboard/{dashboardId}/customers/add

Adds the list of Customers to the existing list of assignments for the Dashboard. Keeps previous assignments to customers that are not in the provided list. Returns the Dashboard object.

Available for users with 'TENANT_ADMIN' authority.

    dashboardId : string
    body : 
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### POST /api/dashboard/{dashboardId}/customers/remove

Removes the list of Customers from the existing list of assignments for the Dashboard. Keeps other assignments to customers that are not in the provided list. Returns the Dashboard object.

Available for users with 'TENANT_ADMIN' authority.

    dashboardId : string
    body : 
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### POST /api/edge/{edgeId}/dashboard/{dashboardId}

Creates assignment of an existing dashboard to an instance of The Edge. Assignment works in async way - first, notification event pushed to edge service queue on platform. Second, remote edge service will receive a copy of assignment dashboard (Edge will receive this instantly, if it's currently connected, or once it's going to be connected to platform). Third, once dashboard will be delivered to edge service, it's going to be available for usage on remote edge instance.

Available for users with 'TENANT_ADMIN' authority.

    edgeId : string
    dashboardId : string
     
    Accept : 'application/json'

#### DELETE /api/edge/{edgeId}/dashboard/{dashboardId}

Clears assignment of the dashboard to the edge. Unassignment works in async way - first, 'unassign' notification event pushed to edge queue on platform. Second, remote edge service will receive an 'unassign' command to remove dashboard (Edge will receive this instantly, if it's currently connected, or once it's going to be connected to platform). Third, once 'unassign' command will be delivered to edge service, it's going to remove dashboard locally.

Available for users with 'TENANT_ADMIN' authority.

    edgeId : string
    dashboardId : string
     
    Accept : 'application/json'

#### GET /api/edge/{edgeId}/dashboards{?page,pageSize,sortOrder,sortProperty,textSearch}

Returns a page of dashboard info objects assigned to the specified edge. The Dashboard Info object contains lightweight information about the dashboard (e.g. title, image, assigned customers) but does not contain the heavyweight configuration JSON. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. 

Available for users with 'TENANT_ADMIN' or 'CUSTOMER_USER' authority.

    edgeId : string
    pageSize : integer
    page : integer
    textSearch : string
    sortProperty : string
    sortOrder : string
     
    Accept : 'application/json'

#### GET /api/tenant/dashboard/home/info

Returns the home dashboard info object that is configured as 'homeDashboardId' parameter in the 'additionalInfo' of the corresponding tenant. 

Available for users with 'TENANT_ADMIN' authority.

     
    Accept : 'application/json'

#### POST /api/tenant/dashboard/home/info

Update the home dashboard assignment for the current tenant. 

Available for users with 'TENANT_ADMIN' authority.

    body : 
     
    Accept : 'application/json'
    Content-Type : 'application/json'

#### GET /api/tenant/dashboards{?mobile,page,pageSize,sortOrder,sortProperty,textSearch}

Returns a page of dashboard info objects owned by the tenant of a current user. The Dashboard Info object contains lightweight information about the dashboard (e.g. title, image, assigned customers) but does not contain the heavyweight configuration JSON. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. 

Available for users with 'TENANT_ADMIN' authority.

    pageSize : integer
    page : integer
    mobile : boolean
    textSearch : string
    sortProperty : string
    sortOrder : string
     
    Accept : 'application/json'

#### GET /api/tenant/{tenantId}/dashboards{?page,pageSize,sortOrder,sortProperty,textSearch}

Returns a page of dashboard info objects owned by tenant. The Dashboard Info object contains lightweight information about the dashboard (e.g. title, image, assigned customers) but does not contain the heavyweight configuration JSON. You can specify parameters to filter the results. The result is wrapped with PageData object that allows you to iterate over result set using pagination. See the 'Model' tab of the Response Class for more details. 

Available for users with 'SYS_ADMIN' authority.

    tenantId : string
    pageSize : integer
    page : integer
    textSearch : string
    sortProperty : string
    sortOrder : string
     
    Accept : 'application/json'


## License

#### Apache License Version 2.0

https://github.com/thingsboard/thingsboard/blob/master/LICENSE