import api from "./api.js"

const fake ='/offers'
const path = '/data' + fake;
const pageSize = 3;

const endpoint = {
    base: path,
    getAll: path + '?sortBy=_createdOn%20desc',
    byId: (id) => path + '/' + id,
    sortById: (id) => path + `?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`,
    // endpoints only using pagination
    count: path + '?count',
    withPageSize: path + `?sortBy=_createdOn%20desc&pageSize=${pageSize}&offset=`,

    addApply: `/data/applications`,
    countApply: (offerId) => `/data/applications?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`,
    countApplyOwner: (offerId, userId) => `/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}
const getAll = () => api.get(endpoint.getAll);
const getById = (id) => api.get(endpoint.byId(id));
const getSortedById = (id) => api.get(endpoint.sortById(id));
const addData = (data) => api.post(endpoint.base, data);
const editData = (id, data) => api.put(endpoint.byId(id), data);
const deleteById = (id) => api.del(endpoint.byId(id));

const addOffer = (offerId) => api.post(endpoint.addApply, {offerId});
const getCountOffer = (offerId) => api.get(endpoint.countApply(offerId));
const getIsApply = (offerId, userId) => api.get(endpoint.countApplyOwner((offerId, userId)));

// request data only using pagination
const getAllWithPageSize = async (page = 1) => {
    const [data, count] = await Promise.all([
        api.get(endpoint.withPageSize + (page - 1) * pageSize),
        api/get(endpoint.count)
    ])

    return {
        data,
        pages: Math.ceil(count / pageSize)
    }
}

export {
    getAll,
    getById,
    deleteById,
    addData,
    editData,
    getSortedById,
    getAllWithPageSize,
    addOffer,
    getCountOffer,
    getIsApply
}