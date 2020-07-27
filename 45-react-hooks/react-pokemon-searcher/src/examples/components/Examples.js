import React, { useState } from 'react'

import { useEmojiFavicon } from '../hooks/useEmojiFavicon'


import { useUrlSpinner } from '../hooks/useUrlSpinner'

const Examples = () => {
  const [loading, setLoading] = useState(false)
  const [emoji, setEmoji] = useState("🍞")

  useUrlSpinner(loading)

  useEmojiFavicon(emoji)

  const handleClick = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 3000)
  }

  return (
    <div>
      <button onClick={handleClick}>Show URL Loader</button>
      <input type="text" placeholder="Update Favicon" value={emoji} onChange={e => setEmoji(e.target.value)} />
    </div>
  )
}

export default Examples