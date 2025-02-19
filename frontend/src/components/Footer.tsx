import { Link } from "react-router-dom"
import { IndianRupee, RefreshCw  } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-zinc-900 pt-12 pb-6 text-zinc-300">
      <div className="container mx-auto px-4 flex flex-col items-center bg-zinc-900">
        {/* Happy Customers Banner */}
        <div className="text-center mb-12 w-full">
          <h2 className="text-4xl font-bold text-white">Over 1000 Happy Customers</h2>
        </div>

        {/* Main Footer Content */}
        <div className="w-full max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Need Help Section */}
            <div>
              <h3 className="text-red-500 font-bold mb-4">NEED HELP</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    Track Order
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    Returns & Refunds
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    My Account
                  </Link>
                </li>
              </ul>

              {/* Features */}
              <div className="mt-4 space-y-2 text-zinc-400">
                <div className="flex items-center gap-2">
                  <IndianRupee className="w-5 h-5" />
                  <span>COD Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <RefreshCw className="w-5 h-5" />
                  <span>30 Days Easy Returns</span>
                </div>
              </div>
            </div>

            {/* Company Section */}
            <div>
              <h3 className="text-red-500 font-bold mb-4">COMPANY</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    Gift Vouchers
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    Community Initiatives
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    Souled Army
                  </Link>
                </li>
              </ul>
            </div>

            {/* More Info Section */}
            <div>
              <h3 className="text-red-500 font-bold mb-4">MORE INFO</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    T&C
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    Sitemap
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Store Near Me Section */}
            <div>
              <h3 className="text-red-500 font-bold mb-4">STORE NEAR ME</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    Mumbai
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    Pune
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    Indore
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    Bengaluru
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                    View More
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* App Download Section */}
          <div className="text-center mb-8">
            <p className="text-zinc-400 mb-4">📱 EXPERIENCE THE SOULED STORE APP</p>
            <div className="flex justify-center gap-4">
              <Link to="#">
                <img
                  src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  className="h-[56px] w-auto"
                />
              </Link>
              <Link to="#">
                <img
                  src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-[39px] w-auto mt-2"
                />
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <span className="text-zinc-400">Follow Us:</span>
            <Link to="#" className="bg-blue-600 py-2 px-4 rounded-full text-white hover:bg-blue-700 transition-colors">
             facebook
            </Link>
            <Link to="#" className="bg-pink-600 py-2 px-4 rounded-full text-white hover:bg-pink-700 transition-colors">
              instagram
            </Link>
            <Link to="#" className="bg-black py-2 px-4 rounded-full text-white hover:bg-zinc-800 transition-colors">
              twitter
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="border-t border-zinc-800 pt-4 w-full">
            <button className="w-full flex justify-between items-center text-red-500 font-bold hover:text-red-400 transition-colors">
              NAVIGATION LINKS
              <span className="text-2xl">+</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

