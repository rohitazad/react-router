import React, {Component} from 'react';

import CartIndex from './index';

import { Provider } from 'react-redux';
import store from '../CartSample/ReduxReducerActionStore/Store/store';


class CartSampleComponent extends Component{
    render(){
        return(
            <Provider store={store}>
                <CartIndex />
            </Provider>
        );
    }
}

export default CartSampleComponent;