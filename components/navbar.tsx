// components/Header.js
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";

const Header = () => {
  // You can make this dynamic by passing props or using state management
  const cartItemCount = 0;

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-orange-500 rounded-lg p-2">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-sm"></div>
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-sm"></div>
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-sm"></div>
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-sm"></div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Bella Vista</h1>
              <p className="text-sm text-gray-500">Fine Dining Experience</p>
            </div>
          </Link>

          {/* Right side - User and Cart */}
          <div className="flex items-center space-x-6">
            {/* User Icon */}
            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              <User size={20} />
            </button>

            {/* Cart */}
            <Link
              href="/cart"
              className="flex items-center space-x-1 text-gray-900 hover:text-gray-700 transition-colors"
            >
              <ShoppingCart size={20} />
              <span className="font-medium">Cart</span>
              <span className="text-gray-600">({cartItemCount})</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
