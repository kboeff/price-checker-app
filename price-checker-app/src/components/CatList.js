import React from 'react';
import SelectedCategories from './SelectedCategories';
// this should be kept on the Back-end and retrieved upon page load
// currently hardcoded for development purposes
let inventory = [{ 
                    id: 1,
                    name: "Bookshelves",
                    selected: true
                  }, 
                  {
                    id: 2,
                    name: "TV-Stands-and-cabinets",
                    selected: false
                  },
                  {
                    id: 3,
                    name: "Bathroom-sink-cabinets",
                    selected:true
                  },
                  {
                    id: 4,
                    name: "Step-stools-and-step-ladders",
                    selected: false
                  },
                  {
                    id: 5, 
                    name: "Wall-lights",
                    selected: true 
                  }];

class CatList extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: []
        }
    }

    componentWillMount() {
        this.setState({categories: [...inventory]});
    }

    render() {
        return (
            <ul className="category-list">
                <SelectedCategories categories={this.state.categories} />
            </ul>
        );
    }
}

export default CatList;
