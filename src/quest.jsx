import React, { useState } from 'react'
import './App.css'

function Questions() {
    // Instead of an object, we'll use a single string to track which question is open
    const [activeQuestion, setActiveQuestion] = useState(null);

    const toggleQuestion = (questionId) => {
        // If clicking the same question, close it. Otherwise, open the new one
        setActiveQuestion(activeQuestion === questionId ? null : questionId);
    };

    return (
        <div className="questions-container">
            <h2>It may be your question too</h2>

            <div className="display">
                <div className="question-item">
                    <div className="question-header" onClick={() => toggleQuestion('question1')}>
                        <p>Major questions</p>
                        <span>{activeQuestion === 'question1' ? '−' : '+'}</span>
                    </div>
                    <div className={`question-content ${activeQuestion === 'question1' ? 'active' : ''}`}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat aut impedit nostrum incidunt libero distinctio exercitationem non, reiciendis pariatur voluptates amet perferendis excepturi beatae iure obcaecati sit atque suscipit?</p>
                    </div>
                </div>

                <div className="question-item">
                    <div className="question-header" onClick={() => toggleQuestion('question2')}>
                        <p>Average coverage questions</p>
                        <span>{activeQuestion === 'question2' ? '−' : '+'}</span>
                    </div>
                    <div className={`question-content ${activeQuestion === 'question2' ? 'active' : ''}`}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat aut impedit nostrum incidunt libero distinctio exercitationem non, reiciendis pariatur voluptates amet perferendis excepturi beatae iure obcaecati sit atque suscipit?</p>
                    </div>
                </div>

                <div className="question-item">
                    <div className="question-header" onClick={() => toggleQuestion('question3')}>
                        <p>How to save up</p>
                        <span>{activeQuestion === 'question3' ? '−' : '+'}</span>
                    </div>
                    <div className={`question-content ${activeQuestion === 'question3' ? 'active' : ''}`}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat aut impedit nostrum incidunt libero distinctio exercitationem non, reiciendis pariatur voluptates amet perferendis excepturi beatae iure obcaecati sit atque suscipit?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions
