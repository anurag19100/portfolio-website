import {Col} from 'react-bootstrap'
import LeftText from './LeftText'
import React from 'react'
// import loadable from '@loadable/component'
// import Particles from 'react-particles-js';
// import particlesConfig from './../config/particlesConfig';

// const Particles = loadable(() => import('react-tsparticles'))

function Left() {
	return (
		
		<Col md className='LeftSec'>
			 {/* <Particles height="100vh" width="100vw" params={particlesConfig} /> */}
	
			<LeftText />
			
		</Col>
		
	)
}

export default Left
