<script lang="ts">
	import Project from './Project.svelte';
	import light from '$lib/images/project-slo-dev-jobs.png';

	const avtoCenaProject = {
		title: 'Avto-cena',
		description: 'Eliminate the hassle of opening every job post to see the salary on slotech.si',
		githubLink: 'https://github.com/RokZ999/SloDevJobs',
		liveLink: 'https://slo-dev-jobs.vercel.app/',
		technologies: [
			{ name: 'Svelte', icon: 'devicon:svelte' },
			{ name: 'Bun', icon: 'devicon:bun' },
			{ name: 'Vercel', icon: 'skill-icons:vercel-light' }
		]
	};
</script>

<Project {...avtoCenaProject}>
	<svelte:fragment slot="logo">
		<img src={light} alt="Avto-cena logo" />
	</svelte:fragment>
</Project>
