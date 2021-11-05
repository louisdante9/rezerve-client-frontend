import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getProfile } from '../../actions/user';
import './style.css'

const AccountDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const { profile, error, } = useSelector((state) => state.user);
  const {
    user: { id,  }, user,
  } = useSelector((state) => state.setCurrentUser);
  console.log(user, 'user')
  useEffect(() => {
    const fetchUserProfile = () => {
      dispatch(getProfile(id));
    };
    fetchUserProfile();
  }, [dispatch, id]);
  const handleSumbit = () => {
    navigate('/app/account/update')
  }
console.log(profile, 'profile')
  return (
    <div className="container">
      <div className="row justify-content-center">
        {profile ? (
          <div className="col-lg-7 col-md-9">
              <div className="row mb-8">
                {/* <div className="col-12"> */}
                  <div className="col-lg-12 mb-6 d-flex justify-content-between">
                    <div className="col-9">
                      <h4 className="mb-0">Your profile setting</h4>
                    </div>
                    <div
                      className="editBtn"
                      onClick={handleSumbit}
                    >
                      Edit
                    </div>
                  </div>
                {/* </div> */}
                <div className="col-lg-12 mb-1 d-flex justify-content-between">
                  <h5 className="col-9">Fullname</h5>
                  <p style={{fontSize: '12px'}}>{profile.firstname} {profile.lastname}</p>
                </div>
                <div className="col-lg-12 mb-1 d-flex justify-content-between">
                  <h5 className="col-9">Phone Number</h5>
                  <p style={{fontSize: '12px'}}>{profile.phone}</p>
                </div>

                <div className="col-lg-12 mb-1 d-flex justify-content-between">
                  <h5 className="col-9">Email</h5>
                  <p style={{fontSize: '12px'}}>{profile.email}</p>
                </div>
                <div className="col-lg-12 mb-1 d-flex justify-content-between">
                  <h5 className="col-9">Addresss</h5>
                  <p style={{fontSize: '12px'}}>{profile.address}</p>
                </div>
                
                <div className="col-lg-12 mb-1 d-flex justify-content-between">
                <h5 className="col-9">Date of Birth</h5>
                  <p style={{fontSize: '12px'}}>{profile.dob}</p>
                </div>

                <div className="col-lg-12 mb-1 d-flex justify-content-between">
                <h5 className="col-9">City</h5>
                  <p style={{fontSize: '12px'}}>{profile.city}</p>
                </div>
                <div className="col-lg-12 mb-1 d-flex justify-content-between">
                <h5 className="col-9">State</h5>
                  <p style={{fontSize: '12px'}}>{profile.state}</p>
                </div>

                <div className="col-lg-12 mb-1 d-flex justify-content-between">
                <h5 className="col-9">Postal Code</h5>
                  <p style={{fontSize: '12px'}}>{profile.postCode}</p>
                </div>

                <div className="col-lg-12 mb-1 d-flex justify-content-between">
                <h5 className="col-9"> Country</h5>
                  <p style={{fontSize: '12px'}}>{profile.country}</p>
                </div>

                <div className="col-lg-12 mb-1 d-flex justify-content-between">
                <h5 className="col-9"> Place of Birth</h5>
                  <p style={{fontSize: '12px'}}>{profile.placeOfBirth}</p>
                </div>

    {
      profile.role!=="user"  &&(
        <>
 <div className="col-lg-12 mb-1 d-flex justify-content-between">
                <h5 className="col-9"> National Identification Number</h5>
                  <p style={{fontSize: '12px'}}>{profile.nin}</p>
                </div>
 <div className="col-lg-12 mb-1 d-flex justify-content-between">
                <h5 className="col-9"> Tax ID</h5>
                  <p style={{fontSize: '12px'}}>{profile.tin}</p>
                </div>
 <div className="col-lg-12 mb-1 d-flex justify-content-between">
                <h5 className="col-9"> Bank </h5>
                  <p style={{fontSize: '12px'}}>{profile.bank}</p>
                </div>
 <div className="col-lg-12 mb-1 d-flex justify-content-between">
                <h5 className="col-9"> Account Number</h5>
                  <p style={{fontSize: '12px'}}>{profile.accountNumber}</p>
                </div>
 <div className="col-lg-12 mb-1 d-flex justify-content-between">
                <h5 className="col-9"> Account Name</h5>
                  <p style={{fontSize: '12px'}}>{profile.accountName}</p>
                </div>

        </>
      )
    }
              </div>
          </div>) : (<div>{error}</div>)}
      </div>
    </div>
  )
}

export default AccountDetails
