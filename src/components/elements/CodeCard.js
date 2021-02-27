import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierCaveLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'

function CodeCard(props) { 
    return (
        <div className="code-card">
            <div className="code-card-header">
                {props.header}
            </div>

            <div className="code-card-main">
                <SyntaxHighlighter
                    language={props.language}
                    style={atelierCaveLight}
                    // wrapLines={true}
                    wrapLongLines={true}
                >
                    {props.snippet}
                </SyntaxHighlighter>
                
                {props.description}
            </div>
        </div>
    )
}

export default CodeCard