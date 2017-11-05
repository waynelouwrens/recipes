import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Pescatarian from '../images/pescatarian.svg'
import Vegan from '../images/vegan.svg'
import Vegetarian from '../images/vegetarian.svg'
import LikeButton from '../components/LikeButton'

class RecipeItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    vegan: PropTypes.bool,
    vegatarian: PropTypes.bool,
    pescatarian: PropTypes.bool,
  }

  render() {
    const { title, summary, vegan, vegetarian, pescatarian } = this.props

    return(
      <article className="recipe">
        <h1>{ title }</h1>
        <div>
          <p>{ summary }</p>
          <ul>
            { pescatarian && <li><img src={Pescatarian} alt="pescatarian" /></li> }
            { vegan && <li><img src={Vegan} alt="vegan" /></li> }
            { vegetarian && <li><img src={Vegetarian} alt="vegetarian" /></li> }
          </ul>
          <LikeButton />
        </div>
      </article>
    )
  }
}

export default RecipeItem
