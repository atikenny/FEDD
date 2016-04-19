import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { showSticky, hideSticky } from '../actions';

class Sticky extends Component {
    componentWillMount() {
        this.setState({
            scrollTop: document.body.scrollTop
        });
    }
    componentDidMount() {
        window.addEventListener('scroll', () => {
            window.requestAnimationFrame(this.handleScroll.bind(this));
        });
    }
    handleScroll() {
        if (this.state.scrollTop > document.body.scrollTop) {
            this.props.onScrollUp();
        } else {
            this.props.onScrollDown();
        }

        this.setState({
            scrollTop: document.body.scrollTop
        });
    }
    render() {
        let stickyClassName = 'sticky';

        if (this.props.hidden) {
            stickyClassName += ' hidden';
        }

        return (
            <div className={stickyClassName}>{this.props.children}</div>
        );
    }
};

Sticky.propTypes = {
    hidden: PropTypes.bool,
    children: PropTypes.node.isRequired
};

const mapStateToProps = (state) => {
    return {
        hidden: state.sticky
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onScrollUp: () => {
            dispatch(showSticky());
        },
        onScrollDown: () => {
            dispatch(hideSticky());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sticky);