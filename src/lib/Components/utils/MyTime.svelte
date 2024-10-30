<script>
	import { onMount } from 'svelte';

	let ljubljanaTime = 'Error at calculating';

	onMount(() => {
		const offset = new Date().getTimezoneOffset();
		const ljubljanaOffset = -60;
		const adjustedOffset = ljubljanaOffset - 60;
		const currentTime = new Date(new Date().getTime() + (adjustedOffset - offset) * 60000);
		ljubljanaTime = currentTime.toLocaleTimeString('en-US', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: false
		});
	});
</script>

Local Time: {ljubljanaTime}
