import { SidebarItemType } from '../types/sidebarItemType';

export const getSidebarItems = () => {
    const itemsList: SidebarItemType[] = [
        {
            path: '/',
            text: 'Главная',
        },
        {
            path: '/counter',
            text: 'Счетчик',
        },

    ]
    return itemsList
}