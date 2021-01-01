import 'reflect-metadata';
import { DotEnv } from '@micra/dot-env';
import { createNamespace } from 'cls-hooked';
import app from '@micra/application';

app.registerEnv(DotEnv);

createNamespace('request');
