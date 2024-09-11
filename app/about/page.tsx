import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { AccessibilityIcon, BadgeIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <NavBar />
      <div className="w-full bg-gray-100 dark:bg-gray-900 z-10">
        <main className="container mx-auto py-12 md:py-20 px-4 md:px-6">
          <section className="grid md:grid-cols-2 items-center gap-8 md:gap-12">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                Rentopia: A Rented Hub
              </h1>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight">
                About Our Student Housing Platform
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl">
                At our core, we&apos;re dedicated to simplifying the quest for
                affordable and cozy student housing. Through our platform,
                students effortlessly connect with verified PG/flat owners,
                ensuring a seamless search for their ideal home away from home.
                We understand the importance of comfort and affordability in a
                student&apos;s life, which is why we prioritize these aspects in
                every listing. With us, finding the perfect accommodation
                becomes stress-free, allowing students to focus on what truly
                matters - their education and overall well-being. Join us in
                revolutionizing the student housing experience, one comfortable
                dwelling at a time.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                alt="About"
                className="w-full h-full object-cover"
                height="400"
                src="/img.jpg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
          </section>
          <section className="mt-12 md:mt-20 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Our Story
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl">
                Our platform was founded by a group of students who struggled to
                find affordable and reliable housing during their time in
                college. We saw the need for a solution that would connect
                students with verified PG/flat owners and make the process of
                finding a place to live easier and more transparent.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Our Values
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <li className="flex items-start gap-4">
                  <AccessibilityIcon className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">Accessibility</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We believe that everyone should have access to affordable
                      and comfortable housing, regardless of their background or
                      financial situation.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <BadgeIcon className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">Verified Listings</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We carefully vet all of our PG/flat listings to ensure
                      that they meet our high standards for quality and safety.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <AccessibilityIcon className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">Transparency</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We believe in being upfront and honest about our services
                      and the properties we list, so that students can make
                      informed decisions.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <UserIcon className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">Community</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We strive to build a supportive community of students and
                      PG/flat owners who can connect and support each other.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Our Team
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-96">
                    <Image
                      alt="Team Member"
                      className="w-full h-full object-cover"
                      height="192"
                      width="192"
                      src="/megha.jpg"
                     
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold">Megha Kaushal</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Co-Founder & CEO
                    </p>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-96 ">
                  <Image
                      alt="Team Member"
                      className="w-full h-full object-cover top-12"
                      height="200"
                      width="200"
                      src="/khushi.jpg"
                     
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">Khushi Sinha</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Co-Founder & COO
                    </p>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-96">
                  <Image
                      alt="Team Member"
                      className="w-full h-full object-cover"
                      height="192"
                      width="192"
                      src="/riya.jpg"
                     
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">Riya Battu</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                    Co-Founder & CTO
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default page;
