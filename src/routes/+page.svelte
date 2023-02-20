<script lang="ts">
	import { createCounter } from '$lib';
	const { increment, counter } = createCounter();
</script>

<h2>Counter example:</h2>
<button on:click={() => increment()}>Click me</button>
<span>Clicked {$counter} times</span>
