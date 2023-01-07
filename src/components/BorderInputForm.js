import React, { useEffect, useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const BorderInputForm = () =>{

    const [test , setTest] = useState('');

    const [subjectValue , setSubjectValue] = useState('');
    const [mainTextValue , setMainTextValue] = useState('');
    const [dairyDate , setDairyDate] = useState('');
    const [saveDate , setSaveDate] = useState('');

    useEffect( () => {
        console.log('subjectValue ---> ' , subjectValue);
    } , [subjectValue])

    
    useEffect( () => {
        console.log('mainTextValue ---> ' , mainTextValue);
    } , [mainTextValue])

    useEffect( () =>{
        console.log('diary Date ---> ' , dairyDate);

    } , [dairyDate])
    return (
        <Form>
        <Row className="mb-1">
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>제목</Form.Label>
                <Form.Control type="text" 
                placeholder="제목을 입력하세요." 
                onChange={ (e) => {setSubjectValue(e.target.value)}}
                />
            </Form.Group>
        </Row>

        <Row className="mb-1">
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>날짜</Form.Label>
                <Form.Control type="date" 
                onChange={ (e) => {console.log(e.target.value)}}
                />
            </Form.Group>
        </Row>

        <Row className="mb-1">
            <Form.Group as={Col} controlId ="formGridTextArea">
                <Form.Label></Form.Label>
                <Form.Control 
                size ="lg"
                as="textarea" 
                placeholder="글을 작성하세요." 
                rows={9}
                onChange={ (e) => {setMainTextValue(e.target.value)}} >
                </Form.Control>
            </Form.Group>
        </Row>



        {/* <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
            </Form.Group>
        </Row> */}

        {/* <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
    </Form>
    );
}

export default BorderInputForm;