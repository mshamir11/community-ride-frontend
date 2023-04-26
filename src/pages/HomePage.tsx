import Rides from "./Rides";

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

			<div className="upcoming-rides rides">
				<h2>Upcoming Rides</h2>
				{/* TODO Create a carousel for the component */}
				<div className="ride-components">
					{/* TODO Create a html component for the ride details */}
					{getRideComponents(5)}
				</div>
			</div>
			<div className="past-rides rides">
				<h2>Past Rides</h2>
			</div>
		</div>
	);
}

function getRideComponents(count: number) {
	var elements = [];
	for (let i = 1; i < count; i++) {
		elements.push(<Rides component_number={i} />);
	}
	return elements;
}

export default HomePage;
