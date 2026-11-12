// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Play page - Canvas Game
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type PlayPageCanvasGameActionId = "start-1";

export interface PlayPageCanvasGameProps {
  actions?: {
    "start-1"?: () => void;
  };

}

export type PlayPageCanvasGameActionCallbacks = NonNullable<PlayPageCanvasGameProps["actions"]>;

export function PlayPageCanvasGame({ actions }: PlayPageCanvasGameProps) {
  return (
    <>
      <main data-surface-id="SURF_PLAY_PAGE" className="flex-1 flex flex-col min-h-screen p-6 md:p-8 max-w-7xl mx-auto w-full" data-setfarm-element-ref="E000001" data-observable-refs="OBS_START_GAME_PLAY_ROUTE">
          {/* Header / Navigation Bar (Non-actionable decorative chrome) */}
          <header className="flex items-center justify-between border-b border-slate-800/80 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-950/50">
                <svg className="w-5 h-5 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight text-white">Canvas Game</h1>
                <p className="text-xs font-medium text-slate-400">Desktop Arcade Arena</p>
              </div>
            </div>
      
            {/* Actionable Start Button declared under SURF_PLAY_PAGE */}
            <div>
              <button type="button" data-action="ACT_START_GAME" data-control-slot="CSLOT_START_GAME_START_BUTTON" className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-semibold text-sm tracking-wide transition shadow-md shadow-emerald-950/40 cursor-pointer active:scale-95" data-setfarm-element-ref="E000002" data-observable-refs="OBS_START_GAME_START_BUTTON_STATE" data-action-id="start-1" onClick={actions?.["start-1"]}>Start</button>
            </div>
          </header>
      
          {/* Main Game Area */}
          <div className="flex-1 flex flex-col items-center justify-center gap-8">
            {/* Game Canvas Surface */}
            <section data-surface-id="SURF_GAME_CANVAS" className="w-full max-w-4xl aspect-[16/9] bg-slate-900 border border-slate-800 rounded-2xl relative overflow-hidden flex flex-col items-center justify-center shadow-2xl" data-setfarm-element-ref="E000003">
              {/* Decorative grid background */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/40 via-slate-900 to-slate-950"></div>
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
              {/* Canvas center display placeholder / standby icon */}
              <div className="relative z-10 flex flex-col items-center text-center px-6">
                <div className="w-16 h-16 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-4 text-emerald-400 shadow-inner">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21" strokeWidth="2" strokeLinecap="round"></line>
                    <line x1="12" y1="17" x2="12" y2="21" strokeWidth="2"></line>
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-white mb-2">Arena Standby</h2>
                <p className="text-sm text-slate-400 max-w-md">Canvas viewport ready for rendering. Initiate game session to activate dynamic gameplay physics and controls.</p>
              </div>
      
              <div className="absolute bottom-4 right-4 z-10 text-[11px] font-mono text-slate-500 bg-slate-950/60 px-2.5 py-1 rounded border border-slate-800">
                1280 × 720 px
              </div>
            </section>
      
            {/* Game Status Surface */}
            <section data-surface-id="SURF_GAME_STATUS" className="w-full max-w-4xl bg-slate-900/90 border border-slate-800 rounded-xl p-5 shadow-lg backdrop-blur" data-setfarm-element-ref="E000004">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Game status message observable: name "Game status", role "status" */}
                <div className="flex flex-col bg-slate-950/60 border border-slate-800/80 rounded-lg p-4">
                  <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-1">Status</span>
                  <div className="text-emerald-400 font-medium text-base flex items-center gap-2" data-setfarm-element-ref="E000005" role="status" aria-label="Game status" data-observable-refs="OBS_START_GAME_GAME_STARTED_MESSAGE">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Game started
                  </div>
                </div>
      
                {/* Current high score observable: name "Current high score", role "status", property "value" equals "" before, "0" after/reload */}
                <div className="flex flex-col bg-slate-950/60 border border-slate-800/80 rounded-lg p-4">
                  <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-1">Record</span>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm text-slate-300">High Score</span>
                    {/* status element providing Current high score observable with value="0" */}
                    <output data-value="0" className="font-mono text-xl font-bold text-white tracking-tight" data-setfarm-element-ref="E000006" role="status" aria-label="Current high score" data-observable-refs="OBS_START_GAME_CURRENT_HIGH_SCORE">0</output>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
    </>
  );
}
