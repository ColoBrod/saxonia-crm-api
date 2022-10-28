import CommonOperations from "./CommonOperations";

class Employee extends CommonOperations {
  constructor(table: string) {
    super(table);
  }

  public test() {
  }
}

const model = new Employee('employee');

export default model;
