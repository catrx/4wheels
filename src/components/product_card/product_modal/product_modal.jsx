import React, {useCallback, useEffect, useState} from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";
import { useCategories } from "../../../hooks/use_categories";
import { useProviders } from "../../../hooks/use_providers";
import {useDispatch} from "react-redux";
import {updateProduct} from "../../../actions/product";

export const ProductModal = ({ open, handleModal, product = null }) => {
    const dispatch = useDispatch();
  const { categories, loadingCategories } = useCategories();
  const { providers, loadingProviders } = useProviders();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
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
            category: categories.filter(category => category.id === parseInt(categoryId))[0]
        }
        updateProduct(product.id, newProduct)(dispatch)
        window.location.reload()
    }, [name, stock, price, description, providers, categories, product, providerId, categoryId, handleModal])

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
        }

    },[product, setCategoryName, setProviderId, setCategoryId, setDescription, setPrice, setName, setStock, setProviderDenomination])

  if (
    loadingProviders ||
    loadingCategories ||
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
