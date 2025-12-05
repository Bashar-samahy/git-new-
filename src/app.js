function greet(name){
    return `hello, ${name}!`;
}

module.export = greet

if (requestAnimationFrame.main === module) {

    console.log(greet("world"));

}