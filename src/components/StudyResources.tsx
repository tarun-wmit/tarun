import React, { useState, useMemo } from 'react';
import { 
  Search, 
  FileText, 
  Download, 
  Eye, 
  Filter, 
  Layers, 
  Sparkles,
  BookMarked
} from 'lucide-react';
import { STUDY_RESOURCES } from '../data/mockData.ts';
import { StudyResource, ResourceType } from '../types.ts';

interface StudyResourcesProps {
  onSelectResource: (resource: StudyResource) => void;
  onDownloadResource: (resource: StudyResource) => void;
}

const RESOURCE_TYPES: (ResourceType | 'All')[] = [
  'All',
  'Notes',
  'Important Formulas',
  'Practice Questions',
  'Mock Tests',
  'Previous Year Papers',
  'Study Guides'
];

export const StudyResources: React.FC<StudyResourcesProps> = ({
  onSelectResource,
  onDownloadResource,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<ResourceType | 'All'>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categoriesList = useMemo(() => {
    const set = new Set(STUDY_RESOURCES.map((r) => r.category));
    return ['All', ...Array.from(set)];
  }, []);

  const filteredResources = useMemo(() => {
    return STUDY_RESOURCES.filter((res) => {
      const matchesSearch =
        res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        res.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesType = selectedType === 'All' ? true : res.type === selectedType;
      const matchesCategory = selectedCategory === 'All' ? true : res.category === selectedCategory;

      return matchesSearch && matchesType && matchesCategory;
    });
  }, [searchQuery, selectedType, selectedCategory]);

  return (
    <section id="resources" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-400 mb-3">
              <span>04</span>
              <span className="text-slate-600">·</span>
              <span>FREE STUDY ARCHIVE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
              Study Resources Library
            </h2>
            <p className="mt-4 text-base text-slate-400">
              Download curated notes, formula sheets, previous year papers, and high-yield question banks. Free for all students with zero registration paywalls.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <BookMarked className="w-4 h-4 text-sky-400" />
            <span>{STUDY_RESOURCES.length} CORE DOCUMENTS AVAILABLE</span>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 mb-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-7 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search formulas, notes, calculus, mechanics, exam papers..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-sky-500 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="md:col-span-5 flex items-center gap-2">
              <span className="text-xs text-slate-400 shrink-0 flex items-center gap-1 font-medium">
                <Filter className="w-3.5 h-3.5" />
                <span>Subject:</span>
              </span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:border-sky-500 focus:outline-none cursor-pointer"
              >
                {categoriesList.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === 'All' ? 'All Subjects' : cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Resource Type Tabs (Segmented Buttons) */}
          <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {RESOURCE_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  selectedType === type
                    ? 'bg-sky-500 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredResources.map((res: StudyResource) => (
            <div
              key={res.id}
              className="group rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-sky-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:bg-slate-900 hover:shadow-xl hover:shadow-sky-500/5"
            >
              <div>
                {/* Top Row: Unboxed clean metadata with separators */}
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sky-400 font-semibold">{res.category}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span>{res.type}</span>
                  </div>

                  <span className="text-[11px] text-slate-500">
                    {res.fileSize} · {res.fileFormat}
                  </span>
                </div>

                {/* Resource Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                  {res.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {res.description}
                </p>

                {/* Formula / Preview snippet teaser */}
                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 text-[11px] font-mono text-slate-400 mb-4 line-clamp-2">
                  <span className="text-sky-400 font-bold mr-1">Preview:</span> {res.previewSnippet}
                </div>

                {/* Tags (clean unboxed labels with subtle text styling) */}
                <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400 mb-4">
                  {res.tags.map((tag) => (
                    <span key={tag} className="text-slate-400">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions Row */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">
                  {res.downloadsCount.toLocaleString()} Reads
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectResource(res)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-sky-400" />
                    <span>Quick Preview</span>
                  </button>

                  <button
                    onClick={() => onDownloadResource(res)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-sky-500 hover:bg-sky-400 transition-colors cursor-pointer shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
            <FileText className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <p className="text-slate-300 text-sm font-medium">No study resources found matching &quot;{searchQuery}&quot;</p>
            <p className="text-xs text-slate-500 mt-1">Try searching for calculus, physics, formulas, or check all categories.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedType('All');
                setSelectedCategory('All');
              }}
              className="mt-4 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
