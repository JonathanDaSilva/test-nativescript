"use strict";
var core_1 = require('@angular/core');
var rxjs_1 = require('rxjs');
var Storage = (function () {
    function Storage() {
        this.list = new rxjs_1.BehaviorSubject([]);
    }
    Storage.prototype.add = function (name) {
        var _this = this;
        this.list.take(1).subscribe(function (list) {
            list.push({
                name: name,
                done: false,
            });
            _this.list.next(list);
        });
    };
    Storage.prototype.getObservable = function () {
        return this.list.asObservable();
    };
    Storage = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Storage);
    return Storage;
}());
exports.Storage = Storage;
//# sourceMappingURL=Storage.js.map