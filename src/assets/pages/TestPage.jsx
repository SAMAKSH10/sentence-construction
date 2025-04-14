import React, { useEffect, useState } from 'react';
import { GrLinkNext } from "react-icons/gr";
import { CircularProgressbar } from 'react-circular-progressbar';
import ResultCard from '../../components/ResultCard';

const TestPage = ({ questions }) => {
  const [timer, setTimer] = useState(15);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [questionParts, setQuestionParts] = useState([]);
  const [placedOptions, setPlacedOptions] = useState([]);
  const [currentBlankIndex, setCurrentBlankIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isTestDone, setTestDone] = useState(false);
  const [isSelected, setSelect] = useState(false);

  // Countdown timer
  useEffect(() => {
    if (timer > 0) {
      const timeout = setTimeout(() => setTimer(t => t - 1), 1000);
      return () => clearTimeout(timeout);
    } else {
      handleAutoNext();
    }
  }, [timer]);

  const formatTimer = (t) => `00:${t.toString().padStart(2, '0')}`;
  const score = userAnswers.filter(ans => ans.isCorrect).length;

  // Update selected state
  useEffect(() => {
    setSelect(!placedOptions.includes(null));
  }, [placedOptions]);

  // Set question
  useEffect(() => {
    if (questions.length > 0) {
      const q = questions[questionIndex];
      const parts = q.question.split('_____________');
      setQuestionParts(parts);
      setOptions(q.options);
      setPlacedOptions(Array(parts.length - 1).fill(null));
      setCurrentBlankIndex(0);
      setTimer(15);
    }
  }, [questions, questionIndex]);

  const handleOptionClick = (opt) => {
    if (currentBlankIndex >= placedOptions.length) return;
    const updated = [...placedOptions];
    updated[currentBlankIndex] = opt;
    setPlacedOptions(updated);
    setOptions(options.filter(o => o !== opt));
    setCurrentBlankIndex(currentBlankIndex + 1);
  };

  const handleBlankClick = (idx) => {
    const removed = placedOptions[idx];
    if (removed !== null) {
      const updated = [...placedOptions];
      updated[idx] = null;
      setPlacedOptions(updated);
      setOptions([...options, removed]);
      setCurrentBlankIndex(idx);
    }
  };

  const recordAnswer = (answer, isCorrect) => {
    return {
      questionId: questions[questionIndex].questionId,
      answer,
      isCorrect
    };
  };

  const handleNext = () => {
    if (placedOptions.includes(null)) {
      alert('Please fill in all blanks before moving on.');
      return;
    }

    const isCorrect = JSON.stringify(placedOptions) === JSON.stringify(questions[questionIndex].correctAnswer);
    setUserAnswers([...userAnswers, recordAnswer(placedOptions, isCorrect)]);

    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setTestDone(true);
    }
    setSelect(false);
  };

  const handleAutoNext = () => {
    const isCorrect = JSON.stringify(placedOptions) === JSON.stringify(questions[questionIndex].correctAnswer);
    const answer = placedOptions.includes(null) ? [] : placedOptions;

    setUserAnswers([...userAnswers, recordAnswer(answer, !placedOptions.includes(null) && isCorrect)]);

    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setTestDone(true);
    }
  };

  const handleQuit = () => {
    window.location.reload();
  };

  return (
    <div className='h-full w-full flex justify-center items-center bg-gray-50 p-24'>
      <div className={`w-[60%] rounded-xl p-5 ${!isTestDone && 'bg-white shadow-2xl'}`}>

        {!isTestDone && (
          <div className='w-full flex justify-between p-4'>
            <span className="text-lg font-semibold text-gray-400">{formatTimer(timer)}</span>
            <button className='border-none outline-1 outline-gray-300 p-2 px-4 rounded' onClick={handleQuit}>Quit</button>
          </div>
        )}

        {isTestDone ? (
          <div className='mt-6 flex flex-col items-center gap-10'>
            <CircularProgressbar
              className='size-40 my-2'
              value={(score / questions.length) * 100}
              text={`${(score / questions.length) * 100}%`}
              styles={{
                path: { stroke: '#065f46' },
                text: { fill: '#065f46', fontSize: '16px' },
                trail: { stroke: 'none' }
              }}
            />
            <p className='text-center text-sm w-3/4'>
              While you correctly formed several sentences, there are a couple of areas where improvement is needed. Pay close attention to sentence structure and word placement to ensure clarity and correctness. Review your responses below for more details.
            </p>
            <button className='p-2 border border-purple-700 text-purple-800 w-[30%] mb-10'>Go to Dashboard</button>
            {userAnswers.map((ans, idx) => (
              <ResultCard
                key={idx}
                questions={questions}
                index={idx}
                status={
                  ans.answer.length === 0
                    ? 'not answered'
                    : ans.isCorrect
                      ? 'correct'
                      : 'incorrect'
                }
                response={ans.answer}
              />
            ))}
          </div>
        ) : (
          <>
            <div className='flex gap-1 mb-5'>
              {questions.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-full h-2 rounded-sm ${idx < questionIndex ? 'bg-yellow-400':'bg-gray-100' }`}
                />
              ))}
            </div>

            <div className='text-center py-5 text-md text-gray-400'>
              Select the missing words in the correct order
            </div>

            <div className='mt-8 text-md'>
              {questionParts.map((part, index) => (
                <span key={index} className='text-sm'>
                  {part}
                  {index < placedOptions.length && (
                    <button
                      onClick={() => handleBlankClick(index)}
                      className='text-black px-2 my-5 rounded'
                    >
                      <div className='flex flex-col flex-wrap h-[20%]'>
                        <span className={`${placedOptions[index] && 'bg-gray-50 text-gray-600 rounded border border-gray-300 text-sm p-1'}`}>
                          {placedOptions[index] ?? ''}
                        </span>
                        _____________
                      </div>
                    </button>
                  )}
                </span>
              ))}
            </div>

            <div className='mt-20 flex flex-wrap gap-2 justify-center'>
              {options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(opt)}
                  className='bg-gray-50 text-gray-600 px-2 py-1 rounded border border-gray-300 text-sm'
                >
                  {opt}
                </button>
              ))}
            </div>

            <div className='mt-6 flex justify-end'>
              <button
                onClick={handleNext}
                className={`text-white px-6 py-4 rounded border ${!isSelected ? 'border-gray-300' : 'border-purple-800 bg-purple-700'}`}
              >
                <GrLinkNext className={`${isSelected ? 'text-white' : 'text-gray-400'}`} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TestPage;
