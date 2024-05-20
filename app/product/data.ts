import Image from "next/image"

import { ImageApp } from "@/lib/appImages"

type IProduct = {
  image: string
  name: string
  price: number
  desc: string
  id: number
}

export const ProductList: IProduct[] = [
  {
    image: ImageApp.food1,
    name: "Egusi Soup and Pounded Yam.",
    price: 8000,
    desc: `Egusi Soup with 2 wrap of swallon, 3 beefs(meat), stock fish, and dry fish.
    Egusi Soup is a finger-licking good Nigerian soup made with a white variety of pumpkin seeds. 
    It is spicy, nutty with exotic African flavors.`,
    id: 1
  },
  {
    image: ImageApp.food2,
    name: "Fried Rice and Chicken Lap.",
    price: 4000,
    desc: `Fried rice with chicken lap. Fried rice is a dish of cooked rice that has been stir-fried in a 
    wok or a frying pan and is mixed with other ingredients 
    such as eggs, vegetables, seafood, and meat.`,
    id: 2
  },
  {
    image: ImageApp.food9,
    name: "Chicken Pepper soup.",
    price: 5000,
    desc: `Chicken pepper soup is the perfect winter warmer. 
    It is an iconic Nigerian food prepared with fish, meat in broth and dried local spices.
    The taste of our chicken pepper soup is amazingly delicious. 
    It is fragrant and spicy at the same time, with an earthy and slightly bitter taste.`,
    id: 3,
  },
  {
    image: ImageApp.food6,
    name: "Banga and Starch.",
    price: 4000,
    desc: `Banga soup is prepared with enough stocked, catfish and beef meat also with starch for swallow.
    Our Banga soup is a delicious which is made from palm nut fruit, an assortment of spices, and a variety of 
    meat and fish.`,
    id: 4,
  },
  {
    image: ImageApp.food3,
    name: "Beef pepper soup.",
    price: 4000,
    desc: `Beef pepper soup is the perfect winter warmer. 
    It is an iconic Nigerian food prepared with fish, meat in broth and dried local spices.
    The taste of our chicken pepper soup is amazingly delicious. 
    It is fragrant and spicy at the same time, with an earthy and slightly bitter taste.`,
    id: 5,
  },
  {
    image: ImageApp.food10,
    name: "White rice and Stew.",
    price: 3000,
    desc: `White rice stew is ready with turkey.Indulge in a classic favorite with our tender, 
    fluffy white rice served with a rich and flavorful stew. Our rice is cooked to perfection, each grain inviting you to savor its delicate texture. Paired with our tantalizing stew, bursting with a symphony of spices and fresh ingredients, it's a match made in culinary heaven. Whether you're craving comfort food or seeking a hearty meal, our white rice and stew combo will hit the spot. Order now and experience the ultimate
     satisfaction of a home-cooked meal, without the hassle of cooking!`,
     id: 6,
  },
  {
    image: ImageApp.food8,
    name: `Beans and Fried Plantain`,
    price: 2000,
    desc: `Beans and Fried Plantain. Delicious combo alert! Dive into a taste sensation with our savory beans 
    paired perfectly with golden, crispy fried plantains. A hearty dish that satisfies your hunger and delights your taste buds. Experience the fusion of flavors—creamy beans complemented by the sweetness of ripe plantains, creating a mouthwatering harmony. Perfect for any meal, any time of day. 
    Try it now and treat yourself to a culinary delight that will keep you coming back for more!`,
    id: 7,
  },
  {
    image: ImageApp.food9,
    name: "Chicken Pepper Soup.",
    price: 5000,
    desc: `Chicken pepper soup is the perfect winter warmer. 
    It is an iconic Nigerian food prepared with fish, meat in broth and dried local spices.
    The taste of our chicken pepper soup is amazingly delicious. 
    It is fragrant and spicy at the same time, with an earthy and slightly bitter taste.`,
    id: 8,
  },
  {
    image: ImageApp.food11,
    name: "Bioled Yam and Egg Sauce.",
    price: 3500,
    desc: `Savor the simplicity of tradition with our wholesome boiled yam served alongside a delectable 
    egg sauce. Our yam is expertly boiled to perfection, offering a creamy interior and a satisfyingly firm
     texture. Paired with our savory egg sauce, made with fresh tomatoes, onions, and aromatic spices, 
     it's a delightful fusion of flavors and textures. Whether you're looking for a hearty breakfast or 
     a comforting meal any time of day, our boiled yam and egg sauce combo is sure to satisfy your cravings.
      Order now and treat yourself to a taste of home-cooked goodness!.`,
      id: 9,
  },
  {
    image: ImageApp.food4,
    name: "Speghetti and Chicken Lap.",
    price: 2500,
    desc: `Treat yourself to a culinary adventure with our mouthwatering spaghetti and chicken dish.
     Dive into a plate of perfectly cooked spaghetti, twirled to perfection and coated in a savory sauce 
     that's bursting with flavor. Paired with succulent chicken pieces, seasoned to perfection and cooked to
      tender perfection, it's a meal that promises to tantalize your taste buds. Whether you're craving comfort
       food or seeking a satisfying meal that's sure to please, our spaghetti and chicken combo delivers the
     ultimate dining experience. Order now and embark on a flavorful journey that will leave you craving more!.`,
     id: 10,
  },
  {
    image: ImageApp.food5,
    name: "Oha Soup and Eba.",
    price: 4000,
    desc: `Indulge in the rich and authentic flavors of our Oha soup, a traditional Nigerian delicacy that's 
    sure to delight your senses. Made with tender Oha leaves, cooked to perfection in a savory broth infused 
    with assorted meats, stockfish, and traditional spices, every spoonful is a taste of culinary bliss. 
    Experience the perfect balance of flavors—earthy, aromatic Oha leaves melding seamlessly with the hearty 
    goodness of meat and fish. Whether you're craving a taste of home or eager to explore new culinary horizons,
     our Oha soup offers a deliciously satisfying experience that's perfect for any occasion. 
     Order now and treat yourself to a taste of Nigerian cuisine at its finest!.`,
     id: 11,
  },
  {
    image: ImageApp.food13,
    name: "Akara and Pap.",
    price: 2000,
    desc: `Akara and pap are traditional Nigerian dishes commonly enjoyed as breakfast or snacks. Akara,
     also known as bean cakes or bean fritters, is made from peeled black-eyed peas blended with onions, 
     peppers, and spices, then deep-fried until golden brown. It has a crispy exterior and a soft, savory 
     interior. Pap, also called akamu or ogi, is a porridge made from fermented maize or millet. It has a 
     smooth, creamy texture and is often served with sugar, milk, or honey for added sweetness. Together, 
     akara and pap form a popular and satisfying meal or snack enjoyed by many in Nigeria..`,
     id: 12,
  },
  {
    image: ImageApp.food14,
    name: "Vegetable Soup and Eba.",
    price: 6,
    desc: `Vegetable soup and eba are staple dishes in Nigerian cuisine. Vegetable soup, also known as 
    efo riro or edikang ikong, is a hearty and nutritious stew made with a variety of vegetables such 
    as spinach, kale, tomatoes, and okra. It is typically cooked with meat or fish and seasoned with 
    traditional spices and herbs, creating a rich and flavorful dish.`,
    id: 13,
  },
  {
    image: ImageApp.food15,
    name: "Bioled Yam and Egg Soup.",
    price: 3000,
    desc: `Savor the simplicity of tradition with our wholesome boiled yam served alongside a delectable 
    egg sauce. Our yam is expertly boiled to perfection, offering a creamy interior and a satisfyingly firm
     texture. Paired with our savory egg sauce, made with fresh tomatoes, onions, and aromatic spices, 
     it's a delightful fusion of flavors and textures. Whether you're looking for a hearty breakfast or 
     a comforting meal any time of day, our boiled yam and egg sauce combo is sure to satisfy your cravings.
      Order now and treat yourself to a taste of home-cooked goodness!`,
      id: 14,
  },
  {
    image: ImageApp.food16,
    name: "Boiled Plantain and Egg Sauce.",
    price: 3000,
    desc: `Boiled plantain and egg sauce is a popular dish enjoyed in many parts of West Africa, especially
     Nigeria. It consists of ripe plantains that are boiled until tender and served alongside a savory egg sauce.
     This dish is not only delicious but also nutritious, as it provides a good balance of carbohydrates, 
     protein, and essential vitamins. It's a favorite among both locals and visitors, often found being sold 
     as a quick and satisfying street food option.`,
     id: 15,
  },
  {
    image: ImageApp.food17,
    name: "Okro Soup and Eba.",
    price: 2500,
    desc: `Okro soup and eba make up a classic Nigerian dish that's both flavorful and hearty. Okro soup,
     also known as "okra soup," is a thick, savory stew made primarily from chopped okra, tomatoes, onions, 
     and various spices. It often includes meat or seafood such as beef, chicken, fish, or shrimp, 
      protein and depth of flavor to the dish.`,
      id: 16,
  },
  {
    image: ImageApp.food18,
    name: "Ewede Soup and Amala.",
    price: 4000,
    desc: `Ewedu soup and amala are classic dishes in Yoruba cuisine, originating from the Yoruba ethnic group 
    of Nigeria. Ewedu soup is a traditional soup made primarily from jute leaves, known as ewedu in Yoruba. The
     leaves are finely chopped and cooked until they form a smooth, slightly slimy consistency. The soup is
      typically seasoned with ingredients like onions, peppers, and locust beans, and often served with a 
       made from ground peppers and onions.`,
       id: 17,
  },
  {
    image: ImageApp.food19,
    name: "Fried Plantain and Fried Egg.",
    price: 2000,
    desc: `Fried plantain and fried egg make for a simple yet satisfying dish enjoyed in many parts of the world.
     Ripe plantains are sliced and fried until golden and caramelized, creating a sweet and tender side dish or 
     snack. Meanwhile, eggs are fried sunny-side up or to your preferred level of doneness, offering a 
      and protein-rich accompaniment.Together, the crispy sweetness of the plantains and the rich creaminess of the eggs create
    a harmonious combination of flavors and textures that's perfect for breakfast, brunch, or any time of the day.`,
    id: 18,
  },
  {
    image: ImageApp.food20,
    name: "Groundnut Soup and Pounded Yam.",
    price: 5000,
    desc: `Groundnut soup and pounded yam are popular dishes in Nigerian cuisine, particularly among the Igbo 
    and other ethnic groups. Groundnut soup, also known as peanut soup or "Ofe Owerri," is a rich and 
     stew made from ground peanuts (groundnuts), tomatoes, onions, peppers, and spices. It often includes 
     protein sources like meat, fish, or seafood, adding depth and texture to the dish. The groundnut soup has
      a creamy consistency and a nutty flavor that pairs well with the boldness of the spices and the sweetness 
      of the tomatoes.`,
      id: 19,
  },
  {
    image: ImageApp.food21,
    name: "Bitter Leaf Soup and Semovita.",
    price: 5500,
    desc: `Indulge in the rich flavors of Nigerian cuisine with our delicious Bitter Leaf Soup and Semovita 
    combo! Bitter Leaf Soup, a traditional West African dish, is made from finely chopped bitter leaves, 
    assorted meats, fish, and spices, creating a flavorful and aromatic experience. Pair it with our premium
     Semovita, a smooth and satisfying wheat-based swallow that's perfect for soaking up every bit of the savory 
     soup. With its authentic taste and convenient preparation, our Bitter Leaf Soup and Semovita combo is sure 
     to delight your taste buds and transport you to the heart of Nigeria's culinary tradition. Get yours today 
     and savor the taste of Africa!`,
     id: 20,
  },
  {
    image: ImageApp.food22,
    name: "Nsala Soup and Eba.",
    price: 4500,
    desc: `Indulge in the authentic flavors of Nigeria with our tantalizing Nsala Soup and Eba combo! Nsala 
    , also known as "White Soup," is a traditional delicacy originating from the Igbo tribe, featuring succulent
     pieces of fish or meat simmered in a rich broth of blended spices and aromatic herbs. Paired perfectly with 
     Eba, a smooth and fluffy cassava-based swallow, this combo offers a delightful harmony of textures and 
     tastes. Whether you're craving a taste of home or seeking a culinary adventure, our Nsala Soup and Eba 
      promises a satisfying and memorable dining experience. Order now and savor the essence of Nigerian 
       in every bite!`,
       id: 21,
  },
  {
    image: ImageApp.food23,
    name: "Moi-Moi and Pap.",
    price: 2500,
    desc: `Savor the authentic taste of Nigeria with our mouthwatering Moi Moi and Pap combo! Moi Moi, 
    a steamed bean pudding delicacy, is crafted from a blend of ground beans, peppers, onions, and spices, 
    creating a savory and nutritious treat. Paired with Pap, a smooth and comforting cornmeal porridge,
     this combo offers a delightful balance of flavors and textures, perfect for breakfast or any time
      of the day. Whether you're a connoisseur of Nigerian cuisine or simply looking to indulge in a 
      culinary adventure, our Moi Moi and Pap combo promises a satisfying and wholesome experience. 
      Order now and treat yourself to the taste of Nigeria's culinary heritage!`,
      id: 22,
  },
]
