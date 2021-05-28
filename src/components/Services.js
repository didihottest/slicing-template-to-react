import ServicesComponent from './Services/ServicesComponent'

const Services = () => {
  return (
    <section className="page-section" id="services">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Services</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
        <div className="row text-center">
          <ServicesComponent title={'E-Commerce'} desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."} />
          <ServicesComponent title={'Responsive Design'} desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."} />
          <ServicesComponent title={'Web Security'} desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'} />
        </div>
      </div>
    </section>
  )
}

export default Services