import React from 'react'
import { Container,Row, Col } from 'reactstrap';
import useGetData from '../custom-hooks/useGetData';
import { db } from '../firebase.config';
import { doc, deleteDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const AllProducts = () => {
  const {data:productsData, loading}=useGetData("products");
  const deleteProduct = async (id)=>{
    await deleteDoc(doc(db,"products",id));
    toast.success("Product Deleted Successfully");
  }
  console.log(productsData);
  return <section>
    <Container>
      <Row>
        <Col lg="12">
          <table className='table'>
            <thead>
              <tr>
                <th>image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                {
                  loading ? <h3>Loading....</h3> :
                    
                      productsData.map(item=>(
                        <tr key={item.id}>
                      <td><img src={item.imgURL} alt="" /></td>
                      <td>{item.title}</td>
                      <td>{item.category}</td>
                      <td>₹{item.price}</td>
                      <td><button className='btn btn-danger' onClick={()=>{deleteProduct(item.id)}}>Delete</button></td>
                    </tr>
                      )
                    
                  )
                 }
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  </section>
}

export default AllProducts