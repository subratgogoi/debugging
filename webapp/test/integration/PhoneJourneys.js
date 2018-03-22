jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"spde/test/integration/NavigationJourneyPhone",
		"spde/test/integration/NotFoundJourneyPhone",
		"spde/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});