// the concept of the nested functions scopes

let a = 10;
function outer() {
    let b = 40;
    function inner() {
        let c = 80;
        console.log(a, b, c);
    }
    inner();
}
outer();

