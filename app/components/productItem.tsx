
export interface IProductItemProps {
  
            id: string;
            image:string;
            title: string;
            description: string;
            price: number;
        
}

    export interface IProductList {
        first : number | null
        items : number | null
        last : number | null
        next : number | null
        pages : number
        prev : number | null
        data : IProductItemProps[]
    }

function ProductItem( {image , price,title,description}:IProductItemProps) {
    return (
        <div className="shadow-md  rounded-3xl p-6 bg-gray-900 ">
            <img className="border rounded-3xl" src= {image} />
            <div className="p-6 my-5 rounded-2xl bg-gray-700">
                <h3 className="font-bold"> {title} </h3>
                <p>Price : <span> {price}$ </span></p>
                <p className="text-gray-400"> {description} </p>
            </div>

        </div>
        
    );
}
export default ProductItem;