var should = require('should');
var helper = require('node-red-node-test-helper');
var node = require('../node.js');

helper.init(require.resolve('node-red'));

describe('tb-dashboard-controller node', function () {

    before(function (done) {
        helper.startServer(done);
    });

    after(function (done) {
        helper.stopServer(done);
    });

    afterEach(function () {
        helper.unload();
    });

    it('should be loaded', function (done) {
        var flow = [{ id: 'n1', type: 'tb-dashboard-controller', name: 'tb-dashboard-controller' }];
        helper.load(node, flow, function () {
            var n1 = helper.getNode('n1');
            n1.should.have.property('name', 'tb-dashboard-controller');
            done();
        });
    });

    it('should handle getCustomerDashboardsUsingGET()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-dashboard-controller', name: 'tb-dashboard-controller',
                method: 'getCustomerDashboardsUsingGET',
                getCustomerDashboardsUsingGET_customerId: '<node property>', // (1) define node properties
                getCustomerDashboardsUsingGET_pageSize: '<node property>', // (1) define node properties
                getCustomerDashboardsUsingGET_page: '<node property>', // (1) define node properties
                getCustomerDashboardsUsingGET_mobile: '<node property>', // (1) define node properties
                getCustomerDashboardsUsingGET_textSearch: '<node property>', // (1) define node properties
                getCustomerDashboardsUsingGET_sortProperty: '<node property>', // (1) define node properties
                getCustomerDashboardsUsingGET_sortOrder: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle saveDashboardUsingPOST()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-dashboard-controller', name: 'tb-dashboard-controller',
                method: 'saveDashboardUsingPOST',
                saveDashboardUsingPOST_body: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getHomeDashboardUsingGET()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-dashboard-controller', name: 'tb-dashboard-controller',
                method: 'getHomeDashboardUsingGET',
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getHomeDashboardInfoUsingGET()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-dashboard-controller', name: 'tb-dashboard-controller',
                method: 'getHomeDashboardInfoUsingGET',
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDashboardInfoByIdUsingGET()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-dashboard-controller', name: 'tb-dashboard-controller',
                method: 'getDashboardInfoByIdUsingGET',
                getDashboardInfoByIdUsingGET_dashboardId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getMaxDatapointsLimitUsingGET()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-dashboard-controller', name: 'tb-dashboard-controller',
                method: 'getMaxDatapointsLimitUsingGET',
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getServerTimeUsingGET()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-dashboard-controller', name: 'tb-dashboard-controller',
                method: 'getServerTimeUsingGET',
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDashboardByIdUsingGET()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-dashboard-controller', name: 'tb-dashboard-controller',
                method: 'getDashboardByIdUsingGET',
                getDashboardByIdUsingGET_dashboardId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteDashboardUsingDELETE()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-dashboard-controller', name: 'tb-dashboard-controller',
                method: 'deleteDashboardUsingDELETE',
                deleteDashboardUsingDELETE_dashboardId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle updateDashboardCustomersUsingPOST()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-dashboard-controller', name: 'tb-dashboard-controller',
                method: 'updateDashboardCustomersUsingPOST',
                updateDashboardCustomersUsingPOST_dashboardId: '<node property>', // (1) define node properties
                updateDashboardCustomersUsingPOST_body: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle addDashboardCustomersUsingPOST()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-dashboard-controller', name: 'tb-dashboard-controller',
                method: 'addDashboardCustomersUsingPOST',
                addDashboardCustomersUsingPOST_dashboardId: '<node property>', // (1) define node properties
                addDashboardCustomersUsingPOST_body: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle removeDashboardCustomersUsingPOST()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-dashboard-controller', name: 'tb-dashboard-controller',
                method: 'removeDashboardCustomersUsingPOST',
                removeDashboardCustomersUsingPOST_dashboardId: '<node property>', // (1) define node properties
                removeDashboardCustomersUsingPOST_body: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle assignDashboardToEdgeUsingPOST()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-dashboard-controller', name: 'tb-dashboard-controller',
                method: 'assignDashboardToEdgeUsingPOST',
                assignDashboardToEdgeUsingPOST_edgeId: '<node property>', // (1) define node properties
                assignDashboardToEdgeUsingPOST_dashboardId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle unassignDashboardFromEdgeUsingDELETE()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-dashboard-controller', name: 'tb-dashboard-controller',
                method: 'unassignDashboardFromEdgeUsingDELETE',
                unassignDashboardFromEdgeUsingDELETE_edgeId: '<node property>', // (1) define node properties
                unassignDashboardFromEdgeUsingDELETE_dashboardId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getEdgeDashboardsUsingGET()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-dashboard-controller', name: 'tb-dashboard-controller',
                method: 'getEdgeDashboardsUsingGET',
                getEdgeDashboardsUsingGET_edgeId: '<node property>', // (1) define node properties
                getEdgeDashboardsUsingGET_pageSize: '<node property>', // (1) define node properties
                getEdgeDashboardsUsingGET_page: '<node property>', // (1) define node properties
                getEdgeDashboardsUsingGET_textSearch: '<node property>', // (1) define node properties
                getEdgeDashboardsUsingGET_sortProperty: '<node property>', // (1) define node properties
                getEdgeDashboardsUsingGET_sortOrder: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getTenantHomeDashboardInfoUsingGET()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-dashboard-controller', name: 'tb-dashboard-controller',
                method: 'getTenantHomeDashboardInfoUsingGET',
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle setTenantHomeDashboardInfoUsingPOST()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-dashboard-controller', name: 'tb-dashboard-controller',
                method: 'setTenantHomeDashboardInfoUsingPOST',
                setTenantHomeDashboardInfoUsingPOST_body: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getTenantDashboardsUsingGET()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-dashboard-controller', name: 'tb-dashboard-controller',
                method: 'getTenantDashboardsUsingGET',
                getTenantDashboardsUsingGET_pageSize: '<node property>', // (1) define node properties
                getTenantDashboardsUsingGET_page: '<node property>', // (1) define node properties
                getTenantDashboardsUsingGET_mobile: '<node property>', // (1) define node properties
                getTenantDashboardsUsingGET_textSearch: '<node property>', // (1) define node properties
                getTenantDashboardsUsingGET_sortProperty: '<node property>', // (1) define node properties
                getTenantDashboardsUsingGET_sortOrder: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getTenantDashboardsUsingGET_1()', function (done) {
        var flow = [
            { id: 'n1', type: 'tb-dashboard-controller', name: 'tb-dashboard-controller',
                method: 'getTenantDashboardsUsingGET_1',
                getTenantDashboardsUsingGET_1_tenantId: '<node property>', // (1) define node properties
                getTenantDashboardsUsingGET_1_pageSize: '<node property>', // (1) define node properties
                getTenantDashboardsUsingGET_1_page: '<node property>', // (1) define node properties
                getTenantDashboardsUsingGET_1_textSearch: '<node property>', // (1) define node properties
                getTenantDashboardsUsingGET_1_sortProperty: '<node property>', // (1) define node properties
                getTenantDashboardsUsingGET_1_sortOrder: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
});
