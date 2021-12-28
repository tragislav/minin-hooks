import React from 'react';
import { useAlert } from './alert/AlertContext';

export default function Main() {
    const { show } = useAlert();
    return (
        <>
            <h1>Привет в примере с Context</h1>
            <button
                onClick={() => show('Этот текст из main.js')}
                className={'btn btn-success'}
            >
                Показать алерт
            </button>
        </>
    );
}
