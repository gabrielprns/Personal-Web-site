import "./banner.css";

export const Options = (props)=>{
  return(
    <a href={props.href} className="title">
      <h1>{props.h1}</h1>
    </a>
  )
  
}