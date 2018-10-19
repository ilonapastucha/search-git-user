class App extends React.Component {
    constructor() {
        super();
        this.state = {
        searchText: '',
        users: []
        };
    }
  
    onChangeHandle(event) {
        this.setState({searchText: event.target.value});
    }
  
    onSubmit(event) {
        event.preventDefault();
        const { searchText } = this.state;
        const url = `https://api.github.com/search/users?q=${searchText}`;
        fetch(url)
            .then(response => response.json())
            .then(responseJson => this.setState({users: responseJson.items})
            );
    }
  
    render() {
        return (
            <div className={style.app}>
            <div>
                <img id="logo" src="./images/git.png" style={{maxWidth: '300px'}}/>
                <h1 className={style.header}>
                users search engine
                </h1>
            </div>
            <form onSubmit={this.onSubmit}
                className={style.form}>
                <label htmlFor="searchText">
                Search by user name
                </label>
                <input
                type="text"
                id="searchText"
                onChange={this.onChangeHandle}
                value={this.state.searchText}/>
            </form>
            <UsersList users={this.state.users}/>
            </div>
        )
    }
}