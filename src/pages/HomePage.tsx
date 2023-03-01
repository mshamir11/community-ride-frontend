import React from 'react';

import './App.css';
import Rides from './Rides';

// TODO Testing out TODO
function HomePage() {
    return (
        <div className="community-ride">
            <div className="main">
                <div className="title">
                    <h1>Community Ride</h1>
                </div>
            </div>

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
        elements.push(<Rides component_number={i} />)
    }
    return elements
}

export default HomePage;
