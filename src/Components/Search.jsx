import { Container, Form } from 'react-bootstrap';
import { Component } from 'react';

let searchQuery=""
class Search extends Component {

    onChangeFunction = (e) =>{
        searchQuery = e.target.value
        console.log('searchQuery:', searchQuery)
    }
    render() {
        return (
            <Container>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Search" onChange={(e)=>this.onChangeFunction(e)}/>
                    </Form.Group>
                    {/* <Button variant="primary" type="submit">
                    Submit
                </Button> */}
                </Form>
            </Container>)
    }
}

export default Search;
export { searchQuery };
