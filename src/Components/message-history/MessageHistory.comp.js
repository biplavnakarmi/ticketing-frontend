import React from 'react'
import PropTypes from "prop-types"
import './message-history.style.css'

export const MessageHistory = ({ msg }) => {

    console.log(msg);
    if (!msg) return null;

    return msg.map((row, i) =>

        <div key={i} className="message-history mt-3">
            <div className="send text-info ">
                <div className="sender font-weight-bold ">{row.messageBy}</div>
                <div className="date font-italic"> {row.date}</div>
            </div>
            <div className="message font-weight-lighter  "> {row.message}</div>
        </div>)


}

MessageHistory.propTypes = {
    msg: PropTypes.array.isRequired
}