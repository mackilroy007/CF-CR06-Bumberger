//empty arry to push content into it
let arr = [];

//base class Location that contains the common denominators
//Location has a conflict with some lib file and needed to be renamed
class LocationA {
    city;
    zipCode;
    address;
    img;
    name;
    constructor(a, b, c, d, name) {
        this.city = a;
        this.zipCode = b;
        this.address = c;
        this.img = d;
        this.name = name;

        //push content into the empty array
        arr.push(this);
    }

    //default displayment of content
    render() {
        return `
        <div class="card" style="width: 25rem;">
        <img src="${this.img}" class="card-img-top" alt="${this.address}">
        <div class="card-body">
            <ul>
                <li class="card-text font-weight-bold">Land mark: ${this.name}</li>
                <li class="card-text">Location : ${this.address}, ${this.zipCode}, ${this.city}</li>
            </ul>
        </div>
      </div>
        `;
    }
}

class Restaurant extends LocationA {
    telephoneNumber;
    type;
    webAddress;
    constructor(a, b, c, d, name, e, f, g,) {
        super(a, b, c, d, name);
        this.telephoneNumber = e;
        this.type = f;
        this.webAddress = g;
    }
    render() {
        return `
        <div class="card " style="width: 25rem;">
        <img src="${this.img}" class="card-img-top" alt="${this.type} restaurant">
        <div class="card-body">
            <ul>
                <li class="card-text font-weight-bold">${this.name} ${this.type} Restaurant</li>
                <li class="card-text">Location : ${this.address}, ${this.zipCode}, ${this.city}</li>
                <li class="card-text">Contact us under: ${this.telephoneNumber}</li>
                <li class="card-text">More information <a href='${this.webAddress}'>here</a> </li>
            </ul>
        </div>
      </div>
        `
    }
}

class Events extends LocationA {
    webAddress;
    eventDate;
    eventTime;
    ticketPrice;
    eventLocation;
    constructor(a, b, c, d, name, e, f, g, h, i) {
        super(a, b, c, d, name);
        this.webAddress=e;
        this.eventDate = f;
        this.eventTime = g;
        this.ticketPrice = h;
        this.eventLocation= i;
    }
    render() {
        return `
        <div class="card" style="width: 25rem;">
        <img src="${this.img}" class="card-img-top" alt="${this.name} restaurant">
        <div class="card-body">
            <ul>
                <li class="card-text font-weight-bold">${this.name}</li>
                <li class="card-text">Location :${this.eventLocation} ${this.address}, ${this.zipCode}, ${this.city}</li>
                <li class="card-text">Event timings: ${this.eventTime}, ${this.eventDate}</li>
                <li class="card-text">Entry fee per person: ${this.ticketPrice}€ </li>
                <li class="card-text">More information <a href='${this.webAddress}'>here</a> </li>
            </ul>
        </div>
      </div>
        `
    }
}

//landmark content
new LocationA(
    'Vienna',
    '1010',
    'St. Charles Church',
    'img/Karlskirche.jpg',
    'St. Charles Church'
);

new LocationA(
    'Vienna',
    '1030',
    'Maxingstraße 13b',
    'img/Zoo.jpg',
    'Vienna Zoo'
);

//restaurant content
new Restaurant(
    'Vienna',
    '1050',
    'Kettenbrückengasse 19',
    'img/Lemon-leaf.png',
    'Lemon Leaf',
    '+43(1)5812308',
    'Thai',
    'www.lemonleaf.at'
);
new Restaurant(
    'Vienna',
    '1050',
    'Schönbrunner Straße 21',
    'img/Sixta.png',
    'SIXTA',
    '+43 1 58 528 56 or +43 1 58 528 56',
    'Traditional Austrian',
    'http://www.sixta-restaurant.at/'
);

// event content
new Events (
    'Vienna',
    '1150',
    'Roland Rainer Platz 1',
    'img/Kris-k.jpg',
    'Kris Kristofferson',
    'http://kriskristofferson.com/',
    'Fr., 15.11.2021',
    '20:00',
    '58,50',
    'Wiener Stadthalle Halle F'
);

new Events (
    'Vienna',
    '1150',
    'Roland Rainer Platz 1',
    'img/Lenny-k.jpg',
    'Lenny Kravitz',
    'www.lennykravitz.com/',
    'Sat., 09.112.2029',
    '19:30',
    '47,80',
    'Wiener Stadthalle Halle D'
);


// print out class content on to the html file using the arr
for (let i of arr) {
    document.getElementsByClassName('result')[0].innerHTML += `${i.render()}`;
}