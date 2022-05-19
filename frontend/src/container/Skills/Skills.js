import React from 'react'

// Cursor functions
import { cursorScale, cursorUnScale } from '../../utils/Cursor'

// Styles and images imports
import './Skills.scss'
import images from '../../assets/images'

const Skills = () => {
    const skillsNameAndLogo = [[images.reactLogo, 'React'], 
                               [images.reduxLogo, 'Redux'], 
                               [images.nodejsLogo, 'NodeJS'],
                               [images.mongodbLogo, 'MongoDB'],
                               [images.jsLogo, 'JS']]

    return (
        // Skills container
        <div className='skills__container flex'>
            {skillsNameAndLogo.map((item, index) => (
                // Skill container
                <div key={index}
                     className='skill flex'
                     onMouseOver={() => cursorScale('6')}
                     onMouseOut={() => cursorUnScale()}
                >
                    {/* Skill logo */}
                    <div className={`skill__animation-${index} skill__logo flex`}>
                        <img src={item[0]} alt='skill logo' />
                    </div>

                    {/* Skill name */}
                    <div className='skill__name-opacity'>
                        {item[1]}
                    </div>
                </div>
            ))}
        </div> 
    )
}

export default Skills