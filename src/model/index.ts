import mysql from 'mysql2';
import type { Query } from 'mysql2'
import cfg from '../config';

import type { Connection, ConnectionOptions } from 'mysql2';

export class Database {
  private connection: Connection;

  constructor(config: ConnectionOptions) {
    this.connection = mysql.createConnection(config);
  }

  public query(sql: string) {
    const con = this.connection;
    return new Promise((resolve, reject) => {
      con.query(sql, (err, results, fields) => {
        resolve(results);
      });
    })
  }
}

const db = new Database({ ...cfg.mysql });

export default db;