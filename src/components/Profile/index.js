import React, {Component} from 'react';

class Profile extends Component {
    constructor(props) {
        super(props);

        console.log(props)
    }

    render() {
        let name, dob = this.props.data

        return (
            <div>
                <i className={"material-icons"}>face</i>
                <p>{this.key}</p>
                <p>{Date(dob.second)}</p>
            </div>
        );
    }
}

export default Profile;
