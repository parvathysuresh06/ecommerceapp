
import React from 'react';
import './Body.css';
// import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Breadcrumb,Container,Row ,Col,Card,CardGroup} from 'react-bootstrap';
import image1 from "./Assets/image1.png";
import image2 from "./Assets/image2.png";
import image3 from "./Assets/image3.png";
import image4 from "./Assets/image4.png";
import star1 from "./Assets/star1.png";
import star2 from "./Assets/star2.png";
import star3 from "./Assets/star3.png";
import shipping from "./Assets/shipping.png";
import bluecart from "./Assets/bluecart.png";
import delivery from "./Assets/delivery.png";
import floor from "./Assets/floor.png"
import floor1 from "./Assets/floor1.png"
import floor2 from "./Assets/floor2.png"
import box from "./Assets/box.png";
import fb from "./Assets/fb.png";
import twitter from "./Assets/twitter.png"
import youtube from "./Assets/youtube.png";
import insta from "./Assets/insta.png";






export default function Body() {
  return (
<Container>
  <Row className=''>
  <Breadcrumb>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
    Library
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>
  </Row>
  <Row className="justify-content-md-center">
   
    <Col sm>
<Card style={{ width: '18rem' }}>
  
  <Card.Img variant="top" src={image1} />
  {/* <img className="avatar image" src={image1} alt="image1" /> */}


  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
       <div className='d-flex justify-content-start col-lg-4 col-md-4'>
                            <div className="img2"><img className="avatar image" src={image2} alt="image2" /></div>
                            <div className="imag"><img className="avatar image" src={image3} alt="image3" /></div>
                            <div className="imag"><img className="avatar image" src={image4} alt="image4" /></div>
                        </div>
    </Card.Text>
  </Card.Body>
</Card>
</Col>




    <Col sm><h4>BRAKE PAD</h4>
    <div className="d-flex justify-content-start col-lg-4 col-md-4"><img className="avatar image" src={star1} alt="star1" />
    <div className="star"><img className="avatar image" src={star1} alt="star1" /></div>
                        <div className="star"><img className="avatar image" src={star1} alt="star1" /></div>
                        <div className="star"><img className="avatar image" src={star2} alt="star2" /></div>
                        <div className="star"><img className="avatar image" src={star3} alt="star3" /></div></div>
    <p><h5>84$</h5> <h4>FREE SHIPPING</h4> </p>
    <button type="submit" className="button1 ">Add to Cart</button><button type="submit" className="button2">Buy Now</button><br /><br />

    <div className='d-flex justify-content-start col-lg-4 col-md-4'>
  <p>share</p> &nbsp;&nbsp;&nbsp;
  <div className="icon1">      <img src={fb} alt="fb" /></div>
                                <div className="icon1"><img src={twitter} alt="twitter" /></div>&nbsp;
                                <div className="icon1"><img src={insta} alt="insta" /></div>&nbsp;
                                <div className="icon1"><img src={youtube} alt="youtube" /></div>

</div>
                    
                        <p>Sold by  <strong className='sell'>  SELLER ONE</strong> </p>
                

    <a href="#" className="reviews" > 1085 Reviews | 856 answered questions</a><br /><br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec sem a nisl auctor laoreet. </p>
                        <a href="#" className="tag"> more details</a><br />
    </Col>
   
    <div className="main_top_right col-lg-3 col-md-4" style={{ float: "left" }}>
                        <Card className="text-center w-75">
                            <Card.Header><strong>More Buying Options</strong></Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <div><a href="#" className="tag">Seller Two   </a><strong>  $88.00 </strong>  <img className="avatar image" src={bluecart} alt="bluecart" /><br />
                                        <h6>Free Shipping (standard)</h6></div>
                                    <div><a href="#" className="tag">Seller Three  </a> <strong> $85.00 </strong> <img className="avatar image" src={bluecart} alt="bluecart" /><br />
                                        <h6> Shipping $3.99(Express)</h6></div>

                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted"><a href="#" className="tag">4 offers starting at $85.00</a></Card.Footer>
                        </Card><br /><br />

                        <img className="avatar image" src={box} alt="box" /> Free Shipping: Delivered by 14 Oct<br /><br />
                        <img className="avatar image" src={shipping} alt="shipping" />Express Shipping: Delivered by 11 Oct  Select Express<br /><br />
                        <img className="avatar image" src={delivery} alt="delivery" />Buy for $800.00 from this seller to avail 10% discount.<br />

                    </div>
    
  </Row>
  <div className='mt-5'>
  <CardGroup>
  <Card className='pic'>
    <Card.Img variant="top" src={image1} />
    <Card.Body>
      <Card.Title>PRODUCT NAME</Card.Title>
      <Card.Text>
      $54.56
      
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card className='pic'>
    <Card.Img variant="top" src={floor1} />
    <Card.Body>
      <Card.Title>PRODUCT NAME</Card.Title>
      <Card.Text>
      $54.56
      </Card.Text>
    </Card.Body>
   
   
  </Card>
  <Card className='pic'>
    <Card.Img variant="top" src={floor2} />
    <Card.Body>
      <Card.Title>PRODUCT NAME</Card.Title>
      <Card.Text>
      $54.56
      </Card.Text>
    </Card.Body>
    
    
  </Card>
  <Card className='pic'>
    <Card.Img variant="top" src={floor} />
    <Card.Body>
      <Card.Title>PRODUCT NAME</Card.Title>
      <Card.Text>
      $54.56
      </Card.Text>
    </Card.Body>
    
  
  </Card>
  <Card className='pic'>
    <Card.Img variant="top" src={floor1} />
    <Card.Body>
      <Card.Title>PRODUCT NAME</Card.Title>
      <Card.Text>
       $54.56
      </Card.Text>
    </Card.Body>
   
  </Card>
</CardGroup>
  </div>
</Container>
  )
}

