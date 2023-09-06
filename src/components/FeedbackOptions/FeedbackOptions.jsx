import { ContainerFeedback } from "./FeedbackOptions.styled"


export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
    const keysOptions = Object.keys(options)
    return (
        <ContainerFeedback>          
            {keysOptions.map((option) => (
                <button type="button"
                    key={option}
                    onClick={onLeaveFeedback}
                    value={option}
                >{option.charAt(0).toUpperCase() + option.slice(1)}</button>
            ))} 
        </ContainerFeedback>
    )
}

// Change name file 