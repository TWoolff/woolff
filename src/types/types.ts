import { Dispatch } from "react";


export type ErrorState = string | null;

export type State = {};

export type Action = {
    type: 'SET_STATE';
    payload?: Partial<State>;
};


export type AppContextType = {
    state: State;
    dispatch: Dispatch<Action>;
}