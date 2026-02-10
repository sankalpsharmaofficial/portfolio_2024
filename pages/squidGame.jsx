import React from 'react';
import ProjectDetail from '../components/ProjectDetail';

const SquidGamePage = () => {
	return (
		<ProjectDetail
			title="Squid Game Landing"
			emoji="🦑"
			overview={`A themed landing page inspired by the popular Netflix series "Squid Game". This project showcases creative web design abilities with themed animations, dynamic visual effects, and an immersive user experience. Built with vanilla Frontend technologies to demonstrate strong fundamentals in HTML, CSS, and JavaScript.`}
			technologies={['HTML5', 'CSS3', 'JavaScript', 'Animations', 'Responsive Design']}
			codeUrl="https://github.com/sankalpsharmaofficial"
			demoUrl=""
		/>
	);
};

export default SquidGamePage;
