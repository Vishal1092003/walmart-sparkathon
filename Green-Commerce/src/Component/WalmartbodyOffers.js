import React from 'react';
import deals from '../assets/deals.png'
import walmartshopdeals from "../assets/walmartshopdeals.png";
import dreamroom from "../assets/dreamroom.png"
import { Link } from 'react-router-dom';

export default function WalmartbodyOffers() {
    return (
        <div style={{ padding: 15,backgroundImage:"white" }}>
        <Link>
                <img
                    src={deals}
                    alt="Walmart Deals"
                    style={{
                        width: '100%',
                        maxWidth: 1500,    // cap the width if you like
                        borderRadius: 8,   // match your card corners
                        display: 'block',
                        // margin: '0 auto'
                    }}
                />
        </Link>
            <Link>
                <img
                    src={walmartshopdeals}
                    alt=" Deals"
                    style={{
                        width: '100%',
                        maxWidth: 1500,    // cap the width if you like
                        borderRadius: 8,   // match your card corners
                        display: 'block',
                        // margin: '0 auto'
                    }}
                />
            </Link>
            <Link>
                <img
                    src={dreamroom}
                    alt="Deals"
                    style={{
                        width: '100%',
                        maxWidth: 1500,    // cap the width if you like
                        borderRadius: 8,   // match your card corners
                        display: 'block',
                        // margin: '0 auto'
                    }}
                />
            </Link>
            
        </div>
    );
}
