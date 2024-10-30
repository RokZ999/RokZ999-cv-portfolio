<script lang="ts">
	import Project from './Project.svelte';
	import light from '$lib/images/project-fitness-health-tracker.png';

	const fitnessHealthTrackerProject = {
		title: 'Fitness Health Tracker',
		description: 'Simple Fitness webapp utilizing Sveltekit, PocketBase.',
		githubLink: 'https://github.com/RokZ999/Fitness-Health-Tracker',
		liveLink: 'https://fitness-health-tracker-7xcwuquvq-rokz999s-projects.vercel.app/app',
		technologies: [
			{ name: 'Svelte', icon: 'devicon:svelte' },
			{ name: 'PocketBase', icon: 'logos:pocket-base' }
		]
	};
</script>

<Project {...fitnessHealthTrackerProject}>
	<svelte:fragment slot="logo">
		<img src={light} alt="Fitness Health Tracker logo" />
	</svelte:fragment>
</Project>
