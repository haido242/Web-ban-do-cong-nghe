import {Admin, Resource} from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import {listProducts, editProduct, createProduct} from './components/productsAdmin';

export default function AdminPage() {
  return (
    <div className="Admin">
      <Admin dataProvider={simpleRestProvider("https://localhost:7073/api")}>
        <Resource name="product" list={listProducts} edit={editProduct} create={createProduct}/>
      </Admin>
    </div>
  );
}
