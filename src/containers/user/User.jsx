import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <div style={{width:'100%',height:'100%',background:'#00ff00'}}>
                用户界面
            </div>
        );
    }
    componentWillUnmount(){
        this.setState=(state,cb)=>{
            return;
        }
    }
}

export default User;