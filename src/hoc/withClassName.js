import React, {Component} from 'react';

// const withClassName = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props}/>
//         </div>
//     );
// };

const withClassName = (WrappedComponent, className) => {
    const WithClassName = class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponent ref={this.props.forwardRef} {...this.props}/>
                </div>
            );
        }
    };

    return React.forwardRef((props, ref) => {
        return <WithClassName {...props} forwardRef={ref}/>
    })
};

export default withClassName;