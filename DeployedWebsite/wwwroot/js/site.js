function getData() {
    setTimeout(() => {
        console.log("data1");
    }, 3000);
}

//javascript callback method practice.
function getData1() {
    console.log(name1);
    getData("data1");
    getData2();
}
function getData2() {
    console.log("data2");
}

function showError() {
    let name1 = "daniyal";
    name1 = "3";
    console.log("You entered an inavalid value", name1);

}














//function myFunction(x, y) {
   
//    let z = x + y;
//   alert( z);
//}

//function displayobject() {
//    const person = {
//        name: "John",
//        age: 30,
//        city: "New York"
//    };
//    const myArray = Object.values(person);
//    alert(myArray);
//}

//function displayObjectPropertyAndValue() {
//    const fruits = { Banana: 300, Apple: 250, Melon: 150 }; // corrected capitalization of 'Melon'
//    for (let [fruit, value] of Object.entries(fruits)) { // corrected Object.entries()
//        alert(fruit + " " + value);
//    }
//}
//function searchIndexOf() {
//    let text = "Please locate where 'locate' occurs!";
//    let index = text.search("locate");
//}

//function getPerson() {
//    const name = { FirstName: "daniyal", LastName: "Ihsan" };
    
//    alert(name.FullName);
//}

