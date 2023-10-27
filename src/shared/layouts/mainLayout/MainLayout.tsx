import { memo, ReactElement } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './MainLayout.module.scss';

interface MainLayoutProps {
    className?: string;
    header?: ReactElement
    sidebar?: ReactElement
    content?: ReactElement
    footer?: ReactElement
}

export const MainLayout = memo((props: MainLayoutProps) => {
    const {className, header, content, sidebar, footer} = props;

    return (
        <div className={classNames(cls.MainLayout, [className], {})}>
            <div className={cls.headerContainer}>
                {header}
            </div>
            <div className={cls.contentContainer}>
                {sidebar}
                {content}
            </div>
            <div className={cls.footerContainer}>
                {footer}
            </div>
        </div>
    );
});
