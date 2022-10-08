import axiosClient from "./axiosClient";
const ProductApi = {
    getAll: () => {
        const url = `/api/Product`
        return axiosClient.get(url);
    },
    getMany: (params) => {
        const url = `/Product`;
        return axiosClient.get(url, {params});
    },
    get: (id) => {
        const url = `/api/Product/${id}`;
        return axiosClient.get(url);
    },
    delete: (id) => {
        const url = `/api/Product/id?id=${id}`;
        return axiosClient.delete(url);
    },
    // post data
    add: (data) => {
        const url = '/api/Product';
        return axiosClient.post(url, data);
    },
    // update data
    update: (data) => {
        const url = '/api/Product';
        return axiosClient.put(url, data);
    },

}
export default ProductApi;