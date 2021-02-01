import React, {Component} from 'react';
import feed_data from "../../assets/data/feed_data"
import Feed from "../../components/Feed";

class FbFeed extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const feeds = feed_data

        return (
            <div>
                {feeds.map((item, i) => {
                    return <Feed key={i} data={item} match={this.props.match} />
                })}
            </div>
        );
    }
}

export default FbFeed;
