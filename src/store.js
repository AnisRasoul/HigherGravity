import { createStore } from 'vuex';

const store = createStore({
  state: {
    products: [
      {
        category: 'shirts',
        items: [
          { id: 1, cardImage: "https://i.imgur.com/LAsQyF9.png", hoverImage: "https://i.imgur.com/yiejq9a.png", cardDesc: "HigherGravity Deadly Ghost T-SHIRT.", cardPrice: 29.99 ,moreImages:['https://i.imgur.com/LAsQyF9.png', 'https://imgur.com/eTkqsGH.png','https://imgur.com/FRf2j62.png','https://imgur.com/VaJ8PYL.png', 'https://imgur.com/MrIy64A.png', 'https://imgur.com/jlkXKBP.png'] },
          { id: 2, cardImage: "https://i.imgur.com/LNC3JVa.png", hoverImage: "https://i.imgur.com/ubyDakU.png", cardDesc: "HigherGravity Narcissist Dominator White T-SHIRT.", cardPrice: 20.00, moreImages:['.png','.png','.png','.png','.png','.png',] },
          { id: 3, cardImage: "https://i.imgur.com/YDxkpCx.png", hoverImage: "https://i.imgur.com/emlamom.png", cardDesc: "HigherGravity Playlit Paradise White T-SHIRT.", cardPrice: 20.00, moreImages:['.png','.png','.png','.png','.png','.png',] },
          { id: 4, cardImage: "https://i.imgur.com/JlGcslv.png", hoverImage: "https://i.imgur.com/kNz04e9.png", cardDesc: "HigherGravity Serendipity Takers Black Washed T-SHIRT.", cardPrice: 29.99, moreImages:['.png','.png','.png','.png','.png','.png',] },
          { id: 5, cardImage: "https://i.imgur.com/NDafwIv.png", hoverImage: "https://i.imgur.com/AkDUOqL.png", cardDesc: "HigherGravity Serendipity Takers Black Washed T-SHIRT.", cardPrice: 29.99, moreImages:['.png','.png','.png','.png','.png','.png',] },
          { id: 6, cardImage: "https://i.imgur.com/AKer12b.png", hoverImage: "https://i.imgur.com/ENcH3j2.png", cardDesc: "HigherGravity Classy Vintage T-SHIRT.", cardPrice: 20.00, moreImages:['.png','.png','.png','.png','.png','.png',] },
          { id: 7, cardImage: "https://i.imgur.com/iIGAgnm.png", hoverImage: "https://i.imgur.com/y8i8CbZ.png", cardDesc: "HigherGravity Lost Cause Vintage White T-SHIRT.", cardPrice: 25.00, moreImages:['.png','.png','.png','.png','.png','.png',] },
          { id: 8, cardImage: "https://i.imgur.com/oYfOysg.png", hoverImage: "https://i.imgur.com/m6srkPT.png", cardDesc: "HigherGravity Ghost Kiss Dark Washed Vintage T-SHIRT.", cardPrice: 25.00 , moreImages:['.png','.png','.png','.png','.png','.png',]},
          { id: 9, cardImage: "https://i.imgur.com/rG3HRAH.png", hoverImage: "https://i.imgur.com/gJgg84a.png", cardDesc: "HigherGravity Lost Souls Dark Washed T-SHIRT.", cardPrice: 25.00 , moreImages:['https://i.imgur.com/rG3HRAH.png', 'https://imgur.com/eTkqsGH.png','https://imgur.com/FRf2j62.png','https://imgur.com/VaJ8PYL.png', 'https://imgur.com/MrIy64A.png', 'https://imgur.com/jlkXKBP.png']}
        ]
      },
      {
        category: 'pants',
        items: [
          { id: 10, cardImage: "https://i.imgur.com/gwutwO9.png", hoverImage: "https://i.imgur.com/qjMhbUS.png", cardDesc: "HigherGravity Flared Fit Biker Jeans.", cardPrice: 29.99, moreImages:['https://i.imgur.com/gwutwO9.png','https://imgur.com/O0o0l5E.png','https://imgur.com/9hmWWZA.png','https://imgur.com/RmDvtF6.png','https://imgur.com/WuJ8tS0.png','https://imgur.com/jw60HiR.png'] },
          { id: 11, cardImage: "https://i.imgur.com/a6kPEzM.png", hoverImage: "https://i.imgur.com/SZjD1q9.png", cardDesc: "HigherGravity Flared Fit Biker Jeans.", cardPrice: 20.00, moreImages:['https://imgur.com/iLZt0pP.png','https://imgur.com/4ECWnQO.png','https://imgur.com/sWSdcST.png','https://imgur.com/TQiQ03b.png','https://imgur.com/H7qB78q.png','https://imgur.com/wNi0Yb5.png',] },
          { id: 12, cardImage: "https://i.imgur.com/B9qTtSy.png", hoverImage: "https://i.imgur.com/iyQwvh7.png", cardDesc: "HigherGravity Overdyed baggy Jeans.", cardPrice: 20.00 , moreImages: ['https://i.imgur.com/B9qTtSy.png','https://imgur.com/nZDieWU.png','https://imgur.com/seXbLUQ.png','https://imgur.com/7b5q9dJ.png' , 'https://imgur.com/5GNKLhm.png', 'https://imgur.com/x9H1VeX.png' ]},
          { id: 13, cardImage: "https://i.imgur.com/PhM88th.png", hoverImage: "https://i.imgur.com/572Glq7.png", cardDesc: "HigherGravity Baggy Fit Washed Gray Jeans.", cardPrice: 29.99, moreImages:['.png','.png','.png','.png','.png','.png',] },
          { id: 14, cardImage: "https://imgur.com/qmsuqet.png", hoverImage: "https://imgur.com/orZpgT3.png", cardDesc: "HigherGravity Flared Fit Belted Jeans.", cardPrice: 20.00, moreImages:['https://imgur.com/qmsuqet.png','https://imgur.com/orZpgT3.png','https://imgur.com/uL2I7Xt.png','https://imgur.com/3xd1yfx.png','https://imgur.com/uSYcMsn.png','https://imgur.com/CkrnV6v.png',] },
          { id: 15, cardImage: "https://imgur.com/lqh7zv2.png",   hoverImage: "https://i.imgur.com/UvOqQRF.png", cardDesc: "HigherGravity Relaxed Ripped Jeans.", cardPrice: 25.00, moreImages:['https://imgur.com/lqh7zv2.png','https://imgur.com/954MSlm.png','https://imgur.com/aSw44V9.png','https://imgur.com/s8rfati.png','https://imgur.com/aaXW5NE.png','https://imgur.com/76kZO1Z.png',] },
          { id: 16, cardImage: "https://imgur.com/TGE2czj.png", hoverImage: "https://imgur.com/nJiT1HS.png", cardDesc: "HigherGravity Baggy Fit Jeans.", cardPrice: 25.00, moreImages:['https://imgur.com/TGE2czj.png','https://imgur.com/nJiT1HS.png','https://imgur.com/7R3erZm.png','https://imgur.com/bCKMlEi.png','https://imgur.com/T6HirPL.png','https://imgur.com/C2Ci4nh.png',] },
          { id: 17, cardImage: "https://imgur.com/wus83uo.png", hoverImage: "https://imgur.com/3IRLgu0.png", cardDesc: "HigherGravity Flared Fit Cargo Jeans.", cardPrice: 25.00 , moreImages:['https://imgur.com/wus83uo.png','https://imgur.com/3IRLgu0.png','https://imgur.com/6EjhDs8.png','https://imgur.com/yi3T24N.png','https://imgur.com/rSJ13H0.png','https://imgur.com/vuUnx1F.png',]},
          { id: 18, cardImage: "https://imgur.com/NnrmYoW.png", hoverImage: "https://imgur.com/H7iJeB2.png", cardDesc: "HigherGravity Flared Fit Jeans.", cardPrice: 25.00, moreImages:['https://imgur.com/NnrmYoW.png','https://imgur.com/H7iJeB2.png','https://imgur.com/HRtuaKn.png','https://imgur.com/fkH39d8.png','https://imgur.com/AY9h4YG.png','https://imgur.com/kPHxtJE.png',] },
          { id: 19, cardImage: "https://imgur.com/uopHwNj.png",   hoverImage: "https://imgur.com/j3btmRg.png"  , cardDesc: "HigherGravity Relaxed Fit Gray Jeans.", cardPrice: 25.00 , moreImages:['https://imgur.com/uopHwNj.png','https://imgur.com/j3btmRg.png','https://imgur.com/vnRRK0Z.png','https://imgur.com/adQtsSU.png','https://imgur.com/0gqviha.png','https://imgur.com/DAsvNW3.png',]},
          { id: 20, cardImage: "https://imgur.com/OWjiTSJ.png", hoverImage: "https://imgur.com/TVw60Ao.png", cardDesc: "HigherGravity Flared Fit Washed Jeans.", cardPrice: 25.00, moreImages:['https://imgur.com/OWjiTSJ.png','https://imgur.com/TVw60Ao.png','https://imgur.com/L4peTt6.png','https://imgur.com/PkHvAFa.png','https://imgur.com/UtqqHXY.png','https://imgur.com/ZSdfYeK.png',] },
          { id: 21, cardImage: "https://imgur.com/aMi7lJZ.png", hoverImage: "https://imgur.com/I61Ml7c.png", cardDesc: "HigherGravity Cargo Fit Jeans.", cardPrice: 25.00,moreImages:['https://imgur.com/aMi7lJZ.png','https://imgur.com/I61Ml7c.png','https://imgur.com/TwS2gO6.png','https://imgur.com/1l3zlIO.png','https://imgur.com/JFCIiWs.png','https://imgur.com/XByxYg9.png',] }
        ]
      }
    ],
    newcards: [
      { id: 22, cardImage: "https://i.imgur.com/4VIBsSW.png", hoverImage: "https://i.imgur.com/IR7GgQx.png", cardDesc: "HigherGravity classy light blue shirt.", cardPrice: 29.99 },
      { id: 23, cardImage: "https://i.imgur.com/t6Iakck.png", hoverImage: "https://i.imgur.com/HGxFEfE.png", cardDesc: "HigherGravity dark blue ocean jersey.", cardPrice: 25.00 },
      { id: 24, cardImage: "https://i.imgur.com/MONyixl.png", hoverImage: "https://i.imgur.com/sb6AqDJ.png", cardDesc: "HigherGravity Retro Sport Beige Shirt.", cardPrice: 25.00 },
    ],
    cart: JSON.parse(localStorage.getItem('cart')) || [],
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push(product);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeFromCart(state, id) {
      state.cart = state.cart.filter(item => item.id !== id);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit('addToCart', product);
    },
    removeFromCart({ commit }, id) {
      commit('removeFromCart', id);
    },
  },
});

export default store;
