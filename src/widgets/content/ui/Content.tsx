import { memo } from 'react';
import { classNames } from '../../../shared/lib/classNames/classNames';
import cls from './content.module.scss';

interface contentProps {
    className?: string;
}

export const Content = memo((props: contentProps) => {
    const {className} = props;

    return (
        <div className={classNames(cls.content, [className], {})}>
            {}
        </div>
    );
});
