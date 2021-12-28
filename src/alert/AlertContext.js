import React, { useContext, useReducer } from 'react';

const AlertContext = React.createContext();

export const useAlert = () => {
    return useContext(AlertContext);
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SHOW':
            return { ...state, visible: true, text: action.text };
        case 'HIDE':
            return { ...state, visible: false };
        default:
            return state;
    }
};

export const AlertProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        visible: false,
        text: '',
    });

    const show = (text) => dispatch({ type: 'SHOW', text });
    const hide = () => dispatch({ type: 'HIDE' });

    return (
        <AlertContext.Provider
            value={{
                visible: state.visible,
                text: state.text,
                show,
                hide,
            }}
        >
            {children}
        </AlertContext.Provider>
    );
};
