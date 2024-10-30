<script lang="ts">
	import Project from './Project.svelte';
	import light from '$lib/images/project-avto-cena-logo.png';

	const avtoCenaProject = {
		title: 'Avto-cena',
		description: 'Web application which tracks car prices in Slovenia.',
		githubLink: '',
		liveLink: 'https://avto-cena.si',
		technologies: [
			{ name: 'Python', icon: 'devicon:python' },
			{ name: 'MongoDB', icon: 'devicon:mongodb' },
			{ name: 'React', icon: 'devicon:react' },
			{ name: 'Vercel', icon: 'skill-icons:vercel-light' },
			{ name: 'NextJS', icon: 'devicon:nextjs' }
		]
	};
</script>

<Project {...avtoCenaProject}>
	<svelte:fragment slot="logo">
		<img src={light} alt="Avto-cena logo" class="dark:invert-0 invert" />
	</svelte:fragment>
</Project>
