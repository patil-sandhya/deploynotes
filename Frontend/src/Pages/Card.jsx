import React, { useState } from 'react';
import styled from 'styled-components';



const Card = ({ id,title,description,publish, handleDelete }) => {
  //const [curqty, setQty]= useState(1)
 
  const handleAdd = (val)=>{
    console.log("ad")
    handleQty(id,1)
  }
  const handleDlt = ()=>{
    handleDelete(id)
  }
  return (
    <CardContainer>
      <ProductInfo>
        <ProductDetails>
        <h3>{title}</h3>
          <p>{description}</p>
          <p>Publish {(publish ? "True" :"False")}</p>
          <QtyBtn>
          <QuantityButton onClick={handleAdd}>Update</QuantityButton>
          </QtyBtn>
        </ProductDetails>
      </ProductInfo>
        <DeleteButton onClick={handleDlt}>Delete</DeleteButton>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: auto;
  border-radius: 5px;
  background-color: #f2f2f2;

`;

const ProductInfo = styled.div`
  display: flex;
`;

const ProductImage = styled.img`
  width: 170px;
  height: 170px;
  margin-right: 10px;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* border: 1px solid red; */
  h3{
      margin-bottom: 6px;
    }
    p{
    margin-bottom: 2px;
      margin-top: 2px;
    }
`;

const QuantityButton = styled.button`
  background-color: black;
  color: #fff;
  border: none;
  padding: 5px 10px;
  margin: 0 5px;
  border-radius: 50%;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  background-color: black;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  position: absolute;
  top: 10px; 
  right: 10px; 
`;

const QtyBtn =  styled.div`
    display:flex;
    justify-content:center;
    margin-left: 0px;
    padding-left: 0px;
    margin-top: 10px;
`;