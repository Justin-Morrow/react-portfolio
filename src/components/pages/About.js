import React from 'react';
import './About.css';
let headshot = '/assets/images/headshot.jpg';
// import Cover from './Cover';



function About() {
	return (
		<div>
		{/* <Cover /> */}
		<section id='about'>
			<h2 className='section-title'>About Me</h2>
			<img
				src={headshot}
				alt='Headshot'
				className='headshot'
			/>
			<h4 className='section-text'>
				My name is Justin Morrow, a professional with experience in finance and web development.
				<br />
				Growing my skills and learning coding.
			</h4>
		</section>
		</div>
	);
}

export default About;