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

  }

  render() {

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
        </ul>
      </div>
    );
  }
}

export default SearchBox;