const About = ({image, about}) => {
    return ( 
        <div className="about">
            <aside>
                <img src={image} placeholder="https://via.placeholder.com/215" alt="blog logo" />
                <p>{about}</p>
            </aside>
        </div>
    );
}
 
export default About;