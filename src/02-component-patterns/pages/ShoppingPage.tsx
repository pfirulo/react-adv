

import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';
import ProductCard, { ProductButtons, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';


export const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange } = useShoppingCart()
    return (
        <div >
        <h1>Shopping Store</h1>
        <hr />
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>

            {
                products.map(product => (

                    <ProductCard key={product.id}
                        className='bg-dark text-white'
                        onChange={onProductCountChange}
                        value={shoppingCart[product.id]?.count || 0}
                        product={product} >
                        <ProductImage className="custom-image" style={{
                            boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                        }} />
                        <ProductTitle className=' text-bold' />
                        <ProductButtons className="custom-buttons" />
                    </ProductCard>
                ))
            }
        </div>

        <div className='shopping-cart'>
            {Object.entries(shoppingCart).map(
                ([key, product]) => (
                    <ProductCard key={product.id}
                        style={{ width: '100px' }}
                        className='bg-dark text-white'
                        onChange={onProductCountChange}
                        value={product.count}
                        product={product} >
                        <ProductImage className="custom-image" style={{
                            boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                        }} />

                        <ProductButtons className="custom-buttons" />
                    </ProductCard>
                )
            )
            }

        </div>

    </div>
    )
      
  

}






