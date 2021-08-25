import React from "react";

function FilterModal({ close }) {
  return (
    <div className="modal">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          {/* <!-- modal header --> */}
          <div className="modal-header">
            <h4 className="modal-title">More Filter</h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => close()}
            ></button>
          </div>
          {/* <!-- modal body --> */}
          <div className="modal-body">
            <div className="p-3 more-filter-content">
              <div className="row mb-4 align-items-center">
                {/* <!-- price --> */}
                <div className="col-md-3">
                  <h5>Price</h5>
                </div>
                <div className="col-md-9">
                  {/* <!-- price menu --> */}
                  <div className="price-menu">
                    <div className="price-menu-body">
                      <div id="slider-padding"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                {/* <!-- type --> */}
                <div className="col-md-3">
                  <h5>Type</h5>
                </div>
                <div className="col-md-9">
                  {/* <!-- checkboxs --> */}
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="filterType"
                  >
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="apartment"
                    />
                    <label
                      className="btn btn-outline-secondary btn-sm"
                      for="apartment"
                    >
                      Apartment
                    </label>
                  </div>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="filterType"
                  >
                    <input type="checkbox" className="btn-check" id="house" />
                    <label
                      className="btn btn-outline-secondary btn-sm"
                      for="house"
                    >
                      House
                    </label>
                  </div>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="filterType"
                  >
                    <input type="checkbox" className="btn-check" id="duplex" />
                    <label
                      className="btn btn-outline-secondary btn-sm"
                      for="duplex"
                    >
                      Duplex
                    </label>
                  </div>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="filterType"
                  >
                    <input type="checkbox" className="btn-check" id="condo" />
                    <label
                      className="btn btn-outline-secondary btn-sm"
                      for="condo"
                    >
                      Condo
                    </label>
                  </div>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="filterType"
                  >
                    <input type="checkbox" className="btn-check" id="room" />
                    <label
                      className="btn btn-outline-secondary btn-sm"
                      for="room"
                    >
                      Room
                    </label>
                  </div>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="filterType"
                  >
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="townhouse"
                    />
                    <label
                      className="btn btn-outline-secondary btn-sm"
                      for="townhouse"
                    >
                      Townhouse
                    </label>
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3 col-12">
                  {/* <!-- bedroom --> */}
                  <div>
                    <h5 className="mb-0">Bedroom</h5>
                  </div>
                </div>
                <div className="col-md-9 col-12">
                  {/* <!-- quantity input --> */}
                  <div className="input-group w-50 align-items-center">
                    <input
                      type="button"
                      value="-"
                      className="
                      button-minus
                      border
                      bg-white
                      rounded-circle
                      icon-shape icon-sm
                      mx-1
                      lh-0
                    "
                      data-field="quantity"
                    />
                    <input
                      type="number"
                      step="1"
                      max="10"
                      value="0"
                      name="quantity"
                      className="quantity-field border-0 text-center w-25"
                    />
                    <input
                      type="button"
                      value="+"
                      className="
                      button-plus
                      border
                      bg-white
                      rounded-circle
                      icon-shape icon-sm
                      lh-0
                    "
                      data-field="quantity"
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3 col-12">
                  {/* <!-- bathroom --> */}
                  <div>
                    <h5 className="mb-0">Bathroom</h5>
                  </div>
                </div>
                <div className="col-md-9 col-12">
                  {/* <!-- input --> */}
                  <div className="input-group w-50 align-items-center">
                    <input
                      type="button"
                      value="-"
                      className="
                      button-minus
                      border
                      bg-white
                      rounded-circle
                      icon-shape icon-sm
                      mx-1
                      lh-0
                    "
                      data-field="quantity"
                    />
                    <input
                      type="number"
                      step="1"
                      max="10"
                      value="0"
                      name="quantity"
                      className="quantity-field border-0 text-center w-25"
                    />
                    <input
                      type="button"
                      value="+"
                      className="
                      button-plus
                      border
                      bg-white
                      rounded-circle
                      icon-shape icon-sm
                      lh-0
                    "
                      data-field="quantity"
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  <h5>Pet Policy</h5>
                </div>
                <div className="col-md-9">
                  {/* <!-- checkboxs --> */}

                  <div
                    className="btn-group"
                    role="group"
                    aria-label="filterType"
                  >
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="dogallowed"
                    />
                    <label
                      className="btn btn-outline-secondary btn-sm"
                      for="dogallowed"
                    >
                      Dog Allowed
                    </label>
                  </div>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="filterType"
                  >
                    <input
                      type="checkbox"
                      className="btn-check"
                      id="catallowed"
                    />
                    <label
                      className="btn btn-outline-secondary btn-sm"
                      for="catallowed"
                    >
                      Cat Allowed
                    </label>
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3">
                  {/* <!-- amenities --> */}
                  <h5>Amenities</h5>
                </div>
                <div className="col-md-9">
                  <div className="row">
                    <div className="col-md-6">
                      {/* <!-- checkbox --> */}
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheck1"
                        />
                        <label className="form-check-label" for="customCheck1">
                          Washer/Dryer Hookups
                        </label>
                      </div>
                      {/* <!-- checkbox --> */}
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheck2"
                        />
                        <label className="form-check-label" for="customCheck2">
                          Air Conditioning
                        </label>
                      </div>
                      {/* <!-- checkbox --> */}
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheck3"
                        />
                        <label className="form-check-label" for="customCheck3">
                          Semi-Furniture
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheck4"
                        />
                        <label className="form-check-label" for="customCheck4">
                          Patio
                        </label>
                      </div>
                      {/* <!-- checkbox --> */}
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheck5"
                        />
                        <label className="form-check-label" for="customCheck5">
                          Hardwood Floors
                        </label>
                      </div>
                      {/* <!-- checkbox --> */}
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheck6"
                        />
                        <label className="form-check-label" for="customCheck6">
                          Walk-in Closets
                        </label>
                      </div>
                      {/* <!-- checkbox --> */}
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheck7"
                        />
                        <label className="form-check-label" for="customCheck7">
                          Wi-Fi
                        </label>
                      </div>
                      {/* <!-- checkbox --> */}
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheck8"
                        />
                        <label className="form-check-label" for="customCheck8">
                          Pool
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      {/* <!-- checkbox --> */}
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheck9"
                        />
                        <label className="form-check-label" for="customCheck9">
                          Evelator
                        </label>
                      </div>
                      {/* <!-- checkbox --> */}
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheck10"
                        />
                        <label className="form-check-label" for="customCheck10">
                          Wheelchair Accessible
                        </label>
                      </div>
                      {/* <!-- checkbox --> */}
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheck11"
                        />
                        <label className="form-check-label" for="customCheck11">
                          Garden
                        </label>
                      </div>
                      {/* <!-- checkbox --> */}
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheck12"
                        />
                        <label className="form-check-label" for="customCheck12">
                          Furnished
                        </label>
                      </div>
                      {/* <!-- checkbox --> */}
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheck13"
                        />
                        <label className="form-check-label" for="customCheck13">
                          High Rise
                        </label>
                      </div>
                      {/* <!-- checkbox --> */}
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheck14"
                        />
                        <label className="form-check-label" for="customCheck14">
                          Utilities Included
                        </label>
                      </div>
                      {/* <!-- checkbox --> */}
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheck15"
                        />
                        <label className="form-check-label" for="customCheck15">
                          Balcony Included
                        </label>
                      </div>
                      {/* <!-- checkbox --> */}
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheck16"
                        />
                        <label className="form-check-label" for="customCheck16">
                          Student Friendly
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- modal footer --> */}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary btn-sm">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterModal;
