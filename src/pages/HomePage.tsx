import Rides from "../components/Rides";
import { IRide } from "../types/Rides";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const dummy_data: IRide = { title: "test" };

function HomePage() {
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
					<ChevronLeftIcon className="absolute top-0 bottom-0 m-auto left-2 z-40 h-9 w-9 opacity-0 hover:scale-125 group-hover:opacity-100" />

						<div className="flex overflow-x-scroll scrollbar-hide">
							<Rides ride_data={dummy_data} />
							<Rides ride_data={dummy_data} />
							<Rides ride_data={dummy_data} />
							<Rides ride_data={dummy_data} />
							<Rides ride_data={dummy_data} />
							<Rides ride_data={dummy_data} />
							<Rides ride_data={dummy_data} />
						</div>

					<ChevronRightIcon className="absolute top-0 bottom-0 m-auto right-2 z-40 h-9 w-9 opacity-0 hover:scale-125 group-hover:opacity-100" />
					</div>
					
				</div>
			</div>
		
	);
}

export default HomePage;
