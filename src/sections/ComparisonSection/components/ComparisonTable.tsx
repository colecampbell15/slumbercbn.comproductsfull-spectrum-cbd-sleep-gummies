const CHECK = (
  <div className="flex items-center justify-center">
    <div className="w-7 h-7 rounded-full bg-[#5B2D8E] flex items-center justify-center">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  </div>
);

const CROSS = (
  <div className="flex items-center justify-center">
    <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center">
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
        <path d="M3 3L9 9M9 3L3 9" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>
  </div>
);

const ROWS = [
  ["Professional-Grade Formula", true, false, false],
  ["Whitens After 1 Use", true, false, false],
  ["30-Day Money-Back Guarantee", true, false, true],
  ["No Sensitivity Formula", true, false, false],
  ["Dentist Developed", true, false, true],
  ["Enamel Safe", true, true, true],
  ["Removes 10+ Year Stains", true, false, true],
  ["At-Home — No Appointment", true, true, false],
];

export const ComparisonTable = () => {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-gray-50">
            <th className="text-left font-bold text-gray-700 px-4 py-4 w-1/2 border-b border-gray-200"></th>
            <th className="text-center px-4 py-4 border-b border-gray-200">
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-full bg-[#5B2D8E] flex items-center justify-center">
                  <span className="text-white font-black text-xs">DW</span>
                </div>
                <span className="text-[#5B2D8E] font-black text-xs">Dr.White™</span>
              </div>
            </th>
            <th className="text-center px-4 py-4 border-b border-gray-200">
              <span className="text-gray-500 font-semibold text-xs">Other<br/>Strips</span>
            </th>
            <th className="text-center px-4 py-4 border-b border-gray-200">
              <span className="text-gray-500 font-semibold text-xs">In-Office<br/>Treatment</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map(([label, drWhite, other, office], i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
              <td className="text-gray-700 font-medium px-4 py-3 text-sm border-b border-gray-100">{label}</td>
              <td className="text-center px-4 py-3 border-b border-gray-100 bg-purple-50/30">{drWhite ? CHECK : CROSS}</td>
              <td className="text-center px-4 py-3 border-b border-gray-100">{other ? CHECK : CROSS}</td>
              <td className="text-center px-4 py-3 border-b border-gray-100">{office ? CHECK : CROSS}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
