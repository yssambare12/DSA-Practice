// function prom(complete) {
//     return new Promise(function(resolve,reject){
//         console.log("Fetching data. Please wait")
//         setTimeout(() => {
//             if(complete){
//                 resolve("i am sucessfull");
//             }else{
//                 reject("i am failed")
//             }
//         }, 3000);
//     });
// }

// prom(false).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error)
// });