import { Statistics } from "components/Statistics/Statistics";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { useState } from "react";
import { SectionTitle } from "./SectionTitle/SectionTitle";



export const App = () => {

  const [good, setgood] = useState(0)
  const [neutral, setneutral] = useState(0)
  const [bad, setbad] = useState(0)

  const handlerButtonFeedback = ({ target: { value } }) => {
    if (value === 'good') {
      setgood(prevCount => prevCount + 1)
    }
    if (value === 'neutral') {
      setneutral(prevCount => prevCount + 1)
    }
    if (value === 'bad') {
      setbad(prevCount => prevCount + 1)
    }
  }

   
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
      >
        <SectionTitle
          tytle="Please leave feedback"
        >
          <FeedbackOptions
            onLeaveFeedback={handlerButtonFeedback}
          options={{good, bad, neutral}}
          ></FeedbackOptions>

          {good + bad + neutral > 0 ?
            (<Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              countTotalFeedback={good+bad+neutral}
            countPositiveFeedbackPercentage={(good / (good + neutral + bad)) * 100 || 0}
            ></Statistics>) : (<p>There is no feedback</p>)}  
        
        </SectionTitle>
    </div>
  )
}