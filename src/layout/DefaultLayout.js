import React from 'react'
import { Header } from "../layout/partials/Header.comp"
import { Footer } from "../layout/partials/Footer.comp"

export const DefaultLayout = ({ children }) => {
    return (
        <div>
            {/* to write custom css */}
            {/* semmantic element */}
            <div className="default-layout">
                <header className="header">
                    <Header />
                    
                </header>

                <main className="main">{children} 
                </main>

                <footer className="footer">
                    <Footer />
                </footer>

            </div>
        </div >
    )
}
