const Checkout = () => (
  <div class="py-11 py-7">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-12 col-12">
          <div class="card checkout-form">
            <div class="card-body p-5">
              <h4 class="mb-4 border-bottom pb-2">Your Information</h4>
              <form class="row">
                <div class="mb-3 col-md-6">
                  <label htmlFor="fname" class="form-label">First Name <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" id="fname" placeholder="First Name" required="" />
                </div>
                <div class="mb-3 col-md-6">
                  <label htmlFor="lname" class="form-label">Last Name <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" required="" id="lname" placeholder="Last Name" />
                </div>
                <div class="mb-3 col-md-6">
                  <label htmlFor="email" class="form-label">Email <span class="text-danger">*</span></label>
                  <input type="email" class="form-control" required="" id="email" placeholder="Email Id" />
                </div>
                <div class="mb-3 col-md-6">
                  <label htmlFor="confirm-email" class="form-label">Confirm Email <span
                    class="text-danger">*</span></label>
                  <input type="email" class="form-control" required="" id="confirm-email"
                    placeholder="Confirm Email Id" />
                </div>
                <div class="mb-3 col-md-12">
                  <label htmlFor="message" class="form-label">Your Message htmlFor Us <span
                    class="text-danger">*</span></label>
                  <textarea class="form-control" required="" rows="3" placeholder="Message" id="message"></textarea>
                </div>
                <div class="mb-3 col-md-12">
                  <label htmlFor="mobile" class="form-label"> Mobile Phone Number <span
                    class="text-danger">*</span></label>
                  <input type="text" class="form-control" required="" id="mobile" placeholder="Mobile Number" />
                </div>
                <div class="col-md-12">
                  <h4 class="mb-4 mt-2 border-bottom pb-2">Payment Details</h4>
                </div>
                <div class="col-md-12">
                  <div class="d-flex flex-wrap mb-4">

                    <div class="position-relative">
                      <input id="visa" class="radio-button" type="radio" name="radio" checked />
                      <div class="radio-img">
                        <img src="../assets/images/visa.png" alt="Rentkit Directory & Listing Bootstrap 5 Theme" />
                        <label htmlFor="visa"></label>
                      </div>
                    </div>
                    <div class="position-relative">
                      <input id="discover" class="radio-button" type="radio" name="radio" />
                      <div class="radio-img">
                        <img src="../assets/images/discover.png" alt="Rentkit Directory & Listing Bootstrap 5 Theme" />
                        <label htmlFor="discover"></label>
                      </div>
                    </div>
                    <div class="position-relative">
                      <input id="mastercard" class="radio-button" type="radio" name="radio" />
                      <div class="radio-img">
                        <img src="../assets/images/mastercard.png" alt="Rentkit Directory & Listing Bootstrap 5 Theme" />
                        <label htmlFor="mastercard"></label>
                      </div>
                    </div>
                    <div class="position-relative">
                      <input id="american-express" class="radio-button" type="radio" name="radio" />
                      <div class="radio-img">
                        <img src="../assets/images/american-express.png" alt="Rentkit Directory & Listing Bootstrap 5 Theme" />
                        <label htmlFor="american-express"></label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mb-3 col-md-12">
                  <label htmlFor="cardname" class="form-label">Name on Card <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" required="" id="cardname" placeholder="Name on Card" />
                </div>
                <div class="mb-3 col-md-12">
                  <label htmlFor="cardnumber" class="form-label">Credit Card Number <span
                    class="text-danger">*</span></label>
                  <input type="text" class="form-control" required="" id="cardnumber" placeholder="Name on Card" />
                </div>
                <div class="mb-3 col-md-4">
                  <label htmlFor="month" class="form-label">Month <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" required="" id="month" placeholder="Month" />
                </div>
                <div class="mb-3 col-md-4">
                  <label htmlFor="year" class="form-label">Year <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" required="" id="year" placeholder="Year" />
                </div>
                <div class="mb-3 col-md-4">
                  <label htmlFor="securitycode" class="form-label">Security Code <span
                    class="text-danger">*</span></label>
                  <input type="text" class="form-control" required="" id="securitycode" placeholder="***" />
                </div>
                <div class="mb-3 col-md-12">
                  <label htmlFor="billing" class="form-label">Billing Country <span class="text-danger">*</span></label>
                  <select class="select2" id="billing">
                    <option selected>United States</option>
                    <option value="1">United Kingdom</option>
                    <option value="2">India</option>
                    <option value="3">Russia</option>
                  </select>
                </div>
                <div class="mb-3 col-md-12">
                  <label htmlFor="street-address" class="form-label">Street Address <span
                    class="text-danger">*</span></label>
                  <input type="text" class="form-control" required="" id="street-address"
                    placeholder=" e.g. 300 Tetrick Road Fort Myers, London 33912" />
                </div>
                <div class="mb-3 col-md-4">
                  <label htmlFor="city" class="form-label">Town/City<span class="text-danger">*</span></label>
                  <select class="select2" id="city">
                    <option selected>New York</option>
                    <option value="1">Liverpool</option>
                    <option value="2">Delhi</option>
                    <option value="3">Moscow</option>
                  </select>
                </div>
                <div class="mb-3 col-md-4">
                  <label htmlFor="state" class="form-label">State/Province<span class="text-danger">*</span></label>
                  <select class="select2" id="state">
                    <option selected>American Samoa</option>
                    <option value="1">Scotland</option>
                    <option value="2">Delhi</option>
                    <option value="3">Amur</option>
                  </select>
                </div>
                <div class="mb-3 col-md-4">
                  <label htmlFor="zipcode" class="form-label">Zipcode<span class="text-danger">*</span></label>
                  <input class="form-control" placeholder="" type="text" id="zipcode" />
                </div>
                <div class="col-md-12 mt-4">
                  <h5 class="mb-4 border-bottom pb-2">Introduce Yourself to The Manager</h5>
                </div>
                <div class="col-md-12">
                  <ul class="list-unstyled">
                    <li><span class="mdi mdi-chevron-right me-1"></span>Some info about you and who's coming with you?
                    </li>
                    <li><span class="mdi mdi-chevron-right me-1"></span>What about this home interests you?</li>
                  </ul>
                </div>
                <div class="mb-3 col-md-12">
                  <label htmlFor="message-htmlFor-host" class="form-label">Message htmlFor Host <span
                    class="text-danger">*</span></label>
                  <textarea class="form-control" rows="3" placeholder="Write Your Message"
                    id="message-htmlFor-host"></textarea>
                </div>
                <div class="col-md-12">
                  <h5 class="mb-4 mt-2 border-bottom pb-2">Review And Book</h5>
                </div>
                <div class="col-md-12">
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <p class="mb-1 text-lg text-dark">You will be charged $1,090.31</p>
                      <ul class="list-inline text-sm">
                        <li class="list-inline-item"><a href="#" class="text-inherit">Cancellation Policy</a> <span
                          class="ms-2">|</span></li>
                        <li class="list-inline-item"><a href="#" class="text-inherit">Terms & Conditions</a><span
                          class="ms-2">|</span></li>
                        <li class="list-inline-item"><a href="#" class="text-inherit">Privacy Policy</a></li>
                      </ul>
                    </div>
                    <div>
                      <button class="btn btn-primary" type="submit"><i class="mdi mdi-lock me-2"></i>Book Now</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Checkout