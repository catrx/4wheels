import React, {useCallback, useEffect, useState} from "react";
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from "reactstrap";
import {useCategories} from "../../../hooks/use_categories";
import {useProviders} from "../../../hooks/use_providers";
import {useDispatch} from "react-redux";
import {updateProduct} from "../../../actions/product";
import {FileStack} from "../../filestack/filestack";

export const ProductModal = ({ open, handleModal, product = null }) => {
    const dispatch = useDispatch();
  const { categories } = useCategories();
  const { providers } = useProviders();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [handle, setHandle] = useState('');
  const [description, setDescription] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [providerDenomination, setProviderDenomination] = useState('');
  const [providerId, setProviderId] = useState('');
    const confirmProduct = useCallback(() => {
        const newProduct = {
            id: product.id,
            name: name,
            stock: parseInt(stock),
            price: parseFloat(price),
            description: description,
            provider: providers.filter(provider => provider.id === parseInt(providerId))[0],
            category: categories.filter(category => category.id === parseInt(categoryId))[0],
            handle
        }
        updateProduct(newProduct)(dispatch)
        window.location.reload()
    }, [name, stock, price, description, providers, categories, product, providerId, categoryId, dispatch, handle])

    const handlePictureSave = useCallback((result) => {
        const pictureHandle = result.filesUploaded[0].handle
        setHandle(pictureHandle);
    }, []);

    useEffect(() => {
        if(product) {
            setName(product.name)
            setStock(product.stock)
            setPrice(product.price)
            setDescription(product.description)
            setCategoryId(product.category.id)
            setProviderId(product.provider.id)
            setProviderDenomination(product.provider.denomination)
            setCategoryName(product.category.name)
            setHandle(product.handle)
        }
    },[product, setCategoryName, setProviderId, setCategoryId, setDescription, setPrice, setName, setStock, setProviderDenomination])

  if (
    !product ||
    !product.category ||
    !product.provider
  ) {
    return null;
  }
  return (
    <div>
      <Modal isOpen={open} toggle={handleModal}>
        <ModalHeader toggle={handleModal}>Edition produit</ModalHeader>
        <ModalBody>
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
                {categories.map((category, index) => (
                  <option value={category.id} key={index}>{category.name}</option>
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
                {providers.map((provider, index) => (
                  <option value={provider.id} key={index}>{provider.denomination}</option>
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
        </ModalBody>
      </Modal>
    </div>
  );
};
