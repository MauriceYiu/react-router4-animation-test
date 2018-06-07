import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Index extends Component {
    render() {
        return (
            <div style={{width:"100%",height:"100%",background:"#ddd"}}>
                <ul>
                    <li>
                        <NavLink to="/">首页</NavLink>
                    </li>
                    <li>
                        <NavLink to="/user">用户</NavLink>
                    </li>
                    <li>
                        <NavLink to="/desc">介绍</NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Index;