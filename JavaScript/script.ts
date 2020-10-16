//empty arry to push content into it
let arr = [];

//base class Location that contains the common denominators
//Location has a conflict with some lib file and needed to be renamed
class LocationA {
    city;
    zipCode;
    address;
    img;
    constructor(a, b, c, d) {
        this.city = a;
        this.zipCode = b;
        this.address = c;
        this.img = d;

        //push content into the empty array
        arr.push(this);
    }

    //default displayment of content
    render() {
        return `
                ${this.city} ${this.zipCode} ${this.address} ${this.img}
        `;
    }
}

class Restaurant extends LocationA {
    telephoneNumber = '';
    type = '';
    webAddress ='';
    constructor(a, b, c, d, e, f, g,) {
        super(a, b, c, d);
        this.telephoneNumber = e;
        this.type = f;
        this.webAddress = g;
    }
    render(){
        return`
        <div class="card" style="width: 20rem;">
        <img src="${this.img}" class="card-img-top" alt="${this.type} restaurant">
        <div class="card-body">
            <ul>
                <li class="card-text font-weight-bold">${this.type} Restaurant</li>
                <li class="card-text">Location : ${this.address}, ${this.zipCode}, ${this.city}</li>
                <li class="card-text">Contact us under: ${this.telephoneNumber} Restaurant</li>
                <li class="card-text">More info under: ${this.webAddress} Restaurant</li>
            </ul>
        </div>
      </div>
        `
    }
}

//restaurant content
new Restaurant(
    'Vienna',
    '1050',
    'Kettenbrückengasse 19',
    'img/Lemon-leaf.png',
    '+43(1)5812308',
    'Lemon Leaf Thai',
    'www.lemonleaf.at'
);
new Restaurant(
    'Vienna',
    '1050',
    'Schönbrunner Straße 21',
    'img/Sixta.png',
    '+43 1 58 528 56 or +43 1 58 528 56',
    'SIXTA Traditional Austrian',
    'http://www.sixta-restaurant.at/'
);

console.table(arr);

for (let i of arr) {
    document.getElementsByClassName('result')[0].innerHTML += `${i.render()}`;
  }