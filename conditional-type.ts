type StingArray = string[];
let text = 1;

type GetElementType<T> = T extends any[] ? T[number] : never;

type Example1 = GetElementType<StingArray>;

type Example2 = GetElementType<typeof text>;

type FullNamePerson = { name: string; lastname: string };

type FullNameOrNothing<T> = T extends FullNamePerson ? string : never;

function getFullname<T extends object>(person: T): FullNameOrNothing<T> {
  if (
    "name" in person &&
    "lastname" in person &&
    person.name &&
    person.lastname
  ) {
    return `${person.name} ${person.lastname}` as FullNameOrNothing<T>;
  }
  throw new Error("No valid name/lastname");
}

const name1 = getFullname({});

const name2 = getFullname({ name: "Nik", lastname: "Pin" });
