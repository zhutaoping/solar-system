import MercuryContent from "./MercuryContent";
import MercuryVideo from "./MercuryVideo";

interface Props {}

export default function Home({}: Props) {
	return (
		<main className="flex h-screen justify-center items-center">
			<MercuryVideo />
			<MercuryContent />
		</main>
	);
}
