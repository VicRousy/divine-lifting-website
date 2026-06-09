import React, { Suspense } from 'react'

const MotionInner = React.lazy(() => import('./MotionInner'))

export default function Motion({ as = 'div', children, forwardedRef, ...props }) {
  const Tag = as
  return (
    <Suspense fallback={<Tag {...props}>{children}</Tag>}>
      <MotionInner as={as} {...props}>{children}</MotionInner>
    </Suspense>
  )
}
