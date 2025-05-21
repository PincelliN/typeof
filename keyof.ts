type User = { name: string; age: number };

type UserKeys = keyof User;

let ageUser: UserKeys = "age";

let nameUser: UserKeys = "name";

function getEl<T extends object, K extends keyof T>(obj: T, key: K) {
  const el = obj[key];
  if (el === undefined || el === null) {
    throw new Error("Accessing undefined or null value.");
  }
  return el;
}

const User2 = { name: "Nik", lastname: "Pin", age: "33" };

getEl(User2, "age");
console.log(getEl(User2, "name"));
