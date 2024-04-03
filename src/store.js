import { createStore } from 'vuex';

const store = createStore({
  state: {
    products: [
      {
        category: 'shirts',
        items: [
          { id: 1, cardImage: "https://i.imgur.com/LAsQyF9.png", hoverImage: "https://i.imgur.com/yiejq9a.png", cardDesc: "HigherGravity Deadly Ghost T-SHIRT.", cardPrice: "$29.99 USD" },
          { id: 2, cardImage: "https://i.imgur.com/LNC3JVa.png", hoverImage: "https://i.imgur.com/ubyDakU.png", cardDesc: "HigherGravity Narcissist Dominator White T-SHIRT.", cardPrice: "$20.00 USD" },
          { id: 3, cardImage: "https://i.imgur.com/YDxkpCx.png", hoverImage: "https://i.imgur.com/emlamom.png", cardDesc: "HigherGravity Playlit Paradise White T-SHIRT.", cardPrice: "$20.00 USD" },
          { id: 4, cardImage: "https://i.imgur.com/JlGcslv.png", hoverImage: "https://i.imgur.com/kNz04e9.png", cardDesc: "HigherGravity Serendipity Takers Black Washed T-SHIRT.", cardPrice: "$29.99 USD" },
          { id: 5, cardImage: "https://i.imgur.com/NDafwIv.png", hoverImage: "https://i.imgur.com/AkDUOqL.png", cardDesc: "HigherGravity Serendipity Takers Black Washed T-SHIRT.", cardPrice: "$29.99 USD" },
          { id: 6, cardImage: "https://i.imgur.com/AKer12b.png", hoverImage: "https://i.imgur.com/ENcH3j2.png", cardDesc: "HigherGravity Classy Vintage T-SHIRT.", cardPrice: "$20.00 USD" },
          { id: 7, cardImage: "https://i.imgur.com/iIGAgnm.png", hoverImage: "https://i.imgur.com/y8i8CbZ.png", cardDesc: "HigherGravity Lost Cause Vintage White T-SHIRT.", cardPrice: "$25.00 USD" },
          { id: 8, cardImage: "https://i.imgur.com/oYfOysg.png", hoverImage: "https://i.imgur.com/m6srkPT.png", cardDesc: "HigherGravity Ghost Kiss Dark Washed Vintage T-SHIRT.", cardPrice: "$25.00 USD" },
          { id: 9, cardImage: "https://i.imgur.com/rG3HRAH.png", hoverImage: "https://i.imgur.com/gJgg84a.png", cardDesc: "HigherGravity Lost Souls Dark Washed T-SHIRT.", cardPrice: "$25.00 USD" }
        ]
      },
      {
        category: 'pants',
        items: [
          { id: 11, cardImage: "https://i.imgur.com/gwutwO9.png", hoverImage: "https://i.imgur.com/qjMhbUS.png", cardDesc: "HigherGravity Flared Fit Biker Jeans.", cardPrice: "$29.99 USD" },
          { id: 12, cardImage: "https://i.imgur.com/a6kPEzM.png", hoverImage: "https://i.imgur.com/SZjD1q9.png", cardDesc: "HigherGravity Flared Fit Biker Jeans.", cardPrice: "$20.00 USD" },
          { id: 13, cardImage: "https://i.imgur.com/B9qTtSy.png", hoverImage: "https://i.imgur.com/iyQwvh7.png", cardDesc: "HigherGravity Overdyed baggy Jeans.", cardPrice: "$20.00 USD" },
          { id: 14, cardImage: "https://i.imgur.com/PhM88th.png", hoverImage: "https://i.imgur.com/572Glq7.png", cardDesc: "HigherGravity Baggy Fit Washed Gray Jeans.", cardPrice: "$29.99 USD" },
          { id: 15, cardImage: "https://i.imgur.com/blGADOg.png", hoverImage: "https://i.imgur.com/X6OvVEK.png", cardDesc: "HigherGravity Flared Fit Belted Jeans.", cardPrice: "$20.00 USD" },
          { id: 16, cardImage: "https://i.imgur.com/5F1s6Kw.png", hoverImage: "https://i.imgur.com/UvOqQRF.png", cardDesc: "HigherGravity Relaxed Ripped Jeans.", cardPrice: "$25.00 USD" },
          { id: 17, cardImage: "https://i.imgur.com/e8xdcjg.png", hoverImage: "https://i.imgur.com/Rb8s8q8.png", cardDesc: "HigherGravity Baggy Fit Jeans.", cardPrice: "$25.00 USD" },
          { id: 18, cardImage: "https://i.imgur.com/9kfrJgn.png", hoverImage: "https://i.imgur.com/iGi7rUR.png", cardDesc: "HigherGravity Flared Fit Cargo Jeans.", cardPrice: "$25.00 USD" },
          { id: 19, cardImage: "https://i.imgur.com/ttOJCVY.png", hoverImage: "https://i.imgur.com/WRgnFDV.png", cardDesc: "HigherGravity Baggy Fit Light Blue Jeans.", cardPrice: "$25.00 USD" },
          { id: 20, cardImage: "https://i.imgur.com/Cus9mFa.png", hoverImage: "https://i.imgur.com/qLrR2zi.png", cardDesc: "HigherGravity Flared Fit Jeans.", cardPrice: "$25.00 USD" },
          { id: 21, cardImage: "https://i.imgur.com/iLsfzc3.png", hoverImage: "https://i.imgur.com/f03oSuo.png", cardDesc: "HigherGravity Relaxed Fit Gray Jeans.", cardPrice: "$25.00 USD" },
          { id: 22, cardImage: "https://i.imgur.com/xA0cMUe.png", hoverImage: "https://i.imgur.com/exI7xwO.png", cardDesc: "HigherGravity Flared Fit Washed Jeans.", cardPrice: "$25.00 USD" },
          { id: 23, cardImage: "https://i.imgur.com/kP0GQox.png", hoverImage: "https://i.imgur.com/kP0GQox.png", cardDesc: "HigherGravity Cargo Fit Jeans.", cardPrice: "$25.00 USD" }
        ]
      }
    ],
      newcards:[
      { id: 24, cardImage:"https://i.imgur.com/4VIBsSW.png", hoverImage: "https://i.imgur.com/IR7GgQx.png", cardDesc: "HigherGravity classy light blue shirt.", cardPrice: "$29.99 USD", },
      { id: 25, cardImage:"https://i.imgur.com/t6Iakck.png", hoverImage: "https://i.imgur.com/HGxFEfE.png", cardDesc: "HigherGravity dark blue ocean jersey.", cardPrice: "$25.00 USD", },
      { id: 265, cardImage:"https://i.imgur.com/MONyixl.png", hoverImage: "https://i.imgur.com/sb6AqDJ.png", cardDesc: "HigherGravity Retro Sport Beige Shirt.", cardPrice: "$25.00 USD", },
      ],

  },
 
});

export default store;
