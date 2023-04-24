<script>
    import { getContext } from 'svelte';
	import { BUTTON_GROUP } from '$lib/buttons/ButtonGroup.svelte';
    const { selectButton, values } = getContext(BUTTON_GROUP);

    export let value;
	export let active = true;
	$: active = $values.includes(value);
</script>

<button on:click={() => selectButton(value)} class:active>
    <slot />
</button>

<style>
    colorbutton{
        border-style: dotted;
        border-width: 1.5px;
        border-color:white;
        width: auto;
        height: 2.1em;
        padding-top: 0.2em;
        padding-inline: 0.8em;
    }
    sizebutton{
        border-style: dotted;
        border-color:white;
        border-width: 1.5px;
        width: 2.1em;
        height: 2.1em;
        padding-top: 0.2em;
    }

    .active {
		border-style: solid;
	}
</style>