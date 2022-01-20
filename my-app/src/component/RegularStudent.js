
import './login.css'
function RegularUser(props){
    const {item}=props
    return(
        <div className='regular-user'>
            <form className="login">
        <div className="screen__content">
          {item.id}
        </div>
        <div className="screen__content">
          {item.name}
        </div>
        <div className="screen__content">
          {item.description}
        </div>
        </form>

        
      </div>


    )

}
export default RegularUser