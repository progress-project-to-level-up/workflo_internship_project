import React from 'react';
import searchIcon from '../../asset/svg/searchIcon.svg';
import PictureCard1 from "../../asset/svg/picturecard1.png";
import pictureCard2 from "../../asset/svg/picturecard2.png";
import pictureCard3 from "../../asset/svg/peer-pea.png";
import './profileDashboard.css';

function ProfileDashboard() {
    const projectCard = [
        {
            id: 1,
            img: PictureCard1,
            proName: 'Elaxar',
            proTitle: 'Augmented Reality, Tech Art',
            proDesc: `Elaxar is an augmented reality web application that allows user experience art in 'real' or physical world — it imposes digital data onto realistic view.`,
            proRole: `Mobile App Developer, Writer 
          Technical Director(Dev), Researcher`
        },
        {
            id: 2,
            img: pictureCard2,
            proName: 'SheBuilds',
            proTitle: 'SDG - Female Empowerment, Business',
            proDesc: `A social impact movement that aims to empower the girl child. With a variety of products, we are changing the world one girl at a time.`,
            proRole: `Sponsors, Developers,
          Technical people and Role Models.`
        },
        {
            id: 3,
            img: pictureCard3,
            proName: 'Peer To Pea',
            proTitle: 'Blockchain Technology, Finance',
            proDesc: `Leveraging on the power of blockchain, Peer to Pea seeks to demystifies the undetectability in the system. Let’s create a new economic system.`,
            proRole: `Blockchain developers, researchers,
          backend Engineers.. `
        },
        {
            id: 4,
            img: PictureCard1,
            proName: 'Elaxar',
            proTitle: 'Augmented Reality, Tech Art',
            proDesc: `Elaxar is an augmented reality web application that allows user experience art in 'real' or physical world — it imposes digital data onto realistic view.`,
            proRole: `Mobile App Developer, Writer 
          Technical Director(Dev), Researcher`
        },
        {
            id: 5,
            img: pictureCard2,
            proName: 'SheBuilds',
            proTitle: 'SDG - Female Empowerment, Business',
            proDesc: `A social impact movement that aims to empower the girl child. With a variety of products, we are changing the world one girl at a time.`,
            proRole: `Sponsors, Developers,
          Technical people and Role Models.`
        },
        {
            id: 6,
            img: pictureCard3,
            proName: 'Peer To Pea',
            proTitle: 'Blockchain Technology, Finance',
            proDesc: `Leveraging on the power of blockchain, Peer to Pea seeks to demystifies the undetectability in the system. Let’s create a new economic system.`,
            proRole: `Blockchain developers, researchers,
          backend Engineers.. `
        },
        // {
        //     id: 7,
        //     img: pictureCard3,
        //     proName: 'Peer To Pea',
        //     proTitle: 'Blockchain Technology, Finance',
        //     proDesc: `Leveraging on the power of blockchain, Peer to Pea seeks to demystifies the undetectability in the system. Let’s create a new economic system.`,
        //     proRole: `Blockchain developers, researchers,
        //   backend Engineers.. `
        // }
    ];
    return (
        <div className='user-profile'>
            <div className="user-pro-details">
                <div className="user-pro-name">
                    <h3>H1, Al-min</h3>
                </div>
                <div className="user-pro-search">
                    <img src={searchIcon} alt="" />
                    <input type="text" placeholder='Search for my projects' />
                </div>
            </div>

            <div className="project-made">
                <div className="project-joined">
                    <div className="pro-title">
                        <h3>Project you've Joined</h3>
                    </div>
                    <div className="pro-join-list">
                        <div className={projectCard.length > 6 ? "view-pro-join height" : "view-pro-join"}>
                            {
                                projectCard == 0 ? (
                                    <div className="no-join">
                                        <p>You are not yet a collaborator on any project</p>
                                    </div>
                                ) : (
                                    <div className="list-pro">
                                        {
                                            projectCard.map((join, ind) => (
                                                <div key={ind} className='list-project-container'>
                                                    <div className="active-img">
                                                        <img src={join.img} alt="" />
                                                    </div>

                                                    <div className="active-card-container">
                                                        <div className="active-project-summary">
                                                            <div className="active-desc">
                                                                <h3>{join.proName}</h3>
                                                                <h5>{join.proTitle}</h5>
                                                                <p>{join.proDesc}</p>
                                                            </div>
                                                            <div className="active-role">
                                                                <div className="role-need">
                                                                    <h3>Roles needed</h3>
                                                                    <p>
                                                                        {join.proRole}
                                                                    </p>
                                                                </div>
                                                                <div className="role-btn">
                                                                    <button>Bid To Join</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                            }
                        </div>
                        <div className="join-pro-btn">
                            <button>Join a project</button>
                        </div>
                    </div>
                </div>
                <div className="project-created">
                    <div className="pro-title">
                        <h3>Project you've Created</h3>
                    </div>
                    <div className="pro-join-list">
                        <div className="view-pro-join">
                            {
                                projectCard == 0 ? (
                                    <div className="no-join">
                                        <p>You are not yet a creator of any project</p>
                                    </div>
                                ) : (
                                    <div className="list-pro">
                                        {
                                            projectCard.map((join, ind) => (
                                                <div key={ind} className='list-project-container'>
                                                    <div className="active-img">
                                                        <img src={join.img} alt="" />
                                                    </div>

                                                    <div className="active-card-container">
                                                        <div className="active-project-summary">
                                                            <div className="active-desc">
                                                                <h3>{join.proName}</h3>
                                                                <h5>{join.proTitle}</h5>
                                                                <p>{join.proDesc}</p>
                                                            </div>
                                                            <div className="active-role">
                                                                <div className="role-need">
                                                                    <h3>Roles needed</h3>
                                                                    <p>
                                                                        {join.proRole}
                                                                    </p>
                                                                </div>
                                                                <div className="role-btn">
                                                                    <button>Bid To Join</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                            }
                        </div>
                        <div className="join-pro-btn">
                            <button>Create a project</button>
                        </div>
                    </div>
                </div>
                <div className="project-funded">
                    <div className="pro-title">
                        <h3>Project you've Funded</h3>
                    </div>
                    <div className="pro-join-list">
                        <div className="view-pro-join">
                            {
                                projectCard == 0 ? (
                                    <div className="no-join">
                                        <p>You have not sponsored any project</p>
                                    </div>
                                ) : (
                                    <div className="list-pro">
                                        {
                                            projectCard.map((join, ind) => (
                                                <div key={ind} className='list-project-container'>
                                                    <div className="active-img">
                                                        <img src={join.img} alt="" />
                                                    </div>

                                                    <div className="active-card-container">
                                                        <div className="active-project-summary">
                                                            <div className="active-desc">
                                                                <h3>{join.proName}</h3>
                                                                <h5>{join.proTitle}</h5>
                                                                <p>{join.proDesc}</p>
                                                            </div>
                                                            <div className="active-role">
                                                                <div className="role-need">
                                                                    <h3>Roles needed</h3>
                                                                    <p>
                                                                        {join.proRole}
                                                                    </p>
                                                                </div>
                                                                <div className="role-btn">
                                                                    <button>Bid To Join</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                            }
                        </div>
                        <div className="join-pro-btn">
                            <button>Sponsor a project</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="profile-and-projects">
                <button>My Profile</button>
                <button>My Project</button>
            </div>
        </div>
    )
}

export default ProfileDashboard;