import React, { FC } from 'react'
import { withRouter, RouteComponentProps } from 'react-router'
import { MobileNav, Condition } from '@vlife-grand-era/vlife-storybook/build'
import { PromotionsLink } from 'promotions'
import { navLinks } from './navLinks'
import { PageWithMobileNavProps } from './types'
import { useStyles } from './styles'

const PageWithMobileNav: FC<PageWithMobileNavProps & RouteComponentProps> = ({
  children,
  history,
  withPromotions,
}) => {
  const classes = useStyles({ withPromotions })

  const onLinkClick = (link: string) => {
    history.push(link)
  }

  const onHomeButtonClick = () => {
    window.location.assign('https://dev.vlife.kz/#/')
  }

  return (
    <section className={classes.pageWithMobileNav}>
      {children}
      <Condition match={withPromotions}>
        <PromotionsLink />
      </Condition>
      <MobileNav
        onHomeButtonClick={onHomeButtonClick}
        navLinks={navLinks}
        onLinkClick={onLinkClick}
      />
    </section>
  )
}

PageWithMobileNav.defaultProps = {
  withPromotions: true,
}

export default withRouter(PageWithMobileNav)
