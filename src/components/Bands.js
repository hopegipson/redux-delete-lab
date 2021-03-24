import React, { Component } from 'react'
import Band from '../components/Band'

class Bands extends Component {


    renderBands = () => this.props.bands.map((band) => <Band delete={this.props.delete} id={band.id} text={band.name} />) 

    render() {
        return(
          <div>
            {this.renderBands()}
          </div>
        )
      }
    }

    export default Bands
