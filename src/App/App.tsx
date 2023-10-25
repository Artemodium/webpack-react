import { memo } from 'react';
import cls from './App.module.scss';
import { Counter } from '../Counter/Counter';

interface AppProps {
    className?: string;
}

export const App = memo((props: AppProps) => {
    const {className} = props;

    return (
        <div className={cls.App}>
            <Counter />
        </div>
    );
});
