"use strict";
var core_1 = require("@angular/core");
var rxjs_1 = require('rxjs');
var Storage_1 = require('./Storage');
var router_1 = require('@angular/router');
var Add = (function () {
    function Add(storage, router) {
        this.storage = storage;
        this.router = router;
        this.name = new rxjs_1.BehaviorSubject('');
    }
    Add.prototype.add = function () {
        var _this = this;
        this.name.take(1).subscribe(function (name) {
            if (name === '') {
                return;
            }
            _this.storage.add(name);
            _this.router.navigate(['']);
        });
    };
    Add.prototype.textChange = function (event) {
        this.name.next(event.value);
    };
    Add = __decorate([
        core_1.Component({
            templateUrl: "Add.html",
        }), 
        __metadata('design:paramtypes', [Storage_1.Storage, router_1.Router])
    ], Add);
    return Add;
}());
exports.Add = Add;
//# sourceMappingURL=Add.js.map