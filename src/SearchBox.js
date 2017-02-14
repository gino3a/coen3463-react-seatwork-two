import React, {
    Component
} from 'react';

class SearchBox extends React.Component {
  constructor(props) {
      super(props);
  }
  state = {
    query: ''
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    });
  }

  render() {
    let libraries = this.props.items,
    query = this.state.query.trim().toLowerCase();

    if (query.length > 0) {
      // We are searching. Filter the results.
      libraries = libraries.filter(function(l) {
        return l.name.toLowerCase().match(query);
      });
    }

    return (
      <div>
        <h3>Instant Search</h3>
        <input
          type="text"
          value={this.state.query}
          onChange={this.handleChange }
          placeholder="Type here"
        />
        <ul>
          {
            libraries.map(function(l) {
              return <li > {l.name } <a href = {l.url } > {l.url } </a></li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default SearchBox;