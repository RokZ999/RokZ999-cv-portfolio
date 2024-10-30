<script lang="ts">
	import Project from './Project.svelte';
	import light from '$lib/images/project-dynamics-365-reverse-engineering-tool.png';

	const dynamics365ReverseEngineeringProject = {
		title: 'Dynamics 365 API Reverse Engineering Tool',
		description: 'Gui app that helps with reverse engineering the Dynamics 365 apps API.',
		githubLink: 'https://github.com/RokZ999/Dynamics-365-API-Reverse-Engineering-Tool',
		liveLink: '',
		technologies: [{ name: 'Python', icon: 'devicon:python' }]
	};
</script>

<Project {...dynamics365ReverseEngineeringProject}>
	<svelte:fragment slot="logo">
		<img src={light} alt="Dynamics 365 Reverse Engineering Tool logo" />
	</svelte:fragment>
</Project>
