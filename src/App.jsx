import { useState } from 'react'
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/footer'

import HeroSection from './components/Hero'
import BonusOffer from './components/Bonus'
import GameCards from './components/GameCard'
import WalletForm from './components/Wallet'

function App() {
  const [showSuccess, setShowSuccess] = useState(false)

  const games = [
    { id: 1, title: "Bitcoin Roulette", description: "Classic roulette with crypto payouts" },
    { id: 2, title: "Ethereum Slots", description: "Provably fair slot machine" },
    { id: 3, title: "Crypto Poker", description: "Texas Hold'em with BTC bonuses" }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-black">
      <Navbar />
      <HeroSection />
      <BonusOffer />
      <GameCards />
      <WalletForm />
      <Footer />
    </div>
  )
}

export default App