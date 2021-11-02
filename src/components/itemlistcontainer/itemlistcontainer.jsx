import { Component } from 'react';

class ItemListContainer extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
            
    //     }
    // }
    
    render() { 
        return (
            <div>
                <h1>{this.props.greeting}</h1>
            </div>
        )
    }
}
 
export default ItemListContainer;