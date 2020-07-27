import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    showFront: true
  }

  toggleSprite = () => this.setState(state => ({ showFront: !state.showFront }))

  render() {
    const { showFront } = this.state
    const { name, hp, sprites: { front, back } } = this.props

    return (
      <Card>
        <div>
          <div className="image">
            <img alt={name} src={showFront ? front : back} onClick={this.toggleSprite} />
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
}

export default PokemonCard
