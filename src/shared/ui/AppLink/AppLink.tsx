import { memo, ReactNode } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';

interface AppLinkProps extends LinkProps{
    className?: string;
    children?: ReactNode
}

export const AppLink = memo((props: AppLinkProps) => {
    const {className, children, to} = props;

    return (
        <Link className={classNames(cls.AppLink, [className], {})} to={to}>
            {children}
        </Link>
    );
});
