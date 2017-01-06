"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("FAB", function () { return require("nativescript-floatingactionbutton").Fab; });
element_registry_1.registerElement("CheckBox", function () { return require("nativescript-checkbox").CheckBox; });
var app_module_1 = require("./app.module");
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map