<script>
	import { particlesInit } from '@tsparticles/svelte';
	import { onMount } from 'svelte';
	import { loadSlim } from '@tsparticles/slim';
	import { modeCurrent } from '@skeletonlabs/skeleton';

	$: currentMode = $modeCurrent;

	let ParticlesComponent;

	onMount(async () => {
		const module = await import('@tsparticles/svelte');
		ParticlesComponent = module.default;

		window.innerWidth <= 768
			? //Mobile
				(particlesConfig.particles.number.value = 50)
			: //Desktop
				(particlesConfig.particles.number.value = 200);
	});

	$: if (currentMode) {
		particlesConfig.particles.color.value = '#000';
		particlesConfig.particles.links.color = '#000';
	} else {
		particlesConfig.particles.color.value = '#FFF';
		particlesConfig.particles.links.color = '#FFF';
	}
	onMount(async () => {
		const module = await import('@tsparticles/svelte');
		ParticlesComponent = module.default;
	});

	let particlesConfig = {
		particles: {
			color: {
				value: '#FFF'
			},
			links: {
				enable: true,
				color: '#FFF'
			},
			move: {
				enable: true,
				speed: 0.6
			},
			number: {
				value: -1
			},
			opacity: {
				value: 0.5,
				random: false
			}
		},
		interactivity: {
			events: {
				onHover: {
					enable: true,
					mode: 'grab'
				}
			},
			modes: {
				grab: {
					distance: 400,
					line_linked: {
						opacity: 1
					}
				}
			}
		}
	};

	let onParticlesLoaded = (event) => {
		const particlesContainer = event.detail.particles;
	};

	void particlesInit(async (engine) => {
		await loadSlim(engine);
	});
</script>

<svelte:component
	this={ParticlesComponent}
	id="tsparticles"
	class="-z-10"
	style=""
	options={particlesConfig}
	on:particlesLoaded={onParticlesLoaded}
/>
