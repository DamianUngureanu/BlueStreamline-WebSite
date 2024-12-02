import React from 'react'

const StartPageAdmin = () => {
  return (
    <fieldset>
          <legend>Starting page</legend>
          <p>- If the input is empty, will remain preselected value</p>
          <div>
            <label htmlFor="">Racing video</label>
            <input type="file" />
          </div>
          <div>
            <label htmlFor="">History video</label>
            <input type="file" />
          </div>
          <div>
            <label htmlFor="">Team video</label>
            <input type="file" />
          </div>
          <div>
            <label htmlFor="">Contact video</label>
            <input type="file" />
          </div>
          <div>
            <label htmlFor="">News video</label>
            <input type="file" />
          </div>
          <div>
            <label htmlFor="">Sponsors video</label>
            <input type="file" />
          </div>
          <div>
            <label htmlFor="">Brochure download link</label>
            <input type="file" />
          </div>
          <div>
            <label htmlFor="">Team info modal text</label>
            <textarea name="" id=""></textarea>
          </div>
        </fieldset>
  )
}

export default StartPageAdmin