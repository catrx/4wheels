import React, {useState} from "react";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import {Button, FormGroup, Input, Label} from "reactstrap";
import {newShipping} from "../../actions/shipping";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";



export  const CreditCard = () => {
    const dispatch = useDispatch();
    let history = useHistory();

    const [state, setState] = useState({
        cvc: '123',
        expiry: '23/05',
        focus: '',
        name: 'Antonin Catrix',
        number: '1234123412344563',
    })


    const handleInputFocus = (e) => {

    }

    const pay = () => {
        const newItem = {
            product: {
                name: 'Audi A1',
                provider: {
                    denomination: 'Audi'
                },
                category: {
                    name: 'Sportive'
                },
                price: '20 678'
            },
            users: {
                firstName: 'Antonin',
                lastName: 'Catrix'
            },
            dateSend: '17/06/2021'
        }
        newShipping(newItem)(dispatch)

        history.push(`/orders`);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return(
        <div id="PaymentForm">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <Cards
                            cvc={state.cvc}
                            expiry={state.expiry}
                            focused={state.focus}
                            name={state.name}
                            number={state.number}
                        />
                        <form>
                            <FormGroup>
                                <Label for="name">Titulaire</Label>
                                <Input
                                    value={state.name}
                                    type="text"
                                    name="name"
                                    id="name"
                                    onChange={(e) => handleInputChange(e)}
                                    onFocus={(e) => handleInputFocus(e)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="number">Numéro de carte</Label>
                                <Input
                                    value={state.number}
                                    type="text"
                                    name="number"
                                    id="number"
                                    onChange={(e) => handleInputChange(e)}
                                    onFocus={(e) => handleInputFocus(e)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="expiry">Expiration</Label>
                                <Input
                                    value={state.expiry}
                                    type="text"
                                    name="expiry"
                                    id="expiry"
                                    onChange={(e) => handleInputChange(e)}
                                    onFocus={(e) => handleInputFocus(e)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="cvc">CVC</Label>
                                <Input
                                    value={state.cvc}
                                    type="text"
                                    name="cvc"
                                    id="cvc"
                                    onChange={(e) => handleInputChange(e)}
                                    onFocus={(e) => handleInputFocus(e)}
                                />
                            </FormGroup>
                            <Button
                                color="info"
                                className="float-right"
                                onClick={pay}
                            >
                                Acheter
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
