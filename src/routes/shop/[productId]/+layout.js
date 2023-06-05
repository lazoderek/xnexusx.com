export const load = async (loadEvent) => {
    const { parent } = loadEvent;
    const parentData = await parent();
    const { products } = parentData;

    return {
        products
    };
}