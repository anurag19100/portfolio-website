import React from 'react'
import Typed from 'react-typed'


function LeftText() {
	return (
		<div className='leftText'>
			 
			<div className='flex-fix'>
			
				<h2>Hi, </h2>
				<span className='preTitle'>I am </span>
				<h1 className='name_big'>Anurag Gupta</h1>
				<p className='animated_text'>
					<Typed
						strings={[
							'I am an Engineer',
							'I am a Full Stack Developer',
							'I am a MERN Stack Developer',
							'I am a Open Source Contributor',
							'I am a Freelancer',
							'I am a Critical Thinker',
							'I am a Graphics Designer',
							
						]}
						typeSpeed={40}
						backSpeed={50}
						loop></Typed>
				</p>
			</div>
		</div>
	)
}

export default LeftText
