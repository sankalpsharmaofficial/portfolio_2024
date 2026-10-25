// Everything the site says, in one place. The 3D world and the text overlay
// both read from here so they stay in step.

export const palette = {
	sky: '#8fd3ff',
	ink: '#1a1446',
	tomato: '#ff5a36',
	sun: '#ffd23f',
	mint: '#2bd47d',
	pink: '#ff8ad8',
	white: '#ffffff',
	soil: '#f2a65a'
};

export const career = [
	{
		id: 'btech',
		kind: 'edu',
		title: 'Bachelor of Technology',
		org: 'University (India)',
		period: '2013 – 2017',
		description:
			'Computer science fundamentals: data structures, algorithms, software engineering and object-oriented programming. Built a foundation in Java, Python and web development.',
		stack: ['Java', 'Python', 'Data structures', 'OOP']
	},
	{
		id: 'ms',
		kind: 'edu',
		title: 'MS in Computer Science',
		org: 'Cal State East Bay',
		period: '2017 – 2019',
		description:
			'Specialised in advanced AI, distributed systems and algorithms. Published research on ontology-based disease research systems.',
		stack: ['AI', 'Distributed systems', 'Algorithms', 'Research']
	},
	{
		id: 'frontend',
		kind: 'work',
		title: 'Frontend Developer',
		org: 'Previous roles',
		period: '2020 – 2023',
		description:
			'Built web apps across several teams, growing from frontend specialist to full stack contributor. Shipped 15+ production applications.',
		stack: ['React', 'Next.js', 'JavaScript', 'REST APIs', 'Firebase']
	},
	{
		id: 'observe',
		kind: 'work',
		title: 'Software Engineer',
		org: 'Observe, Inc.',
		period: '2023 – 2024',
		description:
			'Built observability dashboards and real-time data visualisations for enterprise customers, until Snowflake acquired Observe in 2024.',
		stack: ['React', 'TypeScript', 'GraphQL', 'PostgreSQL']
	},
	{
		id: 'snowflake',
		kind: 'work',
		title: 'Full Stack Engineer',
		org: 'Snowflake',
		period: '2024 – now',
		description:
			'Building AI-powered observability on the Snowflake data cloud, across React frontends, Node.js services and Snowflake’s data infrastructure.',
		stack: ['React', 'TypeScript', 'Node.js', 'Snowflake', 'AI/ML']
	}
];

export const projects = [
	{ title: 'Weather Dashboard', thumb: '/assets/projects/thumbs/weather.jpg', link: '/weather', color: palette.sun },
	{ title: 'Task Manager Pro', thumb: '/assets/projects/thumbs/todo_app.jpg', link: '/todo', color: palette.pink },
	{ title: 'Expense Tracker', thumb: '/assets/projects/thumbs/expenseTracker.jpg', link: '/expenseTracker', color: palette.mint },
	{ title: 'COVID-19 Tracker', thumb: '/assets/projects/thumbs/covid.jpg', link: '/covid', color: palette.tomato },
	{ title: 'Squid Game Fan App', thumb: '/assets/projects/thumbs/squid.jpg', link: '/squidGame', color: palette.pink },
	{ title: 'Advice Generator', thumb: '/assets/projects/thumbs/adviceGen.jpg', link: '/adviceGenerator', color: palette.sun }
];

export const skills = [
	{ title: 'Frontend', color: palette.tomato, tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js'] },
	{ title: 'Backend and data', color: palette.mint, tools: ['Node.js', 'Python', 'PostgreSQL', 'GraphQL', 'Snowflake'] },
	{ title: 'AI', color: palette.pink, tools: ['OpenAI API', 'Claude', 'LangChain', 'Prompt design', 'Agents'] },
	{ title: 'Tooling', color: palette.sun, tools: ['Docker', 'Git', 'GitHub Actions', 'Vercel', 'AWS'] }
];

export const contact = {
	email: 'sankalp.sharma156@gmail.com',
	linkedin: 'https://www.linkedin.com/in/sankalp-sharma156/',
	github: 'https://github.com/sankalpsharmaofficial'
};
