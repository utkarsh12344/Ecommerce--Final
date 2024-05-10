import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";
import { useNavigate } from 'react-router-dom';
import AgriData from './AgriData';

function Add() {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [agriData, setAgriData] = useState(AgriData); // Initialize state with existing data

    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const id = uuid();
        const uniqueId = id.slice(0, 8);

        const newItem = {
            id: uniqueId,
            Name: name,
            Type: type,
            Description: description,
            Price: price,
            Image: image
        };

        // Update state with the new item
        setAgriData([...agriData, newItem]);

        // Navigate back to the home page
        history("/");
    }

    return (
        <div>
            <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formType">
                    <Form.Control type="text" placeholder="Enter Type" required onChange={(e) => setType(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Control type="text" placeholder="Enter Description" required onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPrice">
                    <Form.Control type="text" placeholder="Enter Price" required onChange={(e) => setPrice(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formImage">
                    <Form.Control type="text" placeholder="Enter Image" required onChange={(e) => setImage(e.target.value)} />
                </Form.Group>

                <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
            </Form>
        </div>
    );
}

export default Add;
