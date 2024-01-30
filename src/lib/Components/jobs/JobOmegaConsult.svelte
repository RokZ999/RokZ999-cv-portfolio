<script>
	import Job from '$lib/Components/jobs/Job.svelte';

	let title = 'Full Stack Web Developer';
	let company = 'Omega Consult projektni management, d.o.o.';
	let period = 'Mar 2022 - Jul 2022';
	let location = 'Ljubljana, Slovenia';
	let responsibilities = [
		'Developed and maintained web applications using Angular, JavaEE, and Oracle SQL for various projects',
		'Migrated legacy code to newer, more efficient versions, improving application performance and maintainability.'
	];
	let skills = [
		'jQuery',
		'HTML',
		'CSS',
		'Angular',
		'Java',
		'JavaScript',
		'Bootstrap',
		'AJAX',
		'PL/SQL'
		// Added jQuery, HTML, CSS, JavaScript, and Bootstrap to the original list
	];
</script>

<Job {title} {company} {period} {location} {responsibilities} {skills} />
