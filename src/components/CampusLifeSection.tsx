import React from 'react';
import { Home, UtensilsCrossed, Dumbbell, MapPin, Wifi, Car } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tab } from '@headlessui/react';

const accommodations = [
  {
    id: 1,
    name: 'Hostel Block R1',
    type: 'Boys Hostel',
    capacity: '600+ Students',
    features: [
      'AC Rooms (Double Sharing)',
      'Wi-Fi',
      'Common Laundry',
      '1 Refrigerator, 1 Microwave/Oven & Water Heater/Cooler per floor',
    ],
    icon: Home,
  },
  {
    id: 2,
    name: 'Hostel Block R2',
    type: 'Boys Hostel',
    capacity: '600+ Students',
    features: [
      'AC Rooms (Double Sharing)',
      'Wi-Fi',
      'Common Laundry',
      '1 Refrigerator, 1 Microwave/Oven & Water Heater/Cooler per floor',
    ],
    icon: Home,
  },
  {
    id: 3,
    name: 'Hostel Block R3',
    type: 'Girls Hostel',
    capacity: '300+ Students',
    features: [
      'AC Rooms (Double Sharing)',
      'Wi-Fi',
      'Common Laundry',
      '1 Refrigerator, 1 Microwave/Oven & Water Heater/Cooler per floor',
    ],
    icon: Home,
  },
];

const facilities = [
  {
    icon: UtensilsCrossed,
    title: 'Central Mess',
    description: 'Nutritious meals with diverse menu options',
    details: ['Multi-cuisine', 'Dietary preferences', 'Quality assured'],
  },
  {
    icon: Dumbbell,
    title: 'Learners Arena',
    description: 'Modern sports facilities and fitness center',
    details: [
      'Basketball court x 2',
      'Tennis lawn x 2',
      'Cricket nets x 2',
      'Swimming Pool',
      'Gym',
      'Badminton Court x 4',
      'Indoor games',
    ],
  },
  {
    icon: Wifi,
    title: 'High-Speed WiFi',
    description: 'Campus-wide fiber connectivity',
    details: ['24/7 uptime', 'Secure network'],
  },
  {
    icon: Car,
    title: 'Transportation',
    description: 'Shuttle services and parking facilities',
    details: ['Campus shuttle', 'City connectivity', 'Secure parking'],
  },
];

export default function CampusLifeSection() {
  return (
    <section id="campus" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
            Campus Life
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Explore our comfortable accommodation and world-class facilities that make Newton School of Technology a thriving community.
          </p>
        </div>

        {/* Tabs for Accommodation & Facilities */}
        <Tab.Group>
          <Tab.List className="flex justify-center space-x-4 mb-12">
            {['Accommodation', 'Facilities'].map((tab) => (
              <Tab
                key={tab}
                className={({ selected }) =>
                  `px-6 py-2 font-medium rounded-full focus:outline-none transition ${
                    selected
                      ? 'bg-indigo-500 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                  }`
                }
              >
                {tab}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels>
            <Tab.Panel>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {accommodations.map((hostel, idx) => {
                  const Icon = hostel.icon;
                  return (
                    <motion.div
                      key={hostel.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <Card className="relative overflow-hidden hover:shadow-2xl transition-shadow rounded-2xl">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-2">
                            <div className="p-2 bg-indigo-100 rounded-lg">
                              <Icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                            </div>
                            <span className="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-full">
                              {hostel.capacity}
                            </span>
                          </div>
                          <CardTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                            {hostel.name}
                          </CardTitle>
                          <CardDescription className="text-indigo-600 font-medium">
                            {hostel.type}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">
                            Features:
                          </h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                            {hostel.features.map((feature, fIdx) => (
                              <li key={fIdx}>{feature}</li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </Tab.Panel>

            <Tab.Panel>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {facilities.map((facility, idx) => {
                  const Icon = facility.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <Card className="p-6 hover:shadow-2xl transition-shadow rounded-2xl">
                        <div className="flex flex-col items-center text-center">
                          <div className="p-4 bg-indigo-600 rounded-3xl mb-4">
                            <Icon className="h-8 w-8 text-white" aria-hidden="true" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                            {facility.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-3">
                            {facility.description}
                          </p>
                          <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-1">
                            {facility.details.map((detail, dIdx) => (
                              <li key={dIdx}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>

        {/* Virtual Tour CTA */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Experience Our Campus
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-xl mx-auto">
              Take a virtual tour or schedule an in-person visit to explore our state-of-the-art facilities.
            </p>
            <Button
              size="lg"
              onClick={() => window.open('https://maps.app.goo.gl/dpsdhDSJVo7R3j8A7', '_blank')}
              className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-full px-8 py-3 hover:scale-105 focus:ring-4 focus:ring-indigo-300 transition-transform"
            >
              <MapPin className="h-5 w-5 mr-2" aria-hidden="true" />
              Schedule a Tour
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
