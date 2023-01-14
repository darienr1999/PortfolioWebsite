
import Header from './Header';
import Skills from './Skills';
import Divider from './SectionDivider';
import Projects from './Projects';
import ContactMe from './ContactMe';
import AboutMe from './AboutMe';




function MainPage() {
    return (
        <div>
             <Header />
            <AboutMe/>
            <Divider/>
            <Skills/>
            <Divider/>
            <Projects/>
            <Divider/>
            <ContactMe/>
        </div>

    );
}
export default MainPage;