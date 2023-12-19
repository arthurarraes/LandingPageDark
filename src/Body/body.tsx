import styles from './body.module.css'
import introPhoto from '../assets/images/illustration-intro.png'
import icon1 from '../assets/images/icon-access-anywhere.svg'
import icon2 from '../assets/images/icon-security.svg'
import icon3 from '../assets/images/icon-collaboration.svg'
import icon4 from '../assets/images/icon-any-file.svg'
import productivePhoto from '../assets/images/illustration-stay-productive.png'
import personPhoto from '../assets/images/profile-1.jpg'

export function Body(){
    return(
        <div className={styles.body}>
            <img src={introPhoto} alt="" className={styles.introPhoto}/>
            <div className={styles.titulo}>
                <h1>All your files in one secure location,</h1>
                <h1>acessible anywhere</h1>
            </div>
            <div className={styles.subtitulo}>
                <h2>Fylo stores all your most important files in one secure location.</h2>
                <h2>Acess them wherever you need, share and collaborate with</h2>
                <h2>friends, family and co-workers.</h2>
                <button className={styles.getStarted}>Get Started</button>
            </div>
            <div className={styles.benefits}>
                <div className={styles.bnf}>
                    <img src={icon1} alt="" />
                    <h1>Acess your file anywhere</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed dictum sem. Aliquam semper, justo vel viverra rutrum, nulla ex faucibus ligula, a pretium tellus sapien non massa. </h2>
                </div>
                <div className={styles.bnf}>
                    <img src={icon2} alt="" />
                    <h1>Security you can trust</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed dictum sem. Aliquam semper, justo vel viverra rutrum, nulla ex faucibus ligula, a pretium tellus sapien non massa.</h2>
                </div>
                <div className={styles.bnf}>
                    <img src={icon3} alt="" />
                    <h1>Real-time collaboration</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed dictum sem. Aliquam semper, justo vel viverra rutrum, nulla ex faucibus ligula, a pretium tellus sapien non massa.</h2>
                </div>
                <div className={styles.bnf}>
                        <img src={icon4} alt="" />
                    <h1>Store any type of file</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed dictum sem. Aliquam semper, justo vel viverra rutrum, nulla ex faucibus ligula, a pretium tellus sapien non massa.</h2>
                </div>
            </div>
            <div className={styles.productive}>
                <img src={productivePhoto} alt="" />
                <div className={styles.productiveText}>
                    <h1>Stay Productive, wherever you are</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed dictum sem. Aliquam semper, justo vel viverra rutrum, nulla ex faucibus ligula, a pretium tellus sapien non massa.</h2>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed dictum sem. Aliquam semper, justo vel viverra rutrum, nulla ex faucibus ligula, a pretium tellus sapien non massa.</h2>
                    <a href="">See how Fylo works</a>
                </div>
            </div>
            <div className={styles.rate}>
                <div className={styles.aval}>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed dictum sem. Aliquam semper, justo vel viverra rutrum, nulla ex faucibus ligula, a pretium tellus sapien non massa.</h1>
                    <div className={styles.ratePerson}>
                        <img src={personPhoto} alt="" />
                        <div className={styles.ratePersonInfo}>
                            <h1>Satish Patel</h1>
                            <h2>Founder & CEO</h2>
                        </div>
                    </div>
                </div>
                <div className={styles.aval}>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed dictum sem. Aliquam semper, justo vel viverra rutrum, nulla ex faucibus ligula, a pretium tellus sapien non massa.</h1>
                    <div className={styles.ratePerson}>
                        <img src={personPhoto} alt="" />
                        <div className={styles.ratePersonInfo}>
                            <h1>Satish Patel</h1>
                            <h2>Founder & CEO</h2>
                        </div>
                    </div>
                </div>
                <div className={styles.aval}>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed dictum sem. Aliquam semper, justo vel viverra rutrum, nulla ex faucibus ligula, a pretium tellus sapien non massa.</h1>
                    <div className={styles.ratePerson}>
                        <img src={personPhoto} alt="" />
                        <div className={styles.ratePersonInfo}>
                            <h1>Satish Patel</h1>
                            <h2>Founder & CEO</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}