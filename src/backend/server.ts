import bodyParser from 'body-parser';
import express from 'express';
import helmet from 'helmet';
import path from 'path';
import { routes } from './routes';

async function start() {
    const app = express();
    const listenOn = 8001;
    app.use(express.static(path.join(__dirname, '..', 'frontend')));
    app.use(helmet());
    app.use(helmet.referrerPolicy({ policy: 'same-origin' }));
    app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(express.json());

    routes(app._router);
    await new Promise(resolve => {
        app.listen(listenOn, () => {
            resolve();
        });
    });

    console.log('Listening on ', listenOn);
}

start();
