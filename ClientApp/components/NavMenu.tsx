import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as User from '../store/user';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';

export class NavMenu extends React.Component<any, any>  {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user
        }
    }

    componentDidMount() {
        // load user
        this.props.requestUser()
    }

    componentWillReceiveProps(props) {
        let self = this;
        self.setState({ user: props.user })
    }
    
    public render() {
        const { user } = this.state

        return <div className='main-nav'>
            <div className='navbar navbar-inverse'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <Link className='navbar-brand' to={'/'} data-toggle="collapse" data-target=".in">DPW<strong> Maintenance</strong></Link>
                </div>
                <div className='clearfix'></div>
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        <li className="sidenav-header">Submit</li>
                        <li>
                            <NavLink to={'/Map'} data-toggle="collapse" data-target=".in">
                                <span className='glyphicon glyphicon-map-marker'></span> Select facility from map
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/Search'} data-toggle="collapse" data-target=".in">
                                <span className='glyphicon glyphicon-list'></span> Select facility from list
                            </NavLink>
                        </li>
                        <li className="sidenav-header">Track</li>
                        <li>
                            <NavLink to={'/MyRequests'} data-toggle="collapse" data-target=".in">
                                <span className='glyphicon glyphicon-chevron-right'></span> My requests
                            </NavLink>
                        </li>
                        <div className='accountcontainer'>
                            <li className="account">{user}</li>
                            <li className='logout'>
                                <a href='/Account/Login' id="logout" className='btn btn-link navbar-logout-btn'>
                                    <span className='glyphicon glyphicon-user'></span>Logout
                                </a>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>;
    }
}

export default connect(
    (state: ApplicationState) => 
    state.user,
    User.actionCreators
)(NavMenu as any) as typeof NavMenu;