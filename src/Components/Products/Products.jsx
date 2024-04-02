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
              id: 3,
              title: 'Copper Necklace',
              description: 'Copper accessory necklace',
              imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1914-768x767.jpg', // Replace with your image path
              priceWithVAT: 'EGP100.00 With VAT',
              originalPrice: 'EGP150.00',
              discountPercentage: 29,
            },
            {
                id: 2,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 2,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 2,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 2,
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
                id: 1,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
              },
              {
                id: 3,
                title: 'Copper Necklace',
                description: 'Copper accessory necklace',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1914-768x767.jpg', // Replace with your image path
                priceWithVAT: 'EGP100.00 With VAT',
                originalPrice: 'EGP150.00',
                discountPercentage: 29,
              },
              {
                  id: 2,
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
              id: 1,
              title: 'Silver Necklace',
              description: 'Silver necklace with dark red accessory',
              imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
              priceWithVAT: 'EGP90.00 With VAT',
              originalPrice: 'EGP110.00',
              discountPercentage: 18,
            },
            {
              id: 3,
              title: 'Copper Necklace',
              description: 'Copper accessory necklace',
              imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1914-768x767.jpg', // Replace with your image path
              priceWithVAT: 'EGP100.00 With VAT',
              originalPrice: 'EGP150.00',
              discountPercentage: 29,
            },
            {
                id: 2,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 2,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 2,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 2,
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
              id: 1,
              title: 'Silver Necklace',
              description: 'Silver necklace with dark red accessory',
              imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
              priceWithVAT: 'EGP90.00 With VAT',
              originalPrice: 'EGP110.00',
              discountPercentage: 18,
            },
            {
              id: 3,
              title: 'Copper Necklace',
              description: 'Copper accessory necklace',
              imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1914-768x767.jpg', // Replace with your image path
              priceWithVAT: 'EGP100.00 With VAT',
              originalPrice: 'EGP150.00',
              discountPercentage: 29,
            },
            {
                id: 2,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 2,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 2,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 2,
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
              id: 1,
              title: 'Silver Necklace',
              description: 'Silver necklace with dark red accessory',
              imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
              priceWithVAT: 'EGP90.00 With VAT',
              originalPrice: 'EGP110.00',
              discountPercentage: 18,
            },
            {
              id: 3,
              title: 'Copper Necklace',
              description: 'Copper accessory necklace',
              imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1914-768x767.jpg', // Replace with your image path
              priceWithVAT: 'EGP100.00 With VAT',
              originalPrice: 'EGP150.00',
              discountPercentage: 29,
            },
            {
                id: 2,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 2,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 2,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 2,
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
              id: 1,
              title: 'Silver Necklace',
              description: 'Silver necklace with dark red accessory',
              imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
              priceWithVAT: 'EGP90.00 With VAT',
              originalPrice: 'EGP110.00',
              discountPercentage: 18,
            },
            {
              id: 3,
              title: 'Copper Necklace',
              description: 'Copper accessory necklace',
              imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1914-768x767.jpg', // Replace with your image path
              priceWithVAT: 'EGP100.00 With VAT',
              originalPrice: 'EGP150.00',
              discountPercentage: 29,
            },
            {
                id: 2,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 2,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 2,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 2,
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
              id: 1,
              title: 'Silver Necklace',
              description: 'Silver necklace with dark red accessory',
              imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
              priceWithVAT: 'EGP90.00 With VAT',
              originalPrice: 'EGP110.00',
              discountPercentage: 18,
            },
            {
              id: 3,
              title: 'Copper Necklace',
              description: 'Copper accessory necklace',
              imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1914-768x767.jpg', // Replace with your image path
              priceWithVAT: 'EGP100.00 With VAT',
              originalPrice: 'EGP150.00',
              discountPercentage: 29,
            },
            {
                id: 2,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 2,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 2,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 2,
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
              id: 1,
              title: 'Silver Necklace',
              description: 'Silver necklace with dark red accessory',
              imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
              priceWithVAT: 'EGP90.00 With VAT',
              originalPrice: 'EGP110.00',
              discountPercentage: 18,
            },
            {
              id: 3,
              title: 'Copper Necklace',
              description: 'Copper accessory necklace',
              imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1914-768x767.jpg', // Replace with your image path
              priceWithVAT: 'EGP100.00 With VAT',
              originalPrice: 'EGP150.00',
              discountPercentage: 29,
            },
            {
                id: 2,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 2,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 2,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 2,
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
              id: 1,
              title: 'Silver Necklace',
              description: 'Silver necklace with dark red accessory',
              imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
              priceWithVAT: 'EGP90.00 With VAT',
              originalPrice: 'EGP110.00',
              discountPercentage: 18,
            },
            {
              id: 3,
              title: 'Copper Necklace',
              description: 'Copper accessory necklace',
              imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1914-768x767.jpg', // Replace with your image path
              priceWithVAT: 'EGP100.00 With VAT',
              originalPrice: 'EGP150.00',
              discountPercentage: 29,
            },
            {
                id: 2,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 2,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 2,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
            },
            {
                id: 2,
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
                id: 1,
                title: 'Silver Necklace',
                description: 'Silver necklace with dark red accessory',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                priceWithVAT: 'EGP90.00 With VAT',
                originalPrice: 'EGP110.00',
                discountPercentage: 18,
              },
              {
                id: 3,
                title: 'Copper Necklace',
                description: 'Copper accessory necklace',
                imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1914-768x767.jpg', // Replace with your image path
                priceWithVAT: 'EGP100.00 With VAT',
                originalPrice: 'EGP150.00',
                discountPercentage: 29,
              },
              {
                  id: 2,
                  title: 'Silver Necklace',
                  description: 'Silver necklace with dark red accessory',
                  imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                  priceWithVAT: 'EGP90.00 With VAT',
                  originalPrice: 'EGP110.00',
                  discountPercentage: 18,
              },
              {
                  id: 2,
                  title: 'Silver Necklace',
                  description: 'Silver necklace with dark red accessory',
                  imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                  priceWithVAT: 'EGP90.00 With VAT',
                  originalPrice: 'EGP110.00',
                  discountPercentage: 18,
              },
              {
                  id: 2,
                  title: 'Silver Necklace',
                  description: 'Silver necklace with dark red accessory',
                  imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                  priceWithVAT: 'EGP90.00 With VAT',
                  originalPrice: 'EGP110.00',
                  discountPercentage: 18,
              },
              {
                  id: 2,
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
                  id: 1,
                  title: 'Silver Necklace',
                  description: 'Silver necklace with dark red accessory',
                  imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                  priceWithVAT: 'EGP90.00 With VAT',
                  originalPrice: 'EGP110.00',
                  discountPercentage: 18,
                },
                {
                  id: 3,
                  title: 'Copper Necklace',
                  description: 'Copper accessory necklace',
                  imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1914-768x767.jpg', // Replace with your image path
                  priceWithVAT: 'EGP100.00 With VAT',
                  originalPrice: 'EGP150.00',
                  discountPercentage: 29,
                },
                {
                    id: 2,
                    title: 'Silver Necklace',
                    description: 'Silver necklace with dark red accessory',
                    imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                    priceWithVAT: 'EGP90.00 With VAT',
                    originalPrice: 'EGP110.00',
                    discountPercentage: 18,
                },
                {
                    id: 2,
                    title: 'Silver Necklace',
                    description: 'Silver necklace with dark red accessory',
                    imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                    priceWithVAT: 'EGP90.00 With VAT',
                    originalPrice: 'EGP110.00',
                    discountPercentage: 18,
                },
                {
                    id: 2,
                    title: 'Silver Necklace',
                    description: 'Silver necklace with dark red accessory',
                    imageUrl: 'https://souqjoha.com/wp-content/uploads/2019/09/1915-2048x2048.jpg', // Replace with your image path
                    priceWithVAT: 'EGP90.00 With VAT',
                    originalPrice: 'EGP110.00',
                    discountPercentage: 18,
                },
                {
                    id: 2,
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