import React from 'react'

function step1() {
    return (
        <div>
            <h1>Step 1: Choose your language</h1>
            <p>
                Please choose your language.
            </p>
            <p>
                <select id="language" onChange={this.handleChange}>
                    <option value="en">English</option>
                    <option value="fr">French</option>
                </select> 
            </p>
            
        </div>
    )
}

export default step1
