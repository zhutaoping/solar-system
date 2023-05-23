"use client";
import { motion, AnimatePresence } from "framer-motion";

interface Props {}

export default function MercuryVideo({}: Props) {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={"mercury-video"}
				initial={{ x: -600 }}
				animate={{ x: 0 }}
				exit={{ x: -1000 }}
				transition={{ type: "tween", duration: 0.5 }}
				className="h-full flex-shrink-0"
			>
				MercuryVideo
			</motion.div>
		</AnimatePresence>
	);
}
