import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import mustache from 'mustache-express';
import mainRouter from './routes/index';

dotenv.config();

const app = express();

app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));
app.engine('mustache', mustache());

app.use(express.static(path.join(__dirname, '../public')));

//Rotas
app.use(mainRouter);

app.use((req: Request, res: Response) =>{
    res.status(404).send('Pagina nao encontrada');
})

app.listen(process.env.PORT);
