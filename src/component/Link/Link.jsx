import React, { Component } from 'react';
import './Link.css'

class Link extends Component {
    render() {
        return (
            <div className='link'>
                <a href="#">{this.props.content}</a>
            </div>
        );
    }
}

export default Link;