// import { Sequelize } from "sequelize";
// import type { SequelizeOptions } from '../config';
// import cfg from '../config';

import CommonOperations from "./CommonOperations";

// const connection = new Sequelize({ ...cfg.sequelize });

// const db = mysql.createConnection({ ...cfg.mysql });

// db.query('SELECT * FROM positions', (err, results, fields) => {
//   console.log(results);
// });

 
class User extends CommonOperations {
  constructor(table: string) {
    super(table);
  }

  public test() {
    console.log("TABLE:", this.table);
  }
}

const user = new User('positions');

console.clear();
user.test();