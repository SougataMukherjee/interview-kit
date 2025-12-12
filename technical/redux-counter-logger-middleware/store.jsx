import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import { logger } from "./middleware";

export const store = createStore(reducer, applyMiddleware(logger));
