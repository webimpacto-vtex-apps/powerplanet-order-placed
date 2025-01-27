export const orderGroupQuery = {
  orderGroup: {
    orders: [
      {
        allowCancellation: true,
        orderId: '905691102273-01',
        deliveryParcels: [
          {
            address: {
              addressId: '-1485283558739',
              addressType: 'giftRegistry',
              receiverName: null,
              state: null,
              street: null,
              number: null,
              city: null,
              postalCode: null,
              neighborhood: null,
              complement: null,
              country: 'BRA',
            },
            price: 500,
            pickupFriendlyName: null,
            seller: '1',
            items: [
              {
                id: '282',
                skuName: 'Tipo 1',
                name: 'Delivery 1 SLA | 1 Tipo 1',
                price: 1200,
                listPrice: 1200,
                isGift: false,
                quantity: 1,
                attachments: [],
                bundleItems: [],
                seller: '1',
                imageUrl:
                  'http://vtexgame1.vteximg.com.br/arquivos/ids/155641-55-55/bola.jpg?v=636626686154400000',
                detailUrl: '/teste-so-delivery/p',
                measurementUnit: 'un',
                unitMultiplier: 1,
              },
            ],
            selectedSla: 'PAC',
            selectedSlaObj: {
              id: 'PAC',
              name: 'PAC',
              shippingEstimate: '8bd',
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
            shippingEstimate: '8bd',
            shippingEstimateDate: '2019-02-05T17:19:04.414323Z',
            deliveryWindow: null,
            deliveryChannel: 'delivery',
            selectedSlaType: 'delivery',
          },
        ],
        pickUpParcels: [],
        takeAwayParcels: [],
        items: [
          {
            id: '282',
            skuName: 'Tipo 1',
            name: 'Delivery 1 SLA | 1 Tipo 1',
            price: 1200,
            listPrice: 1200,
            isGift: false,
            quantity: 1,
            attachments: [],
            bundleItems: [],
            seller: '1',
            imageUrl:
              'http://vtexgame1.vteximg.com.br/arquivos/ids/155641-55-55/bola.jpg?v=636626686154400000',
            detailUrl: '/teste-so-delivery/p',
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
            value: 1200,
          },
          {
            id: 'Discounts',
            name: 'Total dos Descontos',
            value: 0,
          },
          {
            id: 'Shipping',
            name: 'Total do Frete',
            value: 500,
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
              transactionId: 'E4128A83A67F4594B82563BA03BED66D',
              payments: [
                {
                  id: 'B38F80BD3B6E40C7BAD896BBFE13358C',
                  paymentSystem: '4',
                  paymentSystemName: 'Mastercard',
                  value: 1700,
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
        creationDate: '2019-01-24T17:17:53.0598206Z',
        giftRegistryData: {
          addressId: '-1485283558739',
          attachmentId: 'giftRegistryData',
          description: 'Lista Lucas QA',
          giftRegistryId: '10',
          giftRegistryType: '4',
          giftRegistryTypeName: 'Lista Gera vale',
        },
        value: 1700,
      },
    ],
    totalPickUpParcels: [],
    totalDeliveryParcels: [
      {
        address: {
          addressId: '-1485283558739',
          addressType: 'giftRegistry',
          receiverName: null,
          state: null,
          street: null,
          number: null,
          city: null,
          postalCode: null,
          neighborhood: null,
          complement: null,
          country: 'BRA',
        },
        price: 500,
        pickupFriendlyName: null,
        seller: '1',
        items: [
          {
            id: '282',
            skuName: 'Tipo 1',
            name: 'Delivery 1 SLA | 1 Tipo 1',
            price: 1200,
            listPrice: 1200,
            isGift: false,
            quantity: 1,
            attachments: [],
            bundleItems: [],
            seller: '1',
            imageUrl:
              'http://vtexgame1.vteximg.com.br/arquivos/ids/155641-55-55/bola.jpg?v=636626686154400000',
            detailUrl: '/teste-so-delivery/p',
            measurementUnit: 'un',
            unitMultiplier: 1,
          },
        ],
        selectedSla: 'PAC',
        selectedSlaObj: {
          id: 'PAC',
          name: 'PAC',
          shippingEstimate: '8bd',
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
        shippingEstimate: '8bd',
        shippingEstimateDate: '2019-02-05T17:19:04.414323Z',
        deliveryWindow: null,
        deliveryChannel: 'delivery',
        selectedSlaType: 'delivery',
      },
    ],
    totalTakeAwayParcels: [],
  },
}
