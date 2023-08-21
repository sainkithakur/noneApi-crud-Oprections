import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Employees from "./Employees";

const Create = () => {
  const[name, setName] = useState("");
    const[age,setAge] = useState("");
    const[id, setId] = useState("")

    let history = useNavigate();

    var index = Employees.map(function(e){
      return e.id
    }).indexOf(id);

    const handleSubmit = (e) => {
      e.preventDefault();

      let a = Employees[index];
      a.Name = name;
      a.Age = age;
      history("/")
  }
  useEffect(() =>{
    setName(localStorage.getItem('Name'))
    setAge(localStorage.getItem('Age'))
    setId(localStorage.getItem('Id'))
  },[])
  return (
    <div>
      <h1> CREATE</h1>

      <Form className="fill">
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" className="" placeholder="Name" value={name} required onChange={(e) => setName(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your AGE</Form.Label>
          <Form.Control type="text" placeholder="Enter Age" value={age} required onChange={(e) => setAge(e.target.value)} />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Button variant="primary" onClick={(e) => handleSubmit(e)} type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default Create;
