import ServicesComponent from './Services/ServicesComponent'

const Services = () => {
  return (
    <section class="page-section" id="services">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">Services</h2>
          <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
        <div class="row text-center">
          <ServicesComponent title={'E-Commerce'} desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."} />
          <ServicesComponent title={'Responsive Design'} desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."} />
          <ServicesComponent title={'Web Security'} desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'} />
        </div>
      </div>
    </section>
  )
}

export default Services