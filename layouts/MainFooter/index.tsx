import React, { useRef } from 'react'

import { FooterFormProvider } from './FooterForm/FooterFormProvider'
import Container from '@/components/UI/Container'
import FooterFrom from './FooterForm'
import FooterNav from './FooterNav'
import Heading from '@/components/Heading'

import styles from "./MainFooter.module.scss"

type MainFooterType = {
  footerData: any
}

const MainFooter: React.FC<MainFooterType> = ({ footerData }) => {
  const { headline, subcopy, footerNavCollection } = footerData!
  const year = useRef(new Date().getFullYear())

  return (
    <footer className={styles.footer} id="contact">
      <Container>
        <Container.Centered>
          <div className={styles.copyWrapper}>
            <Heading copy={headline!} className={styles.copyHeadline} />

            <p className={styles.subcopy}>{subcopy?.subcopy}</p>
          </div>

          <FooterFormProvider>
            <FooterFrom />
          </FooterFormProvider>

          <FooterNav footerNavItems={footerNavCollection.items} headline='Adonis D. Martin' />

          <p className={styles.copyright}>
            &copy; Copyright {year.current}
          </p>

        </Container.Centered>

        <svg className={styles.rings}>
          <use href='/icons/pattern-rings.svg#icon'></use>
        </svg>
      </Container>
    </footer>
  )
}

export default MainFooter