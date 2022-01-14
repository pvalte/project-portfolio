import React from 'react';

function Project({ project }) {    
    const imageStyle={  
        backgroundImage: `url(${project.image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };
    
    return (
        <a class="tile" href={project.link} style={imageStyle}>
            <div class="tile-titles">
                <h4>{project.name}</h4>
                <h5>{project.description}</h5>
            </div>
        </a>
    );
}

export default Project;
