import React, { Suspense } from 'react'

const LazyLoad = ({ component: Component, ...props }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component {...props} />
  </Suspense>
)

export default LazyLoad
