//variables
let aboutLink = document.querySelector(".about_link");
let galleryLink = document.querySelector(".gallery_link");
let gallery = document.querySelector(".row");
let about = document.querySelector(".about");

//link click functions
aboutLink.addEventListener('click', () => {
  gallery.style.display = "none";
  about.style.display = "block";
});

galleryLink.addEventListener('click', () => {
  gallery.style.display = "flex";
  about.style.display = "none";
});

//image functionality

let images = document.querySelectorAll(".side_bar .gallery_shot");
let sideBar = document.querySelector(".side_bar");
let modal = document.querySelector(".modal");
let original = document.querySelector(".full-img");
let preview = document.querySelector(".gallery_shot")

images.forEach(img => {
  img.addEventListener('click', () => {
    modal.classList.add('open');
    original.classList.add('open');
    const originalSrc = img.getAttribute("src");
    original.src = `${originalSrc}`;
  })
});

modal.addEventListener('click', (e) => {
  if(e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    original.classList.remove("open");
  }
});

//shopify

/*<![CDATA[*/
    (function () {
        var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
        if (window.ShopifyBuy) {
          if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
          } else {
            loadScript();
          }
        } else {
          loadScript();
        }
        function loadScript() {
          var script = document.createElement('script');
          script.async = true;
          script.src = scriptURL;
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
          script.onload = ShopifyBuyInit;
        }
        function ShopifyBuyInit() {
          var client = ShopifyBuy.buildClient({
            domain: 'pnd-clothing-brand.myshopify.com',
            storefrontAccessToken: '06c5f441da95d67bed7f8bab186a2969',
          });
          ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('collection', {
              id: '262526566552',
              node: document.getElementById('collection-component-1616090258621'),
              moneyFormat: '%24%7B%7Bamount%7D%7D',
              options: {
        "product": {
          "styles": {
            "product": {
              "@media (min-width: 601px)": {
                "max-width": "calc(25% - 20px)",
                "margin-left": "20px",
                "margin-bottom": "50px",
                "width": "calc(25% - 20px)"
              },
              "text-align": "left",
              "img": {
                "height": "calc(100% - 15px)",
                "position": "absolute",
                "left": "0",
                "right": "0",
                "top": "0"
              },
              "imgWrapper": {
                "padding-top": "calc(75% + 15px)",
                "position": "relative",
                "height": "0"
              }
            },
            "title": {
              "color": "#000000"
            },
            "button": {
              "font-family": "Crimson Text, serif",
              "font-size": "13px",
              "padding-top": "14.5px",
              "padding-bottom": "14.5px",
              ":hover": {
                "background-color": "#000000"
              },
              "background-color": "#000000",
              ":focus": {
                "background-color": "#000000"
              },
              "border-radius": "0px"
            },
            "quantityInput": {
              "font-size": "13px",
              "padding-top": "14.5px",
              "padding-bottom": "14.5px"
            }
          },
          "text": {
            "button": "Add to cart"
          },
          "googleFonts": [
            "Crimson Text"
          ]
        },
        "productSet": {
          "styles": {
            "products": {
              "@media (min-width: 601px)": {
                "margin-left": "-20px"
              }
            }
          }
        },
        "modalProduct": {
          "contents": {
            "img": false,
            "imgWithCarousel": true,
            "button": false,
            "buttonWithQuantity": true
          },
          "styles": {
            "product": {
              "@media (min-width: 601px)": {
                "max-width": "100%",
                "margin-left": "0px",
                "margin-bottom": "0px"
              }
            },
            "button": {
              "font-family": "Crimson Text, serif",
              "font-size": "13px",
              "padding-top": "14.5px",
              "padding-bottom": "14.5px",
              ":hover": {
                "background-color": "#000000"
              },
              "background-color": "#000000",
              ":focus": {
                "background-color": "#000000"
              },
              "border-radius": "0px"
            },
            "quantityInput": {
              "font-size": "13px",
              "padding-top": "14.5px",
              "padding-bottom": "14.5px"
            },
            "title": {
              "font-family": "Helvetica Neue, sans-serif",
              "font-weight": "bold",
              "font-size": "26px",
              "color": "#4c4c4c"
            }
          },
          "googleFonts": [
            "Crimson Text"
          ],
          "text": {
            "button": "Add to cart"
          }
        },
        "option": {
          "styles": {
            "label": {
              "font-family": "Open Sans, sans-serif"
            },
            "select": {
              "font-family": "Open Sans, sans-serif"
            }
          },
          "googleFonts": [
            "Open Sans"
          ]
        },
        "cart": {
          "styles": {
            "button": {
              "font-family": "Crimson Text, serif",
              "font-size": "13px",
              "padding-top": "14.5px",
              "padding-bottom": "14.5px",
              ":hover": {
                "background-color": "#000000"
              },
              "background-color": "#000000",
              ":focus": {
                "background-color": "#000000"
              },
              "border-radius": "0px"
            },
            "title": {
              "color": "#000000"
            },
            "header": {
              "color": "#000000"
            },
            "lineItems": {
              "color": "#000000"
            },
            "subtotalText": {
              "color": "#000000"
            },
            "subtotal": {
              "color": "#000000"
            },
            "notice": {
              "color": "#000000"
            },
            "currency": {
              "color": "#000000"
            },
            "close": {
              "color": "#000000",
              ":hover": {
                "color": "#000000"
              }
            },
            "empty": {
              "color": "#000000"
            },
            "noteDescription": {
              "color": "#000000"
            },
            "discountText": {
              "color": "#000000"
            },
            "discountIcon": {
              "fill": "#000000"
            },
            "discountAmount": {
              "color": "#000000"
            }
          },
          "text": {
            "total": "Subtotal",
            "button": "Checkout"
          },
          "popup": false,
          "googleFonts": [
            "Crimson Text"
          ]
        },
        "toggle": {
          "styles": {
            "toggle": {
              "font-family": "Crimson Text, serif",
              "background-color": "#000000",
              ":hover": {
                "background-color": "#000000"
              },
              ":focus": {
                "background-color": "#000000"
              }
            },
            "count": {
              "font-size": "13px"
            }
          },
          "googleFonts": [
            "Crimson Text"
          ]
        },
        "lineItem": {
          "styles": {
            "variantTitle": {
              "color": "#000000"
            },
            "title": {
              "color": "#000000"
            },
            "price": {
              "color": "#000000"
            },
            "fullPrice": {
              "color": "#000000"
            },
            "discount": {
              "color": "#000000"
            },
            "discountIcon": {
              "fill": "#000000"
            },
            "quantity": {
              "color": "#000000"
            },
            "quantityIncrement": {
              "color": "#000000",
              "border-color": "#000000"
            },
            "quantityDecrement": {
              "color": "#000000",
              "border-color": "#000000"
            },
            "quantityInput": {
              "color": "#000000",
              "border-color": "#000000"
            }
          }
        }
      },
            });
          });
        }
      })();
      /*]]>*/