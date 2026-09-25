import React from 'react';
import { X, Download, FileText, Calendar, HardDrive, Check, Copy } from 'lucide-react';
import { StudyResource } from '../types.ts';

interface ResourceModalProps {
  resource: StudyResource | null;
  onClose: () => void;
  onDownload: (res: StudyResource) => void;
}

export const ResourceModal: React.FC<ResourceModalProps> = ({
  resource,
  onClose,
  onDownload,
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!resource) return null;

  const handleCopySnippet = () => {
    navigator.clipboard.writeText(resource.previewSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
      <div
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-start justify-between bg-slate-950/60">
          <div className="pr-6">
            <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-1.5">
              <span>{resource.category}</span>
              <span className="text-slate-600">·</span>
              <span>{resource.type}</span>
            </div>
            <h3 className="text-xl font-bold text-white leading-snug">
              {resource.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Metadata Grid */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-center">
            <div>
              <span className="text-slate-500 block text-[10px] uppercase">Format</span>
              <span className="text-slate-200 font-bold">{resource.fileFormat}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px] uppercase">Size</span>
              <span className="text-slate-200 font-bold">{resource.fileSize}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px] uppercase">Pages / Drills</span>
              <span className="text-slate-200 font-bold">{resource.pages ? `${resource.pages} pgs` : 'Standard'}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Document Scope &amp; Study Context
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {resource.description}
            </p>
          </div>

          {/* Key Formula / Excerpt Preview */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-sky-400 font-mono">
                Key Extract / Formula Preview
              </h4>
              <button
                onClick={handleCopySnippet}
                className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-sky-200 leading-relaxed break-words">
              {resource.previewSnippet}
            </div>
          </div>

          {/* Study Tags */}
          <div className="flex flex-wrap gap-2 text-xs text-slate-400">
            {resource.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <div className="text-xs text-slate-500 font-mono">
            Updated {resource.updatedDate} · {resource.downloadsCount.toLocaleString()} Students
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-700 rounded-lg cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => onDownload(resource)}
              className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 rounded-lg flex items-center gap-1.5 shadow-md cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resource</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
