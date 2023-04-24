<script>
	import logo from '$lib/images/XNEXUSX.png';
	import Nav from './Nav.svelte';
</script>

<header
	class="flex
            flex-col
            items-center
            p-4
            basis-4"
>
	<a class="max-w-md" href="/">
		<div>
			<img src={logo} alt="XXX" />
			<p class="text-center text-lg">X STRAIGHT EDGE GEAR X</p>
		</div>
	</a>
	<Nav />
</header>
