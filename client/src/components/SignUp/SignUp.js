import { Form, Col, Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

export const SignUp = (props) => {
    const [bloodGroup, setBloodGroup] = useState('A+');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [contact, setContact] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(password!==password2){
            console.log("Passwords dont match")
        }else{
            try {
                const user={name,email,password,contact,bloodGroup,age}
                const res = await axios.post('/api/user',user);
                localStorage.setItem('token',res.data.token);
            } catch (error) {
                console.log(error);
            }
        }
    }
    
    
    return (
        <div className="justify-content-center container form-style">
            <Form onSubmit={handleSubmit}>
                <Form.Group as='h1'>Sign Up</Form.Group>
                <Form.Group controlId="Name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter Name"
                        onChange={(e) => { setName(e.target.value) }} />
                </Form.Group>

                <Form.Group controlId="Email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email"
                        placeholder="Enter email"
                        onChange={(e) => { setEmail(e.target.value) }} />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                            placeholder="Password"
                            onChange={(e) => { setPassword(e.target.value) }} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="password2">
                        <Form.Label>Verify Password</Form.Label>
                        <Form.Control type="password"
                            placeholder="Verify Password"
                            onChange={(e) => { setPassword2(e.target.value) }} />
                    </Form.Group>
                </Form.Row>


                <Form.Row>
                    <Form.Group as={Col} controlId="BloodGroup" >
                        <Form.Label>Blood Group</Form.Label>
                        <Form.Control as="select"
                            defaultValue={bloodGroup}
                            onChange={(e) => { setBloodGroup(e.target.value) }}>
                            <option>A+</option>
                            <option>B+</option>
                            <option>O+</option>
                            <option>A-</option>
                            <option>B-</option>
                            <option>O-</option>
                            <option>AB+</option>
                            <option>AB-</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="contact">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control type="text"
                            placeholder="Contact"
                            onChange={(e) => { setContact(e.target.value) }} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="age">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="text"
                            placeholder="Age"
                            onChange={(e) => { setAge(e.target.value) }} />
                    </Form.Group>
                </Form.Row>
                <Button type="submit" variant="outline-success" size='lg'>Sign Up</Button>{' '}
            </Form>
        </div>
    )
}