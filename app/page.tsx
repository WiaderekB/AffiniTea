import Image from "next/image";

export default function Home() {
	return (
		<main className="w-1/2 relative ">
			<Image className="absolute top-0 left-1/2 -translate-x-1/2 w-full" src={"/main.jpg"} alt="" width={500} height={400} />
		</main>
	);
}
