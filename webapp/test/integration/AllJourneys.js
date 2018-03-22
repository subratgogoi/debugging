jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 BusinessPartnerSet in the list
// * All 3 BusinessPartnerSet have at least one ToContacts

sap.ui.require([
	"sap/ui/test/Opa5",
	"spde/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"spde/test/integration/pages/App",
	"spde/test/integration/pages/Browser",
	"spde/test/integration/pages/Master",
	"spde/test/integration/pages/Detail",
	"spde/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "spde.view."
	});

	sap.ui.require([
		"spde/test/integration/MasterJourney",
		"spde/test/integration/NavigationJourney",
		"spde/test/integration/NotFoundJourney",
		"spde/test/integration/BusyJourney",
		"spde/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});