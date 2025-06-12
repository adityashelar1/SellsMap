import React from "react";
import { Form, FormGroup, Container, Row, Col } from "reactstrap";
import { useState } from "react";
import { toast } from "react-toastify";
import { db, storage } from "../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router";
import { h4 } from "framer-motion/client";

const AddProducts = () => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterShortDesc, setEnterShortDesc] = useState("");
  const [enterDesc, setEnterDesc] = useState("");
  const [enterCategory, setEnterCategory] = useState("");
  const [enterPrice, setEnterPrice] = useState("");
  const [enterProductImg, setEnterProductImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const addProduct = async (e) => {
    e.preventDefault();
    setLoading(true);
    const product = {
      title: enterTitle,
      shortDesc: enterShortDesc,
      desc: enterDesc,
      category: enterCategory,
      price: enterPrice,
      imgURL: enterProductImg,
    };

    //add product to the firebase database
    try {
      const docRef = await collection(db, "products");
      const storageRef = ref(
        storage,
        `productImage/${Date.now() + enterProductImg.name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, enterProductImg);
      uploadTask.on(
        () => {
          toast.error("Images not Uploaded");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await addDoc(docRef, {
              title: enterTitle,
              shortDesc: enterShortDesc,
              desc: enterDesc,
              category: enterCategory,
              price: enterPrice,
              imgURL: downloadURL,
            });
          });
        }
      );
      setLoading(false);
      toast.success("Product has been successfully added ");
      //console.log(product);
      navigate("/dashboard/all-products");
    } catch (error) {
      setLoading(false);
      toast.error("product not added");
    }
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="mb-5">Add Product</h4>
            {loading ? (
              <h4 className="py-5 fw-bolder">Loading...</h4>
            ) : (
              <>
                <Form onSubmit={addProduct}>
                  <FormGroup className="form_group">
                    <span>Product Title</span>
                    <input
                      value={enterTitle}
                      onChange={(e) => setEnterTitle(e.target.value)}
                      type="text"
                      placeholder="Add Product Name"
                      required
                    />
                  </FormGroup>
                  <FormGroup className="form_group">
                    <span>Short Description</span>
                    <input
                      value={enterShortDesc}
                      onChange={(e) => setEnterShortDesc(e.target.value)}
                      type="text"
                      placeholder="Add Short Description"
                      required
                    />
                  </FormGroup>
                  <FormGroup className="form_group">
                    <span>Description</span>
                    <input
                      value={enterDesc}
                      onChange={(e) => setEnterDesc(e.target.value)}
                      type="text"
                      placeholder="Add Description"
                      required
                    />
                  </FormGroup>
                  <div className="d-flex align-items-center justify-content-between gap-5">
                    <FormGroup className="form_group w-50">
                      <span>Price</span>
                      <input
                        value={enterPrice}
                        onChange={(e) => setEnterPrice(e.target.value)}
                        type="number"
                        placeholder="Add Product Price "
                        required
                      />
                    </FormGroup>
                    <FormGroup className="form_group w-50">
                      <span>Category</span>
                      <select
                        className="w-100 p-2"
                        value={enterCategory}
                        onChange={(e) => setEnterCategory(e.target.value)}
                        required
                      >
                        <option value="#">Enter Category </option>
                        <option value="sofa">Sofa</option>
                        <option value="chair">Chair</option>
                        <option value="mobile">Mobile</option>
                        <option value="laptop">Laptop</option>
                        <option value="shoes">Shoes</option>
                      </select>
                    </FormGroup>
                  </div>
                  <div>
                    <FormGroup className="form_group">
                      <span>Product Image</span>
                      <input
                        type="File"
                        onChange={(e) => setEnterProductImg(e.target.files[0])}
                        required
                      />
                    </FormGroup>
                  </div>
                  <button type="submit" className="buy_btn">
                    Add Product
                  </button>
                </Form>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddProducts;
