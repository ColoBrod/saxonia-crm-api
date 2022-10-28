import db from './index';
import type { Database } from './index';

class CommonOperations {
  protected db: Database = db;
  protected table: string;

  constructor(table: string) {
    this.table = table;
  }

  public read(id: number) {
    console.log("Table:", this.table);
  }

  public readAll(limit = 0, offset = 0) {
    
  }

  public create(object: Object) {

  }

  public update(id: number, object: Object) {

  }

  public delete(id: number) {

  }

}

export default CommonOperations;