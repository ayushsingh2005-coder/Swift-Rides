
import React from "react";
import { Car, Users, Shield, ThumbsUp, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-2">About SwiftRide</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Connecting drivers with empty seats to passengers looking for a ride
        </p>
        
        {/* Hero Section */}
        <div className="bg-[#00B2A9] text-white rounded-lg shadow-md p-8 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg">
              At SwiftRide, we're on a mission to make travel more affordable, social, and sustainable.
              We believe in creating a community where sharing rides becomes the smart way to travel,
              saving money while reducing carbon emissions and traffic congestion.
            </p>
          </div>
        </div>
        
        {/* Features */}
        <div className="max-w-5xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Why Choose SwiftRide?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-[#00B2A9]/10 inline-block rounded-full">
                  <Car className="h-8 w-8 text-[#00B2A9]" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-gray-600">
                Simple booking process and user-friendly platform make finding or offering rides quick and hassle-free.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-[#00B2A9]/10 inline-block rounded-full">
                  <Users className="h-8 w-8 text-[#00B2A9]" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                Join a trusted community of drivers and passengers who share your routes and travel interests.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-[#00B2A9]/10 inline-block rounded-full">
                  <Shield className="h-8 w-8 text-[#00B2A9]" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Safety First</h3>
              <p className="text-gray-600">
                Verified profiles, ratings, and review systems ensure safe and reliable ridesharing experiences.
              </p>
            </div>
          </div>
        </div>
        
        {/* How It Works */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-[#00B2A9] text-white flex items-center justify-center font-bold text-lg">1</div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Search for a Ride</h3>
                <p className="text-gray-600">
                  Enter your departure and arrival locations to find available rides.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-[#00B2A9] text-white flex items-center justify-center font-bold text-lg">2</div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Book Your Seat</h3>
                <p className="text-gray-600">
                  Choose the ride that suits you best and secure your seat.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-[#00B2A9] text-white flex items-center justify-center font-bold text-lg">3</div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Enjoy Your Journey</h3>
                <p className="text-gray-600">
                  Meet your driver, travel to your destination, and save money.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">What Our Users Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <ThumbsUp className="h-5 w-5 text-[#00B2A9] mt-1 mr-3" />
                <div>
                  <p className="italic mb-4">
                    "I've been using SwiftRide for my daily commute for 3 months now. It's saved me money and I've met some amazing people on the way!"
                  </p>
                  <p className="font-semibold">- Sarah K.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <ThumbsUp className="h-5 w-5 text-[#00B2A9] mt-1 mr-3" />
                <div>
                  <p className="italic mb-4">
                    "As a driver, SwiftRide helps me offset my travel costs while doing my part for the environment. The platform is so easy to use!"
                  </p>
                  <p className="font-semibold">- Michael T.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact CTA */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Have questions or suggestions? We'd love to hear from you!
          </p>
          <Button className="bg-[#00B2A9] hover:bg-[#009B94]">
            <Mail className="mr-2 h-4 w-4" />
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
