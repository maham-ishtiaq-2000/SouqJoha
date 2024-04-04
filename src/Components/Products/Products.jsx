import React from 'react';
import SingleProduct from './SIngleProduct';

const Products = () => {
    let allProducts = [ 
        {heading : "Mobiles, Tablets And Accessories",
        products : [
            {
              id: 1,
              title: 'Silver Necklace',
              description: 'Silver necklace with dark red accessory',
              imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
              priceWithVAT: 'EGP90.00 With VAT',
              originalPrice: 'EGP110.00',
              discountPercentage: 18,
            },
            {
              id: 2,
              title: 'Copper Necklace',
              description: 'Copper accessory necklace',
              imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1914-768x767.jpg', // Replace with your image path
              priceWithVAT: 'EGP100.00 With VAT',
              originalPrice: 'EGP150.00',
              discountPercentage: 29,
            },
            {
                id: 3,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 4,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 5,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 6,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            }
            
          ],
        imagesSlider1 : [{
            img : "https://www.freep.com/gcdn/presto/2018/12/23/PDTF/e419f3e2-1d8a-4870-941b-9989370e7123-GettyImages-94464340.jpg?crop=2769,1558,x5460,y542&width=2769&height=1558&format=pjpg&auto=webp"
          }, {
            img : "https://www.iottechnews.com/wp-content/uploads/sites/5/2022/05/meta-quest-3-headset-2-vr-virtual-reality-oculus-metaverse-roadmap.png"
          }],
        imagesSlider2 : [{
            img : "https://www.freep.com/gcdn/presto/2018/12/23/PDTF/e419f3e2-1d8a-4870-941b-9989370e7123-GettyImages-94464340.jpg?crop=2769,1558,x5460,y542&width=2769&height=1558&format=pjpg&auto=webp"
          }, {
            img : "https://image-us.samsung.com/SamsungUS/home/mobile/phones/all-other-phones/pdp/sm-j727uzkaxaa/gallery/1-unlocked_j727_bk_v_front.jpg"
          }]},
          {heading : "Computers And Laptops",
          products : [
              {
                id: 7,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
              },
              {
                id: 8,
                title: 'Copper Necklace',
                description: 'Copper accessory necklace',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1914-768x767.jpg', // Replace with your image path
                priceWithVAT: 'EGP100.00 With VAT',
                originalPrice: 'EGP150.00',
                discountPercentage: 29,
              },
              {
                  id: 9,
                  title: 'Silver Necklace',
                  description: 'Silver necklace with dark red accessory',
                  imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                  priceWithVAT: 'EGP90.00 With VAT',
                  originalPrice: 'EGP110.00',
                  discountPercentage: 18,
              }
              
            ],
          imagesSlider1 : [{
              img : "https://www.freep.com/gcdn/presto/2018/12/23/PDTF/e419f3e2-1d8a-4870-941b-9989370e7123-GettyImages-94464340.jpg?crop=2769,1558,x5460,y542&width=2769&height=1558&format=pjpg&auto=webp"
            }, {
              img : "https://www.iottechnews.com/wp-content/uploads/sites/5/2022/05/meta-quest-3-headset-2-vr-virtual-reality-oculus-metaverse-roadmap.png"
            }],
          imagesSlider2 : [{
              img : "https://www.freep.com/gcdn/presto/2018/12/23/PDTF/e419f3e2-1d8a-4870-941b-9989370e7123-GettyImages-94464340.jpg?crop=2769,1558,x5460,y542&width=2769&height=1558&format=pjpg&auto=webp"
            }, {
              img : "https://image-us.samsung.com/SamsungUS/home/mobile/phones/all-other-phones/pdp/sm-j727uzkaxaa/gallery/1-unlocked_j727_bk_v_front.jpg"
            }]},
            {heading : "Health And Beauty",
        products : [
            {
              id: 10,
              title: 'Silver Necklace',
              description: 'Silver necklace with dark red accessory',
              imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
              priceWithVAT: 'EGP90.00 With VAT',
              originalPrice: 'EGP110.00',
              discountPercentage: 18,
            },
            {
              id: 11,
              title: 'Copper Necklace',
              description: 'Copper accessory necklace',
              imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1914-768x767.jpg', // Replace with your image path
              priceWithVAT: 'EGP100.00 With VAT',
              originalPrice: 'EGP150.00',
              discountPercentage: 29,
            },
            {
                id: 12,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 13,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 14,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 15,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            }
            
          ],
        imagesSlider1 : [{
            img : "https://www.freep.com/gcdn/presto/2018/12/23/PDTF/e419f3e2-1d8a-4870-941b-9989370e7123-GettyImages-94464340.jpg?crop=2769,1558,x5460,y542&width=2769&height=1558&format=pjpg&auto=webp"
          }, {
            img : "https://www.iottechnews.com/wp-content/uploads/sites/5/2022/05/meta-quest-3-headset-2-vr-virtual-reality-oculus-metaverse-roadmap.png"
          }],
        imagesSlider2 : [{
            img : "https://www.freep.com/gcdn/presto/2018/12/23/PDTF/e419f3e2-1d8a-4870-941b-9989370e7123-GettyImages-94464340.jpg?crop=2769,1558,x5460,y542&width=2769&height=1558&format=pjpg&auto=webp"
          }, {
            img : "https://image-us.samsung.com/SamsungUS/home/mobile/phones/all-other-phones/pdp/sm-j727uzkaxaa/gallery/1-unlocked_j727_bk_v_front.jpg"
          }]},
          {heading : "Modern Home",
        products : [
            {
              id: 16,
              title: 'Silver Necklace',
              description: 'Silver necklace with dark red accessory',
              imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
              priceWithVAT: 'EGP90.00 With VAT',
              originalPrice: 'EGP110.00',
              discountPercentage: 18,
            },
            {
              id: 17,
              title: 'Copper Necklace',
              description: 'Copper accessory necklace',
              imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1914-768x767.jpg', // Replace with your image path
              priceWithVAT: 'EGP100.00 With VAT',
              originalPrice: 'EGP150.00',
              discountPercentage: 29,
            },
            {
                id: 18,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 19,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 20,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 21,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            }
            
          ],
        imagesSlider1 : [{
            img : "https://www.freep.com/gcdn/presto/2018/12/23/PDTF/e419f3e2-1d8a-4870-941b-9989370e7123-GettyImages-94464340.jpg?crop=2769,1558,x5460,y542&width=2769&height=1558&format=pjpg&auto=webp"
          }, {
            img : "https://www.iottechnews.com/wp-content/uploads/sites/5/2022/05/meta-quest-3-headset-2-vr-virtual-reality-oculus-metaverse-roadmap.png"
          }],
        imagesSlider2 : [{
            img : "https://www.freep.com/gcdn/presto/2018/12/23/PDTF/e419f3e2-1d8a-4870-941b-9989370e7123-GettyImages-94464340.jpg?crop=2769,1558,x5460,y542&width=2769&height=1558&format=pjpg&auto=webp"
          }, {
            img : "https://image-us.samsung.com/SamsungUS/home/mobile/phones/all-other-phones/pdp/sm-j727uzkaxaa/gallery/1-unlocked_j727_bk_v_front.jpg"
          }]},
          {heading : "Jewellery",
        products : [
            {
              id: 22,
              title: 'Silver Necklace',
              description: 'Silver necklace with dark red accessory',
              imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
              priceWithVAT: 'EGP90.00 With VAT',
              originalPrice: 'EGP110.00',
              discountPercentage: 18,
            },
            {
              id: 23,
              title: 'Copper Necklace',
              description: 'Copper accessory necklace',
              imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1914-768x767.jpg', // Replace with your image path
              priceWithVAT: 'EGP100.00 With VAT',
              originalPrice: 'EGP150.00',
              discountPercentage: 29,
            },
            {
                id: 24,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 25,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 26,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 27,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            }
            
          ],
        imagesSlider1 : [{
            img : "https://www.freep.com/gcdn/presto/2018/12/23/PDTF/e419f3e2-1d8a-4870-941b-9989370e7123-GettyImages-94464340.jpg?crop=2769,1558,x5460,y542&width=2769&height=1558&format=pjpg&auto=webp"
          }, {
            img : "https://www.iottechnews.com/wp-content/uploads/sites/5/2022/05/meta-quest-3-headset-2-vr-virtual-reality-oculus-metaverse-roadmap.png"
          }],
        imagesSlider2 : [{
            img : "https://www.freep.com/gcdn/presto/2018/12/23/PDTF/e419f3e2-1d8a-4870-941b-9989370e7123-GettyImages-94464340.jpg?crop=2769,1558,x5460,y542&width=2769&height=1558&format=pjpg&auto=webp"
          }, {
            img : "https://image-us.samsung.com/SamsungUS/home/mobile/phones/all-other-phones/pdp/sm-j727uzkaxaa/gallery/1-unlocked_j727_bk_v_front.jpg"
          }]},
          {heading : "Shoes",
        products : [
            {
              id: 28,
              title: 'Silver Necklace',
              description: 'Silver necklace with dark red accessory',
              imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
              priceWithVAT: 'EGP90.00 With VAT',
              originalPrice: 'EGP110.00',
              discountPercentage: 18,
            },
            {
              id: 29,
              title: 'Copper Necklace',
              description: 'Copper accessory necklace',
              imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1914-768x767.jpg', // Replace with your image path
              priceWithVAT: 'EGP100.00 With VAT',
              originalPrice: 'EGP150.00',
              discountPercentage: 29,
            },
            {
                id: 30,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 31,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 32,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 33,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            }
            
          ],
        imagesSlider1 : [{
            img : "https://www.freep.com/gcdn/presto/2018/12/23/PDTF/e419f3e2-1d8a-4870-941b-9989370e7123-GettyImages-94464340.jpg?crop=2769,1558,x5460,y542&width=2769&height=1558&format=pjpg&auto=webp"
          }, {
            img : "https://www.iottechnews.com/wp-content/uploads/sites/5/2022/05/meta-quest-3-headset-2-vr-virtual-reality-oculus-metaverse-roadmap.png"
          }],
        imagesSlider2 : [{
            img : "https://www.freep.com/gcdn/presto/2018/12/23/PDTF/e419f3e2-1d8a-4870-941b-9989370e7123-GettyImages-94464340.jpg?crop=2769,1558,x5460,y542&width=2769&height=1558&format=pjpg&auto=webp"
          }, {
            img : "https://image-us.samsung.com/SamsungUS/home/mobile/phones/all-other-phones/pdp/sm-j727uzkaxaa/gallery/1-unlocked_j727_bk_v_front.jpg"
          }]},
          {heading : "Bags",
        products : [
            {
              id: 34,
              title: 'Silver Necklace',
              description: 'Silver necklace with dark red accessory',
              imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
              priceWithVAT: 'EGP90.00 With VAT',
              originalPrice: 'EGP110.00',
              discountPercentage: 18,
            },
            {
              id: 35,
              title: 'Copper Necklace',
              description: 'Copper accessory necklace',
              imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1914-768x767.jpg', // Replace with your image path
              priceWithVAT: 'EGP100.00 With VAT',
              originalPrice: 'EGP150.00',
              discountPercentage: 29,
            },
            {
                id: 36,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 37,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 38,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 39,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            }
            
          ],
        imagesSlider1 : [{
            img : "https://www.freep.com/gcdn/presto/2018/12/23/PDTF/e419f3e2-1d8a-4870-941b-9989370e7123-GettyImages-94464340.jpg?crop=2769,1558,x5460,y542&width=2769&height=1558&format=pjpg&auto=webp"
          }, {
            img : "https://www.iottechnews.com/wp-content/uploads/sites/5/2022/05/meta-quest-3-headset-2-vr-virtual-reality-oculus-metaverse-roadmap.png"
          }],
        imagesSlider2 : [{
            img : "https://www.freep.com/gcdn/presto/2018/12/23/PDTF/e419f3e2-1d8a-4870-941b-9989370e7123-GettyImages-94464340.jpg?crop=2769,1558,x5460,y542&width=2769&height=1558&format=pjpg&auto=webp"
          }, {
            img : "https://image-us.samsung.com/SamsungUS/home/mobile/phones/all-other-phones/pdp/sm-j727uzkaxaa/gallery/1-unlocked_j727_bk_v_front.jpg"
          }]},
          {heading : "Baby Accessories",
        products : [
            {
              id: 40,
              title: 'Silver Necklace',
              description: 'Silver necklace with dark red accessory',
              imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
              priceWithVAT: 'EGP90.00 With VAT',
              originalPrice: 'EGP110.00',
              discountPercentage: 18,
            },
            {
              id: 41,
              title: 'Copper Necklace',
              description: 'Copper accessory necklace',
              imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1914-768x767.jpg', // Replace with your image path
              priceWithVAT: 'EGP100.00 With VAT',
              originalPrice: 'EGP150.00',
              discountPercentage: 29,
            },
            {
                id: 42,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 43,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 44,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 45,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            }
            
          ],
        imagesSlider1 : [{
            img : "https://www.freep.com/gcdn/presto/2018/12/23/PDTF/e419f3e2-1d8a-4870-941b-9989370e7123-GettyImages-94464340.jpg?crop=2769,1558,x5460,y542&width=2769&height=1558&format=pjpg&auto=webp"
          }, {
            img : "https://www.iottechnews.com/wp-content/uploads/sites/5/2022/05/meta-quest-3-headset-2-vr-virtual-reality-oculus-metaverse-roadmap.png"
          }],
        imagesSlider2 : [{
            img : "https://www.freep.com/gcdn/presto/2018/12/23/PDTF/e419f3e2-1d8a-4870-941b-9989370e7123-GettyImages-94464340.jpg?crop=2769,1558,x5460,y542&width=2769&height=1558&format=pjpg&auto=webp"
          }, {
            img : "https://image-us.samsung.com/SamsungUS/home/mobile/phones/all-other-phones/pdp/sm-j727uzkaxaa/gallery/1-unlocked_j727_bk_v_front.jpg"
          }]},
          {heading : "Watches",
        products : [
            {
              id: 46,
              title: 'Silver Necklace',
              description: 'Silver necklace with dark red accessory',
              imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
              priceWithVAT: 'EGP90.00 With VAT',
              originalPrice: 'EGP110.00',
              discountPercentage: 18,
            },
            {
              id: 47,
              title: 'Copper Necklace',
              description: 'Copper accessory necklace',
              imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1914-768x767.jpg', // Replace with your image path
              priceWithVAT: 'EGP100.00 With VAT',
              originalPrice: 'EGP150.00',
              discountPercentage: 29,
            },
            {
                id: 48,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 49,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 50,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 51,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            }
            
          ],
        imagesSlider1 : [{
            img : "https://www.freep.com/gcdn/presto/2018/12/23/PDTF/e419f3e2-1d8a-4870-941b-9989370e7123-GettyImages-94464340.jpg?crop=2769,1558,x5460,y542&width=2769&height=1558&format=pjpg&auto=webp"
          }, {
            img : "https://www.iottechnews.com/wp-content/uploads/sites/5/2022/05/meta-quest-3-headset-2-vr-virtual-reality-oculus-metaverse-roadmap.png"
          }],
        imagesSlider2 : [{
            img : "https://www.freep.com/gcdn/presto/2018/12/23/PDTF/e419f3e2-1d8a-4870-941b-9989370e7123-GettyImages-94464340.jpg?crop=2769,1558,x5460,y542&width=2769&height=1558&format=pjpg&auto=webp"
          }, {
            img : "https://image-us.samsung.com/SamsungUS/home/mobile/phones/all-other-phones/pdp/sm-j727uzkaxaa/gallery/1-unlocked_j727_bk_v_front.jpg"
          }]},
          {heading : "Glasses",
          products : [
              {
                id: 52,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
              },
              {
                id: 52,
                title: 'Copper Necklace',
                description: 'Copper accessory necklace',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1914-768x767.jpg', // Replace with your image path
                priceWithVAT: 'EGP100.00 With VAT',
                originalPrice: 'EGP150.00',
                discountPercentage: 29,
              },
              {
                  id: 54,
                  title: 'Silver Necklace',
                  description: 'Silver necklace with dark red accessory',
                  imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                  priceWithVAT: 'EGP90.00 With VAT',
                  originalPrice: 'EGP110.00',
                  discountPercentage: 18,
              },
              {
                  id: 55,
                  title: 'Silver Necklace',
                  description: 'Silver necklace with dark red accessory',
                  imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                  priceWithVAT: 'EGP90.00 With VAT',
                  originalPrice: 'EGP110.00',
                  discountPercentage: 18,
              },
              {
                  id: 56,
                  title: 'Silver Necklace',
                  description: 'Silver necklace with dark red accessory',
                  imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                  priceWithVAT: 'EGP90.00 With VAT',
                  originalPrice: 'EGP110.00',
                  discountPercentage: 18,
              },
              {
                  id: 57,
                  title: 'Silver Necklace',
                  description: 'Silver necklace with dark red accessory',
                  imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                  priceWithVAT: 'EGP90.00 With VAT',
                  originalPrice: 'EGP110.00',
                  discountPercentage: 18,
              }
              
            ],
          imagesSlider1 : [{
              img : "https://www.freep.com/gcdn/presto/2018/12/23/PDTF/e419f3e2-1d8a-4870-941b-9989370e7123-GettyImages-94464340.jpg?crop=2769,1558,x5460,y542&width=2769&height=1558&format=pjpg&auto=webp"
            }, {
              img : "https://www.iottechnews.com/wp-content/uploads/sites/5/2022/05/meta-quest-3-headset-2-vr-virtual-reality-oculus-metaverse-roadmap.png"
            }],
          imagesSlider2 : [{
              img : "https://www.freep.com/gcdn/presto/2018/12/23/PDTF/e419f3e2-1d8a-4870-941b-9989370e7123-GettyImages-94464340.jpg?crop=2769,1558,x5460,y542&width=2769&height=1558&format=pjpg&auto=webp"
            }, {
              img : "https://image-us.samsung.com/SamsungUS/home/mobile/phones/all-other-phones/pdp/sm-j727uzkaxaa/gallery/1-unlocked_j727_bk_v_front.jpg"
            }]},
            {heading : "Electronics",
            products : [
                {
                  id: 58,
                  title: 'Silver Necklace',
                  description: 'Silver necklace with dark red accessory',
                  imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                  priceWithVAT: 'EGP90.00 With VAT',
                  originalPrice: 'EGP110.00',
                  discountPercentage: 18,
                },
                {
                  id: 59,
                  title: 'Copper Necklace',
                  description: 'Copper accessory necklace',
                  imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1914-768x767.jpg', // Replace with your image path
                  priceWithVAT: 'EGP100.00 With VAT',
                  originalPrice: 'EGP150.00',
                  discountPercentage: 29,
                },
                {
                    id: 60,
                    title: 'Silver Necklace',
                    description: 'Silver necklace with dark red accessory',
                    imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                    priceWithVAT: 'EGP90.00 With VAT',
                    originalPrice: 'EGP110.00',
                    discountPercentage: 18,
                },
                {
                    id: 61,
                    title: 'Silver Necklace',
                    description: 'Silver necklace with dark red accessory',
                    imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                    priceWithVAT: 'EGP90.00 With VAT',
                    originalPrice: 'EGP110.00',
                    discountPercentage: 18,
                },
                {
                    id: 62,
                    title: 'Silver Necklace',
                    description: 'Silver necklace with dark red accessory',
                    imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                    priceWithVAT: 'EGP90.00 With VAT',
                    originalPrice: 'EGP110.00',
                    discountPercentage: 18,
                },
                {
                    id: 63,
                    title: 'Silver Necklace',
                    description: 'Silver necklace with dark red accessory',
                    imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                    priceWithVAT: 'EGP90.00 With VAT',
                    originalPrice: 'EGP110.00',
                    discountPercentage: 18,
                }
                
              ],
            imagesSlider1 : [{
                img : "https://www.freep.com/gcdn/presto/2018/12/23/PDTF/e419f3e2-1d8a-4870-941b-9989370e7123-GettyImages-94464340.jpg?crop=2769,1558,x5460,y542&width=2769&height=1558&format=pjpg&auto=webp"
              }, {
                img : "https://www.iottechnews.com/wp-content/uploads/sites/5/2022/05/meta-quest-3-headset-2-vr-virtual-reality-oculus-metaverse-roadmap.png"
              }],
            imagesSlider2 : [{
                img : "https://www.freep.com/gcdn/presto/2018/12/23/PDTF/e419f3e2-1d8a-4870-941b-9989370e7123-GettyImages-94464340.jpg?crop=2769,1558,x5460,y542&width=2769&height=1558&format=pjpg&auto=webp"
              }, {
                img : "https://image-us.samsung.com/SamsungUS/home/mobile/phones/all-other-phones/pdp/sm-j727uzkaxaa/gallery/1-unlocked_j727_bk_v_front.jpg"
              }]}

    ]
    return(
        <> 
          {allProducts.map((item) => {
            return(
                <>
                <SingleProduct heading={item.heading} productsList={item.products} imagesSlider1={item.imagesSlider1} imagesSlider2={item.imagesSlider2}></SingleProduct>
                </>
            )   
          })}
        </>
    )
}

export default Products;