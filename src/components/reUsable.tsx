import Image from "next/image";

type DesktopNavButtonProps = {
    icon: string;
    text: string;
};

type scrollBarProps = {
    curr: number | null;
}

type generateCardsProp = {
    image: string | null;
    title: string | null;
    text: string | null;
    isNew: boolean;
}

export function OpenButton () {
    return (
        <button className="bg-primary-150 dark:bg-primary-800 ml-auto flex h-9 w-22 items-center justify-center rounded-full text-xs font-medium text-black dark:text-white">Open</button>
    )
}

export function DesktopNavButton ({icon, text}: DesktopNavButtonProps) {
    const focusToggle = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        e.currentTarget.classList.add('bg-white')
    }

    return (
        <button title={icon} onClick={ (e) => focusToggle(e)} type="button" className="focus:bg-white bg-white p-4 w-fit">
            <Image src={`/icons/${icon}`} className="size-7" width={22} height={22} alt="" />
            { text }
        </button>
    )
}


export function ScrollBar ({ curr }: scrollBarProps) {

    return (
        <div className="w-fit mx-auto z-50 flex gap-2">
            { [1,2,3,4,5,6,7,8].map((e, key) => {
                return (
                    <>
                    { e === curr? <span key={key} className="bg-primary-850 dark:bg-primary-850 size-2 rounded-full inline-block"></span>:
                    <span key={key} className="bg-primary-150 dark:bg-primary-0 size-2 rounded-full inline-block"></span> }</>
                )
            })}
        </div>
    )
}


export function GenerateCards ({ image, title, text, isNew }: generateCardsProp) {
    return (
        <div className="genCards flex justify-between items-end h-fit">
            <div className="flex gap-x-2 w-3/4 h-fit">
                <Image src={`/generate-icons/${image}`} className="size-12 aspect-square rounded-[10px] p-2" width={84} height={84} alt="" />
                
                <div className="">
                    <h3 className="font-semibold flex gap-x-2 items-center dark:text-white">{ title }{ isNew &&<span className="bg-blue-500 pt-1.75 pb-1 text-white rounded-full px-2.75 text-xs font-normal">New</span> }</h3>
                    <p className="mt-2 text-[#a5a5a5] font-medium leading-tight dark:text-white">{ text }</p>
                </div>
            </div>

            <button className="bg-primary-150 text-black rounded-full px-6 text-sm font-medium pb-1.5 pt-2 h-fit">Open</button>
        </div>
    )
}