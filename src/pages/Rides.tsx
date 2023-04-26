function Rides(props: any) {
	// console.log(props)
	const component_number = props.component_number;

	return (
		<div className="">
			<div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md">
				<img className="w-full h-48 object-cover" src="[Route Map Image URL]" alt="Route Map" />
				<div className="px-4 py-3 bg-white">
					<h3 className="text-lg font-medium text-gray-700 mb-2">[Ride Name]</h3>
					<p className="text-sm text-gray-500 mb-1">[Ride Date]</p>
					<p className="text-sm text-gray-500 mb-4">
						<span className="font-medium">Total Members:</span> [Total Members Joined the Ride]
					</p>
					<div className="flex justify-end">
						<a href="#" className="text-blue-500 font-medium">
							View Details
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Rides;
