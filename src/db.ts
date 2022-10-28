// import mysql from 'mysql2';
// import cfg from './config';

// import { Sequelize } from 'sequelize';
// import type { Connection, ConnectionOptions } from 'mysql2';

// class Database {
//   private connection: Connection;

//   constructor(config: ConnectionOptions) {
//     this.connection = mysql.createConnection(config);
//   }

//   public query(sql: string): Promise<Array> {
//     const con = this.connection;
//     return new Promise((resolve, reject) => {
//       con.query(sql, (err, results, fields) => {
        
//       });
//     })
//   }
// }

// const db = new Database({ ...cfg.mysql });

// export default db;