import React, { Component } from 'react';
import { connect } from 'react-redux';
import IndividualProduct from '../components/IndividualProduct';
import { fetchCurrentProduct } from '../actions/products';

class IndividualProductContainer extends Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchCurrentProduct(id)
    }

    render() {
        console.log("products", this.props)
        return (
          <div className="IndividualProductContainer">
            <IndividualProduct product={this.props.product} />
          </div>
        )
      }
}

const mapStateToProps = state => {
  return { product: state.products.product }
}
        
export default connect(mapStateToProps, { fetchCurrentProduct })(IndividualProductContainer);
