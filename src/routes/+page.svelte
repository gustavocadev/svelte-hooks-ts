<script lang="ts">
	import { createCounter } from '$lib';
	const { increment, counter } = createCounter();
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button on:click={() => increment()}>Click me</button>
<span>Clicked {$counter} times</span>
