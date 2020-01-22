import React, {useCallback, useState} from "react";
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
import {useCategories} from "../../../hooks/use_categories";
import {useProviders} from "../../../hooks/use_providers";
import {useDispatch} from "react-redux";
import {addProduct} from "../../../actions/product";
import {ProductForm} from "./product_form/product_form";
import {ProviderForm} from "./provider_form/provider_form";

export const ProductsListModal = ({open, handleModal, type}) => {
    console.log(type)
    return (
        <div>
            <Modal isOpen={open} toggle={handleModal}>
                <ModalHeader toggle={handleModal}>{`Ajouter ${type}`}</ModalHeader>
                <ModalBody>
                    {type === 'produit' ? (
                        <ProductForm />
                    ) : (
                        <ProviderForm />
                    )}
                </ModalBody>
            </Modal>
        </div>
    );
};
