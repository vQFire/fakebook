import React, {Component} from 'react';
import styles from "./feed.module.scss"
import {Link} from "react-router-dom";

class Feed extends Component {
    constructor(props) {
        super(props);

        this.match = props.match
    }


    render() {
        const feed = this.props.data
        let image = require(`../../assets/images/profiles/${feed.user.profile}`)

        return (
            <div className={styles.feed}>
                <div className={styles.feedUser}>
                    <img src={image.default} alt={`Profile ${feed.user.username}`} />
                    <Link to={`${this.match.url}/${feed.user.username}`}>
                        @{feed.user.username}
                    </Link>
                </div>
                <div className={styles.feedMessage}>
                    <h5>{feed.title}</h5>
                    <p>{feed.message}</p>
                </div>
                <div>
                    {feed.comments.map((comment, i) => {
                        image = require(`../../assets/images/profiles/${comment.user.profile}`)

                        return (
                            <div key={i} className={styles.feedComment}>
                                <div className={styles.feedCommentSpacer} />
                                <div className={styles.feedCommentContent}>
                                    <div className={styles.feedCommentUser}>
                                        <img src={image.default} alt={`Profile ${comment.user.username}`} />
                                        <Link to={`${this.match.url}/${comment.user.username}`}>
                                            @{comment.user.username}
                                        </Link>
                                    </div>
                                    <div className={styles.feedCommentMessage}>
                                        <p>{comment.message}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Feed;
