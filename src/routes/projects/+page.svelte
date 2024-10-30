<script>
	import ProjectAndroidAppCovidTracker from '$lib/Components/projects/ProjectAndroidAppCovidTracker.svelte';
	import ProjectAvtoCena from '$lib/Components/projects/ProjectAvtoCena.svelte';
	import ProjectDynamics365ReverseEngineeringProject from '$lib/Components/projects/ProjectDynamics365ReverseEngineeringProject.svelte';
	import ProjectFitnessHealthTracker from '$lib/Components/projects/ProjectFitnessHealthTracker.svelte';

	import ProjectRedisRustClone from '$lib/Components/projects/ProjectRedisRustClone.svelte';
	import ProjectSloDevJobs from '$lib/Components/projects/ProjectSloDevJobs.svelte';
	import ProjectSubstitutionToolSolver from '$lib/Components/projects/ProjectSubstitutionToolSolver.svelte';
</script>

<div class="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
	<ProjectAvtoCena />
	<ProjectSloDevJobs />
	<ProjectRedisRustClone />
	<ProjectAndroidAppCovidTracker />
	<ProjectSubstitutionToolSolver />
	<ProjectDynamics365ReverseEngineeringProject />
	<ProjectFitnessHealthTracker />
</div>
