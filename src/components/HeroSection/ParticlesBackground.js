import React from "react";
import Particles from "react-particles-js";
import ParticlesConfig from "./particles-config";

const ParticlesBackground = () => {
	return (
		<Particles
			params={ParticlesConfig}
            height='800px'
		></Particles>
	);
};

export default ParticlesBackground;
