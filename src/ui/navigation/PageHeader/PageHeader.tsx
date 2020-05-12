import React, { FC, useState } from 'react'
import clsx from 'clsx'
import { withRouter, RouteComponentProps } from 'react-router'
import {
  BackButton,
  Condition,
  Search,
  QuestionButton,
} from '@vlife-grand-era/vlife-storybook'
import { PageHeaderProps } from './types'
import { useStyles } from './styles'

const PageHeader: FC<PageHeaderProps & RouteComponentProps> = ({
  title,
  className,
  backButtonClassName,
  hasBackButton,
  onQuestionButtonClick,
  onSearchTextChange,
  withPhoto,
  history,
}) => {
  const [searchIsOpen, setSearchIsOpen] = useState(false)
  const classes: any = useStyles({ searchIsOpen, hasBackButton })

  const goBack = () => {
    history?.length <= 1 ? history.push('/main') : history.goBack()
  }

  return (
    <div className={clsx(classes.header, className)}>
      <div className={classes.left}>
        <Condition match={hasBackButton}>
          <BackButton
            className={clsx(classes.backButton, backButtonClassName)}
            onButtonClick={goBack}
          />
        </Condition>
        <Condition match={title}>
          <h2 className={classes.headerTitle}>{title}</h2>
        </Condition>
      </div>
      <div className={classes.right}>
        <Condition match={Boolean(onSearchTextChange)}>
          <Search
            onSearchTextChange={onSearchTextChange}
            onOpenValueChange={(value) => setSearchIsOpen(value)}
          />
        </Condition>
        <Condition match={Boolean(onQuestionButtonClick)}>
          <QuestionButton onButtonClick={onQuestionButtonClick} />
        </Condition>
        <Condition match={withPhoto}>
          <img
            className={classes.photo}
            src={
              'https://24smi.org/public/media/celebrity/2019/03/28/jvzb8jxagcwq-aiia-shalkar.jpg'
            }
            alt='profilePhoto'
          />
        </Condition>
      </div>
    </div>
  )
}

PageHeader.defaultProps = {
  hasBackButton: false,
}

export default withRouter(PageHeader)
