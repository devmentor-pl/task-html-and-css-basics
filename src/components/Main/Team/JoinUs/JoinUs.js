import React from 'react'
import { useState } from 'react';

export default function JoinUs() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [shouldShowComponent, setShouldShowComponent] = useState(true)

    const handleInputChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                image.style.display = 'block'
                image.src = e.target.result;
                image.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
        setShouldShowComponent(false)
    }

    const handleFileUpload = () => {
        if (!selectedFile) {
            alert('Please select a file first.');
            return;
        }
        const formData = new FormData();
        formData.append('file', selectedFile);
        const formJson = Object.fromEntries(formData.entries());
    }
    return (
        <>
            <form onSubmit={handleSubmit} method={'POST'} className={'team__form'}>
                {shouldShowComponent ? (
                    <>
                        <div className={'team__person you'}>
                            <div className={'team__photo'}>
                                <img id="image" className={'you'} /></div>
                            <label for="fileInput">Choose a file of your photo:</label>
                            <input type="file" id="fileInput" accept="image/*" name="uploadedFile" onChange={handleInputChange} ></input>
                            <div className={'team__information info'}>
                                <div class={'info__name info__item'}>
                                    <label for="inputName info__label">Please write your name</label>
                                    <input id="inputName" />
                                </div>
                                <div class={'info__function info__item'}>
                                    <label for="inputFunction info__label">Please write your function</label>
                                    <input id="inputFunction" />
                                </div>
                                <div class={'info__github info__item'}>
                                    <label for="linkGithub info__label">Enter a Link to your GitHub/BitBucket:</label>
                                    <input type="text" id="linkGithub" placeholder="https://example.com"></input>
                                </div>
                                <div class={'info__portfolio info__item'}>
                                    <label for="linkPortfolio info__label">Enter a Link to your Portfolio:</label>
                                    <input type="text" id="linkPortfolio" placeholder="https://example.com"></input>
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>
                        <div className={'team__button-cont'}>
                            <button
                                className={'button'}
                                onClick={handleFileUpload}
                            >
                                Submit
                            </button>

                        </div>

                    </>

                ) : <h3 className={'you__result'}>Your application was send!</h3>}
            </form>
        </>
    );
}


