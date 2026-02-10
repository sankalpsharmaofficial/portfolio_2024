import React from 'react';
import ProjectDetail from '../components/ProjectDetail';

const CovidPage = () => {
	return (
		<ProjectDetail
			title="COVID-19 Tracker"
			emoji="🦠"
			overview={`A real-time COVID-19 data tracker that visualizes global pandemic statistics. Features include country-wise data filtering, interactive graphs and charts, daily/total case tracking, and responsive data visualizations. Built using React with data fetched from reliable COVID-19 APIs, this project demonstrates skills in data visualization and API integration.`}
			technologies={['React', 'Chart.js', 'API Integration', 'CSS3', 'JavaScript']}
			codeUrl="https://github.com/sankalpsharmaofficial"
			demoUrl=""
		/>
	);
};

export default CovidPage;
