import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'MSc. Computer Science',
		description: '',
		location: 'Canada',
		logo: Assets.LU,
		name: '',
		organization: 'Lakehead University',
		period: { from: new Date(2021, 5, 5), to: new Date(2023, 5, 25) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['Software Development', 'Cloud Computing', 'Machine Learning & AI', 'Python']
	},
	{
		degree: 'Bachelor degree of Information & Technology',
		description: '',
		location: 'India',
		logo: Assets.GTU,
		name: '',
		organization: 'Gujarat Technological University',
		period: { from: new Date(2023, 0, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Computer Architecture', 'Algorithms and Data structures']
	}
];

export const title = 'Education';
