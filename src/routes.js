/*!

=========================================================
* Now UI Dashboard React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
// import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/TableList.js";
import Maps from "views/Maps.js";
import Upgrade from "views/Upgrade.js";
import UserPage from "views/UserPage.js";
import FAQ from "views/FAQs.js";
import GettingStarted from "views/GettingStarted.js";
import APIProjects from "views/APIProjects.js";
// import Notifications from "views/Notifications.js";
import ReferenceIndex from "views/ReferenceIndex.js";
import WebProjects from "views/WebProjects.js";
const axios = require('axios');


// function getMennu() {

//   axios.get(this.state.urlGitHubFile)
//     .then(response => {
//       console.log("Get ReadMe Sccess ", response.data);
//       this.setState({ content: response.data })
//     }).catch(error => {
//       console.error("Error in axios call readme file")
//     });

// }



// var dashRoutes = [
//   {
//     "path": "/docs/",
//     "name": "docs/",
//     "icon": "location_map-big",
//     "component": GettingStarted,
//     "layout": "/admin",
//     "menu": "https://sslabs-utility.s3-ap-southeast-1.amazonaws.com/docs/",
//     "LastModified": "2020-10-26T07:36:31.000Z"
//   },
// ];

var dashRoutes = [
  {
    path: "/fag",
    name: "Getting Started",
    icon: "location_map-big",
    component: GettingStarted,
    layout: "/admin",
  },
  {
    path: "/fag",
    name: "FAQs",
    icon: "location_map-big",
    component: FAQ,
    layout: "/admin",
  },
  {
    path: "/apiProject",
    name: "API Projects",
    icon: "location_map-big",
    component: APIProjects,
    layout: "/admin",
  },
  {
    path: "/referenceIndex",
    name: "Reference",
    icon: "location_map-big",
    component: ReferenceIndex,
    layout: "/admin",
  },
  {
    path: "/webProjects",
    name: "Web Projects",
    icon: "location_map-big",
    component: WebProjects,
    layout: "/admin",
  }
];

export default dashRoutes;
