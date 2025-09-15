import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@micro-frontend/shared';

const Home: React.FC = () => {
  const stats = [
    {
      name: 'Total Products',
      value: '12',
      change: '+4.75%',
      changeType: 'positive',
    },
    {
      name: 'Total Users',
      value: '8',
      change: '+54.02%',
      changeType: 'positive',
    },
    {
      name: 'Active Sessions',
      value: '24',
      change: '-1.39%',
      changeType: 'negative',
    },
    {
      name: 'Revenue',
      value: '$12,426',
      change: '+10.18%',
      changeType: 'positive',
    },
  ];

  const quickActions = [
    {
      title: 'Add New Product',
      description: 'Create a new product in the catalog',
      href: '/products/new',
      icon: '📦',
    },
    {
      title: 'Add New User',
      description: 'Create a new user account',
      href: '/users/new',
      icon: '👤',
    },
    {
      title: 'View Products',
      description: 'Browse all products in the catalog',
      href: '/products',
      icon: '📋',
    },
    {
      title: 'Manage Users',
      description: 'View and manage user accounts',
      href: '/users',
      icon: '👥',
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Welcome to the Micro Frontend Demo. Manage your products and users from here.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat) => (
          <Card key={stat.name} className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              {stat.name}
            </dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-gray-900">
                {stat.value}
              </div>
              <div
                className={`inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0 ${
                  stat.changeType === 'positive'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {stat.changeType === 'positive' ? '↗' : '↘'}
                {stat.change}
              </div>
            </dd>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickActions.map((action) => (
            <Link key={action.title} to={action.href}>
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center">
                  <div className="text-2xl mr-3">{action.icon}</div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {action.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {action.description}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 text-sm">📦</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900">
                  New product <span className="font-medium">iPhone 15</span> was added
                </p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-sm">👤</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900">
                  User <span className="font-medium">John Doe</span> was created
                </p>
                <p className="text-sm text-gray-500">4 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center">
                  <span className="text-yellow-600 text-sm">✏️</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900">
                  Product <span className="font-medium">MacBook Pro</span> was updated
                </p>
                <p className="text-sm text-gray-500">6 hours ago</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;