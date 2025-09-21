type IconButtonProps = {
    title: string;
    text: string;
    onClick?: () => void;
    children: React.ReactNode;
};

export default function IconButton({ title, text, onClick, children }: IconButtonProps) {
    return (
    <button title={title} type="button" onClick={onClick} className="hover:bg-primary-150 focus:ring-1 rounded-xl bg-primary-100 p-2 xl:px-4 py-2 h-fit w-fit flex gap-2 items-center relative dark:bg-primary-850 dark:hover:bg-primary-850">
      {children}
        { text && <span className="hidden xl:inline-block">Gallery</span> }
    </button>
  );
}
