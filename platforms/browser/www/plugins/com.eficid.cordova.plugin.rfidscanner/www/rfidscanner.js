cordova.define("com.eficid.cordova.plugin.rfidscanner.RfidScanner", function(require, exports, module) { var rfidscanner = {
    scan: function(successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, 'RfidScanner', 'scan', []);
    },
    radar: function(successCallback, errorCallback, tags) {
        cordova.exec(successCallback, errorCallback, 'RfidScanner', 'radar', tags);
    }
};
module.exports = rfidscanner;
});
