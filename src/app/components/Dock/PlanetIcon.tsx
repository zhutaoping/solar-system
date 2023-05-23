import { useRef, useState } from "react";
import Image from "next/image";
import {
	AnimatePresence,
	MotionValue,
	motion,
	useSpring,
	useTransform,
} from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
	mouseY: MotionValue;
	planet: string;
	selectedPlanet: string;
	setSelectedPlanet: (planet: string) => void;
}

export default function PlanetIcon({
	mouseY,
	planet,
	selectedPlanet,
	setSelectedPlanet,
}: Props) {
	const ref = useRef<HTMLLIElement>(null);
	const path = usePathname();

	//* distance = mouseY minus the center of the icon
	let distance = useTransform(mouseY, (val) => {
		//* nullish coalescing operator: null and undefined
		//* not falsy: false, 0, NaN, ""(empty string)
		let bounds = ref.current?.getBoundingClientRect() ?? { y: 0, width: 0 };
		return val - bounds.y - bounds.width / 2;
	});

	let widthSync = useTransform(distance, [-100, 0, 100], [40, 80, 40]);

	let width = useSpring(widthSync, { stiffness: 200, mass: 0.1, damping: 15 });

	return (
		<AnimatePresence>
			<motion.li
				onClick={() => setSelectedPlanet(planet)}
				key={planet}
				whileTap={{ rotateZ: 360 }}
				transition={{ type: "spring", stiffness: 200, damping: 15 }}
				ref={ref}
				style={{ width }}
				className="aspect-square w-10 rounded-full relative  "
			>
				<Link href={`${planet}`}>
					<Image
						src={`/images/${planet}.png`}
						className="w-full h-full object-contain"
						height={500}
						width={500}
						alt={`Picture of the ${planet}}`}
					/>
				</Link>
				{planet === selectedPlanet ? (
					<motion.span className="absolute top-0" layoutId="rocket">
						🚀
					</motion.span>
				) : null}
			</motion.li>
		</AnimatePresence>
	);
}
