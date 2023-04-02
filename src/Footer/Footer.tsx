import { useState } from 'react'

const Footer = () => {
  const [year] = useState(new Date().getFullYear())
  return (
    <div className="flex justify-center text-sm text-slate-300">
      © {year} Ananya Dhananjaya. All Rights Reserved
    </div>
  )
}

export default Footer
