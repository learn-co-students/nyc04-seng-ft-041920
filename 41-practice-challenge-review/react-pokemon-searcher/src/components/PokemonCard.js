import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    showFront: true
  }

  toggleSprite = () => {
    this.setState(prevState => ({
      showFront: !prevState.showFront
    }))
  }

  render() {
    const { sprites, name, hp } = this.props

    return (
      <Card>
        <div onClick={this.toggleSprite}>
          <div className="image">
            <img src={this.state.showFront ? sprites.front : sprites.back} alt={name} />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
