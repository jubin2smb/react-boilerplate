import React from 'react';
import { connect } from 'react-redux';
import banner from '../../assets/banner1.jpg'
class Dashboardcontainer extends React.Component {
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <div>
                <h5>
                    
                </h5>
                <img src = {banner} style = {{   backgroundPosition: 'center',  backgroundSize: 'cover', height: '100%', width: '100%'}}/>
            </div>
        )
    }


}

function mapStateToProps(state = {}) {
    return {
    }
}



export default connect(mapStateToProps)(Dashboardcontainer)

