import Image from "next/image";

type DesktopNavButtonProps = {
	icon: string;
	text: string;
};

type scrollBarProps = {
	curr: number | null;
};

type generateCardsProp = {
	image: string | null;
	title: string | null;
	text: string | null;
	isNew: boolean;
};

export function OpenButton() {
	return (
		<button className="bg-primary-150 dark:bg-primary-800 ml-auto flex h-9 w-22 items-center justify-center rounded-full text-xs font-medium text-black dark:text-white">
			Open
		</button>
	);
}

export function DesktopNavButton({ icon, text }: DesktopNavButtonProps) {
	const focusToggle = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		e.currentTarget.classList.add("bg-white");
	};

	return (
		<button
			title={icon}
			onClick={(e) => focusToggle(e)}
			type="button"
			className="focus:bg-white bg-white p-4 w-fit">
			<Image
				src={`/icons/${icon}`}
				className="size-7"
				width={22}
				height={22}
				alt=""
			/>
			{text}
		</button>
	);
}

export function ScrollBar({ curr }: scrollBarProps) {
	return (
		<div className="w-fit mx-auto z-50 flex gap-2">
			{[1, 2, 3, 4, 5, 6, 7, 8].map((e, key) => {
				return (
					<>
						{e === curr ? (
							<span
								key={key}
								className="bg-primary-850 dark:bg-primary-850 size-2 rounded-full inline-block"></span>
						) : (
							<span
								key={key}
								className="bg-primary-150 dark:bg-primary-0 size-2 rounded-full inline-block"></span>
						)}
					</>
				);
			})}
		</div>
	);
}

export function GenerateCards({
	image,
	title,
	text,
	isNew,
}: generateCardsProp) {
	return (
		<div className="genCards flex justify-between items-end h-fit">
			<div className="flex gap-x-2 w-3/4 h-fit items-center">
				{image == "train" ? (
					<svg
						width="42"
						height="42"
						viewBox="0 0 24 24"
						fill="none"
						className="dark:text-primary-0 text-[#c4c4c5] size-12 shrink-0"
						xmlns="http://www.w3.org/2000/svg">
						<defs>
							<clipPath id="circleMask">
								<circle cx="12" cy="12" r="7"></circle>
							</clipPath>
							<linearGradient
								id="fadeGradient"
								x1="0%"
								y1="0%"
								x2="0%"
								y2="100%">
								<stop
									offset="0%"
									stop-color="white"
									stop-opacity="0.6"></stop>
								<stop
									offset="75%"
									stop-color="white"
									stop-opacity="0.15"></stop>
								<stop
									offset="100%"
									stop-color="white"
									stop-opacity="0"></stop>
							</linearGradient>
						</defs>
						<image
							href="https://www.krea.ai/train-icon-photo.webp"
							x="5"
							y="5"
							width="14"
							height="14"
							clip-path="url(#circleMask)"></image>
						<circle
							cx="12"
							cy="12"
							r="6"
							fill="url(#fadeGradient)"></circle>
						<path
							d="M16.625 20.1226C14.6815 21.2446 12.3964 21.6219 10.1954 21.1841C7.99441 20.7463 6.02762 19.5232 4.66148 17.7429C3.29534 15.9625 2.62303 13.7462 2.7698 11.5068C2.91658 9.26752 3.87243 7.15792 5.45926 5.57108"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"></path>
						<path
							d="M20.0107 7.48682C21.0289 9.25025 21.4366 11.3004 21.1709 13.3192C20.9051 15.338 19.9806 17.2127 18.5407 18.6526"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"></path>
						<path
							d="M12 2.86182C13.2147 2.86182 14.4176 3.10107 15.5398 3.56593C16.6621 4.03079 17.6818 4.71214 18.5407 5.57108"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"></path>
						<path
							d="M7.375 4.10108C8.07507 3.6969 8.8251 3.38622 9.60592 3.177"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"></path>
					</svg>
				) : (
					<Image
						src={`/generate-icons/${image}`}
						className="size-12 aspect-square rounded-[10px] p-2"
						width={84}
						height={84}
						alt=""
					/>
				)}

				<div className="">
					<h3 className="font-semibold flex gap-x-2 items-center dark:text-white">
						{title}
						{isNew && (
							<span className="bg-blue-500 pt-1.75 pb-1 text-white rounded-full px-2.75 text-xs font-normal">
								New
							</span>
						)}
					</h3>
					<p className="mt-2 text-[#a5a5a5] font-medium leading-tight dark:text-white">
						{text}
					</p>
				</div>
			</div>

			<button className="bg-primary-150 text-black rounded-full px-6 text-sm font-medium pb-1.5 pt-2 h-fit">
				Open
			</button>
		</div>
	);
}
