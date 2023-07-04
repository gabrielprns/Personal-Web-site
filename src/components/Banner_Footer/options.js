export const Options = ()=>{
  const options = ['Home', 'Portfolio', 'Github', 'Linkedin']
  const links = ['/Portfolio_React', '/portfolio','https://github.com/gabrielprns','https://www.linkedin.com/in/gabriel-pedro-8b08ab1a2/']
  
  
  return(
    options.map((item,link)=>
      <a href={links[link]} className="title">
        <h1>{item}</h1>
      </a>
      )
    )
  
}