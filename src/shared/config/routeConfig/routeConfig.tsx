import { RouteProps } from 'react-router-dom'
import { MainPage } from '../../../pages/mainPage';
import { CounterPage } from '../../../pages/CounterPage/ui/CounterPage';

export enum AppRoutes {
    MAIN = 'main',
    COUNTER = 'counter'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.COUNTER]: '/counter'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.COUNTER]: {
        path: RoutePath.counter,
        element: <CounterPage />
    }
}