import express from 'express';
import cors from 'cors';
import UserRouter from '../routes/UserRoute';
import ProductRouter from '../routes/ProductRoute';
import * as path from 'path';


class App {
  public app: express.Express;

  constructor() {
    this.app = express()
    this.config();
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    }

    this.app.use(accessControl);
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use('/images',express.static(path.resolve('public/')));
    this.app.use('/user', UserRouter )
    this.app.use('/products', ProductRouter)
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    })
  }
}

export { App }

export const { app } = new App();
