<script>
	import '../app.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
</script>

<div class="flex justify-center">
	<div
		class="min-h-screen
				flex
				flex-col
				justify-between
				h-screen"
	>
		<Header />
			<main class="overflow-y-auto h-full">
				<slot />
			</main>
		<Footer />
	</div>
</div>
