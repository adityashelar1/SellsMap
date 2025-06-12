import React from 'react';
import { Row , Col, Container , Form , FormGroup } from 'reactstrap';
import Helmet from '../components/helmet/Helmet';
import CommonSection from '../components/ui/CommonSection';
import "../styles/checkout.css"
import { useSelector } from 'react-redux';

const Checkout = () => {
  const totalQty = useSelector(state => state.cart.totalQuantity);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout"/>
      <section>
        <Container>
          <Row>
            <Col lg="8" >
              <h6 className='mb-4 fw-bold '>Billing Information</h6>
              <Form className='billing_form'>
                <FormGroup className='form_group'>
                  <input type="text" placeholder='Enter your name' />
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type="email" placeholder='Enter your Email' />
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type="number" placeholder='Enter your Mobile Number' />
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type="text" placeholder='Street Address' />
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type="text" placeholder='City' />
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type="text" placeholder='State' />
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type="text" placeholder='Country' />
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type="number" placeholder='Postal Code' />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
            <div className='checkout_cart'>
              <h6>TotalQuantity: <span>{totalQty} items</span></h6>
              <h6>Sub Total: <span>₹ {totalAmount}</span></h6>
              <h6><span>Shipping :<br/> Free Shipping</span><span>₹0</span></h6><hr />
              <h4>Total Cost : <span>₹{totalAmount}</span></h4>
              <button className="buy_btn auth_btn w-100">Place an Order</button>
              </div>
              </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout
