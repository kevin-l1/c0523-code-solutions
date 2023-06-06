function ExampleConstructor() {
}
console.log('Value of Prototype:', ExampleConstructor.prototype);
console.log('typeof of Prototype:', typeof ExampleConstructor);

const example = new ExampleConstructor();
console.log(example);

const instance = example instanceof ExampleConstructor
console.log(instance);
