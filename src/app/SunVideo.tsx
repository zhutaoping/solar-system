"use client";
import { motion, AnimatePresence } from "framer-motion";

interface Props {}

export default function SunVideo({}: Props) {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={"sun-video"}
				initial={{ x: -600 }}
				animate={{ x: 0 }}
				exit={{ x: -10 }}
				transition={{ type: "tween", duration: 0.5 }}
				className="h-full flex-shrink-0"
			>
				<video
					className="h-full object-cover"
					src="/videos/sun-clip.mp4"
					autoPlay
					muted
					loop
					id="myVideo"
				/>
			</motion.div>
		</AnimatePresence>
	);
}
