'use strict';
var lib = require('./lib.js');

module.exports = function (RED) {
    function TbDashboardControllerNode(config) {
        RED.nodes.createNode(this, config);
        this.method = config.method;
        this.getCustomerDashboardsUsingGET_customerId = config.getCustomerDashboardsUsingGET_customerId;
        this.getCustomerDashboardsUsingGET_customerIdType = config.getCustomerDashboardsUsingGET_customerIdType || 'str';
        this.getCustomerDashboardsUsingGET_pageSize = config.getCustomerDashboardsUsingGET_pageSize;
        this.getCustomerDashboardsUsingGET_pageSizeType = config.getCustomerDashboardsUsingGET_pageSizeType || 'str';
        this.getCustomerDashboardsUsingGET_page = config.getCustomerDashboardsUsingGET_page;
        this.getCustomerDashboardsUsingGET_pageType = config.getCustomerDashboardsUsingGET_pageType || 'str';
        this.getCustomerDashboardsUsingGET_mobile = config.getCustomerDashboardsUsingGET_mobile;
        this.getCustomerDashboardsUsingGET_mobileType = config.getCustomerDashboardsUsingGET_mobileType || 'str';
        this.getCustomerDashboardsUsingGET_textSearch = config.getCustomerDashboardsUsingGET_textSearch;
        this.getCustomerDashboardsUsingGET_textSearchType = config.getCustomerDashboardsUsingGET_textSearchType || 'str';
        this.getCustomerDashboardsUsingGET_sortProperty = config.getCustomerDashboardsUsingGET_sortProperty;
        this.getCustomerDashboardsUsingGET_sortPropertyType = config.getCustomerDashboardsUsingGET_sortPropertyType || 'str';
        this.getCustomerDashboardsUsingGET_sortOrder = config.getCustomerDashboardsUsingGET_sortOrder;
        this.getCustomerDashboardsUsingGET_sortOrderType = config.getCustomerDashboardsUsingGET_sortOrderType || 'str';
        this.saveDashboardUsingPOST_body = config.saveDashboardUsingPOST_body;
        this.saveDashboardUsingPOST_bodyType = config.saveDashboardUsingPOST_bodyType || 'str';
        this.getDashboardInfoByIdUsingGET_dashboardId = config.getDashboardInfoByIdUsingGET_dashboardId;
        this.getDashboardInfoByIdUsingGET_dashboardIdType = config.getDashboardInfoByIdUsingGET_dashboardIdType || 'str';
        this.getDashboardByIdUsingGET_dashboardId = config.getDashboardByIdUsingGET_dashboardId;
        this.getDashboardByIdUsingGET_dashboardIdType = config.getDashboardByIdUsingGET_dashboardIdType || 'str';
        this.deleteDashboardUsingDELETE_dashboardId = config.deleteDashboardUsingDELETE_dashboardId;
        this.deleteDashboardUsingDELETE_dashboardIdType = config.deleteDashboardUsingDELETE_dashboardIdType || 'str';
        this.updateDashboardCustomersUsingPOST_dashboardId = config.updateDashboardCustomersUsingPOST_dashboardId;
        this.updateDashboardCustomersUsingPOST_dashboardIdType = config.updateDashboardCustomersUsingPOST_dashboardIdType || 'str';
        this.updateDashboardCustomersUsingPOST_body = config.updateDashboardCustomersUsingPOST_body;
        this.updateDashboardCustomersUsingPOST_bodyType = config.updateDashboardCustomersUsingPOST_bodyType || 'str';
        this.addDashboardCustomersUsingPOST_dashboardId = config.addDashboardCustomersUsingPOST_dashboardId;
        this.addDashboardCustomersUsingPOST_dashboardIdType = config.addDashboardCustomersUsingPOST_dashboardIdType || 'str';
        this.addDashboardCustomersUsingPOST_body = config.addDashboardCustomersUsingPOST_body;
        this.addDashboardCustomersUsingPOST_bodyType = config.addDashboardCustomersUsingPOST_bodyType || 'str';
        this.removeDashboardCustomersUsingPOST_dashboardId = config.removeDashboardCustomersUsingPOST_dashboardId;
        this.removeDashboardCustomersUsingPOST_dashboardIdType = config.removeDashboardCustomersUsingPOST_dashboardIdType || 'str';
        this.removeDashboardCustomersUsingPOST_body = config.removeDashboardCustomersUsingPOST_body;
        this.removeDashboardCustomersUsingPOST_bodyType = config.removeDashboardCustomersUsingPOST_bodyType || 'str';
        this.assignDashboardToEdgeUsingPOST_edgeId = config.assignDashboardToEdgeUsingPOST_edgeId;
        this.assignDashboardToEdgeUsingPOST_edgeIdType = config.assignDashboardToEdgeUsingPOST_edgeIdType || 'str';
        this.assignDashboardToEdgeUsingPOST_dashboardId = config.assignDashboardToEdgeUsingPOST_dashboardId;
        this.assignDashboardToEdgeUsingPOST_dashboardIdType = config.assignDashboardToEdgeUsingPOST_dashboardIdType || 'str';
        this.unassignDashboardFromEdgeUsingDELETE_edgeId = config.unassignDashboardFromEdgeUsingDELETE_edgeId;
        this.unassignDashboardFromEdgeUsingDELETE_edgeIdType = config.unassignDashboardFromEdgeUsingDELETE_edgeIdType || 'str';
        this.unassignDashboardFromEdgeUsingDELETE_dashboardId = config.unassignDashboardFromEdgeUsingDELETE_dashboardId;
        this.unassignDashboardFromEdgeUsingDELETE_dashboardIdType = config.unassignDashboardFromEdgeUsingDELETE_dashboardIdType || 'str';
        this.getEdgeDashboardsUsingGET_edgeId = config.getEdgeDashboardsUsingGET_edgeId;
        this.getEdgeDashboardsUsingGET_edgeIdType = config.getEdgeDashboardsUsingGET_edgeIdType || 'str';
        this.getEdgeDashboardsUsingGET_pageSize = config.getEdgeDashboardsUsingGET_pageSize;
        this.getEdgeDashboardsUsingGET_pageSizeType = config.getEdgeDashboardsUsingGET_pageSizeType || 'str';
        this.getEdgeDashboardsUsingGET_page = config.getEdgeDashboardsUsingGET_page;
        this.getEdgeDashboardsUsingGET_pageType = config.getEdgeDashboardsUsingGET_pageType || 'str';
        this.getEdgeDashboardsUsingGET_textSearch = config.getEdgeDashboardsUsingGET_textSearch;
        this.getEdgeDashboardsUsingGET_textSearchType = config.getEdgeDashboardsUsingGET_textSearchType || 'str';
        this.getEdgeDashboardsUsingGET_sortProperty = config.getEdgeDashboardsUsingGET_sortProperty;
        this.getEdgeDashboardsUsingGET_sortPropertyType = config.getEdgeDashboardsUsingGET_sortPropertyType || 'str';
        this.getEdgeDashboardsUsingGET_sortOrder = config.getEdgeDashboardsUsingGET_sortOrder;
        this.getEdgeDashboardsUsingGET_sortOrderType = config.getEdgeDashboardsUsingGET_sortOrderType || 'str';
        this.setTenantHomeDashboardInfoUsingPOST_body = config.setTenantHomeDashboardInfoUsingPOST_body;
        this.setTenantHomeDashboardInfoUsingPOST_bodyType = config.setTenantHomeDashboardInfoUsingPOST_bodyType || 'str';
        this.getTenantDashboardsUsingGET_pageSize = config.getTenantDashboardsUsingGET_pageSize;
        this.getTenantDashboardsUsingGET_pageSizeType = config.getTenantDashboardsUsingGET_pageSizeType || 'str';
        this.getTenantDashboardsUsingGET_page = config.getTenantDashboardsUsingGET_page;
        this.getTenantDashboardsUsingGET_pageType = config.getTenantDashboardsUsingGET_pageType || 'str';
        this.getTenantDashboardsUsingGET_mobile = config.getTenantDashboardsUsingGET_mobile;
        this.getTenantDashboardsUsingGET_mobileType = config.getTenantDashboardsUsingGET_mobileType || 'str';
        this.getTenantDashboardsUsingGET_textSearch = config.getTenantDashboardsUsingGET_textSearch;
        this.getTenantDashboardsUsingGET_textSearchType = config.getTenantDashboardsUsingGET_textSearchType || 'str';
        this.getTenantDashboardsUsingGET_sortProperty = config.getTenantDashboardsUsingGET_sortProperty;
        this.getTenantDashboardsUsingGET_sortPropertyType = config.getTenantDashboardsUsingGET_sortPropertyType || 'str';
        this.getTenantDashboardsUsingGET_sortOrder = config.getTenantDashboardsUsingGET_sortOrder;
        this.getTenantDashboardsUsingGET_sortOrderType = config.getTenantDashboardsUsingGET_sortOrderType || 'str';
        this.getTenantDashboardsUsingGET_1_tenantId = config.getTenantDashboardsUsingGET_1_tenantId;
        this.getTenantDashboardsUsingGET_1_tenantIdType = config.getTenantDashboardsUsingGET_1_tenantIdType || 'str';
        this.getTenantDashboardsUsingGET_1_pageSize = config.getTenantDashboardsUsingGET_1_pageSize;
        this.getTenantDashboardsUsingGET_1_pageSizeType = config.getTenantDashboardsUsingGET_1_pageSizeType || 'str';
        this.getTenantDashboardsUsingGET_1_page = config.getTenantDashboardsUsingGET_1_page;
        this.getTenantDashboardsUsingGET_1_pageType = config.getTenantDashboardsUsingGET_1_pageType || 'str';
        this.getTenantDashboardsUsingGET_1_textSearch = config.getTenantDashboardsUsingGET_1_textSearch;
        this.getTenantDashboardsUsingGET_1_textSearchType = config.getTenantDashboardsUsingGET_1_textSearchType || 'str';
        this.getTenantDashboardsUsingGET_1_sortProperty = config.getTenantDashboardsUsingGET_1_sortProperty;
        this.getTenantDashboardsUsingGET_1_sortPropertyType = config.getTenantDashboardsUsingGET_1_sortPropertyType || 'str';
        this.getTenantDashboardsUsingGET_1_sortOrder = config.getTenantDashboardsUsingGET_1_sortOrder;
        this.getTenantDashboardsUsingGET_1_sortOrderType = config.getTenantDashboardsUsingGET_1_sortOrderType || 'str';
        var node = this;

        node.on('input', function (msg) {
            var errorFlag = false;
            var client = new lib.TbDashboardController();
            if (!errorFlag) {
                client.body = msg.payload;
            }

            var result;
            if (!errorFlag && node.method === 'getCustomerDashboardsUsingGET') {
                var getCustomerDashboardsUsingGET_parameters = [];
                var getCustomerDashboardsUsingGET_nodeParam;
                var getCustomerDashboardsUsingGET_nodeParamType;

                getCustomerDashboardsUsingGET_nodeParam = node.getCustomerDashboardsUsingGET_customerId;
                getCustomerDashboardsUsingGET_nodeParamType = node.getCustomerDashboardsUsingGET_customerIdType;
                if (getCustomerDashboardsUsingGET_nodeParamType === 'str') {
                    getCustomerDashboardsUsingGET_parameters.customerId = getCustomerDashboardsUsingGET_nodeParam || '';
                } else {
                    getCustomerDashboardsUsingGET_parameters.customerId = RED.util.getMessageProperty(msg, getCustomerDashboardsUsingGET_nodeParam);
                }
                getCustomerDashboardsUsingGET_parameters.customerId = !!getCustomerDashboardsUsingGET_parameters.customerId ? getCustomerDashboardsUsingGET_parameters.customerId : msg.payload;
                
                getCustomerDashboardsUsingGET_nodeParam = node.getCustomerDashboardsUsingGET_pageSize;
                getCustomerDashboardsUsingGET_nodeParamType = node.getCustomerDashboardsUsingGET_pageSizeType;
                if (getCustomerDashboardsUsingGET_nodeParamType === 'str') {
                    getCustomerDashboardsUsingGET_parameters.pageSize = getCustomerDashboardsUsingGET_nodeParam || '';
                } else {
                    getCustomerDashboardsUsingGET_parameters.pageSize = RED.util.getMessageProperty(msg, getCustomerDashboardsUsingGET_nodeParam);
                }
                getCustomerDashboardsUsingGET_parameters.pageSize = !!getCustomerDashboardsUsingGET_parameters.pageSize ? getCustomerDashboardsUsingGET_parameters.pageSize : msg.payload;
                
                getCustomerDashboardsUsingGET_nodeParam = node.getCustomerDashboardsUsingGET_page;
                getCustomerDashboardsUsingGET_nodeParamType = node.getCustomerDashboardsUsingGET_pageType;
                if (getCustomerDashboardsUsingGET_nodeParamType === 'str') {
                    getCustomerDashboardsUsingGET_parameters.page = getCustomerDashboardsUsingGET_nodeParam || '';
                } else {
                    getCustomerDashboardsUsingGET_parameters.page = RED.util.getMessageProperty(msg, getCustomerDashboardsUsingGET_nodeParam);
                }
                getCustomerDashboardsUsingGET_parameters.page = !!getCustomerDashboardsUsingGET_parameters.page ? getCustomerDashboardsUsingGET_parameters.page : msg.payload;
                
                getCustomerDashboardsUsingGET_nodeParam = node.getCustomerDashboardsUsingGET_mobile;
                getCustomerDashboardsUsingGET_nodeParamType = node.getCustomerDashboardsUsingGET_mobileType;
                if (getCustomerDashboardsUsingGET_nodeParamType === 'str') {
                    getCustomerDashboardsUsingGET_parameters.mobile = getCustomerDashboardsUsingGET_nodeParam || '';
                } else {
                    getCustomerDashboardsUsingGET_parameters.mobile = RED.util.getMessageProperty(msg, getCustomerDashboardsUsingGET_nodeParam);
                }
                getCustomerDashboardsUsingGET_parameters.mobile = !!getCustomerDashboardsUsingGET_parameters.mobile ? getCustomerDashboardsUsingGET_parameters.mobile : msg.payload;
                
                getCustomerDashboardsUsingGET_nodeParam = node.getCustomerDashboardsUsingGET_textSearch;
                getCustomerDashboardsUsingGET_nodeParamType = node.getCustomerDashboardsUsingGET_textSearchType;
                if (getCustomerDashboardsUsingGET_nodeParamType === 'str') {
                    getCustomerDashboardsUsingGET_parameters.textSearch = getCustomerDashboardsUsingGET_nodeParam || '';
                } else {
                    getCustomerDashboardsUsingGET_parameters.textSearch = RED.util.getMessageProperty(msg, getCustomerDashboardsUsingGET_nodeParam);
                }
                getCustomerDashboardsUsingGET_parameters.textSearch = !!getCustomerDashboardsUsingGET_parameters.textSearch ? getCustomerDashboardsUsingGET_parameters.textSearch : msg.payload;
                
                getCustomerDashboardsUsingGET_nodeParam = node.getCustomerDashboardsUsingGET_sortProperty;
                getCustomerDashboardsUsingGET_nodeParamType = node.getCustomerDashboardsUsingGET_sortPropertyType;
                if (getCustomerDashboardsUsingGET_nodeParamType === 'str') {
                    getCustomerDashboardsUsingGET_parameters.sortProperty = getCustomerDashboardsUsingGET_nodeParam || '';
                } else {
                    getCustomerDashboardsUsingGET_parameters.sortProperty = RED.util.getMessageProperty(msg, getCustomerDashboardsUsingGET_nodeParam);
                }
                getCustomerDashboardsUsingGET_parameters.sortProperty = !!getCustomerDashboardsUsingGET_parameters.sortProperty ? getCustomerDashboardsUsingGET_parameters.sortProperty : msg.payload;
                
                getCustomerDashboardsUsingGET_nodeParam = node.getCustomerDashboardsUsingGET_sortOrder;
                getCustomerDashboardsUsingGET_nodeParamType = node.getCustomerDashboardsUsingGET_sortOrderType;
                if (getCustomerDashboardsUsingGET_nodeParamType === 'str') {
                    getCustomerDashboardsUsingGET_parameters.sortOrder = getCustomerDashboardsUsingGET_nodeParam || '';
                } else {
                    getCustomerDashboardsUsingGET_parameters.sortOrder = RED.util.getMessageProperty(msg, getCustomerDashboardsUsingGET_nodeParam);
                }
                getCustomerDashboardsUsingGET_parameters.sortOrder = !!getCustomerDashboardsUsingGET_parameters.sortOrder ? getCustomerDashboardsUsingGET_parameters.sortOrder : msg.payload;
                                result = client.getCustomerDashboardsUsingGET(getCustomerDashboardsUsingGET_parameters);
            }
            if (!errorFlag && node.method === 'saveDashboardUsingPOST') {
                var saveDashboardUsingPOST_parameters = [];
                var saveDashboardUsingPOST_nodeParam;
                var saveDashboardUsingPOST_nodeParamType;

                if (typeof msg.payload === 'object') {
                    saveDashboardUsingPOST_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                                result = client.saveDashboardUsingPOST(saveDashboardUsingPOST_parameters);
            }
            if (!errorFlag && node.method === 'getHomeDashboardUsingGET') {
                var getHomeDashboardUsingGET_parameters = [];
                var getHomeDashboardUsingGET_nodeParam;
                var getHomeDashboardUsingGET_nodeParamType;
                result = client.getHomeDashboardUsingGET(getHomeDashboardUsingGET_parameters);
            }
            if (!errorFlag && node.method === 'getHomeDashboardInfoUsingGET') {
                var getHomeDashboardInfoUsingGET_parameters = [];
                var getHomeDashboardInfoUsingGET_nodeParam;
                var getHomeDashboardInfoUsingGET_nodeParamType;
                result = client.getHomeDashboardInfoUsingGET(getHomeDashboardInfoUsingGET_parameters);
            }
            if (!errorFlag && node.method === 'getDashboardInfoByIdUsingGET') {
                var getDashboardInfoByIdUsingGET_parameters = [];
                var getDashboardInfoByIdUsingGET_nodeParam;
                var getDashboardInfoByIdUsingGET_nodeParamType;

                getDashboardInfoByIdUsingGET_nodeParam = node.getDashboardInfoByIdUsingGET_dashboardId;
                getDashboardInfoByIdUsingGET_nodeParamType = node.getDashboardInfoByIdUsingGET_dashboardIdType;
                if (getDashboardInfoByIdUsingGET_nodeParamType === 'str') {
                    getDashboardInfoByIdUsingGET_parameters.dashboardId = getDashboardInfoByIdUsingGET_nodeParam || '';
                } else {
                    getDashboardInfoByIdUsingGET_parameters.dashboardId = RED.util.getMessageProperty(msg, getDashboardInfoByIdUsingGET_nodeParam);
                }
                getDashboardInfoByIdUsingGET_parameters.dashboardId = !!getDashboardInfoByIdUsingGET_parameters.dashboardId ? getDashboardInfoByIdUsingGET_parameters.dashboardId : msg.payload;
                                result = client.getDashboardInfoByIdUsingGET(getDashboardInfoByIdUsingGET_parameters);
            }
            if (!errorFlag && node.method === 'getMaxDatapointsLimitUsingGET') {
                var getMaxDatapointsLimitUsingGET_parameters = [];
                var getMaxDatapointsLimitUsingGET_nodeParam;
                var getMaxDatapointsLimitUsingGET_nodeParamType;
                result = client.getMaxDatapointsLimitUsingGET(getMaxDatapointsLimitUsingGET_parameters);
            }
            if (!errorFlag && node.method === 'getServerTimeUsingGET') {
                var getServerTimeUsingGET_parameters = [];
                var getServerTimeUsingGET_nodeParam;
                var getServerTimeUsingGET_nodeParamType;
                result = client.getServerTimeUsingGET(getServerTimeUsingGET_parameters);
            }
            if (!errorFlag && node.method === 'getDashboardByIdUsingGET') {
                var getDashboardByIdUsingGET_parameters = [];
                var getDashboardByIdUsingGET_nodeParam;
                var getDashboardByIdUsingGET_nodeParamType;

                getDashboardByIdUsingGET_nodeParam = node.getDashboardByIdUsingGET_dashboardId;
                getDashboardByIdUsingGET_nodeParamType = node.getDashboardByIdUsingGET_dashboardIdType;
                if (getDashboardByIdUsingGET_nodeParamType === 'str') {
                    getDashboardByIdUsingGET_parameters.dashboardId = getDashboardByIdUsingGET_nodeParam || '';
                } else {
                    getDashboardByIdUsingGET_parameters.dashboardId = RED.util.getMessageProperty(msg, getDashboardByIdUsingGET_nodeParam);
                }
                getDashboardByIdUsingGET_parameters.dashboardId = !!getDashboardByIdUsingGET_parameters.dashboardId ? getDashboardByIdUsingGET_parameters.dashboardId : msg.payload;
                                result = client.getDashboardByIdUsingGET(getDashboardByIdUsingGET_parameters);
            }
            if (!errorFlag && node.method === 'deleteDashboardUsingDELETE') {
                var deleteDashboardUsingDELETE_parameters = [];
                var deleteDashboardUsingDELETE_nodeParam;
                var deleteDashboardUsingDELETE_nodeParamType;

                deleteDashboardUsingDELETE_nodeParam = node.deleteDashboardUsingDELETE_dashboardId;
                deleteDashboardUsingDELETE_nodeParamType = node.deleteDashboardUsingDELETE_dashboardIdType;
                if (deleteDashboardUsingDELETE_nodeParamType === 'str') {
                    deleteDashboardUsingDELETE_parameters.dashboardId = deleteDashboardUsingDELETE_nodeParam || '';
                } else {
                    deleteDashboardUsingDELETE_parameters.dashboardId = RED.util.getMessageProperty(msg, deleteDashboardUsingDELETE_nodeParam);
                }
                deleteDashboardUsingDELETE_parameters.dashboardId = !!deleteDashboardUsingDELETE_parameters.dashboardId ? deleteDashboardUsingDELETE_parameters.dashboardId : msg.payload;
                                result = client.deleteDashboardUsingDELETE(deleteDashboardUsingDELETE_parameters);
            }
            if (!errorFlag && node.method === 'updateDashboardCustomersUsingPOST') {
                var updateDashboardCustomersUsingPOST_parameters = [];
                var updateDashboardCustomersUsingPOST_nodeParam;
                var updateDashboardCustomersUsingPOST_nodeParamType;

                updateDashboardCustomersUsingPOST_nodeParam = node.updateDashboardCustomersUsingPOST_dashboardId;
                updateDashboardCustomersUsingPOST_nodeParamType = node.updateDashboardCustomersUsingPOST_dashboardIdType;
                if (updateDashboardCustomersUsingPOST_nodeParamType === 'str') {
                    updateDashboardCustomersUsingPOST_parameters.dashboardId = updateDashboardCustomersUsingPOST_nodeParam || '';
                } else {
                    updateDashboardCustomersUsingPOST_parameters.dashboardId = RED.util.getMessageProperty(msg, updateDashboardCustomersUsingPOST_nodeParam);
                }
                updateDashboardCustomersUsingPOST_parameters.dashboardId = !!updateDashboardCustomersUsingPOST_parameters.dashboardId ? updateDashboardCustomersUsingPOST_parameters.dashboardId : msg.payload;
                
                if (typeof msg.payload === 'object') {
                    updateDashboardCustomersUsingPOST_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                                result = client.updateDashboardCustomersUsingPOST(updateDashboardCustomersUsingPOST_parameters);
            }
            if (!errorFlag && node.method === 'addDashboardCustomersUsingPOST') {
                var addDashboardCustomersUsingPOST_parameters = [];
                var addDashboardCustomersUsingPOST_nodeParam;
                var addDashboardCustomersUsingPOST_nodeParamType;

                addDashboardCustomersUsingPOST_nodeParam = node.addDashboardCustomersUsingPOST_dashboardId;
                addDashboardCustomersUsingPOST_nodeParamType = node.addDashboardCustomersUsingPOST_dashboardIdType;
                if (addDashboardCustomersUsingPOST_nodeParamType === 'str') {
                    addDashboardCustomersUsingPOST_parameters.dashboardId = addDashboardCustomersUsingPOST_nodeParam || '';
                } else {
                    addDashboardCustomersUsingPOST_parameters.dashboardId = RED.util.getMessageProperty(msg, addDashboardCustomersUsingPOST_nodeParam);
                }
                addDashboardCustomersUsingPOST_parameters.dashboardId = !!addDashboardCustomersUsingPOST_parameters.dashboardId ? addDashboardCustomersUsingPOST_parameters.dashboardId : msg.payload;
                
                if (typeof msg.payload === 'object') {
                    addDashboardCustomersUsingPOST_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                                result = client.addDashboardCustomersUsingPOST(addDashboardCustomersUsingPOST_parameters);
            }
            if (!errorFlag && node.method === 'removeDashboardCustomersUsingPOST') {
                var removeDashboardCustomersUsingPOST_parameters = [];
                var removeDashboardCustomersUsingPOST_nodeParam;
                var removeDashboardCustomersUsingPOST_nodeParamType;

                removeDashboardCustomersUsingPOST_nodeParam = node.removeDashboardCustomersUsingPOST_dashboardId;
                removeDashboardCustomersUsingPOST_nodeParamType = node.removeDashboardCustomersUsingPOST_dashboardIdType;
                if (removeDashboardCustomersUsingPOST_nodeParamType === 'str') {
                    removeDashboardCustomersUsingPOST_parameters.dashboardId = removeDashboardCustomersUsingPOST_nodeParam || '';
                } else {
                    removeDashboardCustomersUsingPOST_parameters.dashboardId = RED.util.getMessageProperty(msg, removeDashboardCustomersUsingPOST_nodeParam);
                }
                removeDashboardCustomersUsingPOST_parameters.dashboardId = !!removeDashboardCustomersUsingPOST_parameters.dashboardId ? removeDashboardCustomersUsingPOST_parameters.dashboardId : msg.payload;
                
                if (typeof msg.payload === 'object') {
                    removeDashboardCustomersUsingPOST_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                                result = client.removeDashboardCustomersUsingPOST(removeDashboardCustomersUsingPOST_parameters);
            }
            if (!errorFlag && node.method === 'assignDashboardToEdgeUsingPOST') {
                var assignDashboardToEdgeUsingPOST_parameters = [];
                var assignDashboardToEdgeUsingPOST_nodeParam;
                var assignDashboardToEdgeUsingPOST_nodeParamType;

                assignDashboardToEdgeUsingPOST_nodeParam = node.assignDashboardToEdgeUsingPOST_edgeId;
                assignDashboardToEdgeUsingPOST_nodeParamType = node.assignDashboardToEdgeUsingPOST_edgeIdType;
                if (assignDashboardToEdgeUsingPOST_nodeParamType === 'str') {
                    assignDashboardToEdgeUsingPOST_parameters.edgeId = assignDashboardToEdgeUsingPOST_nodeParam || '';
                } else {
                    assignDashboardToEdgeUsingPOST_parameters.edgeId = RED.util.getMessageProperty(msg, assignDashboardToEdgeUsingPOST_nodeParam);
                }
                assignDashboardToEdgeUsingPOST_parameters.edgeId = !!assignDashboardToEdgeUsingPOST_parameters.edgeId ? assignDashboardToEdgeUsingPOST_parameters.edgeId : msg.payload;
                
                assignDashboardToEdgeUsingPOST_nodeParam = node.assignDashboardToEdgeUsingPOST_dashboardId;
                assignDashboardToEdgeUsingPOST_nodeParamType = node.assignDashboardToEdgeUsingPOST_dashboardIdType;
                if (assignDashboardToEdgeUsingPOST_nodeParamType === 'str') {
                    assignDashboardToEdgeUsingPOST_parameters.dashboardId = assignDashboardToEdgeUsingPOST_nodeParam || '';
                } else {
                    assignDashboardToEdgeUsingPOST_parameters.dashboardId = RED.util.getMessageProperty(msg, assignDashboardToEdgeUsingPOST_nodeParam);
                }
                assignDashboardToEdgeUsingPOST_parameters.dashboardId = !!assignDashboardToEdgeUsingPOST_parameters.dashboardId ? assignDashboardToEdgeUsingPOST_parameters.dashboardId : msg.payload;
                                result = client.assignDashboardToEdgeUsingPOST(assignDashboardToEdgeUsingPOST_parameters);
            }
            if (!errorFlag && node.method === 'unassignDashboardFromEdgeUsingDELETE') {
                var unassignDashboardFromEdgeUsingDELETE_parameters = [];
                var unassignDashboardFromEdgeUsingDELETE_nodeParam;
                var unassignDashboardFromEdgeUsingDELETE_nodeParamType;

                unassignDashboardFromEdgeUsingDELETE_nodeParam = node.unassignDashboardFromEdgeUsingDELETE_edgeId;
                unassignDashboardFromEdgeUsingDELETE_nodeParamType = node.unassignDashboardFromEdgeUsingDELETE_edgeIdType;
                if (unassignDashboardFromEdgeUsingDELETE_nodeParamType === 'str') {
                    unassignDashboardFromEdgeUsingDELETE_parameters.edgeId = unassignDashboardFromEdgeUsingDELETE_nodeParam || '';
                } else {
                    unassignDashboardFromEdgeUsingDELETE_parameters.edgeId = RED.util.getMessageProperty(msg, unassignDashboardFromEdgeUsingDELETE_nodeParam);
                }
                unassignDashboardFromEdgeUsingDELETE_parameters.edgeId = !!unassignDashboardFromEdgeUsingDELETE_parameters.edgeId ? unassignDashboardFromEdgeUsingDELETE_parameters.edgeId : msg.payload;
                
                unassignDashboardFromEdgeUsingDELETE_nodeParam = node.unassignDashboardFromEdgeUsingDELETE_dashboardId;
                unassignDashboardFromEdgeUsingDELETE_nodeParamType = node.unassignDashboardFromEdgeUsingDELETE_dashboardIdType;
                if (unassignDashboardFromEdgeUsingDELETE_nodeParamType === 'str') {
                    unassignDashboardFromEdgeUsingDELETE_parameters.dashboardId = unassignDashboardFromEdgeUsingDELETE_nodeParam || '';
                } else {
                    unassignDashboardFromEdgeUsingDELETE_parameters.dashboardId = RED.util.getMessageProperty(msg, unassignDashboardFromEdgeUsingDELETE_nodeParam);
                }
                unassignDashboardFromEdgeUsingDELETE_parameters.dashboardId = !!unassignDashboardFromEdgeUsingDELETE_parameters.dashboardId ? unassignDashboardFromEdgeUsingDELETE_parameters.dashboardId : msg.payload;
                                result = client.unassignDashboardFromEdgeUsingDELETE(unassignDashboardFromEdgeUsingDELETE_parameters);
            }
            if (!errorFlag && node.method === 'getEdgeDashboardsUsingGET') {
                var getEdgeDashboardsUsingGET_parameters = [];
                var getEdgeDashboardsUsingGET_nodeParam;
                var getEdgeDashboardsUsingGET_nodeParamType;

                getEdgeDashboardsUsingGET_nodeParam = node.getEdgeDashboardsUsingGET_edgeId;
                getEdgeDashboardsUsingGET_nodeParamType = node.getEdgeDashboardsUsingGET_edgeIdType;
                if (getEdgeDashboardsUsingGET_nodeParamType === 'str') {
                    getEdgeDashboardsUsingGET_parameters.edgeId = getEdgeDashboardsUsingGET_nodeParam || '';
                } else {
                    getEdgeDashboardsUsingGET_parameters.edgeId = RED.util.getMessageProperty(msg, getEdgeDashboardsUsingGET_nodeParam);
                }
                getEdgeDashboardsUsingGET_parameters.edgeId = !!getEdgeDashboardsUsingGET_parameters.edgeId ? getEdgeDashboardsUsingGET_parameters.edgeId : msg.payload;
                
                getEdgeDashboardsUsingGET_nodeParam = node.getEdgeDashboardsUsingGET_pageSize;
                getEdgeDashboardsUsingGET_nodeParamType = node.getEdgeDashboardsUsingGET_pageSizeType;
                if (getEdgeDashboardsUsingGET_nodeParamType === 'str') {
                    getEdgeDashboardsUsingGET_parameters.pageSize = getEdgeDashboardsUsingGET_nodeParam || '';
                } else {
                    getEdgeDashboardsUsingGET_parameters.pageSize = RED.util.getMessageProperty(msg, getEdgeDashboardsUsingGET_nodeParam);
                }
                getEdgeDashboardsUsingGET_parameters.pageSize = !!getEdgeDashboardsUsingGET_parameters.pageSize ? getEdgeDashboardsUsingGET_parameters.pageSize : msg.payload;
                
                getEdgeDashboardsUsingGET_nodeParam = node.getEdgeDashboardsUsingGET_page;
                getEdgeDashboardsUsingGET_nodeParamType = node.getEdgeDashboardsUsingGET_pageType;
                if (getEdgeDashboardsUsingGET_nodeParamType === 'str') {
                    getEdgeDashboardsUsingGET_parameters.page = getEdgeDashboardsUsingGET_nodeParam || '';
                } else {
                    getEdgeDashboardsUsingGET_parameters.page = RED.util.getMessageProperty(msg, getEdgeDashboardsUsingGET_nodeParam);
                }
                getEdgeDashboardsUsingGET_parameters.page = !!getEdgeDashboardsUsingGET_parameters.page ? getEdgeDashboardsUsingGET_parameters.page : msg.payload;
                
                getEdgeDashboardsUsingGET_nodeParam = node.getEdgeDashboardsUsingGET_textSearch;
                getEdgeDashboardsUsingGET_nodeParamType = node.getEdgeDashboardsUsingGET_textSearchType;
                if (getEdgeDashboardsUsingGET_nodeParamType === 'str') {
                    getEdgeDashboardsUsingGET_parameters.textSearch = getEdgeDashboardsUsingGET_nodeParam || '';
                } else {
                    getEdgeDashboardsUsingGET_parameters.textSearch = RED.util.getMessageProperty(msg, getEdgeDashboardsUsingGET_nodeParam);
                }
                getEdgeDashboardsUsingGET_parameters.textSearch = !!getEdgeDashboardsUsingGET_parameters.textSearch ? getEdgeDashboardsUsingGET_parameters.textSearch : msg.payload;
                
                getEdgeDashboardsUsingGET_nodeParam = node.getEdgeDashboardsUsingGET_sortProperty;
                getEdgeDashboardsUsingGET_nodeParamType = node.getEdgeDashboardsUsingGET_sortPropertyType;
                if (getEdgeDashboardsUsingGET_nodeParamType === 'str') {
                    getEdgeDashboardsUsingGET_parameters.sortProperty = getEdgeDashboardsUsingGET_nodeParam || '';
                } else {
                    getEdgeDashboardsUsingGET_parameters.sortProperty = RED.util.getMessageProperty(msg, getEdgeDashboardsUsingGET_nodeParam);
                }
                getEdgeDashboardsUsingGET_parameters.sortProperty = !!getEdgeDashboardsUsingGET_parameters.sortProperty ? getEdgeDashboardsUsingGET_parameters.sortProperty : msg.payload;
                
                getEdgeDashboardsUsingGET_nodeParam = node.getEdgeDashboardsUsingGET_sortOrder;
                getEdgeDashboardsUsingGET_nodeParamType = node.getEdgeDashboardsUsingGET_sortOrderType;
                if (getEdgeDashboardsUsingGET_nodeParamType === 'str') {
                    getEdgeDashboardsUsingGET_parameters.sortOrder = getEdgeDashboardsUsingGET_nodeParam || '';
                } else {
                    getEdgeDashboardsUsingGET_parameters.sortOrder = RED.util.getMessageProperty(msg, getEdgeDashboardsUsingGET_nodeParam);
                }
                getEdgeDashboardsUsingGET_parameters.sortOrder = !!getEdgeDashboardsUsingGET_parameters.sortOrder ? getEdgeDashboardsUsingGET_parameters.sortOrder : msg.payload;
                                result = client.getEdgeDashboardsUsingGET(getEdgeDashboardsUsingGET_parameters);
            }
            if (!errorFlag && node.method === 'getTenantHomeDashboardInfoUsingGET') {
                var getTenantHomeDashboardInfoUsingGET_parameters = [];
                var getTenantHomeDashboardInfoUsingGET_nodeParam;
                var getTenantHomeDashboardInfoUsingGET_nodeParamType;
                result = client.getTenantHomeDashboardInfoUsingGET(getTenantHomeDashboardInfoUsingGET_parameters);
            }
            if (!errorFlag && node.method === 'setTenantHomeDashboardInfoUsingPOST') {
                var setTenantHomeDashboardInfoUsingPOST_parameters = [];
                var setTenantHomeDashboardInfoUsingPOST_nodeParam;
                var setTenantHomeDashboardInfoUsingPOST_nodeParamType;

                if (typeof msg.payload === 'object') {
                    setTenantHomeDashboardInfoUsingPOST_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                                result = client.setTenantHomeDashboardInfoUsingPOST(setTenantHomeDashboardInfoUsingPOST_parameters);
            }
            if (!errorFlag && node.method === 'getTenantDashboardsUsingGET') {
                var getTenantDashboardsUsingGET_parameters = [];
                var getTenantDashboardsUsingGET_nodeParam;
                var getTenantDashboardsUsingGET_nodeParamType;

                getTenantDashboardsUsingGET_nodeParam = node.getTenantDashboardsUsingGET_pageSize;
                getTenantDashboardsUsingGET_nodeParamType = node.getTenantDashboardsUsingGET_pageSizeType;
                if (getTenantDashboardsUsingGET_nodeParamType === 'str') {
                    getTenantDashboardsUsingGET_parameters.pageSize = getTenantDashboardsUsingGET_nodeParam || '';
                } else {
                    getTenantDashboardsUsingGET_parameters.pageSize = RED.util.getMessageProperty(msg, getTenantDashboardsUsingGET_nodeParam);
                }
                getTenantDashboardsUsingGET_parameters.pageSize = !!getTenantDashboardsUsingGET_parameters.pageSize ? getTenantDashboardsUsingGET_parameters.pageSize : msg.payload;
                
                getTenantDashboardsUsingGET_nodeParam = node.getTenantDashboardsUsingGET_page;
                getTenantDashboardsUsingGET_nodeParamType = node.getTenantDashboardsUsingGET_pageType;
                if (getTenantDashboardsUsingGET_nodeParamType === 'str') {
                    getTenantDashboardsUsingGET_parameters.page = getTenantDashboardsUsingGET_nodeParam || '';
                } else {
                    getTenantDashboardsUsingGET_parameters.page = RED.util.getMessageProperty(msg, getTenantDashboardsUsingGET_nodeParam);
                }
                getTenantDashboardsUsingGET_parameters.page = !!getTenantDashboardsUsingGET_parameters.page ? getTenantDashboardsUsingGET_parameters.page : msg.payload;
                
                getTenantDashboardsUsingGET_nodeParam = node.getTenantDashboardsUsingGET_mobile;
                getTenantDashboardsUsingGET_nodeParamType = node.getTenantDashboardsUsingGET_mobileType;
                if (getTenantDashboardsUsingGET_nodeParamType === 'str') {
                    getTenantDashboardsUsingGET_parameters.mobile = getTenantDashboardsUsingGET_nodeParam || '';
                } else {
                    getTenantDashboardsUsingGET_parameters.mobile = RED.util.getMessageProperty(msg, getTenantDashboardsUsingGET_nodeParam);
                }
                getTenantDashboardsUsingGET_parameters.mobile = !!getTenantDashboardsUsingGET_parameters.mobile ? getTenantDashboardsUsingGET_parameters.mobile : msg.payload;
                
                getTenantDashboardsUsingGET_nodeParam = node.getTenantDashboardsUsingGET_textSearch;
                getTenantDashboardsUsingGET_nodeParamType = node.getTenantDashboardsUsingGET_textSearchType;
                if (getTenantDashboardsUsingGET_nodeParamType === 'str') {
                    getTenantDashboardsUsingGET_parameters.textSearch = getTenantDashboardsUsingGET_nodeParam || '';
                } else {
                    getTenantDashboardsUsingGET_parameters.textSearch = RED.util.getMessageProperty(msg, getTenantDashboardsUsingGET_nodeParam);
                }
                getTenantDashboardsUsingGET_parameters.textSearch = !!getTenantDashboardsUsingGET_parameters.textSearch ? getTenantDashboardsUsingGET_parameters.textSearch : msg.payload;
                
                getTenantDashboardsUsingGET_nodeParam = node.getTenantDashboardsUsingGET_sortProperty;
                getTenantDashboardsUsingGET_nodeParamType = node.getTenantDashboardsUsingGET_sortPropertyType;
                if (getTenantDashboardsUsingGET_nodeParamType === 'str') {
                    getTenantDashboardsUsingGET_parameters.sortProperty = getTenantDashboardsUsingGET_nodeParam || '';
                } else {
                    getTenantDashboardsUsingGET_parameters.sortProperty = RED.util.getMessageProperty(msg, getTenantDashboardsUsingGET_nodeParam);
                }
                getTenantDashboardsUsingGET_parameters.sortProperty = !!getTenantDashboardsUsingGET_parameters.sortProperty ? getTenantDashboardsUsingGET_parameters.sortProperty : msg.payload;
                
                getTenantDashboardsUsingGET_nodeParam = node.getTenantDashboardsUsingGET_sortOrder;
                getTenantDashboardsUsingGET_nodeParamType = node.getTenantDashboardsUsingGET_sortOrderType;
                if (getTenantDashboardsUsingGET_nodeParamType === 'str') {
                    getTenantDashboardsUsingGET_parameters.sortOrder = getTenantDashboardsUsingGET_nodeParam || '';
                } else {
                    getTenantDashboardsUsingGET_parameters.sortOrder = RED.util.getMessageProperty(msg, getTenantDashboardsUsingGET_nodeParam);
                }
                getTenantDashboardsUsingGET_parameters.sortOrder = !!getTenantDashboardsUsingGET_parameters.sortOrder ? getTenantDashboardsUsingGET_parameters.sortOrder : msg.payload;
                                result = client.getTenantDashboardsUsingGET(getTenantDashboardsUsingGET_parameters);
            }
            if (!errorFlag && node.method === 'getTenantDashboardsUsingGET_1') {
                var getTenantDashboardsUsingGET_1_parameters = [];
                var getTenantDashboardsUsingGET_1_nodeParam;
                var getTenantDashboardsUsingGET_1_nodeParamType;

                getTenantDashboardsUsingGET_1_nodeParam = node.getTenantDashboardsUsingGET_1_tenantId;
                getTenantDashboardsUsingGET_1_nodeParamType = node.getTenantDashboardsUsingGET_1_tenantIdType;
                if (getTenantDashboardsUsingGET_1_nodeParamType === 'str') {
                    getTenantDashboardsUsingGET_1_parameters.tenantId = getTenantDashboardsUsingGET_1_nodeParam || '';
                } else {
                    getTenantDashboardsUsingGET_1_parameters.tenantId = RED.util.getMessageProperty(msg, getTenantDashboardsUsingGET_1_nodeParam);
                }
                getTenantDashboardsUsingGET_1_parameters.tenantId = !!getTenantDashboardsUsingGET_1_parameters.tenantId ? getTenantDashboardsUsingGET_1_parameters.tenantId : msg.payload;
                
                getTenantDashboardsUsingGET_1_nodeParam = node.getTenantDashboardsUsingGET_1_pageSize;
                getTenantDashboardsUsingGET_1_nodeParamType = node.getTenantDashboardsUsingGET_1_pageSizeType;
                if (getTenantDashboardsUsingGET_1_nodeParamType === 'str') {
                    getTenantDashboardsUsingGET_1_parameters.pageSize = getTenantDashboardsUsingGET_1_nodeParam || '';
                } else {
                    getTenantDashboardsUsingGET_1_parameters.pageSize = RED.util.getMessageProperty(msg, getTenantDashboardsUsingGET_1_nodeParam);
                }
                getTenantDashboardsUsingGET_1_parameters.pageSize = !!getTenantDashboardsUsingGET_1_parameters.pageSize ? getTenantDashboardsUsingGET_1_parameters.pageSize : msg.payload;
                
                getTenantDashboardsUsingGET_1_nodeParam = node.getTenantDashboardsUsingGET_1_page;
                getTenantDashboardsUsingGET_1_nodeParamType = node.getTenantDashboardsUsingGET_1_pageType;
                if (getTenantDashboardsUsingGET_1_nodeParamType === 'str') {
                    getTenantDashboardsUsingGET_1_parameters.page = getTenantDashboardsUsingGET_1_nodeParam || '';
                } else {
                    getTenantDashboardsUsingGET_1_parameters.page = RED.util.getMessageProperty(msg, getTenantDashboardsUsingGET_1_nodeParam);
                }
                getTenantDashboardsUsingGET_1_parameters.page = !!getTenantDashboardsUsingGET_1_parameters.page ? getTenantDashboardsUsingGET_1_parameters.page : msg.payload;
                
                getTenantDashboardsUsingGET_1_nodeParam = node.getTenantDashboardsUsingGET_1_textSearch;
                getTenantDashboardsUsingGET_1_nodeParamType = node.getTenantDashboardsUsingGET_1_textSearchType;
                if (getTenantDashboardsUsingGET_1_nodeParamType === 'str') {
                    getTenantDashboardsUsingGET_1_parameters.textSearch = getTenantDashboardsUsingGET_1_nodeParam || '';
                } else {
                    getTenantDashboardsUsingGET_1_parameters.textSearch = RED.util.getMessageProperty(msg, getTenantDashboardsUsingGET_1_nodeParam);
                }
                getTenantDashboardsUsingGET_1_parameters.textSearch = !!getTenantDashboardsUsingGET_1_parameters.textSearch ? getTenantDashboardsUsingGET_1_parameters.textSearch : msg.payload;
                
                getTenantDashboardsUsingGET_1_nodeParam = node.getTenantDashboardsUsingGET_1_sortProperty;
                getTenantDashboardsUsingGET_1_nodeParamType = node.getTenantDashboardsUsingGET_1_sortPropertyType;
                if (getTenantDashboardsUsingGET_1_nodeParamType === 'str') {
                    getTenantDashboardsUsingGET_1_parameters.sortProperty = getTenantDashboardsUsingGET_1_nodeParam || '';
                } else {
                    getTenantDashboardsUsingGET_1_parameters.sortProperty = RED.util.getMessageProperty(msg, getTenantDashboardsUsingGET_1_nodeParam);
                }
                getTenantDashboardsUsingGET_1_parameters.sortProperty = !!getTenantDashboardsUsingGET_1_parameters.sortProperty ? getTenantDashboardsUsingGET_1_parameters.sortProperty : msg.payload;
                
                getTenantDashboardsUsingGET_1_nodeParam = node.getTenantDashboardsUsingGET_1_sortOrder;
                getTenantDashboardsUsingGET_1_nodeParamType = node.getTenantDashboardsUsingGET_1_sortOrderType;
                if (getTenantDashboardsUsingGET_1_nodeParamType === 'str') {
                    getTenantDashboardsUsingGET_1_parameters.sortOrder = getTenantDashboardsUsingGET_1_nodeParam || '';
                } else {
                    getTenantDashboardsUsingGET_1_parameters.sortOrder = RED.util.getMessageProperty(msg, getTenantDashboardsUsingGET_1_nodeParam);
                }
                getTenantDashboardsUsingGET_1_parameters.sortOrder = !!getTenantDashboardsUsingGET_1_parameters.sortOrder ? getTenantDashboardsUsingGET_1_parameters.sortOrder : msg.payload;
                                result = client.getTenantDashboardsUsingGET_1(getTenantDashboardsUsingGET_1_parameters);
            }
            if (!errorFlag && result === undefined) {
                node.error('Method is not specified.', msg);
                errorFlag = true;
            }
            var setData = function (msg, data) {
                if (data) {
                    if (data.response) {
                        if (data.response.statusCode) {
                            msg.statusCode = data.response.statusCode;
                        }
                        if (data.response.headers) {
                            msg.headers = data.response.headers;
                        }
                        if (data.response.request && data.response.request.uri && data.response.request.uri.href) {
                            msg.responseUrl = data.response.request.uri.href;
                        }
                    }
                    if (data.body) {
                        msg.payload = data.body;
                    }
                }
                return msg;
            };
            if (!errorFlag) {
                node.status({ fill: 'blue', shape: 'dot', text: 'TbDashboardController.status.requesting' });
                result.then(function (data) {
                    node.send(setData(msg, data));
                    node.status({});
                }).catch(function (error) {
                    var message = null;
                    if (error && error.body && error.body.message) {
                        message = error.body.message;
                    }
                    node.error(message, setData(msg, error));
                    node.status({ fill: 'red', shape: 'ring', text: 'node-red:common.status.error' });
                });
            }
        });
    }

    RED.nodes.registerType('tb-dashboard-controller', TbDashboardControllerNode);
};
