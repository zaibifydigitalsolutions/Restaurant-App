import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Users, DollarSign, TrendingUp, Package, Search, Filter } from 'lucide-react';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('menu');
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: 'Caesar Salad',
      description: 'Crisp romaine lettuce, parmesan cheese, croutons, caesar dressing',
      price: 8.99,
      category: 'appetizers',
      available: true,
      popular: true
    },
    {
      id: 2,
      name: 'Grilled Salmon',
      description: 'Fresh Atlantic salmon with lemon butter sauce, served with vegetables',
      price: 18.99,
      category: 'mains',
      available: true,
      popular: true
    }
  ]);

  const [orders] = useState([
    {
      id: 1001,
      customer: 'John Doe',
      items: ['Caesar Salad', 'Grilled Salmon'],
      total: 27.98,
      status: 'Preparing',
      time: '2:30 PM',
      type: 'Delivery'
    },
    {
      id: 1002,
      customer: 'Jane Smith',
      items: ['Chocolate Cake'],
      total: 6.99,
      status: 'Ready',
      time: '2:45 PM',
      type: 'Pickup'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['appetizers', 'mains', 'desserts', 'beverages'];

  const filteredMenuItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = {
    totalOrders: orders.length,
    totalRevenue: orders.reduce((sum, order) => sum + order.total, 0),
    activeOrders: orders.filter(order => order.status === 'Preparing').length,
    menuItems: menuItems.length
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Preparing': return 'bg-yellow-100 text-yellow-800';
      case 'Ready': return 'bg-green-100 text-green-800';
      case 'Completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Orders</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalOrders}</p>
            </div>
            <Users className="w-8 h-8 text-purple-600" />
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Revenue</p>
              <p className="text-2xl font-bold text-gray-900">${stats.totalRevenue.toFixed(2)}</p>
            </div>
            <DollarSign className="w-8 h-8 text-green-600" />
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Orders</p>
              <p className="text-2xl font-bold text-gray-900">{stats.activeOrders}</p>
            </div>
            <TrendingUp className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Menu Items</p>
              <p className="text-2xl font-bold text-gray-900">{stats.menuItems}</p>
            </div>
            <Package className="w-8 h-8 text-orange-600" />
          </div>
        </div>
      </div>

      <div className="card mb-6">
        <div className="flex space-x-1 border-b">
          <button
            onClick={() => setActiveTab('menu')}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === 'menu'
                ? 'text-purple-600 border-b-2 border-purple-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Menu Management
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === 'orders'
                ? 'text-purple-600 border-b-2 border-purple-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Orders
          </button>
        </div>
      </div>

      {activeTab === 'menu' && (
        <div className="card">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h2 className="text-xl font-semibold">Menu Items</h2>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="form-input pl-10"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="form-input"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
              <button className="btn btn-primary">
                <Plus className="w-4 h-4 mr-2" />
                Add Item
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Item</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Category</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Price</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredMenuItems.map(item => (
                  <tr key={item.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="capitalize text-gray-700">{item.category}</span>
                    </td>
                    <td className="py-3 px-4 font-medium">${item.price.toFixed(2)}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
                        item.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {item.available ? 'Available' : 'Unavailable'}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <Edit2 className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'orders' && (
        <div className="card">
          <h2 className="text-xl font-semibold mb-6">Recent Orders</h2>
          
          <div className="space-y-4">
            {orders.map(order => (
              <div key={order.id} className="border rounded-lg p-4 hover:bg-gray-50">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-medium text-gray-900">Order #{order.id}</p>
                    <p className="text-sm text-gray-600">{order.customer} - {order.time}</p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-flex px-2 py-1 text-xs rounded-full ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                    <p className="text-sm text-gray-600 mt-1">{order.type}</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-600">
                    {order.items.join(', ')}
                  </div>
                  <p className="font-semibold text-gray-900">${order.total.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
