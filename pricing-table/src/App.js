import './App.css';
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  const details=[
    {
      planname:'FREE',
      price:"$0",
      user:['yes','Single User'],
      storage:['yes','5GB Storage'],
      publicproject:['yes',"Unlimitted Public Projects"],
      access:['yes',"Community Access"],
      privateproject:['no',"Unlimitted Private Projects"],
      phonesupport:['no',"Dedicated Phone Support"],
      subdomain:['no',"Free Subdomain"],
      statuseport:['no',"Monthly Status Reports"]
  },
  {
    planname:'PLUS',
    price:"$9",
    user:['yes','50 Users'],
    storage:['yes','5GB Storage'],
    publicproject:['yes',"Unlimitted Public Projects"],
    access:['yes',"Community Access"],
    privateproject:['yes',"Unlimitted Private Projects"],
    phonesupport:['yes',"Dedicated Phone Support"],
    subdomain:['yes',"Free Subdomain"],
    statuseport:['no',"Monthly Status Reports"]
  },
  {
    planname:'PRO',
    price:"$49",
    user:['yes','Unlimitted Users'],
    storage:['yes','150GB Storage'],
    publicproject:['yes',"Unlimitted Public Projects"],
    access:['yes',"Community Access"],
    privateproject:['yes',"Unlimitted Private Projects"],
    phonesupport:['yes',"Dedicated Phone Support"],
    subdomain:['yes',"Free Subdomain"],
    statuseport:['yes',"Monthly Status Reports"]
  }
]
  return (
    <div className="App card-body" >
      {
        details.map((value,index)=>(
           
          <Pricingtable 
          key={index}
          index={index}
          planname={value.planname}
          price={value.price}
          user={value.user}
          storage={value.storage}
          publicproject={value.publicproject}
          access={value.access}
          privateproject={value.privateproject}
          phonesupport={value.phonesupport}
          subdomain={value.subdomain}
          statuseport={value.statuseport}
          
          />
        ))
        
      }
     
     
    </div>
    
  );
}

function Pricingtable(props){
  
  return(
   
    <div className='card'>
      <div className='plan'>
        <h6>{props.planname}</h6>
        <span id="price"><b>{props.price}</b></span><span>/month</span>
      </div>
      <hr />

      <ul className={'class'+props.index}>
      <li className={props.user[0]} id='user'><span class="icon" ></span> {props.user[1]}</li>
      <li className={props.storage[0]}><span class="icon"></span>  {props.storage[1]}</li>
      <li className={props.publicproject[0]}><span class="icon"> </span> {props.publicproject[1]}</li>
      <li className={props.access[0]}><span class="icon"></span> {props.access[1]}</li>
      <li className={props.privateproject[0]}><span class="icon"></span> {props.privateproject[1]} </li>
      <li className={props.phonesupport[0]}><span class="icon"></span> {props.phonesupport[1]}</li>
      <li className={props.subdomain[0]} id="subdomain"><span class="icon"> </span> {props.subdomain[1]}</li>
      <li className={props.statuseport[0]}><span class="icon"></span> {props.statuseport[1]}</li>
      <button type="button" class="btn btn-primary" id='button' >Button</button>
      </ul>
  
    </div>

  )
 
}

export default App;
