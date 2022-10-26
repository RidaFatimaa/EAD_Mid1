import React from "react";
import { useState } from "react";

class Search extends React.Component{
    state = {
        query : '',
        data : [],
    }
    handleInputChange = () => {
        this.setState({
            query : this.Search.value
        })
        this.filterArray();
    }
    getData = () => {
        fetch(`https://hn.algolia.com/api/v1/search?query=hello&page=0`)
        .then(response => response.json())
        .then(responseData =>{
            this.setState({
                data:responseData
            })
        })
    }
}