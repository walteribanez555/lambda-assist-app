import { getDiscount, postDiscount, putDiscount, deleteDiscount } from '../models/discounts.model.mjs';


export async function getDiscounts({id}) {
    return getDiscount({id, schema : 'mobile-assistrip'});
}

export async function postDiscounts({data}) {
    return postDiscount({data, schema : 'mobile-assistrip'});
        
}

export async function putDiscounts({id, data}) {
    return putDiscount({id, data, schema : 'mobile-assistrip'});
        
}

export async function deleteDiscounts({id}) {
    return deleteDiscount({id, schema : 'mobile-assistrip'});
        
}
