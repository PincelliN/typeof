function add(a: number, b: number) {
  return a + b;
}

type Addfn = typeof add;

type ReturnValueType<T> = T extends (...arg: any[]) => infer RV ? RV : never;

type AddfnReturnValyueType = ReturnValueType<Addfn>;
