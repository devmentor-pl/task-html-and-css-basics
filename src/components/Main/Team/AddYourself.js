import React from 'react'

import PropTypes from 'prop-types'


export const AddYourself = (props) => {

  const {
    className,
    team,
    ...otherProps
  } = props

  const handleInputChange = (event) => {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            image.style.display = 'block'
            image.src = e.target.result;
            image.style.display = 'block';
            // fileInput.style.visibility = 'hidden'
        };
        reader.readAsDataURL(file);
    }
  
  };


  const renderListItem = () => {
    return (
      <>
        <div className={'team__person you'}>
          <div className={'team__photo'}>
            <img id="image" className={'you'}/></div>
            <input type="file" id="fileInput" accept="image/*" onChange={handleInputChange} ></input>
          <div className={'team__function'}><input type="text" id="textInput" placeholder={'Please write your function'}></input></div>
          <div className={'team__data'}><input type="text" id="textInput" placeholder={'Please write your name'}></input></div>
        </div>
      </>
    )
  }

  return (
    <>
      {team.addYou.map((item, i) => {
        return renderListItem(item, i)
      })}

    </>
  )
}

AddYourself.propTypes = {
  className: PropTypes.string
}

export default AddYourself