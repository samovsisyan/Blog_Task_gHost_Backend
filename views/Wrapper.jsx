const React = require('react');

class Wrapper extends React.Component {
    render() {
        return (
            <html>
            <head>
                <meta charSet="utf8"/>
                <title>{this.props.title}</title>


            </head>
            <body>
            {this.props.children}


                <h1>hgfthjkliouyt</h1>
            </body>
            </html>
        )
    }
}


module.exports = Wrapper