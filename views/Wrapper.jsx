const React = require('react');

class Wrapper extends React.Component {
  render() {
    return (
      <html>
      <head>
        <meta charSet="utf8"/>
        <title>{this.props.title}</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css"/>
        <link rel="stylesheet" href="/styles/style.css"/>

      </head>
      <body>
      {this.props.children}
      <script src="/scripts/jquery-3.4.0.min.js"/>
      <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
      <script src="/scripts/script.js"/>
      <h1>hello</h1>
      </body>
      </html>
    )
  }
}


module.exports = Wrapper
