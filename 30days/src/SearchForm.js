import React from 'react'


class SearchForm extends React.Component {
  // ...
  constructor(props) {
    super(props);

    this.state = {
      searchText: ''
    }
  }
  // ...
  render() {
    const { searchVisible } = this.state;
    let searchClasses = ['searchInput']
    if (searchVisible) {
      searchClasses.push('active')
    }

    return (
      <form className='header'>
        <input
          type="search"
          className={searchClasses.join(' ')}
          onChange={this.updateSearchInput.bind(this)}
          placeholder="Search ..." />

        <div
          onClick={this.showSearch.bind(this)}
          className="fa fa-search searchIcon"></div>
      </form>
    );
  }
}

export default SearchForm