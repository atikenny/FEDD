import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { showSticky, hideSticky, setScrollTop } from '../actions';

let scrollChangeDeffered;

class Sticky extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll() {
        const isScrollChangedToUp = this.props.scrollTop > document.body.scrollTop && this.props.hidden;
        const isScrollChangedToDown = this.props.scrollTop < document.body.scrollTop && !this.props.hidden;

        clearTimeout(scrollChangeDeffered);

        if (isScrollChangedToUp) {
            scrollChangeDeffered = setTimeout(this.props.hideSticky, 100);
        } else if (isScrollChangedToDown) {
            scrollChangeDeffered = setTimeout(this.props.showSticky, 100);
        }

        this.props.setScrollTop(document.body.scrollTop);
    }

    render() {
        let stickyClassName = `${this.props.className} sticky`;

        if (this.props.hidden) {
            stickyClassName += ' hidden';
        }

        return (
            <div className={stickyClassName}>{this.props.children}</div>
        );
    }
}

Sticky.propTypes = {
    hidden: PropTypes.bool,
    children: PropTypes.node.isRequired
};

const mapStateToProps = (state) => {
    return {
        hidden: state.sticky,
        scrollTop: state.scrollTop
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        hideSticky: () => {
            dispatch(showSticky());
        },
        showSticky: () => {
            dispatch(hideSticky());
        },
        setScrollTop: (scrollTop) => {
            dispatch(setScrollTop(scrollTop));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sticky);