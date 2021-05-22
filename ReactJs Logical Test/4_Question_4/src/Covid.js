/*
PAKAGE REQUIRED
1  npm install @material-ui/core
2  npm install @material-ui/icons
3   reactstrap

combine command 
npm i @material-ui/core @material-ui/icons

*/

import React,{useEffect,useState} from 'react'
import LiveTvIcon from '@material-ui/icons/LiveTv';
import InfoIcon from '@material-ui/icons/Info';
import { Card, CardHeader, CardBody,
    CardTitle} from 'reactstrap';

import './Covid.css'

function Covid() { //pascal convention

    const [data,setData]=useState([]);

    const getCovidData=async() =>{
        try{
            const res =await fetch('https://api.covid19india.org/data.json')
            // console.log(res);
            const actualData =await res.json();  //convert data into json 
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0])  // 1st data all state
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        getCovidData()//itwill run only once when application loads 
    },[])
    
    return (
        <div>
            <div className="Heading">
            <h1><span><LiveTvIcon fontSize='large'/></span> LIVE</h1>
            <h1>Covid-19 Count</h1>
            </div>
        <div className="mydiv">
            {/* Card 1  */}
      <Card>
        <CardHeader>Country Name</CardHeader>
        <CardBody>
          <CardTitle tag="h5">INDIA</CardTitle>
        </CardBody>
      </Card>
       {/* Card 2  */}
       <Card>
        <CardHeader>Total Recovered</CardHeader>
        <CardBody>
          <CardTitle tag="h5"><InfoIcon fontSize='large' /> {data.recovered}</CardTitle>   {/*{data.recovered}   data[0].recovered*/}
        </CardBody>
      </Card>
       {/* Card 3  */}
       <Card>
        <CardHeader>Total Confirmed</CardHeader>
        <CardBody>
          <CardTitle tag="h5"><InfoIcon fontSize='large' /> {data.confirmed}</CardTitle>
        </CardBody>
      </Card>
       {/* Card 4  */}
       <Card>
        <CardHeader>Total Death</CardHeader>
        <CardBody>
          <CardTitle tag="h5"><InfoIcon fontSize='large' /> {data.deaths}</CardTitle>
        </CardBody>
      </Card>
       {/* Card 5  */}
       <Card>
        <CardHeader>Total Active</CardHeader>
        <CardBody>
          <CardTitle tag="h5"><InfoIcon fontSize='large' /> {data.active}</CardTitle>
        </CardBody>
      </Card>
       {/* Card 6  */}
       <Card>
        <CardHeader>Last Update</CardHeader>
        <CardBody>
          <CardTitle tag="h5"><InfoIcon fontSize='large' /> {data.lastupdatedtime}</CardTitle>
        </CardBody>
      </Card>
      </div>
        </div>
    )
}

export default Covid
