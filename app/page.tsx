import Image from "next/image";

export default function Home() {
	return (
		<main className="w-screen h-screen bg-red-300">
			<div className="w-1/3 relative left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 ">
				<Image className="w-full" src={"/main.png"} alt="" width={500} height={400} />

				{/* First row */}
				<div className="photo w-[31%] translate-x-[75%] translate-y-[20%]">
					<Image src={"/tea/Layer 1.png"} alt="" width={500} height={400} />
				</div>
				<div className="photo w-[30%] translate-x-[154%] translate-y-[59%]">
					<Image src={"/tea/Layer 2.png"} alt="" width={500} height={400} />
				</div>
				<div className="photo w-[22%] translate-x-[20%] translate-y-[32%]">
					<Image src={"/tea/Layer 0.png"} alt="" width={500} height={400} />
				</div>

				{/* Second row */}
				<div className="photo w-[40%] translate-x-[132%] translate-y-[505%]">
					<Image src={"/tea/Layer 6.png"} alt="" width={500} height={400} />
				</div>
				<div className="photo w-[18%] translate-x-[202%] translate-y-[203%]">
					<Image src={"/tea/Layer 4.png"} alt="" width={500} height={400} />
				</div>
				<div className="photo w-[23.9%] translate-x-[282%] translate-y-[222%]">
					<Image src={"/tea/Layer 7.png"} alt="" width={500} height={400} />
				</div>
				<div className="photo w-[14.5%] translate-x-[365%] translate-y-[270%]">
					<Image src={"/tea/Layer 5.png"} alt="" width={500} height={400} />
				</div>
				<div className="photo w-[28.5%] translate-x-[30%] translate-y-[322%]">
					<Image src={"/tea/Layer 3.png"} alt="" width={500} height={400} />
				</div>
				<div className="photo w-[12.3%] translate-x-[690%] translate-y-[403%]">
					<Image src={"/tea/Layer 8.png"} alt="" width={500} height={400} />
				</div>

				{/* Third row */}
				<div className="photo w-[19%] translate-x-[30%] translate-y-[373%]">
					<Image src={"/tea/Layer 9.png"} alt="" width={500} height={400} />
				</div>
				<div className="photo w-[13.5%] translate-x-[275%] translate-y-[410%]">
					<Image src={"/tea/Layer 10.png"} alt="" width={500} height={400} />
				</div>
			</div>
		</main>
	);
}
