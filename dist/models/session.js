"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Session;
(function (Session) {
    var PlatformTypes;
    (function (PlatformTypes) {
        PlatformTypes["Chrome"] = "Chrome";
        PlatformTypes["Edge"] = "Edge";
        PlatformTypes["IE"] = "IE";
        PlatformTypes["Safari"] = "Safari";
        PlatformTypes["Firefox"] = "Firefox";
        PlatformTypes["Opera"] = "Opera";
        PlatformTypes["NativeIos"] = "iOS";
        PlatformTypes["AndroidAndroid"] = "Android";
        PlatformTypes["OtherWeb"] = "OtherWeb";
        PlatformTypes["OtherMobile"] = "OtherMobile";
        PlatformTypes["Other"] = "Other";
    })(PlatformTypes = Session.PlatformTypes || (Session.PlatformTypes = {}));
    var DeviceTypes;
    (function (DeviceTypes) {
        DeviceTypes["Desktop"] = "Desktop";
        DeviceTypes["iPhone"] = "iPhone";
        DeviceTypes["Android"] = "Android";
        DeviceTypes["iOSTablet"] = "iOSTablet";
        DeviceTypes["androidTablet"] = "androidTablet";
        DeviceTypes["otherPhone"] = "otherPhone";
        DeviceTypes["otherTablet"] = "otherTablet";
    })(DeviceTypes = Session.DeviceTypes || (Session.DeviceTypes = {}));
})(Session || (Session = {}));
exports.default = Session;
