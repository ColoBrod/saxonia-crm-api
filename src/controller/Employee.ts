import model from '../model/Employee';
import type { Request, Response } from 'express';

class Employee {
  static read(req: Request, res: Response): void {
    const {id} = req.params;
    res.send(id);
  }

  static readAll(req: Request, res: Response): void {

  }
  
  static create(req: Request, res: Response): void {
  
  }
  
  static update(req: Request, res: Response): void {
  
  }
  
  static delete(req: Request, res: Response): void {
  
  }
}

export default Employee;