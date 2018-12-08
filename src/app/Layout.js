import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Site from './layout/Site'
import Header from './layout/Header'
import Content from './layout/Content'
import Footer from './layout/Footer'
import Router from './layout/Router'
const Layout = ({ children }) => (
    <Site>
        <Helmet
            title="PabProjects"
            meta={[
                { name: 'description', content: 'Pablo LLanos personal site' },
                { name: 'keywords', content: 'Projects by Pablo Llanos' },
            ]}
            script={[
                { 'src': 'https://use.fontawesome.com/releases/v5.5.0/js/all.js' },
            ]}
            link={[
                { 'rel': 'stylesheet', 'href': 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }
            ]}
        />
        <Header />
        <Content>
            <Router />
        </Content>
        <Footer />
    </Site>
);

Layout.propTypes = {
    children: PropTypes.func,
};

export default Layout
