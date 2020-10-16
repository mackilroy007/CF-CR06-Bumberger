var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//empty arry to push content into it
var arr = [];
//base class Location that contains the common denominators
//Location has a conflict with some lib file and needed to be renamed
var LocationA = /** @class */ (function () {
    function LocationA(a, b, c, d) {
        this.city = a;
        this.zipCode = b;
        this.address = c;
        this.img = d;
        //push content into the empty array
        arr.push(this);
    }
    //default displayment of content
    LocationA.prototype.render = function () {
        return "\n                " + this.city + " " + this.zipCode + " " + this.address + " " + this.img + "\n        ";
    };
    return LocationA;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(a, b, c, d, e, f, g) {
        var _this = _super.call(this, a, b, c, d) || this;
        _this.telephoneNumber = '';
        _this.type = '';
        _this.webAddress = '';
        _this.telephoneNumber = e;
        _this.type = f;
        _this.webAddress = g;
        return _this;
    }
    Restaurant.prototype.render = function () {
        return "\n        <div class=\"card\" style=\"width: 20rem;\">\n        <img src=\"" + this.img + "\" class=\"card-img-top\" alt=\"" + this.type + " restaurant\">\n        <div class=\"card-body\">\n            <ul>\n                <li class=\"card-text font-weight-bold\">" + this.type + " Restaurant</li>\n                <li class=\"card-text\">Location : " + this.address + ", " + this.zipCode + ", " + this.city + "</li>\n                <li class=\"card-text\">Contact us under: " + this.telephoneNumber + " Restaurant</li>\n                <li class=\"card-text\">More info under: " + this.webAddress + " Restaurant</li>\n            </ul>\n        </div>\n      </div>\n        ";
    };
    return Restaurant;
}(LocationA));
//restaurant content
new Restaurant('Vienna', '1050', 'Kettenbrückengasse 19', 'img/Lemon-leaf.png', '+43(1)5812308', 'Lemon Leaf Thai', 'www.lemonleaf.at');
new Restaurant('Vienna', '1050', 'Schönbrunner Straße 21', 'img/Sixta.png', '+43 1 58 528 56 or +43 1 58 528 56', 'SIXTA Traditional Austrian', 'http://www.sixta-restaurant.at/');
console.table(arr);
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var i = arr_1[_i];
    document.getElementsByClassName('result')[0].innerHTML += "" + i.render();
}
