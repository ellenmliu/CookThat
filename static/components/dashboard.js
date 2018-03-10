import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import '../css/index.css';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {ingredients:['apple','orange'], addIngredient:''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({addIngredient: event.target.value});
  }

  handleSubmit(event) {
    let temp = this.state.ingredients;
    temp.push(this.state.addIngredient);
    this.setState({ingredients: temp});
    event.preventDefault();
  }

  render() {
    return (<main>
      <Header />
      <h1>Dashboard</h1>
      <h2>Ingredients</h2>
      <form onSubmit={this.handleSubmit}>
        <label>
          Ingredient:
          <input type="text" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <ul>
      {this.state.ingredients.map((ingredient) => {
        return <li>{ingredient}</li>
      })}
    </ul>
    </main>);
  }
}

ReactDOM.render(<Dashboard />, document.getElementById('dashboard'));
