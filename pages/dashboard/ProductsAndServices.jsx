import React, { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { handlerGetProducts } from '@/Redux/Products';
export function ProductsAndServices() {
  const { productTableData } = useSelector((state) => state.GeneralCrudOperation);
  const [ShowModal, setShowModal] = useState(false)
  const { getListProducts } = useSelector((state) => state.Products);
  const dispatch = useDispatch() 

  useEffect(() => {
    dispatch(handlerGetProducts())
    return () => { }
  }, [])
  return (     
    <div>    
      <Card className="mt-3">
        <CardBody className="p-4">
          <div className="pb-4">
            <div className='mob-flex justify-content-between align-items-center'>
              <Typography variant="h6" color="blue-gray" className="mb-2">
                Product
              </Typography>
              <Link to={"/dashboard/add-product"}>
                <Button onClick={() => {
                  setShowModal(true)
                }}>
                  Add Products
                </Button>
              </Link>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-2">
              {productTableData.map(
                ({ title, description, category, State, id }) => (
                  <Card key={title} color="transparent" shadow={false}>
                    <CardBody className="py-0 px-1">
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mt-1 mb-2"
                      >
                        {title}
                      </Typography>
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="font-normal mt-1 mb-2 text-blue-gray-500"
                      >
                        {category}
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500 Description"
                      >
                        {description}
                      </Typography>
                    </CardBody>
                    <CardFooter className="mt-6 flex items-center justify-between py-0 px-1">
                      <Link to={`/dashboard/product-service/view?${id}`}>
                        <Button variant="outlined" size="sm" style={{color:"#0f6ca5"}}>
                          View Products
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                )
              )}
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
export default ProductsAndServices