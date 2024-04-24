// Higher-order function
import { Request, Response, NextFunction } from "express";

const catchAsync = (
  controller: (req: Request, res: Response) => Promise<void>
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    controller(req, res).catch((err: Error) => next(err));
  };
};

export default catchAsync;
