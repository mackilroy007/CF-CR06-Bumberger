//empty arry to push content into it
var arr = [];
//base class Location that contains the common denominators
var Location = /** @class */ (function () {
    function Location(a, b, c, d) {
        this.city = a;
        this.zipCode = b;
        this.address = c;
        this.img = d;
        //push content into the empty array
        arr.push(this);
    }
    //default displayment of content
    Location.prototype.render = function () {
        return "\n                " + this.city + " " + this.zipCode + " " + this.address + " " + this.img + "\n        ";
    };
    return Location;
}());
