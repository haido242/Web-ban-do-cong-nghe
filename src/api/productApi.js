import axiosClient from "./axiosClient";
const ProductApi = {
    getAll: (params) => {
        const url = `/Product`;
        return axiosClient.get(url, {params});
    },
    get: (id) => {
        const url = `/Product/${id}`;
        return axiosClient.get(url);
    },
    delete: (id) => {
        const url = `/Product/id?id=${id}`;
        return axiosClient.delete(url);
    },
    // post data
    add: (data) => {
        const url = '/Product';
        return axiosClient.post(url, data);
    },
    // update data
    update: (data) => {
        const url = '/Product';
        return axiosClient.put(url, data);
    },

}
export default ProductApi;