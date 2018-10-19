"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {
            searchText: '',
            users: []
        };
        return _this;
    }

    _createClass(App, [{
        key: "onChangeHandle",
        value: function onChangeHandle(event) {
            this.setState({ searchText: event.target.value });
        }
    }, {
        key: "onSubmit",
        value: function onSubmit(event) {
            var _this2 = this;

            event.preventDefault();
            var searchText = this.state.searchText;

            var url = "https://api.github.com/search/users?q=" + searchText;
            fetch(url).then(function (response) {
                return response.json();
            }).then(function (responseJson) {
                return _this2.setState({ users: responseJson.items });
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: style.app },
                React.createElement(
                    "div",
                    null,
                    React.createElement("img", { id: "logo", src: "./images/git.png", style: { maxWidth: '300px' } }),
                    React.createElement(
                        "h1",
                        { className: style.header },
                        "users search engine"
                    )
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.onSubmit,
                        className: style.form },
                    React.createElement(
                        "label",
                        { htmlFor: "searchText" },
                        "Search by user name"
                    ),
                    React.createElement("input", {
                        type: "text",
                        id: "searchText",
                        onChange: this.onChangeHandle,
                        value: this.state.searchText })
                ),
                React.createElement(UsersList, { users: this.state.users })
            );
        }
    }]);

    return App;
}(React.Component);
