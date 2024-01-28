<script>
	import { onMount } from 'svelte';

	let ljubljanaTime = 'Error at calculating';

	onMount(() => {
		const offset = new Date().getTimezoneOffset();
		const ljubljanaOffset = -60; // CET is UTC+1, CEST is UTC+2 but handled by Date.toLocaleTimeString
		const currentTime = new Date(new Date().getTime() + (ljubljanaOffset - offset) * 60000);
		ljubljanaTime = currentTime.toLocaleTimeString('en-US', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: false
		});
	});
</script>

Time: {ljubljanaTime} CET/CEST
