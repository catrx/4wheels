import React from "react";
import {useShippings} from "../../hooks/use_shippings";
import { Row, Container } from "reactstrap";

export const Shippings = () => {
    const { shippings } = useShippings();
    
}