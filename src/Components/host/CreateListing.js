import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"

import swal from 'sweetalert'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import { AiOutlineMinusCircle } from "react-icons/ai";
import { BsCloudUpload } from "react-icons/bs";

import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import axios from 'axios';
import Geocode from "react-geocode";
import ReactDependentScript from 'react-dependent-script';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import { createProperty } from '../../actions'
import { selectStyle } from './styles'
import { privacyType, propertyType, propertyTypeGroup } from '../../utils';
import CheckBox from '../commons/checkbox'
import NumberInput from '../commons/numberInput'
import SectionTitle from '../commons/SectionTitle'

const CreateListing = () => {

    Geocode.setLanguage("en");
    Geocode.setApiKey("AIzaSyD093gX7zynJ6NTLc5u0tassLDvgkgrUZo");
    Geocode.setRegion("ng");
    Geocode.setLocationType("ROOFTOP");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const textInput = useRef(null);
    const [addr, setAddr] = useState('')
    const [city, setCity] = useState('')
    const [stateLocale, setStateLocale] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [country, setCountry] = useState('')
    const [lng, setLng] = useState('')
    const [lat, setLat] = useState('');
    const [noOfguest, setNoOfGuest] = useState(0)
    const [noOfRooms, setNoOfRooms] = useState(0)
    const [noOfBaths, setNoOfBaths] = useState(0)
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState('');
    const [files, setFiles] = useState([]);
    const { user } = useSelector((state) => state.setCurrentUser)

    const handleOnChange = address => {
        setAddr(address);
    };

    const handleSelect = address => {
        setAddr(address);
        geocodeByAddress(address)
            .then(results => {
                setAddr(`${results[0].address_components[0]['long_name']} ${results[0].address_components[1]['long_name']}`)
                setCity(results[0].address_components[2]['long_name'])
                setStateLocale(results[0].address_components[5]['long_name'])
                setCountry(results[0].address_components[6]['long_name'])
                setZipCode(results[0].address_components[7]['long_name'])
                return getLatLng(results[0])
            })
            .then(latLng => {
                setLat(latLng.lat)
                setLng(latLng.lng)
            })
            .catch(error => setErrorMsg(error));
    };


    const getUploadParams = ({ file, meta }) => {
        const body = new FormData();
        body.append("file", file);
        body.append("upload_preset", 'st4gan5t');
        return { url: 'https://api.cloudinary.com/v1_1/drhvgijzb/image/upload', body }
    }

    // called every time a file's `status` changes
    const handleChangeStatus = ({ meta, file }, status) => {
        console.log(meta, file, status)
        if (status === 'removed') {
            console.log('removed')
        }
    }

    // receives array of files that are done uploading when submit button is clicked
    const handleFileSubmit = (files, allFiles) => {
        const fileData = allFiles.map(f => f.xhr.response)
        const images = fileData.map(f => JSON.parse(f))
        setFiles(images.map(image => image.secure_url));
        allFiles.forEach(f => f.remove())
    }

    const {
        values,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        setFieldTouched,
    } = useFormik({
        enableReinitialize: true,
        initialValues: {
            propertyName: '',
            propertyGroup: '',
            propertyType: '',
            privacyType: '',
            description: '',
            address: '',
            state: '',
            noOfRooms: 0,
            noOfBaths: 0,
            noOfguest: 0,
            pricePerNight: '',
            kitchen: '',
            tv: '',
            shower: '',
            airconditioning: '',
            washer: '',
            pool: '',
            wifi: '',
            washingmachine: '',
            bbqgrill: '',
            dedicatedworkspace: '',
            doorman: '',
            freeparking: '',
            heating: '',
            hairdryer: '',
            toiletteries: ''
        },
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: Yup.object().shape({
            propertyName: Yup.string().required('Property name is required'),
            propertyGroup: Yup.string().required('Property group is required'),
            propertyType: Yup.string().required('Property type is required'),
            privacyType: Yup.string().required('Privacy type is required'),
            description: Yup.string().required('Description is required'),
            address: Yup.string().required('Address is required'),
            noOfRooms: Yup.number().required('No of rooms is required'),
            noOfBaths: Yup.number().required('No of baths is required'),
            noOfguest: Yup.number().required('No of guest per room is required'),
            pricePerNight: Yup.string().required('Price is required'),
        }),

        onSubmit: (values) => {
            // console.log(textInput.current.outerText, files, 'textInput')
            // return console.log(values, lng, lat)
            const amenityItems = [values.kitchen, values.tv, values.shower,
            values.airconditioning,
            values.washer,
            values.pool,
            values.wifi,
            values.washingmachine,
            values.bbqgrill,
            values.dedicatedworkspace,
            values.doorman,
            values.freeparking,
            values.heating,
            values.hairdryer,
            values.toiletteries]
            setLoading(!loading)
            const propertyData = {
                ...values, img: files,
                address: addr,
                latitude: lat, longitude: lng,
                userId: user.id, state: stateLocale,
                city: city, zipCode: zipCode,
                country: country,
                description: textInput.current.outerText,
                amenities: amenityItems.filter(t => t !== '').join(',')
            }
            console.log(propertyData, 'property')
            dispatch(createProperty(propertyData)).then((res) => navigate('/app/apartments')).catch(err => {
                setLoading(!loading)
                setErrorMsg(err)
            })
        },
    });
    console.log(errors, 'errors')

    return (<>
        {/* <ReactDependentScript
  loadingComponent={<div>jQuery is loading...</div>}
  scripts={['https://maps.googleapis.com/maps/api/js?key=AIzaSyD093gX7zynJ6NTLc5u0tassLDvgkgrUZo&libraries=places']}
> */}

        <div className="py-6 py-lg-8 ">
            <div className="container">
                <div className="row">
                    <div className="offset-lg-1 col-lg-10 col-md-12 col-12 text-center">
                        <h1>Join us. We'll help you every step of the way.</h1>
                        <h3>Listing Submission</h3>
                    </div>
                </div>
            </div>
        </div>

        <div className="pb-lg-11 pb-7">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <form action="#" >
                            {/* <!-- Step 1 --> */}
                            <div className="row mb-8">
                                <div className="col-12">
                                    <div className="mb-4 border-bottom pb-2">
                                        <SectionTitle label="Basic information" />
                                    </div>
                                </div>
                                {/* <!-- property name  --> */}
                                <div className="col-12">
                                    <div className="mb-3">
                                        <label htmlFor="propertyname" className="form-label">Property Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="propertyname"
                                            placeholder="Enter Your Property Name"
                                            name="propertyName"
                                            required
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.propertyName}
                                        />
                                    </div>
                                    {errors.propertyName && <small className="errors">{errors.propertyName}</small>}
                                </div>
                                {/* <!-- property type  --> */}
                                <div className="col-12">
                                    <div className="mb-3">
                                        <label htmlFor="home" className="form-label">What kind of place will you host?</label>
                                        <Select
                                            placeholder={<div>Property Group</div>}
                                            menuColor='#495057'
                                            styles={selectStyle}
                                            options={propertyTypeGroup}
                                            onBlur={() => setFieldTouched("propertyGroup", true)}
                                            onChange={(opt, e) => {
                                                setFieldValue('propertyGroup', opt.value)
                                            }}
                                        />
                                    </div>
                                    {errors.propertyGroup && <small className="errors">{errors.propertyGroup}</small>}
                                </div>
                                <div className="col-12">
                                    <div className="mb-3">
                                        <label htmlFor="home" className="form-label">Which of these best describes your place?</label>
                                        <Select
                                            placeholder={<div>Property Type</div>}
                                            menuColor='#495057'
                                            styles={selectStyle}
                                            onBlur={() => setFieldTouched("propertyType", true)}
                                            onChange={(opt, e) => {
                                                setFieldValue('propertyType', opt.value)
                                            }}
                                            options={propertyType} />
                                    </div>
                                    {errors.propertyType && <small className="errors">{errors.propertyType}</small>}
                                </div>
                                <div className="col-12">
                                    <div className="mb-3">
                                        <label htmlFor="privacyType" className="form-label">What kind of space will guests have?</label>
                                        <Select
                                            placeholder={<div>Privacy Type</div>}
                                            menuColor='#495057'
                                            styles={selectStyle}
                                            onBlur={() => setFieldTouched("privacyType", true)}
                                            onChange={(opt, e) => {
                                                setFieldValue('privacyType', opt.value)
                                            }}
                                            options={privacyType} />
                                    </div>
                                    {errors.privacyType && <small className="errors">{errors.privacyType}</small>}
                                </div>

                                {/* <!-- street address  --> */}
                                <div className="col-12">
                                    <div className="mb-3">
                                        <label htmlFor="address" className="form-label">Street Address</label>
                                        <PlacesAutocomplete
                                            value={addr}
                                            onChange={handleOnChange}
                                            onSelect={handleSelect}
                                        >
                                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                                <div>
                                                    <input
                                                        {...getInputProps({
                                                            placeholder: 'Search Places ...',
                                                            className: 'form-control location-search-input',
                                                        })}
                                                    />
                                                    <div className="autocomplete-dropdown-container">
                                                        {loading && <div>Loading...</div>}
                                                        {suggestions.map(suggestion => {
                                                            const className = suggestion.active
                                                                ? 'suggestion-item--active'
                                                                : 'suggestion-item';
                                                            // inline style for demonstration purpose
                                                            const style = suggestion.active
                                                                ? { backgroundColor: '#fafafa', cursor: 'pointer', padding: '20px' }
                                                                : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                                            return (
                                                                <div
                                                                    {...getSuggestionItemProps(suggestion, {
                                                                        className,
                                                                        style,
                                                                    })}
                                                                >
                                                                    <span>{suggestion.description}</span>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            )}
                                        </PlacesAutocomplete>
                                        {errors.address && <small className="errors">{errors.address}</small>}
                                    </div>
                                </div>
                                {/* <!-- country  --> */}

                                {/* <!-- state  --> */}

                                {addr && (
                                    <>
                                        <div className="col-md-4 col-12">
                                            <div className="mb-3">
                                                <label htmlFor="stateLocale" className="form-label">State</label>
                                                <input type="text"
                                                    className="form-control"
                                                    id="stateLocale"
                                                    placeholder="e.g Lagos"
                                                    name="stateLocale"
                                                    required
                                                    value={stateLocale}
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                        {/* <!-- city  --> */}
                                        <div className="col-md-4 col-12">
                                            <div className="mb-3">
                                                <label htmlFor="city" className="form-label">City</label>
                                                <input type="text"
                                                    className="form-control"
                                                    id="city"
                                                    placeholder="e.g Victoria island"
                                                    name="city"
                                                    required
                                                    defaultValue={city}
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                        {/* <!-- zip code  --> */}
                                        <div className="col-md-4 col-12">
                                            <div className="mb-3">
                                                <label htmlFor="zipcode" className="form-label">Zip Code</label>
                                                <input type="text"
                                                    className="form-control"
                                                    id="zipcode"
                                                    placeholder="e.g 380019"
                                                    name="zipCode"
                                                    required
                                                    defaultValue={zipCode}
                                                    disabled
                                                />
                                                <span>{errors.zipCode}</span>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-12">
                                            <div className="col-12">
                                                <div className="mb-3">
                                                    <label htmlFor="address" className="form-label">Country</label>
                                                    <input type="text" className="form-control"
                                                        id="country"
                                                        defaultValue={country}
                                                        disabled
                                                        placeholder="Country" name="country" required />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                                <div className="col-md-6 col-12">
                                    <div className="mb-3">
                                        <label htmlFor="pricePerNight" className="form-label">Price per night</label>
                                        <input type="text"
                                            className="form-control"
                                            id="pricePerNight"
                                            placeholder="e.g 4000"
                                            name="pricePerNight"
                                            required
                                            value={values.pricePerNight}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    {errors.pricePerNight && <small className="errors">{errors.pricePerNight}</small>}
                                </div>
                            </div>
                            {/* <!-- Step 2 --> */}
                            <div className="row mb-8">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="mb-4 border-bottom pb-2">
                                        <h4 className="mb-0">Disposition & Amenities</h4>
                                    </div>
                                </div>
                                <NumberInput num={values.noOfguest} label="noOfguest" title='Guests' updater={setFieldValue} />
                                <NumberInput num={values.noOfRooms} label="noOfRooms" title='Bedrooms' updater={setFieldValue} />
                                <NumberInput num={values.noOfBaths} label="noOfBaths" title='Bathrooms' updater={setFieldValue} />
                                <div className="col-xl-12 mt-4">
                                    <div className="mb-4 border-bottom pb-2">
                                        <h4 className="mb-0">Amenities</h4>
                                    </div>
                                </div>
                                {/* <!-- checkboxs  --> */}
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                    <CheckBox label={'Kitchen'} name={'kitchen'} values={values.kitchen} setFieldValue={setFieldValue} handleBlur={handleBlur} />
                                    <CheckBox label={'TV'} name={'tv'} values={values.tv} setFieldValue={setFieldValue} handleBlur={handleBlur} />
                                    <CheckBox label={'shower'} name={'shower'} values={values.shower} setFieldValue={setFieldValue} handleBlur={handleBlur} />
                                    <CheckBox label={'Air conditioning'} name={'airconditioning'} values={values.airconditioning} setFieldValue={setFieldValue} handleBlur={handleBlur} />
                                    <CheckBox label={'Washer'} name={'washer'} values={values.washer} setFieldValue={setFieldValue} handleBlur={handleBlur} />

                                </div>
                                {/* <!-- checkbox  --> */}
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                    <CheckBox label={'Pool'} name={'pool'} values={values.pool} setFieldValue={setFieldValue} handleBlur={handleBlur} />
                                    <CheckBox label={'Wifi'} name={'wifi'} values={values.wifi} setFieldValue={setFieldValue} handleBlur={handleBlur} />
                                    <CheckBox label={'Washing machine'} name={'washingmachine'} values={values.washingmachine} setFieldValue={setFieldValue} handleBlur={handleBlur} />
                                    <CheckBox label={'BBQ grill'} name={'bbqgrill'} values={values.bbqgrill} setFieldValue={setFieldValue} handleBlur={handleBlur} />
                                    <CheckBox label={'Dedicated workspace'} name={'dedicatedworkspace'} values={values.dedicatedworkspace} setFieldValue={setFieldValue} handleBlur={handleBlur} />
                                </div>
                                {/* <!-- checkboxes  --> */}
                                <div className="col-lg-12 col-md-6 col-sm-12 col-12">
                                    <CheckBox label={'Doorman'} name={'doorman'} values={values.doorman} setFieldValue={setFieldValue} handleBlur={handleBlur} />
                                    <CheckBox label={'Free Parking'} name={'freeparking'} values={values.freeparking} setFieldValue={setFieldValue} handleBlur={handleBlur} />
                                    <CheckBox label={'Heating'} name={'heating'} values={values.heating} setFieldValue={setFieldValue} handleBlur={handleBlur} />
                                    <CheckBox label={'Hair dryer'} name={'hairdryer'} values={values.hairdryer} setFieldValue={setFieldValue} handleBlur={handleBlur} />
                                    <CheckBox label={'Toiletteries'} name={'toiletteries'} values={values.toiletteries} setFieldValue={setFieldValue} handleBlur={handleBlur} />

                                </div>
                            </div>
                            <div className="row mb-8">
                                <div className="col-lg-12">
                                    <div className="mb-4 border-bottom pb-2">
                                        <h4 className="mb-0">Description</h4>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <p>About Your Space</p>
                                </div>
                                {/* <!-- editor  --> */}
                                <div className="col-lg-12 mb-8">
                                    <div id="editor" ref={textInput}>
                                    </div>
                                </div>
                                <div className="col-lg-12 mt-5 mt-md-0">
                                    {errors.description ? <small className="errors">{errors.description}</small> : <small>Write a quick summary of your place. You can highlight what’s special about
                                        your space</small>}

                                </div>
                            </div>
                            {/* <!-- gallery  --> */}
                            <div className="row mb-8">
                                <div className="col-lg-12">
                                    <div className="mb-4 border-bottom pb-2">
                                        <h4 className="mb-0">Add Gallery Images </h4>
                                    </div>
                                </div>
                                {/* <!-- upload images  --> */}
                                <div className="col-lg-12">
                                    <Dropzone
                                        getUploadParams={getUploadParams}
                                        onChangeStatus={handleChangeStatus}
                                        onSubmit={handleFileSubmit}
                                        accept="image/*,audio/*,video/*"
                                    />
                                </div>
                                {errorMsg && <small className="errors">{errorMsg}</small>}
                            </div>

                            {/* <!-- submit button  --> */}
                            <div className="row">
                                <div className="col-lg-12 d-flex justify-content-end">
                                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        {/* </ReactDependentScript> */}
    </>)
}

export default CreateListing