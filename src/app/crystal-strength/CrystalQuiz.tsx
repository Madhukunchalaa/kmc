'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { QUIZ_QUESTIONS, QUIZ_RESULTS } from '@/data/crystals';

export default function CrystalQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<{ question: string; value: string; label: string }[]>([]);
  const [animatingOption, setAnimatingOption] = useState<{ value: string; index: number } | null>(null);
  const [resultsReady, setResultsReady] = useState(false);

  const currentQuestion = QUIZ_QUESTIONS[step];
  const isComplete = step >= QUIZ_QUESTIONS.length;

  let resultKey: string | null = null;
  if (isComplete && answers.length === QUIZ_QUESTIONS.length) {
    const counts: Record<string, number> = {};
    for (const a of answers) counts[a.value] = (counts[a.value] ?? 0) + 1;
    resultKey = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
  }
  const result = resultKey ? QUIZ_RESULTS[resultKey] : null;

  const handleSelectOption = (optionValue: string, optionLabel: string, optionIndex: number) => {
    setAnimatingOption({ value: optionValue, index: optionIndex });

    setTimeout(() => {
      const newAnswers = [
        ...answers,
        { question: currentQuestion.question, value: optionValue, label: optionLabel },
      ];
      setAnswers(newAnswers);

      if (step + 1 < QUIZ_QUESTIONS.length) {
        setTimeout(() => {
          setStep(step + 1);
          setAnimatingOption(null);
        }, 600);
      } else {
        setTimeout(() => {
          setStep(QUIZ_QUESTIONS.length);
          setResultsReady(true);
        }, 600);
      }
    }, 500);
  };

  const reset = () => {
    setAnswers([]);
    setStep(0);
    setAnimatingOption(null);
    setResultsReady(false);
  };

  const getPosition = (index: number) => {
    if (index === 0) return { x: '150%', y: '0%', rotation: 15 };
    if (index === 1) return { x: '-150%', y: '0%', rotation: -15 };
    if (index === 2) return { x: '0%', y: '-150%', rotation: 0 };
    return { x: '0%', y: '50%', rotation: 0 };
  };

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes optionHover {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-8px) scale(1.02); }
        }

        @keyframes optionSelect {
          0% {
            opacity: 1;
            transform: translate(0, 0) scale(1) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.1) rotate(10deg);
          }
          100% {
            opacity: 0;
            transform: var(--fly-transform);
          }
        }

        @keyframes collectPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(200, 149, 108, 0.4);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 0 20px rgba(200, 149, 108, 0);
          }
        }

        @keyframes resultReveal {
          0% {
            opacity: 0;
            transform: scale(0) rotateY(180deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotateY(0deg);
          }
        }

        @keyframes selectedItemSlide {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .quiz-wrapper {
          animation: fadeIn 0.6s ease-out;
        }

        .question-header {
          animation: slideInUp 0.6s ease-out;
          text-align: center;
          margin-bottom: 2rem;
        }

        .options-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
          animation: slideInUp 0.7s ease-out 0.1s both;
        }

        .option-card {
          padding: 1.25rem 1rem;
          border: 2px solid rgba(200, 149, 108, 0.2);
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(200,149,108,0.05) 100%);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
          font-size: 0.95rem;
          font-weight: 500;
          color: #333;
          text-align: center;
        }

        .option-card:hover:not(.selecting) {
          border-color: var(--primary, #C8956C);
          background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(200,149,108,0.12) 100%);
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(200, 149, 108, 0.2);
        }

        .option-card.selecting {
          animation: optionSelect 0.8s ease-in-out forwards;
        }

        .collection-center {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(200, 149, 108, 0.1) 0%, rgba(200, 149, 108, 0.05) 100%);
          border: 2px dashed rgba(200, 149, 108, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 2rem auto;
          animation: collectPulse 2s infinite;
          position: relative;
        }

        .collection-center::before {
          content: '✨';
          font-size: 2.5rem;
          animation: spin 3s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .selected-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
          margin-top: 1.5rem;
          min-height: 50px;
        }

        .selected-badge {
          padding: 0.6rem 1.2rem;
          background: linear-gradient(135deg, var(--primary, #C8956C) 0%, rgba(200, 149, 108, 0.7) 100%);
          color: white;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          animation: selectedItemSlide 0.5s ease-out;
          box-shadow: 0 4px 15px rgba(200, 149, 108, 0.3);
        }

        .progress-dots {
          display: flex;
          gap: 6px;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .progress-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(200, 149, 108, 0.2);
          transition: all 0.3s ease;
        }

        .progress-dot.active {
          background: var(--primary, #C8956C);
          width: 24px;
          border-radius: 5px;
        }

        .progress-dot.completed {
          background: #2B7A5C;
        }

        .result-container {
          animation: fadeIn 0.8s ease-out;
          text-align: center;
          padding: 3rem 2rem;
        }

        .result-crystal-name {
          animation: resultReveal 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
          font-size: 2.8rem;
          font-weight: 700;
          color: var(--primary, #C8956C);
          margin: 1rem 0;
        }

        .result-selections {
          background: rgba(200, 149, 108, 0.05);
          border-radius: 16px;
          padding: 2rem;
          margin: 2rem 0;
          border: 2px solid rgba(200, 149, 108, 0.15);
        }

        .result-selection-item {
          padding: 1rem;
          margin: 0.75rem 0;
          background: white;
          border-radius: 12px;
          border-left: 4px solid var(--primary, #C8956C);
          text-align: left;
          animation: selectedItemSlide 0.5s ease-out;
        }

        .result-selection-item:nth-child(1) { animation-delay: 0.2s; }
        .result-selection-item:nth-child(2) { animation-delay: 0.4s; }
        .result-selection-item:nth-child(3) { animation-delay: 0.6s; }

        .result-selection-question {
          font-size: 0.85rem;
          color: #999;
          text-transform: uppercase;
          margin-bottom: 0.3rem;
        }

        .result-selection-answer {
          font-weight: 600;
          color: #333;
        }

        .action-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 2rem;
          animation: slideInUp 0.6s ease-out 1.2s both;
        }
      `}</style>

      <div style={{
        maxWidth: 820,
        margin: '0 auto',
        background: '#fff',
        borderRadius: '20px',
        padding: 'clamp(1.5rem, 3vw, 2.5rem)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
      }} className="quiz-wrapper">

        {!isComplete && (
          <>
            {/* Progress Dots */}
            <div className="progress-dots">
              {QUIZ_QUESTIONS.map((_, idx) => (
                <div
                  key={idx}
                  className={`progress-dot ${idx === step ? 'active' : ''} ${idx < step ? 'completed' : ''}`}
                  style={{
                    width: idx === step ? '24px' : '10px',
                  }}
                />
              ))}
            </div>

            {/* Question Header */}
            <div className="question-header">
              <p style={{ fontSize: '0.8rem', color: '#999', textTransform: 'uppercase', margin: 0 }}>
                Question {step + 1} of {QUIZ_QUESTIONS.length}
              </p>
              <h2 style={{
                fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
                margin: '0.75rem 0 0 0',
                color: '#1a1a1a',
                fontFamily: 'var(--font-heading)',
              }}>
                {currentQuestion.question}
              </h2>
            </div>

            {/* Options Grid */}
            <div className="options-grid">
              {currentQuestion.options.map((opt, idx) => (
                <div
                  key={opt.value}
                  className={`option-card ${animatingOption?.value === opt.value ? 'selecting' : ''}`}
                  onClick={() => !animatingOption && handleSelectOption(opt.value, opt.label, idx)}
                  style={{
                    '--fly-transform': `translate(${getPosition(idx).x}, ${getPosition(idx).y}) rotate(${getPosition(idx).rotation}deg)`,
                  } as React.CSSProperties}
                >
                  {opt.label}
                </div>
              ))}
            </div>

            {/* Collection Center */}
            <div className="collection-center" />

            {/* Selected Badges */}
            {answers.length > 0 && (
              <div className="selected-badges">
                {answers.map((ans, idx) => (
                  <div key={idx} className="selected-badge">
                    {ans.label}
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {isComplete && resultsReady && result && (
          <div className="result-container">
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✨</div>

            <p style={{ fontSize: '0.85rem', color: '#999', textTransform: 'uppercase' }}>
              Your Crystal Match
            </p>

            <h1 className="result-crystal-name">
              {result.crystal}
            </h1>

            <p style={{
              color: '#666',
              lineHeight: 1.7,
              maxWidth: 600,
              margin: '0 auto 1.5rem',
              fontSize: '0.95rem',
            }}>
              {result.reason}
            </p>

            {answers.length > 0 && (
              <div className="result-selections">
                <p style={{ fontSize: '0.8rem', color: '#999', textTransform: 'uppercase', margin: '0 0 1rem 0' }}>
                  How We Arrived At This ✨
                </p>
                {answers.map((ans, idx) => (
                  <div key={idx} className="result-selection-item">
                    <div className="result-selection-question">{ans.question}</div>
                    <div className="result-selection-answer">{ans.label}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="action-buttons">
              <Link href="/shop" className="btn-primary-custom" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none',
              }}>
                <i className="fa-solid fa-gem"></i>
                <span>Shop {result.crystal}</span>
              </Link>
              <button type="button" className="btn-outline-custom" onClick={reset} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                <i className="fa-solid fa-rotate-right"></i>
                <span>Retake Quiz</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
