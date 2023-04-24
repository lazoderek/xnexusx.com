<script context="module">
	export const BUTTON_GROUP = {};
</script>

<script>
	import { setContext, onDestroy } from 'svelte';
	import { writable } from 'svelte/store';
	
	export let color = false;
	export let size = false;
	export let value = [];
	const values = writable(value);
	$: values.set(value);
	
	setContext(BUTTON_GROUP, {
		selectButton: (val) => {
			if (value.includes(val)) {
				if (!(size && value.length === 1)) {
					value.splice(value.indexOf(val), 1);
					value = value;
				}
			} else if (color) {
				value = [...value, val]
			} else {
				value = [val];
			}
		},
		values
	});
</script>

<div>
	<slot />
</div>