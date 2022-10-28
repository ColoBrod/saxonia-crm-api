import model from '../model/Employee';
import type { Request, Response } from 'express';

class Employee {
  static async read(req: Request, res: Response) {
    const { id } = req.params;
    const result = await model.read(id);
    res.send(result);
  }

  static async readAll(req: Request, res: Response) {
    let { limit, offset } = req.body;
    limit = limit || 0;
    offset = offset || 0;
    console.log("LIMIT:", limit);
    const result = await model.readAll(limit, offset);
    res.send(result);
  }
  
  static async create(req: Request, res: Response) {
    const obj = req.body;
    const result = await model.create(obj);
    res.send(result);
  }
  
  static update(req: Request, res: Response) {
  
  }
  
  static delete(req: Request, res: Response) {
  
  }
}

export default Employee;