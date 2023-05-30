<script>
    import { goto, beforeNavigate, afterNavigate } from '$app/navigation';
    export let data;
    const products = data.products;
    const handleClick = () => {
        goto('/$productId', {replaceState: true})
    }
	import tee from '$lib/images/TEE.png';
	import hoodie from '$lib/images/HOODIE.png';
	import xxx from '$lib/images/XXX.png';
	import gameover from '$lib/images/GAMEOVER.png';
</script>


<div class="flex justify-center">
    <div
        class="grid
                grid-cols-2
                gap-y-7
                gap-x-10
                max-w-2xl
                text-xl
                m-5"
    >
        <div class="">
            <div class="flex flex-col">
                <div>
                    <img class="border-2 border-white" src={tee} alt="tee" />
                </div>
                <div class="mx-2 mt-3">
                    <p class="">NEXUS LOGO TEE</p>
                    <p>$25</p>
                </div>
            </div>
        </div>
        <div class="">
            <div class="flex flex-col">
                <div>
                    <img class="border-2 border-white" src={hoodie} alt="hoodie" />
                </div>
                <div class="mx-2 mt-3">
                    <p class="">NEXUS LOGO HOODIE</p>
                    <p>$50</p>
                </div>
            </div>
        </div>
        <div class="">
            <div class="flex flex-col">
                <div>
                    <img class="border-2 border-white" src={xxx} alt="xxx" />
                </div>
                <div class="mx-2 mt-3">
                    <p class="">XXX TEE</p>
                    <p>$25</p>
                </div>
            </div>
        </div>
        <div class="">
            <div class="flex flex-col">
                <div>
                    <img class="border-2 border-white" src={gameover} alt="gameover" />
                </div>
                <div class="mx-2 mt-3">
                    <p class="">NEXUS LOGO TEE</p>
                    <p>$25</p>
                </div>
            </div>
        </div>
    </div>
</div>