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
    // dateTime: Date;
    // dateTimeSort;
    function LocationA(a, b, c, d, name) {
        this.city = a;
        this.zipCode = b;
        this.address = c;
        this.img = d;
        this.name = name;
        // this.dateTime = dateTime;
        // this.dateTimeSort = dateTime.toLocalString('en-GB');
        //push content into the empty array
        arr.push(this);
    }
    //default displayment of content
    LocationA.prototype.render = function () {
        return "\n        <div class=\"card my-4 col-md-6 col-lg-3\" style=\"width: 25rem;\">\n        <img src=\"" + this.img + "\" class=\"card-img-top img-thumbnail d-none d-md-block\" alt=\"" + this.address + "\">\n        <div class=\"card-body\">\n            <p class=\"card-text font-weight-bold text-center\">Land mark: " + this.name + "</p>\n            <ul>\n                <li class=\"card-text\">Location: " + this.address + ", " + this.zipCode + ", " + this.city + "</li>\n            </ul>\n            <p class=\"card-text\"><small class=\"text-muted\">Create this.dateTime</small></p>\n        </div>\n      </div>\n        ";
    };
    return LocationA;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(a, b, c, d, name, e, f, g) {
        var _this = _super.call(this, a, b, c, d, name) || this;
        _this.telephoneNumber = e;
        _this.type = f;
        _this.webAddress = g;
        return _this;
    }
    Restaurant.prototype.render = function () {
        return "\n        <div class=\"card my-4 col-md-6 col-lg-3\" style=\"width: 25rem;\">\n        <img src=\"" + this.img + "\" class=\"card-img-top img-thumbnail d-none d-md-block\" alt=\"" + this.type + " restaurant\">\n        <div class=\"card-body\">\n            <p class=\"card-text font-weight-bold text-center\">" + this.name + " " + this.type + " Restaurant</p> \n            <ul>\n                <li class=\"card-text\">Location: " + this.address + ", " + this.zipCode + ", " + this.city + "</li>\n                <li class=\"card-text\">Contact us under: " + this.telephoneNumber + "</li>\n                <li class=\"card-text\">More information <a href='" + this.webAddress + "'>here</a> </li>\n            </ul>\n        </div>\n      </div>\n        ";
    };
    return Restaurant;
}(LocationA));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(a, b, c, d, name, e, f, g, h, i) {
        var _this = _super.call(this, a, b, c, d, name) || this;
        _this.webAddress = e;
        _this.eventDate = f;
        _this.eventTime = g;
        _this.ticketPrice = h;
        _this.eventLocation = i;
        return _this;
    }
    Events.prototype.render = function () {
        return "\n        <div class=\"card my-4 col-md-6 col-lg-3\" style=\"width: 25rem;\">\n        <img src=\"" + this.img + "\" class=\"card-img-top img-thumbnail d-none d-md-block\" alt=\"" + this.name + " restaurant\">\n        <div class=\"card-body\">\n            <p class=\"card-text font-weight-bold text-center\">" + this.name + "</p>    \n            <ul>\n                <li class=\"card-text\">Location: " + this.eventLocation + " " + this.address + ", " + this.zipCode + ", " + this.city + "</li>\n                <li class=\"card-text\">Event timings: " + this.eventTime + ", " + this.eventDate + "</li>\n                <li class=\"card-text\">Entry fee per person: " + this.ticketPrice + "\u20AC </li>\n                <li class=\"card-text\">More information <a href='" + this.webAddress + "'>here</a> </li>\n            </ul>\n        </div>\n      </div>\n        ";
    };
    return Events;
}(LocationA));
//landmark content
new LocationA('Vienna', '1010', 'St. Charles Church', 'img/Karlskirche.jpg', 'St. Charles Church');
console.log(LocationA);
new LocationA('Vienna', '1030', 'Maxingstraße 13b', 'img/Zoo.jpg', 'Vienna Zoo');
//restaurant content
new Restaurant('Vienna', '1050', 'Kettenbrückengasse 19', 'img/Lemon-leaf.png', 'Lemon Leaf', 
// new Date(
//     Date.UTC(2012, 11, 20, 3, 0, 0)
// ),
'+43(1)5812308', 'Thai', 'http://www.lemonleaf.at/');
new Restaurant('Vienna', '1050', 'Schönbrunner Straße 21', 'img/Sixta.png', 'SIXTA', 
// new Date(
//     Date.UTC(2012, 11, 20, 3, 0, 0)
// ),
'+43 1 58 528 56 or +43 1 58 528 56', 'Traditional Austrian', 'http://www.sixta-restaurant.at/');
// event content
new Events('Vienna', '1150', 'Roland Rainer Platz 1', 'img/Kris-k.jpg', 'Kris Kristofferson', 
// new Date(
//     Date.UTC(2012, 11, 20, 3, 0, 0)
// ),
'http://kriskristofferson.com/', 'Fr., 15.11.2021', '20:00', '58,50', 'Wiener Stadthalle Halle F');
new Events('Vienna', '1150', 'Roland Rainer Platz 1', 'img/Lenny-k.jpg', 'Lenny Kravitz', 
// new Date(
//     Date.UTC(2012, 11, 20, 3, 0, 0)
// ),
'http://www.lennykravitz.com/', 'Sat., 09.112.2029', '19:30', '47,80', 'Wiener Stadthalle Halle D');
// print out class content on to the html file using the arr
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var i = arr_1[_i];
    document.getElementsByClassName('result')[0].innerHTML += "" + i.render();
}
