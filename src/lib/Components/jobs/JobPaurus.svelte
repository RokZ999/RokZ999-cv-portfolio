<script>
	import Job from '$lib/Components/jobs/Job.svelte';

	export let title = 'QA Automation Engineer';
	export let company = 'Paurus Group';
	export let period = 'Jul 2022 - Present';
	export let location = 'Ljubljana, Slovenia';
	export let responsibilities = [
		'Developed automated tests for Microsoft Dynamics 365',
		'Mentored and onboarded new employees',
		'Reduced codebase by 40% by implementing Lombok in Java projects',
		'Reverse-engineered APIs, leading to a significant reduction in testing time.',
		'Enhanced test automation frameworks to boost testing efficiency and support project timelines.'
	];
	export let skills = ['TestNG', 'Selenium', 'Java'];
</script>

<Job {title} {company} {period} {location} {responsibilities} {skills} />
