import './global.css';
import {JetBrains_Mono} from 'next/font/google';
import tw from '@/utilities/tailwindcss'
import {Toaster} from 'sonner';

const jetBrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    style: ['normal'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});

const metadata = {
    title: 'client',
    description: 'bun-stack',
};

const Layout = ({children}) => {
    return (
        <html lang={'en'}>
            <body className={tw(jetBrainsMono.className, 'text-white bg-neutral-950')}>
                <Toaster position={'top-right'} expand={true} richColors={true} duration={1500} gap={16}/>
                {children}
            </body>
        </html>
    );
};

export {metadata};
export default Layout;