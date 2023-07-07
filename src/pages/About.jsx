import Dokumentasi from "../Component/Dokumentasi"
import Sejarah from "../Component/Sejarah"
import SlideShowImage from "../Component/SlideShowImage"

const About = () => {
    return(
        <div>
            <SlideShowImage />
            <Sejarah />
            <Dokumentasi />

        </div>
    )
}

export default About