import { useRef, useState } from "react";
import Rides from "../components/Rides";
import { IRide } from "../types/Rides";
import { ChevronLeftIcon, ChevronRightIcon, HandIcon } from "@heroicons/react/solid";

const dummy_data: IRide = { title: "test" };

function HomePage() {
	// Create a useRef hook to store a reference to the element
	const scrollRef = useRef<HTMLDivElement>(null);
	const [isMoved, setIsMoved] = useState(false);

	// Create a function to handle the scroll event
	const handleScroll = (direction: String) => {
		setIsMoved(true);

		if (scrollRef.current) {
			const { scrollLeft, clientWidth } = scrollRef.current;
			const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
			scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
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
				<h1>Upcoming Rides</h1>

				<div className="group relative">
					<ChevronLeftIcon
						className={`carousel-button left-2 ${!isMoved && "hidden"}`}
						onClick={() => handleScroll("left")}
					/>

					<div ref={scrollRef} className="flex overflow-x-scroll scrollbar-hide">
						{[...Array(20)].map(() => (
							<Rides ride_data={dummy_data} />
						))}
					</div>

					<ChevronRightIcon className="carousel-button right-2" onClick={() => handleScroll("right")} />
				</div>
			</div>
		</div>
	);
}

export default HomePage;
