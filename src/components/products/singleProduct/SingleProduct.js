import React from "react";
import './SingleProduct.style.css'
import Color from '../../../ui/Color'

const SingleProduct = () => {

  const colors = ['tomato', 'cornflowerblue', 'cadetblue']

  return (
    <section className="product">
      <div className="product container">
        <div className="product__path">
          <a href="" className="product__path-link">home</a>
          <span className="product__path-link">/</span>
          <a href="" className="product__path-link">products</a>
          <span className="product__path-link">/</span>
          <a href="" className="product__path-link">Skinny jeans limited edition</a>
        </div>
        <div className="product__content">
          <div className="product__content__block">
            <div className="product__content__block__img">
              <img src="https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_mock_neck_bodysuit-12_1800x1800.jpg?v=1636772362" alt=""/>
            </div>
          </div>
          <div className="product__content__block">
            <div className="product__content__block__row">
              <h3 className="product__content__block__row-title">
                Skinny jeans limited edition
              </h3>
              <p className="product__content__block__row-price">
                $ 19.99
              </p>
            </div>
            <div className="product__content__block__row">
              <p className="product__content__block__row-filter">
                color
              </p>
              <div className="colors">
                {colors.map(color => <Color color={color} />)}
              </div>
            </div>
            <div className="product__content__block__row">
              <p className="product__content__block__row-filter">
                size
              </p>
              <div className="size__buttons">
                <button className="btn-size active">Small</button>
                <button className="btn-size">Medium</button>
                <button className="btn-size">Large</button>
              </div>
            </div>
            <div className="product__content__block__row">
              <button className="btn-add-to-cart">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleProduct
