<script lang="ts">
	import Project from './Project.svelte';
	import light from '$lib/images/project-substitution-solver.png';

	const substitutionSolverProject = {
		title: 'Substitution Tool Solver',
		description:
			'A tool used for solving substitution ciphers, with user-friendly interface with jQuery and Bootstrap.',
		githubLink: 'https://github.com/RokZ999/Substitution-tool-solver-jQuerry-Bootstrap',
		liveLink: 'https://substitution-tool-solver-j-querry-bootstrap.vercel.app',
		technologies: [
			{ name: 'jQuery', icon: 'devicon:jquery' },
			{ name: 'Bootstrap', icon: 'devicon:bootstrap' },
			{ name: 'Python', icon: 'devicon:python' },
			{ name: 'Vercel', icon: 'skill-icons:vercel-light' }
		]
	};
</script>

<Project {...substitutionSolverProject}>
	<svelte:fragment slot="logo">
		<img src={light} alt="Substitution Tool Solver logo" class="dark:invert" />
	</svelte:fragment>
</Project>
