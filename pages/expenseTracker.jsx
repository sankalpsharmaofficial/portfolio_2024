import React from 'react';
import ProjectDetail from '../components/ProjectDetail';

const ExpenseTrackerPage = () => {
	return (
		<ProjectDetail
			title="Expense Tracker"
			emoji="💰"
			overview={`A comprehensive personal finance application that allows users to track income and expenses with an intuitive interface. Features include real-time balance calculation, categorized transactions, visual spending analytics, and a responsive design that works across all devices. Built with React and styled using modern CSS techniques.`}
			technologies={['React', 'CSS3', 'JavaScript', 'Context API', 'Local Storage']}
			codeUrl="https://github.com/sankalpsharmaofficial"
			demoUrl=""
		/>
	);
};

export default ExpenseTrackerPage;
