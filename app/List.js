"use strict";
var core_1 = require("@angular/core");
var router_1 = require('@angular/router');
var Storage_1 = require('./Storage');
var List = (function () {
    function List(router, storage) {
        this.router = router;
        this.storage = storage;
        this.list$ = this.storage.getObservable();
        this.listIsEmpty$ = this.list$
            .map(function (list) { return list.length === 0; });
    }
    List.prototype.goToAdd = function () {
        this.router.navigate(['add']);
    };
    List = __decorate([
        core_1.Component({
            templateUrl: "List.html",
            styles: ["\n        .fab-button {\n            height: 70;\n            margin: 15;\n            background-color: #ff4081;\n            horizontal-align: right;\n            vertical-align: bottom;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [router_1.Router, Storage_1.Storage])
    ], List);
    return List;
}());
exports.List = List;
//# sourceMappingURL=List.js.map