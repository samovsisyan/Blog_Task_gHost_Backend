const React = require('react');
const {BrowserRouter, Route, Switch} = require('react-router-dom');

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={SignIn} />
                        <Route path="/log-out" component={LogOut} />
                        <Route path="/blog" component={Blog} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;