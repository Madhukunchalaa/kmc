'use client';

import { useState } from 'react';
import Link from 'next/link';
import { QUIZ_QUESTIONS, QUIZ_RESULTS } from '@/data/crystals';

export default function CrystalQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const submit = (value: string) => {
    const next = [...answers, value];
    if (step + 1 < QUIZ_QUESTIONS.length) {
      setAnswers(next);
      setStep(step + 1);
    } else {
      setAnswers(next);
      setStep(QUIZ_QUESTIONS.length); // done
    }
  };

  const reset = () => {
    setAnswers([]);
    setStep(0);
  };

  const done = step >= QUIZ_QUESTIONS.length;

  let resultKey: string | null = null;
  if (done && answers.length === QUIZ_QUESTIONS.length) {
    const counts: Record<string, number> = {};
    for (const a of answers) counts[a] = (counts[a] ?? 0) + 1;
    resultKey = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
  }
  const result = resultKey ? QUIZ_RESULTS[resultKey] : null;

  return (
    <div
      style={{
        maxWidth: 720,
        margin: '0 auto',
        background: '#fff',
        borderRadius: '20px',
        padding: 'clamp(1.5rem, 3vw, 2.5rem)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
      }}
    >
      {!done && (
        <>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-light,#999)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Question {step + 1} of {QUIZ_QUESTIONS.length}
          </div>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', marginBottom: '1.5rem' }}>
            {QUIZ_QUESTIONS[step].question}
          </h3>
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            {QUIZ_QUESTIONS[step].options.map((opt) => (
              <button
                key={opt.label}
                onClick={() => submit(opt.value)}
                style={{
                  textAlign: 'left',
                  padding: '1rem 1.25rem',
                  border: '1px solid rgba(0,0,0,0.1)',
                  borderRadius: '12px',
                  background: 'transparent',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary,#C8956C)';
                  e.currentTarget.style.background = 'rgba(200,149,108,0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </>
      )}

      {done && result && (
        <div className="text-center">
          <div style={{ fontSize: '3rem' }}>✨</div>
          <p className="section-eyebrow">Your Crystal Match</p>
          <h3 className="section-title" style={{ fontSize: '2rem' }}>
            {result.crystal}
          </h3>
          <p style={{ color: 'var(--text-light,#666)', lineHeight: 1.7 }}>{result.reason}</p>
          <div className="d-flex gap-3 justify-content-center flex-wrap mt-4">
            <Link href="/shop" className="btn-primary-custom">
              <i className="fa-solid fa-gem"></i>
              <span>Shop {result.crystal}</span>
            </Link>
            <button type="button" className="btn-outline-custom" onClick={reset}>
              <i className="fa-solid fa-rotate-right"></i>
              <span>Retake Quiz</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
