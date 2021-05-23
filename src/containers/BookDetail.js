import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

class BookDetail extends Component{
    render(){
        if(!this.props.activeBook)
            return <div>No Book Selected</div>
        return (
            <div>
                <h3>Details For:</h3>
                <div>Title:{this.props.activeBook.title}</div>
                <div>Pages:{this.props.activeBook.pages}</div>
            </div>
        )
    }
}
const mapStateToProps =(state)=>{
    return {activeBook: state.actBook}
}

export default connect(mapStateToProps)(BookDetail);