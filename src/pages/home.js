import React, {Component} from 'react';
import firebase from "firebase";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            db: firebase.firestore(),
            burrito: undefined
        }

        this.getBurrito()
    }

    getBurrito () {
        const burritoRef = this.state.db.collection("firereact").doc("burrito")

        burritoRef.get()
            .then(doc => {
                if (doc.exists) {
                    this.setState({
                        burrito: doc.data()
                    })
                }
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.isYummy()
    }

    isYummy () {
        return <p>The burrito is {this.state.burrito ? "good" : "bad"}</p>
    }

    render() {
        return (
            <div>
                Hello cono

                { this.isYummy() }
            </div>
        );
    }
}

export default Home;
