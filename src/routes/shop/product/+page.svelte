<script>
	import prod from '$lib/images/LOGO-TEE-GREEN.png';
	import Button from '$lib/buttons/Button.svelte';
	import ButtonGroup from '$lib/buttons/ButtonGroup.svelte';
	let values = { color: [], size: [] };
</script>

<div class="flex justify-center">
	<div
		class="flex flex-col
                max-w-4xl
                text-xl
                m-14"
	>
		<div class="">
			<div class="flex flex-col space-y-20">
				<div>
					<img class="" src={prod} alt="tee" />
				</div>
				<div class="flex flex-row mx-12">
					<div class="flex flex-col space-y-2 w-full">
						<div class="">
							<p class="">LOGO TEE</p>
							<p class="text-[16px]">100% HEAVY COTTON</p>
						</div>
						<div class="flex flex-col space-y-[0.4em]">
							<div class="flex flex-row justify-between">
								<div class="flex flex-row space-x-[0.4em]">
									<ButtonGroup color bind:value={values.color}>
										<Button class="border border-white" value="white">WHITE</Button>
										<colorbutton value="green">GREEN</colorbutton>
									</ButtonGroup>
								</div>
                                <!--
								<div class="flex flex-row">
									<Button class="colorbutton" value="cart">ADD TO CART</Button>
								</div>
                                -->
							</div>
							<div class="space-x-[0.16em] font-sub-sans">
								<ButtonGroup size bind:value={values.size} >
									<Button value="white">WHITE</Button>
									<Button value="green">GREEN</Button>
								</ButtonGroup>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!--
<div class ="flex flex-col space-y-[0.4em]">
    <div class="flex flex-row justify-between">
        <div class="flex flex-row space-x-[0.4em]">
            <Button class="colorbutton">WHITE</Button>
            <Button class="colorbutton">GREEN</Button>
        </div>
        <div class="flex flex-row">
            <Button class="colorbutton">ADD TO CART</Button>
        </div>
    </div>
        <div class="space-x-[0.16em] font-sub-sans">
            <Button class="sizebutton">XS</Button>
            <Button class="sizebutton">S</Button>
            <Button class="sizebutton">M</Button>
            <Button class="sizebutton">L</Button>
            <Button class="sizebutton">XL</Button>
            <Button class="sizebutton">2X</Button>
        </div>
</div>
-->


<!--
<script>
	import Button from './Button.svelte';
	import ButtonGroup from './ButtonGroup.svelte';
</script>

<h1>Default</h1>
<ButtonGroup>
	<Button>
		Foo
	</Button>
	<Button>
		Bar
	</Button>
	<Button>
		Baz
	</Button>
</ButtonGroup>
-->

<!--
<script>
	import { getContext } from 'svelte';
	import { BUTTON_GROUP } from './ButtonGroup.svelte';
	const { selectButton, values } = getContext(BUTTON_GROUP);
	
	export let value;
	export let active = true;
	$: active = $values.includes(value);
</script>

<style>
	.active {
		color: red;
	}
</style>

<button on:click={() => selectButton(value)} class:active>
	<slot />
</button>
-->

<!--
    <script context="module">
	export const BUTTON_GROUP = {};
</script>

<script>
	import { setContext, onDestroy } from 'svelte';
	import { writable } from 'svelte/store';
	
	export let multiple = false;
	export let mandatory = false;
	export let value = [];
	const values = writable(value);
	$: values.set(value);
	
	setContext(BUTTON_GROUP, {
		selectButton: (val) => {
			if (value.includes(val)) {
				if (!(mandatory && value.length === 1)) {
					value.splice(value.indexOf(val), 1);
					value = value;
				}
			} else if (multiple) {
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
-->