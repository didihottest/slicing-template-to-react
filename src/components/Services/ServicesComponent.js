const ServicesComponensts = (props) => {
  return (
    <div class="col-md-4">
      <span class="fa-stack fa-4x">
        <i class="fas fa-circle fa-stack-2x text-primary"></i>
        <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
      </span>
      <h4 class="my-3">{props.title}</h4>
      <p class="text-muted">{props.desc}</p>
    </div>
  )
}

export default ServicesComponensts