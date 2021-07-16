import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardGroup, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import { Link } from 'react-router-dom';

function Pricing(props) {
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
          <Button className="btn btn-success">Sign-Up!</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/assets/images/tier2ObstaclePay.png" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h4" className="text-light">2 Days a Week</CardTitle>
          <CardSubtitle tag="h5" className="mb-2 text-light">$100 a Month</CardSubtitle>
          <CardText className="text-light">8am - 5pm, Mon - Fri</CardText>
          <Button className="btn btn-success">Sign-Up!</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/assets/images/tier3ObstaclePay.png" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h4" className="text-light">4 Days a Week</CardTitle>
          <CardSubtitle tag="h5" className="mb-2 text-light">$150 a Month</CardSubtitle>
          <CardText className="text-light">8am - 5pm Everyday</CardText>
          <Button className="btn btn-success">Sign-Up!</Button>
        </CardBody>
      </Card>
    </CardGroup>
    </React.Fragment>
  );
};


export default Pricing;