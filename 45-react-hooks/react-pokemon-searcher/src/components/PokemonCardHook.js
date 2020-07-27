import React, { useState } from 'react'
import { Card } from 'semantic-ui-react'

const PokemonCard = ({ name, hp, sprites: { front, back } }) => {

  const [showFront, setShowFront] = useState(true)

  return (
    <Card>
      <div>
        <div className="image">
          <img alt={name} src={showFront ? front : back} onClick={() => setShowFront(!showFront)} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
            </span>
        </div>
      </div>
    </Card>
  )
}

export default PokemonCard
