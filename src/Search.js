import React from "react";

class Search extends React.Component{
    state = {
        query : '',
        data : [],
        filteredData: []
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
    constructor(){
        this.state = {isLoading: true}
    }
    componentDidMount(){
        this.setState({ isLoading: false})
    }
    render(){
        return(
            this.state.isLoading ? showLoadingScreen : this.Search;
        );
        
    }
    filterArray = () => {
        var searchString = this.state.query;
        var responseData = this.state.query;

        if(searchString.length > 0){
            responseData = responseData.filter(l =>{
                console.log(l.name.toLowerCase().match(searchString))
            })
        }
    }
    componentWillUnmount(){
        this.getData();
    }
    render() {
        return (
            <div className="searchForm">
                <form>
                    <input type="text" id="filter" placeholder="Search for..." value={this.state.query} ref={input => this.search = input} onChange={this.handleInputChange}/>
                </form>
                <div>
                    {
                        this.state.filteredData.map((i) =>
                            <p>{i.name}</p>
                        )
                    }
                </div>
            </div>
        )
    }
}