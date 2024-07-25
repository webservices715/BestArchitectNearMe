import React from "react";
import { LuMailCheck } from "react-icons/lu";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { FaPhoneAlt } from "react-icons/fa";

function Contactus() {
  return (
    <section class="bg-white ">
      <div class="container px-6 md:px-14 py-12 mx-auto font-barlow">
        <div>
          <p class="font-medium text-red-500 ">Contact us</p>

          <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl ">
            Chat to our friendly team
          </h1>

          <p class="mt-3 text-gray-500 ">
            We’d love to hear from you. Please fill out this form or shoot us an
            email.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 md:gap-2 mt-10 lg:grid-cols-2">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <a href="mailto:hello@merakiui.com">
                <span class="inline-block p-3 text-red-500 rounded-full bg-red-100/80 ">
                  <LuMailCheck size={30} />
                </span>

                <h2 class="mt-4 text-base font-medium text-gray-800 ">Email</h2>
                <p class="mt-2 text-sm text-gray-500 ">
                  Our friendly team is here to help.
                </p>
                <p class="mt-2 text-sm text-red-500 ">hello@merakiui.com</p>
              </a>
            </div>

            <div>
              <a href="https://wa.me/15550000000">
                <span class="inline-block p-3 text-red-500 rounded-full bg-red-100/80 ">
                  <MdOutlineChatBubbleOutline size={30} />
                </span>

                <h2 class="mt-4 text-base font-medium text-gray-800 ">
                  Live chat
                </h2>
                <p class="mt-2 text-sm text-gray-500 ">
                  Our friendly team is here to help.
                </p>
                <p class="mt-2 text-sm text-red-500 ">Start new chat</p>
              </a>
            </div>

            <div>
                <span class="inline-block p-3 text-red-500 rounded-full bg-red-100/80 ">
                  <SlLocationPin size={30} />
                </span>

                <h2 class="mt-4 text-base font-medium text-gray-800 ">
                  Office
                </h2>
                <p class="mt-2 text-sm text-gray-500 ">
                  Come say hello at our office HQ.
                </p>
                <p class="mt-2 text-sm text-red-500 ">
                  100 Smith Street Collingwood VIC 3066 AU
                </p>
            </div>

            <div>
              <a href="tel:+15550000000">
                <span class="inline-block p-3 text-red-500 rounded-full bg-red-100/80 ">
                  <FaPhoneAlt size={30} />
                </span>

                <h2 class="mt-4 text-base font-medium text-gray-800 ">Phone</h2>
                <p class="mt-2 text-sm text-gray-500 ">
                  Mon-Fri from 8am to 5pm.
                </p>
                <p class="mt-2 text-sm text-red-500 ">+1 (555) 000-0000</p>
              </a>
            </div>
          </div>

          <div class="p-4 py-6 rounded-lg bg-gray-50  md:p-8">
            <form>
              <div class="-mx-2 md:items-center md:flex">
                <div class="flex-1 px-2">
                  <label class="block mb-2 text-sm text-gray-600 ">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John "
                    class="block w-full px-5 py-2.5 mt-2 text-gray-700  bg-white border  rounded-lg placeholder-gray-600   border-gray-700 focus:border-red-400  focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div class="flex-1 px-2 mt-4 md:mt-0">
                  <label class="block mb-2 text-sm text-gray-600 ">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    class="block w-full px-5 py-2.5 mt-2 text-gray-700  bg-white border  rounded-lg placeholder-gray-600   border-gray-700 focus:border-red-400  focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div class="mt-4">
                <label class="block mb-2 text-sm text-gray-600 ">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="johndoe@example.com"
                  class="block w-full px-5 py-2.5 mt-2 text-gray-700  bg-white border  rounded-lg placeholder-gray-600   border-gray-700 focus:border-red-400  focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div class="mt-4">
                <label class="block mb-2 text-sm text-gray-600 ">Phone</label>
                <input
                  type="number"
                  placeholder="9898847548"
                  class="block w-full px-5 py-2.5 mt-2 text-gray-700  bg-white border  rounded-lg placeholder-gray-600   border-gray-700 focus:border-red-400  focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              
              <div class="w-full mt-4">
                <label class="block mb-2 text-sm text-gray-600 ">Message</label>
                <textarea
                  class="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700  bg-white border  rounded-lg md:h-56 placeholder-gray-600   border-gray-700 focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Message"
                ></textarea>
              </div>

              <button class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white  capitalize transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contactus;
