/* eslint-disable node/no-extraneous-import */
require('dotenv').config();

import * as httpProxy from 'http-proxy';
import {Request, Response} from 'express';

import * as authHandler from '@crustio/ipfs-w3auth-handler';

const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(authHandler);

const proxy = httpProxy.createProxyServer({});

server.all('*', (req: Request, res: Response) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(
      JSON.stringify({
        Success: true,
      })
  );
});

const port = process.env.PORT || 5050;
console.log(`Listening on port ${port}`);
server.listen(port);
