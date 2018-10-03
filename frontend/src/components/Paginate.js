import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listarNoticiaPaginacion } from '../actions/authentication';
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";




class Paginate extends Component {
  constructor(props) {
      super(props);
      this.state = {
        activePage: 1
      };
this.handlePageChange = this.handlePageChange.bind(this);

    }

    handlePageChange(pageNumber) {
      console.log(`active page is ${pageNumber}`);
      this.setState({activePage: pageNumber});
      listarNoticiaPaginacion(pageNumber);
    }

    render() {
      return (
        <div>
          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={10}
            totalItemsCount={450}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange}
          />
        </div>
      );
    }}


const mapStateToProps = (state) => ({

    noticias: state.auth.noticias
})

export  default connect(mapStateToProps, { listarNoticiaPaginacion })(Paginate)
