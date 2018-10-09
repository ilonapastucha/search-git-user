ReactDOM.render(
    <App />,
    document.getElementById('root')
);

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
            .then(responseJson => this.setState({users: responseJson.items}));
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
  
class User extends React.Component {
    render() {
        return(
            <div className={style.users}>
            <img src={this.props.user.avatar_url} style={{maxWidth: '100px'}}/>
            <a href={this.props.user.html_url} target="_blank">
                {this.props.user.login}
            </a>
            </div>
        );
    }
}
  
class UsersList extends React.Component {
    get users() {
        return this.props.users.map(user => <User key={user.id} user={user}/>);
    }
  
    render() {
        return (
            <div className={style.userlist}>
            {this.users}
            </div>
        );
    }
}
  
User.propTypes = {
    user: PropTypes.array,
    avatar_url: PropTypes.string,
    html_url: PropTypes.string,
    login: PropTypes.string
}.isRequired;
  
UsersList.propTypes = {
   users: PropTypes.array.isRequired
};
  
ReactDOM.render(<App />, document.getElementById('app'));