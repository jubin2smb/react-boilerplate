import React from 'react';
import { connect } from 'react-redux';
class SignupContainer extends React.Component {
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <div>
                <h5>
                    REGISTER
                </h5>
            </div>
        )
    }


}

function mapStateToProps(state = {}) {
    return {
    }
}



export default connect(mapStateToProps)(SignupContainer)

