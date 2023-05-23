"use client";
import { useMotionValue } from "framer-motion";
import PlanetIcon from "./PlanetIcon";
import { usePlanetStore } from "@/app/store/SelectedPlanetStore";

const planetsLinks = [
	"mercury",
	"venus",
	"earth",
	"mars",
	"jupiter",
	"saturn",
	"uranus",
	"neptune",
];

export default function Dock() {
	const { selectedPlanet, setSelectedPlanet } = usePlanetStore();

	let mouseY = useMotionValue(Infinity);

	return (
		<nav>
			<ul
				onMouseMove={(e) => {
					mouseY.set(e.pageY);
				}}
				onMouseLeave={() => mouseY.set(Infinity)}
				className="absolute top-1/2 -translate-y-1/2 right-2 flex flex-col  items-end rounded-2xl  p-4"
			>
				{planetsLinks.map((i) => (
					<PlanetIcon
						key={i}
						mouseY={mouseY}
						planet={i}
						selectedPlanet={selectedPlanet}
						setSelectedPlanet={setSelectedPlanet}
					/>
				))}
			</ul>
		</nav>
	);
}
