function hello(name) {
  console.log(`Hello, ${name || "World"}!`);
}

function boom() {
  throw new Error("(ノ°Д°）ノ︵ ┻━┻");
}

debugger;

hello();
hello("Barbara");

// boom();
