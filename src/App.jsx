import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [totalChar, setTotalChar] = useState(0);
  const [totalWord, setTotalWord] = useState(0);

  const inputHandler = (e) => {
    const text = e.target.value;
    const textArray = text.split(/\s+/).filter(Boolean);

    setTotalWord(textArray.length);
    setInput(text.trim());
    setTotalChar(text.length);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #4f46e5, #7c3aed);
          border-radius: 10px;
          border: 2px solid #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #4338ca, #6d28d9);
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #4f46e5 #f1f5f9;
        }
      `}</style>

      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-xl border border-slate-200">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <span className="text-2xl text-white">📝</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-2">
            Word Counter
          </h2>
          <p className="text-slate-500 text-sm">
            Analyze your text in real-time
          </p>
        </div>

        <form className="space-y-6">
          <div className="relative">
            <textarea
              onChange={inputHandler}
              rows="5"
              placeholder="Start typing your text here..."
              className="[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:my-2 [&::-webkit-scrollbar-thumb]:bg-gradient-to-b [&::-webkit-scrollbar-thumb]:from-blue-600 [&::-webkit-scrollbar-thumb]:to-indigo-600 [&::-webkit-scrollbar-thumb]:rounded-full w-full border border-slate-300 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-700 placeholder-slate-400 transition-all duration-200 resize-none bg-white shadow-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-5 text-center shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-1">{totalChar}</div>
              <div className="text-sm font-medium text-blue-800">Characters</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-xl p-5 text-center shadow-sm">
              <div className="text-2xl font-bold text-emerald-600 mb-1">{totalWord}</div>
              <div className="text-sm font-medium text-emerald-800">Words</div>
            </div>
          </div>
        </form>

        <footer className="text-center text-sm text-slate-400 mt-8 pt-6 border-t border-slate-100">
          Built with React & Tailwind CSS
        </footer>
      </div>
    </div>
  );
}

export default App;