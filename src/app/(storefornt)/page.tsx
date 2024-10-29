import React from 'react'
import Hero from '../_components/storefront/Hero'
import CategoriesSelection from '../_components/storefront/CategoriesSelection'
import FeatureProducts from '../_components/storefront/FeatureProducts'

export default function IndexPage() {
  return (
    <div>
     <Hero/>
     <CategoriesSelection/>
     <FeatureProducts/>
    </div>
  )
}
