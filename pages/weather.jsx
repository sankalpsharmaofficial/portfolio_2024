import React from 'react';
import ProjectDetail from '../components/ProjectDetail';

const WeatherPage = () => {
	return (
		<ProjectDetail
			title="Weather App"
			emoji="🌤️"
			overview={`I built this app to demonstrate knowledge working in React JS and accessing API endpoints. This app was built using Next JS and Tailwind CSS. This application allows users to type in any city name and find out the weather of that particular city in real time. The Open Weather API provides real-time weather data, and React Icons are used to dynamically display weather information for any city worldwide.`}
			technologies={['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'OpenWeather API', 'React Icons']}
			codeUrl="https://github.com/sankalpsharmaofficial/nextjs-weather-app"
			demoUrl="https://nextjs-weather-app-kappa.vercel.app/"
		/>
	);
};

export default WeatherPage;
