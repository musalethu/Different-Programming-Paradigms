
## examples of declarative programming


// function that will return an array
const names = ["kamva", "john", "kayla"];
names.map((names) => console.log(names));


// function that will multiply by two
function multiplyByTwo() {
    let value = [1, 2, 3, 4, 5]
    value = value.map(function (value) {
        return value * 2
    });
    console.log(value);    
}
multiplyByTwo();


// function that will return even numbers
let returnEvenNumber = () => {
  const arr = [3, 2, 17, 4, 10];
  let even = arr.filter((number) => number % 2 == 0);
  console.log("EvenNumbers: " + even);
};
returnEvenNumber();
