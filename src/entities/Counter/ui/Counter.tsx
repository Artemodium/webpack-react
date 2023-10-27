import { memo, useEffect, useState } from 'react';
import cls from './Counter.module.scss';

interface CounterProps {
    className?: string;
}

export const Counter = memo((props: CounterProps) => {
    const {className} = props;
    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount(10)
    }, [])

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div className={cls.Counter}>
            <div>
                <h1>{count}</h1>
            </div>
            <div>
                <button className={cls.btn} onClick={increment}>increment</button>
                <button className={cls.btn} onClick={decrement}>decrement</button>
            </div>

        </div>
    );
});
