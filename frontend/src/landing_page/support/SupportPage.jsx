import React from 'react'
import Hero from './Hero'
import CreateTicket from './CreateTicket'
import Navbar from '../Navbar'
import Footer from '../Footer'

export default function SupportPage() {
    return (
        <div>
            <Navbar />
            <Hero />
            <CreateTicket />
            <Footer />
        </div>
    )
}
