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
        let firstNameRegex = RegExp("^[A-Z]{1}[a-z]{3,}$");
        if(firstNameRegex.test(firstName)) {
            this._firstName = firstName;
        } else {
            throw "First Name is Incorrect. Please Enter Valid First Name";
        }
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        let lastNameRegex = RegExp("^[A-Z]{1}[a-z]{3,}$");
        if(lastNameRegex.test(lastName)) {
            this._lastName = lastName;
        } else {
            throw "Last Name is Incorrect. Please Enter Valid Last Name";
        }
    }
    get address() {
        return this._address;
    }
    set address(address) {
        let addressRegex = RegExp("^[A-Z]{1}[a-zA-z0-9]{4,}$");
        if(addressRegex.test(address)) {
            this._address = address;
        } else {
            throw "Address is Incorrect. Please Enter Valid Address";
        }
    }
    get city() {
        return this._city;
    }
    set city(city) {
        let cityRegex = RegExp("^[A-Z]{1}[a-z]{4,}$");
        if(cityRegex.test(city)) {
            this._city = city;
        } else {
            throw "City is Incorrect. Please Enter Valid City";
        }
    }
    get state() {
        return this._state;
    }
    set state(state) {
        let stateRegex = RegExp("^[A-Z]{1}[a-zA-z]{3,}$");
        if(stateRegex.test(state)) {
            this._state = state;
        } else {
            throw "State is Incorrect. Please Enter Valid State";
        }
    }
    get zipCode() {
        return this._zipCode;
    }
    set zipCode(zipCode) {
        let zipCodeRegex = RegExp("^[1-9]{1}[0-9]{5}$");
        if(zipCodeRegex.test(zipCode)) {
            this._zipCode = zipCode;
        } else {
            throw "Zip Code is Incorrect. Please Enter Valid Zip Code";
        }
    }
    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp("^[1-9]{2} [1-9][0-9]{9}$");
        if(phoneNumberRegex.test(phoneNumber)) {
            this._phoneNumber = phoneNumber;
        } else {
            throw "Phone Number is Incorrect. Please Enter Valid Phone Number";
        }
    }
    get eMailId() {
        return this._eMailId;
    }
    set eMailId(eMailId) {
        let eMailIdRegex = RegExp("^[a-z0-9]+(([.+-_][a-z0-9])?)+(@[a-z0-9]{1})+(.[a-z]{3,4})+((.[a-z]{2})?)$");
        if(eMailIdRegex.test(eMailId)) {
            this._eMailId = eMailId;
        } else {
            throw "Email Address is Incorrect. Please Enter Valid Email Address";
        }
    }
 
    //method
    toString() {
        return "First Name : " +this.firstName+ "\nLast Name : " +this.lastName+ "\nAddress : " +this.address+
                "\nCity : " +this.city+ "\nState : " +this.state+ "\nZip Code : " +this.zipCode+ "\nPhone Number : " +this.phoneNumber+
                "\nEmail Address : " +this.eMailId;
    }
}

console.log("Welcome Message To AddressBook System JavaScript"); //Welcome Message to AddressBook

let addressBook = new Array();   //Intialize the Array List

/**
 * @description Created function to Add Contacts to Array List
 **/
function addContact(firstName,lastName,address,city,state,zipCode,phoneNumber,eMailId) {
    let contacts = new AddressBook(firstName,lastName,address,city,state,zipCode,phoneNumber,eMailId);
    addressBook.push(contacts);  //Adding Contacts to ArrayList
}

try {
    addContact("Krishna","Maddimsetti","YallavariVeedhi","Gopalapuram","AndhraPradesh",533274,"91 9874561234","maddimsetti@gmail.com");
    addContact("Balarama","Maddimsetti","NearRamalayam","Gopalapuram","AndhraPradesh",545478,"91 9871211234","maddimsetti143@gmail.com");
    addContact("Pallavi","Krishna","NearSaiBabaTemple","Ravulapalem","AndhraPradesh",533147,"91 4567891234","pallavi@gmail.com");
    console.log(addressBook.toString());
} catch(e) {
    console.error(e);
}

/**
 * @description Find out the Contact that we want to Update
 **/
const result = addressBook.find( ({ firstName }) => firstName === "Pallavi");
console.log("Before Updation of the Contact : \n");
console.log(result);
result.firstName = "Pallavikrishna";
result.city = "Ubalanka";
console.log("After Updation Of the Contact :\n " +result.toString());
