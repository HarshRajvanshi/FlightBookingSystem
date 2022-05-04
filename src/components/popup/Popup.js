import React from 'react'

export default function popup() {
  return (
    <div className="modalBackground">
        <div className="modalContainer">
            <button>x</button>
            <div className="title">
                <h1>Login!</h1>
            </div>

            <div className="body">
                <p>okayyyyyyy paragraph</p>
            </div>
            <div className="footer">
                <button>Cancel</button>
                <button>Continue</button>
            </div>
        </div>
    </div>
  )
}
