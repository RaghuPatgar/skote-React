import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardBody, Col, Row } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import getChartColorsArray from "../../components/Common/ChartsDynamicColor";

export default class CardUser extends Component {
  constructor(props) {
    super(props);
    const apexcardUserColors = getChartColorsArray(props.dataColors);

    this.state = {
      series: [
        {
          name: "Current",
          data: [18, 21, 45, 36, 65, 47, 51, 32, 40, 28, 31, 26],
        },
        {
          name: "Previous",
          data: [30, 11, 22, 18, 32, 23, 58, 45, 30, 36, 15, 34],
        },
      ],

      options: {
        chart: {
          height: 350,
          type: "area",
          toolbar: {
            show: false,
          },
        },
        colors: apexcardUserColors,
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 2,
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [20, 100, 100, 100],
          },
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },

        markers: {
          size: 3,
          strokeWidth: 3,

          hover: {
            size: 4,
            sizeOffset: 2,
          },
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
        },
      },
    };
  }
  render() {
    return (
      <React.Fragment>
        <Col xl={8}>
          <Row>
            <Col lg={4}>
              <Card className="mini-stats-wid">
                <CardBody>
                  <div className="d-flex flex-wrap">
                    <div className="me-3">
                      <p className="text-muted mb-2">Total Post</p>
                      <h5 className="mb-0">120</h5>
                    </div>

                    <div className="avatar-sm ms-auto">
                      <div className="avatar-title bg-light rounded-circle text-primary font-size-20">
                        <i className="bx bxs-book-bookmark"></i>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="blog-stats-wid">
                <CardBody>
                  <div className="d-flex flex-wrap">
                    <div className="me-3">
                      <p className="text-muted mb-2">Pages</p>
                      <h5 className="mb-0">86</h5>
                    </div>

                    <div className="avatar-sm ms-auto">
                      <div className="avatar-title bg-light rounded-circle text-primary font-size-20">
                        <i className="bx bxs-note"></i>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="blog-stats-wid">
                <CardBody>
                  <div className="d-flex flex-wrap">
                    <div className="me-3">
                      <p className="text-muted mb-2">Comments</p>
                      <h5 className="mb-0">4,235</h5>
                    </div>

                    <div className="avatar-sm ms-auto">
                      <div className="avatar-title bg-light rounded-circle text-primary font-size-20">
                        <i className="bx bxs-message-square-dots"></i>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Card>
            <CardBody>
              <div className="d-flex flex-wrap">
                <h5 className="card-title me-2">Visitors</h5>
                <div className="ms-auto">
                  <div className="toolbar button-items text-end">
                    <button type="button" className="btn btn-light btn-sm">
                      ALL
                    </button>{" "}
                    <button type="button" className="btn btn-light btn-sm">
                      1M
                    </button>{" "}
                    <button type="button" className="btn btn-light btn-sm">
                      6M
                    </button>{" "}
                    <button
                      type="button"
                      className="btn btn-light btn-sm active"
                    >
                      1Y
                    </button>
                  </div>
                </div>
              </div>

              <Row className="text-center">
                <Col lg={4}>
                  <div className="mt-4">
                    <p className="text-muted mb-1">Today</p>
                    <h5>1024</h5>
                  </div>
                </Col>

                <Col lg={4}>
                  <div className="mt-4">
                    <p className="text-muted mb-1">This Month</p>
                    <h5>
                      12356{" "}
                      <span className="text-success font-size-13">
                        0.2 % <i className="mdi mdi-arrow-up ms-1"></i>
                      </span>
                    </h5>
                  </div>
                </Col>

                <Col lg={4}>
                  <div className="mt-4">
                    <p className="text-muted mb-1">This Year</p>
                    <h5>
                      102354{" "}
                      <span className="text-success font-size-13">
                        0.1 % <i className="mdi mdi-arrow-up ms-1"></i>
                      </span>
                    </h5>
                  </div>
                </Col>
              </Row>

              <hr className="mb-4" />
              <div className="apex-charts" id="area-chart" dir="ltr">
                <ReactApexChart
                  options={this.state.options}
                  series={this.state.series}
                  type="area"
                  height={350}
                  className="apex-charts"
                />
              </div>
            </CardBody>
          </Card>
        </Col>
      </React.Fragment>
    );
  }
}

CardUser.propTypes = {
  cardreport: PropTypes.any,
};
