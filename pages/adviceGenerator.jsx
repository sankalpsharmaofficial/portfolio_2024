import React from 'react';
import ProjectDetail from '../components/ProjectDetail';

const AdviceGeneratorPage = () => {
	return (
		<ProjectDetail
			title="Advice Generator"
			emoji="💡"
			overview={`An advice generator application that fetches random pieces of advice from an external API. Users can generate new advice with a single click, making it a fun and engaging experience. The app features a clean, card-based design with smooth animations and transitions, demonstrating proficiency in API integration and modern UI design.`}
			technologies={['React', 'API Integration', 'CSS3', 'JavaScript', 'Responsive Design']}
			codeUrl="https://github.com/sankalpsharmaofficial"
			demoUrl=""
		/>
	);
};

export default AdviceGeneratorPage;
