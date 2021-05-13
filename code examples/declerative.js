
// examples of declarative programming

const names = ["kamva", "john", "kayla"];
names.map((names) => console.log(names));

function multiplyByTwo() {
    let value = [1, 2, 3, 4, 5]
    value = value.map(function (value) {
        return value * 2
    });
    console.log(value);
     
}
multiplyByTwo(); 