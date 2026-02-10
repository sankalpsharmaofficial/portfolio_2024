import React from 'react';
import ProjectDetail from '../components/ProjectDetail';

const TodoPage = () => {
	return (
		<ProjectDetail
			title="Task Manager Pro"
			emoji="✅"
			overview={`A productivity-focused todo application with an intuitive user interface. Features include drag-and-drop task organization, priority levels, persistent local storage, and a clean, responsive design. Built to showcase state management skills and dynamic UI interactions with React.`}
			technologies={['React', 'CSS3', 'JavaScript', 'Local Storage', 'Drag & Drop API']}
			codeUrl="https://github.com/sankalpsharmaofficial"
			demoUrl=""
		/>
	);
};

export default TodoPage;
