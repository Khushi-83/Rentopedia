import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";

const About = () => {
  return (
    <div>
      {/* <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Rentopedia
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We are on a mission to make it easier for students to find their
              perfect home. With Rentopedia, you can say goodbye to brokers and
              the hassle of house hunting. We provide verified listings and a
              seamless experience.
            </p>
          </div>
        </div>
      </section> */}
      <section className=" grid md:grid-cols-2 md:grid-cols-reverse grid-cols-1 m-8 py-12 md:py-24 lg:py-32 border-t">
        <div>
          <img
            alt="Image"
            className="mx-auto aspect-w-16 aspect-h-9 rounded-xl object-cover object-center"
            height="600"
            src="/img4.jpg"
            width="1024"
          />
        </div>
        <div className="container grid items-center gap-4 px-4 md:px-6 text-center lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Rentopia?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Rentopedia provides a platform for students to connect with
              verified landlords. Our app offers a seamless experience, allowing
              users to search, filter, and book their rental with ease.
            </p>
          </div>
          <div className="mx-auto grid max-w-sm items-start gap-4 lg:max-w-4xl lg:grid-cols-2 md:gap-8">
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Verified Listings</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Access to trusted properties without any broker involvement.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Seamless Experience</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our platform offers a hassle-free way to find your perfect
                rental.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Easy Booking</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Students can book their accommodation with just a few clicks.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Real-time Chat</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Communicate with landlords directly through our in-app chat
                feature.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Welcome to Rentopia: Revolutionizing Rental Discoveries
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Simplify rental discoveries. Effortless navigation. Streamlined
              management. Secure payments. Instant booking.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            {/* <form className="flex space-x-2">
              <Input
                className="max-w-lg flex-1"
                placeholder="Enter your email"
                type="email"
              />
              <Button type="submit">Sign Up</Button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Sign up to get notified when we launch.
              <Link className="underline underline-offset-2" href="#">
                Terms & Conditions
              </Link>
            </p> */}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                New Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Rentopia -A Rented Hub
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Rentopia revolutionizes renting with intuitive design, diverse
                listings, and seamless user experience, benefiting tenants and
                property owners alike. Simplify your search today!
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <img
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src="/img5.jpg"
              width="550"
            />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Rentopia: Explore</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Discover a World of Rental Opportunities
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Simplicity</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Streamlined Rental Experience Made Easy
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Efficiency</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Optimizing Your Rental Journey.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
