import React from 'react'
import Breadcrumps from '../components/Breadcrumps'

const Courses = () => {
  return (
    <>
      <div>
        <Breadcrumps pagename ="Courses" title="Online Courses"/>
        <section className="w3l-courses">
          <div className="blog pb-5" id="courses">
            <div className="container py-lg-5 py-md-4 py-2">
              <div className="u-intro">
                <div className="n-row center-xs">
                  <div className="n-col-xs-12">
                    <h2 className="fw-1000" style={{textAlign: 'center'}}>Second Harvest is now serving an average of about <span style={{color: '#00873e'}}>500,000 people every month</span>.</h2>
                    <p className="intro-text" style={{textAlign: 'center'}}>Read the story of the food bank from the perspective of our community, clients, partners and staff</p>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* card starts here  */}
                <div className="col-lg-4 col-md-6 mt-md-0 mt-5   item">
                  <div className="card">
                    <div className="card-header p-0 position-relative">
                      <a href="#course-single" className="zoom d-block">
                        <img className="card-img-bottom d-block" src="assets/images/c1.jpg" alt="Card image cap" />
                      </a>
                    </div>
                    <div className="card-body course-details">
                      <a href="#course-single" className="course-desc">Open Programming Courses for everyone : Python
                      </a>
                      <div className="course-meta mt-4">
                        <div className="meta-item course-lesson">
                          <span className="fa fa-clock-o" />
                          <span className="meta-value"> 20 hrs </span>
                        </div>
                        <div className="meta-item course-">
                          <span className="fa fa-eye" />
                          <span className="meta-value"> 50 </span>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="author align-items-center">
                        <img src="assets/images/a1.jpg" alt className="img-fluid rounded-circle" />
                        <ul className="blog-meta">
                          <li>
                            <span className="meta-value mx-1">by</span> <a href="#author"> Olivia</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card ends here */}
                {/* <div className="col-lg-4 col-md-6 item mt-md-0 mt-5">
                <div className="card">
                  <div className="card-header p-0 position-relative">
                    <a href="#course-single" className="zoom d-block">
                      <img className="card-img-bottom d-block" src="assets/images/c2.jpg" alt="Card image cap" />
                    </a>
                    <div className="course-price-badge"> Free</div>
                    <div className="post-pos">
                      <a href="#reciepe" className="receipe blue">Beginner</a>
                    </div>
                  </div>
                  <div className="card-body course-details">
                    <div className="price-review d-flex justify-content-between mb-1align-items-center">
                      <p>$0.00</p>
                      <ul className="rating-star">
                        <li><span className="fa fa-star" /></li>
                        <li><span className="fa fa-star" /></li>
                        <li><span className="fa fa-star" /></li>
                        <li><span className="fa fa-star" /></li>
                        <li><span className="fa fa-star-o" /></li>
                      </ul>
                    </div>
                    <a href="#course-single" className="course-desc">Learning to Write as a clean Professional
                      Author</a>
                    <div className="course-meta mt-4">
                      <div className="meta-item course-lesson">
                        <span className="fa fa-clock-o" />
                        <span className="meta-value"> 20 hrs </span>
                      </div>
                      <div className="meta-item course-">
                        <span className="fa fa-user-o" />
                        <span className="meta-value"> 50 </span>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="author align-items-center">
                      <img src="assets/images/a2.jpg" alt className="img-fluid rounded-circle" />
                      <ul className="blog-meta">
                        <li>
                          <span className="meta-value mx-1">by</span> <a href="#author"> Isabella</a>
                        </li>
                        <li>
                          <span className="meta-value mx-1">in</span> <a href="#author"> Teaching</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                </div>*/}
              </div>
              {/* pagination */}
              <div className="pagination-wrapper mt-5 pt-lg-3 text-center">
                <ul className="page-pagination">
                  <li><a className="next" href="#url"><span className="fa fa-angle-left" /> Prev</a></li>
                  <li><span aria-current="page" className="page-numbers current">1</span></li>
                  <li><a className="page-numbers" href="#url">2</a></li>
                  <li><a className="page-numbers" href="#url">3</a></li>
                  <li><a className="page-numbers" href="#url">....</a></li>
                  <li><a className="next" href="#url">Next <span className="fa fa-angle-right" /></a></li>
                </ul>
              </div>
              {/* //pagination */}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Courses
