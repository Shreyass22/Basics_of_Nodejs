// const sqaure = {       
//     area : (a) => (a*a),
//     perimeter : (a) => (4*a) 
// }

const sqaure = require("./square"); // importing  module from another file

const calsquare = a => {
    console.log(`This is the square of the number ${a} is : ` + sqaure.area(a));
    console.log(`This is the perimeter of the number ${a} is : ` + sqaure.perimeter(a));
}

calsquare(5); // calling the funcion.
