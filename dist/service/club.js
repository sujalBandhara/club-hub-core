"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClubService = (function () {
    function ClubService(client) {
        var _this = this;
        this.getClubs = function () {
            return _this.client.get('/clubs');
        };
        this.getPublicClubInfo = function (domain) {
            return _this.client.get("/clubs/" + domain);
        };
        this.client = client;
    }
    return ClubService;
}());
exports.default = ClubService;
