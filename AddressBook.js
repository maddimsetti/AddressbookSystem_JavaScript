/**
 * @description Create Class for AddressBook Contact
 **/
class AddressBook {

    /**
     * @description Create Constructor for Initializing the Properties
     **/  
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zipCode = params[5];
        this.phoneNumber = params[6];
        this.eMailId = params[7];
    }
 
    /**
     * @description Created Getter and Setter Method
     **/
    get firstName() {
        return this._firstName;
    }
    set firstName(firstName) {
        this._firstName = firstName;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        return this._lastName = lastName;
    }
    get address() {
        return this._address;
    }
    set address(address) {
        this._address = address;
    }
    get city() {
        return this._city;
    }
    set city(city) {
        return this._city = city;
    }
    get state() {
        return this._state;
    }
    set state(state) {
        this._state = state;
    }
    get zipCode() {
        return this._zipCode;
    }
    set zipCode(zipCode) {
        return this._zipCode = zipCode;
    }
    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        this._phoneNumber = phoneNumber;
    }
    get eMailId() {
        return this._eMailId;
    }
    set eMailId(eMailId) {
        return this._eMailId = eMailId;
    }
 
    //method
    toString() {
        return "First Name : " +this.firstName+ "\nLast Name : " +this.lastName+ "\nAddress : " +this.address+
                "\nCity : " +this.city+ "\nState : " +this.state+ "\nZip Code : " +this.zipCode+ "\nPhone Number : " +this.phoneNumber+
                "\nEmail Address : " +this.eMailId;
    }
}

console.log("Welcome Message To AddressBook System JavaScript");
let addressBook = new AddressBook("Krishna","Maddimsetti","8-37,Yallavari Veedhi","Gopalapuram","Andhra Pradesh",533274,"9874561234","maddimsetti@gmail.com");
console.log(addressBook.toString());