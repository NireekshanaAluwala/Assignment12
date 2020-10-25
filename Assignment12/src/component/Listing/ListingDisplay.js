import React  from 'react';
import {Link} from 'react-router-dom';
import './Listing.css';

const ListingDisplay = (props) => {

    const renderList = ({listdata}) => {
        if(listdata){
            return listdata.map((item) => {
                return(
                    <div className="item" key={item._id}>
                        <div className="row">
                            <div className="col-md-6">
                                <img className="image" src={item.thumb}/>
                            </div>
                            <div className="col-md-6">
                                <div className="hotel_name">
                                    <Link to={`/details/${item._id}`}>{item.name}</Link>
                                </div>
                                <div className="city_name">{item.city_name}</div>
                                <div className="city_name">{item.locality}</div>
                                <div className="city_name">{item.address}</div>
                                <div className="city_name">
                                    <span className="glyphicon glyphicon-glass"></span>
                                    <span className="glyphicon glyphicon-cutlery"></span>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="cuisine_block">Cuisine</div>
                                <div className="cuisine_block">Cost Per Two.</div>
                            </div>
                            <div className="col-sm-9">
                                <div className="cuisine_out">{item.Cuisine[0].name} | {item.Cuisine[1].name}</div>
                                <div className="cuisine_out">Rs. {item.cost}</div>
                            </div>
                        </div>
                    </div>
                   
                )
            })
        }else{
            return(
                <div>
                    <img src="/images/loader.gif"/>
                </div>
            )
        }
    }
    return(
        <div>
            <div className="row">
                
                <div className="col-md-12">
                    {renderList(props)}
                </div>
            </div>
        </div>
    )
}

export default ListingDisplay;