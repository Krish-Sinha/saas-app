import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
    <h1>Popular Companions</h1>

      <section className='home-section'>
        <CompanionCard
          id='123'
          name='Neura the Brainy Explorer'
          topic='Neural Network of the brain'
          subject='science'
          duration={45}
          color='#ffda6e'
        />
        <CompanionCard
          id='456'
          name='Countsy the number wizard'
          topic='Derivatives and Integrals'
          subject='maths'
          duration={30}
          color='#e5d0ff'
        />
        <CompanionCard
          id='786'
          name='Verba the vocabulary builder'
          topic='English Literature'
          subject='language'
          duration={30}
          color='#BDE7FF'
        />
      </section>

      <section className='home-section'>
        <CompanionList
          title='Recently completed sessions'
          companions={recentSessions}
          className='w-2/3 max-lg:w-full'
        />
        <CTA/>
      </section>
    </main>
  )
}

export default Page