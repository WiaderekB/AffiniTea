"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
	const [loadedCount, setLoadedCount] = useState<number>(0);

	return (
		<main className="w-screen h-screen bg-red-300">
			<div
				className={`w-4/5 max-w-max relative left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-700 ${
					loadedCount >= 12 ? "opacity-100 blur-0" : "opacity-0 blur-lg"
				}`}
			>
				<Image className="w-full" src={"/main.png"} alt="Shelve" width={1080} height={1920} onLoad={() => setLoadedCount((old) => (old += 1))} />

				{/* First row */}
				<div className="photo w-[31%] translate-x-[75%] translate-y-[20%]">
					<Image onLoad={() => setLoadedCount((old) => (old += 1))} src={"/tea/Layer 1.png"} alt="" width={500} height={400} />
				</div>
				<div className="photo w-[30%] translate-x-[154%] translate-y-[59%]">
					<Image onLoad={() => setLoadedCount((old) => (old += 1))} src={"/tea/Layer 2.png"} alt="" width={500} height={400} />
				</div>
				<div className="photo w-[22%] translate-x-[20%] translate-y-[32%]">
					<Image onLoad={() => setLoadedCount((old) => (old += 1))} src={"/tea/Layer 0.png"} alt="" width={500} height={400} />
				</div>

				{/* Second row */}
				<div className="photo w-[40%] translate-x-[132%] translate-y-[505%]">
					<Image onLoad={() => setLoadedCount((old) => (old += 1))} src={"/tea/Layer 6.png"} alt="" width={500} height={400} />
				</div>
				<div className="photo w-[18%] translate-x-[202%] translate-y-[203%]">
					<Image onLoad={() => setLoadedCount((old) => (old += 1))} src={"/tea/Layer 4.png"} alt="" width={500} height={400} />
				</div>
				<div className="photo w-[23.9%] translate-x-[282%] translate-y-[222%]">
					<Image onLoad={() => setLoadedCount((old) => (old += 1))} src={"/tea/Layer 7.png"} alt="" width={500} height={400} />
				</div>
				<div className="photo w-[14.5%] translate-x-[365%] translate-y-[270%]">
					<Image onLoad={() => setLoadedCount((old) => (old += 1))} src={"/tea/Layer 5.png"} alt="" width={500} height={400} />
				</div>
				<div className="photo w-[28.5%] translate-x-[30%] translate-y-[322%]">
					<Image onLoad={() => setLoadedCount((old) => (old += 1))} src={"/tea/Layer 3.png"} alt="" width={500} height={400} />
				</div>
				<div className="photo w-[12.3%] translate-x-[690%] translate-y-[403%]">
					<Image onLoad={() => setLoadedCount((old) => (old += 1))} src={"/tea/Layer 8.png"} alt="" width={500} height={400} />
				</div>

				{/* Third row */}
				<div className="photo w-[19%] translate-x-[30%] translate-y-[373%]">
					<Image onLoad={() => setLoadedCount((old) => (old += 1))} src={"/tea/Layer 9.png"} alt="" width={500} height={400} />
				</div>
				<div className="photo w-[13.5%] translate-x-[275%] translate-y-[410%]">
					<Image onLoad={() => setLoadedCount((old) => (old += 1))} src={"/tea/Layer 10.png"} alt="" width={500} height={400} />
				</div>
			</div>
		</main>
	);
}
