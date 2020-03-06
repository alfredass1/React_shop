import React, {Component} from 'react';
import Products from "../products/Products";
import Orders from "../orders/Orders";

class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {allProducts: []};
    }

    componentDidMount() {
        fetch(`http://skelbimai.test/api/all-products`)
            .then(response => response.json())
            .then(
                data=>{
                    this.setState({
                        allProducts: data
                    }, () => console.log(this.state.allProducts))
                }
            )
    }
    render(){

        return(
            <main>
                <div className="container">


                        <div className="card-body">
                           <Products products = {this.state.allProducts}/>
                            {/*<Orders/>*/}
                        </div>
                    </div>

            </main>
        );

    }

}
export default Main;