// src/pages/directory.tsx  (Next.js) or src/components/Directory.tsx
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import SplashPage from '../components/SplashPage'

type Application = {
  userId: string
  firstName: string
  lastName: string
  email: string
  application: any
}

export default function Directory() {
  const [apps, setApps] = useState<Application[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/admin/getAllApplications', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
      .then(res => res.json())
      .then(data => setApps(data))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-6">
        <SplashPage />

        {loading ? (
          <p>Loading directory…</p>
        ) : (
          <ul className="space-y-4">
            {apps.map(a => (
              <li key={a.userId} className="border p-4 rounded-lg">
                <h3 className="text-xl font-semibold">
                  {a.firstName} {a.lastName}
                </h3>
                <p>{a.email}</p>
                {/* Render fields from a.application here */}
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </div>
  )
}
