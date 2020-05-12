import React, { FC, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { Router } from 'src/router'
import { RootState } from 'store/rootReducer'
import { IStatusActions } from 'status'
import { ICommonActions } from '../../actions/interfaces'
import { AppProps } from './props'
import { useStyles } from './styles'

const App: FC<AppProps & ICommonActions & IStatusActions & RootState> = ({
  requestClpInfo,
  requestClubInfo,
  common,
}) => {
  const classes = useStyles()

  useEffect(() => {
    requestClpInfo()
  }, [])

  useEffect(() => {
    if (common?.clpInfo?.status) {
      requestClubInfo(common?.clpInfo?.status)
    }
  }, [common?.clpInfo?.status])

  return (
    <div className={classes.wrapper}>
      <Router />
      <ToastContainer position='bottom-right' autoClose={1500} />
    </div>
  )
}

export default App
