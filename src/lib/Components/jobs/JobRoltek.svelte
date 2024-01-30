<script>
	import Job from '$lib/Components/jobs/Job.svelte';

	export let title = 'Backend Developer';
	export let company = 'ROLTEK';
	export let period = 'Aug 2021 - Dec 2021';
	export let location = 'Domžale, Slovenia';
	export let responsibilities = [
		'Developed RESTful web services with JavaEE, MSSQL, and SpringMVC.',
		'Prepared comprehensive software documentation.'
	];
	export let skills = ['MSSQL', 'Java'];
</script>

<Job {title} {company} {period} {location} {responsibilities} {skills} />
