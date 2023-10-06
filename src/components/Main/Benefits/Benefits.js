import React from 'react'
import PropTypes from 'prop-types';

export const Benefits = (props) => {
    const {
        className,
        content
    } = props

    return (
        <ul className={className}>
            {content.map((item, i) =>
                    <li
                        key={i}
                    >
                        {item}
                    </li>
            )
            }
        </ul>
    )
}

Benefits.propTypes = {
    className: PropTypes.string,
    adverb: PropTypes.object
}

export default Benefits