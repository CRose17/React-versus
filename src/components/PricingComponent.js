import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardGroup, CardText, CardBody, CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody, Form, Col, FormGroup, Input, Label} from 'reactstrap';
import { Link } from 'react-router-dom';


class Pricing extends Component{
  constructor(props) {
    super(props);

    this.state={
      isModalOpen: false,
      firstName: '',
      lastName: '',
      phoneNum: '',
      email: '',
      membership: '',
      payment: ''
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }



handleInputChange(event) {
  const target = event.target;
  const name = target.name;
  const value = target.type === 'checkbox' ? target.checked : target.value;

  this.setState({
      [name]: value
  });
}

handleSubmit(event) {
  console.log('Current state is: ' + JSON.stringify(this.state));
  alert('Current state is: ' + JSON.stringify(this.state));
  event.preventDefault();
}

    render() {
     return (
        <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Pricing</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Join Us!</h2>
                    <hr />
                </div>
            </div>
        </div>
        <CardGroup>
      <Card>
        <CardImg top width="100%" src="/assets/images/tier1ObstaclePay.png" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h4" className="text-light">1 Day a Week</CardTitle>
          <CardSubtitle tag="h5" className="mb-2 text-light">$50 a Month</CardSubtitle>
          <CardText className="text-light">8am - 5pm, Mon - Fri</CardText>
          <Button className="btn btn-success" onClick={this.toggleModal}>Sign-Up!</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/assets/images/tier2ObstaclePay.png" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h4" className="text-light">2 Days a Week</CardTitle>
          <CardSubtitle tag="h5" className="mb-2 text-light">$100 a Month</CardSubtitle>
          <CardText className="text-light">8am - 5pm, Mon - Fri</CardText>
          <Button className="btn btn-success" onClick={this.toggleModal}>Sign-Up!</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/assets/images/tier3ObstaclePay.png" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h4" className="text-light">4 Days a Week</CardTitle>
          <CardSubtitle tag="h5" className="mb-2 text-light">$150 a Month</CardSubtitle>
          <CardText className="text-light">8am - 5pm Everyday</CardText>
          <Button className="btn btn-success" onClick={this.toggleModal}>Sign-Up!</Button>
        </CardBody>
      </Card>
    </CardGroup>

    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
      <ModalHeader toggle={this.toggleModal}>Please Provide the Following:</ModalHeader>
      <ModalBody>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label htmlFor="firstName" md={2}>First Name</Label>
            <Col md={10}>
              <Input type="text" id="firstName" name="firstName"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={this.handleInputChange} />
            </Col>            
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="lastName" md={2}>Last Name</Label>
            <Col md={10}>
              <Input type="text" id="lastName" name="lastName"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={this.handleInputChange} />
            </Col>            
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="phoneNum" md={2}>Phone</Label>
            <Col md={10}>
              <Input type="tel" id="phoneNum" name="phoneNum"
                placeholder="Phone Number"
                value={this.state.phoneNum}
                onChange={this.handleInputChange} />
            </Col>            
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="email" md={2}>Email</Label>
            <Col md={10}>
              <Input type="email" id="email" name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleInputChange} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md={{size: 4, offset: 2}}>
              <FormGroup check>
                <Label htmlFor="membership" sm={2}>Membership Tier</Label>                
                <Input type="select" name="select" id="membership">
                  <option>1 Day</option>
                  <option>2 Days</option>
                  <option>4 Days</option>
                </Input>                
              </FormGroup>
            </Col>
          </FormGroup>
          <Button type="submit" color="success">Register as Member</Button>
        </Form>
      </ModalBody>
    </Modal>
    </React.Fragment>
  );
  }
};


export default Pricing;