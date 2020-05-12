import React, { FC, useEffect } from 'react'
import { withRouter, RouteComponentProps } from 'react-router'

const ScrollToTop: FC<RouteComponentProps> = ({ children, location }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [location])

  return <>{children}</>
}

export default withRouter(ScrollToTop)
