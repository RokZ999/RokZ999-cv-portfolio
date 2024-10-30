<script lang="ts">
	export let githubLink: string;
	export let liveLink: string | null = null;
	export let description: string;
	export let technologies: Technology[];
</script>

<div
	class="card p-2 border-2 dark:border-gray-200 text-w font-semibold border-gray-800 variant-glass-surface md:w-80 md:min-h-96"
>
	<header class="flex items-center justify-center w-full h-52 p-4">
		<div class="w-full h-full flex items-center justify-center overflow-hidden">
			<slot name="logo"></slot>
		</div>
	</header>

	<section class="mt-4">
		<p class="min-h-20">{description}</p>
		<div class="flex justify-around mt-2">
			{#if githubLink}
				<a href={githubLink} class="btn icon-btn" target="_blank">
					<span class="iconify" data-icon="mingcute:github-fill"></span> Repo
				</a>
			{/if}
			{#if liveLink}
				<a href={liveLink} class="btn icon-btn" target="_blank">
					<span class="iconify" data-icon="majesticons:open"></span> Live
				</a>
			{/if}
		</div>
	</section>

	<hr class="h-0.5 dark:bg-gray-200 bg-gray-800" />

	<footer class="mt-4">
		<div class="text-4xl flex gap-2 items-center justify-center bottom-10">
			{#each technologies as { name, icon }}
				<span class="iconify" data-icon={icon}>{name}</span>
			{/each}
		</div>
	</footer>
</div>
