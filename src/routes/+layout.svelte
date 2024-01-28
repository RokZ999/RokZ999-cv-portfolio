<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import { AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	//Icons
	import Iconify from '@iconify/iconify';
	import { page } from '$app/stores';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl">RokZ - CV / Portfolio</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail"><LightSwitch /></svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<AppRail>
			<AppRailAnchor href="/" selected={$page.url.pathname === '/'}>
				<svelte:fragment slot="lead">
					<span class="iconify" data-icon="eva:home-outline"></span>
				</svelte:fragment>
				<span>About me</span>
			</AppRailAnchor>

			<AppRailAnchor href="/experiences" selected={$page.url.pathname === '/experiences'}>
				<svelte:fragment slot="lead">
					<span class="iconify" data-icon="eva:briefcase-outline"></span>
				</svelte:fragment>
				<span>Experiences</span>
			</AppRailAnchor>

			<AppRailAnchor href="/projects" selected={$page.url.pathname === '/projects'}>
				<svelte:fragment slot="lead">
					<span class="iconify" data-icon="eva:folder-outline"></span>
				</svelte:fragment>
				<span>Projects</span>
			</AppRailAnchor>

			<svelte:fragment slot="trail">
				<AppRailAnchor href="/" target="_blank" title="Account">
					<span>GitHub</span>
				</AppRailAnchor>
			</svelte:fragment>
		</AppRail>
	</svelte:fragment>

	<svelte:fragment>
		<div class="m-8 flex justify-center">
			<slot />
		</div>
	</svelte:fragment>
</AppShell>
