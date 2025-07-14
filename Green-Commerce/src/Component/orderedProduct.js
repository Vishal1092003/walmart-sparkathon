// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaBoxOpen, FaStar, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";
// import styled from "styled-components";
// const IMAGE_BASE = 'http://localhost:8080/uploads';

// const Card = styled.div`
//   display: flex;
//   align-items: flex-start;
//   gap: 24px;
//   background: #ffffff;
//   border-radius: 16px;
//   box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
//   padding: 24px;
//   max-width: 900px;
//   margin: 24px auto;
// `;

// const ImageWrapper = styled.div`
//   flex-shrink: 0;
//   img {
//     width: 140px;
//     height: 140px;
//     object-fit: cover;
//     border-radius: 12px;
//     border: 1px solid #e8ece7;
//     background: #f9faf8;
//   }
// `;

// const Info = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
// `;

// const TitleRow = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 8px;

//   h3 {
//     margin: 0;
//     font-size: 20px;
//     font-weight: 700;
//     color: #26323a;
//   }

//   .badge {
//     display: flex;
//     align-items: center;
//     gap: 4px;
//     background: #e0faea;
//     color: #28a94a;
//     font-size: 12px;
//     font-weight: 600;
//     border-radius: 12px;
//     padding: 4px 8px;
//   }
// `;

// const Meta = styled.div`
//   font-size: 14px;
//   color: #576178;
//   display: flex;
//   align-items: center;
//   gap: 6px;

//   b {
//     font-weight: 600;
//     color: #234;
//   }
// `;

// const Details = styled.div`
//   display: flex;
//   gap: 12px;
//   font-size: 14px;
//   color: #7c878c;

//   span {
//     b {
//       color: #234;
//     }
//   }
// `;

// const PriceRow = styled.div`
//   display: flex;
//   align-items: baseline;
//   gap: 4px;
//   margin-top: 4px;

//   .label {
//     font-size: 15px;
//     color: #3d464f;
//     font-weight: 500;
//   }

//   .price {
//     font-size: 18px;
//     font-weight: 700;
//     color: #178c5a;
//   }
// `;

// const Stars = styled.div`
//   display: flex;
//   gap: 2px;
//   margin-top: 4px;
//   svg {
//     font-size: 16px;
//     color: #f5c244;
//   }
// `;

// const Actions = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 12px;
//   min-width: 180px;
// `;

// const Button = styled.button`
//   padding: 10px;
//   border: none;
//   border-radius: 8px;
//   font-size: 15px;
//   font-weight: 600;
//   cursor: pointer;
//   transition: background 0.2s, transform 0.1s;

//   &:hover:not(:disabled) {
//     transform: translateY(-1px);
//   }

//   &:active:not(:disabled) {
//     transform: translateY(0);
//   }

//   &.secondary {
//     background: #ffc278;
//     color: #232d2c;
//     box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
//   }

//   &.primary {
//     background: #61c13d;
//     color: #ffffff;
//     box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
//   }

//   &:disabled {
//     opacity: 0.6;
//     cursor: not-allowed;
//   }
// `;

// const OkText = styled.div`
//   margin-top: 8px;
//   font-size: 13px;
//   color: #348972;

//   a {
//     color: #218ee4;
//     text-decoration: underline;
//     cursor: pointer;
//   }
// `;

// const OrderedProduct = ({
//   image,
//   title,
//   price,
//   rating = 4,
//   badge_id,
//   totalAmount,
//   quantity,
//   deliveryDate,
//   onReturn,
//   onReview,
//   onReturnBox,
// }) => {
//   const filename = image?.split(/[/\\]/).pop() || "";
 
//   const src = `${IMAGE_BASE}/${filename}`;
//   const [returned, setReturned] = useState(false);
//   const eco_friendly = badge_id > 0;

//   const handleReturnBox = () => {
//     setReturned(true);
//     onReturnBox && onReturnBox();
//   };

//   return (
//     <Card>
//       <ImageWrapper>
//         <img src={image || src} alt={title} 
//           onError={e => (e.currentTarget.src = src)}
//         />
//       </ImageWrapper>
//       <Info>
//         <TitleRow>
//           <h3>{title}</h3>
//           {eco_friendly && (
//             <span className="badge">
//               <FaCheckCircle /> Eco-Friendly
//             </span>
//           )}
//         </TitleRow>
//         <Meta>
//           <FaCalendarAlt /> Delivery: <b>{deliveryDate} 2025</b>
//         </Meta>
//         <Details>
//           <span>Qty: <b>{quantity}</b></span>
//           <span>Total Paid: <b>₹{totalAmount}</b></span>
//         </Details>
//         <PriceRow>
//           <span className="label">Unit Price:</span>
//           <span className="price">₹{price}</span>
//         </PriceRow>
//         <Stars>
//           {[...Array(rating)].map((_, i) => <FaStar key={i} />)}
//         </Stars>
//       </Info>
//       <Actions>
//         <Button className="secondary" onClick={onReturn}>Return or Replace items</Button>
//         <Button className="secondary" onClick={onReview}>Write a product review</Button>
//         <Button className="primary" onClick={handleReturnBox} disabled={returned}>
//           <FaBoxOpen style={{ marginRight: 6 }} /> Return the Box
//         </Button>
//         {returned && (
//           <OkText>
//             *We will let you know when the threshold of your area is reached. <br />
//             <Link to="/education">Learn more</Link>
//           </OkText>
//         )}
//       </Actions>
//     </Card>
//   );
// };

// export default OrderedProduct;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBoxOpen, FaStar, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";
import styled from "styled-components";

const IMAGE_BASE = 'http://localhost:8080/uploads';

const Card = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 24px;
  max-width: 900px;
  margin: 24px auto;
`;

const ImageWrapper = styled.div`
  flex-shrink: 0;
  img {
    width: 140px;
    height: 140px;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    background: #f3f3f3;
  }
`;

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  h3 {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    color: #004aad; /* Walmart blue */
  }

  .badge {
    display: flex;
    align-items: center;
    gap: 4px;
    background: #fff4cc; /* light yellow */
    color: #004aad;
    font-size: 12px;
    font-weight: 600;
    border-radius: 12px;
    padding: 4px 8px;
  }
`;

const Meta = styled.div`
  font-size: 14px;
  color: #555;
  display: flex;
  align-items: center;
  gap: 6px;

  b {
    font-weight: 600;
    color: #26323a;
  }
`;

const Details = styled.div`
  display: flex;
  gap: 12px;
  font-size: 14px;
  color: #555;

  span {
    b {
      color: #26323a;
    }
  }
`;

const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin-top: 4px;

  .label {
    font-size: 15px;
    color: #26323a;
    font-weight: 500;
  }

  .price {
    font-size: 18px;
    font-weight: 700;
    color: #0071ce; /* deeper Walmart blue */
  }
`;

const Stars = styled.div`
  display: flex;
  gap: 2px;
  margin-top: 4px;
  svg {
    font-size: 16px;
    color: #ffc220; /* Walmart yellow */
  }
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 180px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
  }
  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &.secondary {
    background: #ffc220; /* Walmart yellow */
    color: #004aad;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  }

  &.primary {
    background: #0071ce; /* Walmart blue */
    color: #fff;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const OkText = styled.div`
  margin-top: 8px;
  font-size: 13px;
  color: #0071ce;
  a {
    color: #004aad;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const OrderedProduct = ({
  image,
  title,
  price,
  rating = 4,
  badge_id,
  totalAmount,
  quantity,
  deliveryDate,
  onReturn,
  onReview,
  onReturnBox,
}) => {
  const filename = image?.split(/[/\\]/).pop() || "";
  const src = `${IMAGE_BASE}/${filename}`;
  const [returned, setReturned] = useState(false);
  const eco_friendly = badge_id > 0;

  const handleReturnBox = () => {
    setReturned(true);
    onReturnBox && onReturnBox();
  };

  return (
    <Card>
      <ImageWrapper>
        <img
          src={image || src}
          alt={title}
          onError={e => (e.currentTarget.src = src)}
        />
      </ImageWrapper>
      <Info>
        <TitleRow>
          <h3>{title}</h3>
          {eco_friendly && (
            <span className="badge">
              <FaCheckCircle /> Eco-Friendly
            </span>
          )}
        </TitleRow>
        <Meta>
          <FaCalendarAlt /> Delivery: <b>{deliveryDate}</b>
        </Meta>
        <Details>
          <span>Qty: <b>{quantity}</b></span>
          <span>Total Paid: <b>₹{totalAmount}</b></span>
        </Details>
        <PriceRow>
          <span className="label">Unit Price:</span>
          <span className="price">₹{price}</span>
        </PriceRow>
        <Stars>
          {[...Array(rating)].map((_, i) => <FaStar key={i} />)}
        </Stars>
      </Info>
      <Actions>
        <Button className="secondary" onClick={onReturn}>
          Return or Replace items
        </Button>
        <Button className="secondary" onClick={onReview}>
          Write a product review
        </Button>
        <Button
          className="primary"
          onClick={handleReturnBox}
          disabled={returned}
        >
          <FaBoxOpen style={{ marginRight: 6 }} /> Return the Box
        </Button>
        {returned && (
          <OkText>
            *We’ll let you know when pickup is available.{" "}
            <Link to="/education">Learn more</Link>
          </OkText>
        )}
      </Actions>
    </Card>
  );
};

export default OrderedProduct;
