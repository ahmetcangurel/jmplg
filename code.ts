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
      const nodes: SceneNode[] = [];

      const dummy = [
        {
          title: "Ana Giriş Ekranı",
          color: { r: 0.6, g: 0.8, b: 1 }, // Pastel mavi
          content: [
            {
              text: "Uluslararası Nakliye",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Ulusal Nakliye",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Depo Hizmetleri",
              shapeType: "SQUARE",
              type: "SOLID",
            },
          ],
        },
        {
          title: "Uluslararası Nakliye",
          color: { r: 1, g: 0.4, b: 0.4 }, // Pastel kırmızı
          content: [
            {
              text: "Parsiyel (LTL)",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Komple (FTL)",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Küçük Paket",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Mikro İhracat",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Express Teslimat",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Çift Şoför Taşımacılığı",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Askılı Tekstil Taşımacılığı",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Ağır Yük Taşımacılığı",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Gabari Fazla Yük Taşımacılığı",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Proje Taşımacılığı",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Fuar Taşımacılığı",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Otomobil Taşımacılığı",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "İlaç Taşımacılığı",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Kimyasal ve Tehlikeli Madde Taşımacılığı",
              shapeType: "SQUARE",
              type: "SOLID",
            },
          ],
        },
        {
          title: "Ulusal Nakliye",
          color: { r: 0.4, g: 0.8, b: 0.4 }, // Pastel yeşil
          content: [
            {
              text: "Parsiyel (LTL)",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Komple (FTL)",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Küçük Paket",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Express Teslimat",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Ağır Yük Taşımacılığı",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Gabari Fazla Yük Taşımacılığı",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Fuar Taşımacılığı",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Otomobil Taşımacılığı",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "İlaç Taşımacılığı",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Kimyasal ve Tehlikeli Madde Taşımacılığı",
              shapeType: "SQUARE",
              type: "SOLID",
            },
          ],
        },
        {
          title: "Depo Hizmetleri",
          color: { r: 1, g: 0.7, b: 0.4 }, // Pastel turuncu
          content: [
            {
              text: "Depo Alanı Kiralama",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Depo Yönetim Hizmetleri",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Soğuk Depo Hizmetleri",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Dağıtım Merkezi Hizmetleri",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Geçici Depolama Hizmetleri",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Konsolidasyon ve Dağıtım Hizmetleri",
              shapeType: "SQUARE",
              type: "SOLID",
            },
          ],
        },
        {
          title: "Kullanıcı Seçim Ekranı",
          color: { r: 0.4, g: 0.6, b: 0.8 }, // Pastel mavi tonu
          content: [
            {
              text: "Kategoriye Göre Bilgi ve Belgeler",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Yük Detaylarını Gir",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Teklif Al",
              shapeType: "SQUARE",
              type: "SOLID",
            },
          ],
        },
        {
          title: "Operatör Paneli",
          color: { r: 0.6, g: 0.4, b: 0.8 }, // Pastel mor
          content: [
            {
              text: "Yeni Talepler",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Tekliflere Yanıt Ver",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Sevkiyatları Yönet",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Raporları Görüntüle",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Prim Puanlama",
              shapeType: "SQUARE",
              type: "SOLID",
            },
          ],
        },
        {
          title: "Yük Takibi",
          color: { r: 1, g: 0.6, b: 0.6 }, // Pastel pembe
          content: [
            {
              text: "Mevcut Konum",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Tahmini Teslimat Süresi",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Sevkiyat Geçmişi",
              shapeType: "SQUARE",
              type: "SOLID",
            },
          ],
        },
        {
          title: "Kullanıcı Profili",
          color: { r: 0.8, g: 0.8, b: 0.4 }, // Pastel sarı
          content: [
            {
              text: "Profil Bilgileri",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Belge Yönetimi",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Ödeme Bilgileri",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Değerlendirmeler",
              shapeType: "SQUARE",
              type: "SOLID",
            },
          ],
        },
        {
          title: "Reklam Yönetim Paneli",
          color: { r: 0.8, g: 0.4, b: 0.8 }, // Pastel mor tonu
          content: [
            {
              text: "Reklam Kampanyaları",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "İstatistikler ve Analizler",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Özel Teklifler",
              shapeType: "SQUARE",
              type: "SOLID",
            },
          ],
        },
      ];

      const dummyNew: any = [
        {
          title: "Ana Giriş Ekranı",
          color: { r: 0.6, g: 0.8, b: 1 }, // Pastel mavi
          content: [
            {
              text: "Uluslararası Nakliye",
              shapeType: "SQUARE",
              type: "SOLID",
              content: [
                {
                  text: "Parsiyel (LTL)",
                  shapeType: "SQUARE",
                  type: "SOLID",
                },
                {
                  text: "Komple (FTL)",
                  shapeType: "SQUARE",
                  type: "SOLID",
                },
                {
                  text: "Küçük Paket",
                  shapeType: "SQUARE",
                  type: "SOLID",
                },
                {
                  text: "Mikro İhracat",
                  shapeType: "SQUARE",
                  type: "SOLID",
                },
                {
                  text: "Express Teslimat",
                  shapeType: "SQUARE",
                  type: "SOLID",
                },
                {
                  text: "Çift Şoför Taşımacılığı",
                  shapeType: "SQUARE",
                  type: "SOLID",
                },
                {
                  text: "Askılı Tekstil Taşımacılığı",
                  shapeType: "SQUARE",
                  type: "SOLID",
                },
                {
                  text: "Ağır Yük Taşımacılığı",
                  shapeType: "SQUARE",
                  type: "SOLID",
                },
                {
                  text: "Gabari Fazla Yük Taşımacılığı",
                  shapeType: "SQUARE",
                  type: "SOLID",
                },
                {
                  text: "Proje Taşımacılığı",
                  shapeType: "SQUARE",
                  type: "SOLID",
                },
                {
                  text: "Fuar Taşımacılığı",
                  shapeType: "SQUARE",
                  type: "SOLID",
                },
                {
                  text: "Otomobil Taşımacılığı",
                  shapeType: "SQUARE",
                  type: "SOLID",
                },
                {
                  text: "İlaç Taşımacılığı",
                  shapeType: "SQUARE",
                  type: "SOLID",
                },
                {
                  text: "Kimyasal ve Tehlikeli Madde Taşımacılığı",
                  shapeType: "SQUARE",
                  type: "SOLID",
                },
              ],
            },
            {
              text: "Ulusal Nakliye",
              shapeType: "SQUARE",
              type: "SOLID",
              content: [
                {
                  text: "Parsiyel (LTL)",
                  shapeType: "SQUARE",
                  type: "SOLID",
                },
                {
                  text: "Komple (FTL)",
                  shapeType: "SQUARE",
                  type: "SOLID",
                },
                {
                  text: "Küçük Paket",
                  shapeType: "SQUARE",
                  type: "SOLID",
                },
                {
                  text: "Express Teslimat",
                  shapeType: "SQUARE",
                  type: "SOLID",
                },
                {
                  text: "Ağır Yük Taşımacılığı",
                  shapeType: "SQUARE",
                  type: "SOLID",
                },
                {
                  text: "Gabari Fazla Yük Taşımacılığı",
                  shapeType: "SQUARE",
                  type: "SOLID",
                },
                {
                  text: "Fuar Taşımacılığı",
                  shapeType: "SQUARE",
                  type: "SOLID",
                },
                {
                  text: "Otomobil Taşımacılığı",
                  shapeType: "SQUARE",
                  type: "SOLID",
                },
                {
                  text: "İlaç Taşımacılığı",
                  shapeType: "SQUARE",
                  type: "SOLID",
                },
                {
                  text: "Kimyasal ve Tehlikeli Madde Taşımacılığı",
                  shapeType: "SQUARE",
                  type: "SOLID",
                },
              ],
            },
            {
              text: "Depo Hizmetleri",
              shapeType: "SQUARE",
              type: "SOLID",
              content: [
                {
                  text: "Depo Alanı Kiralama",
                  shapeType: "SQUARE",
                  type: "SOLID",
                },
                {
                  text: "Depo Yönetim Hizmetleri",
                  shapeType: "SQUARE",
                  type: "SOLID",
                },
                {
                  text: "Soğuk Depo Hizmetleri",
                  shapeType: "SQUARE",
                  type: "SOLID",
                },
                {
                  text: "Dağıtım Merkezi Hizmetleri",
                  shapeType: "SQUARE",
                  type: "SOLID",
                },
                {
                  text: "Geçici Depolama Hizmetleri",
                  shapeType: "SQUARE",
                  type: "SOLID",
                },
                {
                  text: "Konsolidasyon ve Dağıtım Hizmetleri",
                  shapeType: "SQUARE",
                  type: "SOLID",
                },
              ],
            },
          ],
        },
        {
          title: "Kullanıcı Seçim Ekranı",
          color: { r: 0.4, g: 0.6, b: 0.8 }, // Pastel mavi tonu
          content: [
            {
              text: "Kategoriye Göre Bilgi ve Belgeler",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Yük Detaylarını Gir",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Teklif Al",
              shapeType: "SQUARE",
              type: "SOLID",
            },
          ],
        },
        {
          title: "Operatör Paneli",
          color: { r: 0.6, g: 0.4, b: 0.8 }, // Pastel mor
          content: [
            {
              text: "Yeni Talepler",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Tekliflere Yanıt Ver",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Sevkiyatları Yönet",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Raporları Görüntüle",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Prim Puanlama",
              shapeType: "SQUARE",
              type: "SOLID",
            },
          ],
        },
        {
          title: "Yük Takibi",
          color: { r: 1, g: 0.6, b: 0.6 }, // Pastel pembe
          content: [
            {
              text: "Mevcut Konum",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Tahmini Teslimat Süresi",
              shapeType: "SQUARE",
              type: "SOLID",
            },
            {
              text: "Sevkiyat Geçmişi",
              shapeType: "SQUARE",
              type: "SOLID",
            },
          ],
        },
      ];

      // Load the font before creating shapes
      await figma.loadFontAsync({ family: "Inter", style: "Medium" });
      await figma.loadFontAsync({ family: "Merriweather", style: "Regular" });

      let yOffset = 0;

      for (let section of dummyNew) {
        // Başlık ShapeWithText olarak oluşturulur
        const titleShape = figma.createShapeWithText();
        titleShape.shapeType = "SQUARE"; // Shape type ayarlanabilir
        titleShape.x = (section.content.length * 130) / 2;
        titleShape.y = yOffset;
        titleShape.fills = [{ type: "SOLID", color: section.color }];
        titleShape.text.characters = section.title;
        figma.currentPage.appendChild(titleShape);
        nodes.push(titleShape);

        yOffset += titleShape.height + 50; // Başlık ile içerik arasında boşluk bırakmak için

        // İçerikler oluşturulur ve başlığa bağlı olarak yerleştirilir
        let contentXOffset = 0;
        const sectionNodes: SceneNode[] = []; // Bölümdeki tüm şekilleri tutacak bir dizi
        let maxYOffset = 0; // Maksimum yOffset'i izlemek için

        for (let i = 0; i < section.content.length; i++) {
          const shape = figma.createShapeWithText();
          shape.shapeType = section.content[i].shapeType;
          shape.x = contentXOffset;
          shape.y = yOffset;
          shape.fills = [
            { type: section.content[i].type, color: section.color },
          ];
          shape.text.characters = section.content[i].text;
          figma.currentPage.appendChild(shape);
          nodes.push(shape);
          sectionNodes.push(shape); // Şekli bölüm düğüm dizisine ekleyin

          // İçerik altındaki içerikleri oluşturun ve bağlı olarak yerleştirin
          if (section.content[i].content) {
            const subContentCount = section.content[i].content.length;
            const subContentWidth = subContentCount * 130;

            // Alt içeriğin ortalanması için yeni xOffset hesaplayın
            const subContentXOffset =
              contentXOffset + (shape.width - subContentWidth) / 2; // Şeklin genişliği ve alt içeriğin genişliği dikkate alınarak

            const subContentYOffset = yOffset + shape.height + 50; // Alt içerikler için Y offseti

            for (let j = 0; j < section.content[i].content.length; j++) {
              const subShape = figma.createShapeWithText();
              subShape.shapeType = section.content[i].content[j].shapeType;

              // Yatay konumlandırmayı ve diğer özellikleri ayarlayın
              subShape.x = subContentXOffset + j * 130; // Sabit bir mesafe ekleyin
              subShape.y = subContentYOffset;
              subShape.fills = [
                {
                  type: section.content[i].content[j].type,
                  color: section.color,
                },
              ];
              subShape.text.characters = section.content[i].content[j].text;
              figma.currentPage.appendChild(subShape);
              nodes.push(subShape);

              // Başlık ve alt içerikler arasında bağlantı oluşturun
              const subConnector = figma.createConnector();
              subConnector.strokeWeight = 2;

              subConnector.connectorStart = {
                endpointNodeId: shape.id,
                magnet: "AUTO",
              };

              subConnector.connectorEnd = {
                endpointNodeId: subShape.id,
                magnet: "TOP",
              };

              figma.currentPage.appendChild(subConnector);
              nodes.push(subConnector);
            }

            contentXOffset += shape.width + 150; // İçerikler arasında boşluk bırakmak için
          } else {
            contentXOffset += shape.width + 50; // İçerikler arasında boşluk bırakmak için
          }

          // maxYOffset'i güncelle
          if (yOffset + shape.height > maxYOffset) {
            maxYOffset = yOffset + shape.height;
          }
        }

        // Başlık ve içerikler arasında bağlantı oluşturun
        if (sectionNodes.length > 0) {
          for (let i = 0; i < sectionNodes.length; i++) {
            const connector = figma.createConnector();
            connector.strokeWeight = 2;

            connector.connectorStart = {
              endpointNodeId: titleShape.id,
              magnet: "AUTO",
            };

            connector.connectorEnd = {
              endpointNodeId: sectionNodes[i].id,
              magnet: "TOP",
            };

            figma.currentPage.appendChild(connector);
            nodes.push(connector);
          }
        }

        yOffset = maxYOffset + 300; // Başlıklar arasındaki boşluk için yOffset güncellenir
      }

      figma.currentPage.selection = nodes;
      figma.viewport.scrollAndZoomIntoView(nodes);

      // figma.closePlugin();
    }
  };
}
