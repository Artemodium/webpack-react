import { memo } from 'react';
import cls from './CounterPage.module.scss';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { Counter } from '../../../entities/Counter';

interface CounterPageProps {
    className?: string;
}

export const CounterPage = memo((props: CounterPageProps) => {
    const {className} = props;

    return (
        <div className={classNames(cls.CounterPage, [className], {})}>
            <Counter />
        </div>
    );
});
