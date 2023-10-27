import { memo, useMemo } from 'react';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import cls from './sidebar.module.scss';
import { SidebarItemType } from '../../model/types/sidebarItemType';
import { SidebarItem } from '../sidebarItem/sidebarItem';
import { getSidebarItems } from '../../model/items/itemList';
import { useSelector } from 'react-redux';


interface sidebarProps {
    className?: string;
}

export const Sidebar = memo((props: sidebarProps) => {
    const {className} = props;
    const items = useSelector(getSidebarItems)

    const itemsList = useMemo(
        () =>
            items.map((item) => (
                    <SidebarItem
                        item={item}
                        key={item.path}
                    />
            )),
        [items],
    )

    return (
        <div className={classNames(cls.sidebar, [className], {})}>
            {itemsList}
        </div>
    );
});
