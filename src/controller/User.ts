
import type { Request, Response } from 'express';

class User {
  static readId(req: Request, res: Response): void {
    const {id} = req.params;
    res.send(id);
  }

  static readAll() {

  }
  
  static create() {
  
  }
  
  static update() {
  
  }
  
  static delete() {
  
  }
}

export default User;