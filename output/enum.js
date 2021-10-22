"use strict";
var Permission;
(function (Permission) {
    Permission["ADMIN"] = "ADMIN";
    Permission["USER"] = "USER";
    Permission["READONLY"] = "READONLY";
})(Permission || (Permission = {}));
console.log(Permission.ADMIN);
console.log(Permission.USER);
console.log(Permission.READONLY);
console.log(Permission["USER"]);
//# sourceMappingURL=enum.js.map