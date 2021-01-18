import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import PoopyDoopy from "../components/poopy-doopy"

const SecondPage = () => (
  <Layout>
    <PoopyDoopy />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
