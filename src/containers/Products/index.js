import React, { useEffect, useState } from 'react'

import ProductsLogo from '../../assets/products-logo.svg'
import CardProduct from '../../components/CardProduct'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  ProductsImg,
  CategoryButton,
  CategoriesMenu,
  ProductsContainer
} from './styles'

function Products() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setfilteredProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)
  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')
      const newCategories = [{ id: 0, name: 'Todas' }, ...data]
      setCategories(newCategories)
    }

    async function loadProducts() {
      const { data: AllProducts } = await api.get('products')
      const newProducts = AllProducts.map(product => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })
      setProducts(newProducts)
    }

    loadProducts()
    loadCategories()
  }, [])

  useEffect(() => {
    const newFilteredProducts = products.filter(
      product => product.category_id === activeCategory
    )
    setfilteredProducts(newFilteredProducts)
  }, [activeCategory, products])

  return (
    <Container>
      <ProductsImg src={ProductsLogo} alt="logo da home page" />
      <CategoriesMenu>
        {categories &&
          categories.map(category => (
            <CategoryButton
              type="button"
              key={category.id}
              isActiveCategory={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id)
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoriesMenu>
      <ProductsContainer>
        {filteredProducts &&
          filteredProducts.map(product => (
            <CardProduct key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </Container>
  )
}

export default Products
