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