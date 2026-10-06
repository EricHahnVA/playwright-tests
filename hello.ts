let user_name: string = "Alex";
let age: number = 25;

console.log(user_name);
console.log(age);

function greet(user_name: string): string {
  return "Hello, " + user_name + "!";
}

console.log(greet("Alex"));