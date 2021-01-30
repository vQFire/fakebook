import React, {Component} from 'react';
import firebase from "firebase";
import Profile from "../../components/Profile";

class FbProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            profiles: undefined
        }

        this.getProfiles()
    }

    getProfiles() {
        const db = firebase.firestore().collection("profiles")

        const profiles = {}

        db.get()
            .then(snap => {
                snap.forEach(doc => {
                    profiles[doc.id] = doc.data()
                })

                this.setState({
                    profiles
                })
            })
    }

    render() {
        const user_profiles = this.state.profiles

        return (
            <div>
                {user_profiles === undefined ? "Loading the profiles..." :
                    Object.keys(user_profiles).map(key => {
                        return <Profile key={key.toString()} data={user_profiles[key]} />
                    })
                }
            </div>
        );
    }
}

export default FbProfile;
