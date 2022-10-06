import axiosClient from "./axiosClient";
const ProductApi = {
    getAll: (params) => {
        const url = '/Product';
        return axiosClient.get(url, { params });
    },
    get: (id) => {
        const url = `/Product/${id}`;
        return axiosClient.get(url);
    },
    delete: (id) => {
        const url = `/Product/${id}`;
        return axiosClient.delete(url);
    },
    // post:(body) => {
    //     const url = '/Product';
    //     return axiosClient.post(url, body);
    // }
}
export default ProductApi;