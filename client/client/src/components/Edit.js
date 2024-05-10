import React ,{useState,useEffect}from 'react';
import {Button,Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import AgriData from './AgriData';
import {v4 as uuid } from "uuid";
import {Link , useNavigate} from 'react-router-dom';

function Edit(){
    const [name,setName]=useState("");
    const[type,setType]=useState("");
    const [description,setDescription]=useState("");
    const[price,setPrice]=useState("");
    const [image,setImage]=useState("");
    
    const[id,setId]=useState("");

    let history=useNavigate();

    var index=AgriData.map(function(e){
        return e.id
    }).indexOf(id);

    const handleSubmit=(e)=>{
        e.preventDefault();

        let a =AgriData[index];

       
        a.name=name;
        a.type=type;
        a.description=description;
        a.price=price;
        a.image=image;

       
        

        history("/");
    }

    useEffect(()=>{
setName(localStorage.getItem('Name'))
setType(localStorage.getItem('Type'))
setDescription(localStorage.getItem('Description'))
setPrice(localStorage.getItem('Price'))
setImage(localStorage.getItem('Image'))
setId(localStorage.getItem('Id'))
    },[])

    

    return(
        <div>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter Name" value={name}required onChange={(e)=>setName(e.target.value)}>

                </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formType">
                <Form.Control type="text" placeholder="Enter Type" value={type} required onChange={(e)=>setType(e.target.value)}>

                </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription">
                <Form.Control type="text" placeholder="Enter Description" value={description} required onChange={(e)=>setDescription(e.target.value)}>

                </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPrice">
                <Form.Control type="text" placeholder="Enter Price" value={price} required onChange={(e)=>setPrice(e.target.value)}>

                </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formImage">
                <Form.Control type="text" placeholder="Enter Image" value={image} required onChange={(e)=>setImage(e.target.value)}>

                </Form.Control>
            </Form.Group>

            <Button onClick={(e)=>handleSubmit(e)} type="submit">Update</Button>
        </Form>

        </div>
    )

}
export default Edit;