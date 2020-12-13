import Head from 'next/head'
import React from 'react'
import { Animated, Basic, Combined, bounce } from '../shared/styles'
import {animation} from '../shared/animation'
import { PriceCard } from '../components/PriceCard'
import ProfileCard from '../components/ProfileCard'

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
      <PriceCard />
      <PriceCard />
      <PriceCard />
 
    </main>
  </div>
)

export default Home
