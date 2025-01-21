import './Home.css';

function Home() {
    return (
        <div className="home-page">
            <div className="motto-container">
                <p className="motto">Hot Takes, Iced Matcha</p>
            </div>
            <div className="content-container">
                <div class="left-column">
                    <h2 class="featured-title">Featured Posts</h2>
                    <div class="post">
                        <a href="*.html" class="clickable">
                        <img src="glass_half_empty.jpg" alt="half-empty matcha cup" />
                        <h4>If I were a man, punches would've been thrown</h4>
                        <p class="date">Jan 18, 2025</p>
                        <p class="hook"><i>Are we deaduzz?</i> This was blatant disrespect I wouldn't even serve my enemies. I stared at the half-empty cup, questioning if heaven was worth it or if I should just <strong>...</strong></p>
                        </a>
                    </div>
                    <div class="post">
                        <a href="*.html" class="clickable">
                        <img src="milk_or_matcha.jpg" alt="milkiest matcha cup" />
                        <h4>Matcha flavored milk or milk flavored matcha?</h4>
                        <p class="date">Jan 19, 2025</p>
                        <p class="hook">Do I even have to say anything? The color of it speaks a thousand words. Was this supposed to be matcha or just milk with a hint of regret? An identity crisis in a cup <strong>...</strong></p>
                        </a>
                    </div>
                </div>
                <div class="main-column">
                    <a href="*.html" class="clickable">
                    <h2>Two Sips, unlimited regrets: destined for the drain</h2>
                    <h3>Jan 18, 2025</h3>
                    <p> <img src="beanys.jpg" alt="A cup of horror matcha" class="right-image" />
                        <span class="drop-cap">T</span>he barista smiled softly as she handed me my drink through my car window. <br></br>
<blockquote><span class="quote">"Have a nice day!" she exclaimed. </span></blockquote>
I nearly <em>choked and died</em> on the drive back home. The first sip of pure unmixed matcha residue clung to my tongue tightly like a mother hugging her soldier son one last time before sending him off to die for oil and profits. The earthy bitterness hit me like a betrayal. <br></br><br></br>Simultaneously, it tasted sweet—not sweet like the warm comfort of a lover's embrace, but artificial, radioactive, chemical sweet, like it was engineered in a lab to defy nature—the experience truly left me wondering if I had just paid to punish myself, or <strong><span class="quote">...</span></strong></p>
                    </a>
                </div>
                <div class="right-column">
                    <h2>Hot Takes</h2>
                    <div class="opinions">
                    <p></p><br></br>
                    <p><mark><strong>Lactose Intolerance</strong></mark></p>
                    <p>I don't believe in it. People can be divided into 2 categories: <br></br>1. Those who are strong <br></br>2. Those who are weak. <br></br>Lactose intolerant people belong in the latter group.</p>
                    </div>
                    <div class="opinions">
                    <p></p><br></br>
                    <p><mark><strong>Matcha</strong></mark></p>
                    <p>Most people say they don't like it because most matcha IS bad. Cafes want to look like they're trendy or offer a wide variety, but they don't know how to do it well 99% of the time.</p> 
                    </div>
                    <div class="opinions">
                    <p></p><br></br>
                    <p><mark><strong>Tea</strong></mark></p>
                    <p>Going out to buy tea (w/o boba) is like taking a $5 bill and lighting it on fire. <br></br>Hot water and some leaves. <br></br>You can make that at home. <br></br> I believe in you.<br></br> Dattebayo! ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧</p> 
                    </div>
                </div>
                <div class="bottom-column">
                    <img src="plato.jfif" alt="Plato" class="plato" />
                    <h3>"No one is more hated than he who speaks the truth."</h3>
                    <p>- Plato</p>
                </div>
            </div>
        </div>
    );
}

export default Home;