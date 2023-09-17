import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import Button from '@/components/Button';
import Container from '@/components/UI/Container';
import Heading from '@/components/Heading';
import RingsFigure from '@/components/RingsFigure';

import styles from "./MainHero.module.scss";

type MainHeroType = {
  heroData: any
}

const MainHero: React.FC<MainHeroType> = ({ heroData }) => {
  const { heroCtaLabel, heroCtaLink, heroHeadline, heroImage, heroNav, heroSubcopy } = heroData!
  const navItems = heroNav?.menuItemsCollection.items && heroNav?.menuItemsCollection.items.map((item: any) => (
    <li key={item?.menuLabel}>
      <Link
        className={styles.navLink}
        href={item?.menuLink!}
        target={item?.menuTarget!}
      >
        {item?.menuLabel}
      </Link>
    </li>
  ))

  return (
    <header className={styles.mainHero}>
      <RingsFigure className={styles.heroRings} />

      <div className={styles.heroCircle}>
        <svg>
          <use href='/icons/pattern-circle.svg#icon'></use>
        </svg>
      </div>

      <Container>
        <Container.Centered className={styles.heroContainer}>
          <nav className={styles.heroNav}>
            <Heading copy="Adonis D. Martin" />

            <ul role="menubar" className={styles.navList}>
              {navItems}
            </ul>
          </nav>

          <div className={styles.heroImg}>
            <Image
              width={500}
              height={500}
              className={styles.gImg}
              alt='hero img'
              src={heroImage?.url}
            />
          </div>

          <div className={styles.headlineWrapper}>
            <h1 className={styles.headline} dangerouslySetInnerHTML={{ __html: heroHeadline! }} />

            <p className={styles.subcopy}>{heroSubcopy}</p>

            <Button path={heroCtaLink!} label={heroCtaLabel!} />
          </div>
        </Container.Centered>
      </Container>
    </header>
  )
}

export default MainHero;
