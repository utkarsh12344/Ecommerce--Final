import React from 'react';
import { Button, Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import AgriData from './AgriData';
import { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Home() {
    let history = useNavigate();


    const handleEdit = (id, name, type, description, price, image) => {
        localStorage.setItem('Name', name);
        localStorage.setItem('Age', type);
        localStorage.setItem('Description', description);
        localStorage.setItem('Price', price);
        localStorage.setItem('Image', image);
        localStorage.setItem('Id', id);
    };

    const handleDelete=(id)=>{
        var index=AgriData.map(function(e){
            return e.id
        }).indexOf(id);
        AgriData.splice(index,1);
        history('/');

    }

    return (
        <Fragment>
            <div style={{ margin: "10rem" }}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>type</th>
                            <th>description</th>
                            <th>price</th>
                            <th>image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {AgriData && AgriData.length > 0 ? (
                            AgriData.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.type}</td>
                                    <td>{item.description}</td>
                                    <td>{item.price}</td>
                                    <td>{item.image}</td>
                                    <td>
                                        <Link to={`/edit`}>
                                            <Button onClick={() => handleEdit(item.id, item.name, item.type, item.description, item.price, item.image)}>EDIT</Button>
                                        </Link>
                                        &nbsp;
                                        <Button onClick={() => handleDelete(item.id)}>DELETE</Button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6">No data available</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                <br />
                <Link className='d-grid gap-2' to="/create">
                    <Button size="lg">Create</Button>
                </Link>
            </div>
        </Fragment>
    );
}

export default Home;
