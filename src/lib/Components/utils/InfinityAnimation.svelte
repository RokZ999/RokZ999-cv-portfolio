<script>
	import { onMount } from 'svelte';
	let speed = 1500;

	function toggleShake() {
		setInterval(() => {}, speed + 200);
	}

	onMount(() => {
		toggleShake();
	});
</script>

<span class="shaking" style="--shake-speed: {speed}ms">
	<slot />
</span>

<style>
	:global(:root) {
		--shake-speed: 1000ms;
	}

	@keyframes shake {
		0%,
		100% {
			transform: translateX(0);
		}
		25% {
			transform: translateX(-3px);
		}
		75% {
			transform: translateX(3px);
		}
	}

	.shaking {
		display: inline-block;
		animation: shake var(--shake-speed) infinite;
	}
</style>
