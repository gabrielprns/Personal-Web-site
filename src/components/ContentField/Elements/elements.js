export const ContentField = (props)=>{

    return(
      <div className="title-content">
        <h2 className="title-1" >Desenvolvedor e Designer</h2>
        <h1 className="title-2 square-box"> 
        Olá, me chamo Gabriel Pedro, sou desenvolvedor full-stack e web designer.   
        </h1>
        {props.button}
      </div>
    )
}
