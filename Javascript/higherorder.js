const firstorder = () => {
    console.log("firstor2222222222deer")
}

const higherorder = a => a();
higherorder(firstorder);

// const firstOrderFunc = () => console.log ('Hello, I am a First order function');
// const higherOrder = ReturnFirstOrderFunc => ReturnFirstOrderFunc();
// higherOrder(firstOrderFunc);