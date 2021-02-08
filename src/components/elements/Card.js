import List from "./List"
import SkillSet from "./SkillSet"

function Card(props) {
    return (
        <div 
            className="card card-lock card-connect"
        >
            {props.image !== false && 
                <img 
                    className="card-img-top" 
                    src={props.image}
                    alt={props.title}
                />
            }

            <div 
                className="card-body"
            >
                {props.title !== false &&
                    <h4
                        className="card-title"
                    >
                        {props.title}
                    </h4>
                }
                {props.subtitle !== false &&
                    <h5
                        className="card-subtitle text-muted"
                    >
                        {props.subtitle}
                    </h5>
                }
                {props.danger !== false &&
                    <div 
                        dangerouslySetInnerHTML={{
                            __html: props.text
                        }} 
                    />
                }
                {props.list !== false &&
                    <List 
                        items={props.text}
                    />
                }
                {props.danger === false && props.list === false &&
                    props.text
                }
                {props.source !==false &&
                    <div
                        className="blockquote-footer"
                    >
                        {props.source}
                    </div>
                }
                {props.cloud !==false &&
                    <SkillSet 
                        skills={props.cloud}
                    />
                }
            </div>

            <div 
                className="card-footer"
            >
                <a 
                    href={props.link} 
                    target="_blank" 
                    rel="noreferrer"
                >
                    <button 
                        className="btn btn-primary float-left"
                    >
                        {props.button}
                    </button>
                </a>
                {props.otherButton !== false &&
                    <a 
                        href={props.otherLink} 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <button 
                            className="btn btn-primary float-left other-button"
                        >
                            {props.otherButton}
                        </button>
                    </a>
                }
                <div 
                    className="float-right text-muted card-footer-connect"
                >
                    {props.time}
                </div>
            </div>
        </div>
    )
}

export default Card