import { memo } from 'react';
import cls from './App.module.scss';
import { Counter } from '../entities/Counter';
import { MainLayout } from '../shared/layouts/mainLayout/MainLayout';
import { Header } from '../widgets/header/ui/Header';
import { Sidebar } from '../widgets/sidebar/ui/sidebar/Sidebar';
import { Content } from '../widgets/content/ui/Content';
import { Footer } from '../widgets/footer/ui/Footer';
import { BrowserRouter } from 'react-router-dom';

interface AppProps {
    className?: string;
}

export const App = memo((props: AppProps) => {
    const {className} = props;

    return (
        <BrowserRouter>
            <MainLayout
                header={<Header />}
                sidebar={<Sidebar />}
                content={<Content />}
                footer={<Footer />}
            />
        </BrowserRouter>
    );
});
