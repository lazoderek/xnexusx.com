<script>
    import { goto, beforeNavigate, afterNavigate } from '$app/navigation';
    import { page } from "$app/stores";
    export let data;
    $: products = data.products;
</script>

<slot />
<div class="grid
            grid-cols-2
            gap-y-7
            gap-x-10
            max-w-2xl
            text-xl
            m-5"
>
    {#each products.edges as product}
        <a href={$page.url.pathname + "/" + product.node.id.split("/").pop()} class="group">
            <div class="flex
                        flex-col">
                <div>
                    <img class="border-2
                                border-white"
                        src={product.node.images.edges[0].node.url}
                        alt="tee" />
                </div>
                <div class="mx-2
                            mt-3">
                    <p class="group-hover:underline">{product.node.title}</p>
                    <p>${product.node.priceRangeV2.minVariantPrice.amount}</p>
                </div>
            </div>
        </a>
    {/each}
</div>