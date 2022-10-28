import CommonOperations from "./CommonOperations";

class Employee extends CommonOperations {
  constructor(table: string) {
    super(table);
  }

  public test() {
    console.log("TABLE:", this.table);
  }
}

const model = new Employee('positions');

export default model;
