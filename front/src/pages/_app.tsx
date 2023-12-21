import UserProvider from "@/contexts/userContext";
import "@/styles/globals.css";
import {NextUIProvider} from "@nextui-org/react";
import type { AppProps } from "next/app";

require('dotenv').config();




export default function App({Component, pageProps}: AppProps) {
    return (
        <NextUIProvider>
            <UserProvider>
                    <Component {...pageProps} />
            </UserProvider>
        </NextUIProvider>
    );
}
