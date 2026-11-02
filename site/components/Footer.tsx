import Link from "next/link";
import summaryData from "@/data/summary.json";

export function Footer() {
  const gitSha = (summaryData as { git_sha?: string }).git_sha || "dcea7c1";

  return (
    <footer className="border-t border-slate-200 bg-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500 space-y-2">
        <p>
          Public posts only · no personal data · no fund recommendations · numbers from{" "}
          <code className="text-slate-700 bg-slate-100 px-1 py-0.5 rounded font-mono">reports/analysis</code> (commit{" "}
          <span className="font-mono text-slate-800 font-semibold">{gitSha}</span>)
        </p>
        <p className="space-x-3">
          <Link href="/evidence" className="text-indigo-600 hover:text-indigo-800 underline font-medium">
            AI Evidence Log
          </Link>
          <span>·</span>
          <span className="text-slate-400">
            Discovery Engine Dashboard · Research Deliverable · Neutral Public Research Environment
          </span>
        </p>
      </div>
    </footer>
  );
}

