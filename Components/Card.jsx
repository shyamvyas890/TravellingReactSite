import React from 'react'

export default function Card(props) {

    return (
        <div className="card">
            <img className="pictureOfPlace" src={props.item.imageUrl} alt="card pic" />
            <div className="info">
                <div className="intro">
                    <div className="firstLine">
                        <img className="locationIcon" src="images/locationIcon.png" />
                        <span className="theLocation">{props.item.location}</span>
                        <a target="_blank" className="mapsUrl" href={props.item.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <div className='theTitle'>{props.item.title}</div>
                </div>
                <div className="desc">
                    <p className="dates">{`${props.item.startDate} to ${props.item.endDate}`}</p>
                    <p className="description">{props.item.description}</p>
                </div>
            </div>
            
        </div>
    )
}