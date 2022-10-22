import {List, Datagrid, TextField, Edit, SimpleForm, EditButton, TextInput, Create} from 'react-admin';

export const listProducts = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="productName" />
            <TextField source="price" />
            <TextField source="description" />
            <TextField source="category" />
            <TextField source="brand" />
            <TextField source="urlImage" />

            <EditButton basePath="/product"/>
        </Datagrid>
    </List>
)
export const editProduct = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="productName" />
            <TextInput source="price" />
            <TextInput source="description" />
            <TextInput source="category" />
            <TextInput source="brand" />
            <TextInput source="urlImage" />
        </SimpleForm>
    </Edit>

)
export const createProduct = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput setValue="0" source="id" />
            <TextInput source="productName" />
            <TextInput source="price" />
            <TextInput source="description" />
            <TextInput source="category" />
            <TextInput source="brand" />
            <TextInput source="urlImage" />
        </SimpleForm>
    </Create>

)
