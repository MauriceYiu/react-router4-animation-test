import React, { Component } from 'react';

class Desc extends Component {
    render() {
        return (
            <div style={{width:'100%',height:'100%',background:'#ff0000'}}>
                介绍页面
            </div>
        );
    }
    componentWillUnmount(){
        this.setState=(state,cb)=>{
            return;
        }
    }
}

export default Desc;