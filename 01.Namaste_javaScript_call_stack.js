var n = 2;
function square(num){
    var ans = num * num;
    return ans;
}
var square2 = square(n);
var square4 = square(4);

// JavaScript is a synchronous single-threaded language

//                      Execution Context

//         Memory              |                   Code
//     Key Enviroment          |           Thread of Execution
//   Initialising address      |               Store value
//(variable, function etc.)    |            
//                             |
//         pass 1              |                   pass 2
//                             |
//      n = undefined          |                   n = 2