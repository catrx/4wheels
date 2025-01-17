import React, {useCallback, useState} from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {useDispatch} from "react-redux";
import {useCategories} from "../../../../hooks/use_categories";
import {useProviders} from "../../../../hooks/use_providers";
import {addProduct} from "../../../../actions/product";
import {FileStack} from "../../../../components/filestack/filestack";

export const ProductForm = () => {
    const dispatch = useDispatch();
    const {categories, loadingCategories} = useCategories();
    const {providers, loadingProviders} = useProviders();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [description, setDescription] = useState("");
    const [handle, setHandle] = useState("");
    const [categoryName] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [providerDenomination] = useState("");
    const [providerId, setProviderId] = useState("");

    const handlePictureSave = useCallback((result) => {
        const pictureHandle = result.filesUploaded[0].handle
        setHandle(pictureHandle);
    }, []);

    const confirmProduct = useCallback(() => {
        const newProduct = {
            name: name,
            stock: parseInt(stock),
            price: parseFloat(price),
            description: description,
            provider: providers.filter(
                provider => provider.id === parseInt(providerId)
            )[0],
            category: categories.filter(
                category => category.id === parseInt(categoryId)
            )[0],
            handle
        };
        addProduct(newProduct)(dispatch);
        window.location.reload();
    }, [
        name,
        stock,
        price,
        description,
        providers,
        categories,
        providerId,
        categoryId,
        handle,
        dispatch
    ]);

    if (loadingProviders || loadingCategories) {
        return null;
    }
    return(
        <Form>
            <FormGroup>
                <Label for="name">Nom du véhicule</Label>
                <Input
                    type="text"
                    name="name"
                    id="name"
                    onChange={e => setName(e.target.value)}
                    value={name}
                />
            </FormGroup>
            <FormGroup>
                <Label for="price">Prix</Label>
                <Input
                    type="number"
                    name="price"
                    id="price"
                    onChange={e => setPrice(e.target.value)}
                    value={price}
                />
            </FormGroup>
            <FormGroup>
                <Label for="stock">Stock</Label>
                <Input
                    type="number"
                    name="stock"
                    id="stock"
                    onChange={e => setStock(e.target.value)}
                    value={stock}
                />
            </FormGroup>
            <FormGroup>
                <Label for="categories">Categorie</Label>
                <Input
                    type="select"
                    name="categories"
                    id="categories"
                    onChange={e => setCategoryId(e.target.value)}
                >
                    <option defaultValue={categoryId} selected hidden disabled>
                        {categoryName}
                    </option>
                    {categories.map(category => (
                        <option value={category.id}>{category.name}</option>
                    ))}
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="categories">Fournisseurs</Label>
                <Input
                    type="select"
                    name="providers"
                    id="providers"
                    onChange={e => setProviderId(e.target.value)}
                >
                    <option defaultValue={providerId} selected hidden disabled>
                        {providerDenomination}
                    </option>
                    {providers.map(provider => (
                        <option value={provider.id}>{provider.denomination}</option>
                    ))}
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="description">Description</Label>
                <Input
                    type="textarea"
                    name="description"
                    id="description"
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                />
            </FormGroup>
            <FormGroup>
                <FileStack {...{handle, handlePictureSave}} />
            </FormGroup>
            <Button
                color="primary"
                onClick={confirmProduct}
                className="float-right"
            >
                Confirmer
            </Button>
        </Form>
    )
}
