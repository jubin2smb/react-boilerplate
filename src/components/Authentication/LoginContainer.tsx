import React from 'react';
import { connect } from 'react-redux';
import banner from '../../assets/banner1.jpg'
class LoginContainer extends React.Component {
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <div>
                <h5>
                    LOGIN HERE
                </h5>
            </div>
        )
    }


}

function mapStateToProps(state = {}) {
    return {
    }
}



export default connect(mapStateToProps)(LoginContainer)

