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
// but if Dog has private field, Cat can not set here.
giveFood(new Cat(), "apple");

// -------- design pattern
// factory
type Shoe = {
  purpose: string;
};

class BalletFlat implements Shoe {
  purpose = "dancing";
}

class Boot implements Shoe {
  purpose = "woodcutting";
}

class Sneaker implements Shoe {
  purpose = "walking";
}

let Shoe = {
  create(type: "balletFlat" | "boot" | "sneaker"): Shoe {
    switch (type) {
      case "balletFlat":
        return new BalletFlat();
      case "boot":
        return new Boot();
      case "sneaker":
        return new Sneaker();
    }
  },
};

console.log(Shoe.create("boot").purpose);
