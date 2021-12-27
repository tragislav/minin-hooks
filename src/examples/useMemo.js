import React, { useState, useEffect, useRef, useMemo } from 'react';

function App() {
    const [number, setNumber] = useState(42);
    const [colored, setColored] = useState(false);

    const styles = useMemo(
        () => ({
            color: colored ? 'darkred' : 'black',
        }),
        [colored]
    );

    function complexCompute(num) {
        console.log('complexCompute');
        let i = 0;
        while (i < 1000000000) i++;
        return num * 2;
    }

    const computed = useMemo(() => complexCompute(number), [number]);

    useEffect(() => {
        console.log('styles changed');
    }, [styles]);

    return (
        <>
            <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
            <button
                className="btn btn-success"
                onClick={() => setNumber((prev) => prev + 1)}
            >
                Добавить
            </button>
            <button
                className="btn btn-danger"
                onClick={() => setNumber((prev) => prev - 1)}
            >
                Убрать
            </button>
            <button
                className="btn btn-warning"
                onClick={() => setColored((prev) => !prev)}
            >
                Изменить
            </button>
        </>
    );
}

export default App;
