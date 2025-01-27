export const orderGroupQuery = {
  orderGroup: {
    orders: [
      {
        allowCancellation: true,
        orderId: '905710145606-01',
        deliveryParcels: [
          {
            address: {
              addressType: 'residential',
              receiverName: 'Victor Hugo',
              state: 'RJ',
              street: 'Praia de Botafogo',
              number: '300',
              city: 'Rio de Janeiro',
              postalCode: '22250-040',
              neighborhood: 'Botafogo',
              complement: null,
              country: 'BRA',
            },
            price: 1000,
            pickupFriendlyName: null,
            seller: '1',
            items: [
              {
                id: '299',
                skuName: 'Tipo 1',
                name:
                  'Delivery entrega agendada e Delivery com várias SLAs Tipo 1',
                price: 19000,
                listPrice: 20000,
                isGift: false,
                quantity: 1,
                attachments: [],
                bundleItems: [],
                seller: '1',
                imageUrl:
                  'http://vtexgame1.vteximg.com.br/arquivos/ids/155648-55-55/shopping.jpg?v=636626886332270000',
                detailUrl:
                  '/teste-so-delivery-copy-256--copy-257--copy-261--copy-262--copy-263--copy-264--copy-265--copy-266--copy-267--copy-268--copy-269--copy-270--copy-271--copy-272-/p',
                measurementUnit: 'un',
                unitMultiplier: 1,
              },
              {
                id: '31',
                skuName: 'Camisa Seleção Brasileira',
                name: 'Camisa Seleção Brasileira',
                price: 3999,
                listPrice: 3999,
                isGift: false,
                quantity: 1,
                attachments: [],
                bundleItems: [],
                seller: '1',
                imageUrl:
                  'http://vtexgame1.vteximg.com.br/arquivos/ids/155369-55-55/Azul-Talla-S_0.jpg?v=635833511570300000',
                detailUrl: '/polera-de-futbol-nike-manga-corta-20/p',
                measurementUnit: 'un',
                unitMultiplier: 1,
              },
            ],
            selectedSla: 'PAC',
            selectedSlaObj: {
              id: 'PAC',
              name: 'PAC',
              shippingEstimate: '10bd',
              deliveryWindow: null,
              price: 500,
              deliveryChannel: 'delivery',
              pickupStoreInfo: {
                additionalInfo: null,
                address: null,
                friendlyName: null,
                isPickupStore: false,
              },
            },
            shippingEstimate: '10bd',
            shippingEstimateDate: '2019-02-07T19:03:07.0480512Z',
            deliveryWindow: null,
            deliveryChannel: 'delivery',
            selectedSlaType: 'delivery',
          },
          {
            address: {
              addressType: 'residential',
              receiverName: 'Victor Hugo',
              state: 'RJ',
              street: 'Praia de Botafogo',
              number: '300',
              city: 'Rio de Janeiro',
              postalCode: '22250-040',
              neighborhood: 'Botafogo',
              complement: null,
              country: 'BRA',
            },
            price: 1000,
            pickupFriendlyName: null,
            seller: '1',
            items: [
              {
                id: '35',
                skuName: 'Camisa America Vermelha',
                name: 'Camisa America Vermelha',
                price: 1125,
                listPrice: 1150,
                isGift: false,
                quantity: 1,
                attachments: [],
                bundleItems: [],
                seller: '1',
                imageUrl:
                  'http://vtexgame1.vteximg.com.br/arquivos/ids/155634-55-55/camisaamericavermelha.jpg?v=636517255685600000',
                detailUrl: '/camisaamericavermelha/p',
                measurementUnit: 'un',
                unitMultiplier: 1,
              },
            ],
            selectedSla: 'Expressa',
            selectedSlaObj: {
              id: 'Expressa',
              name: 'Expressa',
              shippingEstimate: '2bd',
              deliveryWindow: null,
              price: 1000,
              deliveryChannel: 'delivery',
              pickupStoreInfo: {
                additionalInfo: null,
                address: null,
                friendlyName: null,
                isPickupStore: false,
              },
            },
            shippingEstimate: '2bd',
            shippingEstimateDate: '2019-01-28T19:03:07.0480512Z',
            deliveryWindow: null,
            deliveryChannel: 'delivery',
            selectedSlaType: 'delivery',
          },
        ],
        pickUpParcels: [],
        takeAwayParcels: [],
        items: [
          {
            id: '299',
            skuName: 'Tipo 1',
            name: 'Delivery entrega agendada e Delivery com várias SLAs Tipo 1',
            price: 19000,
            listPrice: 20000,
            isGift: false,
            quantity: 1,
            attachments: [],
            bundleItems: [],
            seller: '1',
            imageUrl:
              'http://vtexgame1.vteximg.com.br/arquivos/ids/155648-55-55/shopping.jpg?v=636626886332270000',
            detailUrl:
              '/teste-so-delivery-copy-256--copy-257--copy-261--copy-262--copy-263--copy-264--copy-265--copy-266--copy-267--copy-268--copy-269--copy-270--copy-271--copy-272-/p',
            measurementUnit: 'un',
            unitMultiplier: 1,
          },
          {
            id: '31',
            skuName: 'Camisa Seleção Brasileira',
            name: 'Camisa Seleção Brasileira',
            price: 3999,
            listPrice: 3999,
            isGift: false,
            quantity: 1,
            attachments: [],
            bundleItems: [],
            seller: '1',
            imageUrl:
              'http://vtexgame1.vteximg.com.br/arquivos/ids/155369-55-55/Azul-Talla-S_0.jpg?v=635833511570300000',
            detailUrl: '/polera-de-futbol-nike-manga-corta-20/p',
            measurementUnit: 'un',
            unitMultiplier: 1,
          },
          {
            id: '35',
            skuName: 'Camisa America Vermelha',
            name: 'Camisa America Vermelha',
            price: 1125,
            listPrice: 1150,
            isGift: false,
            quantity: 1,
            attachments: [],
            bundleItems: [],
            seller: '1',
            imageUrl:
              'http://vtexgame1.vteximg.com.br/arquivos/ids/155634-55-55/camisaamericavermelha.jpg?v=636517255685600000',
            detailUrl: '/camisaamericavermelha/p',
            measurementUnit: 'un',
            unitMultiplier: 1,
          },
        ],
        sellers: [
          {
            id: '1',
            name: 'vtexgame1',
          },
        ],
        totals: [
          {
            id: 'Items',
            name: 'Total dos Itens',
            value: 24124,
          },
          {
            id: 'Discounts',
            name: 'Total dos Descontos',
            value: 0,
          },
          {
            id: 'Shipping',
            name: 'Total do Frete',
            value: 2000,
          },
          {
            id: 'Tax',
            name: 'Total da Taxa',
            value: 0,
          },
        ],
        clientProfileData: {
          email: 'victorhmp@mailinator.com',
          firstName: 'Victor',
          lastName: 'Hugo',
          document: '18430995005',
          documentType: 'cpf',
          phone: '+551112340909',
        },
        paymentData: {
          transactions: [
            {
              transactionId: 'C6EA073CE69B44D28818DD11351EA3A7',
              payments: [
                {
                  id: 'BD7B6B0678BA4E00B6EB7909E8C0CBD0',
                  paymentSystem: '4',
                  paymentSystemName: 'Mastercard',
                  value: 26124,
                  installments: 1,
                  lastDigits: '1234',
                  group: 'creditCard',
                  dueDate: null,
                  url: null,
                  bankIssuedInvoiceBarCodePNG: null,
                  bankIssuedInvoiceBarCodeNumber: null,
                  bankIssuedInvoiceIdentificationNumberFormatted: null,
                  connectorResponses: null,
                },
              ],
            },
          ],
        },
        storePreferencesData: {
          countryCode: 'BRA',
          currencyCode: 'BRL',
        },
        creationDate: '2019-01-24T19:01:55.9396333Z',
        value: 26124,
      },
    ],
    totalPickUpParcels: [],
    totalDeliveryParcels: [
      {
        address: {
          addressType: 'residential',
          receiverName: 'Victor Hugo',
          state: 'RJ',
          street: 'Praia de Botafogo',
          number: '300',
          city: 'Rio de Janeiro',
          postalCode: '22250-040',
          neighborhood: 'Botafogo',
          complement: null,
          country: 'BRA',
        },
        price: 1000,
        pickupFriendlyName: null,
        seller: '1',
        items: [
          {
            id: '299',
            skuName: 'Tipo 1',
            name: 'Delivery entrega agendada e Delivery com várias SLAs Tipo 1',
            price: 19000,
            listPrice: 20000,
            isGift: false,
            quantity: 1,
            attachments: [],
            bundleItems: [],
            seller: '1',
            imageUrl:
              'http://vtexgame1.vteximg.com.br/arquivos/ids/155648-55-55/shopping.jpg?v=636626886332270000',
            detailUrl:
              '/teste-so-delivery-copy-256--copy-257--copy-261--copy-262--copy-263--copy-264--copy-265--copy-266--copy-267--copy-268--copy-269--copy-270--copy-271--copy-272-/p',
            measurementUnit: 'un',
            unitMultiplier: 1,
          },
          {
            id: '31',
            skuName: 'Camisa Seleção Brasileira',
            name: 'Camisa Seleção Brasileira',
            price: 3999,
            listPrice: 3999,
            isGift: false,
            quantity: 1,
            attachments: [],
            bundleItems: [],
            seller: '1',
            imageUrl:
              'http://vtexgame1.vteximg.com.br/arquivos/ids/155369-55-55/Azul-Talla-S_0.jpg?v=635833511570300000',
            detailUrl: '/polera-de-futbol-nike-manga-corta-20/p',
            measurementUnit: 'un',
            unitMultiplier: 1,
          },
        ],
        selectedSla: 'PAC',
        selectedSlaObj: {
          id: 'PAC',
          name: 'PAC',
          shippingEstimate: '10bd',
          deliveryWindow: null,
          price: 500,
          deliveryChannel: 'delivery',
          pickupStoreInfo: {
            additionalInfo: null,
            address: null,
            friendlyName: null,
            isPickupStore: false,
          },
        },
        shippingEstimate: '10bd',
        shippingEstimateDate: '2019-02-07T19:03:07.0480512Z',
        deliveryWindow: null,
        deliveryChannel: 'delivery',
        selectedSlaType: 'delivery',
      },
      {
        address: {
          addressType: 'residential',
          receiverName: 'Victor Hugo',
          state: 'RJ',
          street: 'Praia de Botafogo',
          number: '300',
          city: 'Rio de Janeiro',
          postalCode: '22250-040',
          neighborhood: 'Botafogo',
          complement: null,
          country: 'BRA',
        },
        price: 1000,
        pickupFriendlyName: null,
        seller: '1',
        items: [
          {
            id: '35',
            skuName: 'Camisa America Vermelha',
            name: 'Camisa America Vermelha',
            price: 1125,
            listPrice: 1150,
            isGift: false,
            quantity: 1,
            attachments: [],
            bundleItems: [],
            seller: '1',
            imageUrl:
              'http://vtexgame1.vteximg.com.br/arquivos/ids/155634-55-55/camisaamericavermelha.jpg?v=636517255685600000',
            detailUrl: '/camisaamericavermelha/p',
            measurementUnit: 'un',
            unitMultiplier: 1,
          },
        ],
        selectedSla: 'Expressa',
        selectedSlaObj: {
          id: 'Expressa',
          name: 'Expressa',
          shippingEstimate: '2bd',
          deliveryWindow: null,
          price: 1000,
          deliveryChannel: 'delivery',
          pickupStoreInfo: {
            additionalInfo: null,
            address: null,
            friendlyName: null,
            isPickupStore: false,
          },
        },
        shippingEstimate: '2bd',
        shippingEstimateDate: '2019-01-28T19:03:07.0480512Z',
        deliveryWindow: null,
        deliveryChannel: 'delivery',
        selectedSlaType: 'delivery',
      },
    ],
    totalTakeAwayParcels: [],
  },
}
