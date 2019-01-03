import React, { Component } from 'react';
import sundayServiceImg from '../../assets/img/entrance.jpg';

class MorningService extends Component {
    render() {
        return (
            <section>
                <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
                    <div className="container">
                        <div className="row">
                            <div id="top-content-left-region" className="top-content-left col-xs-12 col-md-6 text-center-sm">
                                <div id="page-title-block" className="page-title block">
                                    <h1>Sunday Mornings</h1>
                                </div>
                            </div>

                            <div id="top-content-right-region" className="top-content-right col-xs-12 col-md-6 text-right text-center-sm">
                                <div id="page-breadcrumbs-block" className="page-breadcrumbs block">
                                    <div className="breadcrumbs">
                                        <a href="/">Home</a>
                                        <span className="delimiter">›</span>
                                        <span title="" className="nolink">Sundays</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="content-region">
                    <div className="container">
                        <div className="row">
                            <div id="main-content-region" className="main-content col-xs-12">
                                <div className="region region-content">

                                    <div className="content">
                                        <img src={sundayServiceImg} alt="" className="img img-responsive padding-bottom-20" />
                                        <p>Join us on Sundays at 9:30am for our weekly service.</p>

                                        <p>Pre service <strong>prayer time</strong> starts at 9:10am.</p>

                                        <p>During the service our <strong>children's program</strong> Pathway Kids runs most Sundays for children aged 4 to Grade 6.<br />
                                            During the service a <  strong>crèche</strong> is available for children under 4 years of age.</p>

                                        <p>A <strong>hearing loop</strong> system is available.</p>

                                        <p>After the service all are welcome to share in <strong>morning tea</strong> and fellowship.</p>

                                        <p>If anyone would like to <strong>talk or pray</strong> with a church leader the opportunity is available immediately after the service.</p>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        );
    }
}

export default MorningService;