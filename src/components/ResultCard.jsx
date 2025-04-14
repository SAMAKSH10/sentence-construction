import React from 'react';

const ResultCard = ({ questions, index, status, response }) => {
  const constructSentence = (insertedOptions) => {
    const parts = questions[index]?.question.split('_____________') || [];
    let result = '';
    for (let i = 0; i < parts.length; i++) {
      result += parts[i];
      if (i < insertedOptions.length) {
        result += ` ${insertedOptions[i]} `;
      }
    }
    return result.trim();
  };

  const currentQuestion = questions[index];

  return (
    index+1 < questions.length && (<div className="w-full p-4 bg-white shadow-md rounded-lg mb-4 text-sm">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600 font-medium bg-gray-100 px-3 py-1 rounded-full">Prompt</span>
          <span className="text-sm text-gray-500 font-semibold">
            {index + 1} <span className="text-gray-300">/ {questions.length}</span>
          </span>
        </div>
  
        <div className="mb-4 text-gray-800 font-medium text-base">
        {constructSentence(currentQuestion?.correctAnswer || [])}
        </div>
  
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="text-sm mb-2 text-gray-500 font-semibold">
            Your response:{' '}
            <span
              className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                status === 'correct'
                  ? 'bg-green-50 text-green-700'
                  : 'bg-red-50 text-red-700'
              }`}
            >
              {status}
            </span>
          </div>
          <div className="text-gray-700 font-sm">
            {constructSentence(response || [])}
          </div>
        </div>
      </div>)
  );
};

export default ResultCard;
