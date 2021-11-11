import { Component } from 'react';
import ItemCount from './ItemCount';

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
                <ItemCount 
                    stock={5}
                    initial={1}
                />
            </div>
        )
    }
}
 
export default ItemListContainer;

