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
    //Checking Dulpicate Contact 
    if(addressBook.some(duplicate=> duplicate.firstName == firstName && duplicate.lastName == lastName)){
        console.log("The Contact " +addressBook.firstName+ " is already exist in AddressBook");
        return;
    }
    addressBook.push(contacts);  //Adding Contacts to ArrayList
}

try {
    addContact("Krishna","Maddimsetti","YallavariVeedhi","Gopalapuram","AndhraPradesh",533274,"91 9874561234","maddimsetti@gmail.com");
    addContact("Balarama","Maddimsetti","NearRamalayam","Gopalapuram","AndhraPradesh",545478,"91 9871211234","maddimsetti143@gmail.com");
    addContact("Pallavi","Krishna","NearSaiBabaTemple","Ravulapalem","AndhraPradesh",533147,"91 4567891234","pallavi@gmail.com");
    addContact("Balarama","Krishna","NearRamalayam","Gopalapuram","AndhraPradesh",545478,"91 9871211234","maddimsetti143@gmail.com");
    console.log(addressBook.toString());
} catch(e) {
    console.error(e);
}

/**
 * @description Find out the Contact that we want to Update and then Updated
 **/
const result = addressBook.find( ({ firstName }) => firstName === "Pallavi");
console.log("Before Updation of the Contact : \n");
console.log(result);
result.firstName = "Pallavikrishna";
result.city = "Ubalanka";
console.log("After Updation Of the Contact :\n " +result.toString());

/**
 * @description Find out the Contact that we want to delete and then Deleted
 **/
const result1 = addressBook.find( ({ firstName }) => firstName === "Balarama");
const index = addressBook.indexOf(result1);
addressBook.splice(index, 1);     //Deleting the contact
console.log("After Deletion, The AddressBook Contact List : " +addressBook.toString());

/**
 * @description Find the numbers of contacts in the AddressBook using Reduce function
 **/
 let count = addressBook.reduce(count => count += 1, 0);
 console.log("Number Of Contacts in the AddressBook is : " +count);

 /**
 * @description Find the contacts in the AddressBook By Search with City or State
 **/
const filterArray = (array, fields, value) => {
    fields = Array.isArray(fields) ? fields : [fields];
    return array.filter((item) => fields.some((field) => item[field] === value));
}
console.log("The Contacts in AddressBook found by Searching the State : \n" ); //By State
console.log(filterArray(addressBook,"state", "AndhraPradesh"));
console.log("The Contacts in AddressBook found by Searching the City : \n" );  // By City
console.log(filterArray(addressBook,"city","Gopalapuram"));

/**
 * @description Find the contacts in the AddressBook To View By  City or State
 **/
const result2 = addressBook.filter( ({ city , state }) => city === "Ravulapalem" || state == "AndhraPradesh");
console.log(result2);

/**
 * @description To get number of contact persons i.e. count by City or State
 **/
 const result3 = addressBook.filter( ({ city , state }) => city === "Gopalapuram" || state == "AndhraPradesh").reduce((contactCount,{city,state}) => contactCount += 1, 0);
 console.log("The Number of Contacts i.e.,Count by State or City in AddressBook : " +result3);

/**
 * @description To sort the entries in the Address book alphabetically by Person’s name
**/
console.log("The Contacts Using FirstName to Sort in  Alphabetical order : \n" +addressBook.sort());