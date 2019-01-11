export const orderGroupQuery = {
  'orderGroup': [
    {
      orderId: '881550458708-01',
      orderGroup: '881550458708',
      state: 'payment-pending',
      isCheckedIn: false,
      sellerOrderId: '00-881550458708-01',
      storeId: null,
      checkedInPickupPointId: null,
      value: 6514,
      items: [
        {
          uniqueId: '348094416D944071A538FCBAEF122EFE',
          id: '15',
          productId: '4',
          refId: 'produtohomologação',
          ean: 'produtohomologação',
          name: 'Novalgina',
          skuName: 'Novalgina',
          modalType: null,
          parentItemIndex: null,
          parentAssemblyBinding: null,
          priceValidUntil: '2021-01-09T02:00:00',
          tax: 0,
          priceDefinitions: {
            listPrice: [
              {
                value: 8000,
                quantity: 1,
              },
            ],
            price: [
              {
                value: 5764,
                quantity: 1,
              },
            ],
            sellingPrice: [
              {
                value: 5764,
                quantity: 1,
              },
            ],
          },
          price: 5764,
          listPrice: 8000,
          manualPrice: null,
          sellingPrice: 5764,
          orderRewardStatus: 'invoiced',
          rewardValue: 0,
          isGift: false,
          additionalInfo: {
            brandName: 'Marca Exemplo',
            brandId: '2000000',
            offeringInfo: null,
            offeringType: null,
            offeringTypeId: null,
          },
          preSaleDate: null,
          productCategoryIds: '/4/5/',
          productCategories: {
            4: 'Departamento 2',
            5: 'Categoria 2.3 (Campo Produto)',
          },
          quantity: 1,
          seller: '1',
          sellerChain: [
            '1',
          ],
          imageUrl: 'http://qamarketplace.vteximg.com.br/arquivos/ids/155400-55-55/Novalgina.jpg?v=635985172600570000',
          detailUrl: '/novalgina/p',
          components: [ ],
          bundleItems: [ ],
          attachments: [ ],
          attachmentOfferings: [
            {
              name: 'Receita',
              required: false,
              schema: {
                Nome1: {
                  maximumNumberOfCharacters: 5,
                  domain: [ ],
                },
                Teste: {
                  maximumNumberOfCharacters: 10,
                  domain: [
                    '0987654321',
                  ],
                },
                Embalagem: {
                  maximumNumberOfCharacters: 6,
                  domain: [
                    'true',
                    ' false',
                  ],
                },
              },
            },
          ],
          offerings: [ ],
          priceTags: [ ],
          availability: 'available',
          measurementUnit: 'un',
          unitMultiplier: 1,
        },
      ],
      sellers: [
        {
          id: '1',
          name: 'qamarketplace',
          logo: '',
        },
      ],
      totals: [
        {
          id: 'Items',
          name: 'Total dos Itens',
          value: 5764,
        },
        {
          id: 'Discounts',
          name: 'Total dos Descontos',
          value: 0,
        },
        {
          id: 'Shipping',
          name: 'Total do Frete',
          value: 750,
        },
        {
          id: 'Tax',
          name: 'Total da Taxa',
          value: 0,
        },
      ],
      clientProfileData: {
        email: 'shipping66.3272476409387@mailinator.com',
        firstName: 'auto',
        lastName: 'auto',
        document: '12345678909',
        documentType: 'cpf',
        phone: '+552222222222',
        corporateName: null,
        tradeName: null,
        corporateDocument: null,
        stateInscription: '',
        corporatePhone: null,
        isCorporate: false,
        profileCompleteOnLoading: false,
        profileErrorOnLoading: false,
        customerClass: null,
      },
      ratesAndBenefitsData: {
        rateAndBenefitsIdentifiers: [ ],
        teaser: [ ],
      },
      shippingData: {
        address: {
          addressType: 'residential',
          receiverName: 'auto auto',
          addressId: 'dfc2af95f1404418a76be7e3d48664a4',
          postalCode: '22231-000',
          city: 'Rio de Janeiro',
          state: 'RJ',
          country: 'BRA',
          street: 'Rua Barão de Itambi',
          number: '1',
          neighborhood: 'Botafogo',
          complement: null,
          reference: null,
          geoCoordinates: [ ],
        },
        logisticsInfo: [
          {
            itemIndex: 0,
            selectedSla: 'Sedex',
            selectedDeliveryChannel: 'delivery',
            addressId: 'dfc2af95f1404418a76be7e3d48664a4',
            slas: [
              {
                id: 'Sedex',
                deliveryChannel: 'delivery',
                name: 'Sedex',
                deliveryIds: [
                  {
                    courierId: '1d1b046',
                    warehouseId: '169cdbc',
                    dockId: '1',
                    courierName: 'SEDEX',
                    quantity: 1,
                  },
                ],
                shippingEstimate: '3h',
                shippingEstimateDate: null,
                lockTTL: '12d',
                availableDeliveryWindows: [ ],
                deliveryWindow: null,
                price: 750,
                listPrice: 750,
                tax: 0,
                pickupStoreInfo: {
                  isPickupStore: false,
                  friendlyName: null,
                  address: null,
                  additionalInfo: null,
                  dockId: null,
                },
                pickupPointId: null,
                pickupDistance: 0,
                polygonName: null,
              },
              {
                id: 'Expresso',
                deliveryChannel: 'delivery',
                name: 'Expresso',
                deliveryIds: [
                  {
                    courierId: '1403f28',
                    warehouseId: '169cdbc',
                    dockId: '1',
                    courierName: 'Transportadora Expresso',
                    quantity: 1,
                  },
                ],
                shippingEstimate: '0bd',
                shippingEstimateDate: null,
                lockTTL: '12d',
                availableDeliveryWindows: [ ],
                deliveryWindow: null,
                price: 1500,
                listPrice: 1500,
                tax: 0,
                pickupStoreInfo: {
                  isPickupStore: false,
                  friendlyName: null,
                  address: null,
                  additionalInfo: null,
                  dockId: null,
                },
                pickupPointId: null,
                pickupDistance: 0,
                polygonName: null,
              },
              {
                id: 'Normal',
                deliveryChannel: 'delivery',
                name: 'Normal',
                deliveryIds: [
                  {
                    courierId: '1',
                    warehouseId: '169cdbc',
                    dockId: '1',
                    courierName: 'Transportadora',
                    quantity: 1,
                  },
                ],
                shippingEstimate: '0d',
                shippingEstimateDate: null,
                lockTTL: '12d',
                availableDeliveryWindows: [ ],
                deliveryWindow: null,
                price: 1700,
                listPrice: 1700,
                tax: 0,
                pickupStoreInfo: {
                  isPickupStore: false,
                  friendlyName: null,
                  address: null,
                  additionalInfo: null,
                  dockId: null,
                },
                pickupPointId: null,
                pickupDistance: 0,
                polygonName: null,
              },
              {
                id: 'pickupPoint (1efe51a)',
                deliveryChannel: 'pickup-in-point',
                name: 'pickupPoint (1efe51a)',
                deliveryIds: [
                  {
                    courierId: 'pickup',
                    warehouseId: '169cdbc',
                    dockId: '1',
                    courierName: 'Pickup Point',
                    quantity: 1,
                  },
                ],
                shippingEstimate: '3bd',
                shippingEstimateDate: null,
                lockTTL: '12d',
                availableDeliveryWindows: [ ],
                deliveryWindow: null,
                price: 1153,
                listPrice: 1153,
                tax: 0,
                pickupStoreInfo: {
                  isPickupStore: true,
                  friendlyName: 'Loja Copacabana',
                  address: {
                    addressType: 'pickup',
                    receiverName: null,
                    addressId: '1efe51a',
                    postalCode: '22010000',
                    city: 'Rio de Janeiro',
                    state: 'RJ',
                    country: 'BRA',
                    street: 'Avenida Atlântica',
                    number: '300',
                    neighborhood: 'Copacabana',
                    complement: '',
                    reference: null,
                    geoCoordinates: [
                      -43.18686,
                      -22.9697781,
                    ],
                  },
                  additionalInfo: '',
                  dockId: '1',
                },
                pickupPointId: '1_1efe51a',
                pickupDistance: 3.4096999168395996,
                polygonName: null,
              },
            ],
            shipsTo: [
              'BRA',
            ],
            itemId: '15',
            deliveryChannels: [
              {
                id: 'pickup-in-point',
              },
              {
                id: 'delivery',
              },
            ],
          },
        ],
        selectedAddresses: [
          {
            addressType: 'residential',
            receiverName: 'auto auto',
            addressId: 'dfc2af95f1404418a76be7e3d48664a4',
            postalCode: '22231-000',
            city: 'Rio de Janeiro',
            state: 'RJ',
            country: 'BRA',
            street: 'Rua Barão de Itambi',
            number: '1',
            neighborhood: 'Botafogo',
            complement: null,
            reference: null,
            geoCoordinates: [ ],
          },
        ],
        availableAddresses: [
          {
            addressType: 'residential',
            receiverName: 'auto auto',
            addressId: 'dfc2af95f1404418a76be7e3d48664a4',
            postalCode: '22231-000',
            city: 'Rio de Janeiro',
            state: 'RJ',
            country: 'BRA',
            street: 'Rua Barão de Itambi',
            number: '1',
            neighborhood: 'Botafogo',
            complement: null,
            reference: null,
            geoCoordinates: [ ],
          },
        ],
        pickupPoints: [
          {
            friendlyName: 'Loja Copacabana',
            address: {
              addressType: 'pickup',
              receiverName: null,
              addressId: '1efe51a',
              postalCode: '22010000',
              city: 'Rio de Janeiro',
              state: 'RJ',
              country: 'BRA',
              street: 'Avenida Atlântica',
              number: '300',
              neighborhood: 'Copacabana',
              complement: '',
              reference: null,
              geoCoordinates: [
                -43.18686,
                -22.9697781,
              ],
            },
            additionalInfo: '',
            id: '1_1efe51a',
            businessHours: [ ],
          },
        ],
      },
      paymentData: {
        giftCards: [ ],
        transactions: [
          {
            isActive: true,
            transactionId: 'B435F7822D254EBBB452DA84DFE60DCD',
            merchantName: 'QAMARKETPLACE',
            payments: [
              {
                id: 'F3E16B58FA6F45558740D0046734B8B6',
                paymentSystem: '6',
                paymentSystemName: 'Boleto Bancário',
                value: 6514,
                installments: 1,
                connectorResponses: { },
                referenceValue: 6514,
                cardHolder: null,
                cardNumber: null,
                firstDigits: null,
                lastDigits: null,
                cvv2: null,
                expireMonth: null,
                expireYear: null,
                url: 'https://qamarketplace.vtexpayments.com.br:443/BankIssuedInvoice/Transaction/B435F7822D254EBBB452DA84DFE60DCD/Payment/F3E16B58FA6F45558740D0046734B8B6/Installment/{Installment}',
                koinUrl: null,
                tid: null,
                redemptionCode: null,
                giftCardId: null,
                giftCardProvider: null,
                giftCardAsDiscount: null,
                group: 'bankInvoice',
                dueDate: '2018-12-09',
                accountId: null,
                parentAccountId: null,
                bankIssuedInvoiceIdentificationNumber: null,
                bankIssuedInvoiceIdentificationNumberFormatted: null,
                bankIssuedInvoiceBarCodeNumber: null,
                bankIssuedInvoiceBarCodeType: null,
              },
            ],
            sharedTransaction: false,
          },
        ],
      },
      clientPreferencesData: {
        locale: 'pt-BR',
        optinNewsLetter: true,
      },
      commercialConditionData: null,
      giftRegistryData: null,
      marketingData: null,
      storePreferencesData: {
        countryCode: 'BRA',
        saveUserData: false,
        timeZone: 'E. South America Standard Time',
        currencyCode: 'BRL',
        currencyLocale: 1046,
        currencySymbol: 'R$',
        currencyFormatInfo: {
          currencyDecimalDigits: 2,
          currencyDecimalSeparator: ',',
          currencyGroupSeparator: '.',
          currencyGroupSize: 3,
          startsWithCurrencySymbol: true,
        },
      },
      openTextField: null,
      invoiceData: null,
      itemMetadata: {
        items: [
          {
            id: '30',
            name: 'Produto Entrega Agendada Sku Entrega Agendada',
            skuName: 'Sku Entrega Agendada',
            productId: '19',
            refId: null,
            ean: 'Sku Entrega Agendada',
            imageUrl: 'http://qamarketplace.vteximg.com.br/arquivos/ids/155368-55-55/Produto-com-entrega-agendada.png?v=635830207919730000',
            detailUrl: '/produto-entregaga-agendada/p',
            assemblyOptions: [ ],
          },
          {
            id: '15',
            name: 'Novalgina',
            skuName: 'Novalgina',
            productId: '4',
            refId: 'produtohomologação',
            ean: 'produtohomologação',
            imageUrl: 'http://qamarketplace.vteximg.com.br/arquivos/ids/155400-55-55/Novalgina.jpg?v=635985172600570000',
            detailUrl: '/novalgina/p',
            assemblyOptions: [
              {
                id: 'Receita',
                name: 'Receita',
                required: false,
                inputValues: {
                  Nome1: {
                    maximumNumberOfCharacters: 5,
                    domain: [ ],
                  },
                  Teste: {
                    maximumNumberOfCharacters: 10,
                    domain: [
                      '0987654321',
                    ],
                  },
                  Embalagem: {
                    maximumNumberOfCharacters: 6,
                    domain: [
                      'true',
                      ' false',
                    ],
                  },
                },
                composition: null,
              },
            ],
          },
        ],
      },
      taxData: null,
      customData: null,
      hooksData: null,
      changeData: null,
      subscriptionData: null,
      salesChannel: '1',
      followUpEmail: 'e71710308aad4a57a1171c50ab5d704c@ct.vtex.com.br',
      creationDate: '2018-12-06T19:07:57.7882431Z',
      lastChange: '2018-12-06T19:08:06.5396241Z',
      timeZoneCreationDate: '2018-12-06T17:07:57.7882431',
      timeZoneLastChange: '2018-12-06T17:08:06.5396241',
      isCompleted: true,
      hostName: 'qamarketplace',
      merchantName: null,
      userType: '',
      roundingError: 0,
      allowEdition: true,
      allowCancellation: true,
      isUserDataVisible: true,
      allowChangeSeller: true,
    },
  ],
}