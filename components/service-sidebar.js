import React, { Fragment } from "react";

const ServiceSidebar = () => {
  return (
    <Fragment>
      <aside className="widget categories">
        <h3 className="widget_title">Services</h3>
        <div className="Tantumsoft_categorie_widget">
          <ul>
            <li>
              <a href="#">Website Development</a>
            </li>
            <li>
              <a href="#">Graphic Designing</a>
            </li>
            <li>
              <a href="#">Digital Marketing</a>
            </li>
            <li>
              <a href="#">SEO & Content Writting</a>
            </li>
            <li>
              <a href="#">App Development</a>
            </li>
          </ul>
        </div>
      </aside>
      <aside className="widget categories">
        <div className="Tantumsoft_services_help">
          <h4>need Tantumsoft help?</h4>
          <p>
            Prefer speaking with a human to filling out a form? call corporate
            office and we will connect you with a team member who can help.
          </p>
          <h2>666 888 000</h2>
        </div>
      </aside>
    </Fragment>
  );
};

export default ServiceSidebar;
