import { Search, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = ({ title = "Dashboard" }) => {
    const navigate = useNavigate();

    return (
        <div className="bg-background px-4 md:px-8 py-4 flex items-center justify-between">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800 ml-12 lg:ml-0">{title}</h1>

            <div className="flex items-center gap-2 md:gap-4">
                {/* Search Bar - Hidden on mobile */}
                <div className="relative hidden md:block">
                    <input
                        type="text"
                        placeholder="Search anything..."
                        className="w-48 lg:w-80 px-4 py-2 pl-10 rounded-xl bg-background shadow-neumorphism-inset text-sm focus:outline-none"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                </div>

                {/* Check-in Button - Hidden on small screens */}
                <button className="hidden lg:flex px-6 py-2 bg-success text-white rounded-xl shadow-neumorphism-sm hover:shadow-neumorphism transition-all items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm font-medium">Check-in</span>
                    <span className="text-xs opacity-90">12:03:40 pm</span>
                </button>

                {/* Notification */}
                <div className="relative">
                    <button className="w-10 h-10 rounded-xl bg-background shadow-neumorphism flex items-center justify-center hover:shadow-neumorphism-sm transition-all">
                        <Bell size={20} className="text-gray-600" />
                    </button>
                    <div className="absolute top-0 right-0 w-2 h-2 bg-danger rounded-full"></div>
                </div>

                {/* User Avatar */}
                <button
                    onClick={() => navigate('/profile')}
                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-orange-500 shadow-neumorphism-sm overflow-hidden hover:shadow-neumorphism transition-all"
                >
                    <img src="https://i.pravatar.cc/150?img=12" alt="User" className="w-full h-full object-cover" />
                </button>
            </div>
        </div>
    );
};

export default Header;
