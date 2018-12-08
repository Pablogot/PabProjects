import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import StatusTag from './../../components/StatusTag'

const BlogNav = ({ to, date, status }) => (
    <nav className="between">
        <Link className="button is-white" to={to}>Learn more</Link>
        <div>
            <StatusTag status={status} />
            <p className="has-text-grey is-size-6">
                {moment(date).calendar(null, {
                    sameDay: '[Today]',
                    lastDay: '[Yesterday]',
                    lastWeek: '[Last] dddd',
                    sameElse: 'MMM Do YYYY'
                })}
            </p>
        </div>

    </nav>
)
export default BlogNav