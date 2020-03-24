const React = require('react');
import {Root} from 'react-static'
import {Link} from '@reach/router'



class Create extends React.Component {

    render() {
        const {blog} = this.props;

        return (
            <div>
                <div>
                    <title>{this.props.title}</title>

                    {this.props.children}
                </div>


                <Root>
                    <html>
                    <head>
                        <link href="/signup_css/vendor/mdi-font/css/material-design-iconic-font.min.css" rel="stylesheet" media="all" />
                        <link href="/signup_css/vendor/font-awesome-4.7/css/font-awesome.min.css" rel="stylesheet" media="all" />
                        {/*<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet" />*/}
                        <link href="/signup_css/vendor/select2/select2.min.css" rel="stylesheet" media="all" />
                        <link href="/signup_css/vendor/datepicker/daterangepicker.css" rel="stylesheet" media="all" />
                        <link href="/signup_css/css/main.css" rel="stylesheet" media="all" />

                    </head>

                    <body>


                    <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
                        <div className="wrapper wrapper--w790">
                            <div className="card card-5">
                                <div className="card-heading">
                                    <h2 className="title">Event Registration Form</h2>
                                </div>
                                <div className="card-body">
                                    <form method="POST">
                                        <div className="form-row m-b-55">
                                            <div className="name">Name</div>
                                            <div className="value">
                                                <div className="row row-space">
                                                    <div className="col-2">
                                                        <div className="input-group-desc">
                                                            <input className="input--style-5" type="text"
                                                                   name="username" placeholder="User Name"/>
                                                                <label className="label--desc">User Name</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-2">
                                                        <div className="input-group-desc">
                                                            <input className="input--style-5" type="text"
                                                                   name="password" placeholder="Password"/>
                                                                <label className="label--desc">Password</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="name">Email</div>
                                            <div className="value">
                                                <div className="input-group">
                                                    <input className="input--style-5" type="email" name="email" placeholder="Email"/>
                                                </div>
                                            </div>
                                        </div>



                                        <div>
                                            <button className="btn btn--radius-2 btn--red" type="submit">Register
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>


                    </body>
                    </html>
                </Root>

            </div>
        )
    }
}

module.exports = Create;





