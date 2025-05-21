type User = { name: string; age: number };

type UserKeys = keyof User;

let date: UserKeys = "age";
