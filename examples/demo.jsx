import React from 'react'
import ReactDOM from 'react-dom'
import DocReady from 'es6-docready'
import Dom from 'es6-dom'
import Tappable from 'tappable'




DocReady(function() {
    const Main = React.createClass({
        propTypes: {}
        , getInitialState() {
            return {
                showed: false
                , closeable: false
            }
        }

        , render() {

            return (
                <div className="main">
                    <a className="hitbtn" onClick={this._onShow}>Click to show</a>
                    <div className={["container", "table", (this.state.showed ? "show" : '')].join(' ')}>
                        <Tappable className="overlay" onTap={this._handleOverlayTouchTap} />
                        <div className="cell">
                            <div className="popup">
                                <p>Hello, it's me</p>
                                <p>I was wondering if after all these years you'd like to meet</p>
                                <p>To go over everything</p>
                                <p>They say that time's supposed to heal ya</p>
                                <p>But I ain't done much healing</p>
                                <span>&lt; click gray area to dismiss &gt;</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        ,  _handleOverlayTouchTap(e) {
            if (this.state.closeable) {
                this._onDismiss()
            }
        }

        , _onShow() {
            setTimeout(function() {this.state.closeable = true;}.bind(this), 250)
            this.setState({ showed: true })
        }

        , _onDismiss() {
            this.setState({ showed: false, closeable: false })
        }
    })





    ReactDOM.render(
        <Main/>
        , Dom.nodeById("page-container"))


})
