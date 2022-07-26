import React, { useState , useEffect} from 'react'
import Header from '../Common/Header'
import {useParams} from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../../style/Details.css'
export default function RestaurantsDetails() {
  //hooks
  const [restaurant,setRestaurant]=useState({})

  let {rName}=useParams()
  //LifeCycle hooks: CompountDidMount and compoutdidUpdate
  useEffect(()=>{
    fetch(`http://localhost:9090/restaurant/details/${rName}`,{method:'GET'})
    .then(response=>response.json())
    .then(data=>setRestaurant(data.data))
  },[])

  const{name, thumb, address, Cuisine, cost}=restaurant
  const cuisineList=!(Cuisine==undefined) && Cuisine.length &&<ul>
                                                                    {Cuisine.map(item=>
                                                                      <li key={item.name}>
                                                                          {item.name}
                                                                      </li>
                                                                      )}

                                                               </ul>

  return (
    <div>
      <Header/>
      <div>
        <img src={thumb} height="400px" width="100%"/>
      </div>
      <div>
        <h2>{name}</h2>
      </div>
      <div>
          <Tabs>
               <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Contact</Tab>
                </TabList>

               <TabPanel>
                     <div className='about'>About the Place</div>
                     <div className='head'>Cuisine</div>
                     {cuisineList}
                     <div className='head'>average Cost</div>
                     <div className='value'>&#8377;{cost}</div>

                </TabPanel>
                <TabPanel>
                      <div className='head'>Phone Number</div>
                      <div >+91-123344564234</div>
                      <div className='head'>{name}</div>
                      <div className='value'>{address}</div>
                </TabPanel>
           </Tabs>
      </div>
    </div>
  )
}
