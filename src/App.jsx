import { useState } from 'react'
import VisitorForm from './components/VisitorForm'
import VisitorData from './components/VisitorData'
import Header from './components/Header'
import './App.css'

function App() {
  const [visitorData, setVisitorData] = useState(null)

  const handleFormSubmit = (data) => {
    setVisitorData(data)
  }

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-3xl">
        <section className="mb-8">
          <VisitorForm onSubmit={handleFormSubmit} />
        </section>
        
        {visitorData && (
          <section className="animate-slide-up">
            <VisitorData visitor={visitorData} />
          </section>
        )}
      </main>
      
      <footer className="py-6 text-center text-neutral-500 text-sm">
        <p>© {new Date().getFullYear()} Society Visitor Management</p>
      </footer>
    </div>
  )
}

export default App