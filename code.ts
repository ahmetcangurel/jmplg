// This file holds the main code for plugins. Code in this file has access to
// the *figma document* via the figma global object.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (See https://www.figma.com/plugin-docs/how-plugins-run).

// Runs this code if the plugin is run in FigJam
if (figma.editorType === "figjam") {
  // This plugin will open a window to prompt the user to enter a number, and
  // it will then create that many shapes and connectors on the screen.

  // This shows the HTML page in "ui.html".
  figma.showUI(__html__);

  // Calls to "parent.postMessage" from within the HTML page will trigger this
  // callback. The callback will be passed the "pluginMessage" property of the
  // posted message.
  figma.ui.onmessage = async (msg: { type: string; prompt: string }) => {
    // One way of distinguishing between different types of messages sent from
    // your HTML page is to use an object with a "type" property like this.
    if (msg.type === "create-shapes") {
      console.log("Creating shapes", msg.prompt);
      const nodes: SceneNode[] = [];

      const dummy = [
        {
          title: "Auth",
          color: { r: 0.2, g: 0.2, b: 1 }, // Pastel mavi
          content: [
            {
              text: "Login",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Sign Up",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Forgot Password",
              shapeType: "SQUARE",
              type: "SOLID",
            },
          ],
        },
        {
          title: "User",
          color: { r: 1, g: 0.4, b: 0.4 }, // Pastel kırmızı
          content: [
            {
              text: "Profile",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Settings",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Notifications",
              shapeType: "SQUARE",
              type: "SOLID",
            },
          ],
        },
        {
          title: "Ride",
          color: { r: 0.4, g: 0.8, b: 0.4 }, // Pastel yeşil
          content: [
            {
              text: "Request Ride",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Ride History",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Ride Details",
              shapeType: "SQUARE",
              type: "SOLID",
            },
          ],
        },
        {
          title: "Payment",
          color: { r: 1, g: 0.7, b: 0.4 }, // Pastel turuncu
          content: [
            {
              text: "Add Payment Method",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Payment History",
              shapeType: "SQUARE",
              type: "SOLID",
            },
          ],
        },
      ];

      const dummy2 = [
        {
          title: "Auth",
          color: { r: 0.2, g: 0.2, b: 1 }, // Pastel mavi
          content: [
            {
              text: "Login",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Sign Up",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Forgot Password",
              shapeType: "SQUARE",
              type: "SOLID",
            },
          ],
        },
        {
          title: "Home",
          color: { r: 0.8, g: 0.5, b: 0.2 }, // Pastel kahverengi tonu
          content: [
            {
              text: "Featured Products",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Categories",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Search",
              shapeType: "SQUARE",
              type: "SOLID",
            },
          ],
        },
        {
          title: "Product Detail",
          color: { r: 0.4, g: 0.7, b: 0.4 }, // Pastel yeşil
          content: [
            {
              text: "Product Image",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Description",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Add to Cart",
              shapeType: "SQUARE",
              type: "SOLID",
            },
          ],
        },
        {
          title: "Cart",
          color: { r: 1, g: 0.7, b: 0.4 }, // Pastel turuncu
          content: [
            {
              text: "Cart Items",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Update Quantity",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Checkout",
              shapeType: "SQUARE",
              type: "SOLID",
            },
          ],
        },
        {
          title: "Payment",
          color: { r: 0.4, g: 0.6, b: 0.8 }, // Pastel mavi tonu
          content: [
            {
              text: "Payment Methods",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Billing Information",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Place Order",
              shapeType: "SQUARE",
              type: "SOLID",
            },
          ],
        },
        {
          title: "Order Confirmation",
          color: { r: 0.8, g: 0.2, b: 0.5 }, // Pastel pembe tonu
          content: [
            {
              text: "Order Summary",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Delivery Address",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Confirmation Message",
              shapeType: "SQUARE",
              type: "SOLID",
            },
          ],
        },
        {
          title: "Account",
          color: { r: 0.6, g: 0.4, b: 0.8 }, // Pastel mor tonu
          content: [
            {
              text: "Profile Settings",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Order History",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Favorites",
              shapeType: "SQUARE",
              type: "SOLID",
            },
          ],
        },
      ];

      const dummy3 = [
        {
          title: "Auth",
          color: { r: 0.2, g: 0.2, b: 1 }, // Pastel mavi
          content: [
            {
              text: "Login",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Sign Up",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Forgot Password",
              shapeType: "SQUARE",
              type: "SOLID",
            },
          ],
        },
        {
          title: "Home",
          color: { r: 0.8, g: 0.5, b: 0.2 }, // Pastel kahverengi tonu
          content: [
            {
              text: "Featured Products",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Categories",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Search",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Promotions",
              shapeType: "SQUARE",
              type: "SOLID",
            },
          ],
        },
        {
          title: "Product Detail",
          color: { r: 0.4, g: 0.7, b: 0.4 }, // Pastel yeşil
          content: [
            {
              text: "Product Image",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Description",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Add to Cart",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Similar Products",
              shapeType: "SQUARE",
              type: "SOLID",
            },
          ],
        },
        {
          title: "Cart",
          color: { r: 1, g: 0.7, b: 0.4 }, // Pastel turuncu
          content: [
            {
              text: "Cart Items",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Update Quantity",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Apply Discount Code",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Remove Items",
              shapeType: "SQUARE",
              type: "SOLID",
            },
          ],
        },
        {
          title: "Checkout",
          color: { r: 0.4, g: 0.6, b: 0.8 }, // Pastel mavi tonu
          content: [
            {
              text: "Delivery Address",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Payment Methods",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Review Order",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Place Order",
              shapeType: "SQUARE",
              type: "SOLID",
            },
          ],
        },
        {
          title: "Order Confirmation",
          color: { r: 0.8, g: 0.2, b: 0.5 }, // Pastel pembe tonu
          content: [
            {
              text: "Order Summary",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Order Details",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Confirmation Message",
              shapeType: "SQUARE",
              type: "SOLID",
            },
          ],
        },
        {
          title: "Account",
          color: { r: 0.6, g: 0.4, b: 0.8 }, // Pastel mor tonu
          content: [
            {
              text: "Profile Settings",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Order History",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Favorites",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Logout",
              shapeType: "SQUARE",
              type: "SOLID",
            },
          ],
        },
        {
          title: "Support",
          color: { r: 0.5, g: 0.8, b: 0.7 }, // Pastel yeşil tonu
          content: [
            {
              text: "Help Center",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Contact Support",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "FAQ",
              shapeType: "SQUARE",
              type: "SOLID",
            },
          ],
        },
      ];

      // Load the font before creating shapes
      await figma.loadFontAsync({ family: "Inter", style: "Medium" });

      let yOffset = 0;

      for (let section of dummy3) {
        let xOffset = 0;
        const sectionNodes: SceneNode[] = [];

        // Create a title text node
        const title = figma.createText();
        title.characters = section.title;
        title.x = xOffset;
        title.y = yOffset;
        figma.currentPage.appendChild(title);
        nodes.push(title);

        yOffset += 40; // Adjust yOffset to provide space between title and content

        // Create shapes and add them to the page
        for (let i = 0; i < section.content.length; i++) {
          const shape = figma.createShapeWithText();
          //@ts-ignore
          shape.shapeType = section.content[i].shapeType;
          shape.x = xOffset + i * (shape.width + 20);
          shape.y = yOffset;
          shape.fills = [
            //@ts-ignore
            { type: section.content[i].type, color: section.color },
          ];
          shape.text.characters = section.content[i].text;
          figma.currentPage.appendChild(shape);
          nodes.push(shape);
          sectionNodes.push(shape);
        }

        // Create connectors between the shapes
        for (let i = 0; i < sectionNodes.length - 1; i++) {
          const connector = figma.createConnector();
          connector.strokeWeight = 2;

          connector.connectorStart = {
            endpointNodeId: sectionNodes[i].id,
            magnet: "AUTO",
          };

          connector.connectorEnd = {
            endpointNodeId: sectionNodes[i + 1].id,
            magnet: "AUTO",
          };
          figma.currentPage.appendChild(connector);
        }

        yOffset += 300; // Adjust yOffset to move to the next section
      }

      figma.currentPage.selection = nodes;
      figma.viewport.scrollAndZoomIntoView(nodes);
    }

    // Make sure to close the plugin when you're done. Otherwise the plugin will
    // keep running, which shows the cancel button at the bottom of the screen.
    // figma.closePlugin();
  };
}
