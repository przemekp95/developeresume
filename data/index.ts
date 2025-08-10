import { v4 as uuidv4 } from 'uuid';
import { IData } from '@/types';

const userData: IData = {
	header: {
		name: 'Przemysław Pietrzak',
		phoneNumber: '+48664616582',
		location: 'Warszawa, Polska',
		email: 'p.pietrzak@sluzbaniepodleglej.pl',
		linkedIn: 'linkedin.com/in/przemyslaw-pietrzak/',
		github: 'github.com/przemekp95'
	},
	education: [
		// Brak informacji o edukacji w przesłanym CV – możesz dodać, jeśli chcesz
	],
	skills: [
		{
			id: uuidv4(),
			name: 'Backend / Programowanie',
			skill: ['Python', 'SQL', 'PHP', 'Bash']
		},
		{
			id: uuidv4(),
			name: 'Frontend',
			skill: ['HTML5', 'CSS3', 'JavaScript']
		},
		{
			id: uuidv4(),
			name: 'CMS i frameworki webowe',
			skill: ['WordPress', 'OJS/OMP', 'OwnCloud', 'Laravel', 'Blade']
		},
		{
			id: uuidv4(),
			name: 'DevOps / Infrastruktura',
			skill: ['Linux', 'konfiguracja VPS', 'Git', 'Docker']
		},
		{
			id: uuidv4(),
			name: 'Automatyzacja i narzędzia',
			skill: ['Web scraping', 'SEO', 'PhpMyAdmin', 'VS Code']
		},
		{
			id: uuidv4(),
			name: 'Języki obce',
			skill: ['Angielski', 'Niemiecki', 'Hiszpański']
		}
	],
	experience: [
		{
			id: uuidv4(),
			designation: 'Web Developer',
			company: 'Centrum Analiz Służby Niepodległej',
			location: 'Warszawa, Polska',
			duration: '2024 - ongoing',
			tasks: [
				'Stworzenie aplikacji webowej w frameworku Laravel dla CASN, wdrożenie routingu, responsywnego frontu (Blade), deploy na hosting.',
				'Optymalizacja SEO oraz konfiguracja repozytorium Git.'
			]
		},
		{
			id: uuidv4(),
			designation: 'Administrator i Developer',
			company: 'Fundacja Służba Niepodległej',
			location: 'Warszawa, Polska',
			duration: '2023 - ongoing',
			tasks: [
				'Administrowanie i rozwój strony fundacji opartej na WordPress.',
				'Wdrażanie nowych podstron oraz strategii treści SEO.'
			]
		}
	],
	projects: [
		{
			id: uuidv4(),
			name: 'Mazowieści',
			desc: 'Migracja i utrzymanie serwisu informacyjnego z WIX do WordPress. Automatyzacja ekstrakcji artykułów w Python (Scrapy), import treści do bazy WP, optymalizacja SEO i szybkości działania.'
		},
		{
			id: uuidv4(),
			name: 'Aplikacja mobilna konferencji',
			desc: 'Dwujęzyczna aplikacja mobilna w języku Java na Androida dla uczestników międzynarodowej konferencji, z materiałami konferencyjnymi i pełnym cyklem wytwarzania.'
		}
	],
	accomplishments: [ /*
		'Autor wielu projektów open-source (m.in. automatyzacja, integracje API, skrypty SEO).',
		'Udział w projektach NGO oraz komercyjnych z wykorzystaniem Laravel, Python i WordPress.' */
	]
};

export default userData;


/*


import { v4 as uuidv4 } from 'uuid';
import { IData } from '@/types';

const userData: IData = {
	header: {
		name: 'Muhammad Saad',
		phoneNumber: '+490000000000',
		location: 'Berlin, Germany',
		email: 'mrsaadirfan@gmail.com',
		linkedIn: 'linkedin.com/in/msaaddev/',
		github: 'github.com/msaaddev'
	},
	education: [
		{
			id: uuidv4(),
			degree: 'B.Sc. of Computer Sciences',
			university: 'University of Engineering & Technology',
			location: 'Lahore, Pakistan',
			duration: 'Oct 2018 - May 2022'
		}
	],
	skills: [
		{
			id: uuidv4(),
			name: 'Programming languages',
			skill: ['JavaScript', 'TypeScript']
		},
		{
			id: uuidv4(),
			name: 'Technologies',
			skill: [
				'Git',
				'HTML',
				'CSS',
				'React',
				'Next.js',
				'Redux Toolkit',
				'Tailwind CSS',
				'Styled Components',
				'MongoDB',
				'Node.js',
				'REST APIs'
			]
		},
		{
			id: uuidv4(),
			name: 'Soft Skills',
			skill: ['Ownership', 'Rigor', 'Team work', 'Communication']
		}
	],
	experience: [
		{
			id: uuidv4(),
			designation: 'Software Engineer',
			company: 'XYZ Company',
			location: 'Berlin, Germany',
			duration: 'Oct 2021 - May 2023',
			tasks: [
				`Analyzed system requirements to lead the <strong>development</strong> of 3 Java/J2EE projects, application enhancements, and various maintenance activities.`,
				`Designed and developed a <a href="https://google.com">reporting system</a> based on Crystal Report and Java, generating an increase of 20% in efficiencv and performance rate.`,
				`Analyzed system requirements to lead the <strong>development</strong> of 3 Java/J2EE projects, application enhancements, and various maintenance activities.`,
				`Designed and developed a <a href="https://google.com">reporting system</a> based on Crystal Report and Java, generating an increase of 20% in efficiencv and performance rate.`,
				`Analyzed system requirements to lead the <strong>development</strong> of 3 Java/J2EE projects, application enhancements, and various maintenance activities.`,
				`Designed and developed a <a href="https://google.com">reporting system</a> based on Crystal Report and Java, generating an increase of 20% in efficiencv and performance rate.`,
				`Analyzed system requirements to lead the <strong>development</strong> of 3 Java/J2EE projects, application enhancements, and various maintenance activities.`,
				`Designed and developed a <a href="https://google.com">reporting system</a> based on Crystal Report and Java, generating an increase of 20% in efficiencv and performance rate.`,
				`Analyzed system requirements to lead the <strong>development</strong> of 3 Java/J2EE projects, application enhancements, and various maintenance activities.`,
				`Designed and developed a <a href="https://google.com">reporting system</a> based on Crystal Report and Java, generating an increase of 20% in efficiencv and performance rate.`,
				`Analyzed system requirements to lead the <strong>development</strong> of 3 Java/J2EE projects, application enhancements, and various maintenance activities.`,
				`Designed and developed a <a href="https://google.com">reporting system</a> based on Crystal Report and Java, generating an increase of 20% in efficiencv and performance rate.`
			]
		},
		{
			id: uuidv4(),
			designation: 'Software Engineer (Part-time)',
			company: 'Major League Hacking Fellowship',
			location: 'USA | Remote',
			duration: 'Oct 2020 - Dec 2020',
			tasks: [
				`Analyzed system requirements to lead the <strong>development</strong> of 3 Java/J2EE projects, application enhancements, and various maintenance activities.`,
				`Designed and developed a <a href="https://google.com">reporting system</a> based on Crystal Report and Java, generating an increase of 20% in efficiencv and performance rate.`,
				`Analyzed system requirements to lead the <strong>development</strong> of 3 Java/J2EE projects, application enhancements, and various maintenance activities.`
			]
		}
	],
	projects: [
		{
			id: uuidv4(),
			name: `<a href="https://github.com/msaaddev/jobboard">Jobboard</a>`,
			desc: `Built a PWA with <strong>HTML, CSS, JavaScript, Next.js</strong>, <strong>Firebase Auth</strong>, and <strong>Firestore</strong> to help developers get hired. Integrated features like user authentication, separate company and applicant dashboards, job posting, and job deleting.`
		},
		{
			id: uuidv4(),
			name: `<a href="https://github.com/msaaddev/jobboard">Jobboard</a>`,
			desc: `Built a PWA with <strong>HTML, CSS, JavaScript, Next.js</strong>, <strong>Firebase Auth</strong>, and <strong>Firestore</strong> to help developers get hired. Integrated features like user authentication, separate company and applicant dashboards, job posting, and job deleting.`
		},
		{
			id: uuidv4(),
			name: `<a href="https://github.com/msaaddev/jobboard">Jobboard</a>`,
			desc: `Built a PWA with <strong>HTML, CSS, JavaScript, Next.js</strong>, <strong>Firebase Auth</strong>, and <strong>Firestore</strong> to help developers get hired. Integrated features like user authentication, separate company and applicant dashboards, job posting, and job deleting.`
		},
		{
			id: uuidv4(),
			name: `<a href="https://github.com/msaaddev/jobboard">Jobboard</a>`,
			desc: `Built a PWA with <strong>HTML, CSS, JavaScript, Next.js</strong>, <strong>Firebase Auth</strong>, and <strong>Firestore</strong> to help developers get hired. Integrated features like user authentication, separate company and applicant dashboards, job posting, and job deleting.`
		},
		{
			id: uuidv4(),
			name: `<a href="https://github.com/msaaddev/jobboard">Jobboard</a>`,
			desc: `Built a PWA with <strong>HTML, CSS, JavaScript, Next.js</strong>, <strong>Firebase Auth</strong>, and <strong>Firestore</strong> to help developers get hired. Integrated features like user authentication, separate company and applicant dashboards, job posting, and job deleting.`
		}
	],
	accomplishments: [
		`<a href="https://nextjs.org/conf/oct21/speakers/msaaddev">Speaker</a>, <a href="https://nextjs.org/conf">Next.js Global Community Conference</a> by Vercel, San Francisco (2021)`,
		`Runner Up, Major League Hacking DevTools Hackathon, Worldwide (2020)`,
		`Authored <a href="https://github.com/msaaddev/open-source">20+ open-source software</a>, including automation tools, node packages, and web apps. Also contributed code/content to many repos.`,
		`Developed an open-source tool around Tailwind CSS that got featured in <a href="https://nodeweekly.com/issues/397">Node Weekly</a> and <a href="https://javascriptweekly.com/issues/547">JavaScript Weekly</a> newsletters (subscribed by half a million developers).`,
		`Participating in Hactoberfest challenge since 2018.`
	]
};

export default userData;
*/
