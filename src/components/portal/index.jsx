import React from 'react'
import ReactDOM from 'react-dom'

export default class extends React.Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
    }
    componentDidMount() {
        const target = document.createElement('div')
        target.id = "modalroot"
        const root = document.querySelector('.App')
        root.appendChild(target)
    }

    handleClick() {
        this.setState({
            show: true
        })
    }
    render() {
        const m = this.state.show ? (
            <Modal>发现我了！我可没在approot下哦，不信f12看下！</Modal>
        ) : null
        return (
            <div className="approot" style={{
                overflow: "hidden"
            }}>

                <button style={
                    styles.button
                } onClick={() => this.handleClick()}>点击我将会在另一个父元素创建Modal</button>
                {m}
            </div>
        )
    }
}

export class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            el: document.querySelector('#modalroot')
        }
    }


    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.state.el
        )
    }

}

const styles = {
    button: {
        height: '20px'
    }
}