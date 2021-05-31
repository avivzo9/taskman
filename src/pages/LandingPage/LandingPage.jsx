import './LandingPage.scss'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updateBackground } from '../../store/actions/boardActions'

export function LandingPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(updateBackground(false))
    })

    return (
        <section className="sub-container landing-page-container">
            <div className="landing-page-section">
                <div>
                    <h3>T<span>a</span>skm<span>a</span>n</h3>
                    <p>Join now<span>.</span></p>
                </div>
                <div className="flex">
                    <Link to="/boards" className="link">Try it now!</Link>
                </div>
                <img src="https://cdn.dribbble.com/users/2851002/screenshots/9667092/media/09648e273e248e7cfd22ade4010b2a6e.gif" alt="" />
            </div>
            <div className="landing-page-section">
                <img src="https://cdn.dribbble.com/users/2851002/screenshots/9073688/media/bb69af3d8f2404f4cfcc7cecdc558be6.gif" alt="" />
                <div>
                    <h3>Keep Track Of Your Team</h3>
                    <p>Taskman has statistics panel to see your team progress.
                    Keep track of your team's assignment and completion of tasks easily!</p>
                </div>
            </div>
            <div className="landing-page-section">
                <div>
                    <h3>Live Updates & Push Notifications</h3>
                    <p>Always be up-to-date with recent activities in your project.
                    our unique system of real-time push notifications will make sure
                    you always know all about the recent developments.</p>
                </div>
                <img src="https://cdn.dribbble.com/users/2851002/screenshots/7736965/media/e08e0676dd54ae8715c2d72bbdd51eb2.gif" alt="" />
            </div>
            {/* <img src="https://cdn.dribbble.com/users/2851002/screenshots/9689190/media/c119e428ff356a4146c7c9d58f5c6e3f.gif" alt="" /> */}
        </section>
    )
}