<script lang="ts">
	export let title: string;
	export let company: string;
	export let period: string;
	export let location: string;
	export let responsibilities: string[];
	export let skills: string[];
</script>

<div class="card p-4 border-2 dark:border-gray-200 border-gray-800 variant-glass-surface">
	<header>
		<h2 class="text-2xl font-bold">{title}</h2>
		<p>{company} · {period}</p>
		<p>{location}</p>
	</header>

	<section class="mt-2 pl-8">
		<ul class="list-disc">
			{#each responsibilities as responsibility}
				<li>{responsibility}</li>
			{/each}
		</ul>
	</section>

	<footer class="mt-2">
		<h3 class="font-semibold">Skills:</h3>
		<ul class="mt-2 flex flex-wrap gap-1">
			{#each skills as skill}
				<li class="btn btn-sm variant-filled">{skill}</li>
			{/each}
		</ul>
	</footer>
</div>
