type Operator = {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
};

type Result<T> = {
  [Key in keyof T]: number;
};

let mathOperations: Operator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
};

let mathResult: Result<Operator> = {
  add: mathOperations.add(1, 2),
  subtract: mathOperations.subtract(2, 4),
};

console.log(mathResult.add);

//-------------------------------------------------------------------------------------------

type OptinalOperator = {
  add?: (a: number, b: number) => number;
  subtract?: (a: number, b: number) => number;
};

type NotOptinalResut<T> = {
  [Key in keyof T]-?: number;
};

let mathResultNotOptinal: NotOptinalResut<OptinalOperator> = {
  add: mathOperations.add(1, 2),
  subtract: mathOperations.subtract(2, 4),
};

//-------------------------------------------------------------------------------------------

type OptinalResult<T> = {
  [key in keyof T]?: number;
};

let mathResultOptinal: OptinalResult<Operator> = {
  subtract: mathOperations.subtract(2, 4),
};
