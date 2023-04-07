
import { ProductButtons,  ProductImage, ProductTitle,ProductCard } from '../components/';
 



const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                
                <ProductCard product={product} >
                    <ProductImage img={product.img} />
                    <ProductTitle title={product.title}  />
                    <ProductButtons   />
                </ProductCard>



                <ProductCard product={product} >
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>

            </div>

        </div>
    )
}

