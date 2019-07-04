import React from "react";

export default class SelectedCategories extends React.Component {
    constructor() {
        super();
        this.state = {
            selected: true
        }
    }

    componentWillMount() {
        this.setState({selected: true});
    }
    
    handleClick(event) {
        let clicked = event.target;
        console.log(clicked, clicked.state, clicked.selected);
        if (clicked.selected) {
            this.setState({selected: false});
            this.className = 'selected-false';
        } else {
            this.setState({selected: true})
            this.className = 'selected-true';
        }
    }
    
    render() {
        return (
                <div className="list-items">
                    {
                        this.props.categories.map((category, key) => {
                            this.setState.selected = category.selected;
                            return (<li key={key} className={"selected-" + category.selected.toString()} onClick={this.handleClick.bind(this)}>{category.name}</li>);
                        })
                    }
               </div>
        );
    }
}