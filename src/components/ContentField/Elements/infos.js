export const Infos= ()=>{
  const titles = ["const name = 'Gabriel Pedro';", "const titulo = 'Desenvolvedor';", "const idade = 21;" ];
  return(
    
      titles.map((item)=>
      <h3 className='title-photo img-photo'>
      {item}
      </h3>
      )
    
    
    
  )
}