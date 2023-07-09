import Dokumentasi from "../Component/Dokumentasi"
import ScrollTop from "../Component/ScrollTop"
import Sejarah from "../Component/Sejarah"
import SlideShowImage from "../Component/SlideShowImage"

const About = () => {
    return(
        <div className="bg-slate-100">
            <SlideShowImage />
            <div>
                <Sejarah />
                <Dokumentasi />
            </div>
            <ScrollTop />

        </div>
    )
}

export default About