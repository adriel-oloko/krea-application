import Link from "next/link"
import { DesktopNavButton, OpenButton } from "./reUsable"
import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import { useThemeStore } from "@/store/store"
import { MobileSideBarApps } from "./mobileSideBarApps"

type HeaderProps = {
    theme: string;
    changeTheme: () => void;
}

type NavbarProps = {
    closeFunc: () => void;
};

type HomeHoverButtonProps = {
    title: string;
    image: string
}

export default function Header () {
    const [isNav, setIsNav] = useState<boolean>(false)
    const [isHomeMenu, setIsHomeMenu] = useState<boolean>(false)

    const theme = useThemeStore((state) => state.theme)
    const toggleTheme = useThemeStore((state) => state.toggleTheme);


    return (
        <header className="relative md:fixed z-50 -top-0 w-full mx-auto grid grid-cols-2 lg:grid-cols-3 items-center bg-white p-4 text-[#a3a3a3] dark:bg-black/50 backdrop-blur-2xl dark:text-[#737373] md:px-8">
            <button title="menu open" onClick={ () => setIsNav((prev) => !prev)} type="button" className="lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="h-5 w-5 iconify iconify--mynaui" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M9.367 2.25h5.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v5.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057H9.367c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.367c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M6.834 3.802c-.62.05-1.005.147-1.31.302a3.25 3.25 0 0 0-1.42 1.42c-.155.305-.251.69-.302 1.31c-.051.63-.052 1.434-.052 2.566v5.2c0 1.133 0 1.937.052 2.566c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.392.032.851.044 1.416.05V3.752c-.565.005-1.024.017-1.416.049"></path></svg></button>
            
            <div className="hidden lg:flex gap-8 items-center text-black dark:text-white">
                <Link href={'#'}><svg aria-label="Krea Logo" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="size-6"><path d="M8.34 1.266c1.766-.124 3.324 1.105 3.551 2.802.216 1.612-.887 3.171-2.545 3.536-.415.092-.877.066-1.317.122a4.63 4.63 0 0 0-2.748 1.34l-.008.004-.01-.001-.006-.005-.003-.009q0-.009.005-.016a.04.04 0 0 0 .007-.022 438 438 0 0 1-.01-4.541c.003-1.68 1.33-3.086 3.085-3.21" className="svelte-qzh0aw"></path><path d="M8.526 15.305c-2.247-.018-3.858-2.23-3.076-4.3a3.31 3.31 0 0 1 2.757-2.11c.384-.04.845-.03 1.215-.098 1.9-.353 3.368-1.806 3.665-3.657.066-.41.031-.9.128-1.335.449-2.016 2.759-3.147 4.699-2.236 1.011.476 1.69 1.374 1.857 2.447q.051.33.034.818c-.22 5.842-5.21 10.519-11.279 10.47m2.831.93a.04.04 0 0 1-.021-.02l-.001-.006.002-.006q0-.003.003-.004l.006-.003q3.458-.792 5.992-3.185.045-.042.083.007c.27.357.554.74.78 1.106a10.6 10.6 0 0 1 1.585 4.89q.037.53.023.819c-.084 1.705-1.51 3.08-3.31 3.09-1.592.01-2.992-1.077-3.294-2.597-.072-.36-.05-.858-.11-1.238q-.282-1.755-1.715-2.84zm-3.369 6.64c-1.353-.235-2.441-1.286-2.684-2.593a5 5 0 0 1-.05-.817V15.14q0-.021.016-.007c.884.786 1.814 1.266 3.028 1.346l.326.01c1.581.051 2.92 1.087 3.229 2.592.457 2.225-1.557 4.195-3.865 3.793" className="svelte-qzh0aw"></path></svg></Link>
                <div className="flex gap-2 items-center">
                    <Image src={'/gradient-blob.svg'} width={128} height={128} className="size-6" alt="" />
                    <span className="font-medium text-[#a3a3a3] w-32 truncate">adrielloks@gmail.com</span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" className="rotate-90 translate-y-0.25"><path d="m517.85-480-184-184L376-706.15 602.15-480 376-253.85 333.85-296l184-184Z"/></svg>
                </div>
            </div>

            <div className="heroHeaderNav bg-primary-100 rounded-2xl p-2 hidden lg:grid grid-cols-7 gap-0 dark:bg-primary-850 w-fit mx-auto text-black dark:text-white relative z-50 font-inter">
                <button title="Home" type="button" onClick={ () => setIsHomeMenu((prev) => !prev) } className="bg-white py-5 px-6 w-fit relative rounded-xl shadow-[0_1px_4px_0px_rgba(0,0,0,0.075)] dark:shadow-none dark:text-black"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 11.7354C2 10.4141 2 9.75338 2.18958 9.15972C2.35736 8.63437 2.63195 8.14939 2.99611 7.73524C3.40763 7.26724 3.97416 6.92732 5.10723 6.24748L8.70722 4.08748C9.90443 3.36916 10.503 3.01 11.142 2.86967C11.7073 2.74555 12.2927 2.74555 12.858 2.86967C13.497 3.01 14.0956 3.36916 15.2928 4.08748L18.8928 6.24748C20.0258 6.92732 20.5924 7.26724 21.0039 7.73524C21.3681 8.14939 21.6426 8.63437 21.8104 9.15972C22 9.75338 22 10.4141 22 11.7354V18.9118C22 20.0319 22 20.592 21.782 21.0198C21.5903 21.3961 21.2843 21.7021 20.908 21.8938C20.4802 22.1118 19.9201 22.1118 18.8 22.1118H18.2C17.0799 22.1118 16.5198 22.1118 16.092 21.8938C15.7157 21.7021 15.4097 21.3961 15.218 21.0198C15 20.592 15 20.0319 15 18.9118V15.7118C15 15.1518 15 14.8717 14.891 14.6578C14.7951 14.4697 14.6422 14.3167 14.454 14.2208C14.2401 14.1118 13.9601 14.1118 13.4 14.1118H10.6C10.0399 14.1118 9.75992 14.1118 9.54601 14.2208C9.35785 14.3167 9.20487 14.4697 9.10899 14.6578C9 14.8717 9 15.1518 9 15.7118V18.9118C9 20.0319 9 20.592 8.78201 21.0198C8.59027 21.3961 8.28431 21.7021 7.90798 21.8938C7.48016 22.1118 6.9201 22.1118 5.8 22.1118H5.2C4.0799 22.1118 3.51984 22.1118 3.09202 21.8938C2.71569 21.7021 2.40973 21.3961 2.21799 21.0198C2 20.592 2 20.0319 2 18.9118V11.7354Z" fill="currentColor"></path></svg></button>
                <button title="Gallery" type="button" className="py-5 px-6 w-fit relative rounded-xl dark:shadow-none"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10.4763 9.85043C10.4763 10.8104 9.69763 11.589 8.73768 11.589C7.77772 11.589 7 10.8104 7 9.85043C7 8.89049 7.77772 8.11182 8.73768 8.11182C9.69763 8.11182 10.4754 8.88955 10.4763 9.84856V9.85043Z" fill="currentColor"></path><rect x="2.75" y="3.86182" width="18.5" height="16.5" rx="3.25" stroke="currentColor" strokeWidth="1.5"></rect><path d="M15.758 13.1118C17.5271 13.1118 19.1544 14.6938 20 15.4766V19.1118H4C4 19.1118 5.29914 17.0464 6.6586 16.0349C8.01806 15.0235 9.56678 16.6015 11.2673 16.6015C12.9687 16.6015 13.9898 13.1118 15.758 13.1118Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>
                <button title="Video" type="button" className="py-5 px-6 w-fit relative rounded-xl dark:shadow-none"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M22.263 7.17399C21.637 6.41199 20.506 6.30099 19.743 6.92499L18.5167 7.92894C18.2593 8.13966 18.1409 8.46318 18.1571 8.79542C18.1589 8.83351 18.16 8.872 18.16 8.91099V15.312C18.16 15.3533 18.1588 15.3941 18.1568 15.4344C18.14 15.7656 18.2584 16.0881 18.5146 16.2987L19.729 17.297C20.045 17.558 20.448 17.701 20.863 17.701C21.849 17.701 22.654 16.899 22.657 15.912L22.669 8.31399C22.67 7.89899 22.527 7.49299 22.263 7.17399Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M12.6444 5.11182H5.68203C3.08003 5.11182 1.33203 6.93982 1.33203 9.66182V15.0618C1.33203 17.7838 3.08003 19.6118 5.68203 19.6118H12.6434C15.2474 19.6118 16.9964 17.7838 16.9964 15.0618V9.66182C16.9964 6.93982 15.2474 5.11182 12.6444 5.11182Z" fill="currentColor"></path><rect x="1" y="5.11182" width="16" height="15" rx="4" fill="currentColor"></rect></svg></button>
                <button title="Enhancer" type="button" className="py-5 px-6 w-fit relative rounded-xl dark:shadow-none"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.49935 13.0083C4.34395 13.5194 3.94455 13.9195 3.43425 14.075C3.94455 14.2306 4.34395 14.6306 4.49935 15.1417C4.65465 14.6306 5.05405 14.2306 5.56445 14.075C5.05405 13.9195 4.65465 13.5194 4.49935 13.0083Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.3704 5.57373C16.215 6.08483 15.8156 6.48493 15.3053 6.64043C15.8156 6.79603 16.215 7.19603 16.3704 7.70713C16.5257 7.19603 16.9251 6.79603 17.4355 6.64043C16.9251 6.48493 16.5257 6.08483 16.3704 5.57373Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.82105 18.4485H7.83105" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12.8125 3.69873H12.8025" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><rect x="3.3868" y="5.14091" width="2.5" height="22.0199" rx="1.25" transform="rotate(-44.5361 3.3868 5.14091)" stroke="currentColor" strokeWidth="1.5"></rect><path d="M8.4043 11.3093L11.2555 8.50389L20.2713 17.6668C21.046 18.4542 21.0357 19.7204 20.2484 20.4951C19.461 21.2698 18.1947 21.2596 17.42 20.4722L8.4043 11.3093Z" fill="currentColor"></path></svg></button>
                <button title="Realtime" type="button" className="py-5 px-6 w-fit relative rounded-xl dark:shadow-none"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9472 14.4612C14.6244 14.8306 14.4629 15.0153 14.2819 15.1777C14.121 15.3219 13.9487 15.4529 13.7667 15.5693C13.5618 15.7004 13.3384 15.8077 12.8914 16.0223C11.8174 16.538 11.2804 16.7959 10.9271 16.705C10.6205 16.626 10.3693 16.4065 10.25 16.1132C10.1126 15.7753 10.2963 15.2086 10.6635 14.0752C10.8164 13.6035 10.8928 13.3677 10.9952 13.1471C11.0863 12.9511 11.193 12.7629 11.3144 12.5842C11.4511 12.383 11.6125 12.1983 11.9354 11.8289L17.0023 6.03138C17.076 5.94704 17.1129 5.90487 17.1574 5.88701C17.1966 5.87129 17.2398 5.86839 17.2807 5.87871C17.3273 5.89045 17.3695 5.92731 17.4538 6.00102L19.9838 8.21213C20.0681 8.28584 20.1103 8.3227 20.1281 8.36727C20.1438 8.40647 20.1467 8.44964 20.1364 8.4906C20.1247 8.53715 20.0878 8.57932 20.0141 8.66366L14.9472 14.4612Z" fill="currentColor"></path><path d="M20.8883 7.65066C20.8146 7.73499 20.7778 7.77716 20.7332 7.79503C20.694 7.81075 20.6508 7.81365 20.6099 7.80333C20.5633 7.79159 20.5211 7.75473 20.4368 7.68102L17.9096 5.47231C17.8253 5.3986 17.7831 5.36175 17.7652 5.31718C17.7495 5.27798 17.7466 5.23481 17.7569 5.19385C17.7687 5.14729 17.8055 5.10512 17.8792 5.02079L18.3305 4.50446C18.6354 4.15563 18.7878 3.98121 18.9511 3.87147C19.3968 3.57199 19.9685 3.53354 20.4502 3.77066C20.6267 3.85755 20.8012 4.00999 21.15 4.31486C21.4988 4.61972 21.6732 4.77216 21.783 4.93546C22.0824 5.3811 22.1209 5.95283 21.8838 6.43456C21.7969 6.61108 21.6444 6.7855 21.3396 7.13432L20.8883 7.65066Z" fill="currentColor"></path><path d="M9.5 18C9.5 18 7.2314 20.6818 6 20C4.7686 19.3182 8.43957 14.8136 8.43957 13.0357C8.43957 12.0802 5.54026 16.2053 3.75331 16.7185C0.87539 17.5452 7.17108 5 7.17108 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></button>
                <button title="Edit" type="button" className="py-5 px-6 w-fit relative rounded-xl dark:shadow-none"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.854L12 5.51603" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path><circle cx="12.0001" cy="8.17831" r="2.12118" stroke="currentColor" strokeWidth="1.5"></circle><path d="M10.4869 10.1001L7.45996 21.4302" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path><path d="M17.2646 21.2366C17.3715 21.6368 17.1338 22.0479 16.7336 22.1548C16.3334 22.2617 15.9224 22.0239 15.8155 21.6238L17.2646 21.2366ZM14.2377 9.90652L17.2646 21.2366L15.8155 21.6238L12.7885 10.2937L14.2377 9.90652Z" fill="currentColor"></path><path d="M6.42188 16.1118C6.42188 16.1118 7.91228 17.3606 12.0006 17.3606C16.0889 17.3606 17.5793 16.1118 17.5793 16.1118" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path></svg></button>
                <button title="Assets" type="button" className="py-5 px-6 w-fit relative rounded-xl dark:shadow-none"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3 5C3 4.45 3.45 4 4 4H9.17C9.58 4 9.95 4.21 10.14 4.55L10.86 5.89C11.05 6.23 11.42 6.44 11.83 6.44H20C20.55 6.44 21 6.89 21 7.44V11C21 11.55 20.55 12 20 12H4C3.45 12 3 11.55 3 11V5Z"></path><rect x="3" y="7" width="18" height="12" rx="1"></rect><path d="M3.15 18.5C3.08 18.15 3.08 17.65 3.08 17H20.92C20.92 17.65 20.92 18.15 20.85 18.5H3.15Z" opacity="0.3"></path><path d="M5 20H19C19.8 20 20.2 20 20.5 19.8C20.7 19.7 20.9 19.5 21 19.2C21.05 19.1 21.08 19 21.1 18.5H2.9C2.92 19 2.95 19.1 3 19.2C3.1 19.5 3.3 19.7 3.5 19.8C3.8 20 4.2 20 5 20Z" opacity="0.5"></path></svg></button>      
            </div>
            
            <AnimatePresence>
                { isHomeMenu && <HomeHover /> }
            </AnimatePresence>

            <div className="flex gap-2 justify-end items-center text-black dark:text-white">                
                <button title={'gallery'} type="button" className="hover:bg-primary-150 focus:ring-1 rounded-xl bg-primary-100 p-2 xl:px-4 py-2 h-fit w-fit flex gap-2 items-center relative dark:bg-primary-850 dark:hover:bg-primary-850">
                    <svg width="24px" height="24px" className="size-4.5 lg:size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10.4763 9.85043C10.4763 10.8104 9.69763 11.589 8.73768 11.589C7.77772 11.589 7 10.8104 7 9.85043C7 8.89049 7.77772 8.11182 8.73768 8.11182C9.69763 8.11182 10.4754 8.88955 10.4763 9.84856V9.85043Z" fill="currentColor"></path><rect x="2.75" y="3.86182" width="18.5" height="16.5" rx="3.25" stroke="currentColor" strokeWidth="1.5"></rect><path d="M15.758 13.1118C17.5271 13.1118 19.1544 14.6938 20 15.4766V19.1118H4C4 19.1118 5.29914 17.0464 6.6586 16.0349C8.01806 15.0235 9.56678 16.6015 11.2673 16.6015C12.9687 16.6015 13.9898 13.1118 15.758 13.1118Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    <span className="hidden xl:inline-block translate-y-0 font-medium">Gallery</span>
                </button>

                <button title={'support'} type="button" className="hover:bg-primary-150 focus:ring-1 rounded-xl bg-primary-100 p-2 xl:px-4 py-2 h-fit w-fit flex gap-2 items-center relative dark:bg-primary-850 dark:hover:bg-primary-850">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="size-4.5 lg:size-5.5" fill="currentColor"><path d="M480-40v-80h280v-40H600v-320h160v-40q0-116-82-198t-198-82q-116 0-198 82t-82 198v40h160v320H200q-33 0-56.5-23.5T120-240v-280q0-74 28.5-139.5T226-774q49-49 114.5-77.5T480-880q74 0 139.5 28.5T734-774q49 49 77.5 114.5T840-520v400q0 33-23.5 56.5T760-40H480ZM200-240h80v-160h-80v160Zm480 0h80v-160h-80v160ZM200-400h80-80Zm480 0h80-80Z"/></svg>
                    <span className="hidden xl:inline-block translate-y-0 font-medium">Support</span>
                </button>

                <button title={'notification'} type="button" className="hover:bg-primary-150 focus:ring-1 rounded-xl bg-primary-100 p-2 h-fit w-fit flex gap-2 items-center relative dark:bg-primary-850 dark:hover:bg-primary-850">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="currentColor" className="size-4.5 lg:size-6"><path d="M200-200q-17 0-28.5-11.5T160-240q0-17 11.5-28.5T200-280h40v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h40q17 0 28.5 11.5T800-240q0 17-11.5 28.5T760-200H200ZM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Z"/></svg>
                </button>

                <button onClick={ toggleTheme } aria-label="Theme" className="hover:bg-primary-150 focus:ring-1 rounded-xl bg-primary-100 p-2 h-fit w-fit flex gap-2 items-center relative dark:bg-primary-850 dark:hover:bg-primary-900">
                    { theme == 'light'? <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="size-4.5 lg:size-6"><title>moon_fill</title><g id="moon_fill" fill="none" fillRule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M13.574 3.138a1.01 1.01 0 0 0-1.097 1.408 6 6 0 0 1-7.931 7.931 1.01 1.01 0 0 0-1.409 1.097A9 9 0 0 0 21 12a9.001 9.001 0 0 0-7.426-8.862"></path></g></svg>:
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="size-4.5 lg:size-6"><title>sun_fill</title><g id="sun_fill" fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z"></path><path fill="currentColor" d="M12 19a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m6.364-2.05.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414m-12.728 0a1 1 0 0 1 1.497 1.32l-.083.094-.707.707a1 1 0 0 1-1.497-1.32l.083-.094zM12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12m-8 5a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zm17 0a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zM4.929 4.929a1 1 0 0 1 1.32-.083l.094.083.707.707a1 1 0 0 1-1.32 1.497l-.094-.083-.707-.707a1 1 0 0 1 0-1.414m14.142 0a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0M12 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"></path></g></svg> }
                </button>
                <Image src={'/gradient-blob.svg'} width={128} height={128} className="size-8" alt="" />
            </div>
            
            <AnimatePresence>
                { isNav && <>
                <div className="fixed inset-0 h-screen bg-black/20 backdrop-blur-2xl z-10"></div>

                <Navbar closeFunc={ () => setIsNav((prev) => !prev) } /></>
                }
            </AnimatePresence>
        </header>
    )
}

export function Navbar ({closeFunc}: NavbarProps) {
    return (
        <motion.section animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="z-30 bg-white dark:bg-primary-950 opacity-0 flex flex-col gap-5 px-4 py-1 pb-4 h-screen overflow-y-auto absolute inset-y-0 left-0 w-[calc(100sv-4rem)] max-w-[360px] transition-transform transition-discrete duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
            <button title="menu close" onClick={ closeFunc } type="button" className="p-3 -translate-x-2.5 text-black dark:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide-icon lucide lucide-x "><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button>

            <Link href={"#"} className="text-black dark:text-white flex gap-2 items-center">
                <div className="bg-primary-800 dark:bg-primary-150 p-2.5 rounded-xl w-fit text-primary-0 dark:text-black flex gap-2.5">
                    <svg aria-label="Krea Logo" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8.34 1.266c1.766-.124 3.324 1.105 3.551 2.802.216 1.612-.887 3.171-2.545 3.536-.415.092-.877.066-1.317.122a4.63 4.63 0 0 0-2.748 1.34l-.008.004-.01-.001-.006-.005-.003-.009q0-.009.005-.016a.04.04 0 0 0 .007-.022 438 438 0 0 1-.01-4.541c.003-1.68 1.33-3.086 3.085-3.21"></path><path d="M8.526 15.305c-2.247-.018-3.858-2.23-3.076-4.3a3.31 3.31 0 0 1 2.757-2.11c.384-.04.845-.03 1.215-.098 1.9-.353 3.368-1.806 3.665-3.657.066-.41.031-.9.128-1.335.449-2.016 2.759-3.147 4.699-2.236 1.011.476 1.69 1.374 1.857 2.447q.051.33.034.818c-.22 5.842-5.21 10.519-11.279 10.47m2.831.93a.04.04 0 0 1-.021-.02l-.001-.006.002-.006q0-.003.003-.004l.006-.003q3.458-.792 5.992-3.185.045-.042.083.007c.27.357.554.74.78 1.106a10.6 10.6 0 0 1 1.585 4.89q.037.53.023.819c-.084 1.705-1.51 3.08-3.31 3.09-1.592.01-2.992-1.077-3.294-2.597-.072-.36-.05-.858-.11-1.238q-.282-1.755-1.715-2.84zm-3.369 6.64c-1.353-.235-2.441-1.286-2.684-2.593a5 5 0 0 1-.05-.817V15.14q0-.021.016-.007c.884.786 1.814 1.266 3.028 1.346l.326.01c1.581.051 2.92 1.087 3.229 2.592.457 2.225-1.557 4.195-3.865 3.793"></path></svg>
                </div>
                <p className="">Home</p>
            </Link>

            <div className="flex flex-col gap-4 mt-4">
                <h2 className="text-black dark:text-white font-medium text-xl">Account</h2>
                <div className="flex flex-col gap-4">
                    <Link href={"#"} className="text-black dark:text-white flex gap-2 items-center">
                        <div className="bg-primary-800 dark:bg-action p-2.5 rounded-xl w-fit text-white flex gap-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="translate-x-0.5 iconify iconify--lets-icons" width="22" height="22" viewBox="0 0 24 24"><g fill="none"><circle cx="10" cy="8" r="5" fill="currentColor"></circle><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M19 10v6m3-3h-6"></path><path fill="currentColor" d="M17.142 20.383c.462-.105.739-.585.534-1.012c-.552-1.15-1.459-2.162-2.634-2.924C13.595 15.509 11.823 15 10 15s-3.595.508-5.042 1.447c-1.175.762-2.082 1.773-2.634 2.924c-.205.427.072.907.534 1.012a32.3 32.3 0 0 0 14.284 0"></path></g></svg>
                        </div>
                        <p className="text-sm">Log in</p>
                    </Link>

                    <div className="flex flex-row justify-between items-center">
                        <Link href={"#"} className="text-black dark:text-white flex gap-2 items-center">
                            <div className="relative bg-primary-150/15 dark:bg-primary-850/15 p-2.5 rounded-xl dark:text-primary-150 min-size-6 min-w-11">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="absolute inset-0 m-auto h-5.5 w-5.5 transition-transform duration-200 ease-out group-hover:scale-110 iconify iconify--akar-icons" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 3.269C14 2.568 13.432 2 12.731 2H11.27C10.568 2 10 2.568 10 3.269c0 .578-.396 1.074-.935 1.286q-.128.052-.253.106c-.531.23-1.162.16-1.572-.249a1.27 1.27 0 0 0-1.794 0L4.412 5.446a1.27 1.27 0 0 0 0 1.794c.41.41.48 1.04.248 1.572a8 8 0 0 0-.105.253c-.212.539-.708.935-1.286.935C2.568 10 2 10.568 2 11.269v1.462C2 13.432 2.568 14 3.269 14c.578 0 1.074.396 1.286.935q.052.128.105.253c.231.531.161 1.162-.248 1.572a1.27 1.27 0 0 0 0 1.794l1.034 1.034a1.27 1.27 0 0 0 1.794 0c.41-.41 1.04-.48 1.572-.249q.125.055.253.106c.539.212.935.708.935 1.286c0 .701.568 1.269 1.269 1.269h1.462c.701 0 1.269-.568 1.269-1.269c0-.578.396-1.074.935-1.287q.128-.05.253-.104c.531-.232 1.162-.161 1.571.248a1.27 1.27 0 0 0 1.795 0l1.034-1.034a1.27 1.27 0 0 0 0-1.794c-.41-.41-.48-1.04-.249-1.572q.055-.125.106-.253c.212-.539.708-.935 1.286-.935c.701 0 1.269-.568 1.269-1.269V11.27c0-.701-.568-1.269-1.269-1.269c-.578 0-1.074-.396-1.287-.935a8 8 0 0 0-.105-.253c-.23-.531-.16-1.162.249-1.572a1.27 1.27 0 0 0 0-1.794l-1.034-1.034a1.27 1.27 0 0 0-1.794 0c-.41.41-1.04.48-1.572.249a8 8 0 0 0-.253-.106C14.396 4.343 14 3.847 14 3.27Z"></path><path d="M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0Z"></path></g></svg>
                            </div>
                            <p className="text-sm">Settings</p>
                        </Link>
                        <OpenButton />
                    </div>
                </div>
            </div>


            <div className="flex flex-col gap-4 mt-4">
                <h2 className="text-black dark:text-white font-medium text-xl">Apps</h2>
                <div id="mobileSideBarContainer" className="flex flex-col gap-4">
                    <MobileSideBarApps title="Images" image={"image.svg"} />
                    <MobileSideBarApps title="Video" image={"video.svg"} />
                    <MobileSideBarApps title="Realtime" image={"realtime.svg"} />
                    <MobileSideBarApps title="Enhancer" image={"enhancer.svg"} />
                    <MobileSideBarApps title="Video Lipsync" image={"video-lipsync.svg"} />
                    <MobileSideBarApps title="Motion Transfer" image={"motion-transfer.svg"} />
                    <MobileSideBarApps title="Train" image={"train-xx.png"} />
                    <MobileSideBarApps title="3D Objects" image={"3d-objects.svg"} />
                    <MobileSideBarApps title="Assets" image={"assets.svg"} />
                    <MobileSideBarApps title="Chat" image={"image.svg"} />
                </div>
            </div>
        </motion.section>
    )
}

export function HomeHover () {
    return (
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} className="homeHoverContainer pt-24 pl-16 pr-12 pb-12 absolute z-20 dark:bg-primary-900 dark:border-primary-850 border-primary-150 w-full overflow-hidden rounded-2xl border-[3px] bg-white shadow-[0_84px_32px_-40px_rgba(0,0,0,0.05)] max-w-5xl mx-auto inset-x-0 top-1.5 dark:shadow-[0_84px_32px_-40px_rgba(0,0,0,0.075)] hidden md:grid grid-cols-3 gap-4">
            <div className="generate">
                <h2 className="text-base font-medium">Generate</h2>

                <div className="flex flex-col mt-4 -translate-x-4">
                    <HomeHoverButton title="Home" image="image.svg" />
                    <HomeHoverButton title="Video" image="video.svg" />
                    <HomeHoverButton title="Realtime" image="realtime.svg" />
                    <HomeHoverButton title="Motion Transfer" image="motion-transfer.svg" />
                    <HomeHoverButton title="3D Objects" image="3d-objects.svg" />
                </div>
            </div>

            <div className="edit">
                <h2 className="text-base font-medium">Edit</h2>

                <div className="flex flex-col mt-4 -translate-x-4">
                    <HomeHoverButton title="Enhancer" image="enhancer.svg" />
                    <HomeHoverButton title="Edit" image="edit.svg" />
                    <HomeHoverButton title="Video Lipsync" image="video-lipsync.svg" />
                </div>
            </div>

            <div className="assets">
                <h2 className="text-base font-medium">Assets</h2>

                <div className="flex flex-col mt-4 -translate-x-4">
                    <HomeHoverButton title="Train" image="train-xx.png" />
                    <HomeHoverButton title="Assets" image="assets.svg" />
                    <HomeHoverButton title="Gallery" image="gallery.webp" />
                </div>
            </div>
        </motion.div>
    )
}

export function HomeHoverButton({ title, image}: HomeHoverButtonProps ) {
    return (
        <button title={ title } type="button" className="homeHover p-4 focus:ring-1 rounded-xl w-full flex gap-4 items-center relative text-black dark:text-white text-sm hover:bg-black/5 dark:hover:bg-white/5"><Image src={`/generate-icons/${image}`} className="w-12 p-2 rounded-xl" width={84} height={84} alt="" /><span className="text-base font-inter">{ title }</span></button>
    )
}