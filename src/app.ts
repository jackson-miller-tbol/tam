import express from 'express';
import { RequestParameters, add } from '../03-simple-api';
  
const app = express();
const PORT = 3000;
  
app.listen(PORT);
app.get<{}, {}, {},RequestParameters>('/add', (req, res) => add(req, res));