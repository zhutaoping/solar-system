"use client";
import Link from "next/link";
import { usePlanetStore } from "../store/SelectedPlanetStore";
import { motion } from "framer-motion";

interface Props {}

export default function Header({}: Props) {
	const { selectedPlanet, setSelectedPlanet } = usePlanetStore();

	return (
		<div
			className="fixed right-12 text-4xl p-4"
			onClick={() => setSelectedPlanet("")}
		>
			<Link href="/">Solar System</Link>
			{selectedPlanet === "" ? (
				<motion.span className="absolute top-4 -right-9" layoutId="rocket">
					🚀
				</motion.span>
			) : null}
		</div>
	);
}
