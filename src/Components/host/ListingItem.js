import React, { useState } from "react"
import Select from "react-select";
import NumberInput from "../commons/numberInput";
import CheckBox from "../commons/checkbox";
import { selectStyle } from "./styles";

// import {
//   singleListing,
//   // getAllAvailableBookingDate
// } from "../../actions";

function ListingItem({ item, itemTitle, title, subTitle, type, option }) {
  const [toggle, setToggle] = useState(false);

  const handleEditToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className='card-body p-4'>
      <div className='d-flex justify-content-between align-items-center'>
        <h5 className='mb-2'>{title}</h5>
        <div
          className={`editBtn ${toggle && "toggle"}`}
          onClick={handleEditToggle}>
          {!toggle ? "Edit" : "X"}
        </div>
      </div>
      {!toggle ? (
        <p className='mb-2'>
          {itemTitle && `${itemTitle}: `}
          {item}
        </p>
      ) : (
        <div className='card mb-4'>
          <div className='card-body p-4'>
            <div className='d-flex justify-content-between align-items-top'>
              <div>
                {/* <h5 className='mb-0'>Location</h5> */}
                <p style={{ fontSize: "14px" }}>{subTitle}</p>
              </div>
            </div>
            {type === "dropdown" ? (
              <div className='col-12'>
                <div className='mb-3'>
                  <Select
                    placeholder={<div>Property Type</div>}
                    menuColor='#495057'
                    styles={selectStyle}
                    // onBlur={() => conso}
                    onChange={(opt, e) => {
                      console.log(opt, "opt");
                      //   setFieldValue("propertyType", opt.value);
                    }}
                    options={option}
                  />
                </div>
                {/* {errors.propertyType && (
                  <small className='errors'>{errors.propertyType}</small>
                )} */}
              </div>
            ) : type === "number" ? (
              <NumberInput
                num={item}
                label='noOfguest'
                title={itemTitle}
                // updater={setFieldValue}
              />
            ) : (
              <div className='mb-3 col-12'>
                <input
                  type='text'
                  name='name'
                  className='form-control'
                  id='reviewname'
                  aria-describedby='reviewname'
                  placeholder='John Deo'
                  required=''
                />
              </div>
            )}
            <div className='d-flex justify-content-between align-items-top'>
              <div onClick={handleEditToggle}>Cancel</div>
              <div>Save</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListingItem;
