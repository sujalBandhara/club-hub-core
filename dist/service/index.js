"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../client");
var user_1 = require("./user");
var club_1 = require("./club");
var calendar_1 = require("./calendar");
var event_1 = require("./event");
var menu_1 = require("./menu");
var post_1 = require("./post");
var member_1 = require("./member");
var ClubHubService = (function () {
    function ClubHubService(baseURL, token) {
        this.client = new client_1.default(baseURL, token);
        this.users = new user_1.default(this.client);
        this.clubs = new club_1.default(this.client);
        this.members = new member_1.default(this.client);
        this.calendars = new calendar_1.default(this.client);
        this.events = new event_1.default(this.client);
        this.menus = new menu_1.default(this.client);
        this.post = new post_1.default(this.client);
    }
    return ClubHubService;
}());
exports.default = ClubHubService;
