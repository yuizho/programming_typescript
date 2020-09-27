interface Animal {
  eat(arg: string): void;
}

class Dog implements Animal {
  eat(food: string): void {
    console.log(`the dog eats ${food}`);
  }
}

class Cat implements Animal {
  eat(food: string): void {
    console.log(`the cat eats ${food}`);
  }
}

function giveFood(dog: Dog, food: string) {
  dog.eat(food);
}

giveFood(new Dog(), "apple");
// Cat can set as parameter.because Cat class has same method
giveFood(new Cat(), "apple");
