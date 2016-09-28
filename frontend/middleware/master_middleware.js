import AsyncMiddleware from './ttodo_middleware';
import { applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

const MasterMiddleware = applyMiddleware(
  AsyncMiddleware,
  createLogger()
);

export default MasterMiddleware;
