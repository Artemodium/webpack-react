import { memo } from 'react';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import cls from './sidebarItem.module.scss';
import { AppLink } from '../../../../shared/ui/AppLink/AppLink';
import { SidebarItemType } from '../../model/types/sidebarItemType';

interface sidebarItemProps {
    className?: string;
    item: SidebarItemType
}

export const SidebarItem = memo((props: sidebarItemProps) => {
    const {className, item} = props;

    return (
        <AppLink className={cls.sidebarItem} to={item.path}>
            <span>{item.text}</span>
        </AppLink>
    );
});
