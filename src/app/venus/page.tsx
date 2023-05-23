import VenusContent from "./VenusContent";
import VenusVideo from "./VenusVideo";

interface Props {}

export default function Home({}: Props) {
	return (
		<main className="flex h-screen justify-center items-center">
			<VenusVideo />
			<VenusContent />
		</main>
	);
}
