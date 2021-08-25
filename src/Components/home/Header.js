import { ReactComponent as Search } from "../../Assets/icons/search.svg";
const Header = () => (
	<div className="position-relative">
		<div className="py-md-23 py-22 " style={{
			backgroundSize: "cover",
			backgroundPosition: "50%", backgroundImage: "url(../assets/images/hero-img/hero-img-3.jpg)"
		}}>
		</div>
		<div className="mt-n22">
			<div className="container">
				<div className="row">
					<div className="offset-xl-1 col-xl-10 col-md-12 col-12">
						<div className="mb-md-12">
							<h1 className="text-white display-4 mb-2 fw-bold">Find the Great Hotels</h1>
							<p className="text-white">Find and book rental rooms, hotels, villa, things to do, and trip.</p>
						</div>
						<div className="card border-0 p-2 search-form rounded-md-pill smooth-shadow-md  ">
							<div className="row align-items-center">
								<div className="col-sm">
									<select className="select2">
										<option>Where</option>
										<option value="Ahmedabad">Ahmedabad</option>
										<option value="Surat">Surat</option>
										<option value="Rajkot">Rajkot</option>
										<option value="Udaipur">Udaipur</option>
										<option value="Daman">Daman</option>
										<option value="Pune">Pune</option>
										<option value="Jaipur">Jaipur</option>
									</select></div>
								<div className="col-sm form-group border-start-md border-end-md ">
									<input type="text" id="dateSelect" className="form-control border-0 "
										placeholder="Check in / Check out" />
								</div>
								<div className="col-sm">
									<select className="select2">
										<option>Guest</option>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
									</select>
								</div>
								<div className="col-sm-1">
									<div className="d-md-flex justify-content-end ms-md-n3 ms-lg-0 text-end">
										<div
											className=" btn-primary rounded-circle icon-lg icon-shape"
											onClick={() => console.log('clicked')}
										>
											<Search />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default Header