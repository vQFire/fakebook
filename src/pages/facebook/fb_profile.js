import React, {Component} from 'react';
import profile_data from "../../assets/data/profile_data"
import styles from "./facebook_profile.module.scss"

class FbProfile extends Component {
    constructor(props) {
        super(props);

        this.profile = profile_data[props.match.params.profile]
        this.active = undefined
        this.activeTab = undefined
    }

    prepareName () {
        let name = this.profile.personal.name.split(" ")
        name.splice(1, 0, `"${this.profile.personal.username}"`)

        return name.join(" ")
    }

    componentDidMount() {
        const list_item = document.getElementsByClassName(styles.tabsList)[0]
        const html_arr = [...list_item.children]

        const tabs = document.getElementsByClassName(styles.tabsTab)
        this.activeTab = tabs[0]
        this.active = list_item.children[0]
        list_item.children[0].classList.toggle(styles.active)
        tabs[0].classList.toggle(styles.active)

        Array.prototype.forEach.call(list_item.children, item => {
            item.addEventListener('click', () => {
                const index = html_arr.indexOf(item)

                item.classList.toggle(styles.active)
                this.active.classList.toggle(styles.active)
                this.active = item

                tabs[index].classList.toggle(styles.active)
                this.activeTab.classList.toggle(styles.active)
                this.activeTab = tabs[index]
            })
        })
    }

    render() {
        const profile = this.profile
        let image = require(`../../assets/images/profiles/${profile.personal.profile}`)

        const bio = profile.bio

        return (
            <>
                <div className={styles.profilePersonal}>
                    <div className={styles.profilePersonalImage}>
                        <img src={image.default} alt={`${profile.personal.name}`} />
                    </div>
                    <div className={styles.profilePersonalData}>
                        <h2>{this.prepareName()}</h2>
                        <p>{profile.personal.bio}</p>
                    </div>
                </div>
                <div className={styles.tabs}>
                    <ul className={styles.tabsList}>
                        <li>
                            <i className={"material-icons"}>recent_actors</i> BIO
                        </li>
                        <li>
                            <i className={"material-icons"}>supervisor_account</i> Friends
                        </li>
                        <li>
                            <i className={"material-icons"}>leaderboard</i> Favorites
                        </li>
                    </ul>
                    <div className={styles.tabsTab}>
                        {bio.map((item, i) => {
                            return <p><i className={"material-icons"}>{item.icon}</i> {item.text}</p>
                        })}
                    </div>
                    <div className={styles.tabsTab}>2</div>
                    <div className={styles.tabsTab}>3</div>
                </div>
            </>
        );
    }
}

export default FbProfile;
