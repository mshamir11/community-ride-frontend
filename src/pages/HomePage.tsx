import { useRef, useState } from "react";
import Rides from "../components/Rides";
import { IRide } from "../types/Rides";
import { ChevronLeftIcon, ChevronRightIcon, HandIcon } from "@heroicons/react/solid";

const dummy_data: IRide = { title: "test" };

function HomePage() {
	// Create a useRef hook to store a reference to the element
	const scrollRef = useRef<HTMLDivElement>(null);
	const [isMoved, setIsMoved] = useState(false);
	const [isRightScrollEnd, setIsRightScrollEnd] = useState(true);

	// Create a function to handle the scroll event
	const handleScroll = (direction: String) => {
		setIsMoved(true);

		if (scrollRef.current) {
			const { scrollLeft, clientWidth } = scrollRef.current;
			const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
			scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
		}
	};

	const handleScrollEnd = () => {
		if (scrollRef.current) {
			if (Math.ceil(scrollRef.current.scrollWidth - scrollRef.current.scrollLeft) === scrollRef.current.clientWidth) {
				setIsRightScrollEnd(false);
			} else {
				setIsRightScrollEnd(true);
			}

			if (Math.ceil(scrollRef.current.scrollLeft) === 0) {
				setIsMoved(false);
			} else {
				setIsMoved(true);
			}
		}
	};

	return (
		<div className="community-ride">
			<section id="hero">
				<div className="container max-w-6xl mx-auto px-6 py-12">
					<div className="max-w-lg mx-auto mt-32 mb-32 p-4 font-sans text-5xl text-white uppercase border-4 text-center font-bold backdrop-blur-sm">
						Community Rides
					</div>
				</div>
			</section>

			<div className="upcoming-rides">
				<h1 className="text-3xl p-4">Upcoming Rides</h1>

				<div className="group relative">
					<ChevronLeftIcon
						className={`carousel-button left-2 ${!isMoved && "hidden"}`}
						onClick={() => handleScroll("left")}
					/>

					<div ref={scrollRef} className="flex overflow-x-scroll scrollbar-hide" onScroll={handleScrollEnd}>
						{[...Array(20)].map(() => (
							<Rides ride_data={dummy_data} />
						))}
					</div>

					<ChevronRightIcon
						className={`carousel-button right-2 ${!isRightScrollEnd && "hidden"}`}
						onClick={() => handleScroll("right")}
					/>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
