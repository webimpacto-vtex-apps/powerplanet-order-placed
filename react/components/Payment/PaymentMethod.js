import React from 'react'
import PropTypes from 'prop-types'
import { intlShape, injectIntl } from 'react-intl'
import { IconCaretDown } from 'vtex.styleguide'

import { paymentShape } from '../../types'
import { intlMessage } from '../../utils'
import ButtonLink from '../ButtonLink'
import Price from './FormattedPrice'

const paymentGroupSwitch = (payment, intl) => {
  switch (payment) {
    case 'creditCard':
      return intl.formatMessage({ id: 'payments.creditcard' })
    case 'bankInvoice':
      return intl.formatMessage({ id: 'payments.bankinvoice' })
    case 'promissory':
      return intl.formatMessage({ id: 'payments.promissory' })
    default:
      break
  }
}

const PaymentMethod = ({ payment, transactionId, intl }) => {
  const isCreditCard = payment.group === 'creditCard'
  const isBankInvoice = payment.group === 'bankInvoice'

  return (
    <article className="flex justify-between items-center">
      <div className="t-body lh-solid">
        <p className="c-on-base">{paymentGroupSwitch(payment.group, intl)}</p>
        {isCreditCard && (
          <p className="c-muted-1">
            {intlMessage(intl, 'payments.creditcard.lastDigits', {
              lastDigits: payment.lastDigits,
            })}
          </p>
        )}
        <p className="c-muted-1">
          <Price value={payment.value} />
          {` ${intlMessage(intl, 'payments.installments', {
            installments: payment.installments,
          })}`}
        </p>
        {isBankInvoice && (
          <ButtonLink url={payment.url} variation="primary">
            {intlMessage(intl, 'payments.bankinvoice.print')}
          </ButtonLink>
        )}
        <div>
          <p className="c-muted-2">ID do pagamento: {payment.id}</p>
          <p className="c-muted-2">ID da transação: {transactionId}</p>
        </div>
      </div>
      <div className="c-action-primary">
        <IconCaretDown />
      </div>
    </article>
  )
}

PaymentMethod.propTypes = {
  payment: paymentShape.isRequired,
  transactionId: PropTypes.string.isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(PaymentMethod)
