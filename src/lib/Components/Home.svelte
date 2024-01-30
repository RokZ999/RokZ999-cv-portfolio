<script>
	import { Avatar } from '@skeletonlabs/skeleton';
	import InfinityAnimation from '$lib/Components/utils/InfinityAnimation.svelte';
	import MyTime from './utils/MyTime.svelte';
	import pfp from '$lib/images/rokz-cv-portfolio-home-picture.png';

	import Typewriter from 'svelte-typewriter';

	let loop_text = ['Software Dev 🖥️', 'Fluent in Java ☕', 'Learning Rust 🦀'];
</script>

<div
	class="card card-hover overflow-hidden p-4 md:p-8 border-2 dark:border-gray-200 border-gray-800 variant-glass-surface"
>
	<div class="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
		<div class="justify-self-center md:justify-self-end">
			<Avatar src={pfp} width="min-w-1/4" rounded="rounded-full" />
		</div>

		<div class="text-center md:text-left">
			<h1 class="text-4xl md:text-5xl">
				Hi There!
				<InfinityAnimation>👋🏻</InfinityAnimation>
			</h1>
			<h3 class="text-3xl md:text-5xl mt-2">
				I'M <span class="text-purple-500 font-bold">Rok Zabret</span>
			</h3>

			<Typewriter mode="loop" {loop_text}>
				{#each loop_text as item}
					<span class="text-2xl text-purple-500 font-semibold">{item}</span>
				{/each}
			</Typewriter>

			<div class="mt-4 mb-8">
				<p>Location: Slovenia</p>
				<MyTime />
			</div>

			<div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
				<a
					href="experiences"
					data-sveltekit-preload-data="hover"
					type="button"
					class="btn variant-filled mt-4 md:mt-0"
				>
					<span class="iconify" data-icon="eva:briefcase-outline"></span>
					<p>Experiences</p>
				</a>
				<a
					href="projects"
					data-sveltekit-preload-data="hover"
					type="button"
					class="btn variant-filled mt-4 md:mt-0"
				>
					<span class="iconify" data-icon="eva:folder-outline"></span>
					<p>Projects</p>
				</a>
			</div>
		</div>
	</div>
</div>
