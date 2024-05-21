"use client"
import { ProductList } from "../data"
import { useProductStore } from "@/lib/store"



export default function Page({ params }: { params: { slug: string } }) {
  const product = ProductList.filter(
    (value, index) => index.toString() === params.slug
  )[0]

  const store = useProductStore()
  return (
    <div>
      <div className={"grid grid-cols-1 md:grid-cols-[50%_50%] gap-x-6 px-10"}>
        <div className={`bg-primary mb:mb-0 mb-4 mt-28`}>
          <img src={product.image} />
        </div>
        <div>
          <div className={`w-[350px]`}>
            <h1 className={`text-xl mb-2 font-bold md:mt-36 `}>{product.name}</h1>
            <p className={` text-xs mb-4`}>{product.desc}</p>
          </div>
          <p className={`text-2xl mb-10 font-bold`}>#{product.price}</p>
          <div
            className={`flex items-center justify-center rounded-3xl 
                border-2 bg-primary p-4 font-bold`}
          >
            
              <button onClick={ ()=> {
                store.addToCart({
                  name: product.name,
                  image: product.image,
                  price: product.price,
                  id: product.id,
                  quantity: 1
                })
              }}>ADD TO CART</button>
            
          </div>
        </div>
      </div>
    </div>
  )
}
