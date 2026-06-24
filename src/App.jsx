import './App.css'
import Player from "./components/Player.jsx";
import {tracks} from "./data/tracks.js";


function App() {

  return (
    <>
        <div className="band">
            <div className="bandHeader">
                <div className="logoDiv">
                    <img src="../public/lp.png" alt=""/>
                </div>

                <div className="bandInfo">
                    <h1>Linkin Park</h1>
                    <p>
                        Nu Metal Band / Alternative Rock / Rap Rock
                    </p>
                </div>
            </div>

            <div className="bandBiography">
                <h1>Biography:</h1>
                <p>
                    Linkin Park is one of the most successful and influential rock bands in the world, known for blending alternative rock, nu-metal,
                    and electronic elements into a unique sound. The band was formed in the late 1990s and quickly gained global recognition after the release of their debut album
                    Hybrid Theory. Since then, they have become famous for their emotional lyrics, powerful live performances, and numerous international awards and chart-topping songs.
                </p>
            </div>

            <div className="bandMembers">
                <h1>Members: </h1>
                <div className="members">
                    <h2>Chester Bennington (1999–2017)</h2>
                    <p>
                        Chester Bennington was the lead vocalist of Linkin Park. He was known for his powerful and emotional voice, blending melodic singing with intense screaming, which became a defining part of the band’s sound.
                    </p>

                    <h2>Mike Shinoda (1996–present)</h2>
                    <p>
                        Mike Shinoda is a co-founder of Linkin Park. He is a vocalist, rapper, keyboardist, and producer, and played a key role in shaping the band’s hybrid rock and hip-hop style.
                    </p>

                    <h2>Brad Delson (1996–present)</h2>
                    <p>
                        Brad Delson is the lead guitarist of Linkin Park. He helped create many of the band’s signature guitar riffs and is also involved in production work.
                    </p>

                    <h2>Dave "Phoenix" Farrell (1996–1998, 2000–present)</h2>
                    <p>
                        Dave Farrell is the bassist of Linkin Park. He provides the low-end foundation of the band’s sound and returned to the group after a short break.
                    </p>

                    <h2>Joe Hahn (1996–present)</h2>
                    <p>
                        Joe Hahn is the DJ and turntablist of Linkin Park. He is also known for directing many of the band’s music videos and shaping their visual identity.
                    </p>

                    <h2>Rob Bourdon (1996–2017)</h2>
                    <p>
                        Rob Bourdon is the drummer of Linkin Park. His drumming helped define the rhythm and energy of the band’s early sound.
                    </p>

                    <h2>Emily Armstrong (2024–present)</h2>
                    <p>
                        Emily Armstrong is a vocalist in Linkin Park’s newer lineup, bringing a modern rock vocal style to the band’s current sound.
                    </p>

                    <h2>Colin Brittain (2024–present)</h2>
                    <p>
                        Colin Brittain is a drummer and producer who joined Linkin Park in the newer lineup, contributing both live performance and studio work.
                    </p>
                </div>
            </div>

            <div className="bandAlbums">
                <h1>Albums: </h1>
                <div className="albums">
                    <h2>Hybrid Theory (2000)</h2>
                    <p>
                        Debut album that brought Linkin Park worldwide fame. It includes iconic hits such as “In the End”, “Crawling”, and “One Step Closer”. It became one of the best-selling rock albums of all time.
                    </p>

                    <h2>Meteora (2003)</h2>
                    <p>
                        An album that solidified the band’s global success and refined their signature sound. It features major hits like “Numb”, “Somewhere I Belong”, and “Breaking the Habit”.
                    </p>

                    <h2>Minutes to Midnight (2007)</h2>
                    <p>
                        A record where the band began shifting away from nu-metal toward a more alternative rock style. It includes songs such as “What I’ve Done” and “Shadow of the Day”.
                    </p>

                    <h2>A Thousand Suns (2010)</h2>
                    <p>
                        An experimental concept album with strong electronic and atmospheric influences, showcasing a more artistic and unconventional direction.
                    </p>

                    <h2>Living Things (2012)</h2>
                    <p>
                        An album that blends electronic elements with the band’s classic rock sound. It features the hit single “Burn It Down”.
                    </p>

                    <h2>The Hunting Party (2014)</h2>
                    <p>
                        A return to a heavier rock sound, featuring aggressive guitars and high-energy tracks inspired by early rock influences.
                    </p>

                    <h2>One More Light (2017)</h2>
                    <p>
                        A more pop-oriented and emotional album with softer production and deeply personal lyrics.
                    </p>

                    <h2>From Zero (2024)</h2>
                    <p>
                        A new era release marking the band’s return with a refreshed sound that blends classic Linkin Park energy with modern production styles.
                    </p>
                </div>
            </div>

            <Player tracks={tracks} />
        </div>
    </>
  )
}

export default App
