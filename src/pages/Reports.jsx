import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { BarChart3, Download, Calendar, Filter, TrendingUp, FileText } from 'lucide-react';

const Reports = () => {
    const reports = [
        { title: 'Q1 2026 Development Report', date: '2026-03-01', type: 'Quarterly', status: 'Published', downloads: 245 },
        { title: 'Annual Performance Review 2025', date: '2026-01-15', type: 'Annual', status: 'Published', downloads: 532 },
        { title: 'Infrastructure Progress Report', date: '2026-02-20', type: 'Monthly', status: 'Published', downloads: 189 },
        { title: 'Agricultural Development Summary', date: '2026-02-28', type: 'Monthly', status: 'Draft', downloads: 0 },
        { title: 'Health Sector Achievements', date: '2026-02-15', type: 'Quarterly', status: 'Published', downloads: 312 },
    ];

    const stats = [
        { label: 'Total Reports', value: '156', trend: '+12%', color: 'primary' },
        { label: 'Published', value: '142', trend: '+8%', color: 'success' },
        { label: 'In Draft', value: '14', trend: '+4', color: 'gray' },
        { label: 'Downloads', value: '12.5K', trend: '+23%', color: 'primary' },
    ];

    return (
        <div className="flex h-screen bg-background overflow-hidden">
            <Sidebar />

            <div className="flex-1 flex flex-col overflow-hidden">
                <Header title="Reports & Analytics" />

                <div className="flex-1 overflow-y-auto p-4 md:p-8">
                    <div className="mb-6 md:mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Reports & Analytics</h2>
                        <p className="text-sm md:text-base text-gray-600">Generate and view performance reports</p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-background rounded-2xl p-4 md:p-6 shadow-neumorphism hover:shadow-neumorphism-sm transition-all">
                                <p className="text-xs md:text-sm text-gray-500 mb-2">{stat.label}</p>
                                <p className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">{stat.value}</p>
                                <p className="text-xs md:text-sm text-success font-medium flex items-center gap-1">
                                    <TrendingUp size={14} />
                                    {stat.trend}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Filters */}
                    <div className="bg-background rounded-2xl p-4 shadow-neumorphism mb-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex flex-wrap items-center gap-3">
                                <Filter size={20} className="text-gray-600" />
                                <button className="px-4 py-2 rounded-lg bg-primary text-white shadow-neumorphism-sm text-sm">
                                    All Reports
                                </button>
                                <button className="px-4 py-2 rounded-lg bg-background shadow-neumorphism-sm text-sm text-gray-600">
                                    Published
                                </button>
                                <button className="px-4 py-2 rounded-lg bg-background shadow-neumorphism-sm text-sm text-gray-600">
                                    Draft
                                </button>
                            </div>
                            <button className="px-6 py-2 bg-primary text-white rounded-xl shadow-neumorphism-sm hover:shadow-neumorphism transition-all flex items-center gap-2">
                                <FileText size={18} />
                                Generate Report
                            </button>
                        </div>
                    </div>

                    {/* Reports List */}
                    <div className="bg-background rounded-2xl p-4 md:p-6 shadow-neumorphism">
                        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 md:mb-6">Recent Reports</h3>

                        <div className="space-y-3">
                            {reports.map((report, index) => (
                                <div key={index} className="bg-background rounded-xl p-4 md:p-5 shadow-neumorphism-sm hover:shadow-neumorphism transition-all">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="flex items-start gap-4 flex-1">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <BarChart3 className="text-primary" size={24} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-1">{report.title}</h4>
                                                <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-gray-500">
                                                    <span className="flex items-center gap-1">
                                                        <Calendar size={14} />
                                                        {report.date}
                                                    </span>
                                                    <span className="px-2 py-1 rounded bg-primary/10 text-primary">
                                                        {report.type}
                                                    </span>
                                                    <span className={`px-2 py-1 rounded ${report.status === 'Published'
                                                            ? 'bg-success/10 text-success'
                                                            : 'bg-gray-200 text-gray-600'
                                                        }`}>
                                                        {report.status}
                                                    </span>
                                                    {report.downloads > 0 && (
                                                        <span>{report.downloads} downloads</span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex gap-2">
                                            <button className="px-4 py-2 rounded-lg bg-background shadow-neumorphism-sm hover:shadow-neumorphism transition-all text-sm text-gray-700">
                                                View
                                            </button>
                                            {report.status === 'Published' && (
                                                <button className="px-4 py-2 rounded-lg bg-primary text-white shadow-neumorphism-sm hover:shadow-neumorphism transition-all text-sm flex items-center gap-2">
                                                    <Download size={16} />
                                                    <span className="hidden md:inline">Download</span>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reports;
