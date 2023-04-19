import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductImgProps } from "../components/ProductImage";
import { Props as ProductButtonsProps, Props } from '../components/ProductButtons';

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    increaseBy: (value: number) => void;
    counter: number;
    product: Product;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element,
    Image: (Props: ProductImgProps) => JSX.Element,
    Buttons: (Props: ProductButtonsProps) => JSX.Element
}

export interface onChangeArgs{
    product: Product;
    count: number;
}

export interface ProductInCart extends Product {
    count: number
}