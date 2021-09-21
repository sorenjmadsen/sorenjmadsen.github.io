import React, { Component } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'

export class PortfolioItem extends Component {
    render() {
        return (
            <div className="portfolio-image-box" onClick={this.props.onClick}>
                <img className="portfolio-image" src={this.props.src} alt={this.props.alt} />
                <div className="overflow">
                    <FontAwesomeIcon icon={faSearchPlus} className="portfolio-icon"/>
                </div>
            </div>
        )
    }
}

export default PortfolioItem

