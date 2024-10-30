<script lang="ts">
	import Project from './Project.svelte';
	import light from '$lib/images/project-android-app-covid-stats.png';

	const androidAppCovidStatsProject = {
		title: 'Android App for COVID Stats',
		description:
			'An Android widget providing real-time COVID-19 statistics for Slovenia, displayed directly on the home screen.',
		githubLink: 'https://github.com/RokZ999/Android-app-for-covid-stats',
		liveLink: '',
		technologies: [
			{ name: 'Java', icon: 'devicon:java' },
			{ name: 'Android', icon: 'devicon:android' }
		]
	};
</script>

<Project {...androidAppCovidStatsProject}>
	<svelte:fragment slot="logo">
		<img src={light} alt="Android App for COVID Stats logo" />
	</svelte:fragment>
</Project>
