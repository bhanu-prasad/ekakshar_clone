import React, { Component } from "react";

export default class Talkwithus extends Component {
  render() {
    return (
      <section className="talkToExperts text-center" id="contactus">
        <div className="container">
          <div className="row">
            <h2 className="headingEkakshar">Connect with our experts</h2>
            <div className="form_div">
              <form>
                <div>
                    <div className="form_inputs">
                        <label className="form_label">
                        Email <span>*</span>
                        </label>
                        <input className="form_in" type="email" required="" />
                    </div>
                    <div className="form_inputs">
                        <label className="form_label">
                        Phone number <span>*</span>
                        </label>
                        <input className="form_in" type="number" required="" />
                    </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
