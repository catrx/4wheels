import React from "react";
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import {ProductForm} from "./product_form/product_form";
import {ProviderForm} from "./provider_form/provider_form";

export const ProductsListModal = ({open, handleModal, type}) => {
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
