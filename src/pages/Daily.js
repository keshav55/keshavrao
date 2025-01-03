import React from 'react';
import { dailyThoughts } from '../data/dailyThoughts';

function Daily() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-2xl mx-auto">
        <div className="space-y-8">
          {dailyThoughts.map((thought) => (
            <div 
              key={thought.id} 
              className="border-b border-gray-800 pb-6"
            >
              <p className="text-lg mb-2">{thought.thought}</p>
              <div className="text-sm text-gray-500">
                {thought.time} · {thought.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Daily;
