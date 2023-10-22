<script>
	import '../app.postcss';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let onFirstLoad = false;
	onMount(() => {
		onFirstLoad = true;
	});
</script>

{#if onFirstLoad}
<div in:fade={{ duration: 300, delay: 400 }} out:fade={{ duration: 300 }}>
	<slot />
</div>
{/if}
