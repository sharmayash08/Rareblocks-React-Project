const HeroContent = () => {
    return(
        <main>
            <div
                className="hero-content">
                <p>Smart email campaign
                 builder, made for Developers</p>

                 <h2>Turn your visitors into profitable <span>Business</span></h2>

                 <div className="hero-btns">
                    <button className="getmore-btn">Get more customers</button>
                    <button className="transparent-btn"><img src="/Images/Icon.svg" alt="" />Watch Free demo</button>
                 </div>

                 <div className="subtitles">
                    <p>60 Days free trial</p>
                    .
                    <p>No Credit Card Required</p>
                 </div>
            </div>

            <div 
                className="hero-img">
                    <img src="/Images/Hero-Img.svg" alt="" />
            </div>
        </main>
    );
};

export default HeroContent;