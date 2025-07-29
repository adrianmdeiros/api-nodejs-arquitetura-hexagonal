import 'reflect-metadata'
import { container } from "tsyringe";

import "./config/repositories";
import "./config/services";
import "./config/controllers";
import "./config/routes";
import "./config/server";

import { HttpServerInputPort } from './application/ports/in/http-server.input.port';

const server = container.resolve<HttpServerInputPort>('HttpServerInputPort')

server.listen()