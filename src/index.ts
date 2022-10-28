// Modules
import express from 'express';
import router from './route';

// Types
import type { Express } from 'express';

// Config
import cfg from './config';

export const app: Express = express();

// Middleware
// app.use('/dist', express.static(`${__dirname}/dist`));
app.use(express.json()); // required for parsing requests body

app.use('/api', router);

// const router = require('./route');
// app.use('/api', router);

// process.env.PORT || 3000
// console.clear();
app.listen(cfg.port, () => console.log(`Listening on port ${cfg.port}`));

