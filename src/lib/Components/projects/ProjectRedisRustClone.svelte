<script lang="ts">
	import Project from './Project.svelte';
	import light from '$lib/images/project-redis-rust.png';

	const rustRedisCloneProject = {
		title: 'Rust Redis Clone',
		description:
			'A Redis clone project implemented in Rust, replicating the core functionalities of Redis, for my bachelor thesis.',
		githubLink: 'https://github.com/RokZ999/redis-rust',
		liveLink: '',
		technologies: [
			{ name: 'Rust', icon: 'cib:rust' },
			{ name: 'In-memory DB', icon: 'devicon:redis' }
		]
	};
</script>

<Project {...rustRedisCloneProject}>
	<svelte:fragment slot="logo">
		<img src={light} alt="Rust Redis Clone logo" />
	</svelte:fragment>
</Project>
