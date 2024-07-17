'use client';
import { State, AppContextType, Action } from '@/types/types';
import {createContext, useContext, ReactNode, useReducer} from 'react';

const initialState: State = {
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_STATE':
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export function useAppContext() {
    const context = useContext(AppContext);
    return context;
}
