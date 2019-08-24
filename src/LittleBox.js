import React, { Component } from 'react';

class LittleBox extends Component {
    render() {
        return (
            <div
                style={{
                    width: this.props.width || 100,
                    height: this.props.height || 100,
                    backgroundColor: this.props.color || 'blue'
                }}
            >
                {this.props.text}
            </div>
        )
    }
} 

export default LittleBox;