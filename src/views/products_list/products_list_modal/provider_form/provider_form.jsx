import React, {useCallback, useState} from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {addProvider} from "../../../../actions/provider";
import {useDispatch} from "react-redux";

export const ProviderForm = () => {
    const dispatch = useDispatch()
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [address, setAdress] = useState("");
    const [siret, setSiret] = useState("");
    const [denomination, setDenomination] = useState("");

    const confirmProvider = useCallback(() => {
        const newProvider = {
            lastName,
            firstName,
            address,
            denomination,
            siret
        };
        addProvider(newProvider)(dispatch);
        window.location.reload();
    }, [lastName, firstName, address, denomination, siret, dispatch]);
    return (
        <Form>
            <FormGroup>
                <Label for="lastName">Nom</Label>
                <Input
                    type="text"
                    name="lastName"
                    id="lastName"
                    onChange={e => setLastName(e.target.value)}
                    value={lastName}
                />
            </FormGroup>
            <FormGroup>
                <Label for="firstName">Prénom</Label>
                <Input
                    type="text"
                    name="firstName"
                    id="firstName"
                    onChange={e => setFirstName(e.target.value)}
                    value={firstName}
                />
            </FormGroup>
            <FormGroup>
                <Label for="siret">Siret</Label>
                <Input
                    type="number"
                    name="siret"
                    id="siret"
                    onChange={e => setSiret(e.target.value)}
                    value={siret}
                />
            </FormGroup>
            <FormGroup>
                <Label for="adress">Adresse</Label>
                <Input
                    type="text"
                    name="adress"
                    id="adress"
                    onChange={e => setAdress(e.target.value)}
                    value={address}
                />
            </FormGroup>
            <FormGroup>
                <Label for="denomination">Dénomination</Label>
                <Input
                    type="text"
                    name="denomination"
                    id="denomination"
                    onChange={e => setDenomination(e.target.value)}
                    value={denomination}
                />
            </FormGroup>
            <Button color="primary" onClick={confirmProvider} className="float-right">
                Confirmer
            </Button>
        </Form>
    );
};
