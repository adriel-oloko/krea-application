import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useThemeStore } from "@/store/store";
import { useEffect } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
    const theme = useThemeStore((state) => state.theme)
    
    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
    }, [theme]);
    
    return (
        <main className={`bg-white dark:bg-black font-inter ${inter.className}`}>
            <Component {...pageProps} />
        </main>
    )
}
