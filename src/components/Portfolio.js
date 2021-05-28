import Cards from './Portfolio/PortfolioCards';

const Portfolio = () => {
    return (
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    <Cards img="assets/img/portfolio/1.jpg" heading="Threads" subheading="Illustration" />
                    <Cards img="assets/img/portfolio/2.jpg" heading="Explore" subheading="Graphic Design" />
                    <Cards img="assets/img/portfolio/3.jpg" heading="Finish" subheading="Identity" />
                    <Cards img="assets/img/portfolio/4.jpg" heading="Lines" subheading="Branding" />
                    <Cards img="assets/img/portfolio/5.jpg" heading="Southwest" subheading="Webdesign" />
                    <Cards img="assets/img/portfolio/6.jpg" heading="Window" subheading="Photography" />
                </div>
            </div>
        </section>
    )
}

export default Portfolio;