import './About.css';

function About() {
    return (
        <div className="about-page">
                <div className="about-header">
                    <p>Welcome!</p>
                </div>
                <div className='about-grid'>
                    <div className="about-left">
                        <img src="asmaa.svg" alt="Asmaa" className="about-photo" />
                    </div>
                    <div className="about-right">
                        <p>
                        Hi! I'm Asmaa—the voice, author, creative director, and web developer behind this matcha blog. To be honest, I don't even like matcha. I just love to hate, and let’s face it—writing about something you dislike is way more entertaining than raving about something you love. That said, I’ve had good matcha before—so rare, in fact, that I can still recall the exact café: Matcha Cafe Kyoto in Salt Lake City. They even serve it in adorable milk-carton-shaped containers.

<br></br> <br></br>While matcha desserts are hard to mess up, matcha drinks are a completely different story. The quality of matcha, the milk-to-tea ratio, and the texture all have to be just right. That’s why I started this blog: matcha drinks are hit or miss, and I’m here to help you avoid wasting money on mediocre cups. From the good to the downright awful, this blog is your guide to navigating the chaotic world of matcha—and trust me, there are plenty of misses to steer clear of.
                        <br></br> <br></br>
                        My standards are high and as a certified hater, when I say something is good, it's really good. Trust me, if I'm impressed, you will be too. Ultimately, my goal is to spam the site with ads and turn it into a successful venture because writing off matcha as a business expense is the American dream.
                        </p>
                    </div>
                    <div className="rules-section">
                        <h2>Matcha Review Rules</h2>
                        <div className="rules-grid">
                            <div className="rule">
                                <h3>Location</h3>
                                <p>I live in Utah so all cafes reviewed will be in Utah Valley, unless you want to fund me in which case we can work out a deal 😉</p>
                            </div>
                            <div className="rule">
                                <h3>Money</h3>
                                <p>Let's get one thing straight: I'm not about to bankrupt myself trying every single matcha variation a cafe offers.</p>
                            </div>
                            <div className="rule">
                                <h3>Milk</h3>
                                <p>I'm so sorry to my dairy-free bros but all my matcha drinks will be ordered with full fat whole milk because that is where the flavor is. This will also keep my reviews consistent. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-highlights">
                    <div className="highlight">
                        <h3>Audience</h3>
                        <p>I'm not even sure who reads blogs anymore—probably middle-aged, stay at home moms. No shade to them, of course, but I'm hoping some young people still remember how to read. Anyway I'm just going to use this as an excuse if it ever sounds like I'm leaning into millennial humor. Might even throw a minion meme in here somewhere. Stay tuned.</p>
                    </div>
                    <div className="highlight">
                        <h3>Meaning of Matcha</h3>
                        <p>This is where other bloggers would say something corny like: "For me, matcha isn't just a drink— it's self-care. It's the thing that forces me to slow down, appreciate the moment, and live life." But, for me it's for real just a drink. The Texas Tab from Swig holds the same meaning, actually probably more.</p>
                    </div>
                    <div className="highlight">
                        <h3>Spill the Tea</h3>
                        <p>Have a cafe recommendation? A horror matcha story that needs to be heard or maybe you just want to argue with me about my hot takes. Either way, contact me at sample@gmail.com.</p>
                    </div>
                </div>
                <div className="about-mission">
                    <p>Through honest reviews and a love for storytelling, my mission is to guide matcha lovers and skeptics through the challenging quest of discovering truly good matcha.</p>
                </div>
        </div>
    );
}

export default About;