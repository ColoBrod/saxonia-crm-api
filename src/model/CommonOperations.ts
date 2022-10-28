import db from './index';
import type { Database } from './index';
import { resolve } from 'path';

type Row = {
  [key: string]: any;
}

class CommonOperations {
  protected db: Database = db;
  protected table: string;

  constructor(table: string) {
    this.table = table;
  }

  public async read(id: any) {
    const { db, table } = this;
    const result = await db.query(`SELECT * FROM ${table} WHERE id = ${id}`);
    if (result instanceof Array) return result[0];
  }

  public async readAll(limit = 0, offset = 0) {
    const { db, table } = this;
    
    let sql = `SELECT * FROM ${table} `;
    if (limit) sql += `LIMIT ${limit} `;
    if (offset) sql += `OFFSET ${offset}`;
    return await db.query(sql);
  }

  public async create(obj: Row) {
    const { db, table } = this;
    const columns: string[] = Object.keys(obj);
    const values: any[] = columns.map((key: string) => JSON.stringify(obj[key]));
    const columnsStr = columns.join(', ');
    const valuesStr = values.join(', ');
    const sql = `INSERT INTO ${table} (${columnsStr}) VALUES (${valuesStr})`;
    console.log(sql);
    const result = await db.query(sql);
    return result;
  }

  public update(id: number, object: Object) {

  }

  public delete(id: number) {

  }

}

export default CommonOperations;