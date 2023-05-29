import { getProducts } from '../../../store.js';
export const load = async (ctx) => {
    await getProducts();
    const productType = ctx.page.query.get('type');
    if (productType) {
        products.update((items) => {
            const updated = items.filter((product) => product.node.productType === productType);
            return updated;
        });
    }
    return { props: { products} };
}