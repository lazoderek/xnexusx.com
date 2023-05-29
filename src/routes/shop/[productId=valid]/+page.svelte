<script>
	import { page } from '$app/stores';
	const productId = $page.params.productId;
	import prod from '$lib/images/LOGO-TEE-GREEN.png';
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
				<div class="flex flex-row mx-16">
					<div class="flex flex-col space-y-2 w-full">
						<div class="">
							<p class="">LOGO TEE</p>
							<p class="text-[16px]">100% HEAVY COTTON</p>
						</div>
						<div class ="flex flex-col space-y-[0.4em]">
							<div class="flex flex-row justify-between">
								<div class="flex flex-row space-x-[0.4em]">
									<div class="border py-0.5 px-2">WHITE</div>
									<div class="border py-0.5 px-2">GREEN</div>
								</div>
								<div class="flex flex-row">
									<div class="border py-0.5 px-2">ADD TO CART</div>
								</div>
							</div>
							<div class="space-x-[0.16em] font-sub-sans">
								<div class="flex flex-row space-x-[0.4em]">
									<div class="border py-0.5 px-1.5">XS</div>
									<div class="border py-0.5 px-1.5">S</div>
									<div class="border py-0.5 px-1.5">M</div>
									<div class="border py-0.5 px-1.5">L</div>
									<div class="border py-0.5 px-1.5">XL</div>
									<div class="border py-0.5 px-1.5">2X</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>