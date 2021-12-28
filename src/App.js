import React, {
    useState,
    useEffect,
    useRef,
    useMemo,
    useCallback,
} from 'react';
import Alert from './alert/Alert';
import { AlertProvider } from './alert/AlertContext';
import Main from './Main';

function App() {
    return (
        <AlertProvider>
            <div className={'container pt-3'}>
                <Alert />
                <Main toggle={() => {}} />
            </div>
        </AlertProvider>
    );
}

export default App;
