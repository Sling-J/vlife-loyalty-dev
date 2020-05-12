import React, { FC } from 'react'
import { Redirect, Switch, Route } from 'react-router'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import LazyLoad from '../LazyLoad'

const getLazyLoadedComponent = (component) => (props) => (
  <LazyLoad component={component} {...props} />
)

const MainPage = React.lazy(() =>
  import('src/modules/root/containers/MainPage'),
)
const Status = React.lazy(() => import('src/modules/status/containers/Status'))
const Referral = React.lazy(() =>
  import('src/modules/referral/containers/Referral'),
)
const Bonuses = React.lazy(() =>
  import('src/modules/bonuses/containers/Bonuses'),
)
const AllBenefits = React.lazy(() =>
  import('src/modules/status/containers/AllBenefits'),
)
const Cards = React.lazy(() => import('src/modules/cards/pages/Cards/Cards'))
const Promotions = React.lazy(() =>
  import('src/modules/promotions/pages/Promotions/Promotions'),
)
const Gifts = React.lazy(() => import('src/modules/gifts/pages/Gifts/Gifts'))

const Router: FC = () => (
  <Route
    render={({ location }) => (
      <TransitionGroup className={'route-wrapper'}>
        <CSSTransition key={location.pathname} timeout={200} classNames='fade'>
          <Switch location={location}>
            <Route
              exact
              path='/main'
              component={getLazyLoadedComponent(MainPage)}
            />
            <Route path='/status' component={getLazyLoadedComponent(Status)} />
            <Route
              path='/referral'
              component={getLazyLoadedComponent(Referral)}
            />
            <Route
              path='/bonuses'
              component={getLazyLoadedComponent(Bonuses)}
            />
            <Route
              path='/all-benefits'
              component={getLazyLoadedComponent(AllBenefits)}
            />
            <Route path='/cards' component={getLazyLoadedComponent(Cards)} />
            <Route
              path='/promotions'
              component={getLazyLoadedComponent(Promotions)}
            />
            <Route path='/gifts' component={getLazyLoadedComponent(Gifts)} />
            <Redirect to='/main' />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )}
  />
)

export default Router
