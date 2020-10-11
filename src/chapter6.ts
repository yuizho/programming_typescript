type ExistingUser = {
  id: number;
  name: string;
};

type NewUser = {
  name: string;
};

function deleteUser(user: { id?: number; name: string }) {
  delete user.id;
}

let existingUser: ExistingUser = {
  id: 123456,
  name: "user A",
};

deleteUser(existingUser);
// existingUser.id is number type, but in this case the id field is deleted.
console.log(existingUser);

// variation
class Animal {}
class Bird extends Animal {
  chirp() {}
}
class Crow extends Bird {
  caw() {}
}

// Crow <: Bird <: Animal
function chirp(bird: Bird): Bird {
  bird.chirp();
  return bird;
}
//chirp(new Animal()); error!
chirp(new Bird());
chirp(new Crow());

function clone(f: (b: Bird) => Bird): void {
  let parent = new Bird();
  let babyBird = f(parent);
  babyBird.chirp();
}

function birdToBird(b: Bird): Bird {
  return b;
}
clone(birdToBird);

function birdToCrow(d: Bird): Crow {
  return new Crow();
}

clone(birdToCrow);

function birdToAnimal(d: Bird): Animal {
  return new Animal();
}
// this is compile error because Animal Doesn't have Bird's method
// clone(birdToAnimal);

function animalToBird(a: Animal): Bird {
  return new Bird();
}
clone(animalToBird);

function crowToBird(c: Crow): Bird {
  return new Bird();
}
// this is compile error because Corw might have methods which aren't included in Bird
// clone(crowToBird);

type Width = {
  value: number;
};

function parseWidth(width: number | string | null | undefined): Width | null {
  if (width == null) {
    return null;
  }

  if (typeof width == "number") {
    //  width is number type object here
    return { value: width };
  }

  return { value: 0 };
}

type Weekday = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
type Day = Weekday | "Sat" | "Sun";

// undefined type requres to return type. because some case is not covered.
function getNextDay(w: Weekday): Day | undefined {
  switch (w) {
    case "Mon":
      return "Tue";
  }
}
