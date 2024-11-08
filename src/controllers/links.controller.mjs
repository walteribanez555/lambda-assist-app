
import { getLink, postLink, putLink, deleteLink } from '../models/links.model.mjs';


export async function getLinks({id}) {
    return getLink({id, schema : 'mobile-assistrip'});
}

export async function postLinks({data}) {
    return postLink({data, schema : 'mobile-assistrip'});
        
}

export async function putLinks({id, data}) {
    return putLink({id, data, schema : 'mobile-assistrip'});
        
}

export async function deleteLinks({id}) {
    return deleteLink({id, schema : 'mobile-assistrip'});
        
}