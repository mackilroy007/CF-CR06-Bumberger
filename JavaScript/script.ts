
//empty arry to push content into it
let arr = [];

//base class Location that contains the common denominators
class Location{
    city;
    zipCode;
    address;
    img;
    constructor(a,b,c,d){
        this.city = a;
        this.zipCode = b;
        this.address = c;
        this.img = d;
        
        //push content into the empty array
        arr.push(this);
    }

    //default displayment of content
    render(){
        return `
                ${this.city} ${this.zipCode} ${this.address} ${this.img}
        `;
    }
}