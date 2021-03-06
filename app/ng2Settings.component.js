"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng2SettingsComponent = (function () {
    function ng2SettingsComponent(router) {
        this.router = router;
        console.log('loaded ng2 component');
    }
    return ng2SettingsComponent;
}());
ng2SettingsComponent = __decorate([
    core_1.Component({
        selector: 'settings',
        // you can nest ng2 components in a ng2 routed ng2 component
        // template: '<h2>This is the Settings Page</h2><nested2></nested2>'
        // but you can't nest ng1 components in a ng2 routed ng2 component
        template: '<h2>This is the Settings Page</h2><nested></nested><nested2></nested2>'
    }),
    __metadata("design:paramtypes", [router_1.Router])
], ng2SettingsComponent);
exports.ng2SettingsComponent = ng2SettingsComponent;
//# sourceMappingURL=ng2Settings.component.js.map